/*
 * client.js - v0.3.1
 * Compiled Sun Nov 04 2018 22:50:36 GMT+0800 (CST)
 * Copyright (c) 2018 www.hightopo.com
 */

! function(q, V) {
	"object" == typeof exports && "undefined" != typeof module ? module.exports = V() : "function" == typeof define && define.amd ? define(V) : q.hteditor = V()
}(this, function() {
	"use strict";

	function q(q, V, n) {
		n.style.cursor = "ew-resize";
		var S = n.innerHTML.charAt(0),
			_ = V.querySelector("input.color_" + S),
			x = function(V) {
				V.preventDefault();
				var n = ("A" === S ? parseFloat(_.value) : parseInt(_.value)) || 0,
					x = ht.Default.getClientPoint(V).x,
					O = function(V) {
						V.preventDefault();
						var O = ht.Default.getClientPoint(V).x - x,
							w = void 0;
						"A" === S ? (w = n + .01 * O, w > 1 && (w = 1), w < 0 && (w = 0), _.value = w.toFixed(2)) : (w = n + 1 * O, w > 255 && (w = 255), w < 0 && (w = 0), _.value = w), q.updateInputChange()
					};
				window.addEventListener("mousemove", O, !1), window.addEventListener("touchmove", O, !1);
				var w = function(q) {
					q.preventDefault(), window.removeEventListener("mousemove", O, !1), window.removeEventListener("touchmove", O, !1), window.removeEventListener("mouseup", w, !1), window.removeEventListener("touchend", w, !1)
				};
				window.addEventListener("mouseup", w, !1), window.addEventListener("touchend", w, !1)
			};
		n.addEventListener("mousedown", x, !1), n.addEventListener("touchstart", x, !1)
	}

	function V(q) {
		var V = new RegExp("(^|&)" + q + "=([^&]*)(&|$)"),
			n = window.location.search.substr(1).match(V);
		return null != n ? decodeURIComponent(n[2]) : null
	}

	function n(q) {
		return ht.Default.clone(q)
	}

	function S(q) {
		return parseFloat(q.toFixed(ht.Default.numberDigits))
	}

	function _(q, V) {
		if(null != q) return V || !hV.config.traceMissingI18n || hV.customStrings[q] || hV.strings[q] || console.log("i18n missing:[" + q + "]"), V ? hV.customStrings[q] || hV.strings[q] : hV.customStrings[q] || hV.strings[q] || q
	}

	function x(q, V) {
		var n = q.indexOf(V);
		n >= 0 && q.splice(n, 1)
	}

	function O(q) {
		return ht.Default.isEmptyObject(q)
	}

	function w(q) {
		return q ? lq(q) ? q : q.__ht__ || q.toString() : ""
	}

	function K(q) {
		var V = w(q),
			n = V.indexOf("{") + 1,
			S = V.lastIndexOf("}");
		for(V = V.substring(n, S); V.startsWith("\n");) V = V.substr(1);
		for(; V.endsWith("\n");) V = V.substring(0, V.length - 1);
		return V
	}

	function g(q) {
		var V = q.indexOf("function");
		if(q && !(V < 0)) {
			var n = void 0,
				S = q.indexOf("{") + 1,
				_ = q.lastIndexOf("}"),
				x = q.indexOf("(") + 1,
				O = q.indexOf(")");
			return S && _ && x && O && (n = new Function(q.substring(x, O), q.substring(S, _)), n.__ht__ = q.substr(V)), n
		}
	}

	function A(q, V) {
		if("s" === q) return function(q) {
			return q.s(V)
		};
		if("a" === q) return function(q) {
			return q.a(V)
		};
		if("p" === q) {
			var n = function() {
				var q = ht.Default.getter(V);
				return {
					v: function(V) {
						if(V[q]) return V[q]()
					}
				}
			}();
			if("object" == typeof n) return n.v
		}
	}

	function l(q, V) {
		if("s" === q) return function(q, n) {
			return q.s(V, n)
		};
		if("a" === q) return function(q, n) {
			return q.a(V, n)
		};
		if("p" === q) {
			var n = function() {
				var q = ht.Default.setter(V);
				return {
					v: function(V, n) {
						if(V[q]) return V[q](n)
					}
				}
			}();
			if("object" == typeof n) return n.v
		}
	}

	function Z(q) {
		return 37 === q.keyCode
	}

	function z(q) {
		return 38 === q.keyCode
	}

	function H(q) {
		return 39 === q.keyCode
	}

	function i(q) {
		return 40 === q.keyCode
	}

	function N(q) {
		return 13 === q.keyCode
	}

	function U(q) {
		return 27 === q.keyCode
	}

	function j(q) {
		return ht.Default.isDelete(q)
	}

	function p(q) {
		return ht.Default.isLeftButton(q)
	}

	function y(q) {
		return ht.Default.isDoubleClick(q)
	}

	function X(q, V) {
		ht.Default.startDragging(q, V)
	}

	function e(q) {
		return ht.Default.getClientPoint(q)
	}

	function b(q) {
		return ht.Default.getTargetElement(q)
	}

	function c(q) {
		return ht.Default.getPagePoint(q)
	}

	function J() {
		return ht.Default.getWindowInfo()
	}

	function C(q, V) {
		return ht.Default.getDistance(q, V)
	}

	function G() {
		return ht.Default.unionPoint.apply(this, arguments)
	}

	function v(q) {
		return ht.Default.getImageMap()[q] ? (delete ht.Default.getImageMap()[q], !0) : !!ht.Default.getCompTypeMap()[q] && (delete ht.Default.getCompTypeMap()[q], !0)
	}

	function u(q, V, n) {
		return ht.Default.getPosition(q, V, n)
	}

	function W(q, V) {
		return ht.Default.stringify(q, V)
	}

	function d(q) {
		return ht.Default.parse(q)
	}

	function P(q) {
		if(!q) return "";
		var V = q.lastIndexOf(".");
		return V === -1 ? q : q.substr(0, V)
	}

	function E(q) {
		return q = q.replace(/^.*[\\\/]/, ""), P(q)
	}

	function Y(q, V, n, S, _) {
		ht.Default.layout(q, V, n, S, _)
	}

	function M(q, V, n, S) {
		ht.Default.setCanvas(q, V, n, S)
	}

	function L(q) {
		ht.Default.removeHTML(q)
	}

	function Q(q, V, n) {
		ht.Default.xhrLoad(q, V, n)
	}

	function F(q) {
		return ht.Default.isShiftDown(q)
	}

	function a(q) {
		return ht.Default.isCtrlDown(q)
	}

	function h(q, V) {
		return ht.Default.createView(q, V)
	}

	function t(q) {
		return ht.Default.createCanvas(q)
	}

	function s(q, V) {
		return ht.Default.createDiv(V, q)
	}

	function m(q, V) {
		return ht.Default.unionRect(q, V)
	}

	function D(q, V, n, S, _, x, O, w, K, g) {
		return ht.Default.drawText(q, V, n, S, _, x, O, w, K, g)
	}

	function T(q, V, n, S, _, x, O, w, K, g) {
		ht.Default.drawStretchImage(q, V, n, S, _, x, O, w, K, g)
	}

	function f(q, V, n, S, _, x, O) {
		ht.Default.drawBorder(q, V, n, S, _, x, O)
	}

	function B(q, V, n, S, _, x) {
		var O = q.getContext("2d");
		return O.save(), V = V || 0, n = n || 0, S = S || 1, x = x || ht.Default.devicePixelRatio, O.translate(V * x, n * x), S *= x, 1 !== S && O.scale(S, S), _ && (O.beginPath(), O.rect(_.x, _.y, _.width, _.height), O.clip(), O.clearRect(_.x, _.y, _.width, _.height)), O
	}

	function I(q, V) {
		var n = q.prototype,
			S = ht.Default.getMSMap();
		for(var _ in V) S[_] && S.hasOwnProperty(_) ? S[_](n, V) : n[_] = V[_]
	}

	function o(q, V) {
		V[q._id] = q, q.eachChild(function(q) {
			V[q._id] = q, o(q, V)
		})
	}

	function r(q) {
		ht.Default.preventDefault(q)
	}

	function k(q) {
		return /^displays/.test(q)
	}

	function R(q) {
		return /^symbols/.test(q)
	}

	function qq(q) {
		return /^components/.test(q)
	}

	function Vq(q) {
		return /^scenes/.test(q)
	}

	function nq(q) {
		return /^models/.test(q)
	}

	function Sq(q) {
		return /^assets/.test(q)
	}

	function _q(q) {
		return /\.(png|jpg|gif|jpeg|bmp|svg|dxf|mp4|mp3)$/i.test(q)
	}

	function xq(q) {
		return /\.json$/i.test(q)
	}

	function Oq(q) {
		return /\.mp3$/i.test(q)
	}

	function wq(q) {
		return /\.mp4$/i.test(q)
	}

	function Kq(q) {
		return /\.svg$/i.test(q)
	}

	function gq(q) {
		return /\.dxf$/i.test(q)
	}

	function Aq(q) {
		return q.substring(0, q.length - 5) + ".png"
	}

	function lq(q) {
		return "string" == typeof q || q instanceof String
	}

	function Zq(q) {
		return q && "object" == typeof q
	}

	function zq(q) {
		return "function" == typeof q
	}

	function Hq(q) {
		return q instanceof Array
	}

	function iq(q, V) {
		var n = q.getPosition().x,
			S = q.getPosition().y,
			_ = q.getWidth(),
			x = q.getHeight(),
			O = [n - _ * q.getAnchor().x, S - x * q.getAnchor().y, _, x],
			w = q.a("rect");
		bq(V, "rect", w, O, void 0)
	}

	function Nq(q, V) {
		var n = q.getRotation(),
			S = q.a("rotation");
		bq(V, "rotation", S, n, 0)
	}

	function Uq(q, V) {
		var n = q.getAnchor().x,
			S = q.a("anchorX");
		bq(V, "anchorX", S, n, .5), n = q.getAnchor().y, S = q.a("anchorY"), bq(V, "anchorY", S, n, .5)
	}

	function jq(q, V) {
		var n = q.getScale().x,
			S = q.a("scaleX");
		bq(V, "scaleX", S, n, 1), n = q.getScale().y, S = q.a("scaleY"), bq(V, "scaleY", S, n, 1)
	}

	function pq(q, V) {
		var n = q.isClosePath(),
			S = q.a("closePath");
		bq(V, "closePath", S, n, !1)
	}

	function yq(q, V, S, _, x) {
		4 === arguments.length && (x = ht.Style[S]);
		var O = n(q.s(S)),
			w = q.a(S);
		bq(V, _, w, O, x)
	}

	function Xq(q, V) {
		var n = q.getDisplayName(),
			S = q.a("displayName");
		bq(V, "displayName", S, n, void 0)
	}

	function eq(q, V) {
		if(Hq(q) && Hq(V)) {
			if(q.length === V.length) {
				for(var n = 0; n < q.length; n++)
					if(!eq(q[n], V[n])) return !1;
				return !0
			}
			return !1
		}
		if(Zq(q) && Zq(V)) {
			var S = Object.keys(q);
			if(S.length === Object.keys(V).length) {
				for(var _ = 0; _ < S.length; _++) {
					var x = S[_];
					if(!eq(q[x], V[x])) return !1
				}
				return !0
			}
			return !1
		}
		return q === V
	}

	function bq(q, V, n, S, _) {
		n ? q[V] = {
			func: n,
			value: S
		} : eq(S, _) || void 0 === S || (q[V] = S)
	}

	function cq(q, V, n, S) {
		Cq(q, "2d.visible", V.visible), Cq(q, "2d.selectable", V.selectable), Cq(q, "2d.movable", V.movable), Cq(q, "2d.editable", V.editable), Cq(q, "comp.pixelPerfect", V.pixelPerfect, !1), Cq(q, "opacity", V.opacity, 1), Cq(q, "clip.percentage", V.clipPercentage, 1), Cq(q, "clip.direction", V.clipDirection, "top"), q instanceof ht.Text || (Cq(q, "shadow", V.shadow, !1), Cq(q, "select.color", V.shadowColor, ht.Color.highlight), Cq(q, "shadow.blur", V.shadowBlur, 6), Cq(q, "shadow.offset.x", V.shadowOffsetX, 3), Cq(q, "shadow.offset.y", V.shadowOffsetY, 3)), Gq(q, V), uq(q, V), Wq(q, V), vq(q, V), q instanceof ht.Shape && !V.rect || Pq(q, V, n, S);
		var _ = CV.customProperties.comp;
		_ && _.length && _.forEach(function(n) {
			Cq(q, n.property, V[n.property], n.defaultValue)
		}), $V.forEach(function(n) {
			q.a(n, V[n])
		}), q.a("renderHTML", V.renderHTML)
	}

	function Jq(q, V) {
		yq(q, V, "2d.visible", "visible"), yq(q, V, "2d.selectable", "selectable"), yq(q, V, "2d.movable", "movable"), yq(q, V, "2d.editable", "editable"), yq(q, V, "comp.pixelPerfect", "pixelPerfect", !1), yq(q, V, "opacity", "opacity", 1), yq(q, V, "clip.percentage", "clipPercentage", 1), yq(q, V, "clip.direction", "clipDirection", "top"), q instanceof ht.Text || (yq(q, V, "shadow", "shadow", !1), yq(q, V, "select.color", "shadowColor", ht.Color.highlight), yq(q, V, "shadow.blur", "shadowBlur", 6), yq(q, V, "shadow.offset.x", "shadowOffsetX", 3), yq(q, V, "shadow.offset.y", "shadowOffsetY", 3)), Xq(q, V), Uq(q, V), jq(q, V), Nq(q, V), q instanceof ht.Shape && !q.a("rect") || iq(q, V);
		var n = CV.customProperties.comp;
		n && n.length && n.forEach(function(n) {
			yq(q, V, n.property, n.property, n.defaultValue)
		}), $V.forEach(function(n) {
			q.a(n) && (V[n] = q.a(n))
		}), q.a("renderHTML") && (V.renderHTML = q.a("renderHTML"))
	}

	function Cq(q, V, S, _) {
		3 === arguments.length && (_ = ht.Style[V]);
		var x = Eq(S);
		void 0 === x && (x = _), q.s(V, n(x)), q.a(V, Yq(S))
	}

	function Gq(q, V) {
		q.setDisplayName(Eq(V.displayName), void 0), q.a("displayName", Yq(V.displayName))
	}

	function vq(q, V) {
		q.setRotation(Eq(V.rotation, 0)), q.a("rotation", Yq(V.rotation))
	}

	function uq(q, V) {
		var n = Eq(V.anchorX, .5),
			S = Eq(V.anchorY, .5);
		.5 === n && .5 === S || q.setAnchor(n, S), q.a("anchorX", Yq(V.anchorX)), q.a("anchorY", Yq(V.anchorY))
	}

	function Wq(q, V) {
		var n = Eq(V.scaleX, 1),
			S = Eq(V.scaleY, 1);
		q.setScale(n, S), q.a("scaleX", Yq(V.scaleX)), q.a("scaleY", Yq(V.scaleY))
	}

	function dq(q, V) {
		q.setClosePath(Eq(V.closePath, !1)), q.a("closePath", Yq(V.closePath))
	}

	function Pq(q, V, n, S) {
		var _ = Eq(V.rect),
			x = Eq(V.relative);
		_ || (_ = [0, 0, n, S], x = !1);
		var O = _.length;
		if(4 === O) _ = {
			x: _[0],
			y: _[1],
			width: _[2],
			height: _[3]
		}, x && (_.x *= n, _.y *= S, _.width *= n, _.height *= S);
		else if(3 === O) {
			var w = _[0];
			_ = {
				width: _[1],
				height: _[2]
			}, x && (_.width *= n, _.height *= S), "object" == typeof w ? w.length && (w = {
				x: w[0],
				y: w[1]
			}) : w = u(w, {
				x: 0,
				y: 0,
				width: n,
				height: S
			}, _), _.x = w.x - _.width * q.getAnchor().x, _.y = w.y - _.height * q.getAnchor().y
		}
		var K = Eq(V.offsetX);
		K && (_.x += K), K = Eq(V.offsetY), K && (_.y += K), _.width < 0 || _.height < 0 ? q.p(_.x, _.y) : q.setRect(_), q.a("rect", Yq(V.rect))
	}

	function Eq(q, V) {
		var n = void 0;
		return n = Zq(q) && q.func ? q.value : q, void 0 === n && (n = V), n
	}

	function Yq(q) {
		if(Zq(q) && q.func) return q.func
	}

	function Mq(q) {
		if(Hq(q)) {
			for(var V = new ht.List, n = q.length, S = 0; S < n; S += 2) V.add({
				x: q[S],
				y: q[S + 1]
			});
			q = V
		}
		return q
	}

	function Lq(q) {
		if(q instanceof ht.List && (q = q.toArray()), Hq(q)) {
			for(var V = [], n = 0; n < q.length; n++) {
				var S = q[n];
				V.push(S.x, S.y)
			}
			q = V
		}
		return q
	}

	function Qq(q) {
		var V = 16;
		return {
			width: V,
			height: V,
			comps: [{
				type: function(n, S, _, x, O) {
					var w = ht.Default.getImage(q.graphView.getImage(x));
					if(w && w.snapshotURL) w = ht.Default.getImage(w.snapshotURL), w && T(n, w, "uniform", S.x, S.y, S.width, S.height, x, O);
					else {
						var K = w && w.boundExtend ? x.getRect() : q.graphView.getDataUIBounds(x);
						if(K && K.width && K.height) {
							n.save();
							var g = Math.min(1, V / Math.max(K.width, K.height));
							n.translate(-K.x * g + (V - K.width * g) / 2, -K.y * g + (V - K.height * g) / 2), n.scale(g, g), q.graphView.drawData(n, x), n.restore()
						}
					}
				}
			}]
		}
	}

	function Fq(q, V) {
		var n = 16,
			S = q.graphView.getEdgeInfo(V);
		if(!S) return xn;
		var _ = S.edgeTypeInfo,
			x = void 0,
			O = void 0;
		if(!S.type || S.points) {
			S.sourcePoint.x, S.sourcePoint.y, S.targetPoint.x, S.targetPoint.y;
			S.type ? (x = new ht.List(S.sourcePoint), x.addAll(S.points), x.add(S.targetPoint), O = S.segments) : S.looped ? (x = wn, O = Kn) : x = S.center ? [S.c1, S.sourcePoint, S.targetPoint, S.c2] : [S.sourcePoint, S.targetPoint]
		} else _ && (x = _.points, O = _.segments);
		var w = G(x);
		if(!w || !w.width && !w.height) return xn;
		var K = function() {
			var q = Math.max(1, Math.max(w.width, w.height) / n),
				V = [],
				_ = (n - w.width / q) / 2,
				K = (n - w.height / q) / 2;
			x instanceof ht.List && (x = x.toArray()), x.forEach(function(n) {
				V.push((n.x - w.x) / q + _, (n.y - w.y) / q + K)
			});
			var g = O ? O.toArray() : null;
			return {
				v: {
					width: n,
					height: n,
					comps: [{
						type: "shape",
						points: V,
						segments: g,
						borderWidth: 1,
						borderColor: S.color,
						borderCap: S.cap,
						borderJoin: S.join
					}]
				}
			}
		}();
		return "object" == typeof K ? K.v : void 0
	}

	function aq(q) {
		var V = 16,
			n = G(q.getPoints());
		if(n && (n.width || n.height)) {
			var S = function() {
				var S = Math.max(1, Math.max(n.width, n.height) / V),
					_ = [],
					x = (V - n.width / S) / 2,
					O = (V - n.height / S) / 2;
				q.getPoints().each(function(q) {
					_.push((q.x - n.x) / S + x, (q.y - n.y) / S + O)
				});
				var w = q.getSegments() ? q.getSegments().toArray() : null;
				return {
					v: {
						width: V,
						height: V,
						comps: [{
							type: "shape",
							points: _,
							segments: w,
							rotation: q.getRotation(),
							background: q.s("shape.background"),
							repeatImage: q.s("shape.repeat.image"),
							borderWidth: q.s("shape.border.width") ? 1 : 0,
							borderColor: q.s("shape.border.color"),
							borderCap: q.s("shape.border.cap"),
							borderJoin: q.s("shape.border.join"),
							gradient: q.s("shape.gradient"),
							gradientColor: q.s("shape.gradient.color"),
							closePath: q.isClosePath()
						}]
					}
				}
			}();
			if("object" == typeof S) return S.v
		}
		return xn
	}

	function hq(q) {
		return ht.Default.isInput(q)
	}

	function $q(q, V) {
		var n = arguments.length <= 2 || void 0 === arguments[2] ? {} : arguments[2],
			S = n.nullable,
			x = void 0 === S || S,
			O = n.trim,
			w = void 0 !== O && O,
			K = n.cancellable,
			g = void 0 === K || K,
			A = n.width,
			l = void 0 === A ? 300 : A,
			Z = n.height,
			z = void 0 === Z ? 120 : Z,
			H = n.maxLength,
			i = void 0 === H ? -1 : H,
			N = arguments[3],
			U = new aV;
		U.addRow([{
			id: "input",
			textField: {
				text: V
			}
		}], [.1]);
		var j = new FV,
			p = [],
			y = null,
			X = null;
		y = function() {
			var q = U.v("input");
			return w && q && q.trim(), x !== !1 || q ? i > 0 && q && q.length > i ? void tq(null, _("editor.inputmax"), function() {}) : (N(q, "ok"), void j.hide()) : void tq(null, _("editor.inputempty"), function() {})
		}, p.push({
			label: _("editor.ok"),
			action: y
		}), g && (X = function() {
			N(V, "cancel"), j.hide()
		}, p.push({
			label: _("editor.cancel"),
			action: X
		})), j.setConfig({
			title: q,
			draggable: !0,
			width: l,
			height: z,
			contentPadding: 10,
			content: U,
			buttons: p,
			buttonsAlign: "right"
		}), j.$49$ = X, j.$48$ = y, j.show(), U.getViewById("input").getElement()._ignore = !0, U.getViewById("input").setFocus()
	}

	function tq(q, V, n, S) {
		var x = arguments.length <= 4 || void 0 === arguments[4] ? 300 : arguments[4],
			O = [],
			w = void 0,
			K = void 0;
		n && (w = function() {
			g.hide(), n()
		}, O.push({
			label: _("editor.ok"),
			action: w
		})), S && (K = function() {
			g.hide(), S()
		}, O.push({
			label: _("editor.cancel"),
			action: K
		}));
		var g = new FV({
			title: q || _("editor.prompt"),
			contentPadding: 20,
			width: x,
			draggable: !0,
			content: "<p>" + V + "</p>",
			buttons: O
		});
		g.$49$ = K || w, g.$48$ = w, g.show()
	}

	function sq(q, V, n, S) {
		var _ = {
				unfocusable: !0,
				id: q,
				toolTip: V
			},
			x = ht.Default.getImage(n),
			O = x ? x.width : 16,
			w = x ? x.height : 16;
		return _.icon = {
			width: O + 8,
			height: w + 8,
			fitSize: !!x && x.fitSize,
			comps: [{
				type: "rect",
				background: {
					func: function(q, V) {
						return V.getCurrentItem() === _ ? hV.config.color_hover : null
					}
				},
				rect: [0, 0, O + 8, w + 8]
			}, {
				type: "image",
				name: n,
				color: {
					func: function(q, V) {
						return S && S() ? hV.config.color_select : hV.config.color_dark
					}
				},
				rect: [4, 4, O, w]
			}]
		}, _
	}

	function mq(q, V) {
		var n = ht.Default.createDiv(!0);
		return n.style.font = ht.Default.labelFont, n.style.color = ht.Default.labelColor, n.style.paddingLeft = "4px", n.style.lineHeight = ht.Default.widgetRowHeight + "px", n.style.whiteSpace = "nowrap", n.innerHTML = q, V && (n.style.textAlign = V), n
	}

	function Dq(q, V, n, S) {
		var _ = new ht.widget.Button;
		return _.setLabel(q), _.setLabelColor(ht.Default.labelColor), _.setLabelSelectColor(hV.config.color_select), _.setIcon(n), _.setBackground(null), _.setBorderColor(null), S && (_.onClicked = S), V && (_.setToolTip(V), _.enableToolTip()), _.getCurrentBackground = function() {
			return this._hover || this.isPressed() ? hV.config.color_hover : null
		}, _.getCurrentBorderColor = function() {
			return this.isSelected() ? hV.config.color_select : null
		}, _.getView().addEventListener("mouseenter", function() {
			_.isDisabled() || (_._hover = !0, _.iv())
		}, !1), _.getView().addEventListener("mouseleave", function() {
			_.isDisabled() || (_._hover = !1, _.iv())
		}, !1), _
	}

	function Tq(q, V) {
		var n = ht.Default.getImage(q);
		if(!n) throw q;
		var S = {
				width: n.width,
				height: n.height,
				fitSize: n.fitSize,
				comps: [{
					type: "image",
					name: q,
					color: {
						func: function() {
							return V && V() ? hV.config.color_select : hV.config.color_dark
						}
					}
				}]
			},
			_ = q + ".state";
		return ht.Default.setImage(_, S), _
	}

	function fq(q, V, n) {
		var S = new FileReader;
		S.onloadend = function(q) {
			V(q.target.result)
		}, n ? S.readAsDataURL(q) : S.readAsText(q)
	}

	function Bq(q, V) {
		V && ! function() {
			V === document.body && (document.title = _("editor.title"), document.body.style.overflow = "hidden", document.body.style.position = "fixed", document.body.style.width = "100%"), V.appendChild(q.getView());
			var n = q.getView().style;
			n.left = "0px", n.top = "0px", setInterval(function() {
				if(q.getView() !== (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement)) {
					var S = void 0,
						_ = void 0;
					V === document.body ? (S = document.documentElement.clientWidth, window.innerWidth && window.innerWidth < S && (S = window.innerWidth), _ = document.documentElement.clientHeight, window.innerHeight && window.innerHeight < _ && (_ = window.innerHeight)) : (S = V.clientWidth, _ = V.clientHeight), S === q._oldWidth && _ === q._oldHeight || (q._oldWidth = S, q._oldHeight = _, n.width = S + "px", n.height = _ + "px", q.iv())
				}
			}, 500)
		}()
	}

	function Iq(q) {
		if(q)
			for(var V = 0; V < q.length; V++) null == q[V] && (q[V] = 0)
	}

	function oq(q) {
		if(q)
			for(var V = ht.Color.chart, n = 0; n < q.length; n++) null == q[n] && (q[n] = V[n % V.length])
	}

	function rq(q, V) {
		V = void 0 === V ? q ? q.length : 0 : V;
		for(var n = new Array(V), S = 0; S < V; S++) n[S] = q ? q[S] : void 0;
		return n
	}

	function kq(q) {
		if(q instanceof ht.graph.GraphView) {
			var V = q.getContentRect(),
				n = Math.max(V.width, V.height),
				S = Math.min(1, hV.config.imageSize / n);
			return n < 3 && (S = hV.config.imageSize / n), q.toDataURL(void 0, void 0, S)
		}
		var _ = ht.Default.getImage(q),
			x = Math.max(_.width, _.height),
			O = Math.min(1, hV.config.imageSize / x);
		return ht.Default.toCanvas(q, _.width * O, _.height * O).toDataURL("image/png", 1)
	}

	function Rq(q, V, n) {
		if(q instanceof Array)
			for(var S = 0, _ = q.length; S < _; S++) Rq(q[S], V, n);
		else if(q instanceof Object)
			for(var x in q)
				if(q.hasOwnProperty(x)) {
					var O = q[x];
					if(!Zq(O)) continue;
					if(lq(O.func) && nn.test(O.func)) {
						var w = O.func.slice(5);
						V && void 0 === V[w] && (V[w] = x), n && void 0 === n[w] && (n[w] = O.value)
					} else Rq(O, V, n)
				}
	}

	function qV(q) {
		var V = {
				clazz: this.getClass(),
				name: this.getName(),
				displayName: this.getDisplayName(),
				toolTip: this.getToolTip(),
				tag: this.getTag(),
				icon: this.getIcon(),
				layer: this.getLayer(),
				parent: q.$58$(this.getParent()),
				a: {},
				s: {},
				dataBindings: this.getDataBindings() ? W(this.getDataBindings()) : null
			},
			S = this.getStyleMap();
		for(var _ in S) V.s[_] = n(this.s(_));
		var x = this.getAttrObject();
		for(var O in x) V.a[O] = n(this.a(O));
		return V
	}

	function VV(q, V) {
		var S = new q.clazz;
		if(hV.config.cloneName && S.setName(q.name), hV.config.cloneDisplayName && S.setDisplayName(q.displayName), hV.config.cloneToolTip && S.setToolTip(q.toolTip), hV.config.cloneTag && S.setTag(q.tag), hV.config.cloneIcon && S.setIcon(q.icon), hV.config.cloneLayer && S.setLayer(q.layer), hV.config.cloneStyle)
			for(var _ in q.s) S.s(_, n(q.s[_]));
		if(hV.config.cloneAttr)
			for(var x in q.a) S.a(x, n(q.a[x]));
		return hV.config.cloneDataBindings && q.dataBindings && S.setDataBindings(d(q.dataBindings)), S
	}

	function nV(q, V, n) {
		var S = hV.config.cloneParent ? V.$50$(q.parent, n) : void 0;
		this.setParent(S ? S : V.getCurrentSubGraph())
	}

	function SV(q) {
		var V = qV.call(this, q);
		return V.rotation = this.getRotation(), V.position = this.p(), V.size = {
			width: this._width,
			height: this._height
		}, V.scale = this.getScale(), V.anchor = this.getAnchor(), V.image = this.getImage(), V.host = q.$58$(this.getHost()), V
	}

	function _V(q, V) {
		var n = VV(q, V);
		return hV.config.cloneRotation && n.setRotation(q.rotation), hV.config.clonePosition && n.setPosition(q.position), hV.config.cloneSize && n.setSize(q.size), hV.config.cloneScale && n.setScale(q.scale), .5 === q.anchor.x && .5 === q.anchor.y || hV.config.cloneAnchor && n.setAnchor(q.anchor), hV.config.cloneImage && n.setImage(q.image), n
	}

	function xV(q, V, n) {
		nV.call(this, q, V, n), hV.config.cloneHost && this.setHost(V.$50$(q.host, n))
	}

	function OV(q) {
		var V = qV.call(this, q);
		return V.source = q.$58$(this.getSource()), V.target = q.$58$(this.getTarget()), V
	}

	function wV(q, V) {
		var n = VV(q, V);
		return n
	}

	function KV(q, V, n) {
		nV.call(this, q, V, n), hV.config.cloneSource && this.setSource(V.$50$(q.source, n)), hV.config.cloneTarget && this.setTarget(V.$50$(q.target, n))
	}

	function gV(q) {
		var V = SV.call(this, q);
		return V.expanded = this.isExpanded(), V
	}

	function AV(q, V) {
		var n = _V(q, V);
		return hV.config.cloneExpanded && n.setExpanded(q.expanded), n
	}

	function lV(q) {
		var V = SV.call(this, q);
		return V.points = n(this.getPoints()), V.segments = n(this.getSegments()), V.thickness = this.getThickness(), V.closePath = this.isClosePath(), V
	}

	function ZV(q, V) {
		var S = _V(q, V);
		return hV.config.clonePoints && S.setPoints(n(q.points)), hV.config.cloneSegments && S.setSegments(n(q.segments)), hV.config.cloneThickness && S.setThickness(q.thickness), hV.config.cloneClosePath && S.setClosePath(q.closePath), S
	}

	function zV(q) {
		var V = SV.call(this, q);
		return V.clickThroughEnabled = this.isClickThroughEnabled(), V.syncSize = this.isSyncSize(), V
	}

	function HV(q, V) {
		var n = _V(q, V);
		return hV.config.cloneClickThroughEnabled && n.setClickThroughEnabled(q.clickThroughEnabled), hV.config.cloneSyncSize && n.setSyncSize(q.syncSize), n
	}

	function iV(q) {
		var V = zV.call(this, q);
		return V.ref = this.getRef(), V
	}

	function NV(q, V) {
		var n = HV(q, V);
		return hV.config.cloneRef && n.setRef(q.ref), n
	}

	function UV(q) {
		if(!(q instanceof ht.Node)) return null;
		if(q instanceof ht.Group || q instanceof ht.Grid || q instanceof ht.Block) return null;
		var V = void 0;
		if(q instanceof Nn) V = {
			type: "clip",
			points: n(q.getPoints()),
			segments: n(q.getSegments()),
			closePath: q.isClosePath()
		};
		else if(q instanceof Un) V = {
			type: "restore"
		};
		else if(q instanceof ht.Shape) V = {
			type: "shape",
			points: n(q.getPoints()),
			segments: n(q.getSegments()),
			closePath: q.isClosePath()
		};
		else if(q instanceof ht.Text) V = {
			type: "text",
			text: q.s("text"),
			align: q.s("text.align"),
			vAlign: q.s("text.vAlign"),
			color: q.s("text.color"),
			font: q.s("text.font"),
			shadow: q.s("text.shadow"),
			shadowColor: q.s("text.shadow.color"),
			shadowBlur: q.s("text.shadow.blur"),
			shadowOffsetX: q.s("text.shadow.offset.x"),
			shadowOffsetY: q.s("text.shadow.offset.y")
		};
		else if(q instanceof ht.Node) {
			var S = q.s("shape");
			S ? (V = {
				type: "node_shape",
				shape: q.s("shape")
			}, "rect" === S ? V.depth = q.s("shape.depth") : "roundRect" === S ? V.polygonSide = q.s("shape.corner.radius") : "polygon" === S ? V.polygonSide = q.s("shape.polygon.side") : "arc" === S && (V.arcFrom = q.s("shape.arc.from"), V.arcTo = q.s("shape.arc.to"), V.arcClose = q.s("shape.arc.close"), V.arcOval = q.s("shape.arc.oval"))) : q.getImage() && (V = {
				type: "node_image",
				image: q.getImage(),
				stretch: q.s("image.stretch"),
				color: q.s("body.color")
			})
		}
		return V && (V.visible = q.s("2d.visible"), V.displayName = q.getDisplayName(), V.x = q.getPosition().x, V.y = q.getPosition().y, V.anchorX = q.getAnchor().x, V.anchorY = q.getAnchor().y, V.scaleX = q.getScale().x, V.scaleY = q.getScale().y, V.rotation = q.getRotation(), V.width = q._width, V.height = q._height, V.opacity = q.s("opacity"), "shape" !== V.type && "node_shape" !== V.type || (V.background = q.s("shape.background"), V.repeatImage = q.s("shape.repeat.image"), V.borderWidth = q.s("shape.border.width"), V.borderColor = q.s("shape.border.color"), V.border3d = q.s("shape.border.3d"), V.border3dColor = q.s("shape.border.3d.color"), V.border3dAccuracy = q.s("shape.border.3d.accuracy"), V.borderCap = q.s("shape.border.cap"), V.borderJoin = q.s("shape.border.join"), V.borderPattern = q.s("shape.border.pattern"), V.gradient = q.s("shape.gradient"), V.gradientColor = q.s("shape.gradient.color"), V.dash = q.s("shape.dash"), V.dashPattern = q.s("shape.dash.pattern"), V.dashOffset = q.s("shape.dash.offset"), V.dashColor = q.s("shape.dash.color"), V.dashWidth = q.s("shape.dash.width"), V.dash3d = q.s("shape.dash.3d"), V.dash3dColor = q.s("shape.dash.3d.color"), V.dash3dAccuracy = q.s("shape.dash.3d.accuracy"), V.fillRule = q.s("shape.fill.rule"), V.fillClipDirection = q.s("shape.fill.clip.direction"), V.fillClipPercentage = q.s("shape.fill.clip.percentage"), V.gradientPack = n(q.s("shape.gradient.pack")), V.borderWidthAbsolute = q.s("shape.border.width.absolute"))), V
	}

	function jV(q, V) {
		var S = void 0;
		if("clip" === q.type) V && (S = new Nn, S.s("type", "clip"), S.setPoints(q.points), S.setSegments(q.segments));
		else if("restore" === q.type) V && (S = new Un, S.s("type", "restore"));
		else if("shape" === q.type) S = V ? new Zn : new ht.Shape, S.s("type", "shape"), S.setPoints(q.points), S.setSegments(q.segments), S.setClosePath(q.closePath);
		else if("node_shape" === q.type) {
			S = V ? new ln : new ht.Node;
			var _ = q.shape;
			S.s("shape", _), "rect" === _ ? S.s("shape.depth", q.depth) : "roundRect" === _ ? S.s("shape.corner.radius", q.polygonSide) : "polygon" === _ ? S.s("shape.polygon.side", q.polygonSide) : "arc" === _ && (S.s("shape.arc.from", q.arcFrom), S.s("shape.arc.to", q.arcTo), S.s("shape.arc.close", q.arcClose), S.s("shape.arc.oval", q.arcOval))
		} else "node_image" === q.type ? (V ? (S = new zn, S.s("type", "image"), S.s("image", q.image)) : (S = new ht.Node, S.setImage(q.image)), S.s("body.color", q.color)) : "text" === q.type && (S = V ? new Hn : new ht.Text, S.s("type", "text"), S.s("text", q.text), S.s("text.align", q.align), S.s("text.vAlign", q.vAlign), S.s("text.color", q.color), S.s("text.font", q.font), S.s("text.shadow", q.shadow), S.s("text.shadow.color", q.shadowColor), S.s("text.shadow.blur", q.shadowBlur), S.s("text.shadow.offset.x", q.shadowOffsetX), S.s("text.shadow.offset.y", q.shadowOffsetY));
		return S ? (S.s("2d.visible", q.visible), S.setDisplayName(q.displayName), S.setPosition(q.x, q.y), .5 === q.anchorX && .5 === q.anchorY || S.setAnchor(q.anchorX, q.anchorY), S.setScale(q.scaleX, q.scaleY), S.setRotation(q.rotation), S.setSize(q.width, q.height), S.s("opacity", q.opacity), "shape" !== q.type && "node_shape" !== q.type || (S.s("shape.background", q.background), S.s("shape.repeat.image", q.repeatImage), S.s("shape.border.width", q.borderWidth), S.s("shape.border.color", q.borderColor), S.s("shape.border.3d", q.border3d), S.s("shape.border.3d.color", q.border3dColor), S.s("shape.border.3d.accuracy", q.border3dAccuracy), S.s("shape.border.cap", q.borderCap), S.s("shape.border.join", q.borderJoin), S.s("shape.border.pattern", q.borderPattern), S.s("shape.gradient", q.gradient), S.s("shape.gradient.color", q.gradientColor), S.s("shape.dash", q.dash), S.s("shape.dash.pattern", q.dashPattern), S.s("shape.dash.offset", q.dashOffset), S.s("shape.dash.color", q.dashColor), S.s("shape.dash.width", q.dashWidth), S.s("shape.dash.3d", q.dash3d), S.s("shape.dash.3d.color", q.dash3dColor), S.s("shape.dash.3d.accuracy", q.dash3dAccuracy), S.s("shape.fill.rule", q.fillRule), S.s("shape.fill.clip.direction", q.fillClipDirection), S.s("shape.fill.clip.percentage", q.fillClipPercentage), S.s("shape.gradient.pack", n(q.gradientPack)), S.s("shape.border.width.absolute", q.borderWidthAbsolute)), S) : null
	}

	function pV(q, V) {
		var n = void 0,
			S = V ? V.dm : null,
			_ = S ? S.a("width") : 100,
			x = S ? S.a("height") : 100,
			O = Eq(q.type);
		if(lq(O)) {
			var w = ZS[O];
			w ? n = new w(q, _, x) : xq(O) && (n = new Bn(q, _, x))
		} else n = new lS(q, _, x);
		return n && V && V.addData(n, !0), n
	}

	function yV(q, V) {
		q.s("chart.series") || q.s("chart.series", []);
		var n = q.s("chart.series");
		n[0] || (n[0] = {});
		var S = n[0];
		return S.values || (S.values = []), S.colors || (S.colors = []), S[V]
	}

	function XV(q, V) {
		return Eq(yV(q, V))
	}

	function eV(q, V) {
		return Yq(yV(q, V))
	}

	function bV() {
		var q = hV.config.customProperties.display;
		q && q.length && q.forEach(function(q) {
			var V = (q.accessType || "a") + ":" + q.property;
			On.display[V] = !0
		}), q = hV.config.customProperties.data, q && q.length && q.forEach(function(q) {
			var V = (q.accessType || "a") + ":" + q.property;
			On.data[V] = !0
		}), q = hV.config.customProperties.symbol, q && q.length && q.forEach(function(q) {
			On.symbol[q.property] = !0
		}), q = hV.config.customProperties.comp, q && q.length && q.forEach(function(q) {
			On.comp[q.property] = !0
		})
	}

	function cV() {
		var q = hV.config,
			V = hV.consts,
			n = function(V, n) {
				void 0 === q.valueTypes[V] && (n.name = "editor.valuetype." + V.toLowerCase(), q.valueTypes[V] = n)
			};
		n("String", {
			type: "string"
		}), n("Image", {
			type: "image"
		}), n("URL", {
			type: "url"
		}), n("Multiline", {
			type: "multiline",
			rows: 1
		}), n("Font", {
			type: "font"
		}), n("Angle", {
			type: "number",
			angle: !0
		}), n("Int", {
			type: "int",
			step: 1
		}), n("PositiveNumber", {
			type: "number",
			step: 1,
			min: 0
		}), n("Number", {
			type: "number",
			step: 1
		}), n("Color", {
			type: "color"
		}), n("Boolean", {
			type: "boolean"
		}), n("Function", {
			type: "function"
		}), n("Object", {
			type: "object"
		}), n("ObjectArray", {
			type: "objectArray",
			rows: 3
		}), n("StringArray", {
			type: "stringArray",
			rows: 3
		}), n("NumberArray", {
			type: "numberArray",
			rows: 3
		}), n("ColorArray", {
			type: "colorArray",
			rows: 3
		}), n("Opacity", {
			type: "number",
			min: 0,
			max: 1,
			step: .01
		}), n("Percentage", {
			type: "number",
			min: 0,
			max: 1,
			step: .01
		}), n("Gradient", {
			type: "enum",
			values: q.gradients,
			icons: q.gradientIcons,
			dropDownWidth: 140
		}), n("FillRule", {
			type: "enum",
			values: V.fillRules,
			labels: V.fillRuleLabels
		}), n("ClipDirection", {
			type: "enum",
			values: V.clipDirections,
			labels: V.clipDirectionLabels
		}), n("CapStyle", {
			type: "enum",
			values: V.caps,
			labels: V.capLabels
		}), n("JoinStyle", {
			type: "enum",
			values: V.joins,
			labels: V.joinLabels
		}), n("Align", {
			type: "enum",
			values: V.aligns,
			labels: V.alignLabels
		}), n("VAlign", {
			type: "enum",
			values: V.vAligns,
			labels: V.vAlignLabels
		}), n("Stretch", {
			type: "enum",
			values: V.stretchs,
			labels: V.stretchLabels
		}), n("Direction", {
			type: "enum",
			values: V.directions,
			labels: V.directionLabels
		}), n("Orientation", {
			type: "enum",
			values: V.orientations,
			labels: V.orientationLabels
		}), n("ColumnChart", {
			type: "enum",
			values: V.columnChartTypes,
			labels: V.columnChartTypeLabels
		}), V.valueTypes = [], V.valueTypeLabels = [];
		var S = function(q) {
			var n = hV.config.valueTypes[q];
			n.type && (V.valueTypes.push(q), V.valueTypeLabels.push(_(n.name) || _(q)), "enum" === n.type && n.i18nLabels && !n.labels && (n.labels = [], n.i18nLabels.forEach(function(q) {
				n.labels.push(_(q))
			})))
		};
		for(var x in hV.config.valueTypes) S(x)
	}

	function JV() {
		var q = hV.consts = {};
		q.edgeTypes = [void 0, "points"].concat(Object.keys(ht.Default.getEdgeTypeMap())), q.aligns = ["left", "center", "right"], q.alignLabels = [_("editor.align.left"), _("editor.align.center"), _("editor.align.right")], q.vAligns = ["top", "middle", "bottom"], q.vAlignLabels = [_("editor.valign.top"), _("editor.valign.middle"), _("editor.valign.bottom")], q.stretchs = ["fill", "uniform", "centerUniform"], q.stretchLabels = [_("editor.stretch.fill"), _("editor.stretch.uniform"), _("editor.stretch.centeruniform")], q.fillRules = ["nonzero", "evenodd"], q.fillRuleLabels = [_("editor.nonzero"), _("editor.evenodd")], q.clipDirections = ["top", "bottom", "left", "right"], q.clipDirectionLabels = [_("editor.clipdirection.top"), _("editor.clipdirection.bottom"), _("editor.clipdirection.left"), _("editor.clipdirection.right")], q.caps = ["butt", "round", "square"], q.capLabels = [_("editor.cap.butt"), _("editor.cap.round"), _("editor.cap.square")], q.joins = ["bevel", "round", "miter"], q.joinLabels = [_("editor.join.bevel"), _("editor.join.round"), _("editor.join.miter")], q.directions = ["h", "v"], q.directionLabels = [_("editor.direction.h"), _("editor.direction.v")], q.orientations = ["top", "right", "bottom", "left"], q.orientationLabels = [_("editor.orientation.top"), _("editor.orientation.right"), _("editor.orientation.bottom"), _("editor.orientation.left")], q.columnChartTypes = ["columnChart", "stackedColumnChart", "percentageColumnChart"], q.columnChartTypeLabels = [_("editor.columncharttype.columnchart"), _("editor.columncharttype.stackedcolumnchart"), _("editor.columncharttype.percentagecolumnchart")], q.gradients = hV.config.gradients, q.shapes = [void 0, "rect", "circle", "oval", "roundRect", "star", "triangle", "hexagon", "pentagon", "diamond", "rightTriangle", "parallelogram", "trapezoid", "polygon", "arc"], q.shapeLabels = [], q.shapeIcons = [], q.shapes.forEach(function(V) {
			V ? (q.shapeLabels.push(_("editor.comptype." + V.toLowerCase())), q.shapeIcons.push({
				width: 16,
				height: 16,
				comps: [{
					type: V,
					rect: [2, 4, 12, 8],
					borderWidth: 1,
					borderColor: hV.config.color_dark
				}]
			})) : (q.shapeLabels.push(""), q.shapeIcons.push({
				width: 16,
				height: 16,
				comps: []
			}))
		}), q.selectTypes = ["shadow", "rect", "circle", "oval", "roundRect"], q.selectTypeLabels = [], q.selectTypeIcons = [], q.selectTypes.forEach(function(V) {
			"shadow" === V ? (q.selectTypeLabels.push(_("editor.shadow")), q.selectTypeIcons.push({
				width: 16,
				height: 16,
				comps: []
			})) : (q.selectTypeLabels.push(_("editor.comptype." + V.toLowerCase())), q.selectTypeIcons.push({
				width: 16,
				height: 16,
				comps: [{
					type: V,
					rect: [2, 4, 12, 8],
					borderWidth: 1,
					borderColor: hV.config.color_dark
				}]
			}))
		}), q.displayConnectActionTypes = hV.config.displayConnectActionTypes, q.displayConnectActionTypeLabels = [], q.displayConnectActionTypes.forEach(function(V) {
			var n = V ? V.toLowerCase() : "none";
			q.displayConnectActionTypeLabels.push(_("editor.connectactiontype." + n, !0) || _(V))
		}), q.symbolConnectActionTypes = hV.config.symbolConnectActionTypes, q.symbolConnectActionTypeLabels = [], q.symbolConnectActionTypes.forEach(function(V) {
			var n = V ? V.toLowerCase() : "none";
			q.symbolConnectActionTypeLabels.push(_("editor.connectactiontype." + n, !0) || _(V))
		}), q.vLayoutValues = [void 0, "top", "bottom", "topbottom", "center", "scale"], q.vLayoutLabels = [_("editor.layout.none"), _("editor.layout.top"), _("editor.layout.bottom"), _("editor.layout.topbottom"), _("editor.layout.center"), _("editor.layout.scale")], q.hLayoutValues = [void 0, "left", "right", "leftright", "center", "scale"], q.hLayoutLabels = [_("editor.layout.none"), _("editor.layout.left"), _("editor.layout.right"), _("editor.layout.leftright"), _("editor.layout.center"), _("editor.layout.scale")], q.fullscreenValues = [void 0, "fill", "uniform"], q.fullscreenLabels = [_("editor.layout.none"), _("editor.stretch.fill"), _("editor.stretch.uniform")]
	}
	String.prototype.startsWith || (String.prototype.startsWith = function(q, V) {
		return V = V || 0, this.substr(V, q.length) === q
	}), String.prototype.endsWith || (String.prototype.endsWith = function(q, V) {
		var n = this.toString();
		("number" != typeof V || !isFinite(V) || Math.floor(V) !== V || V > n.length) && (V = n.length), V -= q.length;
		var S = n.lastIndexOf(q, V);
		return S !== -1 && S === V
	});
	var CV = window.hteditor_config || {},
		GV = function(q, V) {
			void 0 === CV[q] && (CV[q] = V)
		};
	GV("color_select", "#45C4F9"), GV("color_select_dark", "#39B0E4"), GV("color_pane", "#FCFCFC"), GV("color_pane_dark", "#F7F7F7"), GV("color_line", "#E4E4E4"), GV("color_dark", "#2C2C2C"), GV("color_light", "white"), GV("color_data_border", "#979797"), GV("color_data_background", "#D8D8D8"), GV("color_transparent", "rgba(70,70,70,0.4)"), GV("color_disabled", "#8C8C8C"), GV("color_guide", "red"), GV("color_hover", "rgba(184,184,184,0.18)"), GV("color_mask", "rgba(84,110,125,0.30)");
	var vV = function() {
		var q = navigator.userAgent;
		return q.indexOf("compatible") > -1 && q.indexOf("MSIE") > -1 || q.indexOf("Trident") > -1 && q.indexOf("rv:11.0") > -1
	}();
	if(GV("host", window.location.hostname), GV("port", window.location.port), GV("locale", "en"), GV("serviceClass", "hteditor.WebSocketService"), GV("maxUndoRedoSteps", 200), GV("inspectorTitleHeight", void 0), GV("smallFont", "10px arial, sans-serif"), GV("boldFont", "bold 12px arial, sans-serif"), GV("leftSplitViewPosition", 260), GV("rightSplitViewPosition", -300), GV("mainSplitViewPosition", -320), GV("explorerSplitViewPosition", .4), GV("requestDelay", 100), GV("imageSize", 200), GV("fileSize", 50), GV("maxFileSize", 200), GV("dragImageSize", 50), GV("dragImageOpacity", .7), GV("animate", !0), GV("fitPadding", 20), GV("rulerSize", 16), GV("edgeLoop", !0), GV("pasteOffset", 5), GV("continuousLayout", !0), GV("maxZoom", 50), GV("minZoom", .01), GV("detailFilter", {}), GV("compactFilter", {}), GV("customProperties", {}), GV("rulerEnabled", !0), GV("gridEnabled", !1), GV("displayGridBlockSize", 40), GV("displayGridThickLinesEvery", 10), GV("displayGridThickColor", "rgb(191, 191, 191)"), GV("displayGridLightColor", "rgba(191, 191, 191, 0.4)"), GV("displayGridAngle", Math.PI / 2), GV("displayGridRotation", 0), GV("displayGridZoomThreshold", .25), GV("displayGridAlignmentGuideColor", CV.color_guide), GV("symbolGridBlockSize", 1), GV("symbolGridThickLinesEvery", 20), GV("symbolGridThickColor", "rgb(191, 191, 191)"), GV("symbolGridLightColor", "rgba(191, 191, 191, 0.2)"), GV("symbolGridAngle", Math.PI / 2), GV("symbolGridRotation", 0), GV("symbolGridZoomThreshold", .25), GV("symbolGridAlignmentGuideColor", CV.color_guide), GV("maxStringLength", 1e6), GV("maxFileNameLength", 100), GV("traceMissingI18n", !1), GV("container", void 0), GV("continuousCreating", !1), GV("valueTypes", {}), GV("indent", "zh" === CV.locale ? 90 : 110), GV("indent2", 70), GV("clearDataBindingsBeforeImporting", !0), GV("insertDisplayViewAsRefGraph", !1), GV("displayPreviewURL", "display.html"), GV("symbolPreviewURL", "symbol.html"), GV("removeFileByKeyboardEnabled", !1), GV("locateFileEnabled", !0), GV("promptBeforeClosing", !0), GV("displaysVisible", !0), GV("symbolsVisible", !0), GV("componentsVisible", !0), GV("scenesVisible", !1), GV("modelsVisible", !1), GV("assetsVisible", !0), GV("displaysEditable", !0), GV("symbolsEditable", !0), GV("componentsEditable", !0), GV("scenesEditable", !0), GV("modelsEditable", !0), GV("assetsEditable", !0), GV("settingDefaultValueBeforeSaving", !1), GV("svgSegments", 20), GV("importConfirm", !0), GV("newIfFailToOpen", !0), GV("dataBindings", void 0), GV("useCodeEditor", !vV), GV("codeEditorClass", "hteditor.CodeEditor"), GV("fontPreview", "Hightopo"), GV("checkForFileChanges", !0), GV("checkForFileChangesInterval", 3e3), GV("rotateAsClock", !1), GV("cloneAttr", !0), GV("cloneStyle", !0), GV("cloneName", !0), GV("cloneDisplayName", !0), GV("cloneToolTip", !0), GV("cloneTag", !1), GV("cloneIcon", !0), GV("cloneLayer", !0), GV("cloneParent", !0), GV("cloneDataBindings", !0), GV("cloneSource", !0), GV("cloneTarget", !0), GV("cloneExpanded", !0), GV("cloneClickThroughEnabled", !0), GV("cloneSyncSize", !0), GV("cloneRef", !0), GV("clonePoints", !0), GV("cloneSegments", !0), GV("cloneThickness", !0), GV("cloneClosePath", !0), GV("cloneRotation", !0), GV("clonePosition", !0), GV("cloneSize", !0), GV("cloneScale", !0), GV("cloneAnchor", !0), GV("cloneImage", !0), GV("cloneHost", !0), GV("isOpenable", null), GV("dialogTitleBackground", null), GV("componentViewSize", {
			width: 700,
			height: 500
		}), GV("eventViewSize", {
			width: 500,
			height: 400
		}), GV("fontViewSize", {
			width: 500,
			height: 400
		}), GV("functionViewSize", {
			width: 500,
			height: 400
		}), GV("objectViewSize", {
			width: 500,
			height: 400
		}), GV("textViewSize", {
			width: 500,
			height: 400
		}), GV("drawAccordionTitle", null), GV("accordionMutex", !1), GV("importDataBindingsButtonVisible", !0), GV("saveSymbolCustomPropertyDefaultValue", !1), GV("explorerMode", "treeList"), GV("isDataBound", function(q, V, n) {
			var S = q.getDataBindings();
			return S && S[V] && S[V][n]
		}), GV("paletteColors", [
			["rgb(51,153,255)", "#60ACFC", "#32D3EB", "rgb(93,217,174)", "rgb(125,195,125)", "rgb(255,235,195)", "rgb(226,250,87)"],
			["#FEB64D", "#FF7C7C", "rgb(241,125,164)", "rgb(204,104,166)", "rgb(135,144,204)", "rgb(145,115,205)", "rgb(124,145,155)"],
			["rgb(48,242,120)", "rgb(0,199,7)", "rgb(242,83,75)", "rgb(212,0,0)", "rgb(240,225,19)", "rgb(247,247,247)", "rgb(61,61,61)"]
		]), GV("gradients", [null, "linear.southwest", "linear.southeast", "linear.northwest", "linear.northeast", "linear.north", "linear.south", "linear.west", "linear.east", "radial.center", "radial.southwest", "radial.southeast", "radial.northwest", "radial.northeast", "radial.north", "radial.south", "radial.west", "radial.east", "spread.horizontal", "spread.vertical", "spread.diagonal", "spread.antidiagonal", "spread.north", "spread.south", "spread.west", "spread.east"]), CV.gradientIcons || (CV.gradientIcons = [], CV.gradients.forEach(function(q) {
			q ? CV.gradientIcons.push({
				width: 20,
				height: 14,
				comps: [{
					type: "rect",
					rect: [0, 0, 20, 14],
					gradient: q,
					gradientColor: CV.color_line,
					background: CV.color_dark
				}]
			}) : CV.gradientIcons.push({
				width: 20,
				height: 14,
				comps: []
			})
		})), GV("fontList", ["SimSun", "NSimSun", "FangSong", "KaiTi", "FangSong_GB2312", "Microsoft YaHei", "cursive", "monospace", "serif", "sans-serif", "fantasy", "Arial", "Arial Black", "Arial Narrow", "Arial Rounded MT Bold", "Bookman Old Style", "Bradley Hand ITC", "Century", "Century Gothic", "Comic Sans MS", "Courier", "Courier New", "Georgia", "Gentium", "Impact", "King", "Lucida Console", "Lalit", "Modena", "Monotype Corsiva", "Papyrus", "Tahoma", "TeX", "Times", "Times New Roman", "Trebuchet MS", "Verdana", "Verona"]), GV("expandedTitles", {}), ["TitleBasic", "TitleCustom", "TitleBackground", "TitleBorder", "TitleText", "TitleImage", "TitleNode", "TitleGroupBasic", "TitleEdgeBasic", "TitleArc", "TitleDataBinding", "TitleComponent", "TitleShapeBackground", "TitleShapeBorder", "TitleGroupTitle", "TitleEditingPoint", "TitleChart", "TitleLayout", "TitleNodeLayout"].forEach(function(q) {
			null == CV.expandedTitles[q] && (CV.expandedTitles[q] = !0)
		}), ht.Default.handleUnfoundImage = function(q, V) {
			return ht.Default.getImage("editor.unknown")
		}, GV("displayConnectActionType", null), GV("symbolConnectActionType", null), GV("displayConnectActionTypes", [null, "copyStyle", "host", "parent"]), GV("symbolConnectActionTypes", [null, "copyStyle"]), GV("appendDisplayConnectActionTypes", null), GV("appendSymbolConnectActionTypes", null), GV("appendConnectActions", null), GV("connectActions", {
			copyStyle: {
				action: function(q, V, S) {
					if(S) {
						var _ = S.getStyleMap();
						for(var x in _) "shape" !== x && "label" !== x && "label2" !== x && "note" !== x && "note2" !== x && "text" !== x && V.s(x, n(_[x]))
					}
				},
				extraInfo: {
					visible: function(q) {
						return !0
					}
				}
			},
			host: {
				action: function(q, V, n) {
					V instanceof ht.Node && n instanceof ht.Node && V.setHost(n)
				},
				extraInfo: {
					delete: {
						visible: function(q) {
							return q.sm().ld() instanceof ht.Node && q.sm().ld().getHost()
						},
						action: function(q, V) {
							V instanceof ht.Node && V.setHost(void 0)
						}
					},
					visible: function(q) {
						return q.sm().ld() instanceof ht.Node
					}
				}
			},
			parent: {
				action: function(q, V, n) {
					n && V.setParent(n)
				},
				extraInfo: {
					delete: {
						visible: function(q) {
							return q.sm().ld().getParent()
						},
						action: function(q, V) {
							V.setParent(void 0)
						}
					},
					visible: function(q) {
						return !0
					}
				}
			}
		}), CV.appendDisplayConnectActionTypes && CV.appendDisplayConnectActionTypes.forEach(function(q) {
			CV.displayConnectActionTypes.push(q)
		}), CV.appendSymbolConnectActionTypes && CV.appendSymbolConnectActionTypes.forEach(function(q) {
			CV.symbolConnectActionTypes.push(q)
		}), CV.appendConnectActions)
		for(var uV in CV.appendConnectActions) CV.connectActions[uV] = CV.appendConnectActions[uV];
	for(var WV in CV.connectActions) {
		var dV = CV.connectActions[WV];
		ht.Default.setConnectAction(WV, dV.action, dV.extraInfo)
	}
	var PV = ht.Default.getToolTipDiv();
	PV.style.color = CV.color_dark, PV.style.background = CV.color_pane, ht.widget.ColorPicker.prototype._paletteColors = CV.paletteColors, ht.graph.GraphView.prototype._scrollBarColor = CV.color_transparent, ht.graph.GraphView.prototype._rectSelectBackground = CV.color_transparent, ht.graph.GraphView.prototype._rectSelectBorderColor = CV.color_select, ht.graph.GraphView.prototype.isLabelVisible = function() {
		return !0
	}, ht.widget.ListView.prototype._scrollBarColor = CV.color_transparent, ht.widget.TreeView.prototype._scrollBarColor = CV.color_transparent, ht.widget.TableView.prototype._scrollBarColor = CV.color_transparent, ht.widget.TreeTableView.prototype._scrollBarColor = CV.color_transparent, ht.widget.PropertyView.prototype._scrollBarColor = CV.color_transparent, ht.widget.FormPane.prototype._scrollBarColor = CV.color_transparent, ht.widget.SplitView.prototype._dividerBackground = CV.color_line, ht.widget.SplitView.prototype._continuousLayout = CV.continuousLayout, ht.widget.ListView.prototype._selectBackground = CV.color_select, ht.widget.TreeView.prototype._selectBackground = CV.color_select, ht.widget.TableView.prototype._selectBackground = CV.color_select, ht.widget.TreeTableView.prototype._selectBackground = CV.color_select, ht.widget.TableHeader.prototype._columnLineColor = CV.color_line, ht.widget.TableHeader.prototype._insertColor = CV.color_select_dark, ht.widget.TableView.prototype._columnLineColor = CV.color_line, ht.widget.Toolbar.prototype._separatorColor = CV.color_line, ht.widget.Toolbar.prototype._itemGap = 4, ht.widget.Button.prototype._labelColor = CV.color_light, ht.widget.Button.prototype._borderColor = null, ht.widget.Button.prototype._background = CV.color_select, ht.widget.Button.prototype._selectBackground = CV.color_select_dark, ht.widget.CheckBox.prototype._pressBackground = CV.color_pane_dark, ht.widget.ComboBox.prototype._selectBackground = CV.color_select, ht.widget.TabView.prototype._insertColor = CV.color_select_dark, ht.widget.TabView.prototype._selectWidth = 0, ht.widget.TabView.prototype._selectBackground = CV.color_select, ht.widget.TabView.prototype._tabBackground = CV.color_dark;
	var EV = ht.widget.TabView.prototype.drawTab;
	ht.widget.TabView.prototype.drawTab = function(q, V, n, S, _, x, O) {
		return O = V == this.getCurrentTab() ? CV.color_select : CV.color_dark, EV.call(this, q, V, n, S, _, x, O)
	}, ht.widget.FormPane.prototype._hPadding = 4, ht.widget.FormPane.prototype._vPadding = 4, ht.widget.FormPane.prototype._hGap = 4, ht.widget.FormPane.prototype._vGap = 4, ht.widget.Slider.prototype._background = CV.color_dark, ht.widget.Slider.prototype._leftBackground = CV.color_select, ht.widget.Slider.prototype._button = {
		width: 14,
		height: 14,
		comps: [{
			type: "circle",
			rect: [0, 0, 14, 14],
			borderWidth: 1,
			borderColor: CV.color_dark,
			background: CV.color_pane_dark
		}]
	}, ht.widget.ComboBox.prototype._dropDownIcon = ht.widget.MultiComboBox.prototype._dropDownIcon = {
		width: 16,
		height: 16,
		comps: [{
			type: "shape",
			points: [13, 6, 8, 12, 3, 6],
			segments: [1, 2, 2],
			borderWidth: 1,
			borderColor: CV.color_dark
		}]
	}, ht.Default.comboBoxBorderColor = CV.color_line, ht.Default.textFieldBorderColor = CV.color_line, ht.Default.contextMenuHoverBackground = CV.color_select, ht.Default.contextMenuSeparatorColor = CV.color_line, ht.Default.dialogTitleBackground = CV.dialogTitleBackground || CV.color_dark, ht.Default.dialogButtonBackground = CV.color_select, ht.Default.dialogButtonSelectBackground = CV.color_select_dark, ht.Default.dialogHeaderBackground = CV.color_pane_dark, ht.Default.toolbarBackground = CV.color_pane_dark, ht.Default.tableHeaderBackground = CV.color_pane_dark, ht.Default.contextMenuLabelFont = ht.Default.labelFont, ht.Default.contextMenuBorderRadius = 0, ht.Default.contextMenuBorderColor = CV.color_line, ht.Default.contextMenuSubmenuMark = ">&nbsp;", ht.Default.contextMenuCheckIcon = {
		width: 16,
		height: 16,
		comps: [{
			type: "shape",
			points: [13, 3, 7, 12, 4, 8],
			borderWidth: 1,
			borderColor: CV.color_dark
		}]
	}, ht.Default.setImage("radioOn", {
		width: 16,
		height: 16,
		comps: [{
			type: "circle",
			rect: [2, 2, 12, 12],
			borderWidth: 1,
			borderColor: ht.Color.widgetIconBorder,
			background: "#FFF"
		}, {
			type: "circle",
			rect: [4, 4, 8, 8],
			background: CV.color_select
		}]
	}), ht.Default.setImage("expandIcon", {
		width: 16,
		height: 16,
		comps: [{
			type: "shape",
			points: [13, 6, 8, 12, 3, 6],
			segments: [1, 2, 2],
			borderWidth: 1,
			borderColor: CV.color_dark
		}]
	}), ht.Default.setImage("collapseIcon", {
		width: 16,
		height: 16,
		comps: [{
			type: "shape",
			points: [6, 3, 12, 8, 6, 13],
			segments: [1, 2, 2],
			borderWidth: 1,
			borderColor: CV.color_dark
		}]
	}), ht.widget.TreeView.prototype._expandIcon = "expandIcon", ht.widget.TreeView.prototype._collapseIcon = "collapseIcon", ht.widget.TreeTableView.prototype._expandIcon = "expandIcon", ht.widget.TreeTableView.prototype._collapseIcon = "collapseIcon", ht.widget.TextField.prototype.setEditable = ht.widget.TextArea.prototype.setEditable = function(q) {
		var V = this._element;
		q ? (V.removeAttribute("readonly"), V.style.color = ht.Default.labelColor) : (V.setAttribute("readonly", !0), V.style.color = CV.color_disabled)
	}, ht.Default.onElementCreated = function(q) {
		("INPUT" === q.tagName && "button" !== q.type || "TEXTAREA" === q.tagName) && (q.style.border = CV.color_line + " solid 1px", q.style.outline = 0, q.style.padding = "2px", "TEXTAREA" === q.tagName && (q.style.whiteSpace = "pre", q.setAttribute("spellcheck", "false")), q.addEventListener("focus", function(V) {
			q.oldBorder = q.style.border, q.style.border = CV.color_select + " solid 1px", "INPUT" === q.tagName && requestAnimationFrame(function() {
				q.select()
			}), "TEXTAREA" === q.tagName && (q.style.zIndex = "1")
		}, !1), q.addEventListener("blur", function(V) {
			q.style.border = q.oldBorder, "TEXTAREA" === q.tagName && (q.style.zIndex = "")
		}, !1))
	}, ht.Default.onWidgetColorPickerCreated = function(V) {
		for(var n = CV.color_line + " solid 1px", S = V.getView(), _ = S.querySelectorAll(".colorPalette"), x = 0; x < _.length; x++) _[x].style.border = n;
		S.querySelector(".satval").style.border = n, S.querySelector(".hue_image").style.border = n, S.querySelector(".preview").style.border = n, _ = S.querySelectorAll('input[type="button"]');
		for(var O = 0; O < _.length; O++) {
			var w = _[O];
			w.style.border = n, w.style.background = "none", w.style.outline = "none", w.style.width = "30px", w.addEventListener("mouseover", function(q) {
				q.target.style.background = CV.color_hover
			}, !1), w.addEventListener("mouseout", function() {
				event.target.style.background = "none"
			}, !1)
		}
		_ = S.querySelectorAll("span");
		for(var K = 0; K < _.length; K++) q(V, S, _[K])
	}, ht.Default.handleUnfoundImage = function(q, V) {
		return ht.Default.getImage("editor.unknown")
	};
	var YV = function(q, V) {
			if(!(q instanceof V)) throw new TypeError("Cannot call a class as a function")
		},
		MV = function() {
			function q(q, V) {
				for(var n = 0; n < V.length; n++) {
					var S = V[n];
					S.enumerable = S.enumerable || !1, S.configurable = !0, "value" in S && (S.writable = !0), Object.defineProperty(q, S.key, S)
				}
			}
			return function(V, n, S) {
				return n && q(V.prototype, n), S && q(V, S), V
			}
		}(),
		LV = function(q, V) {
			if("function" != typeof V && null !== V) throw new TypeError("Super expression must either be null or a function, not " + typeof V);
			q.prototype = Object.create(V && V.prototype, {
				constructor: {
					value: q,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), V && (Object.setPrototypeOf ? Object.setPrototypeOf(q, V) : q.__proto__ = V)
		},
		QV = function(q, V) {
			if(!q) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !V || "object" != typeof V && "function" != typeof V ? q : V
		},
		FV = function(q) {
			function V(n) {
				return YV(this, V), QV(this, q.call(this, n))
			}
			return LV(V, q), V.prototype.onShown = function() {
				_n.push(this)
			}, V.prototype.onHidden = function() {
				x(_n, this)
			}, V
		}(ht.widget.Dialog),
		aV = function(q) {
			function V(n) {
				YV(this, V);
				var S = QV(this, q.call(this, n));
				return S.getView().style.background = hV.config.color_pane, S
			}
			return LV(V, q), V.prototype.addLine = function() {
				this.addRow([], [.1], 1.01, {
					background: hV.config.color_line
				})
			}, V.prototype.addTitle = function(q) {
				var V = [{
						element: q,
						font: hV.config.boldFont
					}],
					n = {
						background: hV.config.color_pane_dark
					};
				this.addRow(V, [.1], null, n)
			}, V.prototype.getRowIndex = function(q) {
				return this.getRows().indexOf(q)
			}, V
		}(ht.widget.FormPane),
		hV = {
			strings: {},
			customStrings: {},
			config: CV
		},
		$V = ["onDown", "onUp", "onMove", "onEnter", "onHover", "onLeave", "onBeginDrag", "onDrag", "onEndDrag", "onScroll"],
		tV = "unknow",
		sV = "root",
		mV = "dir",
		DV = "image",
		TV = "symbol",
		fV = "display",
		BV = "component",
		IV = "model",
		oV = "scene",
		rV = "tile",
		kV = "list",
		RV = "accordion",
		qn = "normal",
		Vn = "error",
		nn = /^attr@/,
		Sn = /firefox/.test(window.navigator.userAgent.toLowerCase()),
		_n = [],
		xn = {
			width: 16,
			height: 16,
			comps: []
		},
		On = {
			display: {},
			symbol: {},
			data: {},
			comp: {}
		},
		wn = new ht.List([{
			x: 50,
			y: 75
		}, {
			x: 25,
			y: 75
		}, {
			x: 25,
			y: 25
		}, {
			x: 75,
			y: 25
		}, {
			x: 75,
			y: 75
		}, {
			x: 65,
			y: 60
		}, {
			x: 75,
			y: 75
		}, {
			x: 85,
			y: 60
		}]),
		Kn = new ht.List([1, 2, 2, 2, 2, 2, 1, 2]),
		gn = "0.3.1";
	ht.Default.setImage("check", {
		width: 16,
		height: 16,
		comps: [{
			type: "border",
			rect: [1, 1, 14, 14],
			width: 1,
			color: hV.config.color_line
		}, {
			type: "shape",
			points: [13, 3, 7, 12, 4, 8],
			borderWidth: 2,
			borderColor: {
				func: function(q, V) {
					return q && V && V.getRowSize && V.isSelected && V.isSelected(q) ? hV.config.color_line : hV.config.color_select
				}
			}
		}]
	}), ht.Default.setImage("uncheck", {
		width: 16,
		height: 16,
		comps: [{
			type: "border",
			rect: [1, 1, 14, 14],
			width: 1,
			color: hV.config.color_line
		}]
	}), ht.Default.setImage("text_icon", {
		width: 16,
		height: 16,
		comps: [{
			type: "shape",
			points: [3, 14, 8, 2, 13, 14, 5, 9, 11, 9],
			segments: [1, 2, 2, 1, 2],
			borderColor: hV.config.color_dark,
			borderWidth: 1
		}]
	}), ht.Default.setImage("refGraph_icon", {
		width: 16,
		height: 16,
		comps: [{
			type: "shape",
			borderWidth: 1,
			borderColor: hV.config.color_dark,
			rotation: .7854,
			points: [12.90381, 7.59615, 12.90381, 7.59615, 12.90381, 4.61619, 12.90381, 3.59619, 12.90381, 2.57619, 11.72047, 1.59619, 10.40381, 1.59619, 9.08714, 1.59619, 7.90381, 2.61619, 7.90381, 3.59619, 7.90381, 4.35799, 7.90381, 7.59615, 7.90381, 7.59615, 7.90381, 7.59615, 7.90381, 9.59619, 10.40381, 9.59619],
			segments: [1, 4, 4, 4, 4, 4]
		}, {
			type: "shape",
			borderWidth: 1,
			borderColor: hV.config.color_dark,
			rotation: -2.35619,
			points: [8.21091, 12.28904, 8.21091, 12.28904, 8.21091, 9.30909, 8.21091, 8.28909, 8.21091, 7.26909, 7.02758, 6.28909, 5.71091, 6.28909, 4.39425, 6.28909, 3.21091, 7.30909, 3.21091, 8.28909, 3.21091, 9.05088, 3.21091, 12.28904, 3.21091, 12.28904, 3.21091, 12.28904, 3.21091, 14.28909, 5.71091, 14.28909],
			segments: [1, 4, 4, 4, 4, 4]
		}]
	}), ht.Default.setImage("editor.unknown", {
		width: 50,
		height: 50,
		fitSize: !0,
		comps: [{
			type: "shape",
			points: [5, 5, 45, 45],
			segments: [1, 2],
			borderWidth: 1,
			borderColor: "red"
		}, {
			type: "shape",
			points: [5, 45, 45, 5],
			segments: [1, 2],
			borderWidth: 1,
			borderColor: "red"
		}]
	}), ht.Default.setImage("editor.root", {
		width: 30,
		height: 30,
		fitSize: !0,
		comps: [{
			type: "shape",
			points: [23, 8, 8, 23],
			segments: [1, 2],
			borderWidth: 1,
			borderColor: "white"
		}]
	}), ht.Default.setImage("editor.display", {
		background: "rgb(179,179,179)",
		width: 16,
		height: 16,
		blendMode: "override",
		comps: [{
			type: "circle",
			borderWidth: 1,
			borderColor: hV.config.color_light,
			rect: [6, 1, 4, 4.00837]
		}, {
			type: "circle",
			borderWidth: 1,
			borderColor: hV.config.color_light,
			rect: [11, 10.99163, 4, 4.00837]
		}, {
			type: "shape",
			borderWidth: 1,
			borderColor: hV.config.color_light,
			points: [2.98235, 11.0795, 2.98235, 8, 7.89475, 8, 7.89475, 5.00837, 7.89475, 8, 13, 8, 13, 11]
		}, {
			type: "circle",
			borderWidth: 1,
			borderColor: hV.config.color_light,
			rect: [1, 10.99163, 4, 4.00837]
		}]
	}), ht.Default.setImage("editor.symbol", {
		background: "rgb(179,179,179)",
		width: 16,
		height: 16,
		blendMode: "override",
		comps: [{
			type: "circle",
			borderWidth: 1,
			borderColor: hV.config.color_light,
			rect: [0, 2, 10, 8]
		}, {
			type: "rect",
			borderWidth: 1,
			borderColor: hV.config.color_light,
			rect: [5, 6, 10, 8]
		}]
	}), ht.Default.setImage("editor.filter", {
		background: "rgb(130,130,130)",
		width: 16,
		height: 16,
		comps: [{
			type: "shape",
			borderWidth: 1,
			borderColor: "rgb(255,255,255)",
			closePath: !0,
			points: [2, 1.5, 14, 1.5, 9.50949, 5.5, 9.50949, 9.5, 13, 9.5, 9.50949, 9.5, 9.50949, 11.5, 12, 11.5, 9.50949, 11.5, 9.50949, 14.5, 6.5335, 12.5, 6.5335, 5.5, 2, 1.5]
		}]
	}), ht.Default.setImage("editor.bind", {
		width: 16,
		height: 16,
		comps: [{
			type: "shape",
			borderWidth: 1,
			borderColor: "white",
			borderCap: "round",
			rotation: .7854,
			points: [12.5502, 6.7981, 12.5502, 6.7981, 12.5502, 4.8181, 12.5502, 3.7981, 12.5502, 2.7781, 11.36687, 1.7981, 10.0502, 1.7981, 8.73354, 1.7981, 7.5502, 2.8181, 7.5502, 3.7981, 7.5502, 4.55989, 7.5502, 7.79805, 7.5502, 7.79805, 7.5502, 7.79805, 7.5502, 9.7981, 10.0502, 9.7981],
			segments: [1, 4, 4, 4, 4, 4]
		}, {
			type: "shape",
			borderWidth: 1,
			borderColor: "white",
			borderCap: "round",
			rotation: -2.35619,
			points: [8.4498, 11.2019, 8.4498, 11.2019, 8.4498, 9.2219, 8.4498, 8.2019, 8.4498, 7.1819, 7.26646, 6.2019, 5.9498, 6.2019, 4.63313, 6.2019, 3.4498, 7.2219, 3.4498, 8.2019, 3.4498, 8.9637, 3.4498, 12.20186, 3.4498, 12.20186, 3.4498, 12.20186, 3.4498, 14.2019, 5.9498, 14.2019],
			segments: [1, 4, 4, 4, 4, 4]
		}]
	}), ht.Default.setImage("editor.unbind", {
		background: "rgb(179,179,179)",
		width: 16,
		height: 16,
		blendMode: "override",
		comps: [{
			type: "shape",
			borderWidth: 1,
			borderColor: "rgb(138,138,138)",
			borderCap: "round",
			shadowColor: "#1ABC9C",
			rotation: .7854,
			points: [13.49999, 7.03553, 13.49999, 7.03553, 13.49999, 5.05554, 13.49999, 4.03553, 13.49999, 3.01553, 12.31666, 2.03553, 10.99999, 2.03553, 9.68333, 2.03553, 8.49999, 3.05553, 8.49999, 4.03553, 8.49999, 5.01553, 8.49999, 7.03553, 8.49999, 7.03553],
			segments: [1, 4, 4, 4, 4]
		}, {
			type: "shape",
			borderWidth: 1,
			borderColor: "rgb(138,138,138)",
			borderCap: "round",
			shadowColor: "#1ABC9C",
			rotation: 3.92699,
			points: [7.28554, 13.25761, 7.28554, 13.25761, 7.28554, 11.27761, 7.28554, 10.2576, 7.28554, 9.23761, 6.1022, 8.25761, 4.78554, 8.25761, 3.46887, 8.25761, 2.28554, 9.2776, 2.28554, 10.2576, 2.28554, 11.2376, 2.28554, 13.25761, 2.28554, 13.25761],
			segments: [1, 4, 4, 4, 4]
		}]
	}), ht.Default.setImage("editor.dircollapsed", {
		background: "rgb(179,179,179)",
		width: 16,
		height: 16,
		comps: [{
			type: "shape",
			background: "rgb(255,204,153)",
			borderWidth: 1,
			borderColor: "rgb(138,138,138)",
			borderCap: "round",
			shadowColor: "#1ABC9C",
			points: [14.5, 14.5, .5, 14.5, .5, 1.50001, 6.5, 1.50001, 7.5, 3.50001, 14.5, 3.50001, 14.5, 14.5]
		}, {
			type: "shape",
			background: "rgb(255,227,199)",
			borderWidth: 1,
			borderColor: "rgb(138,138,138)",
			borderCap: "round",
			shadowColor: "#1ABC9C",
			points: [.5, 5.50001, 14.5, 5.50001, 14.5, 14.50001, .5, 14.50001, .5, 5.50001]
		}]
	}), ht.Default.setImage("editor.direxpanded", {
		background: "rgb(179,179,179)",
		width: 16,
		height: 16,
		comps: [{
			type: "shape",
			background: "rgb(255,255,255)",
			borderWidth: 1,
			borderColor: "rgb(51,153,255)",
			borderCap: "round",
			shadowColor: "#1ABC9C",
			points: [2.35891, 10.47175, 3.3125, 6.30284, 15.5, 6.30284, 13.625, 14.5, .5, 14.5, .5, 1.5, 6.125, 1.5, 7.0625, 3.2289, 12.6875, 3.2289, 12.6875, 6.30284]
		}]
	}), ht.Default.setImage("editor.dir", {
		background: "rgb(227,227,227)",
		width: 20,
		height: 20,
		fitSize: !0,
		comps: [{
			type: "shape",
			background: "#FFCC99",
			borderWidth: 1,
			borderColor: "rgb(255,255,255)",
			borderCap: "round",
			points: [19, 4, 19, 18, 1, 18, 1, 2, 8.71429, 2, 10, 4, 19, 4]
		}, {
			type: "rect",
			shadow: !0,
			shadowColor: "rgba(0,0,0,0.4)",
			shadowBlur: 2,
			shadowOffsetX: 0,
			shadowOffsetY: 1,
			background: "rgb(255,255,255)",
			borderColor: "#979797",
			rotation: 6.28319,
			rect: [2.98273, 5.998, 13.98346, 9.99004]
		}, {
			type: "shape",
			background: "rgba(255,255,153,0.3)",
			borderColor: "rgb(255,255,255)",
			borderCap: "round",
			points: [18, 9, 18, 17, 2, 17, 2, 9, 18, 9]
		}, {
			type: "rect",
			shadowColor: "rgb(0,0,0)",
			shadowBlur: 2,
			shadowOffsetX: 0,
			shadowOffsetY: 1,
			background: "rgb(232,230,230)",
			borderColor: "#979797",
			rotation: 6.28319,
			rect: [4, 7, 11.98532, 1.06039]
		}]
	}), ht.Default.setImage("editor.dxf", {
		width: 64,
		height: 64,
		fitSize: !0,
		comps: [{
			type: "shape",
			shadowColor: "#1ABC9C",
			background: "#000000",
			points: [25.13334, 60.62742, 20.38001, 60.62742, 20.11302, 60.62742, 19.89504, 60.41688, 19.89504, 60.15453, 19.89504, 43.31796, 19.89504, 43.05561, 20.11302, 42.84507, 20.38001, 42.84507, 25.13334, 42.84507, 30.66329, 42.84507, 33.35167, 45.67873, 33.35167, 51.50916, 33.35167, 57.47593, 30.51009, 60.62742, 25.13334, 60.62742, 25.13334, 60.62742, 23.32783, 57.5939, 25.03463, 57.5939, 28.43349, 57.5939, 29.82018, 55.90554, 29.82018, 51.77117, 29.82018, 47.64415, 28.35946, 45.88193, 24.93627, 45.88193, 23.32783, 45.88193, 23.32783, 57.5939, 23.32783, 57.5939],
			segments: [1, 2, 4, 2, 4, 2, 4, 4, 2, 1, 2, 4, 4, 2, 2, 2]
		}, {
			type: "shape",
			shadowColor: "#1ABC9C",
			background: "#000000",
			points: [48.10416, 60.62742, 45.1488, 60.62742, 44.97846, 60.62742, 44.82286, 60.54254, 44.73581, 60.40217, 40.95446, 54.3465, 37.26771, 60.39482, 37.1786, 60.53886, 37.01957, 60.62776, 36.84889, 60.62776, 34.01657, 60.62776, 33.84041, 60.62776, 33.67761, 60.53552, 33.59227, 60.38379, 33.50693, 60.2324, 33.51275, 60.04759, 33.60735, 59.89987, 39.05608, 51.53522, 33.90312, 43.56961, 33.80853, 43.42557, 33.8027, 43.24076, 33.88804, 43.08937, 33.97338, 42.93797, 34.13618, 42.8454, 34.31235, 42.8454, 37.31706, 42.8454, 37.4874, 42.8454, 37.64677, 42.93396, 37.73382, 43.078, 41.14399, 48.68284, 44.48219, 43.08168, 44.56924, 42.93396, 44.72861, 42.84507, 44.90272, 42.84507, 47.73299, 42.84507, 47.91121, 42.84507, 48.074, 42.93731, 48.15729, 43.08903, 48.24434, 43.24042, 48.2368, 43.42524, 48.14221, 43.56928, 43.03826, 51.48342, 48.51339, 59.89987, 48.60798, 60.04759, 48.61552, 60.2324, 48.52847, 60.38379, 48.44518, 60.53485, 48.28238, 60.62742, 48.10416, 60.62742, 48.10416, 60.62742],
			segments: [1, 2, 4, 2, 2, 4, 2, 4, 4, 2, 2, 4, 4, 2, 4, 2, 2, 4, 2, 4, 4, 2, 2, 4, 4, 2]
		}, {
			type: "shape",
			shadowColor: "#1ABC9C",
			background: "#000000",
			points: [53.17006, 60.62742, 50.68081, 60.62742, 50.41177, 60.62742, 50.19585, 60.41688, 50.19585, 60.15453, 50.19585, 43.31796, 50.19585, 43.05561, 50.41177, 42.84507, 50.68081, 42.84507, 60.09288, 42.84507, 60.36192, 42.84507, 60.57784, 43.05561, 60.57784, 43.31796, 60.57784, 45.40904, 60.57784, 45.67138, 60.36192, 45.88193, 60.09288, 45.88193, 53.65537, 45.88193, 53.65537, 50.62587, 59.22886, 50.62587, 59.4979, 50.62587, 59.71382, 50.83642, 59.71382, 51.09876, 59.71382, 53.18984, 59.71382, 53.45219, 59.4979, 53.66273, 59.22886, 53.66273, 53.65537, 53.66273, 53.65537, 60.1542, 53.65537, 60.41688, 53.43911, 60.62742, 53.17006, 60.62742, 53.17006, 60.62742],
			segments: [1, 2, 4, 2, 4, 2, 4, 2, 4, 2, 2, 2, 4, 2, 4, 2, 2, 4, 2]
		}, {
			type: "shape",
			shadowColor: "#1ABC9C",
			background: "#000000",
			points: [56.21111, 19.11398, 40.59837, 2.34525, 40.23096, 1.94622, 39.70418, 1.92216, 39.15478, 1.92216, 8.11505, 1.92216, 7.04265, 1.92216, 6.07649, 2.35795, 6.07649, 3.40366, 6.07649, 60.1542, 6.07649, 61.1999, 7.04299, 62.07784, 8.11505, 62.07784, 13.93496, 62.07784, 15.00736, 62.07784, 15.87481, 61.28546, 15.87481, 60.23975, 15.87481, 59.19405, 15.00702, 58.40166, 13.93496, 58.40166, 9.84618, 58.40166, 9.84618, 5.59867, 35.20824, 5.59867, 35.20824, 21.86677, 35.20824, 22.91248, 36.27174, 23.64538, 37.3438, 23.64538, 52.6875, 23.64538, 52.6875, 35.56255, 52.6875, 36.60826, 53.67148, 37.45412, 54.74388, 37.45412, 55.81629, 37.45412, 56.80027, 36.60793, 56.80027, 35.56255, 56.80027, 20.28301, 56.80027, 19.81747, 56.52917, 19.46155, 56.21111, 19.11398, 56.21111, 19.11398, 39.32101, 6.67546, 51.68947, 19.9692, 39.32101, 19.9692, 39.32101, 6.67546, 39.32101, 6.67546],
			segments: [1, 2, 4, 2, 4, 2, 4, 2, 4, 4, 2, 2, 2, 2, 4, 2, 2, 4, 4, 2, 4, 2, 1, 2, 2, 2, 2]
		}]
	}), ht.Default.setImage("editor.sound", {
		width: 64,
		height: 64,
		fitSize: !0,
		comps: [{
			type: "shape",
			background: "#000000",
			points: [56.21111, 19.11398, 40.59837, 2.34525, 40.23096, 1.94622, 39.70418, 1.92216, 39.15478, 1.92216, 8.11505, 1.92216, 7.04265, 1.92216, 6.07649, 2.35795, 6.07649, 3.40366, 6.07649, 60.1542, 6.07649, 61.1999, 7.04299, 62.07784, 8.11505, 62.07784, 13.93496, 62.07784, 15.00736, 62.07784, 15.87481, 61.28546, 15.87481, 60.23975, 15.87481, 59.19405, 15.00702, 58.40166, 13.93496, 58.40166, 9.84618, 58.40166, 9.84618, 5.59867, 35.20824, 5.59867, 35.20824, 21.86677, 35.20824, 22.91248, 36.27174, 23.64538, 37.3438, 23.64538, 52.6875, 23.64538, 52.6875, 35.56255, 52.6875, 36.60826, 53.67148, 37.45412, 54.74388, 37.45412, 55.81629, 37.45412, 56.80027, 36.60793, 56.80027, 35.56255, 56.80027, 20.28301, 56.80027, 19.81747, 56.52917, 19.46155, 56.21111, 19.11398, 56.21111, 19.11398, 39.32101, 6.67546, 51.68947, 19.9692, 39.32101, 19.9692, 39.32101, 6.67546, 39.32101, 6.67546],
			segments: [1, 2, 4, 2, 4, 2, 4, 2, 4, 4, 2, 2, 2, 2, 4, 2, 2, 4, 4, 2, 4, 2, 1, 2, 2, 2, 2]
		}, {
			type: "shape",
			background: "#231815",
			points: [29.93506, 40.65719, 29.93506, 52.11129, 29.99768, 52.17391, 38.01482, 58.31199, 38.01482, 53.06642, 38.01482, 39.70982, 38.01482, 34.45641, 29.93506, 40.65719, 29.93506, 40.65719, 29.93506, 40.65719, 29.93506, 40.65719, 44.44257, 36.03797, 44.44257, 36.03797, 43.87107, 35.70912, 43.69881, 34.9732, 44.02766, 34.40163, 44.37211, 33.84573, 45.10803, 33.65787, 45.66393, 33.99448, 47.80131, 35.26287, 49.59417, 37.09491, 50.81553, 39.2714, 52.01338, 41.37743, 52.71019, 43.80448, 52.71019, 46.38028, 52.71019, 48.95608, 52.01338, 51.38313, 50.81553, 53.48924, 49.59417, 55.65789, 47.80131, 57.49777, 45.66393, 58.77392, 45.10803, 59.1262, 44.37211, 58.93834, 44.02766, 58.35901, 43.69881, 57.79528, 43.87107, 57.05152, 44.44257, 56.7305, 46.24326, 55.65789, 47.71518, 54.13119, 48.7486, 52.32266, 49.73508, 50.57675, 50.30665, 48.55685, 50.30665, 46.38812, 50.30665, 44.23514, 49.72724, 42.19948, 48.7486, 40.46141, 47.71518, 38.63721, 46.23542, 37.10275, 44.44257, 36.03797, 44.44257, 36.03797, 44.44257, 36.03797, 28.49449, 40.89991, 28.49449, 40.89991, 23.62472, 40.89991, 23.62472, 51.86073, 28.49449, 51.86073, 28.49449, 40.89991, 28.49449, 40.89991, 28.49449, 40.89991, 28.80767, 38.51197, 28.80767, 38.51197, 38.42189, 31.14469, 38.64118, 30.96459, 38.91517, 30.86286, 39.21267, 30.86286, 39.88597, 30.86286, 40.41052, 31.38741, 40.41052, 32.05287, 40.41052, 39.70982, 40.41052, 39.97605, 41.53008, 40.43014, 42.47745, 41.16606, 43.21337, 42.09776, 44.14506, 43.28777, 44.7088, 44.76753, 44.7088, 46.38812, 44.7088, 48.00879, 44.1529, 49.50414, 43.21337, 50.67856, 42.50096, 51.61017, 41.53008, 52.33834, 40.41052, 52.80027, 40.41052, 53.07426, 40.41052, 60.72336, 40.41052, 60.99743, 40.32439, 61.24015, 40.1678, 61.45936, 39.76073, 61.97607, 39.01698, 62.07788, 38.50019, 61.67073, 28.82334, 54.25651, 22.46606, 54.25651, 22.43471, 54.25651, 21.77708, 54.25651, 21.23686, 53.72412, 21.23686, 53.06642, 21.23686, 39.73333, 21.23686, 39.70982, 21.23686, 39.04435, 21.76924, 38.51197, 22.43471, 38.51197, 28.80767, 38.51197, 28.80767, 38.51197, 28.80767, 38.51197, 40.40269, 41.5497, 40.40269, 41.5497, 40.40269, 51.21878, 41.06823, 50.85858, 41.62405, 50.37322, 42.08598, 49.79381, 42.8219, 48.86219, 43.26039, 47.6721, 43.26039, 46.38812, 43.26039, 45.11197, 42.81414, 43.92196, 42.08598, 42.98243, 41.62405, 42.39526, 41.06039, 41.90982, 40.40269, 41.5497, 40.40269, 41.5497, 40.40269, 41.5497],
			segments: [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 4, 4, 2, 2, 4, 4, 4, 4, 2, 2, 4, 4, 2, 2, 2, 4, 2, 2, 4, 2, 2, 2, 1, 2, 2, 4, 4, 4, 4, 2, 2]
		}]
	}), ht.Default.setImage("editor.video", {
		width: 64,
		height: 64,
		fitSize: !0,
		comps: [{
			type: "shape",
			background: "#000000",
			points: [56.21111, 19.11398, 40.59837, 2.34525, 40.23096, 1.94622, 39.70418, 1.92216, 39.15478, 1.92216, 8.11505, 1.92216, 7.04265, 1.92216, 6.07649, 2.35795, 6.07649, 3.40366, 6.07649, 60.1542, 6.07649, 61.1999, 7.04299, 62.07784, 8.11505, 62.07784, 13.93496, 62.07784, 15.00736, 62.07784, 15.87481, 61.28546, 15.87481, 60.23975, 15.87481, 59.19405, 15.00702, 58.40166, 13.93496, 58.40166, 9.84618, 58.40166, 9.84618, 5.59867, 35.20824, 5.59867, 35.20824, 21.86677, 35.20824, 22.91248, 36.27174, 23.64538, 37.3438, 23.64538, 52.6875, 23.64538, 52.6875, 35.56255, 52.6875, 36.60826, 53.67148, 37.45412, 54.74388, 37.45412, 55.81629, 37.45412, 56.80027, 36.60793, 56.80027, 35.56255, 56.80027, 20.28301, 56.80027, 19.81747, 56.52917, 19.46155, 56.21111, 19.11398, 56.21111, 19.11398, 39.32101, 6.67546, 51.68947, 19.9692, 39.32101, 19.9692, 39.32101, 6.67546, 39.32101, 6.67546],
			segments: [1, 2, 4, 2, 4, 2, 4, 2, 4, 4, 2, 2, 2, 2, 4, 2, 2, 4, 4, 2, 4, 2, 1, 2, 2, 2, 2]
		}, {
			type: "shape",
			background: "#231815",
			points: [34.79567, 39.50193, 35.8771, 39.50193, 36.86394, 39.06777, 37.56645, 38.36518, 38.28485, 37.63888, 38.7269, 36.65212, 38.7269, 35.57851, 38.7269, 34.497, 38.28485, 33.51024, 37.56645, 32.80765, 36.86394, 32.08933, 35.86927, 31.6472, 34.79567, 31.6472, 33.70626, 31.6472, 32.7274, 32.08933, 32.0169, 32.80765, 31.30641, 33.51024, 30.86435, 34.497, 30.86435, 35.57851, 30.86435, 36.65212, 31.30641, 37.63888, 32.0169, 38.36518, 32.7274, 39.05987, 33.71416, 39.50193, 34.79567, 39.50193, 34.79567, 39.50193, 34.79567, 39.50193, 33.03527, 33.81021, 33.03527, 33.81021, 33.47733, 33.36816, 34.10098, 33.08399, 34.79567, 33.08399, 35.48246, 33.08399, 36.0982, 33.36816, 36.54816, 33.81021, 36.99022, 34.26807, 37.27438, 34.88382, 37.27438, 35.57061, 37.27438, 36.2574, 36.99022, 36.87315, 36.54816, 37.33101, 36.0982, 37.76524, 35.48246, 38.0494, 34.79567, 38.0494, 34.10098, 38.0494, 33.47733, 37.76524, 33.03527, 37.33101, 32.59314, 36.87315, 32.31687, 36.2574, 32.31687, 35.57061, 32.31687, 34.88382, 32.59314, 34.27598, 33.03527, 33.81021, 33.03527, 33.81021, 33.03527, 33.81021, 38.719, 42.35963, 38.719, 42.35963, 39.05848, 43.38583, 39.77688, 44.19107, 40.6768, 44.64103, 42.60298, 45.61989, 44.97913, 44.84625, 45.95008, 42.92007, 46.40794, 42.02015, 46.53422, 40.94655, 46.17901, 39.92027, 45.86323, 38.89408, 45.14484, 38.08884, 44.23702, 37.63888, 43.33711, 37.18892, 42.2714, 37.06264, 41.24513, 37.40995, 40.21894, 37.74943, 39.39789, 38.46775, 38.95583, 39.35984, 38.49007, 40.25185, 38.3796, 41.32546, 38.719, 42.35963, 38.719, 42.35963, 38.719, 42.35963, 40.24257, 40.02292, 40.24257, 40.02292, 40.53471, 39.44669, 41.04781, 38.99665, 41.68726, 38.77563, 42.33454, 38.5704, 43.02923, 38.64144, 43.58184, 38.93351, 44.15808, 39.22558, 44.60803, 39.72295, 44.82124, 40.38604, 45.03436, 41.03339, 44.96332, 41.70438, 44.67907, 42.28851, 44.06341, 43.50428, 42.55557, 43.98577, 41.33198, 43.3543, 40.77937, 43.07005, 40.30578, 42.56486, 40.10048, 41.9175, 39.87945, 41.25442, 39.9663, 40.58343, 40.24257, 40.02292, 40.24257, 40.02292, 40.24257, 40.02292, 40.13209, 46.26716, 40.13209, 46.26716, 39.16114, 46.10935, 38.09543, 46.33828, 37.21915, 46.96976, 36.34286, 47.61711, 35.80606, 48.54073, 35.65607, 49.5354, 35.65607, 49.5354, 35.50608, 50.53006, 35.71929, 51.57996, 36.35076, 52.46415, 36.98231, 53.33245, 37.89803, 53.86926, 38.89269, 54.02714, 38.9243, 54.02714, 41.04781, 54.38235, 43.08447, 52.8904, 43.42395, 50.76689, 43.42395, 50.75899, 43.56604, 49.76433, 43.34501, 48.71435, 42.71346, 47.84604, 42.06618, 46.96976, 41.14256, 46.42505, 40.13209, 46.26716, 40.13209, 46.26716, 40.13209, 46.26716, 39.14533, 52.60623, 39.14533, 52.60623, 39.12953, 52.59833, 38.49797, 52.49568, 37.91384, 52.1641, 37.51912, 51.61157, 37.1244, 51.05896, 36.97441, 50.38798, 37.07706, 49.75642, 37.17181, 49.13278, 37.51912, 48.54073, 38.07172, 48.13021, 38.62433, 47.73549, 39.30322, 47.60131, 39.93469, 47.69606, 40.55044, 47.79081, 41.15046, 48.13021, 41.5451, 48.69072, 41.94772, 49.24333, 42.08981, 49.91431, 41.98724, 50.53796, 41.77403, 51.87993, 40.4794, 52.81936, 39.14533, 52.60623, 39.14533, 52.60623, 39.14533, 52.60623, 49.24984, 57.84791, 49.24984, 57.84791, 41.37939, 57.84791, 46.82629, 55.31388, 50.46553, 49.76433, 50.46553, 43.63056, 50.46553, 39.30453, 48.70514, 35.38909, 45.86323, 32.54719, 43.03714, 29.72109, 39.12162, 27.9607, 34.79567, 27.9607, 26.1594, 27.9607, 19.12572, 34.99437, 19.12572, 43.63056, 19.12572, 47.94079, 20.88612, 51.87993, 23.71222, 54.69813, 26.54622, 57.54003, 30.46963, 59.30043, 34.79567, 59.30043, 35.20611, 59.30043, 35.29296, 59.30043, 49.24984, 59.30043, 49.64456, 59.30043, 49.96816, 58.96893, 49.96816, 58.57421, 49.96816, 58.17158, 49.64456, 57.84791, 49.24984, 57.84791, 49.24984, 57.84791, 49.24984, 57.84791, 34.79567, 56.88485, 34.79567, 56.88485, 31.13271, 56.88485, 27.81723, 55.39282, 25.42528, 53.00087, 23.01761, 50.5853, 21.54138, 47.28553, 21.54138, 43.62266, 21.54138, 36.34425, 27.51725, 30.36837, 34.79567, 30.36837, 38.45064, 30.36837, 41.77403, 31.8525, 44.15808, 34.25227, 46.56583, 36.64422, 48.04206, 39.96769, 48.04206, 43.62266, 48.04206, 47.28553, 46.55793, 50.6011, 44.16598, 53.00087, 41.68726, 55.48757, 38.30856, 56.88485, 34.79567, 56.88485, 34.79567, 56.88485, 34.79567, 56.88485, 28.91446, 44.64103, 28.91446, 44.64103, 29.80655, 44.18317, 30.54067, 43.38583, 30.86435, 42.35173, 31.19593, 41.32546, 31.08538, 40.25976, 30.63542, 39.35984, 29.67237, 37.44156, 27.25672, 36.66002, 25.35424, 37.63888, 23.42015, 38.62564, 22.64651, 41.00178, 23.62545, 42.92007, 24.07541, 43.81998, 24.88057, 44.53838, 25.90684, 44.86206, 26.94884, 45.20146, 28.02245, 45.09889, 28.91446, 44.64103, 28.91446, 44.64103, 28.91446, 44.64103, 26.3647, 43.51211, 26.3647, 43.51211, 25.71735, 43.29108, 25.20425, 42.82532, 24.91218, 42.28069, 24.29643, 41.0492, 24.79373, 39.54136, 26.00942, 38.92561, 27.22519, 38.30986, 28.73294, 38.79143, 29.34869, 40.02292, 29.63286, 40.59134, 29.7118, 41.25442, 29.50658, 41.90178, 29.28555, 42.54905, 28.81979, 43.06215, 28.27509, 43.34639, 27.69877, 43.63056, 27.01198, 43.71741, 26.3647, 43.51211, 26.3647, 43.51211, 26.3647, 43.51211, 29.44344, 46.26716, 29.44344, 46.26716, 27.31195, 46.59874, 25.85153, 48.61178, 26.17521, 50.72738, 26.17521, 50.75899, 26.33309, 51.75365, 26.8778, 52.69308, 27.73828, 53.32455, 28.59876, 53.9561, 29.66447, 54.17713, 30.62752, 54.02714, 30.66703, 54.01924, 32.80634, 53.67194, 34.25886, 51.66681, 33.92728, 49.52749, 33.60361, 47.39609, 31.58275, 45.94356, 29.44344, 46.26716, 29.44344, 46.26716, 29.44344, 46.26716, 32.50637, 49.75642, 32.50637, 49.75642, 32.7274, 51.1063, 31.80378, 52.39303, 30.44593, 52.60623, 30.4223, 52.61413, 29.79865, 52.7009, 29.13557, 52.55091, 28.59086, 52.14837, 28.04616, 51.75365, 27.69877, 51.15371, 27.5962, 50.53006, 27.5962, 50.50635, 27.3909, 49.17229, 28.33032, 47.90128, 29.66447, 47.69606, 31.00644, 47.48293, 32.29317, 48.40655, 32.50637, 49.75642, 32.50637, 49.75642, 32.50637, 49.75642, 32.50637, 49.75642, 37.44808, 43.63056, 37.44808, 43.63056, 37.44808, 42.89644, 37.1481, 42.22537, 36.67444, 41.75171, 36.18497, 41.27022, 35.52189, 40.96235, 34.79567, 40.96235, 34.06147, 40.96235, 33.39048, 41.27022, 32.90891, 41.75171, 32.43525, 42.23328, 32.14318, 42.89644, 32.14318, 43.63056, 32.14318, 44.36469, 32.43525, 45.02785, 32.90891, 45.50933, 33.39838, 45.983, 34.06147, 46.28297, 34.79567, 46.28297, 36.25609, 46.28297, 37.44808, 45.08308, 37.44808, 43.63056, 37.44808, 43.63056, 37.44808, 43.63056, 34.79567, 44.83835, 34.79567, 44.83835, 34.45619, 44.83835, 34.14831, 44.71207, 33.93519, 44.49104, 33.71416, 44.28574, 33.5878, 43.96997, 33.5878, 43.63846, 33.5878, 43.31479, 33.71416, 42.99901, 33.93519, 42.77798, 34.14831, 42.56486, 34.45619, 42.42277, 34.79567, 42.42277, 35.11927, 42.42277, 35.42714, 42.55695, 35.64817, 42.77798, 35.86927, 42.99901, 36.01136, 43.31479, 36.01136, 43.63846, 36.01136, 44.30155, 35.46665, 44.83835, 34.79567, 44.83835, 34.79567, 44.83835, 34.79567, 44.83835],
			segments: [1, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 1, 2, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 1, 2, 4, 4, 4, 4, 4, 4, 4, 2, 2, 1, 2, 4, 4, 4, 4, 4, 4, 4, 2, 2, 1, 2, 4, 4, 2, 4, 4, 2, 4, 2, 4, 4, 2, 2, 1, 2, 2, 4, 4, 4, 4, 4, 4, 4, 2, 2, 1, 2, 2, 4, 4, 4, 4, 4, 4, 2, 2, 2, 4, 4, 2, 2, 1, 2, 4, 4, 4, 4, 4, 4, 4, 2, 2, 1, 2, 4, 4, 4, 4, 4, 4, 2, 2, 1, 2, 4, 4, 4, 4, 4, 4, 2, 2, 1, 2, 4, 2, 4, 4, 2, 4, 4, 2, 2, 1, 2, 4, 2, 4, 4, 2, 4, 4, 2, 2, 2, 1, 2, 4, 4, 4, 4, 4, 4, 4, 2, 2, 1, 2, 4, 4, 4, 4, 4, 4, 4, 2, 2]
		}]
	}), ht.Default.setImage("editor.flipx", {
		width: 16,
		height: 16,
		comps: [{
			type: "shape",
			points: [8, 1, 8, 14],
			segments: [1, 2],
			borderWidth: 1,
			borderColor: hV.config.color_dark
		}, {
			type: "shape",
			points: [6, 3, 6, 13, 2, 13],
			background: hV.config.color_dark
		}, {
			type: "shape",
			points: [10, 3, 10, 13, 14, 13],
			background: hV.config.color_select
		}]
	}), ht.Default.setImage("editor.flipy", {
		width: 16,
		height: 16,
		comps: [{
			type: "shape",
			points: [2, 8, 15, 8],
			segments: [1, 2],
			borderWidth: 1,
			borderColor: hV.config.color_dark
		}, {
			type: "shape",
			points: [3, 6, 13, 6, 3, 2],
			background: hV.config.color_dark
		}, {
			type: "shape",
			points: [3, 10, 13, 10, 3, 14],
			background: hV.config.color_select
		}]
	}), ht.Default.setImage("editor.resetsize", {
		width: 16,
		height: 16,
		comps: [{
			type: "shape",
			borderWidth: 1,
			borderColor: "white",
			points: [8, 1, 8, 6, 6, 3, 8, 1, 10, 3, 8, 10, 8, 15, 6, 13, 8, 15, 10, 13, 1, 8, 6, 8, 3, 6, 1, 8, 3, 10, 10, 8, 15, 8, 13, 6, 15, 8, 13, 10],
			segments: [1, 2, 1, 2, 2, 1, 2, 1, 2, 2, 1, 2, 1, 2, 2, 1, 2, 1, 2, 2]
		}]
	}), ht.Default.setImage("editor.func", {
		width: 16,
		height: 16,
		comps: [{
			type: "border",
			rect: [0, 0, 16, 16],
			width: 1,
			color: "#E4E4E4"
		}, {
			type: "text",
			rect: [0, 0, 16, 16],
			text: "F",
			align: "center",
			color: "black"
		}]
	}), ht.Default.setImage("editor.comp", {
		fitSize: !0,
		comps: [{
			type: {
				func: function(q) {
					return q.compType
				},
				isSafeFunc: !0
			}
		}]
	}), ht.Default.setImage("editor.oops", {
		width: 128,
		height: 128,
		comps: [{
			type: "oval",
			background: "rgb(255,255,255)",
			borderWidth: 2,
			borderColor: "rgb(61,61,61)",
			rect: [21.53429, 22.96531, 88.8981, 74.69064]
		}, {
			type: "shape",
			background: "rgb(237,237,237)",
			borderColor: "#979797",
			points: [34.08079, 87.52544, 34.08079, 87.52544, 59.57908, 97.75645, 77.79215, 90.58303, 96.00522, 83.40961, 106.8249, 68.87436, 109.71641, 51.69689, 109.71641, 51.69689, 117.89865, 74.48774, 101.34821, 87.52544, 84.79777, 100.56314, 59.50721, 102.27801, 46.42474, 94.29524],
			segments: [1, 4, 4, 4, 4]
		}, {
			type: "arc",
			background: "rgb(196,185,185)",
			borderColor: "rgb(61,61,61)",
			arcTo: 0,
			arcOval: !0,
			rotation: 3.14159,
			rect: [32.3979, 36.49467, 28.49791, 18.12387]
		}, {
			type: "arc",
			background: "rgb(196,185,185)",
			borderColor: "rgb(61,61,61)",
			arcTo: 0,
			arcOval: !0,
			rotation: 3.14159,
			rect: [68.95508, 36.49467, 28.49791, 18.12387]
		}, {
			type: "shape",
			background: "rgb(149,224,245)",
			borderColor: "#979797",
			points: [39.9814, 51.13901, 39.9814, 51.13901, 32.00842, 57.90113, 30.56723, 66.4088, 29.12604, 74.91647, 34.21664, 85.16969, 34.21664, 85.16969, 39.0516, 89.44677, 39.0516, 89.44677, 36.05169, 79.68945, 37.3999, 70.48443, 38.74811, 61.27941, 44.44444, 52.62669, 44.44444, 52.62669, 39.9814, 51.13901, 39.9814, 51.13901],
			segments: [1, 4, 4, 2, 4, 4, 2, 2]
		}, {
			type: "shape",
			background: "rgb(149,224,245)",
			borderColor: "#979797",
			scaleX: -1,
			points: [97.67259, 49.56003, 97.67259, 49.56003, 89.6996, 57.90113, 88.25841, 66.4088, 86.81722, 74.91647, 91.8398, 85.99598, 91.8398, 85.99598, 96.74279, 89.44677, 96.74279, 89.44677, 93.74288, 79.68945, 95.09109, 70.48443, 96.4393, 61.27941, 102.44264, 50.50641, 102.44264, 50.50641, 97.67259, 49.56003],
			segments: [1, 4, 4, 2, 4, 4, 2]
		}, {
			type: "shape",
			borderWidth: 2,
			borderColor: "rgb(61,61,61)",
			borderCap: "round",
			points: [59.61377, 32.055, 59.61377, 32.055, 61.61221, 36.91182, 59.19747, 38.71578, 56.78274, 40.51974, 34.08079, 42.18493, 34.08079, 42.18493],
			segments: [1, 4, 4]
		}, {
			type: "shape",
			borderWidth: 2,
			borderColor: "rgb(61,61,61)",
			borderCap: "round",
			scaleX: -1,
			points: [94.48806, 32.055, 94.48806, 32.055, 96.4865, 36.91182, 94.07177, 38.71578, 91.65703, 40.51974, 68.95508, 42.18493, 68.95508, 42.18493],
			segments: [1, 4, 4]
		}, {
			type: "shape",
			borderWidth: 2,
			borderColor: "rgb(61,61,61)",
			borderCap: "round",
			points: [67.02409, 33.58143, 67.02409, 33.58143, 64.9426, 37.74441, 67.02409, 39.68714],
			segments: [1, 4]
		}, {
			type: "arc",
			background: "rgb(255,255,255)",
			borderWidth: 2,
			borderColor: "rgb(61,61,61)",
			arcTo: 0,
			arcOval: !0,
			rotation: 3.14159,
			rect: [68.95508, 40.07324, 28.49791, 11.89121]
		}, {
			type: "arc",
			background: "rgb(255,255,255)",
			borderWidth: 2,
			borderColor: "rgb(61,61,61)",
			arcTo: 0,
			arcOval: !0,
			rotation: 3.14159,
			rect: [32.3979, 40.07323, 28.49791, 11.89121]
		}, {
			type: "shape",
			borderWidth: 2,
			borderColor: "rgb(61,61,61)",
			borderCap: "round",
			points: [60.89581, 46.6003, 56.70566, 57.66949, 39.6779, 55.58118, 39.6779, 55.58118],
			segments: [1, 4]
		}, {
			type: "shape",
			borderWidth: 2,
			borderColor: "rgb(61,61,61)",
			borderCap: "round",
			scaleX: -1,
			points: [90.173, 46.6003, 85.98284, 57.66949, 68.95508, 55.58118, 68.95508, 55.58118],
			segments: [1, 4]
		}, {
			type: "shape",
			background: "rgb(61,61,61)",
			borderColor: "#979797",
			points: [40.88134, 45.66533, 40.88134, 50.44931, 49.68823, 51.31913, 49.03586, 45.66533, 40.99007, 45.5566]
		}, {
			type: "shape",
			background: "rgb(61,61,61)",
			borderColor: "#979797",
			points: [78.31735, 45.66533, 78.31735, 50.44931, 87.12423, 51.31913, 86.47187, 45.66533, 78.42607, 45.5566]
		}, {
			type: "shape",
			borderWidth: 2,
			borderColor: "rgb(61,61,61)",
			borderCap: "round",
			points: [36.81151, 80.08117, 46.71402, 84.60188, 54.03326, 76.42155, 61.35251, 85.46297, 73.83828, 76.20628, 86.96987, 83.95607, 93.85858, 76.85209, 99.24038, 80.08117]
		}, {
			type: "shape",
			background: "rgb(237,237,237)",
			borderColor: "rgb(61,61,61)",
			borderCap: "round",
			points: [95.58345, 31.98512, 95.58345, 31.98512, 104.33563, 25.53184, 105.97087, 18.7394, 107.6061, 11.94695, 113.65647, 33.63444, 105.97087, 42.39888],
			segments: [1, 4, 4]
		}, {
			type: "shape",
			background: "rgb(237,237,237)",
			borderColor: "rgb(61,61,61)",
			borderCap: "round",
			rotation: .2618,
			points: [44.41276, 23.77714, 38.68944, 23.77714, 33.30496, 20.23699, 28.88983, 14.5401, 24.47469, 8.84321, 22.55729, 35.68983, 32.04166, 40.72938],
			segments: [1, 4, 4]
		}, {
			type: "oval",
			borderWidth: 2,
			borderColor: "rgb(61,61,61)",
			rect: [21.53429, 22.96531, 88.8981, 74.69064]
		}, {
			type: "shape",
			borderWidth: 2,
			borderColor: "rgb(61,61,61)",
			borderCap: "round",
			points: [93.19422, 30.5138, 93.19422, 30.5138, 96.32695, 28.82985, 99.04364, 25.51534, 100.63358, 23.57553, 102.08422, 21.24706, 102.68792, 18.7394, 104.32316, 11.94695, 112.13179, 31.92062, 104.44618, 40.68506],
			segments: [1, 4, 4, 4]
		}, {
			type: "shape",
			borderWidth: 2,
			borderColor: "rgb(61,61,61)",
			borderCap: "round",
			rotation: .2618,
			points: [40.62881, 26.14647, 34.90549, 26.14647, 32.31798, 22.75803, 27.90285, 17.06114, 23.48771, 11.36426, 18.41848, 35.24736, 27.90285, 40.28692],
			segments: [1, 4, 4]
		}, {
			type: "oval",
			background: "rgb(255,255,255)",
			borderColor: "#979797",
			anchorX: .41176,
			anchorY: .88889,
			rect: [91.52207, 49.98659, 1.67215, 3.35736]
		}, {
			type: "oval",
			background: "rgb(255,255,255)",
			borderColor: "#979797",
			anchorX: .41176,
			anchorY: .88889,
			rect: [39.44815, 49.46033, 2.86639, 3.35736]
		}]
	}), ht.Default.setImage("editor.block", {
		background: "rgb(179,179,179)",
		width: 16,
		height: 16,
		blendMode: "override",
		comps: [{
			type: "shape",
			background: "rgb(255,227,199)",
			borderWidth: 1,
			borderColor: "rgb(138,138,138)",
			borderCap: "round",
			shadowColor: "#1ABC9C",
			points: [15, 14.5, 1, 14.5, 1, 1.50001, 7, 1.50001, 8, 3.50001, 15, 3.50001, 15, 14.5]
		}, {
			type: "rect",
			background: "rgb(255,255,255)",
			borderWidth: 1,
			borderColor: "rgb(138,138,138)",
			rect: [5.5, 7.22625, 6, 5]
		}, {
			type: "circle",
			background: "rgb(255,255,255)",
			borderWidth: 1,
			borderColor: "rgb(138,138,138)",
			rect: [2.5, 4.72625, 6, 5]
		}]
	}), ht.Default.setImage("editor.group", {
		background: "rgb(179,179,179)",
		width: 16,
		height: 16,
		blendMode: "override",
		comps: [{
			type: "shape",
			background: "rgb(255,227,199)",
			borderWidth: 1,
			borderColor: "rgb(138,138,138)",
			borderCap: "round",
			shadowColor: "#1ABC9C",
			points: [15.5, 15.5, .5, 15.5, .5, .5, 6.92857, .5, 8.00001, 2.80769, 15.5, 2.80769, 15.5, 15.5]
		}, {
			type: "shape",
			background: "rgb(255,255,255)",
			borderWidth: 1,
			borderColor: "rgb(138,138,138)",
			borderCap: "round",
			shadowColor: "#1ABC9C",
			points: [2.82964, 11.54111, 13.17036, 11.54111, 13.17036, 13.12467, 13.17036, 5.20688, 2.82964, 5.20688, 2.82964, 13.12467, 13.17036, 13.12467, 7.26137, 13.12467, 5.78413, 15.5, 10.21588, 15.5, 8.84426, 13.12467, 13.17036, 13.12467, 13.17036, 11.54111]
		}]
	}), ht.Default.setImage("editor.subgraph", {
		background: "rgb(179,179,179)",
		width: 16,
		height: 16,
		blendMode: "override",
		comps: [{
			type: "shape",
			background: "rgb(255,227,199)",
			borderWidth: 1,
			borderColor: "rgb(138,138,138)",
			borderCap: "round",
			shadowColor: "#1ABC9C",
			points: [15.5, 15.5, .5, 15.5, .5, .5, 6.92857, .5, 8.00001, 2.80769, 15.5, 2.80769, 15.5, 15.5]
		}, {
			type: "shape",
			background: "rgb(255,255,255)",
			borderWidth: 1,
			borderColor: "rgb(138,138,138)",
			closePath: !0,
			points: [4.90316, 8.05737, 4.90316, 8.05737, 4.30121, 6.50546, 5.25104, 5.82166, 6.20086, 5.13787, 7.09165, 5.82166, 7.09165, 5.82166, 7.09165, 5.82166, 7.76857, 4.36921, 9.6391, 4.91013, 11.50964, 5.45106, 11.09684, 8.05737, 11.09684, 8.05737, 11.09684, 8.05737, 12.482, 8.53031, 12.482, 9.79106, 12.482, 10.86629, 11.67411, 11.63079, 11.09684, 11.63079, 4.90316, 11.63079, 4.31315, 11.63079, 3.518, 10.84732, 3.518, 9.79106, 3.518, 8.56402, 4.90316, 8.05737, 4.90316, 8.05737],
			segments: [1, 4, 4, 4, 4, 4, 4, 2, 4, 4]
		}, {
			type: "shape",
			borderWidth: 1,
			borderColor: "rgb(138,138,138)",
			borderJoin: "miter",
			points: [13, 13.5, 8.02409, 13.5, 8, 9, 8.02409, 13.5, 3, 13.5]
		}]
	}), ht.Default.setImage("editor.restore", {
		background: "rgb(179,179,179)",
		width: 16,
		height: 16,
		blendMode: "override",
		comps: [{
			type: "triangle",
			background: "rgb(138,138,138)",
			borderWidth: 1,
			borderColor: "rgb(138,138,138)",
			shadowColor: "#1ABC9C",
			rotation: 1.5708,
			rect: [7.5, 1.71892, 3, 2]
		}, {
			type: "arc",
			borderWidth: 1,
			borderColor: "rgb(138,138,138)",
			borderCap: "round",
			arcFrom: 0,
			arcTo: 4.7124,
			arcClose: !1,
			shadowColor: "#1ABC9C",
			rect: [2, 2.78108, 12, 12]
		}]
	}), ht.Default.setImage("editor.add", {
		background: "rgb(150,150,150)",
		width: 16,
		height: 16,
		comps: [{
			type: "shape",
			borderWidth: 1,
			borderColor: "rgb(255,255,255)",
			rotation: 3.14159,
			points: [9.47991, 2.5, 13.48953, 7.4, 9.47991, 7.4, 9.47991, 2.5, 2.48953, 2.5, 2.48953, 13.5, 13.48953, 13.5, 13.48953, 7.4]
		}]
	}), ht.Default.setImage("editor.delete", {
		background: "rgb(89,89,89)",
		width: 16,
		height: 16,
		comps: [{
			type: "shape",
			borderWidth: 1,
			borderColor: "rgb(255,255,255)",
			borderCap: "round",
			shadowColor: "#1ABC9C",
			points: [5.5, 5.57173, 5.5, 12.45709]
		}, {
			type: "shape",
			borderWidth: 1,
			borderColor: "rgb(255,255,255)",
			borderCap: "round",
			shadowColor: "#1ABC9C",
			points: [8.05685, 5.57173, 8.05685, 12.45709]
		}, {
			type: "shape",
			borderWidth: 1,
			borderColor: "rgb(255,255,255)",
			borderCap: "round",
			shadowColor: "#1ABC9C",
			points: [10.5, 5.57173, 10.5, 12.45709]
		}, {
			type: "shape",
			borderWidth: 1,
			borderColor: "rgb(255,255,255)",
			borderCap: "round",
			shadowColor: "#1ABC9C",
			points: [1, 3.18902, 15, 3.16996, 5.32652, 3.16021, 6.32652, 1.16021, 9.32652, 1.16021, 10.32652, 3.16021]
		}, {
			type: "rect",
			borderWidth: 1,
			borderColor: "rgb(255,255,255)",
			shadowColor: "#1ABC9C",
			rect: [3.33333, 3.18902, 9.33334, 11.65078]
		}]
	}), ht.Default.setImage("editor.import", {
		background: "rgb(179,179,179)",
		width: 16,
		height: 16,
		comps: [{
			type: "triangle",
			borderColor: "rgb(255,255,255)",
			borderWidth: 1,
			rotation: 1.5708,
			rect: [7.5, 1.71892, 3, 2]
		}, {
			type: "arc",
			borderWidth: 1,
			borderColor: "rgb(255,255,255)",
			borderCap: "round",
			arcFrom: 0,
			arcTo: 4.7124,
			arcClose: !1,
			rect: [2, 2.78108, 12, 12]
		}]
	}), ht.Default.setImage("editor.top", {
		background: "rgb(145,145,145)",
		width: 16,
		height: 16,
		comps: [{
			type: "rightTriangle",
			borderWidth: 1,
			borderColor: "rgb(255,255,255)",
			shadowColor: "#1ABC9C",
			rotation: 2.35619,
			rect: [3.86035, 6.44002, 8.20153, 8.2581]
		}, {
			type: "shape",
			borderWidth: 1,
			borderColor: "rgb(255,255,255)",
			borderCap: "round",
			shadowColor: "#1ABC9C",
			rotation: 3.14159,
			points: [2.14176, 4.58061, 13.85824, 4.51881]
		}]
	}), ht.Default.setImage("editor.up", {
		background: "rgb(145,145,145)",
		width: 16,
		height: 16,
		comps: [{
			type: "rightTriangle",
			borderWidth: 1,
			borderColor: "rgb(255,255,255)",
			shadowColor: "#1ABC9C",
			rotation: 2.35619,
			rect: [3.89924, 6.05159, 8.20153, 8.2581]
		}]
	}), ht.Default.setImage("editor.down", {
		background: "rgb(145,145,145)",
		width: 16,
		height: 16,
		comps: [{
			type: "rightTriangle",
			borderWidth: 1,
			borderColor: "rgb(255,255,255)",
			shadowColor: "#1ABC9C",
			rotation: 5.49779,
			rect: [3.89924, .69031, 8.20153, 8.2581]
		}]
	}), ht.Default.setImage("editor.bottom", {
		background: "rgb(145,145,145)",
		width: 16,
		height: 16,
		comps: [{
			type: "rightTriangle",
			borderWidth: 1,
			borderColor: "rgb(255,255,255)",
			shadowColor: "#1ABC9C",
			rotation: 5.49779,
			rect: [3.93812, .69031, 8.20153, 8.2581]
		}, {
			type: "shape",
			borderWidth: 1,
			borderColor: "rgb(255,255,255)",
			borderCap: "round",
			shadowColor: "#1ABC9C",
			rotation: 3.14159,
			points: [2.14176, 10.85024, 13.85824, 10.78844]
		}]
	}), ht.Default.setImage("editor.menu", {
		background: "rgb(179,179,179)",
		width: 16,
		height: 16,
		blendMode: "override",
		comps: [{
			type: "shape",
			borderWidth: 1,
			borderColor: "rgb(138,138,138)",
			borderCap: "round",
			shadowColor: "#1ABC9C",
			points: [.93729, 4, 14.93729, 4]
		}, {
			type: "shape",
			borderWidth: 1,
			borderColor: "rgb(138,138,138)",
			borderCap: "round",
			shadowColor: "#1ABC9C",
			points: [1.06271, 8, 15.06271, 8]
		}, {
			type: "shape",
			borderWidth: 1,
			borderColor: "rgb(138,138,138)",
			borderCap: "round",
			shadowColor: "#1ABC9C",
			points: [1.06271, 12, 15.06271, 12]
		}]
	}), ht.Default.setImage("editor.undo", {
		background: "rgb(191,191,191)",
		width: 16,
		height: 16,
		comps: [{
			type: "shape",
			background: "rgb(255,255,255)",
			shadowColor: "#1ABC9C",
			points: [9.9945, 5.006, 6.0345, 5.006, 6.0345, 3.527, 6.0345, 3.336, 5.9255, 3.162, 5.7545, 3.078, 5.5825, 2.994, 5.3785, 3.015, 5.2275, 3.132, 2.4795, 5.264, 2.3575, 5.359, 2.2865, 5.505, 2.2865, 5.659, 2.2865, 5.813, 2.3575, 5.959, 2.4795, 6.054, 5.2275, 8.186, 5.3175, 8.256, 5.4255, 8.292, 5.5345, 8.292, 5.6095, 8.292, 5.6845, 8.275, 5.7545, 8.241, 5.9255, 8.157, 6.0345, 7.983, 6.0345, 7.792, 6.0345, 6.006, 9.9945, 6.006, 11.5445, 6.006, 12.7135, 7.296, 12.7135, 9.006, 12.7135, 10.689, 11.4815, 12.006, 9.9085, 12.006, 5.0345, 12.006, 4.7585, 12.006, 4.5345, 12.23, 4.5345, 12.506, 4.5345, 12.782, 4.7585, 13.006, 5.0345, 13.006, 9.9085, 13.006, 12.0425, 13.006, 13.7135, 11.249, 13.7135, 9.006, 13.7135, 6.763, 12.0795, 5.006, 9.9945, 5.006, 9.9945, 5.006],
			segments: [1, 2, 2, 4, 4, 2, 4, 4, 2, 4, 4, 4, 2, 2, 4, 4, 2, 4, 4, 2, 4, 4, 2]
		}]
	}), ht.Default.setImage("editor.redo", {
		background: "rgb(191,191,191)",
		width: 16,
		height: 16,
		comps: [{
			type: "shape",
			background: "rgb(255,255,255)",
			shadowColor: "#1ABC9C",
			scaleX: -1,
			points: [9.9945, 5.006, 6.0345, 5.006, 6.0345, 3.527, 6.0345, 3.336, 5.9255, 3.162, 5.7545, 3.078, 5.5825, 2.994, 5.3785, 3.015, 5.2275, 3.132, 2.4795, 5.264, 2.3575, 5.359, 2.2865, 5.505, 2.2865, 5.659, 2.2865, 5.813, 2.3575, 5.959, 2.4795, 6.054, 5.2275, 8.186, 5.3175, 8.256, 5.4255, 8.292, 5.5345, 8.292, 5.6095, 8.292, 5.6845, 8.275, 5.7545, 8.241, 5.9255, 8.157, 6.0345, 7.983, 6.0345, 7.792, 6.0345, 6.006, 9.9945, 6.006, 11.5445, 6.006, 12.7135, 7.296, 12.7135, 9.006, 12.7135, 10.689, 11.4815, 12.006, 9.9085, 12.006, 5.0345, 12.006, 4.7585, 12.006, 4.5345, 12.23, 4.5345, 12.506, 4.5345, 12.782, 4.7585, 13.006, 5.0345, 13.006, 9.9085, 13.006, 12.0425, 13.006, 13.7135, 11.249, 13.7135, 9.006, 13.7135, 6.763, 12.0795, 5.006, 9.9945, 5.006, 9.9945, 5.006],
			segments: [1, 2, 2, 4, 4, 2, 4, 4, 2, 4, 4, 4, 2, 2, 4, 4, 2, 4, 4, 2, 4, 4, 2]
		}]
	}), ht.Default.setImage("editor.edit", {
		background: "rgb(179,179,179)",
		width: 16,
		height: 16,
		blendMode: "override",
		comps: [{
			type: "shape",
			borderWidth: 1,
			borderColor: "rgb(51,153,255)",
			shadowColor: "#1ABC9C",
			rotation: 5.49779,
			closePath: !0,
			points: [6, -.83884, .5, 13.16116, 6.04966, 10.58206, 11.5, 13.16116, 6, -.83884]
		}]
	}), ht.Default.setImage("editor.rulers", {
		background: "rgb(179,179,179)",
		width: 16,
		height: 16,
		blendMode: "override",
		comps: [{
			type: "shape",
			borderWidth: 1,
			borderColor: "rgb(138,138,138)",
			borderCap: "round",
			shadowColor: "#1ABC9C",
			rotation: 1.5708,
			points: [1.50517, 1.5, 1.5, 4.49799, 2.47337, 4.49798, 1.5, 4.49799, 1.50003, 14.5, 11.23413, 14.48019, 11.23413, 13.48171, 11.23413, 14.47896, 14.5, 14.47897, 4.00002, 14.47899, 4.00001, 12.00001, 1.50521, 12.00002]
		}, {
			type: "shape",
			borderWidth: 1,
			borderColor: "rgb(138,138,138)",
			borderCap: "round",
			shadowColor: "#1ABC9C",
			points: [14, 6, 14, 14, 6, 14]
		}]
	}), ht.Default.setImage("editor.grid", {
		background: "rgb(179,179,179)",
		width: 16,
		height: 16,
		blendMode: "override",
		comps: [{
			type: "shape",
			borderWidth: 1,
			borderColor: "rgb(138,138,138)",
			borderCap: "round",
			shadowColor: "#1ABC9C",
			points: [4.49468, 1.49999, 4.5, 14.49999, 4.49468, 11.53541, 1.5, 11.51432, 14.5, 11.51432, 11.52105, 11.53541, 11.52105, 14.49999, 11.52105, 1.49999, 11.5, 4.50429, 14.5, 4.50429, 1.5, 4.50429]
		}]
	}), ht.Default.setImage("editor.save", {
		background: "rgb(179,179,179)",
		width: 16,
		height: 16,
		blendMode: "override",
		comps: [{
			type: "shape",
			borderWidth: 1,
			borderColor: "rgb(138,138,138)",
			shadowColor: "#1ABC9C",
			points: [3.66183, 14.5, 14.5, 14.5, 14.5, 4.83454, 10.71984, 1.5, 3.66183, 1.5, 3.66183, 6.18654, 10.71984, 6.18654, 10.71984, 1.5, 1.5, 1.5, 1.5, 14.5, 3.66183, 14.5, 3.66183, 9.03168, 12.17213, 9.03168, 12.17213, 14.5]
		}]
	}), ht.Default.setImage("editor.preview", {
		background: "rgb(179,179,179)",
		width: 16,
		height: 16,
		blendMode: "override",
		comps: [{
			type: "shape",
			borderWidth: 1,
			borderColor: "rgb(138,138,138)",
			borderCap: "round",
			points: [1.9869, 6.489, 2, 2, 14, 8, 1.9869, 14, 2, 9.555]
		}]
	}), ht.Default.setImage("editor.reload", {
		background: "rgb(179,179,179)",
		width: 16,
		height: 16,
		blendMode: "override",
		comps: [{
			type: "triangle",
			background: "rgb(138,138,138)",
			borderWidth: 1,
			borderColor: "rgb(138,138,138)",
			shadowColor: "#1ABC9C",
			rotation: 1.5708,
			rect: [7.5, 1.71892, 3, 2]
		}, {
			type: "arc",
			borderWidth: 1,
			borderColor: "rgb(138,138,138)",
			borderCap: "round",
			arcFrom: 0,
			arcTo: 4.7124,
			arcClose: !1,
			shadowColor: "#1ABC9C",
			rect: [2, 2.78108, 12, 12]
		}]
	}), ht.Default.setImage("editor.zoomout", {
		width: 16,
		height: 16,
		comps: [{
			type: "shape",
			borderWidth: 1,
			borderColor: "white",
			points: [2, 8, 14, 8]
		}]
	}), ht.Default.setImage("editor.zoomin", {
		width: 16,
		height: 16,
		comps: [{
			type: "shape",
			borderWidth: 1,
			borderColor: "white",
			points: [2, 8, 14, 8, 8, 2, 8, 14],
			segments: [1, 2, 1, 2]
		}]
	}), ht.Default.setImage("editor.zoomtofit", {
		background: "rgb(179,179,179)",
		gridLightColor: "rgba(0,0,0,0.20)",
		width: 16,
		height: 16,
		blendMode: "override",
		comps: [{
			type: "shape",
			borderWidth: 1,
			borderColor: "rgb(138,138,138)",
			borderCap: "round",
			shadowColor: "#1ABC9C",
			points: [8.00001, 11.91764, 8.00001, 15]
		}, {
			type: "triangle",
			background: "rgb(138,138,138)",
			borderWidth: 1,
			borderColor: "rgb(138,138,138)",
			shadowColor: "#1ABC9C",
			rotation: -1.5708,
			rect: [9.75, 7.24608, 2, 1.5]
		}, {
			type: "shape",
			borderWidth: 1,
			borderColor: "rgb(138,138,138)",
			borderCap: "round",
			shadowColor: "#1ABC9C",
			rotation: -1.5708,
			points: [13.516, 6.484, 13.516, 9.51599]
		}, {
			type: "shape",
			borderWidth: 1,
			borderColor: "rgb(138,138,138)",
			borderCap: "round",
			shadowColor: "#1ABC9C",
			rotation: -3.14159,
			points: [8.00001, .99999, 8.00001, 4.08236]
		}, {
			type: "shape",
			borderWidth: 1,
			borderColor: "rgb(138,138,138)",
			borderCap: "round",
			shadowColor: "#1ABC9C",
			rotation: 1.5708,
			points: [2.516, 6.4801, 2.516, 9.51209]
		}, {
			type: "triangle",
			background: "rgb(138,138,138)",
			borderWidth: 1,
			borderColor: "rgb(138,138,138)",
			shadowColor: "#1ABC9C",
			rotation: 1.5708,
			rect: [4.25, 7.24608, 2, 1.5]
		}, {
			type: "triangle",
			background: "rgb(138,138,138)",
			borderWidth: 1,
			borderColor: "rgb(138,138,138)",
			shadowColor: "#1ABC9C",
			rotation: 3.14159,
			rect: [7.00001, 4.5, 2, 1.5]
		}, {
			type: "triangle",
			background: "rgb(138,138,138)",
			borderWidth: 1,
			borderColor: "rgb(138,138,138)",
			shadowColor: "#1ABC9C",
			rotation: 6.28319,
			rect: [7, 10, 2, 1.5]
		}]
	}), ht.Default.setImage("editor.toggleleft", {
		background: "rgb(179,179,179)",
		width: 16,
		height: 16,
		blendMode: "override",
		comps: [{
			type: "rect",
			borderWidth: 1,
			borderColor: "rgb(138,138,138)",
			shadowColor: "#1ABC9C",
			rotation: 1.5708,
			rect: [2.50002, 1.00002, 10.99995, 13.99996]
		}, {
			type: "shape",
			borderWidth: 1,
			borderColor: "rgb(138,138,138)",
			borderCap: "round",
			shadowColor: "#1ABC9C",
			points: [3.49001, 5.50001, 3.51001, 10.49999]
		}]
	}), ht.Default.setImage("editor.toggleboth", {
		background: "rgb(179,179,179)",
		width: 16,
		height: 16,
		blendMode: "override",
		comps: [{
			type: "rect",
			borderWidth: 1,
			borderColor: "rgb(138,138,138)",
			shadowColor: "#1ABC9C",
			rotation: 1.5708,
			rect: [2.5, 1, 11, 14]
		}]
	}), ht.Default.setImage("editor.toggleright", {
		background: "rgb(179,179,179)",
		width: 16,
		height: 16,
		blendMode: "override",
		comps: [{
			type: "rect",
			borderWidth: 1,
			borderColor: "rgb(138,138,138)",
			shadowColor: "#1ABC9C",
			rotation: 1.5708,
			rect: [2.50002, 1.00002, 10.99995, 13.99996]
		}, {
			type: "shape",
			borderWidth: 1,
			borderColor: "rgb(138,138,138)",
			borderCap: "round",
			shadowColor: "#1ABC9C",
			points: [12.49999, 5.50001, 12.51999, 10.49999]
		}]
	}), ht.Default.setImage("editor.layout.helper", ht.Default.parse(JSON.stringify({
		dataBindings: [{
			attr: "selectColor",
			valueType: "Color",
			defaultValue: "#60ACFC"
		}, {
			attr: "layout.h",
			valueType: "String"
		}, {
			attr: "layout.v",
			valueType: "String"
		}],
		width: 100,
		height: 100,
		interactive: !0,
		disableSelectedBorder: !0,
		pixelPerfect: !1,
		comps: [{
			type: "rect",
			borderColor: "#979797",
			displayName: "\u5de6\u4fa7\u4ea4\u4e92",
			rect: [5.51795, 27.5, 20.9641, 44.5],
			onDown: "__ht__function(event, data, view, point, width, height) {\ndata.a('layout.h', 'left');\n}"
		}, {
			type: "rect",
			borderColor: "#979797",
			displayName: "\u53f3\u4fa7\u4ea4\u4e92",
			rect: [74.0359, 27.5, 20.9641, 45],
			onDown: "__ht__function(event, data, view, point, width, height) {\ndata.a('layout.h', 'right');\n}"
		}, {
			type: "rect",
			borderColor: "#979797",
			displayName: "\u4e0a\u4fa7\u4ea4\u4e92",
			rect: [27.5, 6, 45, 20],
			onDown: "__ht__function(event, data, view, point, width, height) {\ndata.a('layout.v', 'top');\n}"
		}, {
			type: "rect",
			borderColor: "#979797",
			displayName: "\u4e0b\u4fa7\u4ea4\u4e92",
			rect: [27.5, 74, 45, 20],
			onDown: "__ht__function(event, data, view, point, width, height) {\ndata.a('layout.v', 'bottom');\n}"
		}, {
			type: "rect",
			borderColor: "#979797",
			displayName: "\u6a2a\u5411\u4e2d\u5fc3\u4ea4\u4e92",
			rect: [28.22051, 44, 16, 12],
			onDown: "__ht__function(event, data, view, point, width, height) {\ndata.a('layout.h', 'center');\n}"
		}, {
			type: "rect",
			borderColor: "#979797",
			displayName: "\u6a2a\u5411\u4e2d\u5fc3\u4ea4\u4e92",
			rect: [55.77949, 44, 16, 12],
			onDown: "__ht__function(event, data, view, point, width, height) {\ndata.a('layout.h', 'center');\n}"
		}, {
			type: "rect",
			borderColor: "#979797",
			displayName: "\u7eb5\u5411\u4e2d\u5fc3\u4ea4\u4e92",
			rect: [44.22051, 28, 11.55897, 16],
			onDown: "__ht__function(event, data, view, point, width, height) {\ndata.a('layout.v', 'center');\n}"
		}, {
			type: "rect",
			borderColor: "#979797",
			displayName: "\u7eb5\u5411\u4e2d\u5fc3\u4ea4\u4e92",
			rect: [44.22051, 56, 11.55897, 16],
			onDown: "__ht__function(event, data, view, point, width, height) {\ndata.a('layout.v', 'center');\n}"
		}, {
			type: "rect",
			borderWidth: 1,
			borderColor: "#d4d4d4",
			rect: [5, 5, 90, 90]
		}, {
			type: "rect",
			borderWidth: 1,
			borderColor: "#d4d4d4",
			borderPattern: [6, 6],
			rect: [27.5, 27.5, 45, 45]
		}, {
			type: "rect",
			background: {
				func: "__ht__function(data, view) {\nvar layoutH = data.a('layout.h');\nif (layoutH === 'left' || layoutH === 'leftright') {\n    return data.a('selectColor');\n}\nreturn '#d4d4d4';\n}",
				value: "#D4D4D4"
			},
			borderColor: "#979797",
			rect: [8, 48, 16, 4]
		}, {
			type: "rect",
			background: {
				func: "__ht__function(data, view) {\nvar layoutH = data.a('layout.h');\nif (layoutH === 'right' || layoutH === 'leftright') {\n    return data.a('selectColor');\n}\nreturn '#d4d4d4';\n}",
				value: "#D8D8D8"
			},
			borderColor: "#979797",
			rect: [76, 48, 16, 4]
		}, {
			type: "rect",
			background: {
				func: "__ht__function(data, view) {\nvar layoutH = data.a('layout.h');\nif (layoutH === 'center') {\n    return data.a('selectColor');\n}\nreturn '#d4d4d4';\n}",
				value: "#D8D8D8"
			},
			borderColor: "#979797",
			rect: [34, 48, 32, 4],
			onDown: "__ht__function(event, data, view, point, width, height) {\ndata.a('layout.h', 'center');\n}"
		}, {
			type: "rect",
			background: {
				func: "__ht__function(data, view) {\nvar layoutV = data.a('layout.v');\nif (layoutV === 'bottom' || layoutV === 'topbottom') {\n    return data.a('selectColor');\n}\nreturn '#d4d4d4';\n}",
				value: "#D8D8D8"
			},
			borderColor: "#979797",
			rect: [48, 76, 4, 16]
		}, {
			type: "rect",
			background: {
				func: "__ht__function(data, view) {\nvar layoutV = data.a('layout.v');\nif (layoutV === 'top' || layoutV === 'topbottom') {\n    return data.a('selectColor');\n}\nreturn '#d4d4d4';\n}",
				value: "#D8D8D8"
			},
			borderColor: "#979797",
			rect: [48, 8, 4, 16]
		}, {
			type: "rect",
			background: {
				func: "__ht__function(data, view) {\nvar layoutV = data.a('layout.v');\nif (layoutV === 'center') {\n    return data.a('selectColor');\n}\nreturn '#d4d4d4';\n}",
				value: "#D8D8D8"
			},
			borderColor: "#979797",
			rect: [48, 34, 4, 32],
			onDown: "__ht__function(event, data, view, point, width, height) {\ndata.a('layout.v', 'center');\n}"
		}, {
			type: "rect",
			background: {
				func: "__ht__function(data, view) {\nif (data.a('layout.h') === 'center' || data.a('layout.v')  === 'center') {\n    return data.a('selectColor');\n}\nreturn '#d4d4d4';\n}",
				value: "#D8D8D8"
			},
			borderColor: "#979797",
			rect: [48, 48, 4, 4]
		}]
	}))), ht.Default.setImage("editor.display.rect", {
		background: "rgb(179,179,179)",
		width: 16,
		height: 16,
		blendMode: "override",
		comps: [{
			type: "rect",
			borderWidth: 1,
			borderColor: "rgb(138,138,138)",
			shadowColor: "#1ABC9C",
			rect: [2.5, 1.5, 11, 13]
		}]
	}), ht.Default.setImage("editor.display.oval", {
		background: "rgb(179,179,179)",
		width: 16,
		height: 16,
		blendMode: "override",
		comps: [{
			type: "circle",
			borderWidth: 1,
			borderColor: "rgb(138,138,138)",
			shadowColor: "#1ABC9C",
			rect: [1, 1, 14, 14]
		}]
	}), ht.Default.setImage("editor.display.roundrect", {
		background: "rgb(179,179,179)",
		width: 16,
		height: 16,
		blendMode: "override",
		comps: [{
			type: "roundRect",
			borderWidth: 1,
			borderColor: "rgb(138,138,138)",
			cornerRadius: 2.5,
			shadowColor: "#1ABC9C",
			rect: [2.5, 1, 11, 14]
		}]
	}), ht.Default.setImage("editor.display.triangle", {
		background: "rgb(179,179,179)",
		width: 16,
		height: 16,
		blendMode: "override",
		comps: [{
			type: "shape",
			borderWidth: 1,
			borderColor: "rgb(138,138,138)",
			borderCap: "round",
			rotation: 4.71239,
			points: [1.00872, 1, 14.99345, 8, .99345, 15, 1.00872, 1]
		}]
	}), ht.Default.setImage("editor.display.polygon", {
		width: 16,
		height: 16,
		comps: [{
			type: "polygon",
			rect: [1, 1, 14, 14],
			borderColor: "white",
			borderWidth: 1
		}]
	}), ht.Default.setImage("editor.display.star", {
		width: 16,
		height: 16,
		comps: [{
			type: "star",
			rect: [1, 1, 14, 14],
			borderColor: "white",
			borderWidth: 1
		}]
	}), ht.Default.setImage("editor.display.arc", {
		width: 16,
		height: 16,
		comps: [{
			type: "arc",
			rect: [1, 1, 14, 14],
			arcFrom: 0,
			arcTo: 4.1888,
			borderColor: "white",
			borderWidth: 1
		}]
	}), ht.Default.setImage("editor.display.shape", {
		background: "rgb(179,179,179)",
		width: 16,
		height: 16,
		blendMode: "override",
		comps: [{
			type: "arc",
			borderWidth: 1,
			borderColor: "rgb(138,138,138)",
			shadowColor: "#1ABC9C",
			rotation: -2.35619,
			rect: [6.45666, .50222, 10, 8]
		}, {
			type: "oval",
			background: "rgb(138,138,138)",
			borderColor: "rgb(138,138,138)",
			shadowColor: "#1ABC9C",
			rotation: -2.35619,
			rect: [4.92983, 8.48004, 2.48323, 2.47136]
		}, {
			type: "shape",
			borderWidth: 1,
			borderColor: "rgb(138,138,138)",
			borderCap: "round",
			shadowColor: "#1ABC9C",
			rotation: -2.35619,
			points: [.71918, 15.84031, -.26373, 13.78, 4.61411, 6.85806, 4.66212, 13.2497, 4.61411, 6.85806, 9.56535, 13.77996, 8.58245, 15.84028]
		}]
	}), ht.Default.setImage("editor.display.node", {
		background: "rgb(179,179,179)",
		width: 16,
		height: 16,
		blendMode: "override",
		comps: [{
			type: "shape",
			borderWidth: 1,
			borderColor: "rgb(138,138,138)",
			borderCap: "round",
			shadowColor: "#1ABC9C",
			points: [1.5, 9.38462, 14.5, 9.38462, 14.5, 11.23077, 14.5, 2, 1.5, 2, 1.5, 11.23077, 14.5, 11.23077, 7.07143, 11.23077, 5, 15, 11, 15, 8.92857, 11.23077]
		}]
	}), ht.Default.setImage("editor.display.group", {
		background: "rgb(179,179,179)",
		width: 16,
		height: 16,
		blendMode: "override",
		comps: [{
			type: "shape",
			borderWidth: 1,
			borderColor: "rgb(138,138,138)",
			borderCap: "round",
			shadowColor: "#1ABC9C",
			points: [13, 12.5, 13, 10.54, 3, 10.54, 13, 10.54, 13, 5.5, 3, 5.5, 3, 12.5, 13, 12.5, 7, 12.5, 5.85714, 15.5, 10.14287, 15.5, 9, 12.5]
		}, {
			type: "shape",
			borderWidth: 1,
			borderColor: "rgb(138,138,138)",
			borderCap: "round",
			shadowColor: "#1ABC9C",
			points: [15.5, 15.5, .5, 15.5, .5, .5, 6.92857, .5, 8, 2.19286, 15.5, 2.19286, 15.5, 15.5]
		}]
	}), ht.Default.setImage("editor.display.edge", {
		background: "rgb(179,179,179)",
		width: 16,
		height: 16,
		blendMode: "override",
		comps: [{
			type: "circle",
			borderWidth: 1,
			borderColor: "rgb(138,138,138)",
			shadowColor: "#1ABC9C",
			rect: [.69044, .97071, 4, 4.00837]
		}, {
			type: "circle",
			borderWidth: 1,
			borderColor: "rgb(138,138,138)",
			shadowColor: "#1ABC9C",
			rect: [11.27696, 10.99163, 4, 4.00837]
		}, {
			type: "shape",
			borderWidth: 1,
			borderColor: "rgb(138,138,138)",
			shadowColor: "#1ABC9C",
			points: [4.35933, 3.02819, 7.84441, 2.9749, 7.84441, 12.99581, 11.64067, 12.99581]
		}]
	}), ht.Default.setImage("editor.display.text", {
		background: "rgb(179,179,179)",
		width: 16,
		height: 16,
		blendMode: "override",
		comps: [{
			type: "shape",
			borderWidth: 1,
			borderColor: "rgb(138,138,138)",
			borderCap: "round",
			shadowColor: "#1ABC9C",
			points: [1, 15, 8.06501, 1, 15, 15, 12.38059, 9.8, 4.10171, 9.8]
		}]
	}), ht.Default.setImage("editor.display.subgraph", {
		gridThickColor: "rgb(191,191,191)",
		width: 16,
		height: 16,
		blendMode: "override",
		comps: [{
			type: "shape",
			borderWidth: 1,
			borderColor: "rgb(207,207,207)",
			visible: !1,
			closePath: !0,
			points: [2.81788, 9.09381, 2.81788, 9.09381, 1.38027, 6.92868, 3.20223, 5.43826, 5.02418, 3.94784, 6.51488, 5.43826, 6.51488, 5.43826, 6.51488, 5.43826, 7.61273, 3.06338, 10.74281, 3.94784, 13.87289, 4.8323, 13.18212, 9.09381, 13.18212, 9.09381, 13.18212, 9.09381, 15.5, 9.8671, 15.5, 11.92851, 15.5, 13.6866, 14.14811, 14.93662, 13.18212, 14.93662, 2.81788, 14.93662, 1.83057, 14.93662, .5, 13.65558, .5, 11.92851, .5, 9.92221, 2.81788, 9.09381, 2.81788, 9.09381],
			segments: [1, 4, 4, 4, 4, 4, 4, 2, 4, 4]
		}, {
			type: "rect",
			borderWidth: 1,
			borderColor: "rgb(138,138,138)",
			shadowColor: "#1ABC9C",
			rect: [4.99379, 5.52777, 6, 4.47223]
		}, {
			type: "circle",
			background: "rgb(138,138,138)",
			borderColor: "rgb(138,138,138)",
			visible: !1,
			shadowColor: "#1ABC9C",
			rect: [4, 6.43826, 2, 2]
		}, {
			type: "arc",
			borderWidth: 1,
			borderColor: "rgb(138,138,138)",
			borderCap: "round",
			arcFrom: 3.15905,
			arcTo: 5.5676,
			arcClose: !1,
			visible: !1,
			shadowColor: "#1ABC9C",
			rect: [2.5, 3.11794, 5, 5]
		}, {
			type: "arc",
			borderWidth: 1,
			borderColor: "rgb(138,138,138)",
			borderCap: "round",
			arcFrom: 3.57792,
			arcTo: 6.6497,
			arcClose: !1,
			visible: !1,
			shadowColor: "#1ABC9C",
			rect: [5.63862, 1.53868, 9.36138, 7.15852]
		}, {
			type: "arc",
			borderWidth: 1,
			borderColor: "rgb(138,138,138)",
			borderCap: "round",
			arcFrom: 1.5708,
			arcTo: 3.87463,
			arcClose: !1,
			visible: !1,
			shadowColor: "#1ABC9C",
			rect: [-1, 6.56338, 8.99379, 5.93662]
		}, {
			type: "arc",
			borderWidth: 1,
			borderColor: "rgb(138,138,138)",
			borderCap: "round",
			arcFrom: 5.00909,
			arcTo: 1.5708,
			arcClose: !1,
			visible: !1,
			shadowColor: "#1ABC9C",
			rect: [8.00621, 6.56338, 8.99379, 5.93662]
		}, {
			type: "shape",
			borderWidth: 1,
			borderColor: "rgb(138,138,138)",
			borderCap: "round",
			visible: !1,
			points: [3.4969, 12.5, 12.5031, 12.5]
		}, {
			type: "shape",
			borderWidth: 1,
			borderColor: "rgb(138,138,138)",
			points: [9.72, 12.5, 8, 10, 6.34, 12.5]
		}, {
			type: "circle",
			background: "rgb(138,138,138)",
			borderColor: "rgb(138,138,138)",
			shadowColor: "#1ABC9C",
			displayName: "\u5706\u5f62",
			rect: [0, 0, 2, 2]
		}, {
			type: "shape",
			borderWidth: 1,
			borderColor: "rgb(138,138,138)",
			borderJoin: "miter",
			points: [15, 15.5, 8.02409, 15.5, 8.02409, 14, 8.02409, 15.5, 1, 15.5]
		}, {
			type: "shape",
			borderWidth: 1,
			borderColor: "rgb(138,138,138)",
			closePath: !0,
			points: [2.81167, 6.59481, 2.81167, 6.59481, 1.80439, 4.03022, 3.39379, 2.90023, 4.98319, 1.77025, 6.47379, 2.90023, 6.47379, 2.90023, 6.47379, 2.90023, 7.60652, .5, 10.7366, 1.3939, 13.86668, 2.28781, 13.17591, 6.59481, 13.17591, 6.59481, 13.17591, 6.59481, 15.49379, 7.37636, 15.49379, 9.45978, 15.49379, 11.23663, 14.1419, 12.5, 13.17591, 12.5, 2.81167, 12.5, 1.82436, 12.5, .49379, 11.20528, .49379, 9.45978, .49379, 7.43206, 2.81167, 6.59481, 2.81167, 6.59481],
			segments: [1, 4, 4, 4, 4, 4, 4, 2, 4, 4]
		}]
	}), ht.Default.setImage("editor.symbol.rect", {
		background: "rgb(179,179,179)",
		width: 16,
		height: 16,
		blendMode: "override",
		comps: [{
			type: "rect",
			borderWidth: 1,
			borderColor: "rgb(138,138,138)",
			shadowColor: "#1ABC9C",
			rect: [2.5, 1.5, 11, 13]
		}]
	}), ht.Default.setImage("editor.symbol.oval", {
		background: "rgb(179,179,179)",
		width: 16,
		height: 16,
		blendMode: "override",
		comps: [{
			type: "circle",
			borderWidth: 1,
			borderColor: "rgb(138,138,138)",
			shadowColor: "#1ABC9C",
			rect: [1, 1, 14, 14]
		}]
	}), ht.Default.setImage("editor.symbol.roundrect", {
		background: "rgb(179,179,179)",
		width: 16,
		height: 16,
		blendMode: "override",
		comps: [{
			type: "roundRect",
			borderWidth: 1,
			borderColor: "rgb(138,138,138)",
			cornerRadius: 2.5,
			shadowColor: "#1ABC9C",
			rect: [2.5, 1, 11, 14]
		}]
	}), ht.Default.setImage("editor.symbol.triangle", {
		background: "rgb(179,179,179)",
		width: 16,
		height: 16,
		blendMode: "override",
		comps: [{
			type: "shape",
			borderWidth: 1,
			borderColor: "rgb(138,138,138)",
			borderCap: "round",
			rotation: 4.71239,
			points: [1.00872, 1, 14.99345, 8, .99345, 15, 1.00872, 1]
		}]
	}), ht.Default.setImage("editor.symbol.polygon", {
		width: 16,
		height: 16,
		comps: [{
			type: "polygon",
			rect: [1, 1, 14, 14],
			borderColor: "white",
			borderWidth: 1
		}]
	}), ht.Default.setImage("editor.symbol.star", {
		width: 16,
		height: 16,
		comps: [{
			type: "star",
			rect: [1, 1, 14, 14],
			borderColor: "white",
			borderWidth: 1
		}]
	}), ht.Default.setImage("editor.symbol.arc", {
		width: 16,
		height: 16,
		comps: [{
			type: "arc",
			rect: [1, 1, 14, 14],
			arcFrom: 0,
			arcTo: 4.1888,
			borderColor: "white",
			borderWidth: 1
		}]
	}), ht.Default.setImage("editor.symbol.image", {
		background: "rgb(156,156,156)",
		width: 16,
		height: 16,
		comps: [{
			type: "rect",
			borderWidth: 1,
			borderColor: "rgb(255,255,255)",
			rect: [.5, 1.96, 15, 12]
		}, {
			type: "circle",
			background: "rgb(255,255,255)",
			borderColor: "rgb(255,255,255)",
			rect: [3.32103, 4.48721, 1.5, 1.5]
		}, {
			type: "shape",
			borderWidth: 1,
			borderColor: "rgb(255,255,255)",
			borderCap: "round",
			points: [2.18757, 9.112, 6.11684, 9.112, 7.77072, 10.39241, 9.50807, 13.68975, 9.69338, 14.04145, 9.04982, 12.34611, 7.45717, 10.69236, 7.45717, 10.69236, 8.72728, 5.98721, 14.05092, 5.98721],
			segments: [1, 4, 4, 4]
		}]
	}), ht.Default.setImage("editor.symbol.shape", {
		background: "rgb(179,179,179)",
		width: 16,
		height: 16,
		blendMode: "override",
		comps: [{
			type: "arc",
			borderWidth: 1,
			borderColor: "rgb(138,138,138)",
			shadowColor: "#1ABC9C",
			rotation: -2.35619,
			rect: [6.45666, .50222, 10, 8]
		}, {
			type: "oval",
			background: "rgb(138,138,138)",
			borderColor: "rgb(138,138,138)",
			shadowColor: "#1ABC9C",
			rotation: -2.35619,
			rect: [4.92983, 8.48004, 2.48323, 2.47136]
		}, {
			type: "shape",
			borderWidth: 1,
			borderColor: "rgb(138,138,138)",
			borderCap: "round",
			shadowColor: "#1ABC9C",
			rotation: -2.35619,
			points: [.71918, 15.84031, -.26373, 13.78, 4.61411, 6.85806, 4.66212, 13.2497, 4.61411, 6.85806, 9.56535, 13.77996, 8.58245, 15.84028]
		}]
	}), ht.Default.setImage("editor.symbol.border", {
		background: "rgb(179,179,179)",
		width: 16,
		height: 16,
		blendMode: "override",
		comps: [{
			type: "shape",
			borderWidth: 1,
			borderColor: "rgb(138,138,138)",
			borderCap: "round",
			points: [.5, 6.01503, .5, 2, 15.48868, 2, 15.5, 14, .5, 14, .5, 10]
		}]
	}), ht.Default.setImage("editor.symbol.text", {
		background: "rgb(179,179,179)",
		width: 16,
		height: 16,
		blendMode: "override",
		comps: [{
			type: "shape",
			borderWidth: 1,
			borderColor: "rgb(138,138,138)",
			borderCap: "round",
			shadowColor: "#1ABC9C",
			points: [1, 15, 8.06501, 1, 15, 15, 12.38059, 9.8, 4.10171, 9.8]
		}]
	}), ht.Default.setImage("editor.symbol.piechart", {
		background: "rgb(97,97,97)",
		width: 16,
		height: 16,
		comps: [{
			type: "arc",
			borderWidth: 1,
			borderColor: "rgb(255,255,255)",
			arcFrom: .5236,
			arcTo: 4.71239,
			rect: [.53628, 2.06928, 13.08634, 13.08634]
		}, {
			type: "arc",
			borderWidth: 1,
			borderColor: "rgb(255,255,255)",
			arcFrom: 4.71239,
			arcTo: .5236,
			rect: [2.37737, 1, 13.08634, 13.08634]
		}]
	}), ht.Default.setImage("editor.symbol.onedimensionalcolumnchart", {
		background: "rgb(179,179,179)",
		width: 16,
		height: 16,
		blendMode: "override",
		comps: [{
			type: "rect",
			borderWidth: 1,
			borderColor: "rgb(138,138,138)",
			rect: [3.42625, 5.95042, 3, 9.04958]
		}, {
			type: "rect",
			borderWidth: 1,
			borderColor: "rgb(138,138,138)",
			rect: [10.00543, 1, 3, 14]
		}]
	}), ht.Default.setImage("editor.symbol.columnchart", {
		background: "rgb(179,179,179)",
		width: 16,
		height: 16,
		blendMode: "override",
		comps: [{
			type: "rect",
			borderWidth: 1,
			borderColor: "rgb(138,138,138)",
			rect: [1, 9, 3, 6]
		}, {
			type: "rect",
			borderWidth: 1,
			borderColor: "rgb(138,138,138)",
			rect: [4, 5.95042, 3, 9.04958]
		}, {
			type: "rect",
			borderWidth: 1,
			borderColor: "rgb(138,138,138)",
			rect: [9, 1, 3, 14]
		}, {
			type: "rect",
			borderWidth: 1,
			borderColor: "rgb(138,138,138)",
			rect: [12, 10.93747, 3, 4.06253]
		}]
	}), ht.Default.setImage("editor.symbol.linechart", {
		background: "rgb(179,179,179)",
		width: 16,
		height: 16,
		blendMode: "override",
		comps: [{
			type: "shape",
			borderWidth: 1,
			borderColor: "rgb(138,138,138)",
			points: [1, 14, 5, 7, 11, 8, 15, 2]
		}]
	}), ht.Default.setImage("editor.point.mirrored", {
		width: 30,
		height: 30,
		fitSize: !1,
		comps: [{
			type: "arc",
			background: "rgb(202,235,248)",
			borderWidth: 2,
			borderColor: "rgb(17,158,216)",
			arcClose: !1,
			rect: [3.5, 10.30081203536023, 23, 25.3726296254234]
		}, {
			type: "oval",
			background: "rgb(255,255,255)",
			borderWidth: 2,
			borderColor: "rgb(51,51,51)",
			rect: [12, 7.300812035360231, 6, 6]
		}, {
			type: "rect",
			background: "rgb(51,51,51)",
			borderColor: "#979797",
			rect: [17.842265898626422, 9.310233818119592, 9.826713258365732, 2]
		}, {
			type: "rect",
			background: "rgb(51,51,51)",
			borderColor: "#979797",
			rect: [24.713262902082427, 8.310233818119592, 3, 4]
		}, {
			type: "rect",
			background: "rgb(51,51,51)",
			borderColor: "#979797",
			rect: [2.4018068742542837, 9.30081203536023, 9.826713258365732, 2]
		}, {
			type: "rect",
			background: "rgb(51,51,51)",
			borderColor: "#979797",
			rect: [2.286737097917573, 8.310233818119592, 3, 4]
		}]
	}), ht.Default.setImage("editor.point.straight", {
		width: 30,
		height: 30,
		fitSize: !1,
		comps: [{
			type: "shape",
			background: "rgb(200,234,247)",
			borderWidth: 2,
			borderColor: "rgb(17,160,217)",
			points: [26.974999999999998, 23.185840967335317, 15.133692185007973, 10.275109094255685, 3.0250000000000004, 23.185840967335317]
		}, {
			type: "oval",
			background: "rgb(255,255,255)",
			borderWidth: 2,
			borderColor: "rgb(51,51,51)",
			rect: [12, 7.561327956066684, 6, 6]
		}]
	}), ht.Default.setImage("editor.point.disconnected", {
		width: 30,
		height: 30,
		fitSize: !1,
		comps: [{
			type: "shape",
			background: "rgb(200,234,247)",
			borderWidth: 2,
			borderColor: "rgb(17,160,217)",
			points: [3.1940148593724587, 22.95774078992803, 3.1940148593724587, 18.139874123261343, 7.6015038461565965, 10.497740789928038, 14.542032480517832, 10.497740789928038, 26.80598514062754, 22.95774078992803],
			segments: [1, 4, 2]
		}, {
			type: "oval",
			background: "rgb(255,255,255)",
			borderWidth: 2,
			borderColor: "rgb(51,51,51)",
			rect: [12.093814401372779, 7.5391087731804305, 6, 6]
		}, {
			type: "rect",
			background: "rgb(51,51,51)",
			borderColor: "#979797",
			rotation: .7853981633974483,
			rect: [16.36973009802768, 14.555043156001322, 9.826713258365732, 2]
		}, {
			type: "rect",
			background: "rgb(51,51,51)",
			borderColor: "#979797",
			rotation: .7853981633974483,
			rect: [22.831111406474626, 16.51363217953681, 3, 4]
		}, {
			type: "rect",
			background: "rgb(51,51,51)",
			borderColor: "#979797",
			rect: [2.2671011430070465, 9.53910877318043, 9.826713258365732, 2]
		}, {
			type: "rect",
			background: "rgb(51,51,51)",
			borderColor: "#979797",
			rect: [2.152031366670336, 8.548530555939791, 3, 4]
		}]
	}), ht.Default.setImage("editor.point.asymmetric", {
		width: 30,
		height: 30,
		fitSize: !1,
		comps: [{
			type: "shape",
			background: "rgb(200,234,247)",
			borderWidth: 2,
			borderColor: "rgb(17,160,217)",
			points: [3.5000000000000027, 22.974997694265234, 3.5000000000000027, 17.50768540873153, 5.131816608669447, 11.637417102180905, 12.400695544362113, 11.637417102180905, 22.516641067164265, 11.637417102180905, 26.5, 22.974997694265234, 26.5, 22.974997694265234],
			segments: [1, 4, 4]
		}, {
			type: "oval",
			background: "rgb(255,255,255)",
			borderWidth: 2,
			borderColor: "rgb(51,51,51)",
			rect: [9.324670579660944, 7.637417102180905, 6, 6]
		}, {
			type: "rect",
			background: "rgb(51,51,51)",
			borderColor: "#979797",
			rect: [3.405482351035767, 9.637417102180905, 6.540642002660807, 2]
		}, {
			type: "rect",
			background: "rgb(51,51,51)",
			borderColor: "#979797",
			rect: [2.7221578598514142, 8.637417102180905, 3, 4]
		}, {
			type: "rect",
			background: "rgb(51,51,51)",
			borderColor: "#979797",
			rect: [15.278596259040164, 9.637417102180905, 11.965262549245955, 2]
		}, {
			type: "rect",
			background: "rgb(51,51,51)",
			borderColor: "#979797",
			rect: [24.731262324024406, 8.637417102180905, 3, 4]
		}]
	}), ht.Default.setImage("editor.layout.circular", {
		width: 16,
		height: 16,
		comps: [{
			type: "shape",
			background: "white",
			points: [7, 2, 7, 4, 9, 4, 9, 2, 2, 7, 2, 9, 4, 9, 4, 7, 12, 7, 12, 9, 14, 9, 14, 7, 4, 12, 4, 14, 6, 14, 6, 12, 10, 12, 10, 14, 12, 14, 12, 12],
			segments: [1, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2]
		}, {
			type: "shape",
			borderColor: "white",
			borderWidth: 1,
			points: [8, 3, 3, 8, 5, 13, 11, 13, 13, 8],
			segments: [1, 2, 2, 2, 2, 5]
		}]
	}), ht.Default.setImage("editor.layout.symmetric", {
		width: 16,
		height: 16,
		comps: [{
			type: "shape",
			background: "white",
			points: [7, 2, 7, 4, 9, 4, 9, 2, 2, 7, 2, 9, 4, 9, 4, 7, 12, 7, 12, 9, 14, 9, 14, 7, 4, 12, 4, 14, 6, 14, 6, 12, 10, 12, 10, 14, 12, 14, 12, 12],
			segments: [1, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2]
		}, {
			type: "shape",
			borderWidth: 1,
			borderColor: "white",
			points: [8, 8, 8, 3, 8, 8, 3, 8, 8, 8, 5, 13, 8, 8, 11, 13, 8, 8, 13, 8],
			segments: [1, 2, 1, 2, 1, 2, 1, 2, 1, 2]
		}]
	}), ht.Default.setImage("editor.layout.hierarchical", {
		width: 16,
		height: 16,
		comps: [{
			type: "shape",
			background: "white",
			points: [4, 3, 4, 5, 6, 5, 6, 3, 10, 3, 10, 5, 12, 5, 12, 3, 1, 11, 1, 13, 3, 13, 3, 11, 7, 11, 7, 13, 9, 13, 9, 11, 13, 11, 13, 13, 15, 13, 15, 11],
			segments: [1, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2]
		}, {
			type: "shape",
			borderColor: "white",
			borderWidth: 1,
			points: [5, 4, 2, 12, 5, 4, 8, 12, 5, 4, 14, 12, 11, 4, 2, 12, 11, 4, 8, 12, 11, 4, 14, 12],
			segments: [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2]
		}]
	}), ht.Default.setImage("editor.layout.towardnorth", {
		width: 16,
		height: 16,
		comps: [{
			type: "shape",
			background: "white",
			points: [7, 3, 7, 5, 9, 5, 9, 3, 1, 11, 1, 13, 3, 13, 3, 11, 7, 11, 7, 13, 9, 13, 9, 11, 13, 11, 13, 13, 15, 13, 15, 11],
			segments: [1, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2]
		}, {
			type: "shape",
			borderColor: "white",
			borderWidth: 1,
			points: [8, 4, 2, 12, 8, 4, 8, 12, 8, 4, 14, 12],
			segments: [1, 2, 1, 2, 1, 2]
		}]
	}), ht.Default.setImage("editor.layout.towardsouth", {
		width: 16,
		height: 16,
		comps: [{
			type: "image",
			name: "editor.layout.towardnorth",
			rotation: Math.PI,
			rect: [0, 0, 16, 16]
		}]
	}), ht.Default.setImage("editor.layout.towardeast", {
		width: 16,
		height: 16,
		comps: [{
			type: "image",
			name: "editor.layout.towardnorth",
			rotation: .5 * -Math.PI,
			rect: [0, 0, 16, 16]
		}]
	}), ht.Default.setImage("editor.layout.towardwest", {
		width: 16,
		height: 16,
		comps: [{
			type: "image",
			name: "editor.layout.towardnorth",
			rotation: .5 * Math.PI,
			rect: [0, 0, 16, 16]
		}]
	}), ht.Default.setImage("editor.align.distributehorizontal", {
		background: "rgb(150,150,150)",
		width: 16,
		height: 16,
		comps: [{
			type: "shape",
			points: [2, 2, 2, 14, 14, 2, 14, 14],
			segments: [1, 2, 1, 2],
			borderWidth: 1,
			borderCap: "round",
			borderColor: {
				func: function() {
					return hteditor.config.color_dark
				}
			}
		}, {
			type: "shape",
			points: [8, 5, 8, 11],
			borderWidth: 3,
			borderCap: "round",
			borderColor: {
				func: function() {
					return hteditor.config.color_select
				}
			}
		}]
	}), ht.Default.setImage("editor.align.distributevertical", {
		background: "rgb(150,150,150)",
		width: 16,
		height: 16,
		comps: [{
			type: "shape",
			points: [2, 2, 14, 2, 2, 14, 14, 14],
			segments: [1, 2, 1, 2],
			borderWidth: 1,
			borderCap: "round",
			borderColor: {
				func: function() {
					return hteditor.config.color_dark
				}
			}
		}, {
			type: "shape",
			points: [5, 8, 11, 8],
			borderWidth: 3,
			borderCap: "round",
			borderColor: {
				func: function() {
					return hteditor.config.color_select
				}
			}
		}]
	}), ht.Default.setImage("editor.align.alignleft", {
		background: "rgb(150,150,150)",
		width: 16,
		height: 16,
		comps: [{
			type: "shape",
			points: [2, 2, 2, 14],
			segments: [1, 2],
			borderWidth: 1,
			borderCap: "round",
			borderColor: {
				func: function() {
					return hteditor.config.color_dark
				}
			}
		}, {
			type: "shape",
			points: [5, 5, 13, 5, 5, 11, 8, 11],
			segments: [1, 2, 1, 2],
			borderWidth: 3,
			borderCap: "round",
			borderColor: {
				func: function() {
					return hteditor.config.color_select
				}
			}
		}]
	}), ht.Default.setImage("editor.align.alignhorizontal", {
		background: "rgb(150,150,150)",
		width: 16,
		height: 16,
		comps: [{
			type: "shape",
			points: [8, 2, 8, 14],
			segments: [1, 2],
			borderWidth: 1,
			borderCap: "round",
			borderColor: {
				func: function() {
					return hteditor.config.color_dark
				}
			}
		}, {
			type: "shape",
			points: [3, 5, 13, 5, 6, 11, 10, 11],
			segments: [1, 2, 1, 2],
			borderWidth: 3,
			borderCap: "round",
			borderColor: {
				func: function() {
					return hteditor.config.color_select
				}
			}
		}]
	}), ht.Default.setImage("editor.align.alignright", {
		background: "rgb(150,150,150)",
		width: 16,
		height: 16,
		comps: [{
			type: "shape",
			points: [14, 2, 14, 14],
			segments: [1, 2],
			borderWidth: 1,
			borderCap: "round",
			borderColor: {
				func: function() {
					return hteditor.config.color_dark
				}
			}
		}, {
			type: "shape",
			points: [3, 5, 11, 5, 11, 11, 8, 11],
			segments: [1, 2, 1, 2],
			borderWidth: 3,
			borderCap: "round",
			borderColor: {
				func: function() {
					return hteditor.config.color_select
				}
			}
		}]
	}), ht.Default.setImage("editor.align.aligntop", {
		background: "rgb(150,150,150)",
		width: 16,
		height: 16,
		comps: [{
			type: "shape",
			points: [2, 2, 14, 2],
			segments: [1, 2],
			borderWidth: 1,
			borderCap: "round",
			borderColor: {
				func: function() {
					return hteditor.config.color_dark
				}
			}
		}, {
			type: "shape",
			points: [5, 5, 5, 13, 11, 5, 11, 8],
			segments: [1, 2, 1, 2],
			borderWidth: 3,
			borderCap: "round",
			borderColor: {
				func: function() {
					return hteditor.config.color_select
				}
			}
		}]
	}), ht.Default.setImage("editor.align.alignvertical", {
		background: "rgb(150,150,150)",
		width: 16,
		height: 16,
		comps: [{
			type: "shape",
			points: [2, 8, 14, 8],
			segments: [1, 2],
			borderWidth: 1,
			borderCap: "round",
			borderColor: {
				func: function() {
					return hteditor.config.color_dark
				}
			}
		}, {
			type: "shape",
			points: [5, 3, 5, 13, 11, 6, 11, 10],
			segments: [1, 2, 1, 2],
			borderWidth: 3,
			borderCap: "round",
			borderColor: {
				func: function() {
					return hteditor.config.color_select
				}
			}
		}]
	}), ht.Default.setImage("editor.align.alignbottom", {
		background: "rgb(150,150,150)",
		width: 16,
		height: 16,
		comps: [{
			type: "shape",
			points: [2, 14, 14, 14],
			segments: [1, 2],
			borderWidth: 1,
			borderCap: "round",
			borderColor: {
				func: function() {
					return hteditor.config.color_dark
				}
			}
		}, {
			type: "shape",
			points: [5, 3, 5, 11, 11, 11, 11, 8],
			segments: [1, 2, 1, 2],
			borderWidth: 3,
			borderCap: "round",
			borderColor: {
				func: function() {
					return hteditor.config.color_select
				}
			}
		}]
	});
	var An = function() {
		return !0
	};
	Tq("editor.layout.circular"), Tq("editor.layout.symmetric"), Tq("editor.layout.hierarchical"), Tq("editor.layout.towardnorth"), Tq("editor.layout.towardsouth"), Tq("editor.layout.towardeast"), Tq("editor.layout.towardwest"), Tq("editor.root"), Tq("editor.bind", An), Tq("editor.unbind"), Tq("editor.dir"), Tq("editor.dxf"), Tq("editor.sound"), Tq("editor.video"), Tq("editor.resetsize"), Tq("editor.restore"), ht.Data.prototype.$50$ = nV, ht.Data.prototype.$51$ = function(q) {
		return this._refGraph ? [] : [qV.call(this, q), VV]
	}, ht.Node.prototype.$50$ = xV, ht.Node.prototype.$51$ = function(q) {
		return this._refGraph ? [] : [SV.call(this, q), _V]
	}, ht.Edge.prototype.$50$ = KV, ht.Edge.prototype.$51$ = function(q) {
		return this._refGraph ? [] : [OV.call(this, q), wV]
	}, ht.Group.prototype.$51$ = function(q) {
		return this._refGraph ? [] : [gV.call(this, q), AV]
	}, ht.Shape.prototype.$51$ = function(q) {
		return this._refGraph ? [] : [lV.call(this, q), ZV]
	}, ht.Block.prototype.$51$ = function(q) {
		return this._refGraph ? [] : [zV.call(this, q), HV]
	}, ht.RefGraph.prototype.$51$ = function(q) {
		return this._refGraph ? [] : [iV.call(this, q), NV]
	};
	var ln = function(q) {
			function V(n, S, _) {
				YV(this, V);
				var x = QV(this, q.call(this));
				return x.parse(n, S, _), x
			}
			return LV(V, q), V.prototype.getClass = function() {
				return V
			}, V.prototype.toLabel = function() {
				return this.getDisplayName() || _("editor.comptype." + this.s("shape").toLowerCase())
			}, V.prototype.parse = function(q, V, n) {
				q && (Cq(this, "shape", q.type, "rect"), Cq(this, "shape.background", q.background, null), Cq(this, "shape.repeat.image", q.repeatImage), Cq(this, "shape.border.width", q.borderWidth), Cq(this, "shape.border.color", q.borderColor, null), Cq(this, "shape.border.3d", q.border3d), Cq(this, "shape.border.3d.color", q.border3dColor), Cq(this, "shape.border.3d.accuracy", q.border3dAccuracy), Cq(this, "shape.border.cap", q.borderCap), Cq(this, "shape.border.join", q.borderJoin), Cq(this, "shape.border.pattern", q.borderPattern), Cq(this, "shape.gradient", q.gradient), Cq(this, "shape.gradient.color", q.gradientColor), Cq(this, "shape.dash", q.dash), Cq(this, "shape.dash.pattern", q.dashPattern), Cq(this, "shape.dash.offset", q.dashOffset), Cq(this, "shape.dash.color", q.dashColor), Cq(this, "shape.dash.width", q.dashWidth), Cq(this, "shape.dash.3d", q.dash3d), Cq(this, "shape.dash.3d.color", q.dash3dColor), Cq(this, "shape.dash.3d.accuracy", q.dash3dAccuracy), Cq(this, "shape.border.width.absolute", q.borderWidthAbsolute), Cq(this, "shape.fill.clip.direction", q.fillClipDiretion), Cq(this, "shape.fill.clip.percentage", q.fillClipPercentage), "rect" === this.compType ? Cq(this, "shape.depth", q.depth) : "roundRect" === this.compType ? Cq(this, "shape.corner.radius", q.cornerRadius) : "polygon" === this.compType ? Cq(this, "shape.polygon.side", q.polygonSide) : "arc" === this.compType && (Cq(this, "shape.arc.from", q.arcFrom), Cq(this, "shape.arc.to", q.arcTo), Cq(this, "shape.arc.close", q.arcClose), Cq(this, "shape.arc.oval", q.arcOval)), cq(this, q, V, n))
			}, V.prototype.toJSON = function() {
				var q = {};
				return yq(this, q, "shape", "type", void 0), yq(this, q, "shape.background", "background", null), yq(this, q, "shape.repeat.image", "repeatImage"), yq(this, q, "shape.border.width", "borderWidth"), yq(this, q, "shape.border.color", "borderColor", null), yq(this, q, "shape.border.3d", "border3d"), yq(this, q, "shape.border.3d.color", "border3dColor"), yq(this, q, "shape.border.3d.accuracy", "border3dAccuracy"), yq(this, q, "shape.border.cap", "borderCap"), yq(this, q, "shape.border.join", "borderJoin"), yq(this, q, "shape.border.pattern", "borderPattern"), yq(this, q, "shape.gradient", "gradient"), yq(this, q, "shape.gradient.color", "gradientColor"), yq(this, q, "shape.dash", "dash"), yq(this, q, "shape.dash.pattern", "dashPattern"), yq(this, q, "shape.dash.offset", "dashOffset"), yq(this, q, "shape.dash.color", "dashColor"), yq(this, q, "shape.dash.width", "dashWidth"), yq(this, q, "shape.dash.3d", "dash3d"), yq(this, q, "shape.dash.3d.color", "dash3dColor"), yq(this, q, "shape.dash.3d.accuracy", "dash3dAccuracy"), yq(this, q, "shape.border.width.absolute", "borderWidthAbsolute"), yq(this, q, "shape.fill.clip.direction", "fillClipDirection"), yq(this, q, "shape.fill.clip.percentage", "fillClipPercentage"), "rect" === this.compType ? yq(this, q, "shape.depth", "depth") : "roundRect" === this.compType ? yq(this, q, "shape.corner.radius", "cornerRadius") : "polygon" === this.compType ? yq(this, q, "shape.polygon.side", "polygonSide") : "arc" === this.compType && (yq(this, q, "shape.arc.from", "arcFrom"), yq(this, q, "shape.arc.to", "arcTo"), yq(this, q, "shape.arc.close", "arcClose"), yq(this, q, "shape.arc.oval", "arcOval")), Jq(this, q), q
			}, MV(V, [{
				key: "compType",
				get: function() {
					return this.s("shape")
				}
			}]), V
		}(ht.Node),
		Zn = function(q) {
			function V(n, S, _) {
				YV(this, V);
				var x = QV(this, q.call(this));
				return x.parse(n, S, _), x
			}
			return LV(V, q), V.prototype.getClass = function() {
				return V
			}, V.prototype.toLabel = function() {
				return this.getDisplayName() || _("editor.comptype.shape")
			}, V.prototype.parse = function(q, V, n) {
				q && (Cq(this, "type", q.type, "shape"), Cq(this, "shape.background", q.background, null), Cq(this, "shape.repeat.image", q.repeatImage), Cq(this, "shape.border.width", q.borderWidth), Cq(this, "shape.border.color", q.borderColor, null), Cq(this, "shape.border.3d", q.border3d), Cq(this, "shape.border.3d.color", q.border3dColor), Cq(this, "shape.border.3d.accuracy", q.border3dAccuracy), Cq(this, "shape.border.cap", q.borderCap), Cq(this, "shape.border.join", q.borderJoin), Cq(this, "shape.border.pattern", q.borderPattern), Cq(this, "shape.gradient", q.gradient), Cq(this, "shape.gradient.color", q.gradientColor), Cq(this, "shape.dash", q.dash), Cq(this, "shape.dash.pattern", q.dashPattern), Cq(this, "shape.dash.offset", q.dashOffset), Cq(this, "shape.dash.color", q.dashColor), Cq(this, "shape.dash.width", q.dashWidth), Cq(this, "shape.dash.3d", q.dash3d), Cq(this, "shape.dash.3d.color", q.dash3dColor), Cq(this, "shape.dash.3d.accuracy", q.dash3dAccuracy), Cq(this, "shape.fill.rule", q.fillRule), Cq(this, "shape.fill.clip.direction", q.fillClipDiretion), Cq(this, "shape.fill.clip.percentage", q.fillClipPercentage), Cq(this, "shape.gradient.pack", q.gradientPack), Cq(this, "shape.border.width.absolute", q.borderWidthAbsolute), cq(this, q, V, n), dq(this, q), this.setPoints(Mq(Eq(q.points))), this.setSegments(Eq(q.segments)))
			}, V.prototype.toJSON = function() {
				var q = {};
				if(yq(this, q, "type", "type", void 0), yq(this, q, "shape.background", "background", null), yq(this, q, "shape.repeat.image", "repeatImage"), yq(this, q, "shape.border.width", "borderWidth"), yq(this, q, "shape.border.color", "borderColor", null), yq(this, q, "shape.border.3d", "border3d"), yq(this, q, "shape.border.3d.color", "border3dColor"), yq(this, q, "shape.border.3d.accuracy", "border3dAccuracy"), yq(this, q, "shape.border.cap", "borderCap"), yq(this, q, "shape.border.join", "borderJoin"), yq(this, q, "shape.border.pattern", "borderPattern"), yq(this, q, "shape.gradient", "gradient"), yq(this, q, "shape.gradient.color", "gradientColor"), yq(this, q, "shape.dash", "dash"), yq(this, q, "shape.dash.pattern", "dashPattern"), yq(this, q, "shape.dash.offset", "dashOffset"), yq(this, q, "shape.dash.color", "dashColor"), yq(this, q, "shape.dash.width", "dashWidth"), yq(this, q, "shape.dash.3d", "dash3d"), yq(this, q, "shape.dash.3d.color", "dash3dColor"), yq(this, q, "shape.dash.3d.accuracy", "dash3dAccuracy"), yq(this, q, "shape.fill.rule", "fillRule"), yq(this, q, "shape.fill.clip.direction", "fillClipDirection"), yq(this, q, "shape.fill.clip.percentage", "fillClipPercentage"), yq(this, q, "shape.gradient.pack", "gradientPack"), yq(this, q, "shape.border.width.absolute", "borderWidthAbsolute"), Jq(this, q), pq(this, q), bq(q, "points", this.a("points"), Lq(this.getPoints())), this.getSegments()) {
					var V = this.getSegments().toArray();
					if(V.length) {
						var n = 1 === V[0];
						if(n)
							for(var S = 1; S < V.length; S++)
								if(2 !== V[S]) {
									n = !1;
									break
								}
						n || bq(q, "segments", this.a("segments"), V)
					}
				}
				return q
			}, MV(V, [{
				key: "compType",
				get: function() {
					return this.s("type")
				}
			}]), V
		}(ht.Shape),
		zn = function(q) {
			function V(n, S, _) {
				YV(this, V);
				var x = QV(this, q.call(this));
				return x.parse(n, S, _), x
			}
			return LV(V, q), V.prototype.getClass = function() {
				return V
			}, V.prototype.toLabel = function() {
				if(this.getDisplayName()) return this.getDisplayName();
				var q = this.s("image");
				return q && q.length < 100 ? q : _("editor.comptype.image")
			}, V.prototype.onStyleChanged = function(V, n, S) {
				q.prototype.onStyleChanged.call(this, V, n, S), "image" === V && this.setImage(S)
			}, V.prototype.parse = function(q, V, n) {
				q && (Cq(this, "type", q.type, "image"), Cq(this, "body.color", q.color), Cq(this, "image.stretch", q.stretch), Cq(this, "image", q.name, "node_image"), cq(this, q, V, n))
			}, V.prototype.toJSON = function() {
				var q = {};
				return yq(this, q, "type", "type", void 0), yq(this, q, "body.color", "color"), yq(this, q, "image.stretch", "stretch"), yq(this, q, "image", "name"), Jq(this, q), q
			}, MV(V, [{
				key: "compType",
				get: function() {
					return this.s("type")
				}
			}]), V
		}(ht.Node),
		Hn = function(q) {
			function V(n, S, _) {
				YV(this, V);
				var x = QV(this, q.call(this));
				return x.parse(n, S, _), x
			}
			return LV(V, q), V.prototype.getClass = function() {
				return V
			}, V.prototype.toLabel = function() {
				return this.getDisplayName() || this.s("text") || _("editor.comptype.text")
			}, V.prototype.parse = function(q, V, n) {
				q && (Cq(this, "type", q.type, "text"), Cq(this, "text", q.text), Cq(this, "text.align", q.align), Cq(this, "text.vAlign", q.vAlign), Cq(this, "text.color", q.color), Cq(this, "text.font", q.font), Cq(this, "text.shadow", q.shadow), Cq(this, "text.shadow.color", q.shadowColor), Cq(this, "text.shadow.blur", q.shadowBlur), Cq(this, "text.shadow.offset.x", q.shadowOffsetX), Cq(this, "text.shadow.offset.y", q.shadowOffsetY), cq(this, q, V, n))
			}, V.prototype.toJSON = function() {
				var q = {};
				return yq(this, q, "type", "type", void 0), yq(this, q, "text", "text"), yq(this, q, "text.align", "align"), yq(this, q, "text.vAlign", "vAlign"), yq(this, q, "text.color", "color"), yq(this, q, "text.font", "font"), yq(this, q, "text.shadow", "shadow"), yq(this, q, "text.shadow.color", "shadowColor"), yq(this, q, "text.shadow.blur", "shadowBlur"), yq(this, q, "text.shadow.offset.x", "shadowOffsetX"), yq(this, q, "text.shadow.offset.y", "shadowOffsetY"), Jq(this, q), q
			}, MV(V, [{
				key: "compType",
				get: function() {
					return this.s("type")
				}
			}]), V
		}(ht.Text),
		Nn = function(q) {
			function V(n, S, _) {
				YV(this, V);
				var x = QV(this, q.call(this));
				return x.s({
					"shape.border.color": "red",
					"shape.border.width": 1,
					"shape.background": null
				}), x.parse(n, S, _), x.setClosePath(!0), x
			}
			return LV(V, q), V.prototype.getClass = function() {
				return V
			}, V.prototype.toLabel = function() {
				return this.getDisplayName() || _("editor.comptype.clip")
			}, V.prototype.parse = function(q, V, n) {
				q && (Cq(this, "type", q.type, "clip"), cq(this, q, V, n), this.setPoints(Mq(Eq(q.points))), this.setSegments(Eq(q.segments)))
			}, V.prototype.toJSON = function() {
				var q = {};
				if(yq(this, q, "type", "type", void 0), Jq(this, q), bq(q, "points", this.a("points"), Lq(this.getPoints())), this.getSegments()) {
					var V = this.getSegments().toArray();
					if(V.length) {
						var n = 1 === V[0];
						if(n)
							for(var S = 1; S < V.length; S++)
								if(2 !== V[S]) {
									n = !1;
									break
								}
						n || bq(q, "segments", this.a("segments"), V)
					}
				}
				return q
			}, MV(V, [{
				key: "compType",
				get: function() {
					return this.s("type")
				}
			}]), V
		}(ht.Shape),
		Un = function(q) {
			function V(n, S, _) {
				return YV(this, V), QV(this, q.call(this))
			}
			return LV(V, q), V.prototype.getClass = function() {
				return V
			}, V.prototype.toLabel = function() {
				return this.getDisplayName() || _("editor.comptype.restore")
			}, V.prototype.parse = function(q, V, n) {
				q && (Cq(this, "type", q.type, "restore"), cq(this, q, V, n))
			}, V.prototype.toJSON = function() {
				var q = {};
				return yq(this, q, "type", "type", void 0), Jq(this, q), q
			}, MV(V, [{
				key: "compType",
				get: function() {
					return this.s("type")
				}
			}]), V
		}(ht.Node),
		jn = function(q) {
			function V() {
				return YV(this, V), QV(this, q.call(this))
			}
			return LV(V, q), V
		}(ht.widget.BorderPane),
		pn = function(q) {
			function V(n) {
				return YV(this, V), QV(this, q.call(this, n))
			}
			return LV(V, q), V
		}(ht.widget.ContextMenu),
		yn = function(q) {
			function V(n) {
				return YV(this, V), QV(this, q.call(this, n))
			}
			return LV(V, q), V.prototype.invalidateAll = function(V, n) {
				if("imageLoading" !== n) return "imageLoaded" === n ? (this.fpImageLoaded = !0, this.dm().each(function(q) {
					q.fp("imageLoaded", !1, !0)
				}), void(this.fpImageLoaded = !1)) : void q.prototype.invalidateAll.call(this, V, n)
			}, V.prototype.adjustZoom = function(q) {
				return q > hV.config.maxZoom ? hV.config.maxZoom : q < hV.config.minZoom ? hV.config.minZoom : q
			}, V.prototype.getUnionNodeRect = function(q) {
				var V = this,
					n = void 0;
				return q = q._as || q, q.forEach(function(q) {
					q instanceof ht.Node && (n = m(n, V.getNodeRect(q)))
				}), n
			}, V.prototype.$64$ = function(q) {
				this.validate();
				var V = this.getViewRect(),
					n = this.getUnionNodeRect(q);
				if(!V || !n || ht.Default.intersectsRect(V, n)) return null;
				var S = V.x + V.width / 2 - n.x - n.width / 2,
					_ = V.y + V.height / 2 - n.y - n.height / 2;
				return this.moveDatas(q, S, _), {
					x: S,
					y: _
				}
			}, V.prototype.getFullscreenDatas = function() {
				return null
			}, V
		}(ht.graph.GraphView),
		Xn = function(q) {
			function V(n) {
				return YV(this, V), QV(this, q.call(this, n))
			}
			return LV(V, q), V
		}(ht.widget.ListView),
		en = function(q) {
			function V(n) {
				YV(this, V);
				var S = QV(this, q.call(this, n));
				return S.getView().style.background = hV.config.color_pane_dark, S.setMaskBackground(null), S.setContentBorderColor(null), S.setContentBackground("white"), S.getMask().style.border = hV.config.color_select + " solid 1px", S
			}
			return LV(V, q), V
		}(ht.graph.Overview),
		bn = function(q) {
			function V(n, S, _, x) {
				YV(this, V);
				var O = QV(this, q.call(this, n, S, _, x));
				return O.setTogglable(!1), O
			}
			return LV(V, q), V
		}(ht.widget.SplitView),
		cn = function(q) {
			function V(n) {
				return YV(this, V), QV(this, q.call(this, n))
			}
			return LV(V, q), V
		}(ht.widget.TablePane),
		Jn = function(q) {
			function V() {
				return YV(this, V), QV(this, q.call(this))
			}
			return LV(V, q), V.prototype.add = function(V, n, S) {
				var _ = arguments.length <= 3 || void 0 === arguments[3] || arguments[3];
				if(!_) {
					var x = new ht.Tab;
					return x.setName(V), x.setView(n), x
				}
				return q.prototype.add.call(this, V, n, S)
			}, V
		}(ht.widget.TabView),
		Cn = function(q) {
			function V(n) {
				return YV(this, V), QV(this, q.call(this, n))
			}
			return LV(V, q), V
		}(ht.widget.Toolbar),
		Gn = function(q) {
			function V(n) {
				YV(this, V);
				var S = QV(this, q.call(this, n));
				return S.setDoubleClickToToggle(!1), S
			}
			return LV(V, q), V.prototype.getToggleIcon = function(q) {
				if(this._loader && !this._loader.isLoaded(q)) return this._collapseIcon;
				var V = q.getChildren(),
					n = V.size();
				if(n) {
					for(var S = !1, _ = 0; _ < n; _++)
						if(this.isVisible(V.get(_))) {
							S = !0;
							break
						}
					if(S) return this.isExpanded(q) ? this._expandIcon : this._collapseIcon
				}
			}, V.prototype.hasExpandedChild = function(q) {
				if(!this.isExpanded(q)) return !1;
				var V = q.getChildren(),
					n = V.size();
				if(n)
					for(var S = 0; S < n; S++)
						if(this.isVisible(V.get(S))) return !0;
				return !1
			}, MV(V, [{
				key: "expandIds",
				get: function() {
					return Object.keys(this._expandMap)
				},
				set: function(q) {
					var V = this;
					q.forEach(function(q) {
						var n = V.dm().getDataById(q);
						n && V.expand(n)
					})
				}
			}, {
				key: "selectionIds",
				get: function() {
					var q = [];
					return this.sm().each(function(V) {
						q.push(V.$34$ || V._id)
					}), q
				},
				set: function(q) {
					var V = this,
						n = [];
					q.forEach(function(q) {
						var S = V.dm().getDataById(q);
						S && n.push(S)
					}), this.sm().ss(n)
				}
			}]), V
		}(ht.widget.TreeView);
	! function(q, V, n) {
		var S = "ht",
			_ = q[S],
			x = _.Default,
			O = x.getInternal();
		O.addMethod(x, {
			svgToShape: function(q, V) {
				var n = new _.SvgConverter(V);
				return {
					converter: n,
					output: n.toShape(q)
				}
			}
		});
		var w = _.Context2dProxy = function(q, V, n) {
			var S = this;
			S.ctx = q, S.writer = V, S._currentContext = {
				a: 1,
				b: 0,
				c: 0,
				d: 1,
				tx: 0,
				ty: 0
			}, S._emptyPath(), S._forceSplitEllipse = !0, S._ellipseSegments = n.segments, S._contextStack = [];
			for(var _ in CanvasRenderingContext2D.prototype)
				if("webkitImageSmoothingEnabled" !== _) {
					var x = q[_];
					"function" == typeof x && (q[_] = function(V, n) {
						return function() {
							try {
								var _ = n.apply(q, arguments);
								return S.handleFunc(V, _, arguments), _
							} catch(q) {}
						}
					}(_, x))
				}
		};
		w.prototype = {}, w.prototype.constructor = w, w.prototype.handleFunc = function(q, V, n) {
			var S = this;
			switch(q) {
				case "save":
					S._ctxSave();
					break;
				case "restore":
					S._ctxRestore();
					break;
				case "translate":
					S._ctxTranslate.apply(S, n);
					break;
				case "rotate":
					S._ctxRotate.apply(S, n);
					break;
				case "scale":
					S._ctxScale.apply(S, n);
					break;
				case "setTransform":
					S._ctxSetTransform.apply(S, n);
					break;
				case "transform":
					S._ctxTransform.apply(S, n);
					break;
				case "fillText":
				case "strokeText":
					S._ctxText(n[0], n[1], n[2], "fillText" === q);
					break;
				case "rect":
					S._ctxRect.apply(S, n);
					break;
				case "fill":
					S._ctxFill(n[0]);
					break;
				case "fillRect":
					S._ctxRect.apply(S, n), S._ctxDraw("fill");
					break;
				case "stroke":
					S._ctxDraw("stroke");
					break;
				case "moveTo":
					S._ctxMoveTo(n[0], n[1]);
					break;
				case "lineTo":
					S._ctxLineTo(n[0], n[1]);
					break;
				case "beginPath":
					S._ctxBeginPath();
					break;
				case "closePath":
					S._ctxClosePath();
					break;
				case "arc":
					S._ctxArc.apply(S, n);
					break;
				case "ellipse":
					S._ctxEllipse.apply(S, n);
					break;
				case "quadraticCurveTo":
					S._ctxBezier([{
						x: n[0],
						y: n[1]
					}], n[2], n[3]);
					break;
				case "bezierCurveTo":
					S._ctxBezier([{
						x: n[0],
						y: n[1]
					}, {
						x: n[2],
						y: n[3]
					}], n[4], n[5]);
					break;
				case "createLinearGradient":
					S._ctxCreateGradient(V, !0, n);
					break;
				case "createRadialGradient":
					S._ctxCreateGradient(V, !1, n);
					break;
				case "createPattern":
					S._ctxCreatePattern(V, n[0], n[1]);
					break;
				case "drawImage":
					S._ctxDrawImage.apply(S, n);
					break;
				case "clip":
					S._ctxClip()
			}
		}, w.prototype.handleSetter = function(q, V) {}, w.prototype._ctxSave = function() {
			var q = this,
				V = {},
				n = q._currentContext;
			for(var S in n) V[S] = n[S], "clip" === S && n[S] && delete n[S];
			q._contextStack.push(V)
		}, w.prototype._ctxRestore = function() {
			var q = this;
			q._currentContext.clip && q.writer.addRestore(), q._currentContext = q._contextStack.pop(), q._transformUpdated()
		}, w.prototype._ctxTranslate = function(q, V) {
			if(q = q || 0, V = V || 0, 0 !== q || 0 !== V) {
				var n = this,
					S = n._currentContext,
					_ = S.a,
					x = S.b,
					O = S.c,
					w = S.d;
				S.tx = _ * q + O * V + S.tx, S.ty = x * q + w * V + S.ty, n._transformUpdated()
			}
		}, w.prototype._ctxScale = function(q, V) {
			if(q = q || 1, V = V || 1, 1 !== q || 1 !== V) {
				var n = this,
					S = n._currentContext;
				S.a *= q, S.b *= q, S.c *= V, S.d *= V, n._transformUpdated()
			}
		}, w.prototype._ctxRotate = function(q) {
			var V = Math.cos(q),
				n = Math.sin(q),
				S = this,
				_ = S._currentContext,
				x = _.a,
				O = _.b,
				w = _.c,
				K = _.d;
			_.a = x * V + w * n, _.b = O * V + K * n, _.c = -x * n + w * V, _.d = -O * n + K * V, S._transformUpdated()
		}, w.prototype._ctxSetTransform = function(q, V, n, S, _, x) {
			var O = this,
				w = O._currentContext;
			w.a = q, w.b = V, w.c = n, w.d = S, w.tx = _, w.ty = x, O._transformUpdated()
		}, w.prototype._ctxTransform = function(q, V, n, S, _, x) {
			var O = this,
				w = O._currentContext,
				K = w.a,
				g = w.b,
				A = w.c,
				l = w.d;
			w.a = K * q + A * V, w.b = g * q + l * V, w.c = K * n + A * S, w.d = g * n + l * S, w.tx = K * _ + A * x + w.tx, w.ty = g * _ + l * x + w.ty, O._transformUpdated()
		}, w.prototype._transformUpdated = function() {}, w.prototype._calcCurrentRotation = function() {
			var q = this._currentContext;
			return 0 === q.b && 0 === q.c ? 0 : Math.atan2(q.b, q.a)
		}, w.prototype._calcCurrentScale = function() {
			var q = this._currentContext;
			return {
				x: Math.sqrt(q.a * q.a + q.c * q.c),
				y: Math.sqrt(q.b * q.b + q.d * q.d)
			}
		}, w.prototype._transformPoint = function(q) {
			var V = this._currentContext,
				n = q.x,
				S = q.y;
			return {
				x: V.a * n + V.c * S + V.tx,
				y: V.b * n + V.d * S + V.ty
			}
		}, w.prototype._transformPoints = function(q) {
			for(var V = this, n = new Array(q.length), S = 0, _ = q.length; S < _; S++) n[S] = V._transformPoint(q[S]);
			return n
		}, w.prototype._transformSize = function(q) {
			var V = this._currentContext;
			return q * Math.max(Math.sqrt(V.c * V.c + V.d * V.d), Math.sqrt(V.a * V.a + V.b * V.b))
		}, w.prototype._equal = function(q, V) {
			var n = q - V;
			return n > -1e-5 && n < 1e-5
		}, w.prototype._ctxText = function(q, V, n, S) {
			var _, x, O = this,
				w = O.ctx,
				K = w.font,
				g = S ? w.fillStyle : w.strokeStyle,
				A = w.textAlign,
				l = w.textBaseline;
			"string" == typeof K && (x = K.match(/\d+/), x && (_ = x[0], K = K.replace(/\d+/, O._transformSize(_))));
			var Z = O._calcCurrentRotation();
			"alphabetic" === l ? (l = "bottom", n += .25 * w.measureText("e").width) : "hanging" === l && (l = "top", n += .2 * w.measureText("e").width), "string" == typeof g && "rgba(0,0,0,0)" === g.replace(/ /g, "") || q.trim().length && O.writer.addText(q, O._transformPoint({
				x: V,
				y: n
			}), K, Z, A, l, g)
		}, w.prototype._ctxDrawImage = function(q, V, S, _, x, O, w, K, g) {
			if(q.width && q.height) {
				_ === n && x === n ? (O = V, w = S, V = 0, S = 0, _ = K = q.width, x = g = q.height) : O === n && w === n && (O = V, w = S, K = _, g = x, V = 0, S = 0, _ = q.width, x = q.height);
				var A = this,
					l = A._currentContext,
					Z = K / _,
					z = g / x,
					H = O - Z * V,
					i = w - z * S,
					N = l.a,
					U = l.b,
					j = l.c,
					p = l.d;
				N * H + j * i + l.tx, U * H + p * i + l.ty
			}
		}, w.prototype._ctxClip = function() {
			var q = this,
				V = q._currentContext;
			V.clip = !0, q._ctxDraw("clip")
		}, w.prototype._ctxCreateGradient = function(q, V, n) {
			q.isLinear = V, V ? q.points = [n[0], n[1], n[2], n[3]] : q.points = [n[0], n[1], n[2], n[3], n[4], n[5]];
			var S = this._currentContext;
			q.trans = [S.a, S.b, S.c, S.d, S.tx, S.ty];
			var _ = q.addColorStop;
			q.addColorStop = function(V, n) {
				_.apply(this, arguments), q.colorStops || (q.colorStops = []), q.colorStops.push(V, n)
			}
		}, w.prototype._ctxCreatePattern = function(q, V, n) {
			console.log("create pattern")
		}, w.prototype._ctxRect = function(q, V, n, S) {
			var _ = this,
				x = _._transformPoints([{
					x: q,
					y: V
				}, {
					x: q + n,
					y: V
				}, {
					x: q + n,
					y: V + S
				}, {
					x: q,
					y: V + S
				}]);
			_._path.push({
				type: "rect",
				points: x
			})
		}, w.prototype._ctxMoveTo = function(q, V) {
			var n = this,
				S = n._transformPoint({
					x: q,
					y: V
				});
			n._headPoint = S, n._path.push({
				type: "moveTo",
				x: S.x,
				y: S.y
			})
		}, w.prototype._ctxLineTo = function(q, V) {
			var n = this,
				S = n._transformPoint({
					x: q,
					y: V
				});
			n._path.push({
				type: "lineTo",
				x: S.x,
				y: S.y
			})
		}, w.prototype._ctxArc = function(q, V, n, S, _, x) {
			S = S || 0, _ = _ || 2 * Math.PI, n && this._ctxEllipse(q, V, n, n, 0, S, _, x)
		}, w.prototype._ctxEllipse = function(q, V, n, S, _, x, O, w) {
			var K, g, A, l, Z, z, H, i, N, U, j, p, y, X, e, b = this,
				c = b._calcCurrentScale(),
				J = b._transformPoint({
					x: q,
					y: V
				});
			z = Math.sin(_), H = Math.cos(_);
			var C = function(_) {
					var x = n * Math.cos(-_),
						O = S * Math.sin(-_);
					return b._transformPoint({
						x: q + (H * x - z * O),
						y: V + (z * x + H * O)
					})
				},
				G = [],
				v = O;
			if(w)
				for(; v >= x;) v -= 2 * Math.PI;
			else
				for(; v <= x;) v += 2 * Math.PI;
			for(U = (v - x) / b._ellipseSegments, p = 0; p <= b._ellipseSegments; p++) j = x + U * p, y = C(-j), G.push(y);
			if(l = G[0], Z = G[G.length - 1], K = b._calcaEllipseAngle(x, O, w), x = K.start, O = K.end, i = b._equal(c.x, c.y), N = b._equal(n, S), !b._forceSplitEllipse && i && N && b._equal(Math.abs(x - O), 2 * Math.PI)) b._path.push({
				type: "circle",
				x: J.x,
				y: J.y,
				end: Z,
				keyPoints: G,
				radius: n * c.x
			});
			else if(!b._forceSplitEllipse && i && N) g = b._calcCurrentRotation(), A = Math.cos(g), X = b._currentContext.a * A < 0, e = b._currentContext.d * A < 0, K = b._transformStartEndAngle(x, O, X, e), x = K.start - g, O = K.end - g, b._path.push({
				type: "arc",
				x: J.x,
				y: J.y,
				end: Z,
				radius: n * c.x,
				startAngle: x,
				endAngle: O,
				keyPoints: G
			});
			else {
				if(b._forceSplitEllipse || !i) {
					for(b._path.length || b._path.push({
							type: "moveTo",
							x: G[0].x,
							y: G[0].y
						}), p = 1; p <= b._ellipseSegments; p++) y = G[p], b._path.push({
						type: "lineTo",
						x: y.x,
						y: y.y
					});
					return
				}
				var u, W, d = C(0),
					P = C(Math.PI / 2),
					E = function(q, V) {
						var n = q.x - V.x,
							S = q.y - V.y;
						return Math.sqrt(n * n + S * S)
					},
					Y = E(d, J),
					M = E(P, J);
				M > Y ? (W = Y, Y = M, M = W, u = P) : u = d, g = b._calcCurrentRotation(), A = Math.cos(g), X = b._currentContext.a * A < 0, e = b._currentContext.d * A < 0, K = b._transformStartEndAngle(x - Math.PI / 2, O - Math.PI / 2, X, e), x = K.start, O = K.end, b._path.push({
					type: "ellipse",
					x: J.x,
					y: J.y,
					end: Z,
					major: {
						x: u.x - J.x,
						y: u.y - J.y
					},
					ratio: M / Y,
					startAngle: x,
					endAngle: O,
					keyPoints: G
				})
			}
		}, w.prototype._ctxBezier = function(q, V, n) {
			var S = this,
				_ = S._transformPoint({
					x: V,
					y: n
				});
			this._path.push({
				type: "bezier",
				x: _.x,
				y: _.y,
				ctrl: S._transformPoints(q)
			})
		}, w.prototype._ctxBeginPath = function() {
			this._emptyPath()
		}, w.prototype._ctxClosePath = function() {
			var q = this,
				V = q._headPoint;
			V && (q._path.push({
				type: "lineTo",
				x: V.x,
				y: V.y,
				subType: "closePath"
			}), q._headPoint = null, q._lastPoint = null)
		}, w.prototype._calcaEllipseAngle = function(q, V, n) {
			q = -q, V = -V;
			var S, _ = q % (2 * Math.PI),
				x = V % (2 * Math.PI);
			for(_ < 0 && (_ += 2 * Math.PI), x < 0 && (x += 2 * Math.PI), n || (S = _, _ = x, x = S); x <= _;) x += 2 * Math.PI;
			return {
				start: _,
				end: x
			}
		}, w.prototype._transformStartEndAngle = function(q, V, n, S) {
			var _;
			return(S || n) && (n && S ? (q = Math.PI + q, V = Math.PI + V) : (_ = Math.PI * (n ? 1 : 2) - V, V = Math.PI * (n ? 1 : 2) - q, q = _)), {
				start: q,
				end: V
			}
		}, w.prototype._ctxFill = function(q) {
			var V = this;
			return V._fillRule = q || "nonzero", V._ctxDraw("fill")
		}, w.prototype._ctxDraw = function(q) {
			var V = this,
				n = V._path;
			if(n.length) {
				var S, _, x, O, w, K, g = [],
					A = [];
				if("clip" === q) K = {
					clip: !0
				};
				else {
					if("stroke" === q) {
						K = {
							stroke: !0,
							lineWidth: V._transformSize(V.ctx.lineWidth),
							color: V.ctx.strokeStyle
						};
						var l = V.ctx.lineCap;
						"butt" !== l && (K.lineCap = l);
						var Z = V.ctx.getLineDash();
						if(Z && Z.length) {
							K.dash = !0;
							for(var z = 0, H = Z.length; z < H; z++) Z[z] = V._transformSize(Z[z]);
							K.dashPattern = Z, K.dashOffset = V._transformSize(V.ctx.lineDashOffset)
						}
					} else K = {
						stroke: !1,
						color: V.ctx.fillStyle
					}, "nonzero" !== V._fillRule && (K.fillRule = V._fillRule);
					if(V.ctx.globalAlpha < 1 && (K.opacity = V.ctx.globalAlpha), "string" != typeof K.color)
						if(K.color instanceof CanvasGradient) {
							var i = K.color,
								N = [i.isLinear ? "L" : "R"];
							N = N.concat(i.points), N = N.concat(i.trans), N = N.concat(i.colorStops), K.gradientPack = N
						} else if(K.color instanceof CanvasPattern && K.color.gradient) {
						var x = K.color,
							i = x.gradient,
							N = [i.isLinear ? "L" : "R"];
						N = N.concat(i.points);
						var U = x.trans,
							j = i.trans[0],
							p = i.trans[1],
							y = i.trans[2],
							X = i.trans[3],
							e = i.trans[4],
							b = i.trans[5],
							c = U[0],
							J = U[1],
							C = U[2],
							G = U[3],
							v = U[4],
							u = U[5];
						N = N.concat([j * c + y * J, p * c + X * J, j * C + y * G, p * C + X * G, j * v + y * u + e, p * v + X * u + b]), N = N.concat(i.colorStops), K.gradientPack = N
					} else K.trans = [V._currentContext.a, V._currentContext.b, V._currentContext.c, V._currentContext.d, V._currentContext.tx, V._currentContext.ty], K.color = K.color.image ? K.color.image : K.color, K.isPattern = !0;
					if("string" == typeof K.color && "rgba(0,0,0,0)" === K.color.replace(/ /g, "")) return
				}
				for(_ = 0, S = n.length; _ < S; _++) switch(x = n[_], x.type) {
					case "moveTo":
						V._lastPoint = {
							x: x.x,
							y: x.y
						}, g.push(V._lastPoint), A.push(1);
						break;
					case "lineTo":
						g.push({
							x: x.x,
							y: x.y
						}), A.push(2), V._lastPoint = {
							x: x.x,
							y: x.y
						};
						break;
					case "rect":
						w = x.points, g.push({
							x: w[0].x,
							y: w[0].y
						}, {
							x: w[1].x,
							y: w[1].y
						}, {
							x: w[2].x,
							y: w[2].y
						}, {
							x: w[3].x,
							y: w[3].y
						}, {
							x: w[0].x,
							y: w[0].y
						}), A.push(2, 2, 2, 2, 2), V._lastPoint = x.points[0];
						break;
					case "circle":
					case "arc":
					case "ellipse":
						console.log("split to line", x.type);
						break;
					case "arcBegin":
						g.length && A.length && V.writer.addShape(g, A, K), g = [], A = [];
						break;
					case "arcClose":
						V.writer.addShape(g, A, K), g = [], A = [];
						break;
					case "bezier":
						if(O = V._lastPoint, !O) break;
						1 === x.ctrl.length ? (g.push({
							x: x.ctrl[0].x,
							y: x.ctrl[0].y
						}, {
							x: x.x,
							y: x.y
						}), A.push(3)) : (g.push({
							x: x.ctrl[0].x,
							y: x.ctrl[0].y
						}, {
							x: x.ctrl[1].x,
							y: x.ctrl[1].y
						}, {
							x: x.x,
							y: x.y
						}), A.push(4)), V._lastPoint = {
							x: x.x,
							y: x.y
						};
						break;
					default:
						g.push({
							x: x.x,
							y: x.y
						}), A.push(2)
				}
				V.writer.addShape(g, A, K)
			}
		}, w.prototype._emptyPath = function() {
			var q = this;
			q._path = [], q._lastPoint = null, q._headPoint = null
		};
		var K = _.SvgConverter = function(q) {
			var V = this;
			V.initConfig(q || {}), V.initCanvas()
		};
		K.prototype = {}, K.prototype.constructor = K, K.prototype.initConfig = function(q) {
				var V, n = this;
				V = n.options = {}, V.size = q.size || 512, V.segments = q.segments || 16
			}, K.prototype.initCanvas = function() {
				var q = this,
					V = document.createElement("canvas");
				V.width = V.height = q.options.size, V.style.width = V.style.height = q.options.size;
				var n = V.getContext;
				V.getContext = function(V) {
					return function(n) {
						var S = V.apply(this, arguments);
						return "2d" === n && q.wrapContext2d(S), S
					}
				}(n), q._canvas = V, q._segments = []
			}, K.prototype.toShape = function(q) {
				var V = this;
				V._canvas;
				return V._segments = [], canvg(V._canvas, q, {
					ignoreMouse: !0,
					ignoreAnimation: !0
				}), V.write()
			}, K.prototype.wrapContext2d = function(q) {
				var V = this,
					n = new _.Context2dProxy(q, V, V.options);
				return n
			}, K.prototype.write = function() {
				var q = this;
				return {
					width: q._canvas.width,
					height: q._canvas.height,
					comps: q._segments
				}
			}, K.prototype.addComponent = function(q) {
				var V = this;
				V._segments.push(q)
			}, K.prototype.addText = function(q, V, n, S, _, x, O) {
				_ = _ || "left", "start" === _ ? _ = "left" : "end" === _ && (_ = "right"), "alphabetic" === x ? x = "bottom" : "hanging" === x && (x = "top");
				var w = this;
				w.addComponent({
					type: "text",
					color: O,
					text: q,
					rotation: S,
					rect: [V.x, V.y, 0, 0],
					align: _,
					vAlign: x,
					font: n
				})
			}, K.prototype.addShape = function(q, V, S) {
				for(var _ = this, x = [], O = 0, w = q.length; O < w; O++) {
					var K = q[O];
					x.push(K.x, K.y)
				}
				if(S.clip) return void _.addComponent({
					type: "clip",
					points: x,
					segments: V
				});
				var g = {
					type: "shape",
					points: x,
					segments: V
				};
				S.opacity != n && (g.opacity = S.opacity), S.stroke ? (S.dash ? (g.dash = S.dash, g.dashPattern = S.dashPattern, g.dashOffset = S.dashOffset, g.dashColor = S.color, g.dashWidth = S.lineWidth, g.borderColor = null, g.borderWidth = 0, g.background = null) : (g.borderColor = S.color, g.borderWidth = S.lineWidth, g.background = null), S.lineCap && (g.borderCap = S.lineCap)) : (g.borderColor = null, g.borderWidth = 0, S.isPattern ? (g.repeatImage = S.color, g.trans = S.trans, g.background = null) : S.gradientPack ? (g.gradientPack = S.gradientPack, g.background = null) : g.background = S.color, S.gradient && (g.gradient = S.gradient, g.gradientColor = S.gradientColor), S.fillRule && (g.fillRule = S.fillRule)), _.addComponent(g)
			}, K.prototype.addRestore = function() {
				this.addComponent({
					type: "restore"
				})
			},
			function(q) {
				function V(q) {
					this.ok = !1, "#" == q.charAt(0) && (q = q.substr(1, 6)), q = q.replace(/ /g, ""), q = q.toLowerCase();
					var n = {
						aliceblue: "f0f8ff",
						antiquewhite: "faebd7",
						aqua: "00ffff",
						aquamarine: "7fffd4",
						azure: "f0ffff",
						beige: "f5f5dc",
						bisque: "ffe4c4",
						black: "000000",
						blanchedalmond: "ffebcd",
						blue: "0000ff",
						blueviolet: "8a2be2",
						brown: "a52a2a",
						burlywood: "deb887",
						cadetblue: "5f9ea0",
						chartreuse: "7fff00",
						chocolate: "d2691e",
						coral: "ff7f50",
						cornflowerblue: "6495ed",
						cornsilk: "fff8dc",
						crimson: "dc143c",
						cyan: "00ffff",
						darkblue: "00008b",
						darkcyan: "008b8b",
						darkgoldenrod: "b8860b",
						darkgray: "a9a9a9",
						darkgreen: "006400",
						darkkhaki: "bdb76b",
						darkmagenta: "8b008b",
						darkolivegreen: "556b2f",
						darkorange: "ff8c00",
						darkorchid: "9932cc",
						darkred: "8b0000",
						darksalmon: "e9967a",
						darkseagreen: "8fbc8f",
						darkslateblue: "483d8b",
						darkslategray: "2f4f4f",
						darkturquoise: "00ced1",
						darkviolet: "9400d3",
						deeppink: "ff1493",
						deepskyblue: "00bfff",
						dimgray: "696969",
						dodgerblue: "1e90ff",
						feldspar: "d19275",
						firebrick: "b22222",
						floralwhite: "fffaf0",
						forestgreen: "228b22",
						fuchsia: "ff00ff",
						gainsboro: "dcdcdc",
						ghostwhite: "f8f8ff",
						gold: "ffd700",
						goldenrod: "daa520",
						gray: "808080",
						green: "008000",
						greenyellow: "adff2f",
						honeydew: "f0fff0",
						hotpink: "ff69b4",
						indianred: "cd5c5c",
						indigo: "4b0082",
						ivory: "fffff0",
						khaki: "f0e68c",
						lavender: "e6e6fa",
						lavenderblush: "fff0f5",
						lawngreen: "7cfc00",
						lemonchiffon: "fffacd",
						lightblue: "add8e6",
						lightcoral: "f08080",
						lightcyan: "e0ffff",
						lightgoldenrodyellow: "fafad2",
						lightgrey: "d3d3d3",
						lightgreen: "90ee90",
						lightpink: "ffb6c1",
						lightsalmon: "ffa07a",
						lightseagreen: "20b2aa",
						lightskyblue: "87cefa",
						lightslateblue: "8470ff",
						lightslategray: "778899",
						lightsteelblue: "b0c4de",
						lightyellow: "ffffe0",
						lime: "00ff00",
						limegreen: "32cd32",
						linen: "faf0e6",
						magenta: "ff00ff",
						maroon: "800000",
						mediumaquamarine: "66cdaa",
						mediumblue: "0000cd",
						mediumorchid: "ba55d3",
						mediumpurple: "9370d8",
						mediumseagreen: "3cb371",
						mediumslateblue: "7b68ee",
						mediumspringgreen: "00fa9a",
						mediumturquoise: "48d1cc",
						mediumvioletred: "c71585",
						midnightblue: "191970",
						mintcream: "f5fffa",
						mistyrose: "ffe4e1",
						moccasin: "ffe4b5",
						navajowhite: "ffdead",
						navy: "000080",
						oldlace: "fdf5e6",
						olive: "808000",
						olivedrab: "6b8e23",
						orange: "ffa500",
						orangered: "ff4500",
						orchid: "da70d6",
						palegoldenrod: "eee8aa",
						palegreen: "98fb98",
						paleturquoise: "afeeee",
						palevioletred: "d87093",
						papayawhip: "ffefd5",
						peachpuff: "ffdab9",
						peru: "cd853f",
						pink: "ffc0cb",
						plum: "dda0dd",
						powderblue: "b0e0e6",
						purple: "800080",
						red: "ff0000",
						rosybrown: "bc8f8f",
						royalblue: "4169e1",
						saddlebrown: "8b4513",
						salmon: "fa8072",
						sandybrown: "f4a460",
						seagreen: "2e8b57",
						seashell: "fff5ee",
						sienna: "a0522d",
						silver: "c0c0c0",
						skyblue: "87ceeb",
						slateblue: "6a5acd",
						slategray: "708090",
						snow: "fffafa",
						springgreen: "00ff7f",
						steelblue: "4682b4",
						tan: "d2b48c",
						teal: "008080",
						thistle: "d8bfd8",
						tomato: "ff6347",
						turquoise: "40e0d0",
						violet: "ee82ee",
						violetred: "d02090",
						wheat: "f5deb3",
						white: "ffffff",
						whitesmoke: "f5f5f5",
						yellow: "ffff00",
						yellowgreen: "9acd32"
					};
					for(var S in n) q == S && (q = n[S]);
					for(var _ = [{
							re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
							example: ["rgb(123, 234, 45)", "rgb(255,234,245)"],
							process: function(q) {
								return [parseInt(q[1]), parseInt(q[2]), parseInt(q[3])]
							}
						}, {
							re: /^(\w{2})(\w{2})(\w{2})$/,
							example: ["#00ff00", "336699"],
							process: function(q) {
								return [parseInt(q[1], 16), parseInt(q[2], 16), parseInt(q[3], 16)]
							}
						}, {
							re: /^(\w{1})(\w{1})(\w{1})$/,
							example: ["#fb0", "f0f"],
							process: function(q) {
								return [parseInt(q[1] + q[1], 16), parseInt(q[2] + q[2], 16), parseInt(q[3] + q[3], 16)]
							}
						}], x = 0; x < _.length; x++) {
						var O = _[x].re,
							w = _[x].process,
							K = O.exec(q);
						if(K) {
							var g = w(K);
							this.r = g[0], this.g = g[1], this.b = g[2], this.ok = !0
						}
					}
					this.r = this.r < 0 || isNaN(this.r) ? 0 : this.r > 255 ? 255 : this.r, this.g = this.g < 0 || isNaN(this.g) ? 0 : this.g > 255 ? 255 : this.g, this.b = this.b < 0 || isNaN(this.b) ? 0 : this.b > 255 ? 255 : this.b, this.toRGB = function() {
						return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")"
					}, this.toHex = function() {
						var q = this.r.toString(16),
							V = this.g.toString(16),
							n = this.b.toString(16);
						return 1 == q.length && (q = "0" + q), 1 == V.length && (V = "0" + V), 1 == n.length && (n = "0" + n), "#" + q + V + n
					}, this.getHelpXML = function() {
						for(var q = new Array, S = 0; S < _.length; S++)
							for(var x = _[S].example, O = 0; O < x.length; O++) q[q.length] = x[O];
						for(var w in n) q[q.length] = w;
						var K = document.createElement("ul");
						K.setAttribute("id", "rgbcolor-examples");
						for(var S = 0; S < q.length; S++) try {
							var g = document.createElement("li"),
								A = new V(q[S]),
								l = document.createElement("div");
							l.style.cssText = "margin: 3px; border: 1px solid black; background:" + A.toHex() + "; color:" + A.toHex(), l.appendChild(document.createTextNode("test"));
							var Z = document.createTextNode(" " + q[S] + " -> " + A.toRGB() + " -> " + A.toHex());
							g.appendChild(l), g.appendChild(Z), K.appendChild(g)
						} catch(q) {}
						return K
					}
				}
				"undefined" != typeof define && define.amd ? define(function() {
					return V
				}) : "undefined" != typeof module && module.exports && (module.exports = V), q.RGBColor = V
			}("undefined" != typeof q ? q : this),
			function(q) {
				function V(q) {
					for(var V = q.data, n = q.width * q.height * 4, S = 0; S < n; S += 4) {
						var _ = V[S + 3] / 255;
						V[S] *= _, V[S + 1] *= _, V[S + 2] *= _
					}
				}

				function n(q) {
					for(var V = q.data, n = q.width * q.height * 4, S = 0; S < n; S += 4) {
						var _ = V[S + 3];
						0 != _ && (_ = 255 / _, V[S] *= _, V[S + 1] *= _, V[S + 2] *= _)
					}
				}

				function S(q, V, n, S) {
					var O = document.getElementById(q),
						w = O.naturalWidth,
						K = O.naturalHeight,
						g = document.getElementById(V);
					g.style.width = w + "px", g.style.height = K + "px", g.width = w, g.height = K;
					var A = g.getContext("2d");
					A.clearRect(0, 0, w, K), A.drawImage(O, 0, 0), isNaN(n) || n < 1 || (S ? _(V, 0, 0, w, K, n) : x(V, 0, 0, w, K, n))
				}

				function _(q, S, _, x, g, A) {
					if(!(isNaN(A) || A < 1)) {
						A |= 0;
						var l, Z = document.getElementById(q),
							z = Z.getContext("2d");
						try {
							try {
								l = z.getImageData(S, _, x, g)
							} catch(q) {
								try {
									netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserRead"), l = z.getImageData(S, _, x, g)
								} catch(q) {
									throw alert("Cannot access local image"), new Error("unable to access local image data: " + q)
								}
							}
						} catch(q) {
							throw alert("Cannot access image"), new Error("unable to access image data: " + q)
						}
						V(l);
						var H, i, N, U, j, p, y, X, e, b, c, J, C, G, v, u, W, d, P, E, Y, M, L, Q, F = l.data,
							a = A + A + 1,
							h = x - 1,
							$ = g - 1,
							t = A + 1,
							s = t * (t + 1) / 2,
							m = new O,
							D = m;
						for(N = 1; N < a; N++)
							if(D = D.next = new O, N == t) var T = D;
						D.next = m;
						var f = null,
							B = null;
						y = p = 0;
						var I = w[A],
							o = K[A];
						for(i = 0; i < g; i++) {
							for(u = W = d = P = X = e = b = c = 0, J = t * (E = F[p]), C = t * (Y = F[p + 1]), G = t * (M = F[p + 2]), v = t * (L = F[p + 3]), X += s * E, e += s * Y, b += s * M, c += s * L, D = m, N = 0; N < t; N++) D.r = E, D.g = Y, D.b = M, D.a = L, D = D.next;
							for(N = 1; N < t; N++) U = p + ((h < N ? h : N) << 2), X += (D.r = E = F[U]) * (Q = t - N), e += (D.g = Y = F[U + 1]) * Q, b += (D.b = M = F[U + 2]) * Q, c += (D.a = L = F[U + 3]) * Q, u += E, W += Y, d += M, P += L, D = D.next;
							for(f = m, B = T, H = 0; H < x; H++) F[p] = X * I >> o, F[p + 1] = e * I >> o, F[p + 2] = b * I >> o, F[p + 3] = c * I >> o, X -= J, e -= C, b -= G, c -= v, J -= f.r, C -= f.g, G -= f.b, v -= f.a, U = y + ((U = H + A + 1) < h ? U : h) << 2, u += f.r = F[U], W += f.g = F[U + 1], d += f.b = F[U + 2], P += f.a = F[U + 3], X += u, e += W, b += d, c += P, f = f.next, J += E = B.r, C += Y = B.g, G += M = B.b, v += L = B.a, u -= E, W -= Y, d -= M, P -= L, B = B.next, p += 4;
							y += x
						}
						for(H = 0; H < x; H++) {
							for(W = d = P = u = e = b = c = X = 0, p = H << 2, J = t * (E = F[p]), C = t * (Y = F[p + 1]), G = t * (M = F[p + 2]), v = t * (L = F[p + 3]), X += s * E, e += s * Y, b += s * M, c += s * L, D = m, N = 0; N < t; N++) D.r = E, D.g = Y, D.b = M, D.a = L, D = D.next;
							for(j = x, N = 1; N <= A; N++) p = j + H << 2, X += (D.r = E = F[p]) * (Q = t - N), e += (D.g = Y = F[p + 1]) * Q, b += (D.b = M = F[p + 2]) * Q, c += (D.a = L = F[p + 3]) * Q, u += E, W += Y, d += M, P += L, D = D.next, N < $ && (j += x);
							for(p = H, f = m, B = T, i = 0; i < g; i++) U = p << 2, F[U] = X * I >> o, F[U + 1] = e * I >> o, F[U + 2] = b * I >> o, F[U + 3] = c * I >> o, X -= J, e -= C, b -= G, c -= v, J -= f.r, C -= f.g, G -= f.b, v -= f.a, U = H + ((U = i + t) < $ ? U : $) * x << 2, X += u += f.r = F[U], e += W += f.g = F[U + 1], b += d += f.b = F[U + 2], c += P += f.a = F[U + 3], f = f.next, J += E = B.r, C += Y = B.g, G += M = B.b, v += L = B.a, u -= E, W -= Y, d -= M, P -= L, B = B.next, p += x
						}
						n(l), z.putImageData(l, S, _)
					}
				}

				function x(q, V, n, S, _, x) {
					if(!(isNaN(x) || x < 1)) {
						x |= 0;
						var g, A = document.getElementById(q),
							l = A.getContext("2d");
						try {
							try {
								g = l.getImageData(V, n, S, _)
							} catch(q) {
								try {
									netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserRead"), g = l.getImageData(V, n, S, _)
								} catch(q) {
									throw alert("Cannot access local image"), new Error("unable to access local image data: " + q)
								}
							}
						} catch(q) {
							throw alert("Cannot access image"), new Error("unable to access image data: " + q)
						}
						var Z, z, H, i, N, U, j, p, y, X, e, b, c, J, C, G, v, u, W, d, P = g.data,
							E = x + x + 1,
							Y = S - 1,
							M = _ - 1,
							L = x + 1,
							Q = L * (L + 1) / 2,
							F = new O,
							a = F;
						for(H = 1; H < E; H++)
							if(a = a.next = new O, H == L) var h = a;
						a.next = F;
						var $ = null,
							t = null;
						j = U = 0;
						var s = w[x],
							m = K[x];
						for(z = 0; z < _; z++) {
							for(J = C = G = p = y = X = 0, e = L * (v = P[U]), b = L * (u = P[U + 1]), c = L * (W = P[U + 2]), p += Q * v, y += Q * u, X += Q * W, a = F, H = 0; H < L; H++) a.r = v, a.g = u, a.b = W, a = a.next;
							for(H = 1; H < L; H++) i = U + ((Y < H ? Y : H) << 2), p += (a.r = v = P[i]) * (d = L - H), y += (a.g = u = P[i + 1]) * d, X += (a.b = W = P[i + 2]) * d, J += v, C += u, G += W, a = a.next;
							for($ = F, t = h, Z = 0; Z < S; Z++) P[U] = p * s >> m, P[U + 1] = y * s >> m, P[U + 2] = X * s >> m, p -= e, y -= b, X -= c, e -= $.r, b -= $.g, c -= $.b, i = j + ((i = Z + x + 1) < Y ? i : Y) << 2, J += $.r = P[i], C += $.g = P[i + 1], G += $.b = P[i + 2], p += J, y += C, X += G, $ = $.next, e += v = t.r, b += u = t.g, c += W = t.b, J -= v, C -= u, G -= W, t = t.next, U += 4;
							j += S
						}
						for(Z = 0; Z < S; Z++) {
							for(C = G = J = y = X = p = 0, U = Z << 2, e = L * (v = P[U]), b = L * (u = P[U + 1]), c = L * (W = P[U + 2]), p += Q * v, y += Q * u, X += Q * W, a = F, H = 0; H < L; H++) a.r = v, a.g = u, a.b = W, a = a.next;
							for(N = S, H = 1; H <= x; H++) U = N + Z << 2, p += (a.r = v = P[U]) * (d = L - H), y += (a.g = u = P[U + 1]) * d, X += (a.b = W = P[U + 2]) * d, J += v, C += u, G += W, a = a.next, H < M && (N += S);
							for(U = Z, $ = F, t = h, z = 0; z < _; z++) i = U << 2, P[i] = p * s >> m, P[i + 1] = y * s >> m, P[i + 2] = X * s >> m, p -= e, y -= b, X -= c, e -= $.r, b -= $.g, c -= $.b, i = Z + ((i = z + L) < M ? i : M) * S << 2, p += J += $.r = P[i], y += C += $.g = P[i + 1], X += G += $.b = P[i + 2], $ = $.next, e += v = t.r, b += u = t.g, c += W = t.b, J -= v, C -= u, G -= W, t = t.next, U += S
						}
						l.putImageData(g, V, n)
					}
				}

				function O() {
					this.r = 0, this.g = 0, this.b = 0, this.a = 0, this.next = null
				}
				var w = [512, 512, 456, 512, 328, 456, 335, 512, 405, 328, 271, 456, 388, 335, 292, 512, 454, 405, 364, 328, 298, 271, 496, 456, 420, 388, 360, 335, 312, 292, 273, 512, 482, 454, 428, 405, 383, 364, 345, 328, 312, 298, 284, 271, 259, 496, 475, 456, 437, 420, 404, 388, 374, 360, 347, 335, 323, 312, 302, 292, 282, 273, 265, 512, 497, 482, 468, 454, 441, 428, 417, 405, 394, 383, 373, 364, 354, 345, 337, 328, 320, 312, 305, 298, 291, 284, 278, 271, 265, 259, 507, 496, 485, 475, 465, 456, 446, 437, 428, 420, 412, 404, 396, 388, 381, 374, 367, 360, 354, 347, 341, 335, 329, 323, 318, 312, 307, 302, 297, 292, 287, 282, 278, 273, 269, 265, 261, 512, 505, 497, 489, 482, 475, 468, 461, 454, 447, 441, 435, 428, 422, 417, 411, 405, 399, 394, 389, 383, 378, 373, 368, 364, 359, 354, 350, 345, 341, 337, 332, 328, 324, 320, 316, 312, 309, 305, 301, 298, 294, 291, 287, 284, 281, 278, 274, 271, 268, 265, 262, 259, 257, 507, 501, 496, 491, 485, 480, 475, 470, 465, 460, 456, 451, 446, 442, 437, 433, 428, 424, 420, 416, 412, 408, 404, 400, 396, 392, 388, 385, 381, 377, 374, 370, 367, 363, 360, 357, 354, 350, 347, 344, 341, 338, 335, 332, 329, 326, 323, 320, 318, 315, 312, 310, 307, 304, 302, 299, 297, 294, 292, 289, 287, 285, 282, 280, 278, 275, 273, 271, 269, 267, 265, 263, 261, 259],
					K = [9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24],
					g = {
						image: S,
						canvasRGBA: _,
						canvasRGB: x
					};
				"undefined" != typeof define && define.amd ? define(function() {
					return g
				}) : "undefined" != typeof module && module.exports && (module.exports = g), q.stackBlur = g
			}("undefined" != typeof q ? q : this),
			function(q, V) {
				q.canvg = V(q.RGBColor, q.stackBlur)
			}("undefined" != typeof q ? q : this, function(V, n) {
				function S(q) {
					var V = [0, 0, 0],
						n = function(n, S) {
							var _ = q.match(n);
							null != _ && (V[S] += _.length, q = q.replace(n, " "))
						};
					return q = q.replace(/:not\(([^\)]*)\)/g, "     $1 "), q = q.replace(/{[\s\S]*/gm, " "), n(K, 1), n(g, 0), n(A, 1), n(l, 2), n(Z, 1), n(z, 1), q = q.replace(/[\*\s\+>~]/g, " "), q = q.replace(/[#\.]/g, " "), n(H, 2), V.join("")
				}

				function x(x) {
					var w = {
						opts: x
					};
					w.FRAMERATE = 30, w.MAX_VIRTUAL_PIXELS = 3e4, w.log = function(q) {}, 1 == w.opts.log && "undefined" != typeof console && (w.log = function(q) {
						console.log(q)
					}), w.init = function(q) {
						var V = 0;
						w.UniqueId = function() {
							return V++, "canvg" + V
						}, w.Definitions = {}, w.Styles = {}, w.StylesSpecificity = {}, w.Animations = [], w.Images = [], w.ctx = q, w.ViewPort = new function() {
							this.viewPorts = [], this.Clear = function() {
								this.viewPorts = []
							}, this.SetCurrent = function(q, V) {
								this.viewPorts.push({
									width: q,
									height: V
								})
							}, this.RemoveCurrent = function() {
								this.viewPorts.pop()
							}, this.Current = function() {
								return this.viewPorts[this.viewPorts.length - 1]
							}, this.width = function() {
								var q, V = this.Current();
								return V && (q = V.width) ? q : 100
							}, this.height = function() {
								var q, V = this.Current();
								return V && (q = V.height) ? q : 100
							}, this.ComputeSize = function(q) {
								return null != q && "number" == typeof q ? q : "x" == q ? this.width() : "y" == q ? this.height() : Math.sqrt(Math.pow(this.width(), 2) + Math.pow(this.height(), 2)) / Math.sqrt(2)
							}
						}
					}, w.init(), w.ImagesLoaded = function() {
						for(var q = 0; q < w.Images.length; q++)
							if(!w.Images[q].loaded) return !1;
						return !0
					}, w.trim = function(q) {
						return q.replace(/^\s+|\s+$/g, "")
					}, w.compressSpaces = function(q) {
						return q.replace(/[\s\r\t\n]+/gm, " ")
					}, w.ajax = function(q) {
						q = _.Default.beforeLoadURL(q);
						var V = new _.Request,
							n = {};
						return n.url = encodeURI(q), n.sync = !0, V.send(n), V.getResponseText()
					}, w.parseXml = function(V) {
						if("undefined" != typeof Windows && "undefined" != typeof Windows.Data && "undefined" != typeof Windows.Data.Xml) {
							var n = new Windows.Data.Xml.Dom.XmlDocument,
								S = new Windows.Data.Xml.Dom.XmlLoadSettings;
							return S.prohibitDtd = !1, n.loadXml(V, S), n
						}
						if(q.DOMParser) {
							var _ = new DOMParser;
							return _.parseFromString(V, "text/xml")
						}
						V = V.replace(/<!DOCTYPE svg[^>]*>/, "");
						var n = new ActiveXObject("Microsoft.XMLDOM");
						return n.async = "false", n.loadXML(V), n
					}, w.Property = function(q, V) {
						this.name = q, this.value = V
					}, w.Property.prototype.getValue = function() {
						return this.value
					}, w.Property.prototype.hasValue = function() {
						return null != this.value && "" !== this.value
					}, w.Property.prototype.numValue = function() {
						if(!this.hasValue()) return 0;
						var q = parseFloat(this.value);
						return(this.value + "").match(/%$/) && (q /= 100), q
					}, w.Property.prototype.valueOrDefault = function(q) {
						return this.hasValue() ? this.value : q
					}, w.Property.prototype.numValueOrDefault = function(q) {
						return this.hasValue() ? this.numValue() : q
					}, w.Property.prototype.addOpacity = function(q) {
						var n = this.value;
						if(null != q.value && "" != q.value && "string" == typeof this.value) {
							var S = new V(this.value);
							S.ok && (n = "rgba(" + S.r + ", " + S.g + ", " + S.b + ", " + q.numValue() + ")")
						}
						return new w.Property(this.name, n)
					}, w.Property.prototype.getDefinition = function() {
						var q = this.value.match(/#([^\)'"]+)/);
						return q && (q = q[1]), q || (q = this.value), w.Definitions[q]
					}, w.Property.prototype.isUrlDefinition = function() {
						return 0 == this.value.indexOf("url(")
					}, w.Property.prototype.getFillStyleDefinition = function(q, V) {
						var n = this.getDefinition();
						if(null != n && n.createGradient) return n.createGradient(w.ctx, q, V);
						if(null != n && n.createPattern) {
							if(n.getHrefAttribute().hasValue()) {
								var S = n.attribute("patternTransform");
								n = n.getHrefAttribute().getDefinition(), S.hasValue() && (n.attribute("patternTransform", !0).value = S.value)
							}
							return n.createPattern(w.ctx, q)
						}
						return null
					}, w.Property.prototype.getDPI = function(q) {
						return 96
					}, w.Property.prototype.getEM = function(q) {
						var V = 12,
							n = new w.Property("fontSize", w.Font.Parse(w.ctx.font).fontSize);
						return n.hasValue() && (V = n.toPixels(q)), V
					}, w.Property.prototype.getUnits = function() {
						var q = this.value + "";
						return q.replace(/[0-9\.\-]/g, "")
					}, w.Property.prototype.toPixels = function(q, V) {
						if(!this.hasValue()) return 0;
						var n = this.value + "";
						if(n.match(/em$/)) return this.numValue() * this.getEM(q);
						if(n.match(/ex$/)) return this.numValue() * this.getEM(q) / 2;
						if(n.match(/px$/)) return this.numValue();
						if(n.match(/pt$/)) return this.numValue() * this.getDPI(q) * (1 / 72);
						if(n.match(/pc$/)) return 15 * this.numValue();
						if(n.match(/cm$/)) return this.numValue() * this.getDPI(q) / 2.54;
						if(n.match(/mm$/)) return this.numValue() * this.getDPI(q) / 25.4;
						if(n.match(/in$/)) return this.numValue() * this.getDPI(q);
						if(n.match(/%$/)) return this.numValue() * w.ViewPort.ComputeSize(q);
						var S = this.numValue();
						return V && S < 1 ? S * w.ViewPort.ComputeSize(q) : S
					}, w.Property.prototype.toMilliseconds = function() {
						if(!this.hasValue()) return 0;
						var q = this.value + "";
						return q.match(/s$/) ? 1e3 * this.numValue() : q.match(/ms$/) ? this.numValue() : this.numValue()
					}, w.Property.prototype.toRadians = function() {
						if(!this.hasValue()) return 0;
						var q = this.value + "";
						return q.match(/deg$/) ? this.numValue() * (Math.PI / 180) : q.match(/grad$/) ? this.numValue() * (Math.PI / 200) : q.match(/rad$/) ? this.numValue() : this.numValue() * (Math.PI / 180)
					};
					var K = {
						baseline: "alphabetic",
						"before-edge": "top",
						"text-before-edge": "top",
						middle: "middle",
						central: "middle",
						"after-edge": "bottom",
						"text-after-edge": "bottom",
						ideographic: "ideographic",
						alphabetic: "alphabetic",
						hanging: "hanging",
						mathematical: "alphabetic"
					};
					return w.Property.prototype.toTextBaseline = function() {
						return this.hasValue() ? K[this.value] : null
					}, w.Font = new function() {
						this.Styles = "normal|italic|oblique|inherit", this.Variants = "normal|small-caps|inherit", this.Weights = "normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900|inherit", this.CreateFont = function(q, V, n, S, _, x) {
							var O = null != x ? this.Parse(x) : this.CreateFont("", "", "", "", "", w.ctx.font);
							return {
								fontFamily: _ || O.fontFamily,
								fontSize: S || O.fontSize,
								fontStyle: q || O.fontStyle,
								fontWeight: n || O.fontWeight,
								fontVariant: V || O.fontVariant,
								toString: function() {
									return [this.fontStyle, this.fontVariant, this.fontWeight, this.fontSize, this.fontFamily].join(" ")
								}
							}
						};
						var q = this;
						this.Parse = function(V) {
							for(var n = {}, S = w.trim(w.compressSpaces(V || "")).split(" "), _ = {
									fontSize: !1,
									fontStyle: !1,
									fontWeight: !1,
									fontVariant: !1
								}, x = "", O = 0; O < S.length; O++) _.fontStyle || q.Styles.indexOf(S[O]) == -1 ? _.fontVariant || q.Variants.indexOf(S[O]) == -1 ? _.fontWeight || q.Weights.indexOf(S[O]) == -1 ? _.fontSize ? "inherit" != S[O] && (x += S[O]) : ("inherit" != S[O] && (n.fontSize = S[O].split("/")[0]), _.fontStyle = _.fontVariant = _.fontWeight = _.fontSize = !0) : ("inherit" != S[O] && (n.fontWeight = S[O]), _.fontStyle = _.fontVariant = _.fontWeight = !0) : ("inherit" != S[O] && (n.fontVariant = S[O]), _.fontStyle = _.fontVariant = !0) : ("inherit" != S[O] && (n.fontStyle = S[O]), _.fontStyle = !0);
							return "" != x && (n.fontFamily = x), n
						}
					}, w.ToNumberArray = function(q) {
						for(var V = w.trim(w.compressSpaces((q || "").replace(/,/g, " "))).split(" "), n = 0; n < V.length; n++) V[n] = parseFloat(V[n]);
						return V
					}, w.Point = function(q, V) {
						this.x = q, this.y = V
					}, w.Point.prototype.angleTo = function(q) {
						return Math.atan2(q.y - this.y, q.x - this.x)
					}, w.Point.prototype.applyTransform = function(q) {
						var V = this.x * q[0] + this.y * q[2] + q[4],
							n = this.x * q[1] + this.y * q[3] + q[5];
						this.x = V, this.y = n
					}, w.CreatePoint = function(q) {
						var V = w.ToNumberArray(q);
						return new w.Point(V[0], V[1])
					}, w.CreatePath = function(q) {
						for(var V = w.ToNumberArray(q), n = [], S = 0; S < V.length; S += 2) n.push(new w.Point(V[S], V[S + 1]));
						return n
					}, w.BoundingBox = function(q, V, n, S) {
						this.x1 = Number.NaN, this.y1 = Number.NaN, this.x2 = Number.NaN, this.y2 = Number.NaN, this.x = function() {
							return this.x1
						}, this.y = function() {
							return this.y1
						}, this.width = function() {
							return this.x2 - this.x1
						}, this.height = function() {
							return this.y2 - this.y1
						}, this.addPoint = function(q, V) {
							null != q && ((isNaN(this.x1) || isNaN(this.x2)) && (this.x1 = q, this.x2 = q), q < this.x1 && (this.x1 = q), q > this.x2 && (this.x2 = q)), null != V && ((isNaN(this.y1) || isNaN(this.y2)) && (this.y1 = V, this.y2 = V), V < this.y1 && (this.y1 = V), V > this.y2 && (this.y2 = V))
						}, this.addX = function(q) {
							this.addPoint(q, null)
						}, this.addY = function(q) {
							this.addPoint(null, q)
						}, this.addBoundingBox = function(q) {
							this.addPoint(q.x1, q.y1), this.addPoint(q.x2, q.y2)
						}, this.addQuadraticCurve = function(q, V, n, S, _, x) {
							var O = q + 2 / 3 * (n - q),
								w = V + 2 / 3 * (S - V),
								K = O + 1 / 3 * (_ - q),
								g = w + 1 / 3 * (x - V);
							this.addBezierCurve(q, V, O, K, w, g, _, x)
						}, this.addBezierCurve = function(q, V, n, S, _, x, O, w) {
							var K = [q, V],
								g = [n, S],
								A = [_, x],
								l = [O, w];
							this.addPoint(K[0], K[1]), this.addPoint(l[0], l[1]);
							for(var Z = 0; Z <= 1; Z++) {
								var z = function(q) {
										return Math.pow(1 - q, 3) * K[Z] + 3 * Math.pow(1 - q, 2) * q * g[Z] + 3 * (1 - q) * Math.pow(q, 2) * A[Z] + Math.pow(q, 3) * l[Z]
									},
									H = 6 * K[Z] - 12 * g[Z] + 6 * A[Z],
									i = -3 * K[Z] + 9 * g[Z] - 9 * A[Z] + 3 * l[Z],
									N = 3 * g[Z] - 3 * K[Z];
								if(0 != i) {
									var U = Math.pow(H, 2) - 4 * N * i;
									if(!(U < 0)) {
										var j = (-H + Math.sqrt(U)) / (2 * i);
										0 < j && j < 1 && (0 == Z && this.addX(z(j)), 1 == Z && this.addY(z(j)));
										var p = (-H - Math.sqrt(U)) / (2 * i);
										0 < p && p < 1 && (0 == Z && this.addX(z(p)), 1 == Z && this.addY(z(p)))
									}
								} else {
									if(0 == H) continue;
									var y = -N / H;
									0 < y && y < 1 && (0 == Z && this.addX(z(y)), 1 == Z && this.addY(z(y)))
								}
							}
						}, this.isPointInBox = function(q, V) {
							return this.x1 <= q && q <= this.x2 && this.y1 <= V && V <= this.y2
						}, this.addPoint(q, V), this.addPoint(n, S)
					}, w.Transform = function(q) {
						var V = this;
						this.Type = {}, this.Type.translate = function(q) {
							this.p = w.CreatePoint(q), this.getMatrix = function() {
								return [1, 0, 0, 1, this.p.x || 0, this.p.y || 0]
							}, this.apply = function(q) {
								q.translate(this.p.x || 0, this.p.y || 0)
							}, this.unapply = function(q) {
								q.translate(-1 * this.p.x || 0, -1 * this.p.y || 0)
							}, this.applyToPoint = function(q) {
								q.applyTransform([1, 0, 0, 1, this.p.x || 0, this.p.y || 0])
							}
						}, this.Type.rotate = function(q) {
							var V = w.ToNumberArray(q);
							this.angle = new w.Property("angle", V[0]), this.cx = V[1] || 0, this.cy = V[2] || 0, this.apply = function(q) {
								q.translate(this.cx, this.cy), q.rotate(this.angle.toRadians()), q.translate(-this.cx, -this.cy)
							}, this.getMatrix = function() {
								var q = this.angle.toRadians(),
									V = Math.sin(q),
									n = Math.cos(q),
									S = this.cx,
									_ = this.cy;
								return [n, V, -V, n, n * -S + V * _ + S, V * -S - n * _ + _]
							}, this.unapply = function(q) {
								q.translate(this.cx, this.cy), q.rotate(-1 * this.angle.toRadians()), q.translate(-this.cx, -this.cy)
							}, this.applyToPoint = function(q) {
								var V = this.angle.toRadians();
								q.applyTransform([1, 0, 0, 1, this.p.x || 0, this.p.y || 0]), q.applyTransform([Math.cos(V), Math.sin(V), -Math.sin(V), Math.cos(V), 0, 0]), q.applyTransform([1, 0, 0, 1, -this.p.x || 0, -this.p.y || 0])
							}
						}, this.Type.scale = function(q) {
							this.p = w.CreatePoint(q), this.getMatrix = function() {
								return [this.p.x || 1, 0, 0, this.p.y || this.p.x || 1, 0, 0]
							}, this.apply = function(q) {
								q.scale(this.p.x || 1, this.p.y || this.p.x || 1)
							}, this.unapply = function(q) {
								q.scale(1 / this.p.x || 1, 1 / this.p.y || this.p.x || 1)
							}, this.applyToPoint = function(q) {
								q.applyTransform([this.p.x || 0, 0, 0, this.p.y || 0, 0, 0])
							}
						}, this.Type.matrix = function(q) {
							this.m = w.ToNumberArray(q), this.getMatrix = function() {
								return this.m
							}, this.apply = function(q) {
								q.transform(this.m[0], this.m[1], this.m[2], this.m[3], this.m[4], this.m[5])
							}, this.unapply = function(q) {
								var V = this.m[0],
									n = this.m[2],
									S = this.m[4],
									_ = this.m[1],
									x = this.m[3],
									O = this.m[5],
									w = 0,
									K = 0,
									g = 1,
									A = 1 / (V * (x * g - O * K) - n * (_ * g - O * w) + S * (_ * K - x * w));
								q.transform(A * (x * g - O * K), A * (O * w - _ * g), A * (S * K - n * g), A * (V * g - S * w), A * (n * O - S * x), A * (S * _ - V * O))
							}, this.applyToPoint = function(q) {
								q.applyTransform(this.m)
							}
						}, this.Type.SkewBase = function(q) {
							this.base = V.Type.matrix, this.base(q), this.angle = new w.Property("angle", q)
						}, this.Type.SkewBase.prototype = new this.Type.matrix, this.Type.skewX = function(q) {
							this.base = V.Type.SkewBase, this.base(q), this.m = [1, 0, Math.tan(this.angle.toRadians()), 1, 0, 0]
						}, this.Type.skewX.prototype = new this.Type.SkewBase, this.Type.skewY = function(q) {
							this.base = V.Type.SkewBase, this.base(q), this.m = [1, Math.tan(this.angle.toRadians()), 0, 1, 0, 0]
						}, this.Type.skewY.prototype = new this.Type.SkewBase, this.transforms = [], this.getMatrix = function() {
							for(var q = 1, V = 0, n = 0, S = 1, _ = 0, x = 0, O = 0; O < this.transforms.length; O++) {
								var w = this.transforms[O].getMatrix(),
									K = q,
									g = V,
									A = n,
									l = S,
									Z = _,
									z = x;
								q = K * w[0] + A * w[1], V = g * w[0] + l * w[1], n = K * w[2] + A * w[3], S = g * w[2] + l * w[3], _ = K * w[4] + A * w[5] + Z, x = g * w[4] + l * w[5] + z
							}
							return [q, V, n, S, _, x]
						}, this.apply = function(q) {
							for(var V = 0; V < this.transforms.length; V++) this.transforms[V].apply(q)
						}, this.unapply = function(q) {
							for(var V = this.transforms.length - 1; V >= 0; V--) this.transforms[V].unapply(q)
						}, this.applyToPoint = function(q) {
							for(var V = 0; V < this.transforms.length; V++) this.transforms[V].applyToPoint(q)
						};
						for(var n = w.trim(w.compressSpaces(q)).replace(/\)([a-zA-Z])/g, ") $1").replace(/\)(\s?,\s?)/g, ") ").split(/\s(?=[a-z])/), S = 0; S < n.length; S++) {
							var _ = w.trim(n[S].split("(")[0]),
								x = n[S].split("(")[1].replace(")", ""),
								O = this.Type[_];
							if("undefined" != typeof O) {
								var K = new O(x);
								K.type = _, this.transforms.push(K)
							}
						}
					}, w.AspectRatio = function(q, V, n, S, _, x, O, K, g, A) {
						V = w.compressSpaces(V), V = V.replace(/^defer\s/, "");
						var l = V.split(" ")[0] || "xMidYMid",
							Z = V.split(" ")[1] || "meet",
							z = n / S,
							H = _ / x,
							i = Math.min(z, H),
							N = Math.max(z, H);
						"meet" == Z && (S *= i, x *= i), "slice" == Z && (S *= N, x *= N), g = new w.Property("refX", g), A = new w.Property("refY", A), g.hasValue() && A.hasValue() ? q.translate(-i * g.toPixels("x"), -i * A.toPixels("y")) : (l.match(/^xMid/) && ("meet" == Z && i == H || "slice" == Z && N == H) && q.translate(n / 2 - S / 2, 0), l.match(/YMid$/) && ("meet" == Z && i == z || "slice" == Z && N == z) && q.translate(0, _ / 2 - x / 2), l.match(/^xMax/) && ("meet" == Z && i == H || "slice" == Z && N == H) && q.translate(n - S, 0), l.match(/YMax$/) && ("meet" == Z && i == z || "slice" == Z && N == z) && q.translate(0, _ - x)), "none" == l ? q.scale(z, H) : "meet" == Z ? q.scale(i, i) : "slice" == Z && q.scale(N, N), q.translate(null == O ? 0 : -O, null == K ? 0 : -K)
					}, w.Element = {}, w.EmptyProperty = new w.Property("EMPTY", ""), w.Element.ElementBase = function(q) {
						this.attributes = {}, this.styles = {}, this.stylesSpecificity = {}, this.children = [], this.attribute = function(q, V) {
							var n = this.attributes[q];
							return null != n ? n : (1 == V && (n = new w.Property(q, ""), this.attributes[q] = n), n || w.EmptyProperty)
						}, this.getHrefAttribute = function() {
							for(var q in this.attributes)
								if("href" == q || q.match(/:href$/)) return this.attributes[q];
							return w.EmptyProperty
						}, this.style = function(q, V, n) {
							var S = this.styles[q];
							if(null != S) return S;
							var _ = this.attribute(q);
							if(null != _ && _.hasValue()) return this.styles[q] = _, _;
							if(1 != n) {
								var x = this.parent;
								if(null != x) {
									var O = x.style(q);
									if(null != O && O.hasValue()) return O
								}
							}
							return 1 == V && (S = new w.Property(q, ""), this.styles[q] = S), S || w.EmptyProperty
						}, this.render = function(q) {
							if("none" != this.style("display").value && "hidden" != this.style("visibility").value) {
								if(q.save(), this.style("mask").hasValue()) {
									var V = this.style("mask").getDefinition();
									null != V && V.apply(q, this)
								} else this.setContext(q), this.renderChildren(q), this.clearContext(q);
								q.restore()
							}
						}, this.setContext = function(q) {}, this.clearContext = function(q) {}, this.renderChildren = function(q) {
							for(var V = 0; V < this.children.length; V++) this.children[V].render(q)
						}, this.addChild = function(q, V) {
							var n = q;
							V && (n = w.CreateElement(q)), n.parent = this, "title" != n.type && this.children.push(n)
						}, this.addStylesFromStyleDefinition = function() {
							for(var V in w.Styles)
								if("@" != V[0] && O(q, V)) {
									var n = w.Styles[V],
										S = w.StylesSpecificity[V];
									if(null != n)
										for(var _ in n) {
											var x = this.stylesSpecificity[_];
											"undefined" == typeof x && (x = "000"), S > x && (this.styles[_] = n[_], this.stylesSpecificity[_] = S)
										}
								}
						};
						var V = new RegExp("^[A-Z-]+$"),
							n = function(q) {
								return V.test(q) ? q.toLowerCase() : q
							};
						if(null != q && 1 == q.nodeType) {
							for(var S = 0; S < q.attributes.length; S++) {
								var _ = q.attributes[S],
									x = n(_.nodeName);
								this.attributes[x] = new w.Property(x, _.value)
							}
							if(this.addStylesFromStyleDefinition(), this.attribute("style").hasValue())
								for(var K = this.attribute("style").value.split(";"), S = 0; S < K.length; S++)
									if("" != w.trim(K[S])) {
										var g = K[S].split(":"),
											A = w.trim(g[0]),
											l = w.trim(g[1]);
										this.styles[A] = new w.Property(A, l)
									}
							this.attribute("id").hasValue() && null == w.Definitions[this.attribute("id").value] && (w.Definitions[this.attribute("id").value] = this);
							for(var S = 0; S < q.childNodes.length; S++) {
								var Z = q.childNodes[S];
								if(1 == Z.nodeType && this.addChild(Z, !0), this.captureTextNodes && (3 == Z.nodeType || 4 == Z.nodeType)) {
									var z = Z.value || Z.text || Z.textContent || "";
									"" != w.compressSpaces(z) && this.addChild(new w.Element.tspan(Z), !1)
								}
							}
						}
					}, w.Element.RenderedElementBase = function(q) {
						this.base = w.Element.ElementBase, this.base(q), this.setContext = function(q) {
							if(this.style("fill").isUrlDefinition()) {
								var V = this.style("fill").getFillStyleDefinition(this, this.style("fill-opacity"));
								null != V && (q.fillStyle = V)
							} else if(this.style("fill").hasValue()) {
								var n = this.style("fill");
								"currentColor" == n.value && (n.value = this.style("color").value), "inherit" != n.value && (q.fillStyle = "none" == n.value ? "rgba(0,0,0,0)" : n.value)
							}
							if(this.style("fill-opacity").hasValue()) {
								var n = new w.Property("fill", q.fillStyle);
								n = n.addOpacity(this.style("fill-opacity")), q.fillStyle = n.value
							}
							if(this.style("stroke").isUrlDefinition()) {
								var V = this.style("stroke").getFillStyleDefinition(this, this.style("stroke-opacity"));
								null != V && (q.strokeStyle = V)
							} else if(this.style("stroke").hasValue()) {
								var S = this.style("stroke");
								"currentColor" == S.value && (S.value = this.style("color").value), "inherit" != S.value && (q.strokeStyle = "none" == S.value ? "rgba(0,0,0,0)" : S.value)
							}
							if(this.style("stroke-opacity").hasValue()) {
								var S = new w.Property("stroke", q.strokeStyle);
								S = S.addOpacity(this.style("stroke-opacity")), q.strokeStyle = S.value
							}
							if(this.style("stroke-width").hasValue()) {
								var _ = this.style("stroke-width").toPixels();
								q.lineWidth = 0 == _ ? .001 : _
							}
							if(this.style("stroke-linecap").hasValue() && (q.lineCap = this.style("stroke-linecap").value), this.style("stroke-linejoin").hasValue() && (q.lineJoin = this.style("stroke-linejoin").value), this.style("stroke-miterlimit").hasValue() && (q.miterLimit = this.style("stroke-miterlimit").value), this.style("stroke-dasharray").hasValue() && "none" != this.style("stroke-dasharray").value) {
								var x = w.ToNumberArray(this.style("stroke-dasharray").value);
								"undefined" != typeof q.setLineDash ? q.setLineDash(x) : "undefined" != typeof q.webkitLineDash ? q.webkitLineDash = x : "undefined" == typeof q.mozDash || 1 == x.length && 0 == x[0] || (q.mozDash = x);
								var O = this.style("stroke-dashoffset").numValueOrDefault(1);
								"undefined" != typeof q.lineDashOffset ? q.lineDashOffset = O : "undefined" != typeof q.webkitLineDashOffset ? q.webkitLineDashOffset = O : "undefined" != typeof q.mozDashOffset && (q.mozDashOffset = O)
							}
							if("undefined" != typeof q.font && (q.font = w.Font.CreateFont(this.style("font-style").value, this.style("font-variant").value, this.style("font-weight").value, this.style("font-size").hasValue() ? this.style("font-size").toPixels() + "px" : "", this.style("font-family").value).toString()), this.style("transform", !1, !0).hasValue()) {
								var K = new w.Transform(this.style("transform", !1, !0).value);
								K.apply(q)
							}
							if(this.style("clip-path", !1, !0).hasValue()) {
								var g = this.style("clip-path", !1, !0).getDefinition();
								null != g && g.apply(q)
							}
							this.style("opacity").hasValue() && (q.globalAlpha = this.style("opacity").numValue())
						}
					}, w.Element.RenderedElementBase.prototype = new w.Element.ElementBase, w.Element.PathElementBase = function(q) {
						this.base = w.Element.RenderedElementBase, this.base(q), this.path = function(q) {
							return null != q && q.beginPath(), new w.BoundingBox
						}, this.renderChildren = function(q) {
							this.path(q), w.Mouse.checkPath(this, q), "" != q.fillStyle && ("inherit" != this.style("fill-rule").valueOrDefault("inherit") ? q.fill(this.style("fill-rule").value) : q.fill()), "" != q.strokeStyle && q.stroke();
							var V = this.getMarkers();
							if(null != V) {
								if(this.style("marker-start").isUrlDefinition()) {
									var n = this.style("marker-start").getDefinition();
									n.render(q, V[0][0], V[0][1])
								}
								if(this.style("marker-mid").isUrlDefinition())
									for(var n = this.style("marker-mid").getDefinition(), S = 1; S < V.length - 1; S++) n.render(q, V[S][0], V[S][1]);
								if(this.style("marker-end").isUrlDefinition()) {
									var n = this.style("marker-end").getDefinition();
									n.render(q, V[V.length - 1][0], V[V.length - 1][1])
								}
							}
						}, this.getBoundingBox = function() {
							return this.path()
						}, this.getMarkers = function() {
							return null
						}
					}, w.Element.PathElementBase.prototype = new w.Element.RenderedElementBase, w.Element.svg = function(V) {
						this.base = w.Element.RenderedElementBase, this.base(V), this.baseClearContext = this.clearContext, this.clearContext = function(q) {
							this.baseClearContext(q), w.ViewPort.RemoveCurrent()
						}, this.baseSetContext = this.setContext, this.setContext = function(V) {
							V.strokeStyle = "rgba(0,0,0,0)", V.lineCap = "butt", V.lineJoin = "miter", V.miterLimit = 4, "undefined" != typeof V.font && "undefined" != typeof q.getComputedStyle && (V.font = q.getComputedStyle(V.canvas).getPropertyValue("font")), this.baseSetContext(V), this.attribute("x").hasValue() || (this.attribute("x", !0).value = 0), this.attribute("y").hasValue() || (this.attribute("y", !0).value = 0), V.translate(this.attribute("x").toPixels("x"), this.attribute("y").toPixels("y"));
							var n = w.ViewPort.width(),
								S = w.ViewPort.height();
							if(this.attribute("width").hasValue() || (this.attribute("width", !0).value = "100%"), this.attribute("height").hasValue() || (this.attribute("height", !0).value = "100%"), "undefined" == typeof this.root) {
								n = this.attribute("width").toPixels("x"), S = this.attribute("height").toPixels("y");
								var _ = 0,
									x = 0;
								this.attribute("refX").hasValue() && this.attribute("refY").hasValue() && (_ = -this.attribute("refX").toPixels("x"), x = -this.attribute("refY").toPixels("y")), "visible" != this.attribute("overflow").valueOrDefault("hidden") && (V.beginPath(), V.moveTo(_, x), V.lineTo(n, x), V.lineTo(n, S), V.lineTo(_, S), V.closePath(), V.clip())
							}
							if(w.ViewPort.SetCurrent(n, S), this.attribute("viewBox").hasValue()) {
								var O = w.ToNumberArray(this.attribute("viewBox").value),
									K = O[0],
									g = O[1];
								n = O[2], S = O[3], w.AspectRatio(V, this.attribute("preserveAspectRatio").value, w.ViewPort.width(), n, w.ViewPort.height(), S, K, g, this.attribute("refX").value, this.attribute("refY").value), w.ViewPort.RemoveCurrent(), w.ViewPort.SetCurrent(O[2], O[3])
							}
						}
					}, w.Element.svg.prototype = new w.Element.RenderedElementBase, w.Element.rect = function(q) {
						this.base = w.Element.PathElementBase, this.base(q), this.path = function(q) {
							var V = this.attribute("x").toPixels("x"),
								n = this.attribute("y").toPixels("y"),
								S = this.attribute("width").toPixels("x"),
								_ = this.attribute("height").toPixels("y"),
								x = this.attribute("rx").toPixels("x"),
								O = this.attribute("ry").toPixels("y");
							return this.attribute("rx").hasValue() && !this.attribute("ry").hasValue() && (O = x), this.attribute("ry").hasValue() && !this.attribute("rx").hasValue() && (x = O), x = Math.min(x, S / 2), O = Math.min(O, _ / 2), null != q && (q.beginPath(), q.moveTo(V + x, n), q.lineTo(V + S - x, n), q.quadraticCurveTo(V + S, n, V + S, n + O), q.lineTo(V + S, n + _ - O), q.quadraticCurveTo(V + S, n + _, V + S - x, n + _), q.lineTo(V + x, n + _), q.quadraticCurveTo(V, n + _, V, n + _ - O), q.lineTo(V, n + O), q.quadraticCurveTo(V, n, V + x, n), q.closePath()), new w.BoundingBox(V, n, V + S, n + _)
						}
					}, w.Element.rect.prototype = new w.Element.PathElementBase, w.Element.circle = function(q) {
						this.base = w.Element.PathElementBase, this.base(q), this.path = function(q) {
							var V = this.attribute("cx").toPixels("x"),
								n = this.attribute("cy").toPixels("y"),
								S = this.attribute("r").toPixels();
							return null != q && (q.beginPath(), q.arc(V, n, S, 0, 2 * Math.PI, !0), q.closePath()), new w.BoundingBox(V - S, n - S, V + S, n + S)
						}
					}, w.Element.circle.prototype = new w.Element.PathElementBase, w.Element.ellipse = function(q) {
						this.base = w.Element.PathElementBase, this.base(q), this.path = function(q) {
							var V = 4 * ((Math.sqrt(2) - 1) / 3),
								n = this.attribute("rx").toPixels("x"),
								S = this.attribute("ry").toPixels("y"),
								_ = this.attribute("cx").toPixels("x"),
								x = this.attribute("cy").toPixels("y");
							return null != q && (q.beginPath(), q.moveTo(_, x - S), q.bezierCurveTo(_ + V * n, x - S, _ + n, x - V * S, _ + n, x), q.bezierCurveTo(_ + n, x + V * S, _ + V * n, x + S, _, x + S), q.bezierCurveTo(_ - V * n, x + S, _ - n, x + V * S, _ - n, x), q.bezierCurveTo(_ - n, x - V * S, _ - V * n, x - S, _, x - S), q.closePath()), new w.BoundingBox(_ - n, x - S, _ + n, x + S)
						}
					}, w.Element.ellipse.prototype = new w.Element.PathElementBase, w.Element.line = function(q) {
						this.base = w.Element.PathElementBase, this.base(q), this.getPoints = function() {
							return [new w.Point(this.attribute("x1").toPixels("x"), this.attribute("y1").toPixels("y")), new w.Point(this.attribute("x2").toPixels("x"), this.attribute("y2").toPixels("y"))]
						}, this.path = function(q) {
							var V = this.getPoints();
							return null != q && (q.beginPath(), q.moveTo(V[0].x, V[0].y), q.lineTo(V[1].x, V[1].y)), new w.BoundingBox(V[0].x, V[0].y, V[1].x, V[1].y)
						}, this.getMarkers = function() {
							var q = this.getPoints(),
								V = q[0].angleTo(q[1]);
							return [
								[q[0], V],
								[q[1], V]
							]
						}
					}, w.Element.line.prototype = new w.Element.PathElementBase, w.Element.polyline = function(q) {
						this.base = w.Element.PathElementBase, this.base(q), this.points = w.CreatePath(this.attribute("points").value), this.path = function(q) {
							var V = new w.BoundingBox(this.points[0].x, this.points[0].y);
							null != q && (q.beginPath(), q.moveTo(this.points[0].x, this.points[0].y));
							for(var n = 1; n < this.points.length; n++) V.addPoint(this.points[n].x, this.points[n].y), null != q && q.lineTo(this.points[n].x, this.points[n].y);
							return V
						}, this.getMarkers = function() {
							for(var q = [], V = 0; V < this.points.length - 1; V++) q.push([this.points[V], this.points[V].angleTo(this.points[V + 1])]);
							return q.length > 0 && q.push([this.points[this.points.length - 1], q[q.length - 1][1]]), q
						}
					}, w.Element.polyline.prototype = new w.Element.PathElementBase, w.Element.polygon = function(q) {
						this.base = w.Element.polyline, this.base(q), this.basePath = this.path, this.path = function(q) {
							var V = this.basePath(q);
							return null != q && (q.lineTo(this.points[0].x, this.points[0].y), q.closePath()), V
						}
					}, w.Element.polygon.prototype = new w.Element.polyline, w.Element.path = function(q) {
						this.base = w.Element.PathElementBase, this.base(q);
						var V = this.attribute("d").value;
						V = V.replace(/,/gm, " ");
						for(var n = 0; n < 2; n++) V = V.replace(/([MmZzLlHhVvCcSsQqTtAa])([^\s])/gm, "$1 $2");
						V = V.replace(/([^\s])([MmZzLlHhVvCcSsQqTtAa])/gm, "$1 $2"), V = V.replace(/([0-9])([+\-])/gm, "$1 $2");
						for(var n = 0; n < 2; n++) V = V.replace(/(\.[0-9]*)(\.)/gm, "$1 $2");
						V = V.replace(/([Aa](\s+[0-9]+){3})\s+([01])\s*([01])/gm, "$1 $3 $4 "), V = w.compressSpaces(V), V = w.trim(V), this.PathParser = new function(q) {
							this.tokens = q.split(" "), this.reset = function() {
								this.i = -1, this.command = "", this.previousCommand = "", this.start = new w.Point(0, 0), this.control = new w.Point(0, 0), this.current = new w.Point(0, 0), this.points = [], this.angles = []
							}, this.isEnd = function() {
								return this.i >= this.tokens.length - 1
							}, this.isCommandOrEnd = function() {
								return !!this.isEnd() || null != this.tokens[this.i + 1].match(/^[A-Za-z]$/)
							}, this.isRelativeCommand = function() {
								switch(this.command) {
									case "m":
									case "l":
									case "h":
									case "v":
									case "c":
									case "s":
									case "q":
									case "t":
									case "a":
									case "z":
										return !0
								}
								return !1
							}, this.getToken = function() {
								return this.i++, this.tokens[this.i]
							}, this.getScalar = function() {
								return parseFloat(this.getToken())
							}, this.nextCommand = function() {
								this.previousCommand = this.command, this.command = this.getToken()
							}, this.getPoint = function() {
								var q = new w.Point(this.getScalar(), this.getScalar());
								return this.makeAbsolute(q)
							}, this.getAsControlPoint = function() {
								var q = this.getPoint();
								return this.control = q, q
							}, this.getAsCurrentPoint = function() {
								var q = this.getPoint();
								return this.current = q, q
							}, this.getReflectedControlPoint = function() {
								if("c" != this.previousCommand.toLowerCase() && "s" != this.previousCommand.toLowerCase() && "q" != this.previousCommand.toLowerCase() && "t" != this.previousCommand.toLowerCase()) return this.current;
								var q = new w.Point(2 * this.current.x - this.control.x, 2 * this.current.y - this.control.y);
								return q
							}, this.makeAbsolute = function(q) {
								return this.isRelativeCommand() && (q.x += this.current.x, q.y += this.current.y), q
							}, this.addMarker = function(q, V, n) {
								null != n && this.angles.length > 0 && null == this.angles[this.angles.length - 1] && (this.angles[this.angles.length - 1] = this.points[this.points.length - 1].angleTo(n)), this.addMarkerAngle(q, null == V ? null : V.angleTo(q))
							}, this.addMarkerAngle = function(q, V) {
								this.points.push(q), this.angles.push(V)
							}, this.getMarkerPoints = function() {
								return this.points
							}, this.getMarkerAngles = function() {
								for(var q = 0; q < this.angles.length; q++)
									if(null == this.angles[q])
										for(var V = q + 1; V < this.angles.length; V++)
											if(null != this.angles[V]) {
												this.angles[q] = this.angles[V];
												break
											}
								return this.angles
							}
						}(V), this.path = function(q) {
							var V = this.PathParser;
							V.reset();
							var n = new w.BoundingBox;
							for(null != q && q.beginPath(); !V.isEnd();) switch(V.nextCommand(), V.command) {
								case "M":
								case "m":
									var S = V.getAsCurrentPoint();
									for(V.addMarker(S), n.addPoint(S.x, S.y), null != q && q.moveTo(S.x, S.y), V.start = V.current; !V.isCommandOrEnd();) {
										var S = V.getAsCurrentPoint();
										V.addMarker(S, V.start), n.addPoint(S.x, S.y), null != q && q.lineTo(S.x, S.y)
									}
									break;
								case "L":
								case "l":
									for(; !V.isCommandOrEnd();) {
										var _ = V.current,
											S = V.getAsCurrentPoint();
										V.addMarker(S, _), n.addPoint(S.x, S.y), null != q && q.lineTo(S.x, S.y)
									}
									break;
								case "H":
								case "h":
									for(; !V.isCommandOrEnd();) {
										var x = new w.Point((V.isRelativeCommand() ? V.current.x : 0) + V.getScalar(), V.current.y);
										V.addMarker(x, V.current), V.current = x, n.addPoint(V.current.x, V.current.y), null != q && q.lineTo(V.current.x, V.current.y)
									}
									break;
								case "V":
								case "v":
									for(; !V.isCommandOrEnd();) {
										var x = new w.Point(V.current.x, (V.isRelativeCommand() ? V.current.y : 0) + V.getScalar());
										V.addMarker(x, V.current), V.current = x, n.addPoint(V.current.x, V.current.y), null != q && q.lineTo(V.current.x, V.current.y)
									}
									break;
								case "C":
								case "c":
									for(; !V.isCommandOrEnd();) {
										var O = V.current,
											K = V.getPoint(),
											g = V.getAsControlPoint(),
											A = V.getAsCurrentPoint();
										V.addMarker(A, g, K), n.addBezierCurve(O.x, O.y, K.x, K.y, g.x, g.y, A.x, A.y), null != q && q.bezierCurveTo(K.x, K.y, g.x, g.y, A.x, A.y)
									}
									break;
								case "S":
								case "s":
									for(; !V.isCommandOrEnd();) {
										var O = V.current,
											K = V.getReflectedControlPoint(),
											g = V.getAsControlPoint(),
											A = V.getAsCurrentPoint();
										V.addMarker(A, g, K), n.addBezierCurve(O.x, O.y, K.x, K.y, g.x, g.y, A.x, A.y), null != q && q.bezierCurveTo(K.x, K.y, g.x, g.y, A.x, A.y)
									}
									break;
								case "Q":
								case "q":
									for(; !V.isCommandOrEnd();) {
										var O = V.current,
											g = V.getAsControlPoint(),
											A = V.getAsCurrentPoint();
										V.addMarker(A, g, g), n.addQuadraticCurve(O.x, O.y, g.x, g.y, A.x, A.y), null != q && q.quadraticCurveTo(g.x, g.y, A.x, A.y)
									}
									break;
								case "T":
								case "t":
									for(; !V.isCommandOrEnd();) {
										var O = V.current,
											g = V.getReflectedControlPoint();
										V.control = g;
										var A = V.getAsCurrentPoint();
										V.addMarker(A, g, g), n.addQuadraticCurve(O.x, O.y, g.x, g.y, A.x, A.y), null != q && q.quadraticCurveTo(g.x, g.y, A.x, A.y)
									}
									break;
								case "A":
								case "a":
									for(; !V.isCommandOrEnd();) {
										var O = V.current,
											l = V.getScalar(),
											Z = V.getScalar(),
											z = V.getScalar() * (Math.PI / 180),
											H = V.getScalar(),
											i = V.getScalar(),
											A = V.getAsCurrentPoint(),
											N = new w.Point(Math.cos(z) * (O.x - A.x) / 2 + Math.sin(z) * (O.y - A.y) / 2, -Math.sin(z) * (O.x - A.x) / 2 + Math.cos(z) * (O.y - A.y) / 2),
											U = Math.pow(N.x, 2) / Math.pow(l, 2) + Math.pow(N.y, 2) / Math.pow(Z, 2);
										U > 1 && (l *= Math.sqrt(U), Z *= Math.sqrt(U));
										var j = (H == i ? -1 : 1) * Math.sqrt((Math.pow(l, 2) * Math.pow(Z, 2) - Math.pow(l, 2) * Math.pow(N.y, 2) - Math.pow(Z, 2) * Math.pow(N.x, 2)) / (Math.pow(l, 2) * Math.pow(N.y, 2) + Math.pow(Z, 2) * Math.pow(N.x, 2)));
										isNaN(j) && (j = 0);
										var p = new w.Point(j * l * N.y / Z, j * -Z * N.x / l),
											y = new w.Point((O.x + A.x) / 2 + Math.cos(z) * p.x - Math.sin(z) * p.y, (O.y + A.y) / 2 + Math.sin(z) * p.x + Math.cos(z) * p.y),
											X = function(q) {
												return Math.sqrt(Math.pow(q[0], 2) + Math.pow(q[1], 2))
											},
											e = function(q, V) {
												return(q[0] * V[0] + q[1] * V[1]) / (X(q) * X(V))
											},
											b = function(q, V) {
												return(q[0] * V[1] < q[1] * V[0] ? -1 : 1) * Math.acos(e(q, V))
											},
											c = b([1, 0], [(N.x - p.x) / l, (N.y - p.y) / Z]),
											J = [(N.x - p.x) / l, (N.y - p.y) / Z],
											C = [(-N.x - p.x) / l, (-N.y - p.y) / Z],
											G = b(J, C);
										e(J, C) <= -1 && (G = Math.PI), e(J, C) >= 1 && (G = 0);
										var v = 1 - i ? 1 : -1,
											u = c + v * (G / 2),
											W = new w.Point(y.x + l * Math.cos(u), y.y + Z * Math.sin(u));
										if(V.addMarkerAngle(W, u - v * Math.PI / 2), V.addMarkerAngle(A, u - v * Math.PI), n.addPoint(A.x, A.y), null != q) {
											var e = l > Z ? l : Z,
												d = l > Z ? 1 : l / Z,
												P = l > Z ? Z / l : 1;
											q.translate(y.x, y.y), q.rotate(z), q.scale(d, P), q.arc(0, 0, e, c, c + G, 1 - i), q.scale(1 / d, 1 / P), q.rotate(-z), q.translate(-y.x, -y.y)
										}
									}
									break;
								case "Z":
								case "z":
									null != q && q.closePath(), V.current = V.start
							}
							return n
						}, this.getMarkers = function() {
							for(var q = this.PathParser.getMarkerPoints(), V = this.PathParser.getMarkerAngles(), n = [], S = 0; S < q.length; S++) n.push([q[S], V[S]]);
							return n
						}
					}, w.Element.path.prototype = new w.Element.PathElementBase, w.Element.pattern = function(q) {
						this.base = w.Element.ElementBase, this.base(q), this.createPattern = function(q, V) {
							var n = this.attribute("width").toPixels("x", !0),
								S = this.attribute("height").toPixels("y", !0),
								_ = new w.Element.svg;
							_.attributes.viewBox = new w.Property("viewBox", this.attribute("viewBox").value), _.attributes.width = new w.Property("width", n + "px"), _.attributes.height = new w.Property("height", S + "px"), _.attributes.transform = new w.Property("transform", this.attribute("patternTransform").value), _.children = this.children;
							var x = document.createElement("canvas");
							x.width = n, x.height = S;
							var O = x.getContext("2d");
							this.attribute("x").hasValue() && this.attribute("y").hasValue() && O.translate(this.attribute("x").toPixels("x", !0), this.attribute("y").toPixels("y", !0));
							for(var K = -1; K <= 1; K++)
								for(var g = -1; g <= 1; g++) O.save(), _.attributes.x = new w.Property("x", K * x.width), _.attributes.y = new w.Property("y", g * x.height), _.render(O), O.restore();
							var A = q.createPattern(x, "repeat");
							return A
						}
					}, w.Element.pattern.prototype = new w.Element.ElementBase, w.Element.marker = function(q) {
						this.base = w.Element.ElementBase, this.base(q), this.baseRender = this.render, this.render = function(q, V, n) {
							q.translate(V.x, V.y), "auto" == this.attribute("orient").valueOrDefault("auto") && q.rotate(n), "strokeWidth" == this.attribute("markerUnits").valueOrDefault("strokeWidth") && q.scale(q.lineWidth, q.lineWidth), q.save();
							var S = new w.Element.svg;
							S.attributes.viewBox = new w.Property("viewBox", this.attribute("viewBox").value), S.attributes.refX = new w.Property("refX", this.attribute("refX").value), S.attributes.refY = new w.Property("refY", this.attribute("refY").value), S.attributes.width = new w.Property("width", this.attribute("markerWidth").value), S.attributes.height = new w.Property("height", this.attribute("markerHeight").value), S.attributes.fill = new w.Property("fill", this.attribute("fill").valueOrDefault("black")), S.attributes.stroke = new w.Property("stroke", this.attribute("stroke").valueOrDefault("none")), S.children = this.children, S.render(q), q.restore(), "strokeWidth" == this.attribute("markerUnits").valueOrDefault("strokeWidth") && q.scale(1 / q.lineWidth, 1 / q.lineWidth), "auto" == this.attribute("orient").valueOrDefault("auto") && q.rotate(-n), q.translate(-V.x, -V.y)
						}
					}, w.Element.marker.prototype = new w.Element.ElementBase, w.Element.defs = function(q) {
						this.base = w.Element.ElementBase, this.base(q), this.render = function(q) {}
					}, w.Element.defs.prototype = new w.Element.ElementBase, w.Element.GradientBase = function(q) {
						this.base = w.Element.ElementBase, this.base(q), this.stops = [];
						for(var V = 0; V < this.children.length; V++) {
							var n = this.children[V];
							"stop" == n.type && this.stops.push(n)
						}
						this.getGradient = function() {}, this.gradientUnits = function() {
							return this.attribute("gradientUnits").valueOrDefault("objectBoundingBox")
						}, this.attributesToInherit = ["gradientUnits"], this.inheritStopContainer = function(q) {
							for(var V = 0; V < this.attributesToInherit.length; V++) {
								var n = this.attributesToInherit[V];
								!this.attribute(n).hasValue() && q.attribute(n).hasValue() && (this.attribute(n, !0).value = q.attribute(n).value)
							}
						}, this.createGradient = function(q, V, n) {
							var S = this;
							this.getHrefAttribute().hasValue() && (S = this.getHrefAttribute().getDefinition(), this.inheritStopContainer(S));
							var _ = function(q) {
									if(n.hasValue()) {
										var V = new w.Property("color", q);
										return V.addOpacity(n).value
									}
									return q
								},
								x = this.getGradient(q, V);
							if(null == x) return _(S.stops[S.stops.length - 1].color);
							for(var O = 0; O < S.stops.length; O++) x.addColorStop(S.stops[O].offset, _(S.stops[O].color));
							if(this.attribute("gradientTransform").hasValue()) {
								var K = w.ViewPort.viewPorts[0],
									g = new w.Element.rect;
								g.attributes.x = new w.Property("x", -w.MAX_VIRTUAL_PIXELS / 3), g.attributes.y = new w.Property("y", -w.MAX_VIRTUAL_PIXELS / 3), g.attributes.width = new w.Property("width", w.MAX_VIRTUAL_PIXELS), g.attributes.height = new w.Property("height", w.MAX_VIRTUAL_PIXELS);
								var A = new w.Element.g;
								A.attributes.transform = new w.Property("transform", this.attribute("gradientTransform").value), A.children = [g];
								var l = new w.Element.svg;
								l.attributes.x = new w.Property("x", 0), l.attributes.y = new w.Property("y", 0), l.attributes.width = new w.Property("width", K.width), l.attributes.height = new w.Property("height", K.height), l.children = [A];
								var Z = document.createElement("canvas");
								Z.width = K.width, Z.height = K.height;
								var z = Z.getContext("2d");
								z.fillStyle = x, l.render(z);
								var H = z.createPattern(Z, "no-repeat");
								return H.gradient = x, H.gradientTransform = this.attribute("gradientTransform").value, H.trans = new w.Transform(this.attribute("gradientTransform").value).getMatrix(), H
							}
							return x
						}
					}, w.Element.GradientBase.prototype = new w.Element.ElementBase, w.Element.linearGradient = function(q) {
						this.base = w.Element.GradientBase, this.base(q), this.attributesToInherit.push("x1"), this.attributesToInherit.push("y1"), this.attributesToInherit.push("x2"), this.attributesToInherit.push("y2"), this.getGradient = function(q, V) {
							var n = "objectBoundingBox" == this.gradientUnits() ? V.getBoundingBox() : null;
							this.attribute("x1").hasValue() || this.attribute("y1").hasValue() || this.attribute("x2").hasValue() || this.attribute("y2").hasValue() || (this.attribute("x1", !0).value = 0, this.attribute("y1", !0).value = 0, this.attribute("x2", !0).value = 1, this.attribute("y2", !0).value = 0);
							var S = "objectBoundingBox" == this.gradientUnits() ? n.x() + n.width() * this.attribute("x1").numValue() : this.attribute("x1").toPixels("x"),
								_ = "objectBoundingBox" == this.gradientUnits() ? n.y() + n.height() * this.attribute("y1").numValue() : this.attribute("y1").toPixels("y"),
								x = "objectBoundingBox" == this.gradientUnits() ? n.x() + n.width() * this.attribute("x2").numValue() : this.attribute("x2").toPixels("x"),
								O = "objectBoundingBox" == this.gradientUnits() ? n.y() + n.height() * this.attribute("y2").numValue() : this.attribute("y2").toPixels("y");
							return S == x && _ == O ? null : q.createLinearGradient(S, _, x, O)
						}
					}, w.Element.linearGradient.prototype = new w.Element.GradientBase, w.Element.radialGradient = function(q) {
						this.base = w.Element.GradientBase, this.base(q), this.attributesToInherit.push("cx"), this.attributesToInherit.push("cy"), this.attributesToInherit.push("r"), this.attributesToInherit.push("fx"), this.attributesToInherit.push("fy"), this.getGradient = function(q, V) {
							var n = V.getBoundingBox();
							this.attribute("cx").hasValue() || (this.attribute("cx", !0).value = "50%"), this.attribute("cy").hasValue() || (this.attribute("cy", !0).value = "50%"), this.attribute("r").hasValue() || (this.attribute("r", !0).value = "50%");
							var S = "objectBoundingBox" == this.gradientUnits() ? n.x() + n.width() * this.attribute("cx").numValue() : this.attribute("cx").toPixels("x"),
								_ = "objectBoundingBox" == this.gradientUnits() ? n.y() + n.height() * this.attribute("cy").numValue() : this.attribute("cy").toPixels("y"),
								x = S,
								O = _;
							this.attribute("fx").hasValue() && (x = "objectBoundingBox" == this.gradientUnits() ? n.x() + n.width() * this.attribute("fx").numValue() : this.attribute("fx").toPixels("x")), this.attribute("fy").hasValue() && (O = "objectBoundingBox" == this.gradientUnits() ? n.y() + n.height() * this.attribute("fy").numValue() : this.attribute("fy").toPixels("y"));
							var w = "objectBoundingBox" == this.gradientUnits() ? (n.width() + n.height()) / 2 * this.attribute("r").numValue() : this.attribute("r").toPixels();
							return q.createRadialGradient(x, O, 0, S, _, w)
						}
					}, w.Element.radialGradient.prototype = new w.Element.GradientBase, w.Element.stop = function(q) {
						this.base = w.Element.ElementBase, this.base(q), this.offset = this.attribute("offset").numValue(), this.offset < 0 && (this.offset = 0), this.offset > 1 && (this.offset = 1);
						var V = this.style("stop-color", !0);
						"" === V.value && (V.value = "#000"), this.style("stop-opacity").hasValue() && (V = V.addOpacity(this.style("stop-opacity"))), this.color = V.value
					}, w.Element.stop.prototype = new w.Element.ElementBase, w.Element.AnimateBase = function(q) {
						this.base = w.Element.ElementBase, this.base(q), w.Animations.push(this), this.duration = 0, this.begin = this.attribute("begin").toMilliseconds(), this.maxDuration = this.begin + this.attribute("dur").toMilliseconds(), this.getProperty = function() {
							var q = this.attribute("attributeType").value,
								V = this.attribute("attributeName").value;
							return "CSS" == q ? this.parent.style(V, !0) : this.parent.attribute(V, !0)
						}, this.initialValue = null, this.initialUnits = "", this.removed = !1, this.calcValue = function() {
							return ""
						}, this.update = function(q) {
							if(null == this.initialValue && (this.initialValue = this.getProperty().value, this.initialUnits = this.getProperty().getUnits()), this.duration > this.maxDuration) {
								if("indefinite" == this.attribute("repeatCount").value || "indefinite" == this.attribute("repeatDur").value) this.duration = 0;
								else if("freeze" != this.attribute("fill").valueOrDefault("remove") || this.frozen) {
									if("remove" == this.attribute("fill").valueOrDefault("remove") && !this.removed) return this.removed = !0, this.getProperty().value = this.parent.animationFrozen ? this.parent.animationFrozenValue : this.initialValue, !0
								} else this.frozen = !0, this.parent.animationFrozen = !0, this.parent.animationFrozenValue = this.getProperty().value;
								return !1
							}
							this.duration = this.duration + q;
							var V = !1;
							if(this.begin < this.duration) {
								var n = this.calcValue();
								if(this.attribute("type").hasValue()) {
									var S = this.attribute("type").value;
									n = S + "(" + n + ")"
								}
								this.getProperty().value = n, V = !0
							}
							return V
						}, this.from = this.attribute("from"), this.to = this.attribute("to"), this.values = this.attribute("values"), this.values.hasValue() && (this.values.value = this.values.value.split(";")), this.progress = function() {
							var q = {
								progress: (this.duration - this.begin) / (this.maxDuration - this.begin)
							};
							if(this.values.hasValue()) {
								var V = q.progress * (this.values.value.length - 1),
									n = Math.floor(V),
									S = Math.ceil(V);
								q.from = new w.Property("from", parseFloat(this.values.value[n])), q.to = new w.Property("to", parseFloat(this.values.value[S])), q.progress = (V - n) / (S - n)
							} else q.from = this.from, q.to = this.to;
							return q
						}
					}, w.Element.AnimateBase.prototype = new w.Element.ElementBase, w.Element.animate = function(q) {
						this.base = w.Element.AnimateBase, this.base(q), this.calcValue = function() {
							var q = this.progress(),
								V = q.from.numValue() + (q.to.numValue() - q.from.numValue()) * q.progress;
							return V + this.initialUnits
						}
					}, w.Element.animate.prototype = new w.Element.AnimateBase, w.Element.animateColor = function(q) {
						this.base = w.Element.AnimateBase, this.base(q), this.calcValue = function() {
							var q = this.progress(),
								n = new V(q.from.value),
								S = new V(q.to.value);
							if(n.ok && S.ok) {
								var _ = n.r + (S.r - n.r) * q.progress,
									x = n.g + (S.g - n.g) * q.progress,
									O = n.b + (S.b - n.b) * q.progress;
								return "rgb(" + parseInt(_, 10) + "," + parseInt(x, 10) + "," + parseInt(O, 10) + ")"
							}
							return this.attribute("from").value
						}
					}, w.Element.animateColor.prototype = new w.Element.AnimateBase, w.Element.animateTransform = function(q) {
						this.base = w.Element.AnimateBase, this.base(q), this.calcValue = function() {
							for(var q = this.progress(), V = w.ToNumberArray(q.from.value), n = w.ToNumberArray(q.to.value), S = "", _ = 0; _ < V.length; _++) S += V[_] + (n[_] - V[_]) * q.progress + " ";
							return S
						}
					}, w.Element.animateTransform.prototype = new w.Element.animate, w.Element.font = function(q) {
						this.base = w.Element.ElementBase, this.base(q), this.horizAdvX = this.attribute("horiz-adv-x").numValue(), this.isRTL = !1, this.isArabic = !1, this.fontFace = null, this.missingGlyph = null, this.glyphs = [];
						for(var V = 0; V < this.children.length; V++) {
							var n = this.children[V];
							"font-face" == n.type ? (this.fontFace = n, n.style("font-family").hasValue() && (w.Definitions[n.style("font-family").value] = this)) : "missing-glyph" == n.type ? this.missingGlyph = n : "glyph" == n.type && ("" != n.arabicForm ? (this.isRTL = !0, this.isArabic = !0, "undefined" == typeof this.glyphs[n.unicode] && (this.glyphs[n.unicode] = []), this.glyphs[n.unicode][n.arabicForm] = n) : this.glyphs[n.unicode] = n)
						}
					}, w.Element.font.prototype = new w.Element.ElementBase, w.Element.fontface = function(q) {
						this.base = w.Element.ElementBase, this.base(q), this.ascent = this.attribute("ascent").value, this.descent = this.attribute("descent").value, this.unitsPerEm = this.attribute("units-per-em").numValue()
					}, w.Element.fontface.prototype = new w.Element.ElementBase, w.Element.missingglyph = function(q) {
						this.base = w.Element.path, this.base(q), this.horizAdvX = 0
					}, w.Element.missingglyph.prototype = new w.Element.path, w.Element.glyph = function(q) {
						this.base = w.Element.path, this.base(q), this.horizAdvX = this.attribute("horiz-adv-x").numValue(), this.unicode = this.attribute("unicode").value, this.arabicForm = this.attribute("arabic-form").value
					}, w.Element.glyph.prototype = new w.Element.path, w.Element.text = function(q) {
						this.captureTextNodes = !0, this.base = w.Element.RenderedElementBase, this.base(q), this.baseSetContext = this.setContext, this.setContext = function(q) {
							this.baseSetContext(q);
							var V = this.style("dominant-baseline").toTextBaseline();
							null == V && (V = this.style("alignment-baseline").toTextBaseline()), null != V && (q.textBaseline = V)
						}, this.getBoundingBox = function() {
							var q = this.attribute("x").toPixels("x"),
								V = this.attribute("y").toPixels("y"),
								n = this.parent.style("font-size").numValueOrDefault(w.Font.Parse(w.ctx.font).fontSize);
							return new w.BoundingBox(q, V - n, q + Math.floor(2 * n / 3) * this.children[0].getText().length, V)
						}, this.renderChildren = function(q) {
							this.x = this.attribute("x").toPixels("x"), this.y = this.attribute("y").toPixels("y"), this.attribute("dx").hasValue() && (this.x += this.attribute("dx").toPixels("x")), this.attribute("dy").hasValue() && (this.y += this.attribute("dy").toPixels("y")), this.x += this.getAnchorDelta(q, this, 0);
							for(var V = 0; V < this.children.length; V++) this.renderChild(q, this, this, V)
						}, this.getAnchorDelta = function(q, V, n) {
							var S = this.style("text-anchor").valueOrDefault("start");
							if("start" != S) {
								for(var _ = 0, x = n; x < V.children.length; x++) {
									var O = V.children[x];
									if(x > n && O.attribute("x").hasValue()) break;
									O.measureTextRecursive && (_ += O.measureTextRecursive(q))
								}
								return -1 * ("end" == S ? _ : _ / 2)
							}
							return 0
						}, this.renderChild = function(q, V, n, S) {
							var _ = n.children[S];
							_.attribute("x").hasValue() ? (_.x = _.attribute("x").toPixels("x") + V.getAnchorDelta(q, n, S), _.attribute("dx").hasValue() && (_.x += _.attribute("dx").toPixels("x"))) : (_.attribute("dx").hasValue() && (V.x += _.attribute("dx").toPixels("x")), _.x = V.x), V.x = _.x + (_.measureText ? _.measureText(q) : 0), _.attribute("y").hasValue() ? (_.y = _.attribute("y").toPixels("y"), _.attribute("dy").hasValue() && (_.y += _.attribute("dy").toPixels("y"))) : (_.attribute("dy").hasValue() && (V.y += _.attribute("dy").toPixels("y")), _.y = V.y), V.y = _.y, _.render(q);
							for(var S = 0; S < _.children.length; S++) V.renderChild(q, V, _, S)
						}
					}, w.Element.text.prototype = new w.Element.RenderedElementBase, w.Element.TextElementBase = function(q) {
						this.base = w.Element.RenderedElementBase, this.base(q), this.getGlyph = function(q, V, n) {
							var S = V[n],
								_ = null;
							if(q.isArabic) {
								var x = "isolated";
								(0 == n || " " == V[n - 1]) && n < V.length - 2 && " " != V[n + 1] && (x = "terminal"), n > 0 && " " != V[n - 1] && n < V.length - 2 && " " != V[n + 1] && (x = "medial"), n > 0 && " " != V[n - 1] && (n == V.length - 1 || " " == V[n + 1]) && (x = "initial"), "undefined" != typeof q.glyphs[S] && (_ = q.glyphs[S][x], null == _ && "glyph" == q.glyphs[S].type && (_ = q.glyphs[S]))
							} else _ = q.glyphs[S];
							return null == _ && (_ = q.missingGlyph), _
						}, this.renderChildren = function(q) {
							var V = this.parent.style("font-family").getDefinition();
							if(null == V) "" != q.fillStyle && q.fillText(w.compressSpaces(this.getText()), this.x, this.y), "" != q.strokeStyle && q.strokeText(w.compressSpaces(this.getText()), this.x, this.y);
							else {
								var n = this.parent.style("font-size").numValueOrDefault(w.Font.Parse(w.ctx.font).fontSize),
									S = this.parent.style("font-style").valueOrDefault(w.Font.Parse(w.ctx.font).fontStyle),
									_ = this.getText();
								V.isRTL && (_ = _.split("").reverse().join(""));
								for(var x = w.ToNumberArray(this.parent.attribute("dx").value), O = 0; O < _.length; O++) {
									var K = this.getGlyph(V, _, O),
										g = n / V.fontFace.unitsPerEm;
									q.translate(this.x, this.y), q.scale(g, -g);
									var A = q.lineWidth;
									q.lineWidth = q.lineWidth * V.fontFace.unitsPerEm / n, "italic" == S && q.transform(1, 0, .4, 1, 0, 0), K.render(q), "italic" == S && q.transform(1, 0, -.4, 1, 0, 0), q.lineWidth = A, q.scale(1 / g, -1 / g), q.translate(-this.x, -this.y), this.x += n * (K.horizAdvX || V.horizAdvX) / V.fontFace.unitsPerEm, "undefined" == typeof x[O] || isNaN(x[O]) || (this.x += x[O])
								}
							}
						}, this.getText = function() {}, this.measureTextRecursive = function(q) {
							for(var V = this.measureText(q), n = 0; n < this.children.length; n++) V += this.children[n].measureTextRecursive(q);
							return V
						}, this.measureText = function(q) {
							var V = this.parent.style("font-family").getDefinition();
							if(null != V) {
								var n = this.parent.style("font-size").numValueOrDefault(w.Font.Parse(w.ctx.font).fontSize),
									S = 0,
									_ = this.getText();
								V.isRTL && (_ = _.split("").reverse().join(""));
								for(var x = w.ToNumberArray(this.parent.attribute("dx").value), O = 0; O < _.length; O++) {
									var K = this.getGlyph(V, _, O);
									S += (K.horizAdvX || V.horizAdvX) * n / V.fontFace.unitsPerEm, "undefined" == typeof x[O] || isNaN(x[O]) || (S += x[O])
								}
								return S
							}
							var g = w.compressSpaces(this.getText());
							if(!q.measureText) return 10 * g.length;
							q.save(), this.setContext(q);
							var A = q.measureText(g).width;
							return q.restore(), A
						}
					}, w.Element.TextElementBase.prototype = new w.Element.RenderedElementBase, w.Element.tspan = function(q) {
						this.captureTextNodes = !0, this.base = w.Element.TextElementBase, this.base(q), this.text = w.compressSpaces(q.value || q.text || q.textContent || ""), this.getText = function() {
							return this.children.length > 0 ? "" : this.text;
						}
					}, w.Element.tspan.prototype = new w.Element.TextElementBase, w.Element.tref = function(q) {
						this.base = w.Element.TextElementBase, this.base(q), this.getText = function() {
							var q = this.getHrefAttribute().getDefinition();
							if(null != q) return q.children[0].getText()
						}
					}, w.Element.tref.prototype = new w.Element.TextElementBase, w.Element.a = function(V) {
						this.base = w.Element.TextElementBase, this.base(V), this.hasText = V.childNodes.length > 0;
						for(var n = 0; n < V.childNodes.length; n++) 3 != V.childNodes[n].nodeType && (this.hasText = !1);
						this.text = this.hasText ? V.childNodes[0].value : "", this.getText = function() {
							return this.text
						}, this.baseRenderChildren = this.renderChildren, this.renderChildren = function(q) {
							if(this.hasText) {
								this.baseRenderChildren(q);
								var V = new w.Property("fontSize", w.Font.Parse(w.ctx.font).fontSize);
								w.Mouse.checkBoundingBox(this, new w.BoundingBox(this.x, this.y - V.toPixels("y"), this.x + this.measureText(q), this.y))
							} else if(this.children.length > 0) {
								var n = new w.Element.g;
								n.children = this.children, n.parent = this, n.render(q)
							}
						}, this.onclick = function() {
							q.open(this.getHrefAttribute().value)
						}, this.onmousemove = function() {
							w.ctx.canvas.style.cursor = "pointer"
						}
					}, w.Element.a.prototype = new w.Element.TextElementBase, w.Element.image = function(q) {
						this.base = w.Element.RenderedElementBase, this.base(q);
						var V = this.getHrefAttribute().value;
						if("" != V) {
							var n = V.match(/\.svg$/);
							if(w.Images.push(this), this.loaded = !1, n) this.img = w.ajax(V), this.loaded = !0;
							else {
								this.img = document.createElement("img"), 1 == w.opts.useCORS && (this.img.crossOrigin = "Anonymous");
								var S = this;
								this.img.onload = function() {
									S.loaded = !0
								}, this.img.onerror = function() {
									w.log('ERROR: image "' + V + '" not found'), S.loaded = !0
								}, this.img.src = V
							}
							this.renderChildren = function(q) {
								var V = this.attribute("x").toPixels("x"),
									S = this.attribute("y").toPixels("y"),
									_ = this.attribute("width").toPixels("x"),
									x = this.attribute("height").toPixels("y");
								0 != _ && 0 != x && (q.save(), n ? q.drawSvg(this.img, V, S, _, x) : (q.translate(V, S), w.AspectRatio(q, this.attribute("preserveAspectRatio").value, _, this.img.width, x, this.img.height, 0, 0), q.drawImage(this.img, 0, 0)), q.restore())
							}, this.getBoundingBox = function() {
								var q = this.attribute("x").toPixels("x"),
									V = this.attribute("y").toPixels("y"),
									n = this.attribute("width").toPixels("x"),
									S = this.attribute("height").toPixels("y");
								return new w.BoundingBox(q, V, q + n, V + S)
							}
						}
					}, w.Element.image.prototype = new w.Element.RenderedElementBase, w.Element.g = function(q) {
						this.base = w.Element.RenderedElementBase, this.base(q), this.getBoundingBox = function() {
							for(var q = new w.BoundingBox, V = 0; V < this.children.length; V++) q.addBoundingBox(this.children[V].getBoundingBox());
							return q
						}
					}, w.Element.g.prototype = new w.Element.RenderedElementBase, w.Element.symbol = function(q) {
						this.base = w.Element.RenderedElementBase, this.base(q), this.render = function(q) {}
					}, w.Element.symbol.prototype = new w.Element.RenderedElementBase, w.Element.switch = function(q) {
						this.base = w.Element.RenderedElementBase, this.base(q)
					}, w.Element.switch.prototype = new w.Element.symbol, w.Element.style = function(q) {
						this.base = w.Element.ElementBase, this.base(q);
						for(var V = "", n = 0; n < q.childNodes.length; n++) V += q.childNodes[n].data;
						V = V.replace(/(\/\*([^*]|[\r\n]|(\*+([^*\/]|[\r\n])))*\*+\/)|(^[\s]*\/\/.*)/gm, ""), V = w.compressSpaces(V);
						for(var _ = V.split("}"), n = 0; n < _.length; n++)
							if("" != w.trim(_[n]))
								for(var x = _[n].split("{"), O = x[0].split(","), K = x[1].split(";"), g = 0; g < O.length; g++) {
									var A = w.trim(O[g]);
									if("" != A) {
										for(var l = w.Styles[A] || {}, Z = 0; Z < K.length; Z++) {
											var z = K[Z].indexOf(":"),
												H = K[Z].substr(0, z),
												i = K[Z].substr(z + 1, K[Z].length - z);
											null != H && null != i && (l[w.trim(H)] = new w.Property(w.trim(H), w.trim(i)))
										}
										if(w.Styles[A] = l, w.StylesSpecificity[A] = S(A), "@font-face" == A)
											for(var N = l["font-family"].value.replace(/"/g, ""), U = l.src.value.split(","), j = 0; j < U.length; j++)
												if(U[j].indexOf('format("svg")') > 0)
													for(var p = U[j].indexOf("url"), y = U[j].indexOf(")", p), X = U[j].substr(p + 5, y - p - 6), e = w.parseXml(w.ajax(X)), b = e.getElementsByTagName("font"), c = 0; c < b.length; c++) {
														var J = w.CreateElement(b[c]);
														w.Definitions[N] = J
													}
									}
								}
					}, w.Element.style.prototype = new w.Element.ElementBase, w.Element.use = function(q) {
						this.base = w.Element.RenderedElementBase, this.base(q), this.baseSetContext = this.setContext, this.setContext = function(q) {
							this.baseSetContext(q), this.attribute("x").hasValue() && q.translate(this.attribute("x").toPixels("x"), 0), this.attribute("y").hasValue() && q.translate(0, this.attribute("y").toPixels("y"))
						};
						var V = this.getHrefAttribute().getDefinition();
						this.path = function(q) {
							null != V && V.path(q)
						}, this.getBoundingBox = function() {
							if(null != V) return V.getBoundingBox()
						}, this.renderChildren = function(q) {
							if(null != V) {
								var n = V;
								"symbol" == V.type && (n = new w.Element.svg, n.type = "svg", n.attributes.viewBox = new w.Property("viewBox", V.attribute("viewBox").value), n.attributes.preserveAspectRatio = new w.Property("preserveAspectRatio", V.attribute("preserveAspectRatio").value), n.attributes.overflow = new w.Property("overflow", V.attribute("overflow").value), n.children = V.children), "svg" == n.type && (this.attribute("width").hasValue() && (n.attributes.width = new w.Property("width", this.attribute("width").value)), this.attribute("height").hasValue() && (n.attributes.height = new w.Property("height", this.attribute("height").value)));
								var S = n.parent;
								n.parent = null, n.render(q), n.parent = S
							}
						}
					}, w.Element.use.prototype = new w.Element.RenderedElementBase, w.Element.mask = function(q) {
						this.base = w.Element.ElementBase, this.base(q), this.apply = function(q, V) {
							var n = this.attribute("x").toPixels("x"),
								S = this.attribute("y").toPixels("y"),
								_ = this.attribute("width").toPixels("x"),
								x = this.attribute("height").toPixels("y");
							if(0 == _ && 0 == x) {
								for(var O = new w.BoundingBox, K = 0; K < this.children.length; K++) this.children[K].getBoundingBox && O.addBoundingBox(this.children[K].getBoundingBox());
								var n = Math.floor(O.x1),
									S = Math.floor(O.y1),
									_ = Math.floor(O.width()),
									x = Math.floor(O.height())
							}
							if(_ && x) {
								var g = V.style("mask").value;
								V.style("mask").value = "";
								var A = document.createElement("canvas");
								A.width = n + _, A.height = S + x;
								var l = A.getContext("2d");
								if(this.renderChildren(l), A.width && A.height) {
									var Z = document.createElement("canvas");
									Z.width = n + _, Z.height = S + x;
									var z = Z.getContext("2d");
									V.render(z), z.globalCompositeOperation = "destination-in", z.fillStyle = l.createPattern(A, "no-repeat"), z.fillRect(0, 0, n + _, S + x), q.fillStyle = z.createPattern(Z, "no-repeat"), q.fillRect(0, 0, n + _, S + x), V.style("mask").value = g
								}
							}
						}, this.render = function(q) {}
					}, w.Element.mask.prototype = new w.Element.ElementBase, w.Element.clipPath = function(q) {
						this.base = w.Element.ElementBase, this.base(q), this.apply = function(q) {
							var V = q.beginPath;
							q.beginPath = function() {};
							var n = q.closePath;
							q.closePath = function() {};
							var S;
							this.style("transform", !1, !0).hasValue() && (S = new w.Transform(this.style("transform", !1, !0).value), S.apply(q)), V.call(q);
							for(var _ = 0; _ < this.children.length; _++) {
								var x = this.children[_];
								if("undefined" != typeof x.path) {
									var O = null;
									x.style("transform", !1, !0).hasValue() && (O = new w.Transform(x.style("transform", !1, !0).value), O.apply(q)), x.path(q), q.closePath = n, O && O.unapply(q)
								}
							}
							n.call(q), q.clip(), S && S.unapply(q), q.beginPath = V, q.closePath = n
						}, this.render = function(q) {}
					}, w.Element.clipPath.prototype = new w.Element.ElementBase, w.Element.filter = function(q) {
						this.base = w.Element.ElementBase, this.base(q), this.apply = function(q, V) {
							return
						}, this.render = function(q) {}
					}, w.Element.filter.prototype = new w.Element.ElementBase, w.Element.feMorphology = function(q) {
						this.base = w.Element.ElementBase, this.base(q), this.apply = function(q, V, n, S, _) {}
					}, w.Element.feMorphology.prototype = new w.Element.ElementBase, w.Element.feComposite = function(q) {
						this.base = w.Element.ElementBase, this.base(q), this.apply = function(q, V, n, S, _) {}
					}, w.Element.feComposite.prototype = new w.Element.ElementBase, w.Element.feColorMatrix = function(q) {
						function V(q, V, n, S, _, x) {
							return q[n * S * 4 + 4 * V + x]
						}

						function n(q, V, n, S, _, x, O) {
							q[n * S * 4 + 4 * V + x] = O
						}

						function S(q, V) {
							var n = _[q];
							return n * (n < 0 ? V - 255 : V)
						}
						this.base = w.Element.ElementBase, this.base(q);
						var _ = w.ToNumberArray(this.attribute("values").value);
						switch(this.attribute("type").valueOrDefault("matrix")) {
							case "saturate":
								var x = _[0];
								_ = [.213 + .787 * x, .715 - .715 * x, .072 - .072 * x, 0, 0, .213 - .213 * x, .715 + .285 * x, .072 - .072 * x, 0, 0, .213 - .213 * x, .715 - .715 * x, .072 + .928 * x, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1];
								break;
							case "hueRotate":
								var O = _[0] * Math.PI / 180,
									K = function(q, V, n) {
										return q + Math.cos(O) * V + Math.sin(O) * n
									};
								_ = [K(.213, .787, -.213), K(.715, -.715, -.715), K(.072, -.072, .928), 0, 0, K(.213, -.213, .143), K(.715, .285, .14), K(.072, -.072, -.283), 0, 0, K(.213, -.213, -.787), K(.715, -.715, .715), K(.072, .928, .072), 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1];
								break;
							case "luminanceToAlpha":
								_ = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, .2125, .7154, .0721, 0, 0, 0, 0, 0, 0, 1]
						}
						this.apply = function(q, _, x, O, w) {
							if(O && w) {
								for(var K = q.getImageData(0, 0, O, w), x = 0; x < w; x++)
									for(var _ = 0; _ < O; _++) {
										var g = V(K.data, _, x, O, w, 0),
											A = V(K.data, _, x, O, w, 1),
											l = V(K.data, _, x, O, w, 2),
											Z = V(K.data, _, x, O, w, 3);
										n(K.data, _, x, O, w, 0, S(0, g) + S(1, A) + S(2, l) + S(3, Z) + S(4, 1)), n(K.data, _, x, O, w, 1, S(5, g) + S(6, A) + S(7, l) + S(8, Z) + S(9, 1)), n(K.data, _, x, O, w, 2, S(10, g) + S(11, A) + S(12, l) + S(13, Z) + S(14, 1)), n(K.data, _, x, O, w, 3, S(15, g) + S(16, A) + S(17, l) + S(18, Z) + S(19, 1))
									}
								q.clearRect(0, 0, O, w), q.putImageData(K, 0, 0)
							}
						}
					}, w.Element.feColorMatrix.prototype = new w.Element.ElementBase, w.Element.feGaussianBlur = function(q) {
						this.base = w.Element.ElementBase, this.base(q), this.blurRadius = Math.floor(this.attribute("stdDeviation").numValue()), this.extraFilterDistance = this.blurRadius, this.apply = function(q, V, S, _, x) {
							return "undefined" == typeof n.canvasRGBA ? void w.log("ERROR: StackBlur.js must be included for blur to work") : (q.canvas.id = w.UniqueId(), q.canvas.style.display = "none", document.body.appendChild(q.canvas), n.canvasRGBA(q.canvas.id, V, S, _, x, this.blurRadius), void document.body.removeChild(q.canvas))
						}
					}, w.Element.feGaussianBlur.prototype = new w.Element.ElementBase, w.Element.title = function(q) {}, w.Element.title.prototype = new w.Element.ElementBase, w.Element.desc = function(q) {}, w.Element.desc.prototype = new w.Element.ElementBase, w.Element.MISSING = function(q) {
						w.log("ERROR: Element '" + q.nodeName + "' not yet implemented.")
					}, w.Element.MISSING.prototype = new w.Element.ElementBase, w.CreateElement = function(q) {
						var V = q.nodeName.replace(/^[^:]+:/, "");
						V = V.replace(/\-/g, "");
						var n = null;
						return n = "undefined" != typeof w.Element[V] ? new w.Element[V](q) : new w.Element.MISSING(q), n.type = q.nodeName, n
					}, w.load = function(q, V) {
						w.loadXml(q, w.ajax(V))
					}, w.loadXml = function(q, V) {
						w.loadXmlDoc(q, w.parseXml(V))
					}, w.loadXmlDoc = function(V, n) {
						w.init(V);
						var S = function(n) {
							for(var S = V.canvas; S;) n.x -= S.offsetLeft, n.y -= S.offsetTop, S = S.offsetParent;
							return q.scrollX && (n.x += q.scrollX), q.scrollY && (n.y += q.scrollY), n
						};
						1 != w.opts.ignoreMouse && (V.canvas.onclick = function(q) {
							var V = S(new w.Point(null != q ? q.clientX : event.clientX, null != q ? q.clientY : event.clientY));
							w.Mouse.onclick(V.x, V.y)
						}, V.canvas.onmousemove = function(q) {
							var V = S(new w.Point(null != q ? q.clientX : event.clientX, null != q ? q.clientY : event.clientY));
							w.Mouse.onmousemove(V.x, V.y)
						});
						var _ = w.CreateElement(n.documentElement);
						_.root = !0, _.addStylesFromStyleDefinition();
						var x = !0,
							O = function() {
								w.ViewPort.Clear(), V.canvas.parentNode && w.ViewPort.SetCurrent(V.canvas.parentNode.clientWidth, V.canvas.parentNode.clientHeight), 1 != w.opts.ignoreDimensions && (_.style("width").hasValue() && (V.canvas.width = _.style("width").toPixels("x"), V.canvas.style.width = V.canvas.width + "px"), _.style("height").hasValue() && (V.canvas.height = _.style("height").toPixels("y"), V.canvas.style.height = V.canvas.height + "px"));
								var q = V.canvas.clientWidth || V.canvas.width,
									S = V.canvas.clientHeight || V.canvas.height;
								if(1 == w.opts.ignoreDimensions && _.style("width").hasValue() && _.style("height").hasValue() && (q = _.style("width").toPixels("x"), S = _.style("height").toPixels("y")), w.ViewPort.SetCurrent(q, S), null != w.opts.offsetX && (_.attribute("x", !0).value = w.opts.offsetX), null != w.opts.offsetY && (_.attribute("y", !0).value = w.opts.offsetY), null != w.opts.scaleWidth || null != w.opts.scaleHeight) {
									var O = null,
										K = null,
										g = w.ToNumberArray(_.attribute("viewBox").value);
									null != w.opts.scaleWidth && (_.attribute("width").hasValue() ? O = _.attribute("width").toPixels("x") / w.opts.scaleWidth : isNaN(g[2]) || (O = g[2] / w.opts.scaleWidth)), null != w.opts.scaleHeight && (_.attribute("height").hasValue() ? K = _.attribute("height").toPixels("y") / w.opts.scaleHeight : isNaN(g[3]) || (K = g[3] / w.opts.scaleHeight)), null == O && (O = K), null == K && (K = O), _.attribute("width", !0).value = w.opts.scaleWidth, _.attribute("height", !0).value = w.opts.scaleHeight, _.style("transform", !0, !0).value += " scale(" + 1 / O + "," + 1 / K + ")"
								}
								1 != w.opts.ignoreClear && V.clearRect(0, 0, q, S), _.render(V), x && (x = !1, "function" == typeof w.opts.renderCallback && w.opts.renderCallback(n))
							},
							K = !0;
						w.ImagesLoaded() && (K = !1, O()), w.intervalID = setInterval(function() {
							var q = !1;
							if(K && w.ImagesLoaded() && (K = !1, q = !0), 1 != w.opts.ignoreMouse && (q |= w.Mouse.hasEvents()), 1 != w.opts.ignoreAnimation)
								for(var V = 0; V < w.Animations.length; V++) q |= w.Animations[V].update(1e3 / w.FRAMERATE);
							"function" == typeof w.opts.forceRedraw && 1 == w.opts.forceRedraw() && (q = !0), q && (O(), w.Mouse.runEvents())
						}, 1e3 / w.FRAMERATE)
					}, w.stop = function() {
						w.intervalID && clearInterval(w.intervalID)
					}, w.Mouse = new function() {
						this.events = [], this.hasEvents = function() {
							return 0 != this.events.length
						}, this.onclick = function(q, V) {
							this.events.push({
								type: "onclick",
								x: q,
								y: V,
								run: function(q) {
									q.onclick && q.onclick()
								}
							})
						}, this.onmousemove = function(q, V) {
							this.events.push({
								type: "onmousemove",
								x: q,
								y: V,
								run: function(q) {
									q.onmousemove && q.onmousemove()
								}
							})
						}, this.eventElements = [], this.checkPath = function(q, V) {
							for(var n = 0; n < this.events.length; n++) {
								var S = this.events[n];
								V.isPointInPath && V.isPointInPath(S.x, S.y) && (this.eventElements[n] = q)
							}
						}, this.checkBoundingBox = function(q, V) {
							for(var n = 0; n < this.events.length; n++) {
								var S = this.events[n];
								V.isPointInBox(S.x, S.y) && (this.eventElements[n] = q)
							}
						}, this.runEvents = function() {
							w.ctx.canvas.style.cursor = "";
							for(var q = 0; q < this.events.length; q++)
								for(var V = this.events[q], n = this.eventElements[q]; n;) V.run(n), n = n.parent;
							this.events = [], this.eventElements = []
						}
					}, w
				}
				var O, w = function(q, V, n) {
					if(null != q || null != V || null != n) {
						"string" == typeof q && (q = document.getElementById(q)), null != q.svg && q.svg.stop();
						var S = x(n || {});
						1 == q.childNodes.length && "OBJECT" == q.childNodes[0].nodeName || (q.svg = S);
						var _ = q.getContext("2d");
						"undefined" != typeof V.documentElement ? S.loadXmlDoc(_, V) : "<" == V.substr(0, 1) ? S.loadXml(_, V) : S.load(_, V)
					} else
						for(var O = document.querySelectorAll("svg"), K = 0; K < O.length; K++) {
							var g = O[K],
								A = document.createElement("canvas");
							A.width = g.clientWidth, A.height = g.clientHeight, g.parentNode.insertBefore(A, g), g.parentNode.removeChild(g);
							var l = document.createElement("div");
							l.appendChild(g), w(A, l.innerHTML)
						}
				};
				"undefined" != typeof Element.prototype.matches ? O = function(q, V) {
					return q.matches(V)
				} : "undefined" != typeof Element.prototype.webkitMatchesSelector ? O = function(q, V) {
					return q.webkitMatchesSelector(V)
				} : "undefined" != typeof Element.prototype.mozMatchesSelector ? O = function(q, V) {
					return q.mozMatchesSelector(V)
				} : "undefined" != typeof Element.prototype.msMatchesSelector ? O = function(q, V) {
					return q.msMatchesSelector(V)
				} : "undefined" != typeof Element.prototype.oMatchesSelector ? O = function(q, V) {
					return q.oMatchesSelector(V)
				} : ("function" != typeof jQuery && "function" != typeof Zepto || (O = function(q, V) {
					return $(q).is(V)
				}), "undefined" == typeof O && (O = Sizzle.matchesSelector));
				var K = /(\[[^\]]+\])/g,
					g = /(#[^\s\+>~\.\[:]+)/g,
					A = /(\.[^\s\+>~\.\[:]+)/g,
					l = /(::[^\s\+>~\.\[:]+|:first-line|:first-letter|:before|:after)/gi,
					Z = /(:[\w-]+\([^\)]*\))/gi,
					z = /(:[^\s\+>~\.\[:]+)/g,
					H = /([^\s\+>~\.\[:]+)/g;
				return "undefined" != typeof CanvasRenderingContext2D && (CanvasRenderingContext2D.prototype.drawSvg = function(q, V, n, S, _, x) {
					var O = {
						ignoreMouse: !0,
						ignoreAnimation: !0,
						ignoreDimensions: !0,
						ignoreClear: !0,
						offsetX: V,
						offsetY: n,
						scaleWidth: S,
						scaleHeight: _
					};
					for(var K in x) x.hasOwnProperty(K) && (O[K] = x[K]);
					w(this.canvas, q, O)
				}), w
			})
	}("undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : (0, eval)("this"), Object),
	function(q, V, n) {
		var S = "ht",
			_ = q[S],
			x = _.Default,
			O = x.getInternal();
		O.addMethod(x, {
				cadToShape: function(q, V) {
					var n = new _.DxfViewer(V);
					return n.toShape(q)
				},
				shapeToCad: function(q, V, n) {
					var S = new _.DxfWriter(n);
					return S.toDxf(q, V)
				}
			}),
			function(V) {
				if("object" == typeof exports && "undefined" != typeof module) module.exports = V();
				else if("function" == typeof define && define.amd) define([], V);
				else {
					var n;
					n = "undefined" != typeof q ? q : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, n.DxfParser = V()
				}
			}(function() {
				var S;
				return function q(V, n, S) {
					function _(O, w) {
						if(!n[O]) {
							if(!V[O]) {
								var K = "function" == typeof require && require;
								if(!w && K) return K(O, !0);
								if(x) return x(O, !0);
								var g = new Error("Cannot find module '" + O + "'");
								throw g.code = "MODULE_NOT_FOUND", g
							}
							var A = n[O] = {
								exports: {}
							};
							V[O][0].call(A.exports, function(q) {
								var n = V[O][1][q];
								return _(n ? n : q)
							}, A, A.exports, q, V, n, S)
						}
						return n[O].exports
					}
					for(var x = "function" == typeof require && require, O = 0; O < S.length; O++) _(S[O]);
					return _
				}({
					1: [function(q, V, n) {
						V.exports = [0, 16711680, 16776960, 65280, 65535, 255, 16711935, 16777215, 8421504, 12632256, 16711680, 16744319, 13369344, 13395558, 10027008, 10046540, 8323072, 8339263, 4980736, 4990502, 16727808, 16752511, 13382400, 13401958, 10036736, 10051404, 8331008, 8343359, 4985600, 4992806, 16744192, 16760703, 13395456, 13408614, 10046464, 10056268, 8339200, 8347455, 4990464, 4995366, 16760576, 16768895, 13408512, 13415014, 10056192, 10061132, 8347392, 8351551, 4995328, 4997670, 16776960, 16777087, 13421568, 13421670, 10000384, 10000460, 8355584, 8355647, 5000192, 5000230, 12582656, 14679935, 10079232, 11717734, 7510016, 8755276, 6258432, 7307071, 3755008, 4344870, 8388352, 12582783, 6736896, 10079334, 5019648, 7510092, 4161280, 6258495, 2509824, 3755046, 4194048, 10485631, 3394560, 8375398, 2529280, 6264908, 2064128, 5209919, 1264640, 3099686, 65280, 8388479, 52224, 6736998, 38912, 5019724, 32512, 4161343, 19456, 2509862, 65343, 8388511, 52275, 6737023, 38950, 5019743, 32543, 4161359, 19475, 2509871, 65407, 8388543, 52326, 6737049, 38988, 5019762, 32575, 4161375, 19494, 2509881, 65471, 8388575, 52377, 6737074, 39026, 5019781, 32607, 4161391, 19513, 2509890, 65535, 8388607, 52428, 6737100, 39064, 5019800, 32639, 4161407, 19532, 2509900, 49151, 8380415, 39372, 6730444, 29336, 5014936, 24447, 4157311, 14668, 2507340, 32767, 8372223, 26316, 6724044, 19608, 5010072, 16255, 4153215, 9804, 2505036, 16383, 8364031, 13260, 6717388, 9880, 5005208, 8063, 4149119, 4940, 2502476, 255, 8355839, 204, 6710988, 152, 5000344, 127, 4145023, 76, 2500172, 4129023, 10452991, 3342540, 8349388, 2490520, 6245528, 2031743, 5193599, 1245260, 3089996, 8323327, 12550143, 6684876, 10053324, 4980888, 7490712, 4128895, 6242175, 2490444, 3745356, 12517631, 14647295, 10027212, 11691724, 7471256, 8735896, 6226047, 7290751, 3735628, 4335180, 16711935, 16744447, 13369548, 13395660, 9961624, 9981080, 8323199, 8339327, 4980812, 4990540, 16711871, 16744415, 13369497, 13395634, 9961586, 9981061, 8323167, 8339311, 4980793, 4990530, 16711807, 16744383, 13369446, 13395609, 9961548, 9981042, 8323135, 8339295, 4980774, 4990521, 16711743, 16744351, 13369395, 13395583, 9961510, 9981023, 8323103, 8339279, 4980755, 4990511, 3355443, 5987163, 8684676, 11382189, 14079702, 16777215]
					}, {}],
					2: [function(q, V, n) {
						function S(q) {
							this._pointer = 0, this._data = q, this._eof = !1
						}

						function _(q, V) {
							return q <= 9 ? V : q >= 10 && q <= 59 ? parseFloat(V) : q >= 60 && q <= 99 ? parseInt(V) : q >= 100 && q <= 109 ? V : q >= 110 && q <= 149 ? parseFloat(V) : q >= 160 && q <= 179 ? parseInt(V) : q >= 210 && q <= 239 ? parseFloat(V) : q >= 270 && q <= 289 ? parseInt(V) : q >= 290 && q <= 299 ? x(V) : q >= 300 && q <= 369 ? V : q >= 370 && q <= 389 ? parseInt(V) : q >= 390 && q <= 399 ? V : q >= 400 && q <= 409 ? parseInt(V) : q >= 410 && q <= 419 ? V : q >= 420 && q <= 429 ? parseInt(V) : q >= 430 && q <= 439 ? V : q >= 440 && q <= 459 ? parseInt(V) : q >= 460 && q <= 469 ? parseFloat(V) : q >= 470 && q <= 481 ? V : 999 === q ? V : q >= 1e3 && q <= 1009 ? V : q >= 1010 && q <= 1059 ? parseFloat(V) : q >= 1060 && q <= 1071 ? parseInt(V) : (console.log("WARNING: Group code does not have a defined type: %j", {
								code: q,
								value: V
							}), V)
						}

						function x(q) {
							if("0" === q) return !1;
							if("1" === q) return !0;
							throw TypeError("String '" + q + "' cannot be cast to Boolean type")
						}
						S.prototype.next = function() {
							var q;
							if(!this.hasNext()) throw this._eof ? new Error("Cannot call 'next' after EOF group has been read") : new Error("Unexpected end of input: EOF group not read before end of file. Ended on code " + this._data[this._pointer]);
							return q = {
								code: parseInt(this._data[this._pointer])
							}, this._pointer++, q.value = _(q.code, this._data[this._pointer].trim()), this._pointer++, 0 === q.code && "EOF" === q.value && (this._eof = !0), q
						}, S.prototype.hasNext = function() {
							return !this._eof && !(this._pointer > this._data.length - 2)
						}, S.prototype.isEOF = function() {
							return this._eof
						}, V.exports = S
					}, {}],
					3: [function(q, S, _) {
						function x(q) {
							q && q.sanitize !== n && (this.sanitize = q.sanitize)
						}

						function O(q) {
							l.debug("unhandled group " + w(q))
						}

						function w(q) {
							return q.code + ":" + q.value
						}

						function K(q) {
							return A[q]
						}
						var g = q("./DxfArrayScanner.js"),
							A = q("./AutoCadColorIndex"),
							l = q("loglevel");
						l.setLevel("error"), x.prototype.parse = function(q, V) {
							throw new Error("read() not implemented. Use readSync()")
						}, x.prototype.parseSync = function(q) {
							return "string" == typeof q ? this._parse(q) : (console.error("Cannot read dxf source of type `" + typeof q), null)
						}, x.prototype.parseStream = function(q, V) {
							function n(q) {
								x += q
							}

							function S() {
								try {
									var q = O._parse(x)
								} catch(q) {
									return V(q)
								}
								V(null, q)
							}

							function _(q) {
								V(q)
							}
							var x = "",
								O = this;
							q.on("data", n), q.on("end", S), q.on("error", _)
						}, x.prototype.sanitizeFileName = function() {
							var q = /[\/\?<>\\:\*\|":]/g,
								V = /[\x00-\x1f\x80-\x9f]/g,
								n = /^\.+$/,
								S = /^(con|prn|aux|nul|com[0-9]|lpt[0-9])(\..*)?$/i,
								_ = /[\. ]+$/;
							return function(x) {
								var O = this.sanitize;
								return null == O ? x : x.replace(q, O).replace(V, O).replace(n, O).replace(S, O).replace(_, O)
							}
						}(), x.prototype._parse = function(q) {
							var S, _, x = this,
								A = {},
								Z = 0,
								z = q.split(/\r\n|\r|\n/g);
							if(S = new g(z), !S.hasNext()) throw Error("Empty file");
							var H = function() {
									for(_ = S.next(); !S.isEOF();)
										if(0 === _.code && "SECTION" === _.value) {
											if(_ = S.next(), 2 !== _.code) {
												console.error("Unexpected code %s after 0:SECTION", w(_)), _ = S.next();
												continue
											}
											"HEADER" === _.value ? (l.debug("> HEADER"), A.header = N(), l.debug("<")) : "BLOCKS" === _.value ? (l.debug("> BLOCKS"), A.blocks = U(), l.debug("<")) : "ENTITIES" === _.value ? (l.debug("> ENTITIES"), A.entities = C(!1), l.debug("<")) : "TABLES" === _.value ? (l.debug("> TABLES"), A.tables = p(), l.debug("<")) : "EOF" === _.value ? l.debug("EOF") : l.warn("Skipping section '%s'", _.value)
										} else _ = S.next()
								},
								i = function(q, V) {
									return _.code === q && _.value === V
								},
								N = function() {
									var q = null,
										V = null,
										n = {};
									for(_ = S.next();;) {
										if(i(0, "ENDSEC")) {
											q && (n[q] = V);
											break
										}
										9 === _.code ? (q && (n[q] = V), q = _.value) : 10 === _.code ? V = {
											x: _.value
										} : 20 === _.code ? V.y = _.value : 30 === _.code ? V.z = _.value : V = _.value, _ = S.next()
									}
									return _ = S.next(), n
								},
								U = function() {
									var q, V = {};
									for(_ = S.next();
										"EOF" !== _.value && !i(0, "ENDSEC");) i(0, "BLOCK") ? (l.debug("block {"), q = j(), l.debug("}"), B(q), q.name ? V[q.name] = q : l.error('block with handle "' + q.handle + '" is missing a name.')) : (O(_), _ = S.next());
									return V
								},
								j = function() {
									var q = {};
									for(_ = S.next();
										"EOF" !== _.value;) {
										switch(_.code) {
											case 1:
												q.xrefPath = _.value, _ = S.next();
												break;
											case 2:
												q.name = x.sanitizeFileName(_.value), _ = S.next();
												break;
											case 3:
												q.name2 = x.sanitizeFileName(_.value), _ = S.next();
												break;
											case 5:
												q.handle = _.value, _ = S.next();
												break;
											case 8:
												q.layer = _.value, _ = S.next();
												break;
											case 10:
												q.position = W();
												break;
											case 67:
												q.paperSpace = !(!_.value || 1 != _.value), _ = S.next();
												break;
											case 70:
												0 != _.value && (q.type = _.value), _ = S.next();
												break;
											case 100:
												_ = S.next();
												break;
											case 330:
												q.ownerHandle = _.value, _ = S.next();
												break;
											case 0:
												if("ENDBLK" == _.value) break;
												S._pointer -= 2, q.entities = C(!0);
												break;
											default:
												O(_), _ = S.next()
										}
										if(i(0, "ENDBLK")) {
											_ = S.next();
											break
										}
									}
									return q
								},
								p = function() {
									var q = {};
									for(_ = S.next();
										"EOF" !== _.value && !i(0, "ENDSEC");)
										if(i(0, "TABLE")) {
											_ = S.next();
											var V = J[_.value];
											V ? (l.debug(_.value + " Table {"), q[J[_.value].tableName] = X(), l.debug("}")) : l.debug("Unhandled Table " + _.value)
										} else _ = S.next();
									return _ = S.next(), q
								},
								y = "ENDTAB",
								X = function() {
									var q, n = J[_.value],
										x = {},
										w = 0;
									for(_ = S.next(); !i(0, y);) switch(_.code) {
										case 5:
											x.handle = _.value, _ = S.next();
											break;
										case 330:
											x.ownerHandle = _.value, _ = S.next();
											break;
										case 100:
											"AcDbSymbolTable" === _.value ? _ = S.next() : (O(_), _ = S.next());
											break;
										case 70:
											w = _.value, _ = S.next();
											break;
										case 0:
											_.value === n.dxfSymbolName ? x[n.tableRecordsProperty] = n.parseTableRecords() : (O(_), _ = S.next());
											break;
										default:
											O(_), _ = S.next()
									}
									var K = x[n.tableRecordsProperty];
									return K && (K.constructor === Array ? q = K.length : "object" == typeof K && (q = V.keys(K).length), w !== q && l.warn("Parsed " + q + " " + n.dxfSymbolName + "'s but expected " + w)), _ = S.next(), x
								},
								e = function() {
									var q = [],
										V = {};
									for(l.debug("ViewPort {"), _ = S.next(); !i(0, y);) switch(_.code) {
										case 2:
											V.name = _.value, _ = S.next();
											break;
										case 10:
											V.lowerLeftCorner = W();
											break;
										case 11:
											V.upperRightCorner = W();
											break;
										case 12:
											V.center = W();
											break;
										case 13:
											V.snapBasePoint = W();
											break;
										case 14:
											V.snapSpacing = W();
											break;
										case 15:
											V.gridSpacing = W();
											break;
										case 16:
											V.viewDirectionFromTarget = W();
											break;
										case 17:
											V.viewTarget = W();
											break;
										case 40:
											V.viewHeight = _.value, V.aspectRatio !== n && (V.viewWidth = _.value * V.aspectRatio), _ = S.next();
											break;
										case 41:
											V.aspectRatio = _.value, V.viewHeight !== n && (V.viewWidth = _.value * V.viewHeight), _ = S.next();
											break;
										case 42:
											V.lensLength = _.value, _ = S.next();
											break;
										case 43:
											V.frontClippingPlane = _.value, _ = S.next();
											break;
										case 44:
											V.backClippingPlane = _.value, _ = S.next();
											break;
										case 45:
											V.viewHeight = _.value, _ = S.next();
											break;
										case 50:
											V.snapRotationAngle = _.value, _ = S.next();
											break;
										case 51:
											V.viewTwistAngle = _.value, _ = S.next();
											break;
										case 79:
											V.orthographicType = _.value, _ = S.next();
											break;
										case 110:
											V.ucsOrigin = W();
											break;
										case 111:
											V.ucsXAxis = W();
											break;
										case 112:
											V.ucsYAxis = W();
											break;
										case 110:
											V.ucsOrigin = W();
											break;
										case 281:
											V.renderMode = _.value, _ = S.next();
											break;
										case 281:
											V.defaultLightingType = _.value, _ = S.next();
											break;
										case 292:
											V.defaultLightingOn = _.value, _ = S.next();
											break;
										case 330:
											V.ownerHandle = _.value, _ = S.next();
											break;
										case 63:
										case 421:
										case 431:
											V.ambientColor = _.value, _ = S.next();
											break;
										case 0:
											"VPORT" === _.value && (l.debug("}"), q.push(V), l.debug("ViewPort {"), V = {}, _ = S.next());
											break;
										default:
											O(_), _ = S.next()
									}
									return l.debug("}"), q.push(V), q
								},
								b = function() {
									var q, V, n = {},
										x = {};
									for(l.debug("LType {"), _ = S.next(); !i(0, "ENDTAB");) switch(_.code) {
										case 2:
											x.name = _.value, q = _.value, _ = S.next();
											break;
										case 3:
											x.description = _.value, _ = S.next();
											break;
										case 73:
											V = _.value, V > 0 && (x.pattern = []), _ = S.next();
											break;
										case 40:
											x.patternLength = _.value, _ = S.next();
											break;
										case 49:
											x.pattern.push(_.value), _ = S.next();
											break;
										case 0:
											l.debug("}"), V > 0 && V !== x.pattern.length && l.warn("lengths do not match on LTYPE pattern"), n[q] = x, x = {}, l.debug("LType {"), _ = S.next();
											break;
										default:
											_ = S.next()
									}
									return l.debug("}"), n[q] = x, n
								},
								c = function() {
									var q, V = {},
										x = {};
									for(l.debug("Layer {"), _ = S.next(); !i(0, "ENDTAB");) switch(_.code) {
										case 2:
											x.name = _.value, q = _.value, _ = S.next();
											break;
										case 62:
											x.visible = _.value >= 0, x.color = K(Math.abs(_.value)), _ = S.next();
											break;
										case 6:
											x.lineType = _.value, _ = S.next();
											break;
										case 0:
											"LAYER" === _.value && (l.debug("}"), V[q] = x, l.debug("Layer {"), x = {}, q = n, _ = S.next());
											break;
										default:
											O(_), _ = S.next()
									}
									return l.debug("}"), V[q] = x, V
								},
								J = {
									VPORT: {
										tableRecordsProperty: "viewPorts",
										tableName: "viewPort",
										dxfSymbolName: "VPORT",
										parseTableRecords: e
									},
									LTYPE: {
										tableRecordsProperty: "lineTypes",
										tableName: "lineType",
										dxfSymbolName: "LTYPE",
										parseTableRecords: b
									},
									LAYER: {
										tableRecordsProperty: "layers",
										tableName: "layer",
										dxfSymbolName: "LAYER",
										parseTableRecords: c
									}
								},
								C = function(q) {
									var V = [],
										n = q ? "ENDBLK" : "ENDSEC";
									for(_ = S.next();;)
										if(0 === _.code) {
											if(_.value === n) break;
											var x;
											if("LWPOLYLINE" === _.value) l.debug("LWPOLYLINE {"), x = L(), l.debug("}");
											else if("POLYLINE" === _.value) l.debug("POLYLINE {"), x = Q(), l.debug("}");
											else if("LINE" === _.value) l.debug("LINE {"), x = F(), l.debug("}");
											else if("CIRCLE" === _.value) l.debug("CIRCLE {"), x = a(), l.debug("}");
											else if("ARC" === _.value) l.debug("ARC {"), x = a(), l.debug("}");
											else if("ELLIPSE" === _.value) l.debug("ELLIPSE {"), x = h(), l.debug("}");
											else if("SPLINE" === _.value) l.debug("SPLINE {"), x = s(), l.debug("}");
											else if("TEXT" === _.value) l.debug("TEXT {"), x = m(), l.debug("}");
											else if("DIMENSION" === _.value) l.debug("DIMENSION {"), x = D(), l.debug("}");
											else if("INSERT" === _.value) l.debug("INSERT {"), x = $(), l.debug("}");
											else if("HATCH" === _.value) l.debug("HATCH {"), x = t(), l.debug("}");
											else if("SOLID" === _.value) l.debug("SOLID {"), x = T(), l.debug("}");
											else if("POINT" === _.value) l.debug("POINT {"), x = f(), l.debug("}");
											else if("MTEXT" === _.value) l.debug("MTEXT {"), x = Y(), l.debug("}");
											else {
												if("ATTDEF" !== _.value) {
													l.warn("Unhandled entity " + _.value), _ = S.next();
													continue
												}
												l.debug("ATTDEF {"), x = M(), l.debug("}")
											}
											B(x), V.push(x)
										} else _ = S.next();
									return "ENDSEC" == n && (_ = S.next()), V
								},
								G = function(q) {
									switch(_.code) {
										case 0:
											q.type = _.value, _ = S.next();
											break;
										case 5:
											q.handle = _.value, _ = S.next();
											break;
										case 6:
											q.lineType = _.value, _ = S.next();
											break;
										case 8:
											q.layer = _.value, _ = S.next();
											break;
										case 48:
											q.lineTypeScale = _.value, _ = S.next();
											break;
										case 60:
											q.visible = 0 === _.value, _ = S.next();
											break;
										case 62:
											q.colorIndex = _.value, q.color = K(Math.abs(_.value)), _ = S.next();
											break;
										case 67:
											q.inPaperSpace = 0 !== _.value, _ = S.next();
											break;
										case 210:
											q.extrusionDirection = W();
											break;
										case 230:
											q.extrusionDirection = {
												x: 0,
												y: 0,
												z: _.value
											}, _ = S.next();
											break;
										case 330:
											q.ownerHandle = _.value, _ = S.next();
											break;
										case 347:
											q.materialObjectHandle = _.value, _ = S.next();
											break;
										case 370:
											q.lineweight = _.value, _ = S.next();
											break;
										case 420:
											q.color = _.value, _ = S.next();
											break;
										case 100:
											if("AcDbEntity" == _.value) {
												_ = S.next();
												break
											}
										default:
											O(_), _ = S.next()
									}
								},
								v = function() {
									var q = {
										type: _.value
									};
									for(_ = S.next();
										"EOF" !== _ && 0 !== _.code;) switch(_.code) {
										case 10:
											q.x = _.value, _ = S.next();
											break;
										case 20:
											q.y = _.value, _ = S.next();
											break;
										case 30:
											q.z = _.value, _ = S.next();
											break;
										case 40:
										case 41:
										case 42:
											_ = S.next();
											break;
										case 70:
											q.curveFittingVertex = 0 !== (1 | _.value), q.curveFitTangent = 0 !== (2 | _.value), q.splineVertex = 0 !== (8 | _.value), q.splineControlPoint = 0 !== (16 | _.value), q.ThreeDPolylineVertex = 0 !== (32 | _.value), q.ThreeDPolylineMesh = 0 !== (64 | _.value), q.polyfaceMeshVertex = 0 !== (128 | _.value), _ = S.next();
											break;
										case 50:
										case 71:
										case 72:
										case 73:
										case 74:
											_ = S.next();
											break;
										default:
											G(q)
									}
									return q
								},
								u = function() {
									var q = {
										type: _.value
									};
									for(_ = S.next();
										"EOF" != _ && 0 != _.code;) G(q);
									return q
								},
								W = function() {
									var q = {},
										V = _.code;
									if(q.x = _.value, V += 10, _ = S.next(), _.code != V) throw new Error("Expected code for point value to be " + V + " but got " + _.code + ".");
									return q.y = _.value, V += 10, _ = S.next(), _.code != V ? q : (q.z = _.value, _ = S.next(), q)
								},
								d = function() {
									var q = {},
										V = _.code;
									return q.x = _.value, V += 1, _ = S.next(), _.code != V ? (S._pointer -= 2, q.y = 1) : q.y = _.value, V += 1, _ = S.next(), _.code != V ? (S._pointer -= 2, q.z = 1) : q.z = _.value, _ = S.next(), q
								},
								P = function(q) {
									if(!q || q <= 0) throw Error("n must be greater than 0 verticies");
									var V, n = [],
										x = !1,
										O = !1;
									for(V = 0; V < q; V++) {
										for(var w = {};
											"EOF" !== _ && 0 !== _.code && !O;) {
											switch(_.code) {
												case 10:
													if(x) {
														O = !0;
														continue
													}
													w.x = _.value, x = !0;
													break;
												case 20:
													w.y = _.value;
													break;
												case 30:
													w.z = _.value;
													break;
												case 40:
													w.startWidth = _.value;
													break;
												case 41:
													w.endWidth = _.value;
													break;
												case 42:
													0 != _.value && (w.bulge = _.value);
													break;
												default:
													if(x) {
														O = !0;
														continue
													}
													continue
											}
											_ = S.next()
										}
										n.push(w), x = !1, O = !1
									}
									return n
								},
								E = function() {
									for(var q = [];
										"EOF" !== _;)
										if(0 === _.code)
											if("VERTEX" === _.value) q.push(v());
											else if("SEQEND" === _.value) {
										u();
										break
									}
									return q
								},
								Y = function() {
									var q = {
										type: _.value
									};
									for(_ = S.next();
										"EOF" !== _ && 0 !== _.code;) switch(_.code) {
										case 1:
											q.text = _.value, _ = S.next();
											break;
										case 3:
											q.text += _.value, _ = S.next();
											break;
										case 10:
											q.position = W();
											break;
										case 40:
											q.height = _.value, _ = S.next();
											break;
										case 41:
											q.width = _.value, _ = S.next();
											break;
										case 71:
											q.attachmentPoint = _.value, _ = S.next();
											break;
										case 72:
											q.drawingDirection = _.value, _ = S.next();
											break;
										case 50:
											q.angle = 2 * _.value * Math.PI / 360, _ = S.next();
											break;
										case 11:
											q.directionX = _.value, _ = S.next();
											break;
										case 21:
											q.directionY = _.value, _ = S.next();
											break;
										default:
											G(q)
									}
									return q
								},
								M = function() {
									var q = {
										type: _.value,
										scale: 1,
										textStyle: "STANDARD"
									};
									for(_ = S.next();
										"EOF" !== _ && 0 !== _.code;) switch(_.code) {
										case 1:
											q.text = _.value, _ = S.next();
											break;
										case 2:
											q.tag = _.value, _ = S.next();
											break;
										case 3:
											q.prompt = _.value, _ = S.next();
											break;
										case 7:
											q.textStyle = _.value, _ = S.next();
											break;
										case 10:
											q.x = _.value, _ = S.next();
											break;
										case 20:
											q.y = _.value, _ = S.next();
											break;
										case 30:
											q.z = _.value, _ = S.next();
											break;
										case 39:
											q.thickness = _.value, _ = S.next();
											break;
										case 40:
											q.textHeight = _.value, _ = S.next();
											break;
										case 41:
											q.scale = _.value, _ = S.next();
											break;
										case 50:
											q.rotation = _.value, _ = S.next();
											break;
										case 51:
											q.obliqueAngle = _.value, _ = S.next();
											break;
										case 70:
											q.invisible = !!(1 & _.value), q.constant = !!(2 & _.value), q.verificationRequired = !!(4 & _.value), q.preset = !!(8 & _.value), _ = S.next();
											break;
										case 71:
											q.backwards = !!(2 & _.value), q.mirrored = !!(4 & _.value), _ = S.next();
											break;
										case 72:
											q.horizontalJustification = _.value, _ = S.next();
											break;
										case 73:
											q.fieldLength = _.value, _ = S.next();
											break;
										case 74:
											q.verticalJustification = _.value, _ = S.next();
											break;
										case 100:
											_ = S.next();
											break;
										case 210:
											q.extrusionDirectionX = _.value, _ = S.next();
											break;
										case 220:
											q.extrusionDirectionY = _.value, _ = S.next();
											break;
										case 230:
											q.extrusionDirectionZ = _.value, _ = S.next();
											break;
										default:
											G(q)
									}
									return q
								},
								L = function() {
									var q = {
											type: _.value,
											vertices: []
										},
										V = 0;
									for(_ = S.next();
										"EOF" !== _ && 0 !== _.code;) switch(_.code) {
										case 38:
											q.elevation = _.value, _ = S.next();
											break;
										case 39:
											q.depth = _.value, _ = S.next();
											break;
										case 70:
											q.shape = 1 === _.value, _ = S.next();
											break;
										case 90:
											V = _.value, _ = S.next();
											break;
										case 10:
											q.vertices = P(V);
											break;
										case 40:
											0 !== _.value && (q.startWidth = _.value), _ = S.next();
											break;
										case 41:
											0 !== _.value && (q.endWidth = _.value), _ = S.next();
											break;
										case 43:
											0 !== _.value && (q.width = _.value), _ = S.next();
											break;
										default:
											G(q)
									}
									return q
								},
								Q = function() {
									var q = {
										type: _.value,
										vertices: []
									};
									for(_ = S.next();
										"EOF" !== _ && 0 !== _.code;) switch(_.code) {
										case 10:
										case 20:
										case 30:
										case 39:
											_ = S.next();
											break;
										case 40:
											0 !== _.value && (q.startWidth = _.value), _ = S.next();
											break;
										case 41:
											0 !== _.value && (q.endWidth = _.value), _ = S.next();
											break;
										case 70:
											q.shape = 1 === _.value, _ = S.next();
											break;
										case 71:
										case 72:
										case 73:
										case 74:
										case 75:
											_ = S.next();
											break;
										case 100:
											_ = S.next();
											break;
										default:
											G(q)
									}
									return q.vertices = E(), q
								},
								F = function() {
									var q = {
										type: _.value,
										vertices: []
									};
									for(_ = S.next();
										"EOF" !== _ && 0 !== _.code;) switch(_.code) {
										case 10:
											q.vertices.unshift(W());
											break;
										case 11:
											q.vertices.push(W());
											break;
										case 100:
											if("AcDbLine" == _.value) {
												_ = S.next();
												break
											}
										default:
											G(q)
									}
									return q
								},
								a = function() {
									var q, V;
									for(q = {
											type: _.value
										}, _ = S.next();
										"EOF" !== _ && 0 !== _.code;) switch(_.code) {
										case 10:
											q.center = W();
											break;
										case 40:
											q.radius = _.value, _ = S.next();
											break;
										case 50:
											q.startAngle = Math.PI / 180 * _.value, _ = S.next();
											break;
										case 51:
											V = Math.PI / 180 * _.value, V < q.startAngle ? q.angleLength = V + 2 * Math.PI - q.startAngle : q.angleLength = V - q.startAngle, q.endAngle = V, _ = S.next();
											break;
										default:
											G(q)
									}
									return q
								},
								h = function() {
									var q, V;
									for(q = {
											type: _.value
										}, _ = S.next();
										"EOF" !== _ && 0 !== _.code;) switch(_.code) {
										case 10:
											q.center = W();
											break;
										case 11:
											q.major = W();
											break;
										case 40:
											q.ratio = _.value, _ = S.next();
											break;
										case 41:
											q.startAngle = _.value, _ = S.next();
											break;
										case 42:
											V = _.value, V < q.startAngle ? q.angleLength = V + 2 * Math.PI - q.startAngle : q.angleLength = V - q.startAngle, q.endAngle = V, _ = S.next();
											break;
										default:
											G(q)
									}
									return q
								},
								$ = function() {
									var q;
									for(q = {
											type: _.value
										}, _ = S.next();
										"EOF" !== _ && 0 !== _.code;) switch(_.code) {
										case 2:
											q.block = x.sanitizeFileName(_.value), _ = S.next();
											break;
										case 10:
											q.center = W();
											break;
										case 41:
											q.scale = d();
											break;
										case 50:
											q.deg = _.value, _ = S.next();
											break;
										default:
											G(q)
									}
									return q
								},
								t = function() {
									var q;
									for(q = {
											type: _.value
										}, _ = S.next();
										"EOF" !== _ && 0 !== _.code;) switch(_.code) {
										case 2:
											q.block = x.sanitizeFileName(_.value), _ = S.next();
											break;
										case 10:
											q.center = W();
											break;
										case 41:
											q.scale = d();
											break;
										case 50:
											q.deg = _.value, _ = S.next();
											break;
										default:
											G(q)
									}
									return q
								},
								s = function() {
									var q, V;
									for(q = {
											type: _.value
										}, _ = S.next();
										"EOF" !== _ && 0 !== _.code;) switch(_.code) {
										case 10:
											q.center = W();
											break;
										case 11:
											q.major = W();
											break;
										case 40:
											q.ratio = _.value, _ = S.next();
											break;
										case 41:
											q.startAngle = _.value, _ = S.next();
											break;
										case 42:
											V = _.value, V < q.startAngle ? q.angleLength = V + 2 * Math.PI - q.startAngle : q.angleLength = V - q.startAngle, q.endAngle = V, _ = S.next();
											break;
										default:
											G(q)
									}
									return q
								},
								m = function() {
									var q;
									for(q = {
											type: _.value
										}, _ = S.next();
										"EOF" !== _ && 0 !== _.code;) switch(_.code) {
										case 10:
											q.startPoint = W();
											break;
										case 11:
											q.endPoint = W();
											break;
										case 40:
											q.textHeight = _.value, _ = S.next();
											break;
										case 41:
											q.xScale = _.value, _ = S.next();
											break;
										case 1:
											q.text = _.value, _ = S.next();
											break;
										case 7:
											q.font = _.value, _ = S.next();
											break;
										case 71:
											q.generationFlags = _.value, _ = S.next();
											break;
										case 72:
											q.halign = _.value, _ = S.next();
											break;
										case 73:
											q.valign = _.value, _ = S.next();
											break;
										case 50:
											q.rotation = 2 * _.value * Math.PI / 360, _ = S.next();
											break;
										default:
											G(q)
									}
									return q
								},
								D = function() {
									var q;
									for(q = {
											type: _.value
										}, _ = S.next();
										"EOF" !== _ && 0 !== _.code;) switch(_.code) {
										case 2:
											q.block = x.sanitizeFileName(_.value), _ = S.next();
											break;
										case 10:
											q.anchorPoint = W();
											break;
										case 11:
											q.middleOfText = W();
											break;
										case 71:
											q.attachmentPoint = _.value, _ = S.next();
											break;
										case 42:
											q.actualMeasurement = _.value, _ = S.next();
											break;
										case 1:
											q.text = _.value, _ = S.next();
											break;
										case 50:
											q.angle = _.value, _ = S.next();
											break;
										default:
											G(q)
									}
									return q
								},
								T = function() {
									var q;
									for(q = {
											type: _.value
										}, q.points = [], _ = S.next();
										"EOF" !== _ && 0 !== _.code;) switch(_.code) {
										case 10:
											q.points[0] = W();
											break;
										case 11:
											q.points[1] = W();
											break;
										case 12:
											q.points[2] = W();
											break;
										case 13:
											q.points[3] = W();
											break;
										default:
											G(q)
									}
									return q
								},
								f = function() {
									var q;
									for(q = {
											type: _.value
										}, _ = S.next();
										"EOF" !== _ && 0 !== _.code;) switch(_.code) {
										case 10:
											q.position = W();
											break;
										case 39:
											q.thickness = _.value, _ = S.next();
											break;
										case 100:
											if("AcDbPoint" == _.value) {
												_ = S.next();
												break
											}
										default:
											G(q)
									}
									return q
								},
								B = function(q) {
									if(!q) throw new TypeError("entity cannot be undefined or null");
									q.handle || (q.handle = Z++)
								};
							return H(), A
						};
						S.exports = x
					}, {
						"./AutoCadColorIndex": 1,
						"./DxfArrayScanner.js": 2,
						loglevel: 4
					}],
					4: [function(V, _, x) {
						! function(q, n) {
							"object" == typeof _ && _.exports && "function" == typeof V ? _.exports = n() : "function" == typeof S && "object" == typeof S.amd ? S(n) : q.log = n()
						}(this, function() {
							function V(q) {
								return typeof console !== A && (console[q] !== n ? S(console, q) : console.log !== n ? S(console, "log") : g)
							}

							function S(q, V) {
								var n = q[V];
								if("function" == typeof n.bind) return n.bind(q);
								try {
									return Function.prototype.bind.call(n, q)
								} catch(V) {
									return function() {
										return Function.prototype.apply.apply(n, [q, arguments])
									}
								}
							}

							function _(q, V) {
								return function() {
									typeof console !== A && (x(V), K[q].apply(K, arguments))
								}
							}

							function x(q) {
								for(var V = 0; V < l.length; V++) {
									var n = l[V];
									K[n] = V < q ? g : K.methodFactory(n, q)
								}
							}

							function O(V) {
								var n = (l[V] || "silent").toUpperCase();
								try {
									return void(q.localStorage.loglevel = n)
								} catch(q) {}
								try {
									q.document.cookie = "loglevel=" + n + ";"
								} catch(q) {}
							}

							function w() {
								var V;
								try {
									V = q.localStorage.loglevel
								} catch(q) {}
								if(typeof V === A) try {
									V = /loglevel=([^;]+)/.exec(q.document.cookie)[1]
								} catch(q) {}
								K.levels[V] === n && (V = "WARN"), K.setLevel(K.levels[V], !1)
							}
							var K = {},
								g = function() {},
								A = "undefined",
								l = ["trace", "debug", "info", "warn", "error"];
							K.levels = {
								TRACE: 0,
								DEBUG: 1,
								INFO: 2,
								WARN: 3,
								ERROR: 4,
								SILENT: 5
							}, K.methodFactory = function(q, n) {
								return V(q) || _(q, n)
							}, K.setLevel = function(q, V) {
								if("string" == typeof q && K.levels[q.toUpperCase()] !== n && (q = K.levels[q.toUpperCase()]), !("number" == typeof q && q >= 0 && q <= K.levels.SILENT)) throw "log.setLevel() called with invalid level: " + q;
								if(V !== !1 && O(q), x(q), typeof console === A && q < K.levels.SILENT) return "No console available for logging"
							}, K.enableAll = function(q) {
								K.setLevel(K.levels.TRACE, q)
							}, K.disableAll = function(q) {
								K.setLevel(K.levels.SILENT, q)
							};
							var Z = typeof q !== A ? q.log : n;
							return K.noConflict = function() {
								return typeof q !== A && q.log === K && (q.log = Z), K
							}, w(), K
						})
					}, {}]
				}, {}, [3])(3)
			});
		var w = _.DxfViewer = function(q) {
			var V = this;
			V.init(q)
		};
		w.prototype = {}, w.prototype.constructor = w;
		var K = {
			LINE: ["LINE", "POLYLINE", "LWPOLYLINE"],
			CIRCLE: ["CIRCLE", "ARC"],
			ELLIPSE: ["ELLIPSE"],
			TEXT: ["TEXT", "MTEXT"],
			SOLID: ["SOLID"],
			POINT: ["POINT"]
		};
		V.defineProperties(w.prototype, {
			dxf: {
				get: function() {
					return this._dxf
				}
			}
		}), w.prototype.init = function(q) {
			var V = this,
				n = V.options = {};
			q = q || {}, n.font = q.font || "Standard", n.textScaleRatio = q.textScaleRatio || 1, n.size = q.size, n.scale = q.scale, n.blockSize = q.blockSize || 256, n.filter = q.filter, n.defaultColor = q.defaultColor || 0, n.edgeLayer = q.edgeLayer, n.showText = q.showText || !0, n.mapColor = q.mapColor, n.circleSegments = q.circleSegments || 72, n.browserMinFontSize = q.browserMinFontSize || 8, n.useDxfViewport = q.useDxfViewport || !0, q.sanitize !== !1 && (n.sanitize = q.sanitize || "_")
		}, w.prototype.toShape = function(q) {
			var V = this;
			V.parseFile(q);
			var n, S, _, x = V._dxf.blocks,
				O = V.sortBlocks(x);
			V._blockDef = {};
			for(var w = O.length - 1; w >= 0; w--) S = O[w], _ = x[S], _.entities && (V._blockDef[S] || (n = V.entitiesToShape(_.entities, _.position, null, !1), n && (n.flag = _.type, V._blockDef[S] = n)));
			return n = V.entitiesToShape(V._dxf.entities, null, V.options.size, !0, V.options.scale), n.sortedBlockName = O, n.blockDef = V._blockDef, n.layers = V._dxf.tables.layer.layers, n
		}, w.prototype.entitiesToShape = function(q, V, n, S, _) {
			var x = this;
			x._minFontSize = 12, x._bound = {
				xMin: 1 / 0,
				yMin: 1 / 0,
				xMax: -(1 / 0),
				yMax: -(1 / 0)
			}, V = V || {
				x: 0,
				y: 0,
				z: 0
			};
			var O, w, K, g = x._models = {},
				A = x._dxf;
			for(O = 0, w = q.length; O < w; O++) K = q[O], x._groupEntity(g, K, A);
			if(S && x.options.useDxfViewport) {
				var l = x._dxfViewport;
				x._bound = {
					xMin: l.x - l.width / 2,
					xMax: l.x + l.width / 2,
					yMin: l.y - l.height / 2,
					yMax: l.y + l.height / 2
				}
			}
			x._shiftX = x._bound.xMin, x._shiftY = x._bound.yMax;
			var Z = x._bound.xMax - x._bound.xMin,
				z = x._bound.yMax - x._bound.yMin;
			if(!(Z < 0 || z < 0)) {
				if(Z = Z || 1, z = z || 1, x._bound.pos = V, _) x._scale = _;
				else {
					if(n) {
						var H = n / Z,
							i = n / z;
						x._scale = Math.min(H, i)
					} else x._scale = 1;
					x._scale *= Math.max(1, Math.ceil(x.options.browserMinFontSize / x._minFontSize))
				}
				x.shapeComps = [], x.drawLine(), x.drawSolid(), x.drawCircle(), x.drawEllipse(), x.options.showText && x.drawText(), x.drawBlock();
				var N = {
					width: Z * x._scale,
					height: z * x._scale,
					comps: x.shapeComps,
					scale: x._scale,
					anchorX: -(x._bound.xMin - V.x) / Z,
					anchorY: (x._bound.yMax - V.y) / z,
					bound: x._bound
				};
				return x._calcBoundExtend(N), N
			}
		}, w.prototype._calcBoundExtend = function(q) {
			var V = 1,
				n = !1;
			q.comps.forEach(function(q) {
				V = Math.max(V, q.borderWidth || 0), q.borderWidthAbsolute && (n = !0)
			}), q.boundExtend = V, n && (q.boundExtendAbsolute = !0)
		}, w.prototype._bulgesAt = function(q, V) {
			return q[V].bulge
		}, w.prototype._isStraightLine = function(q) {
			return !q || Math.abs(q) < 1e-6
		}, w.prototype._getDistance = function(q, V) {
			var n = q.x - V.x,
				S = q.y - V.y;
			return Math.sqrt(n * n + S * S)
		}, w.prototype._getBulgeSegment = function(q, V, n) {
			var S = this,
				_ = n < 0,
				x = 4 * Math.atan(n);
			if(Math.abs(x) > 2 * Math.PI - 1e-6) return [V];
			var O = {
					x: (q.x + V.x) / 2,
					y: (q.y + V.y) / 2
				},
				w = S._getDistance(q, V) / 2,
				K = Math.atan2(V.y - q.y, V.x - q.x),
				g = Math.abs(w / Math.sin(x / 2)),
				A = Math.abs(g * g - w * w),
				l = Math.sqrt(A);
			n > 0 ? K += Math.PI / 2 : K -= Math.PI / 2, Math.abs(x) > Math.PI && (l *= -1);
			var Z, K, z = l * Math.cos(K) + O.x,
				H = l * Math.sin(K) + O.y,
				i = Math.atan2(q.y - H, q.x - z),
				N = Math.atan2(V.y - H, V.x - z),
				U = [];
			if(Z = 2 * Math.PI / S.options.circleSegments, K = i, _) {
				for(; N > i;) N -= 2 * Math.PI;
				for(; K > N;) K -= Z, K < N && (K = N), U.push({
					x: z + g * Math.cos(K),
					y: H + g * Math.sin(K)
				})
			} else {
				for(; N < i;) N += 2 * Math.PI;
				for(; K < N;) K += Z, K > N && (K = N), U.push({
					x: z + g * Math.cos(K),
					y: H + g * Math.sin(K)
				})
			}
			return U
		}, w.prototype.drawLine = function() {
			var q, V, S, _, x, O, w, g, A, l, Z, z, H, i, N, U, j, p, y, X, e = this,
				b = e._models;
			for(q = K.LINE, _ = 0, x = q.length; _ < x; _++) {
				V = q[_], S = b[V];
				for(g in S)
					for(A = S[g], O = 0, w = A.length; O < w; O++)
						if(l = A[O], Z = l.vertices, Z && Z.length) {
							for(N = e.toLocal(Z[0].x, 1), U = e.toLocal(Z[0].y, 2), p = {
									type: "shape",
									cadType: V,
									maybeEdge: l.layer === e.options.edgeLayer,
									borderColor: g,
									points: [N, U],
									segments: [1]
								}, X = n, l.startWidth ? X = (l.startWidth + (l.endWidth ? l.endWidth : l.startWidth)) / 2 : l.width && (X = l.width), X ? p.borderWidth = e.toLocal(X) : (p.borderWidthAbsolute = !0, p.borderWidth = 1), H = 1, i = Z.length; H < i; H++) z = Z[H], j = e._bulgesAt(Z, H - 1), e._isStraightLine(j) ? (p.points.push(e.toLocal(z.x, 1), e.toLocal(z.y, 2)), p.segments.push(2)) : (y = e._getBulgeSegment(Z[H - 1], z, j), y.forEach(function(q) {
								p.points.push(e.toLocal(q.x, 1), e.toLocal(q.y, 2)), p.segments.push(2)
							}));
							l.shape && (j = e._bulgesAt(Z, Z.length - 1), e._isStraightLine(j) ? p.segments.push(5) : (y = e._getBulgeSegment(Z[Z.length - 1], Z[0], j), y.forEach(function(q) {
								p.points.push(e.toLocal(q.x, 1), e.toLocal(q.y, 2)), p.segments.push(2)
							}))), p.handle = l.handle, e.shapeComps.push(p)
						}
			}
		}, w.prototype.drawBlock = function() {
			var q, V, n, S, _, x, O, w, K, g, A, l, Z = this,
				z = Z._models.BLOCK;
			if(z)
				for(q = 0, V = z.length; q < V; q++) n = z[q], S = n.block, _ = Z._blockDef[S], A = n.transform, x = Math.atan2(A.b, A.a), x === Math.PI || 0 === x ? (K = Math.cos(x), O = A.a / K, w = A.d / K) : (g = Math.sin(x), O = A.b / g, w = -A.c / g), l = {
					type: "image",
					cadType: "block",
					handle: n.handle,
					name: S,
					rect: [
						[Z.toLocal(A.tx, 1), Z.toLocal(A.ty, 2)], Z.toLocal(_.width / _.scale), Z.toLocal(_.height / _.scale)
					],
					rotation: x
				}, 1 === O && 1 === w || (l.scaleX = O, l.scaleY = w), Z.shapeComps.push(l)
		}, w.prototype.drawSolid = function() {
			var q, V, n, S, _, x, O, w, g, A, l, Z = this,
				z = Z._models;
			for(q = K.SOLID, S = 0, _ = q.length; S < _; S++) {
				V = q[S], n = z[V];
				for(w in n)
					for(g = n[w], x = 0, O = g.length; x < O; x++) A = g[x], l = A.points, Z.shapeComps.push({
						type: "shape",
						cadType: V,
						handle: A.handle,
						background: w,
						points: [Z.toLocal(l[0].x, 1), Z.toLocal(l[0].y, 2), Z.toLocal(l[1].x, 1), Z.toLocal(l[1].y, 2), Z.toLocal(l[3].x, 1), Z.toLocal(l[3].y, 2), Z.toLocal(l[2].x, 1), Z.toLocal(l[2].y, 2)],
						segments: [1, 2, 2, 2, 5]
					})
			}
		}, w.prototype.extrusionZNagative = function(q) {
			var V = q.extrusionDirection;
			return !!V && Math.abs(V.z + 1) < 1e-5
		}, w.prototype.drawCircle = function() {
			var q, V, n, S, _, x, O, w, g, A, l, Z, z, H, i, N, U, j, p, y, X = this,
				e = X._models;
			for(q = K.CIRCLE, S = 0, _ = q.length; S < _; S++) {
				V = q[S], n = e[V];
				for(w in n)
					for(g = n[w], x = 0, O = g.length; x < O; x++) {
						if(A = g[x], l = A.startAngle || 0, Z = A.angleLength || 2 * Math.PI, z = l + Z, H = X.toLocal(A.radius), i = A.addonAngle || 0, N = X.toLocal(A.center.x, 1), U = X.toLocal(A.center.y, 2), y = A.xInvert ^ X.extrusionZNagative(A), p = A.yInvert, p || y ? y && p ? (l = Math.PI + l, z = Math.PI + z, j = !1) : (l = Math.PI * (y ? 1 : 2) - l, z = Math.PI * (y ? 1 : 2) - z, j = !0) : j = !1, j = !j, l = 2 * Math.PI - l - i, z = 2 * Math.PI - z - i, j) {
							var b = l;
							l = z, z = b
						}
						X.shapeComps.push({
							type: "arc",
							cadType: V,
							handle: A.handle,
							borderColor: w,
							borderWidth: 1,
							borderWidthAbsolute: !0,
							rect: [N - H, U - H, 2 * H, 2 * H],
							arcFrom: l,
							arcTo: z,
							arcClose: !1
						})
					}
			}
		}, w.prototype.drawText = function() {
			var q, V, n, S, _, x, O, w, g, A, l, Z, z, H, i, N, U, j, p, y, X, e, b, c, J, C = this,
				G = C._models;
			for(q = K.TEXT, c = C.options.textScaleRatio, S = 0, _ = q.length; S < _; S++) {
				V = q[S], n = G[V];
				for(w in n)
					for(g = n[w], x = 0, O = g.length; x < O; x++)
						if(A = g[x], l = A.text, l && l.length) {
							if("MTEXT" === V) Z = C.toLocal(A.height || 12), z = C.toLocal(A.position.x, 1), H = C.toLocal(A.position.y, 2), y = A.angle ? A.angle : A.directionX ? Math.atan2(A.directionY, A.directionX) : 0, y += A.addonAngle || 0, b = 1, p = A.attachmentPoint || 1, U = p % 3, j = Math.floor(p / 3), j = 1 === j ? "middle" : 0 === j ? "top" : "bottom", N = 0 === U ? "right" : 2 === U ? "center" : "left";
							else {
								Z = C.toLocal(A.textHeight || 12);
								var v = A.endPoint;
								v || (v = A.startPoint), z = v.x, H = v.y, y = A.rotation || 0, b = A.xScale || 1, 2 === A.generationFlags ? y = 2 * Math.PI - y : 4 === A.generationFlags ? y = Math.PI - y : 6 === A.generationFlags && (y = Math.PI + y), z = C.toLocal(z, 1), H = C.toLocal(H, 2), U = A.halign, j = A.valign, N = 2 === U ? "right" : 1 === U ? "center" : "left", j = 3 === j ? "top" : 2 === j ? "middle" : "bottom"
							}
							H += Z / 4;
							if(y = 2 * Math.PI - y, i = Z * c + "px " + (A.font || C.options.font), "MTEXT" === V)
								for(l = l.replace(/\\{/g, "#@#"), l = l.replace(/\\}/g, "#@@"), l = l.replace(/({|})/g, ""), l = l.replace(/#@#/g, "{"), l = l.replace(/#@@/g, "}"), l = l.replace(/\\[ACT]\d+;/g, ""), (J = l.match(/\\f[^;]*;/)) && (l = l.replace(J[0], ""), J = J[0].match(/\|p(\d+)/), J && (i = J[0] / 10 * Z * c + "px " + i)), H -= Z / 6, X = l.split("\\P"), e = 0; e < X.length; e++) C.shapeComps.push({
									type: "text",
									cadType: V,
									handle: A.handle,
									color: w,
									text: X[e],
									rotation: y,
									rect: [z, H + e * Z * 1.5, 0, 0],
									align: N,
									vAlign: j,
									font: i
								});
							else C.shapeComps.push({
								type: "text",
								cadType: V,
								handle: A.handle,
								color: w,
								text: l,
								scaleX: b,
								rotation: y,
								rect: [z, H, 1e-5, 1e-5],
								align: N,
								vAlign: j,
								font: i
							})
						}
			}
		}, w.prototype.drawEllipse = function() {
			var q, V, n, S, _, x, O, w, g, A, l, Z, z, H, i, N, U, j, p, y, X, e, b = this,
				c = b._models;
			for(q = K.ELLIPSE, S = 0, _ = q.length; S < _; S++) {
				V = q[S], n = c[V];
				for(w in n)
					for(g = n[w], x = 0, O = g.length; x < O; x++) {
						if(A = g[x], l = A.major, Z = Math.atan2(l.y, l.x), z = b.toLocal(Math.sqrt(l.x * l.x + l.y * l.y)), H = z * A.ratio, i = A.startAngle || 0, N = A.angleLength || 2 * Math.PI, U = i + N, j = b.toLocal(A.center.x, 1), p = b.toLocal(A.center.y, 2), y = A.xInvert, X = A.yInvert ^ b.extrusionZNagative(A), X ^= 1, X || y ? y && X ? (i = Math.PI + i, U = Math.PI + U, e = !1) : (i = Math.PI * (y ? 1 : 2) - i, U = Math.PI * (y ? 1 : 2) - U, e = !0) : e = !1, e) {
							var J = i;
							i = U, U = J
						}
						Z = 2 * Math.PI - Z, b.shapeComps.push({
							type: "arc",
							cadType: V,
							handle: A.handle,
							borderColor: w,
							borderWidth: 1,
							borderWidthAbsolute: !0,
							rotation: Z,
							rect: [j - z, p - H, 2 * z, 2 * H],
							arcFrom: i,
							arcTo: U,
							arcClose: !1,
							arcOval: !0
						})
					}
			}
		}, w.prototype._transformPoint = function(q, V, n) {
			if(q) {
				var S = q.x,
					_ = q.y;
				return n = n || 1, {
					x: S * n * V.a + _ * V.c + V.tx,
					y: S * n * V.b + _ * V.d + V.ty
				}
			}
		}, w.prototype._groupEntity = function(q, V, n, S, _) {
			var x = this,
				O = x.getColor(V, n);
			if(O && (!x.options.filter || !x.options.filter(V, _))) {
				var w, K, g, A = x._transformPoint,
					l = V.type;
				if("DIMENSION" === l || "INSERT" === l) {
					if(!V.block) return;
					if(x.extrusionZNagative(V)) return;
					var Z = n.blocks[V.block];
					if(!Z || !Z.entities) return;
					if(!(g = x._blockDef[V.block])) return void console.log("no entity ", V.block);
					var z = S || {
						a: 1,
						b: 0,
						c: 0,
						d: 1,
						tx: 0,
						ty: 0
					};
					if("INSERT" === l) {
						var H = V.scale ? V.scale.x : 1,
							i = V.scale ? V.scale.y : 1,
							N = 0,
							U = 1,
							j = 0;
						if(V.deg && (N = V.deg * Math.PI / 180, N = 2 * Math.PI - N, U = Math.cos(N), j = Math.sin(N)), S) {
							var p = H * U,
								y = H * j,
								X = -i * j,
								e = i * U,
								b = V.center.x,
								c = V.center.y;
							z = {
								a: S.a * p + S.c * y,
								b: S.b * p + S.d * y,
								c: S.a * X + S.c * e,
								d: S.b * X + S.d * e,
								tx: S.a * b + S.c * c + S.tx,
								ty: S.b * b + S.d * c + S.ty
							}
						} else z = {
							a: H * U,
							b: H * j,
							c: -i * j,
							d: i * U,
							tx: V.center.x,
							ty: V.center.y
						}
					}
					var J = g.bound,
						C = (J.pos.x, J.pos.y, A({
							x: J.xMin,
							y: J.yMin
						}, z)),
						G = A({
							x: J.xMax,
							y: J.yMax
						}, z),
						v = A({
							x: J.xMin,
							y: J.yMax
						}, z),
						u = A({
							x: J.xMax,
							y: J.yMin
						}, z),
						W = x._bound;
					W.xMin = Math.min(W.xMin, C.x, G.x, v.x, u.x), W.yMin = Math.min(W.yMin, C.y, G.y, v.y, u.y), W.xMax = Math.max(W.xMax, C.x, G.x, v.x, u.x), W.yMax = Math.max(W.yMax, C.y, G.y, v.y, u.y);
					var d;
					return(d = x._models.BLOCK) || (x._models.BLOCK = d = []), void d.push({
						handle: V.handle,
						block: V.block,
						transform: z
					})
				}(w = q[l]) || (w = q[l] = {}), (K = w[O]) || (K = w[O] = []);
				var P = x.extrusionZNagative(V) && ["POINT", "LINE", "ELLIPSE"].indexOf(l) < 0;
				if(S || P) {
					S || (S = {
						a: 1,
						b: 0,
						c: 0,
						d: 1,
						tx: 0,
						ty: 0
					});
					var E = {};
					for(var Y in V) E[Y] = V[Y];
					E.radius && (E.radius *= Math.sqrt(S.a * S.a + S.b * S.b)), E.textHeight && (E.textHeight *= Math.sqrt(S.a * S.a + S.b * S.b));
					var M = P ? -1 : 1;
					if(E.position = A(E.position, S, M), E.startPoint = A(E.startPoint, S, M), E.center = A(E.center, S, M), "ELLIPSE" === l) {
						var L;
						L = A({
							x: V.major.x + V.center.x,
							y: V.major.y + V.center.y
						}, S, M), E.major = {
							x: L.x - E.center.x,
							y: L.y - E.center.y
						}, x.extrusionZNagative(V) && (E.major.x *= -1)
					}
					var Q;
					E.vertices && (Q = [], E.vertices.forEach(function(q) {
						var V = A(q, S, M);
						q.bulge && (V.bulge = q.bulge), Q.push(V)
					}), E.vertices = Q), E.points && (Q = [], E.points.forEach(function(q) {
						var V = A(q, S, M);
						q.bulge && (V.bulge = q.bulge), Q.push(V)
					}), E.points = Q);
					var F = Math.atan2(S.b, S.a),
						a = Math.cos(F);
					E.yInvert = S.d * a < 0, E.xInvert = S.a * a < 0, 0 !== F && (E.addonAngle = F), V = E
				}
				x.mergeBound(V), K.push(V)
			}
		}, w.prototype.getPointsBound = function(q) {
			for(var V = 1 / 0, n = 1 / 0, S = -(1 / 0), _ = -(1 / 0), x = 0, O = q.length; x < O; x++) {
				var w = q[x];
				V = Math.min(V, w.x), n = Math.min(n, w.y), S = Math.max(S, w.x), _ = Math.max(_, w.y)
			}
			return {
				xMin: V,
				yMin: n,
				xMax: S,
				yMax: _
			}
		}, w.prototype.mergeBound = function(q) {
			var V, n, S = this;
			n = q.type;
			for(V in K)
				if(K[V].indexOf(n) >= 0) break;
			var _, x, O, w, g, A, l, Z, z, H, i, N, U, j, p, y, X, e, b, c, J, C = S.getPointsBound;
			switch(V) {
				case "LINE":
					for(_ = C(q.vertices), c = q.vertices.length, e = 0; e < c; e++) b = q.vertices[e], S._isStraightLine(b.bulge) || (e !== c - 1 || q.shape) && (J = C(S._getBulgeSegment(b, q.vertices[(e + 1) % c], b.bulge)), _.xMin = Math.min(_.xMin, J.xMin), _.yMin = Math.min(_.yMin, J.yMin), _.xMax = Math.max(_.xMax, J.xMax), _.yMax = Math.max(_.yMax, J.yMax));
					break;
				case "SOLID":
					_ = C(q.points);
					break;
				case "POINT":
					if(!q.position) return;
					x = q.position.x, O = q.position.y, _ = {
						xMin: x,
						yMin: O,
						xMax: x,
						yMax: O
					};
					break;
				case "TEXT":
					if(!q.text || !q.text.length) return;
					x = q.position ? q.position.x : q.startPoint.x, O = q.position ? q.position.y : q.startPoint.y, X = q.height || q.textHeight || 12, S._minFontSize = Math.min(S._minFontSize, X), _ = {
						xMin: x,
						yMin: O,
						xMax: x + X * q.text.length,
						yMax: O + X
					};
					break;
				case "CIRCLE":
					for(x = q.center.x, O = q.center.y, w = q.radius, g = [], A = q.startAngle || 0, l = A + (q.angleLength || 2 * Math.PI), Z = q.xInvert ^ S.extrusionZNagative(q), z = q.yInvert, H = Z ? -1 : 1, i = z ? -1 : 1, N = A; N < l + Math.PI / 30; N += Math.PI / 30) N = Math.min(N, l), g.push({
						x: x + H * w * Math.cos(N),
						y: O + i * w * Math.sin(N)
					});
					_ = C(g);
					break;
				case "ELLIPSE":
					for(x = q.center.x, O = q.center.y, g = [], U = Math.sqrt(q.major.x * q.major.x + q.major.y * q.major.y), j = U * q.ratio, w = Math.atan2(q.major.y, q.major.x), p = Math.sin(w), y = Math.cos(w), A = q.startAngle || 0, l = A + (q.angleLength || 2 * Math.PI), Z = q.xInvert, z = q.yInvert ^ S.extrusionZNagative(q), H = Z ? -1 : 1, i = z ? -1 : 1, N = A; N < l + Math.PI / 30; N += Math.PI / 30) {
						N = Math.min(N, l);
						var G = H * U * Math.cos(N),
							v = i * j * Math.sin(N);
						g.push({
							x: x + (y * G - p * v),
							y: O + (p * G + y * v)
						})
					}
					_ = C(g);
					break;
				default:
					return
			}
			var u = S._bound;
			u.xMin = Math.min(u.xMin, _.xMin), u.yMin = Math.min(u.yMin, _.yMin), u.xMax = Math.max(u.xMax, _.xMax), u.yMax = Math.max(u.yMax, _.yMax)
		}, w.prototype.parseFile = function(q) {
			var V = this,
				n = "string" == typeof V.options.sanitize ? {
					sanitize: V.options.sanitize
				} : null,
				S = new DxfParser(n),
				_ = S.parseSync(q);
			V._dxf = _, V._isAc2015 = "AC1015" === _.header.$ACADVER, V._dxfViewport = V.getCameraParametersFromDxf(_)
		}, w.prototype.toLocal = function(q, V) {
			var n, S = this;
			return n = 2 === V ? -(q - S._shiftY) : 1 === V ? q - S._shiftX : q, n * S._scale
		}, w.prototype.getCameraParametersFromDxf = function(q) {
			var V, n, S, _, x, O, w, K, g, A, l, Z, z = 0;
			if(!V && q.tables && q.tables.viewPort) {
				A = q.tables.viewPort.viewPorts;
				for(g in A)
					if(l = A[g], Z = l.viewDirectionFromTarget, l.center && (l.renderMode === z || Z && 0 === Z.x && 0 === Z.y && 1 === Z.z)) {
						S = l.center, _ = l.upperRightCorner, x = l.lowerLeftCorner, V = {
							x: _.x,
							y: _.y
						}, n = {
							x: x.x,
							y: x.y
						}, O = l.viewWidth || 0, w = l.viewHeight || 0, l.viewTarget && (S = {
							x: S.x + l.viewTarget.x,
							y: S.y + l.viewTarget.y
						});
						break
					}
			}
			return !V && q.header && (K = q.header, K.$EXTMIN && K.$EXTMAX && (V = K.$EXTMAX, n = K.$EXTMIN)), O = Math.max(O, V.x - n.x), w = Math.max(w, V.y - n.y), S = S || {
				x: O / 2 + n.x,
				y: w / 2 + n.y
			}, {
				width: O,
				height: w,
				x: S.x,
				y: S.y
			}
		}, w.prototype.getColor = function(q, V) {
			var S, _ = this;
			if(q || console.log("no entity", q), V.tables && V.tables.layer && (S = V.tables.layer.layers[q.layer]), !S || S.visible) {
				var x;
				q.color !== n ? (x = q.color, 0 === x && (x = _.options.defaultColor)) : S && (x = S.color), x && 16777215 !== x || (x = _.options.defaultColor);
				var x = "#" + ((1 << 24) + x).toString(16).slice(1);
				return _.options.mapColor && (x = _.options.mapColor(x)), x
			}
		}, w.prototype.sortBlocks = function(q) {
			var n, S, _, x, O = V.keys(q),
				w = {};
			for(n in q)
				if(S = q[n], S.entities)
					for(var K = 0, g = S.entities.length; K < g; K++) _ = S.entities[K], x = _.type, "DIMENSION" !== x && "INSERT" !== x || _.block && (w[n] || (w[n] = []), w[n].push(_.block));
			for(var A = O.length, l = A, Z = {}, z = new Array(A), H = !1, i = function(q, V, n) {
					if(n.indexOf(q) >= 0) return void(H = !0);
					if(!Z[V]) {
						Z[V] = !0;
						var S = w[q],
							_ = S ? S.length : 0;
						if(_) {
							var x = n.concat(q);
							do {
								var K = S[--_];
								if(i(K, O.indexOf(K), x), H) break
							} while (_)
						}
						z[--A] = q
					}
				}; l--;) Z[l] || i(O[l], l, []);
			return H ? [] : z
		}
	}("undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : (0, eval)("this"), Object);
	var vn = function(q) {
		function V(n, S) {
			var _ = arguments.length <= 2 || void 0 === arguments[2] || arguments[2];
			YV(this, V);
			var x = QV(this, q.call(this, S));
			return x.editor = n, x.editable = _, x.dragToIndexEnabled = !0, x.addTopPainter(x.$1$.bind(x)), x
		}
		return LV(V, q), V.prototype.getLabelColor = function(V) {
			return V !== this.draggingData || this.isSelected(V) ? q.prototype.getLabelColor.call(this, V) : hV.config.color_select
		}, V.prototype.handleDelete = function() {
			this.editable && this.removeSelection()
		}, V.prototype.isDroppable = function(q, V) {
			return !1
		}, V.prototype._clearDragInfo = function() {
			this.editor.dnd.hideTip(), this._dragInfo && (this._dragInfo = null, this.redraw())
		}, V.prototype._endDrag = function(q, V) {}, V.prototype._endCrossDrag = function(q, V) {}, V.prototype.$1$ = function(q) {
			q.texureImage2D = !0;
			var V = void 0;
			if(this._dragInfo && this._dragInfo.inView ? V = this._dragInfo : this._crossDragInfo && (V = this._crossDragInfo), V) {
				var n = this.getWidth(),
					S = this.getRowHeight(),
					_ = V.type,
					x = V.parent,
					O = x ? this.getRowDatas().indexOf(x) : -1,
					w = hV.config.color_select_dark;
				if(V.refData) {
					if(f(q, w, 0, O * S, n, S, 2), "up" === _ || "down" === _) {
						var K = V.x,
							g = V.y;
						q.beginPath(), q.arc(K - 3, g, 3, 0, 2 * Math.PI, !0), q.moveTo(K, g), q.lineTo(n, g), q.lineWidth = 2, q.strokeStyle = w, q.stroke()
					}
				} else {
					var A = this.getViewRect();
					f(q, w, A.x, A.y, A.width, A.height, 2)
				}
			}
		}, V.prototype._dragging = function(q, V) {
			var n = this.getRowHeight(),
				S = this.lp(q),
				_ = S.y / n,
				x = Math.floor(_),
				O = this.getRowSize();
			if(x > O - 1) V.refData = null, V.type = "parent", V.parent = null;
			else {
				var w = S.y - x * n;
				this.dragToIndexEnabled ? w < .25 * n ? V.type = "up" : w > .75 * n ? V.type = "down" : V.type = "parent" : V.type = "parent";
				var K = V.refData = this.getRowDatas().get(x);
				"up" === V.type ? (V.parent = K.getParent(), V.x = (this.getLevel(K) + 1) * this.getIndent(), V.y = x * n) : "down" === V.type ? (this.getToggleIcon(K) === this.getExpandIcon() ? (V.parent = K, V.x = (this.getLevel(K) + 2) * this.getIndent()) : (V.parent = K.getParent(), V.x = (this.getLevel(K) + 1) * this.getIndent()), V.y = (x + 1) * n) : V.parent = K
			}
			this.autoScroll(q), this.redraw()
		}, V.prototype.$2$ = function() {
			var q = "";
			if(this.draggingData && (q = this.getLabel(this.draggingData), this.isSelected(this.draggingData))) {
				var V = this.sm().size();
				q += V > 1 ? " (+" + V + ") " : ""
			}
			return q
		}, V.prototype.handleDragAndDrop = function(q, V) {
			if(this.editable) {
				if("prepare" === V) return void this._clearDragInfo();
				"begin" === V && (this._dragInfo = {
					tip: this.$2$(),
					view: this
				});
				var n = this._dragInfo;
				if(n) {
					var S = this.editor.dnd;
					if("begin" === V || "between" === V) {
						var _ = this.getView().contains(b(q));
						return _ ? (n.inView = !0, this._dragging(q, n), S.clearDropView(q, n)) : (n.inView && this.redraw(), n.inView = !1, S.crossDrag(q, n)), void S.showTip(n.tip, q)
					}
					return "end" === V ? (n.inView ? this._endDrag(q, n) : S.crossDrop(q, n), void this._clearDragInfo()) : "cancel" === V ? (n.inView || S.crossCancel(q, n), void this._clearDragInfo()) : void 0
				}
			}
		}, V.prototype.handleCrossDrag = function(q, V, n) {
			return "exit" === V || "cancel" === V ? (this._crossDragInfo = null, void this.redraw()) : "enter" === V || "over" === V ? (this._crossDragInfo || (this._crossDragInfo = {}), void this._dragging(q, this._crossDragInfo)) : "drop" === V ? (this._endCrossDrag(q, n), this._crossDragInfo = null, void this.redraw()) : void 0
		}, V.prototype.isEditable = function(q) {
			return this.editable
		}, V.prototype.rename = function(q, V) {
			q.setName(V)
		}, V.prototype.handleDataDoubleSelect = function(q, V) {
			if(this.isEditable(V)) {
				var n = this.getLevel(V);
				n += this.getIcon(V) ? 2 : 1, this.lp(q).x > n * this.getIndent() && this.beginEditing(V)
			}
		}, V.prototype.getEditingLabel = function(q) {
			return this.getLabel(q)
		}, V.prototype.beginEditing = function(q) {
			var V = this;
			this.cancelEditing(), this.makeVisible(q), this.validate();
			var n = this.getLevel(q);
			n += this.getIcon(q) ? 2 : 1;
			var S = this.getIndent() * n,
				_ = this.ty() + this.getRowIndex(q) * this.getRowHeight(),
				x = Math.max(1, this.getWidth() - S),
				O = this.getRowHeight();
			this._currentEditor = new ht.widget.TextField, this._currentEditor.data = q;
			var w = this._currentEditor.getElement(),
				K = this.getEditingLabel(q);
			w.value = null == K ? "" : K, w.onblur = function(q) {
				V.endEditing()
			}, w.onkeydown = function(q) {
				N(q) ? V.endEditing() : U(q) && V.cancelEditing()
			}, this.getView().appendChild(this._currentEditor.getView()), Y(this._currentEditor, S, _, x, O), this._currentEditor.setFocus(), ht.Default.callLater(w.select, w)
		}, V.prototype.endEditing = function() {
			var q = this._currentEditor;
			q && (this.rename(q.data, q.getValue()), delete this._currentEditor, L(q.getView()), this.redraw())
		}, V.prototype.cancelEditing = function() {
			var q = this._currentEditor;
			q && (delete this._currentEditor, L(q.getView()), this.redraw())
		}, V
	}(Gn);
	hV.DNDTree = vn;
	var un = function(q) {
			function V(n) {
				var S = arguments.length <= 1 || void 0 === arguments[1] || arguments[1];
				YV(this, V);
				var _ = QV(this, q.call(this, n.editor, n.dataModel, S));
				return _.explorer = n, _.dragToIndexEnabled = !1, _
			}
			return LV(V, q), V.prototype.isVisible = function(q) {
				return(!this._visibleFunc || this._visibleFunc(q) !== !1) && (q.fileType === mV || q.fileType === sV)
			}, V.prototype.getLabel = function(q) {
				return _("url:" + q.url, !0) || this.getEditingLabel(q)
			}, V.prototype.getEditingLabel = function(q) {
				return q.getName()
			}, V.prototype.handleBackgroundClick = function(q) {}, V.prototype.handleDelete = function() {
				this.editable && hV.config.removeFileByKeyboardEnabled && this.explorer.deleteSelection(this)
			}, V.prototype.isDroppable = function(q, V) {
				return !(!this.editable || V.view !== this.explorer.list) || V.view === this.editor.dndFromOutside
			}, V.prototype._endCrossDrag = function(q, V) {
				var n = this;
				if(this._crossDragInfo) {
					var S = V.view,
						_ = this._crossDragInfo.parent;
					_ || (_ = this.explorer.rootNode), S === this.explorer.list ? S.isSelected(S.draggingData) ? S.sm().toSelection().each(function(q) {
						n.editor.moveFile(q, _)
					}) : this.editor.moveFile(S.draggingData, _) : S === this.editor.dndFromOutside && this.editor.dropLocalFileOnDir(q, _)
				}
			}, V.prototype._endDrag = function(q, V) {
				var n = this,
					S = V.parent;
				if(S || (S = this.explorer.rootNode), this.isSelected(this.draggingData)) {
					var _ = this.getTopRowOrderSelection();
					_.each(function(q) {
						n.editor.moveFile(q, S)
					})
				} else this.editor.moveFile(this.draggingData, S), this.sm().ss(this.draggingData);
				S && this.expand(S)
			}, V.prototype.isEditable = function(q) {
				return this.editable && q !== this.explorer.rootNode
			}, V.prototype.beginEditing = function(V) {
				var n = {
					data: V,
					url: V.url
				};
				this.editor.fireEvent("fileRenaming", n), n.preventDefault || q.prototype.beginEditing.call(this, V)
			}, V.prototype.rename = function(q, V) {
				this.editor.renameFile(q, V) && (q.s("label") ? q.s("label", V) : q.setName(V))
			}, V.prototype.getIcon = function(q) {
				return void 0 !== q.getIcon() ? q.getIcon() : q.fileType === mV ? this.hasExpandedChild(q) ? "editor.direxpanded" : "editor.dircollapsed" : q.fileType === sV ? "editor.root.state" : null
			}, V
		}(vn),
		Wn = function(q) {
			function V(n) {
				YV(this, V);
				var S = QV(this, q.call(this, n));
				return S._lastSelectDataTime = Date.now(), S
			}
			return LV(V, q), V.prototype.isVScrollable = function() {
				return this.gv.getViewRect().height < this.gv.getScrollRect().height
			}, V.prototype.isV = function(q) {
				var V = this.gv.getViewRect();
				return this.isVScrollable() && (V.x + V.width - this.gv.lp(q).x) * this.gv.getZoom() < ht.Default.scrollBarInteractiveSize
			}, V.prototype.clear = function(q) {
				q && this._dragging && !this._dragCancel && this.gv.handleDragAndDrop(q, "end"), this.gv.draggingData && (this.gv.draggingData.iv(), this.gv.draggingData = null, this.gv.redraw()), this._dragging = this._dragCancel = this._clientPoint = null
			}, V.prototype.handle_mousedown = function(q) {
				this.handle_touchstart(q)
			}, V.prototype.handle_touchstart = function(q) {
				if(!this.isV(q) && !hq(q.target)) {
					r(q), this.clear(q), this._clientPoint = e(q);
					var V = this.gv.getDataAt(q);
					p(q) ? V ? (this.gv.draggingData = V, V.iv(), this.gv.redraw(), this.gv.handleDragAndDrop(q, "prepare"), X(this, q)) : this.gv.sm().cs() : (V && this.handleSelection(q, V), this.clear(q))
				}
			}, V.prototype.handle_mouseup = function(q) {
				this.handle_touchend(q)
			}, V.prototype.handle_touchend = function(q) {
				if(this._clientPoint && !this._dragging) {
					var V = this.gv.getDataAt(q);
					V && this.handleSelection(q, V)
				}
				this.clear(q)
			}, V.prototype.handleWindowMouseMove = function(q) {
				this.handleWindowTouchMove(q)
			}, V.prototype.handleWindowMouseUp = function(q) {
				this.handleWindowTouchEnd(q)
			}, V.prototype.handleWindowTouchMove = function(q) {
				r(q), this._dragging ? this._dragCancel || this.gv.handleDragAndDrop(q, "between") : this._clientPoint && this.gv.draggingData && C(e(q), this._clientPoint) > 2 && (this._dragging = !0, this.gv.handleDragAndDrop(q, "begin"))
			}, V.prototype.handleWindowTouchEnd = function(q) {
				r(q), this.clear(q)
			}, V.prototype.handleSelection = function(q, V) {
				var n = this.gv.sm();
				if(a(q)) this.gv.isSelected(V) ? n.removeSelection(V) : n.appendSelection(V);
				else if(F(q)) {
					var S = n.ld();
					if(S)
						for(var _ = this.gv.nodes, x = _.indexOf(S), O = _.indexOf(V); x !== O;) x += O > x ? 1 : -1, n.as(_[x]);
					else n.ss(V)
				} else if(p(q)) {
					var w = Date.now();
					if(n.contains(V)) {
						var K = w - this._lastSelectDataTime;
						K > 500 && K < 1500 && this.gv.handleDataDoubleSelect(q, V)
					}
					n.ss(V), this._lastSelectDataTime = w
				} else n.contains(V) || n.ss(V)
			}, V.prototype.handle_keydown = function(q) {
				if(!hq(q.target))
					if(U(q)) this._dragging && !this._dragCancel && (this.gv.handleDragAndDrop(q, "cancel"), this._dragCancel = !0);
					else if(z(q) || i(q) || Z(q) || H(q)) {
					var V = this.gv.sm(),
						n = this.gv.nodes,
						S = V.ld();
					if(n.length) {
						var _ = void 0;
						if(S) {
							var x = n.indexOf(S);
							z(q) || Z(q) ? 0 !== x && (_ = n[x - 1]) : x !== n.length - 1 && (_ = n[x + 1])
						} else _ = n[0];
						_ && (F(q) ? V.as(_) : V.ss(_))
					}
				}
			}, V
		}(ht.graph.Interactor),
		dn = function(q) {
			function V(n) {
				var S = arguments.length <= 1 || void 0 === arguments[1] || arguments[1];
				YV(this, V);
				var _ = QV(this, q.call(this, n.editor, n.dm, S));
				return _.displayView = n, _.graphView = n.graphView, _.nodeIcon = Qq(_), _.initMenu(), n.dm.addDataPropertyChangeListener(function(q) {
					var V = q.data;
					(V instanceof ht.Shape || V instanceof ht.Edge) && (V.editorIcon = null)
				}), _
			}
			return LV(V, q), V.prototype.getBorderColor = function(q) {
				return null
			}, V.prototype.onDataDoubleClicked = function(q, V) {
				V.altKey ? this.graphView.fitData(q, !0, hV.config.fitPadding) : this.graphView.makeCenter(q, !0)
			}, V.prototype.onPropertyChanged = function(V) {
				"filter" === V.property && (this.visibleMap = null, this.ivm()), q.prototype.onPropertyChanged.call(this, V)
			}, V.prototype.handleDataPropertyChange = function(V) {
				!this._filter || "name" !== V.property && "displayName" !== V.property ? q.prototype.handleDataPropertyChange.call(this, V) : (this.visibleMap = null, this.ivm())
			}, V.prototype.checkVisible = function(q) {
				if(!this._filter) return !0;
				var V = this.getLabel(q);
				return null != V && (V = (V + "").toLowerCase(), V.indexOf(this._filter) >= 0)
			}, V.prototype.validateModel = function() {
				var V = this;
				this._filter && !this.visibleMap && (this.visibleMap = {}, this.getDataModel().each(function(q) {
					if(V.checkVisible(q)) {
						V.visibleMap[q._id] = !0;
						for(var n = q.getParent(); n && !V.visibleMap[n._id];) V.visibleMap[n._id] = !0, n = n.getParent()
					}
				})), q.prototype.validateModel.call(this)
			}, V.prototype.isVisible = function(q) {
				return !q._refGraph && (!this._filter || this.visibleMap && this.visibleMap[q._id])
			}, V.prototype.validate = function() {
				this.graphView.validate(), q.prototype.validate.call(this)
			}, V.prototype.getLabel = function(q) {
				var V = q.toLabel();
				return null == V && q.s("editor.folder") ? _("ht.Folder") : q.toLabel() || _(q.getClassName())
			}, V.prototype.getIcon = function(q) {
				return q instanceof ht.SubGraph ? "editor.subgraph" : q instanceof ht.Group ? "editor.group" : q instanceof ht.RefGraph || q instanceof ht.Text ? q.getIcon() : q instanceof ht.Block ? "editor.block" : q instanceof ht.Shape ? (q.editorIcon || (q.editorIcon = aq(q)), q.editorIcon) : q instanceof ht.Edge ? (q.editorIcon || (q.editorIcon = Fq(this, q)), q.editorIcon) : q instanceof ht.Node ? this.nodeIcon : q.s("editor.folder") ? this.hasExpandedChild(q) ? "editor.direxpanded" : "editor.dircollapsed" : null;
			}, V.prototype.isDroppable = function(q, V) {
				return V.view === this.editor.symbols.getFileListView() || (V.view === this.editor.assets.getFileListView() || V.view === this.editor.displays.getFileListView())
			}, V.prototype._endCrossDrag = function(q, V) {
				var n = this;
				if(this._crossDragInfo) {
					this.editor.beginTransaction();
					var S = [],
						_ = V.view,
						x = this._crossDragInfo.type,
						O = this._crossDragInfo.parent,
						w = this._crossDragInfo.refData;
					_ !== this.editor.symbols.getFileListView() && _ !== this.editor.assets.getFileListView() || _.toDraggingDatas("down" === x).forEach(function(q) {
						var V = new ht.Node;
						V.setImage(q.url), V.setDisplayName(P(q.getName())), S.push(V), n.displayView.addData(V, !0), n.editor.gv.$64$([V]), n._dropData(V, x, O, w)
					}), _ === this.editor.displays.getFileListView() && _.toDraggingDatas("down" === x).forEach(function(q) {
						if(q.url !== n.editor.url) {
							var V = new ht.RefGraph;
							V.setRef(q.url), V.setDisplayName(P(q.getName())), S.push(V), n.displayView.addData(V, !0), n._dropData(V, x, O, w)
						}
					}), S.length && this.sm().ss(S), this.editor.endTransaction()
				}
			}, V.prototype._endDrag = function(q, V) {
				var n = this;
				this.editor.beginTransaction();
				var S = V.type,
					_ = V.parent,
					x = V.refData;
				if(this.isSelected(this.draggingData)) {
					var O = this.getTopRowOrderSelection();
					"down" === S && O.reverse(), O.each(function(q) {
						n._dropData(q, S, _, x)
					})
				} else this._dropData(this.draggingData, S, _, x), this.sm().ss(this.draggingData);
				_ && this.expand(_), this.editor.endTransaction()
			}, V.prototype._dropData = function(q, V, n, S) {
				if(q.setParent(n), "down" === V || "up" === V) {
					var _ = n ? n.getChildren() : this.dm().getRoots(),
						x = _.indexOf(S);
					"down" === V && x++, _.indexOf(q) < x && x--, this.dm().moveTo(q, x)
				} else n || this.dm().moveToBottom(q)
			}, V.prototype.rename = function(q, V) {
				q.setDisplayName(V)
			}, V.prototype.initMenu = function() {
				var q = this,
					V = function() {
						for(var V = q.editor.selection, n = 0; n < V.length; n++)
							if(V[n].s("editor.folder")) return !0;
						return !1
					};
				this.menu = new pn;
				var n = [{
					id: "folder",
					label: _("editor.folder"),
					action: function() {
						q.editor.folder()
					},
					visible: function() {
						return q.editable && !!q.editor.ld
					}
				}, {
					id: "unfolder",
					label: _("editor.unfolder"),
					action: function() {
						q.editor.unfolder()
					},
					visible: function() {
						return q.editable && V()
					}
				}, {
					separator: !0,
					visible: function() {
						return q.editable && !!q.editor.ld
					}
				}, {
					id: "copy",
					label: _("editor.copy"),
					action: function() {
						q.editor.copy()
					},
					visible: function() {
						return q.editable && !!q.editor.ld
					}
				}, {
					id: "paste",
					label: _("editor.paste"),
					action: function() {
						q.editor.paste()
					},
					visible: function() {
						return q.editable && q.editor.hasCopyInfo()
					}
				}, {
					id: "delete",
					label: _("editor.delete"),
					action: function() {
						q.editor.delete()
					},
					visible: function() {
						return q.editable && !!q.editor.ld
					}
				}, {
					separator: !0,
					visible: function() {
						return q.editable && !!q.editor.ld
					}
				}, {
					id: "bringToFront",
					label: _("editor.bringtofront"),
					action: function() {
						q.editor.bringToFront()
					},
					visible: function() {
						return q.editable && !!q.editor.ld
					}
				}, {
					id: "bringForward",
					label: _("editor.bringforward"),
					action: function() {
						q.editor.bringForward()
					},
					visible: function() {
						return q.editable && !!q.editor.ld
					}
				}, {
					id: "sendBackward",
					label: _("editor.sendbackward"),
					action: function() {
						q.editor.sendBackward()
					},
					visible: function() {
						return q.editable && !!q.editor.ld
					}
				}, {
					id: "sendToBack",
					label: _("editor.sendtoback"),
					action: function() {
						q.editor.sendToBack()
					},
					visible: function() {
						return q.editable && !!q.editor.ld
					}
				}, {
					separator: !0,
					visible: function() {
						return q.editable && !!q.editor.ld
					}
				}, {
					id: "expandAll",
					label: _("editor.expandall"),
					action: function() {
						q.expandAll()
					}
				}, {
					id: "collapseAll",
					label: _("editor.collapseall"),
					action: function() {
						q.collapseAll()
					}
				}];
				this.menu.setItems(n), this.menu.addTo(this.getView()), this.editor.menus.push(this.menu)
			}, V.prototype.onClosed = function() {
				x(this.editor.menus, this.menu)
			}, V
		}(vn);
	I(dn, {
		ms_ac: ["filter"]
	});
	var Pn = function(q) {
		function V(n) {
			var S = arguments.length <= 1 || void 0 === arguments[1] || arguments[1];
			YV(this, V);
			var _ = QV(this, q.call(this, n.dataModel));
			return _.explorer = n, _.editable = S, _.editor = n.editor, _.getHScrollBar().style.display = "none", _.setMaxFileSize(hV.config.imageSize), _.setPannable(!1), _.setInteractors([new ht.graph.ScrollBarInteractor(_), new Wn(_), new ht.graph.DefaultInteractor(_), new ht.graph.TouchInteractor(_, {
				editable: !1
			})]), _
		}
		return LV(V, q), V.prototype.getLabel = function(q) {
			return _("url:" + q.url, !0) || this.getEditingLabel(q)
		}, V.prototype.isEditable = function(q) {
			return this.editable
		}, V.prototype.getEditingLabel = function(q) {
			return q.s("label") || q.getName()
		}, V.prototype.rename = function(q, V) {
			this.editor.renameFile(q, V) && (q.s("label") ? q.s("label", V) : q.setName(V))
		}, V.prototype.handleDelete = function() {
			this.editable && hV.config.removeFileByKeyboardEnabled && this.explorer.deleteSelection(this)
		}, V.prototype.beginEditing = function(q) {
			var V = this,
				n = {
					data: q,
					url: q.url
				};
			if(this.editor.fireEvent("fileRenaming", n), !n.preventDefault) {
				this.cancelEditing(), this.makeVisible(q), this.validate();
				var S = this.getDataUI(q),
					_ = !1,
					x = void 0;
				if(S && S.labelInfo && S.labelInfo.rect ? x = S.labelInfo.rect : q.fileType === mV && (x = q.getRect(), _ = !0), x) {
					var O = void 0,
						w = void 0,
						K = void 0,
						g = void 0;
					if(_) O = x.x, w = x.y, K = x.width, g = x.height;
					else if(this._layoutType === kV) O = this._rowHeight, w = q.p().y - this._rowHeight / 2, K = this.getWidth() - O, g = this._rowHeight;
					else {
						var A = S.labelInfo.rect || q.getRect();
						O = q.p().x - q.getWidth() / 2, w = A.y, K = q.getWidth(), g = A.height
					}
					w += this.ty(), this._currentEditor = new ht.widget.TextField, this._currentEditor.data = q;
					var l = this._currentEditor.getElement(),
						Z = this.getEditingLabel(q);
					l.value = null == Z ? "" : Z, l.onblur = function(q) {
						V.endEditing()
					}, l.onkeydown = function(q) {
						N(q) ? V.endEditing() : U(q) && V.cancelEditing()
					}, this.getView().appendChild(this._currentEditor.getView()), Y(this._currentEditor, O, w, K, g), this._currentEditor.setFocus(), ht.Default.callLater(l.select, l)
				}
			}
		}, V.prototype.endEditing = function() {
			var q = this._currentEditor;
			q && (this.rename(q.data, q.getValue()), delete this._currentEditor, L(q.getView()), this.redraw())
		}, V.prototype.cancelEditing = function() {
			var q = this._currentEditor;
			q && (delete this._currentEditor, L(q.getView()), this.redraw())
		}, V.prototype._clearDragInfo = function() {
			this.editor.dnd.hideTip(), this._dragInfo && (this._dragInfo = null, this.redraw())
		}, V.prototype.handleDragAndDrop = function(q, V) {
			if("prepare" === V) return void this._clearDragInfo();
			"begin" === V && (this._dragInfo = {
				tip: this.$2$(),
				view: this
			});
			var n = this._dragInfo;
			if(n) {
				var S = this.editor.dnd;
				if("begin" === V || "between" === V) {
					var _ = this.getView().contains(b(q));
					return _ ? (n.inView = !0, this._dragging(q, n), S.clearDropView(q, n)) : (n.inView && this.redraw(), n.inView = !1, S.crossDrag(q, n)), void S.showTip(n.tip, q)
				}
				return "end" === V ? (n.inView ? this._endDrag(q, n) : S.crossDrop(q, n), void this._clearDragInfo()) : "cancel" === V ? (n.inView || S.crossCancel(q, n), void this._clearDragInfo()) : void 0
			}
		}, V.prototype._dragging = function(q, V) {
			if(this.editable) {
				var n = this.getDataAt(q);
				n && n.fileType === mV ? V.targetData = n : V.targetData = null, this.autoScroll(q), this.redraw()
			}
		}, V.prototype.$2$ = function() {
			var q = "";
			if(this.draggingData && (q = this.getLabel(this.draggingData), this.isSelected(this.draggingData))) {
				var V = this.sm().size();
				q += V > 1 ? " (+" + V + ") " : ""
			}
			return q
		}, V.prototype._endDrag = function(q, V) {}, V.prototype.handleSelectionChange = function(V) {
			q.prototype.handleSelectionChange.call(this, V), this.redraw()
		}, V.prototype.handleCrossDrag = function(q, V, n) {
			if(this.editable) return "exit" === V || "cancel" === V ? (this._crossDragInfo = null, void this.redraw()) : "enter" === V || "over" === V ? (this._crossDragInfo || (this._crossDragInfo = {}), void this._dragging(q, this._crossDragInfo)) : "drop" === V ? (this._endCrossDrag(q, n), this._crossDragInfo = null, void this.redraw()) : void 0
		}, V.prototype._endCrossDrag = function(q, V) {
			if(this.editable && this._crossDragInfo) {
				var n = this._crossDragInfo.targetData;
				if(n && n.fileType === mV || (n = this.dm().sm().ld()), n) {
					var S = V.view;
					"displays" === this.explorer.rootDir && S instanceof dn && this.handleDisplayTreeDrop(S, n), S === this.editor.dndFromOutside && this.editor.dropLocalFileOnDir(q, n)
				}
			}
		}, V
	}(yn);
	I(Pn, {
		ms_ac: ["layoutType", "fileSize", "fileGap", "rowHeight", "maxFileSize"],
		_fileRect: {
			x: 0,
			y: 0,
			width: 0,
			height: 0
		},
		_layoutType: rV,
		_fileSize: 50,
		_fileGap: 6,
		_rowHeight: 21,
		_maxFileSize: 200
	});
	var En = {
			layoutType: !0,
			fileSize: !0,
			fileGap: !0,
			rowHeight: !0,
			visibleFunc: !0
		},
		Yn = function(q) {
			function V(n) {
				var S = arguments.length <= 1 || void 0 === arguments[1] || arguments[1];
				YV(this, V);
				var _ = QV(this, q.call(this, n, S));
				return _.nodes = [], _.doLayoutBind = _.doLayout.bind(_), _.dm().sm().ms(function() {
					_.sm().cs(), _.doLayoutLater()
				}), _.dm().mm(function() {
					_.doLayoutLater()
				}), _.addInteractorListener(_.handleInteraction.bind(_)), _.addBottomPainter(_.paintBottom.bind(_)), _.addTopPainter(_.paintTop.bind(_)), _
			}
			return LV(V, q), V.prototype.getDataAt = function(V) {
				if(this._layoutType === kV) {
					var n = Math.floor(this.lp(V).y / this._rowHeight);
					return this.nodes[n]
				}
				return q.prototype.getDataAt.call(this, V)
			}, V.prototype.paintBottom = function(q) {
				var V = this,
					n = this._rowHeight,
					S = this.getWidth();
				this.nodes.forEach(function(_) {
					if(V.isSelected(_))
						if(V._layoutType === kV) q.beginPath(), q.rect(0, _.p().y - n / 2, S, n), q.fillStyle = hV.config.color_select, q.fill();
						else {
							var x = _.getRect();
							f(q, hV.config.color_select, x.x - 2, x.y - 2, x.width + 4, x.height + 4, 1)
						}
				})
			}, V.prototype.paintTop = function(q) {
				q.texureImage2D = !0;
				var V = void 0;
				if(this._dragInfo && this._dragInfo.inView ? V = this._dragInfo : this._crossDragInfo && (V = this._crossDragInfo), V) {
					var n = hV.config.color_select_dark,
						S = V.targetData;
					if(q.texureImage2D = !0, S)
						if(this._layoutType === kV) {
							var _ = 0,
								x = S.p().y - this._rowHeight / 2,
								O = this.getWidth(),
								w = this._rowHeight;
							f(q, n, _, x, O, w, 2)
						} else {
							var K = S.getRect();
							q.beginPath(), q.rect(K.x, K.y, K.width, K.height), q.lineWidth = 2, q.strokeStyle = hV.config.color_select_dark, q.stroke()
						}
					else {
						var g = this.getViewRect();
						f(q, n, g.x, g.y, g.width, g.height, 2)
					}
				}
			}, V.prototype.toDraggingDatas = function(q) {
				var V = [];
				return this.isSelected(this.draggingData) ? (this.sm().toSelection().each(function(q) {
					q.fileType !== mV && V.push(q)
				}), q && V.reverse()) : this.draggingData.fileType !== mV && V.push(this.draggingData), V
			}, V.prototype.isDroppable = function(q, V) {
				return "displays" === this.explorer.rootDir && V.view instanceof dn || V.view === this.editor.dndFromOutside
			}, V.prototype._endDrag = function(q, V) {
				var n = this,
					S = V.targetData;
				S && (this.isSelected(this.draggingData) ? this.sm().toSelection().each(function(q) {
					n.editor.moveFile(q, S)
				}) : this.editor.moveFile(this.draggingData, S))
			}, V.prototype.handleDisplayTreeDrop = function(q, V) {
				var n = this,
					S = void 0;
				S = q.isSelected(q.draggingData) ? q.getTopRowOrderSelection().toArray() : [q.draggingData];
				var x = {};
				S.forEach(function(q) {
					o(q, x)
				});
				var O = new ht.JSONSerializer(q.getDataModel(), (!0));
				O.isSerializable = function(q) {
					return x[q._id]
				};
				var w = O.serialize(),
					K = _("editor.inputnewdisplayname") + " [" + V.url + "]";
				$q(K, q.getLabel(q.draggingData), {
					nullable: !1,
					trim: !0,
					maxLength: hV.config.maxFileNameLength
				}, function(q, S) {
					"ok" === S && ! function() {
						xq(q) || (q += ".json");
						var S = V.url + "/" + q,
							_ = {
								path: S,
								content: w
							};
						n.editor.request("upload", _, function(q) {
							q === !0 && ! function() {
								var q = n.editor.gv,
									V = q.isVisible;
								q.isVisible = function(n) {
									return V.call(q, n) && x[n._id]
								}, n.editor.saveImage(q, S.substr(0, S.length - 5) + ".png"), q.isVisible = V, q.redraw()
							}(), n.editor.fireEvent("displayViewSaved", {
								url: S
							})
						})
					}()
				})
			}, V.prototype.handleDataDoubleSelect = function(q, V) {
				if(this.isEditable(V)) {
					var n = this.lp(q);
					if(this._layoutType === kV) n.x > this._rowHeight && this.beginEditing(V);
					else {
						var S = this.getDataUI(V);
						S && S.labelInfo && S.labelInfo.rect && ht.Default.containsPoint(S.labelInfo.rect, n) && this.beginEditing(V)
					}
				}
			}, V.prototype.getLabelColor = function(q) {
				return q !== this.draggingData || this.isSelected(q) ? this._layoutType === kV ? this.isSelected(q) ? hV.config.color_light : ht.Default.labelColor : this.isSelected(q) ? hV.config.color_select : ht.Default.labelColor : hV.config.color_select
			}, V.prototype.handleInteraction = function(q) {
				var V = q.kind,
					n = q.data,
					S = q.event;
				if("doubleClickData" === V) 1 === this.sm().size() && (n.fileType === mV ? this.dm().sm().ss(n) : this.editor.open(n, F(S)));
				else if("doubleClickBackground" === q.kind) {
					var _ = this.dm().sm().ld();
					_ && _.getParent() && this.dm().sm().ss(_.getParent())
				}
			}, V.prototype.handleScroll = function(q, V) {
				r(q), F(q) ? V > 0 ? this.setFileSize(Math.min(this.getFileSize() + 2, this.getMaxFileSize())) : this.setFileSize(Math.max(this.getFileSize() - 2, 1)) : (Sn || q.wheelDelta !== q.wheelDeltaX) && (V = Sn ? -q.detail : q.wheelDelta / 40, this.translate(0, 20 * V))
			}, V.prototype.handlePinch = function(q, V, n) {
				n < V ? this.setFileSize(Math.min(this.getFileSize() + 2, this.getMaxFileSize())) : this.setFileSize(Math.max(this.getFileSize() - 2, 1))
			}, V.prototype.onPropertyChanged = function(q) {
				Pn.prototype.onPropertyChanged.apply(this, arguments), En[q.property] && this.doLayoutLater()
			}, V.prototype.isVisible = function(q) {
				if(this._visibleFunc && this._visibleFunc(q) === !1) return !1;
				var V = this.dm().sm().ld();
				return !(!V || q.getParent() !== V) && q.fileType !== tV
			}, V.prototype.isMovable = function() {
				return !1
			}, V.prototype.onValidated = function() {
				this._lastWidth === this.getWidth() && this._lastHeight === this.getHeight() || this.doLayoutLater()
			}, V.prototype.adjustTranslateX = function() {
				return 0
			}, V.prototype.adjustTranslateY = function(q) {
				var V = this.getHeight() - this._fileRect.height;
				return q < V && (q = V), q > 0 ? 0 : Math.round(q)
			}, V.prototype.getContentRect = function() {
				return this._fileRect
			}, V.prototype.doLayoutLater = function() {
				this._doLayoutLater || (this._doLayoutLater = !0, requestAnimationFrame(this.doLayoutBind))
			}, V.prototype.doLayout = function() {
				var q = this;
				this._doLayoutLater = !1, this.redraw();
				var V = this.nodes = [];
				this.dm().getDatas().each(function(n) {
					q.isVisible(n) && V.push(n)
				});
				var n = this._lastWidth = this.getWidth();
				this._lastHeight = this.getHeight();
				var S = this._fileGap;
				if(this._layoutType === kV) {
					for(var _ = this._rowHeight, x = Math.max(_ - 4, 2), O = 0; O < V.length; O++) {
						var w = V[O];
						w.setPosition(S + x / 2, _ * O + 2 + x / 2), w.setSize(x, x), w.s({
							"label.position": 20,
							"label.offset.x": 3,
							"label.offset.y": 0,
							"label.max": void 0
						})
					}
					this._fileRect = {
						x: 0,
						y: 0,
						width: n,
						height: _ * V.length
					}
				} else {
					for(var K = this._fileSize, g = K + S, A = K + S + 16, l = S, Z = S, z = 0, H = 0; H < V.length; H++) {
						var i = V[H];
						i.setPosition(l + K / 2, Z + K / 2), i.setSize(K, K), i.s({
							"label.position": 31,
							"label.offset.x": 0,
							"label.offset.y": 2,
							"label.max": K
						}), (z + 2) * g + S > n ? (l = S, H !== V.length - 1 && (Z += A), z = 0) : (l += g, z++)
					}
					this._fileRect = {
						x: 0,
						y: 0,
						width: n,
						height: Z + A
					}
				}
				this.tx(this.tx()), this.ty(this.ty()), this.showScrollBar()
			}, V
		}(Pn),
		Mn = function(q) {
			function V(n, S, _, x) {
				YV(this, V);
				var O = QV(this, q.call(this));
				O.setSize(20, 20), O._id = O.url = S ? S + "/" + _ : _, O.path = S, O.value = x, O.rootDir = n;
				var w = tV,
					K = void 0,
					g = "editor.unknown";
				return O.s({
					"select.width": 0,
					pixelPerfect: !1,
					"image.stretch": "centerUniform"
				}), "" === S ? (w = sV, g = "editor.root.state") : Zq(x) ? lq(x.fileType) ? (w = x.fileType, K = x.fileIcon, g = x.fileImage || K, g || x.fileType !== mV || (g = "editor.dir"), O.a(x.attrs), O.s(x.styles)) : (w = mV, g = "editor.dir") : _q(_) && "assets" === n ? (w = DV, g = gq(_) ? "editor.dxf.state" : Oq(_) ? "editor.sound.state" : wq(_) ? "editor.video.state" : O.url) : xq(_) && "displays" === n ? (w = fV, g = Aq(O.url), O.s("label", P(_))) : xq(_) && "symbols" === n ? (w = TV, g = Aq(O.url), O.s("label", P(_))) : xq(_) && "components" === n ? (w = BV, g = Aq(O.url), O.s("label", P(_))) : xq(_) && "scenes" === n ? (w = oV, g = Aq(O.url), O.s("label", P(_))) : xq(_) && "models" === n && (w = IV, g = Aq(O.url), O.s("label", P(_))), O.fileType = w, O.setIcon(K), O.setImage(g), O.setName(_), O
			}
			return LV(V, q), V
		}(ht.Node);
	ht.Default.setCompType("accordion-title-comp", function(q, V, n, S, _) {
		var x = hV.config.drawAccordionTitle;
		if(x) return void x(q, V, S, _, {
			isHover: S.__hover,
			isExpanded: S.expanded,
			hoverColor: hV.config.color_hover,
			selectColor: hV.config.color_select
		});
		var O = S.__hover,
			w = V.x,
			K = V.y,
			g = V.width,
			A = V.height,
			l = _.getLabel(S),
			Z = 8,
			z = _.getFileGap();
		q.save(), (O || _.isSelected(S)) && (q.fillStyle = hV.config.color_hover, q.fillRect(w, K, g, A)), q.fillStyle = hV.config.color_select, q.fillRect(w + z, K + (A - Z) / 2, Z, Z), l && ht.Default.drawText(q, l, "bold 14px Arial", "black", w + z + Z + 8, K, 200, A, "left", "middle"), q.restore()
	}), ht.Default.setImage("accordion-title", {
		width: 160,
		height: 24,
		fitSize: !0,
		pixelPerfect: !1,
		interactive: !0,
		boundExtend: 2,
		onDown: function(q, V, n, S, _, x) {
			ht.Default.isLeftButton(q) && (n.getMutex() && !V.expanded && n.dirs.forEach(function(q) {
				q !== V && (q.expanded = !1)
			}), V.expanded = !V.expanded, n.ivm())
		},
		onEnter: function(q, V, n, S, _, x) {
			V.__hover = !0, V.iv()
		},
		onLeave: function(q, V, n, S, _, x) {
			V.__hover = !1, V.iv()
		},
		comps: [{
			type: "accordion-title-comp",
			displayName: "clock-pointer",
			rect: [0, 0, 160, 24]
		}]
	});
	var Ln = {
			layoutType: !0,
			fileSize: !0,
			fileGap: !0,
			rowHeight: !0,
			filePadding: !0,
			titleHeight: !0
		},
		Qn = function(q) {
			function V(n) {
				var S = arguments.length <= 1 || void 0 === arguments[1] || arguments[1];
				YV(this, V);
				var _ = QV(this, q.call(this, n, S));
				return _.setFileGap(10), _.setMutex(hV.config.accordionMutex), _.nodes = [], _.dirs = [], _.bottomRects = [], _.addViewListener(function(q) {
					"beginValidate" === q.kind && _.doLayout()
				}), _.setSelectionModelShared(!1), _.dm().sm().ms(function() {
					_.sm().cs()
				}), _._layouted = !1, _.mi(_.handleInteraction.bind(_)), _.addBottomPainter(_.paintBottom.bind(_)), _.addTopPainter(_.paintTop.bind(_)), _
			}
			return LV(V, q), V.prototype.paintBottom = function(q) {
				var V = this,
					n = this._rowHeight,
					S = this.getWidth();
				this.nodes.forEach(function(_) {
					if(V._layoutType === kV) V.isSelected(_) && (q.beginPath(), q.rect(0, _.p().y - n / 2, S, n), q.fillStyle = hV.config.color_select, q.fill());
					else {
						var x = V.isSelected(_) ? hV.config.color_select : hV.config.color_mask,
							O = _.getRect(),
							w = O.x,
							K = O.y,
							g = O.width,
							A = O.height,
							l = V._filePadding;
						f(q, x, w - l, K - l, g + 2 * l, A + 2 * l, 1)
					}
				}), this.bottomRects.forEach(function(V) {
					var n = V.x,
						S = V.y,
						_ = V.width,
						x = V.height;
					q.beginPath(), q.lineWidth = 2, q.strokeStyle = hV.config.color_hover, q.moveTo(n + 10, S + x / 2), q.lineTo(n + _ - 10, S + x / 2), q.stroke()
				})
			}, V.prototype.isDroppable = function(q, V) {
				return "displays" === this.explorer.rootDir && V.view instanceof dn || V.view === this.editor.dndFromOutside
			}, V.prototype.handleDragAndDrop = function(V, n) {
				var S = this.draggingData;
				S && S.fileType !== mV && q.prototype.handleDragAndDrop.call(this, V, n)
			}, V.prototype.isLabelVisible = function(q) {
				return q.fileType !== mV
			}, V.prototype.paintTop = function(q) {
				q.texureImage2D = !0;
				var V = void 0;
				if(this._dragInfo && this._dragInfo.inView ? V = this._dragInfo : this._crossDragInfo && (V = this._crossDragInfo), V) {
					var n = hV.config.color_select_dark,
						S = V.targetData;
					if(q.texureImage2D = !0, S) {
						var _ = S.getRect();
						q.beginPath(), q.rect(_.x, _.y, _.width, _.height), q.lineWidth = 2, q.strokeStyle = hV.config.color_select_dark, q.stroke()
					} else {
						var x = this.getViewRect();
						f(q, n, x.x, x.y, x.width, x.height, 2)
					}
				}
			}, V.prototype.getDataAt = function(V) {
				if(this._layoutType !== kV) return q.prototype.getDataAt.call(this, V);
				var n = q.prototype.getDataAt.call(this, V);
				if(n) return n;
				for(var S = this.lp(V).y, _ = 0; _ < this.nodes.length; _++) {
					var x = this.nodes[_],
						O = x.getY(),
						w = this._rowHeight,
						K = O - w / 2,
						g = O + w / 2;
					if(S >= K && S < g) return x
				}
			}, V.prototype.handleInteraction = function(q) {
				var V = q.kind,
					n = q.data,
					S = q.event;
				"doubleClickData" === V && 1 === this.sm().size() && this.editor.open(n, F(S))
			}, V.prototype.handleDataDoubleSelect = function(q, V) {
				if(this.isEditable(V)) {
					var n = this.lp(q);
					if(V.fileType !== mV)
						if(this._layoutType === kV) n.x > this._rowHeight && this.beginEditing(V);
						else {
							var S = this.getDataUI(V);
							S && S.labelInfo && S.labelInfo.rect && ht.Default.containsPoint(S.labelInfo.rect, n) && this.beginEditing(V)
						}
				}
			}, V.prototype.getLabelColor = function(q) {
				return q !== this.draggingData || this.isSelected(q) ? this._layoutType === kV ? this.isSelected(q) ? hV.config.color_light : ht.Default.labelColor : this.isSelected(q) ? hV.config.color_select : ht.Default.labelColor : hV.config.color_select
			}, V.prototype.isVisible = function(q) {
				if(!this._layouted) return !1;
				if(this._visibleFunc && this._visibleFunc(q) === !1) return !1;
				var V = this.explorer.rootDir,
					n = q.getParent();
				return !(q.fileType === tV || !n) && (!(this._visibleFunc && !this._visibleFunc(q)) && (n.url === V && q.fileType === mV || !(!n.getParent() || n.getParent().url !== V || q.fileType === mV) && !!n.expanded))
			}, V.prototype.adjustTranslateX = function(q) {
				return 0
			}, V.prototype.adjustTranslateY = function(q) {
				if(!this.contentHeight) return 0;
				var V = this.getViewRect(),
					n = V.height - this.contentHeight;
				return q >= 0 || n >= 0 ? 0 : q > n ? q : n
			}, V.prototype.getImage = function(q) {
				if(q.getImage) return q.fileType === mV ? "accordion-title" : q.getImage()
			}, V.prototype.doLayout = function() {
				var q = this;
				if(this._lastWidth !== this.getWidth() || this._lastHeight !== this.getHeight() || this._lastFileSize !== this.getFileSize()) {
					this._doLayoutLater = !1, this.redraw();
					var V = this.dirs = [],
						n = this.nodes = [],
						S = this.bottomRects = [];
					this.dm().each(function(n) {
						q.isVisible(n) && n.fileType === mV && V.push(n)
					});
					var _ = this._lastWidth = this.getWidth(),
						x = this._titleHeight,
						O = 0,
						w = 0;
					this._lastHeight = this.getHeight(), this._lastFileSize = this._fileSize, this._expandIds && (this.dirs.forEach(function(V) {
						V.expanded = q._expandIds.indexOf(V.getId()) >= 0
					}), delete this._expandIds), V.forEach(function(V) {
						V.setAnchor(0, 0), V.p(O, w), V.setSize(_, x), V.s("label", null), w += x;
						var K = [];
						V.getChildren().each(function(V) {
							q.isVisible(V) && (K.push(V), n.push(V))
						}), w = q.layoutChildren(K, w), V.expanded && (S.push({
							x: 0,
							y: w,
							width: _,
							height: 16
						}), w += 16)
					}), this.contentHeight = w, this._layouted = !0
				}
			}, V.prototype.layoutChildren = function(q, V) {
				var n = this;
				if(!q || 0 === q.length) return V;
				var S = this._fileGap;
				if(this._layoutType === kV) {
					var _ = function() {
						var _ = n._rowHeight,
							x = Math.max(_ - 4, 15);
						return q.forEach(function(q, n) {
							q.setPosition(S + x / 2, V + 2 + x / 2), q.setSize(x, x), q.s({
								"label.position": 20,
								"label.offset.x": 3,
								"label.offset.y": 0,
								"label.max": void 0
							}), V += _
						}), {
							v: V
						}
					}();
					if("object" == typeof _) return _.v
				} else {
					var x = function() {
						var _ = n.getWidth(),
							x = n._fileSize,
							O = n._filePadding,
							w = x + 2 * O,
							K = S,
							g = V + S,
							A = 0,
							l = x + S + 2 * O,
							Z = x + S + 16 + 2 * O;
						return q.forEach(function(V, n) {
							V.setPosition(K + w / 2, g + w / 2), V.setSize(x, x), V.s({
								"label.position": 31,
								"label.offset.x": 0,
								"label.offset.y": 2 + O,
								"label.max": w
							}), (A + 2) * l + S > _ ? (K = S, n !== q.length - 1 && (g += Z), A = 0) : (K += l, A++)
						}), {
							v: g + Z
						}
					}();
					if("object" == typeof x) return x.v
				}
			}, V.prototype.handleScroll = function(q) {
				var V = Sn ? -q.detail : q.wheelDelta / 10;
				(Sn || q.wheelDelta !== q.wheelDeltaX) && this.translate(0, V)
			}, V.prototype.adjustZoom = function() {
				return 1
			}, V.prototype.onPropertyChanged = function(V) {
				q.prototype.onPropertyChanged.call(this, V);
				var n = V.property;
				"dataModel" !== n && "fileSize" !== n || this.doLayout()
			}, V.prototype._endDrag = function(q, V) {
				var n = this,
					S = V.targetData;
				S && S.fileType === mV && (this.isSelected(this.draggingData) ? this.sm().toSelection().each(function(q) {
					n.editor.moveFile(q, S)
				}) : this.editor.moveFile(this.draggingData, S), this.doLayout(), this.redraw())
			}, V.prototype.toDraggingDatas = function(q) {
				var V = [];
				return this.isSelected(this.draggingData) ? (this.sm().toSelection().each(function(q) {
					q.fileType !== mV && V.push(q)
				}), q && V.reverse()) : this.draggingData.fileType !== mV && V.push(this.draggingData), V
			}, V.prototype.invalidateModel = function() {
				this._lastWidth = null, this.iv()
			}, V.prototype.ivm = function() {
				this.invalidateModel()
			}, V.prototype.getContentRect = function() {
				return {
					x: 0,
					y: 0,
					width: this.getWidth(),
					height: this.contentHeight || 0
				}
			}, V.prototype.onPropertyChanged = function(V) {
				q.prototype.onPropertyChanged.apply(this, arguments), Ln[V.property] && this.ivm()
			}, MV(V, [{
				key: "expandIds",
				get: function() {
					var q = [];
					return this.dirs.forEach(function(V) {
						V.expanded && q.push(V.getId())
					}), q
				},
				set: function(q) {
					this._expandIds = q, this._lastWidth = null
				}
			}]), V
		}(Pn);
	I(Qn, {
		ms_ac: ["filePadding", "titleHeight", "mutex"],
		_mutex: !1,
		_filePadding: 6,
		_titleHeight: 36
	});
	var Fn = function(q) {
		function V(n, S) {
			var _ = arguments.length <= 2 || void 0 === arguments[2] || arguments[2];
			YV(this, V);
			var x = QV(this, q.call(this));
			x.editor = n, x.rootDir = S, x.copyFileInfos = [], x.dataModel = new ht.DataModel, x.dataModel.setAutoAdjustIndex(!1);
			var O = x.mode = hV.config.explorerMode;
			O === RV && (x.accordion = new Qn(x, _)), x.tree = new un(x, _), x.list = new Yn(x, _), x.controlPane = new aV, x.controlPane.addRow([{
				id: "url",
				textField: {
					editable: !1
				}
			}, {
				id: "slider",
				slider: {
					min: 1,
					max: x.getFileListView().getMaxFileSize(),
					step: 1,
					onValueChanged: function(q, V) {
						x.getFileListView().setFileSize(V), x.getFileListView().setLayoutType(V > 16 ? rV : kV)
					}
				}
			}], [.1, ht.Default.isTouchable ? 70 : 50]);
			var w = x.controlPane.getItemById("slider").element;
			return w.getToolTip = function() {}, x.getFileListView().mp(function(q) {
				"fileSize" === q.property && w.setValue(q.newValue)
			}), x.bottomPane = new jn, x.bottomPane.setCenterView(x.getFileListView()), x.bottomPane.setBottomView(x.controlPane), x.bottomPane.setBottomHeight(ht.Default.widgetRowHeight + 8), x.setOrientation("vertical"), O === RV ? (x.setLeftView(x.bottomPane), x.setPosition(1), x.accordion.sm().ms(function() {
				x.$52$(x.accordion)
			}), x.accordion.setFileSize(hV.config.fileSize), x.setDraggable(!1)) : (x.setLeftView(x.tree), x.setRightView(x.bottomPane), x.setPosition(hV.config.explorerSplitViewPosition), x.list.setSelectionModelShared(!1), x.list.sm().ms(function() {
				x.$52$(x.list)
			}), x.list.setFileSize(hV.config.fileSize)), x.tree.menu = new pn, x.treeMenuItems = [], x.initTreeMenu(x.tree.menu, x.treeMenuItems), x.tree.menu.setItems(x.treeMenuItems), x.tree.menu.addTo(x.tree.getView()), x.editor.menus.push(x.tree.menu), x.list.menu = new pn, x.listMenuItems = [], x.initListMenu(x.list.menu, x.listMenuItems), x.list.menu.setItems(x.listMenuItems), x.list.menu.addTo(x.list.getView()), x.editor.menus.push(x.list.menu), x.isAccordionMode() && (x.accordion.menu = new pn, x.accordionMenuItems = [], x.initAccordionMenu(x.accordion.menu, x.accordionMenuItems), x.accordion.menu.setItems(x.accordionMenuItems), x.accordion.menu.addTo(x.accordion.getView()), x.editor.menus.push(x.accordion.menu)), x
		}
		return LV(V, q), V.prototype.$52$ = function(q) {
			var V = q.sm().ld();
			this.controlPane.v("url", V ? V.url : "")
		}, V.prototype.isAccordionMode = function() {
			return this.mode === RV
		}, V.prototype.parse = function(q) {
			var V = void 0,
				n = void 0,
				S = void 0,
				_ = void 0;
			this.mode === RV ? (n = this.accordion.expandIds, V = this.accordion.ty()) : (V = this.tree.ty(), n = this.tree.expandIds, S = this.tree.selectionIds, _ = this.tree.dm().size()), this.dataModel.clear();
			var x = this.rootNode = new Mn(this.rootDir, "", this.rootDir);
			this.dataModel.add(x);
			var O = void 0;
			q.fileType === mV || q.fileType === sV ? (x.a(q.attrs), x.s(q.styles), q.fileIcon && (x.setIcon(q.fileIcon), x.setImage(q.fileIcon)), O = q.children) : O = q;
			for(var w in O) this.parseChild(x, w, O[w]);
			var K = this.dataModel.getDatas(),
				g = {};
			K.toArray().forEach(function(q, V) {
				g[q._id] = V
			}), K.sort(function(q, V) {
				return q.fileType === sV ? -1 : V.fileType === sV ? 1 : q.fileType === mV && V.fileType !== mV ? -1 : q.fileType !== mV && V.fileType === mV ? 1 : g[q._id] - g[V._id]
			}), this.mode === RV ? (this.accordion.expandIds = n, this.accordion.ty(V)) : (this.tree.expandIds = n, this.tree.selectionIds = S, this.tree.ty(V), 0 === _ && (this.tree.expand(this.rootNode), this.tree.sm().ss(this.rootNode)));
			var A = {
				explorer: this
			};
			this.editor.fireEvent("explorerUpdated", A)
		}, V.prototype.parseChild = function(q, V, n) {
			var S = new Mn(this.rootDir, q.url, V, n);
			S.setParent(q), this.dataModel.add(S);
			var _ = void 0;
			n.fileType === mV ? _ = n.children : S.fileType === mV && (_ = n);
			for(var x in _) this.parseChild(S, x, _[x]);
			return S
		}, V.prototype.deleteSelection = function(q) {
			var V = this,
				n = [];
			if(q.sm().getTopSelection().forEach(function(q) {
					var S = {
						data: q,
						url: q.url
					};
					V.editor.fireEvent("fileDeleting", S), S.preventDefault || n.push(q)
				}), n.length) {
				var S = q.getLabel(n[0]) || n[0].getName(),
					x = _("editor.delete") + " [" + S + "]";
				n.length > 1 && (x += " (" + n.length + ")"), tq(x, _("editor.deleteselection"), function() {
					V.editor.removeFiles(n)
				}, function() {})
			}
		}, V.prototype.$53$ = function(q) {
			var V = this;
			q.push("separator"), q.push({
				id: "expandAll",
				label: _("editor.expandall"),
				action: function() {
					V.tree.expandAll()
				}
			}), q.push({
				id: "collapseAll",
				label: _("editor.collapseall"),
				action: function() {
					V.tree.collapseAll()
				}
			})
		}, V.prototype.addDeleteItem = function(q, V) {
			var n = this;
			q.push({
				id: "delete",
				label: _("editor.delete"),
				action: function() {
					n.deleteSelection(V)
				},
				visible: function() {
					var q = V.sm().ld();
					
					return V.sm().ld() && V.isEditable(V.sm().ld())
				}
			})
		}, V.prototype.addNewFolderItem = function(q, V) {
			var n = this;
			q.push({
				id: "newFolder",
				label: _("editor.newfolder"),
				action: function() {
					n.editor.newFolder(V)
				},
				visible: function() {
					return V.editable
				}
			})
		}, V.prototype.addLocateTreeFileItem = function(q) {
			var V = this;
			hV.config.locateFileEnabled && q.push({
				id: "locateFile",
				label: _("editor.locatefile"),
				action: function() {
					var q = V.tree.sm().ld() || V.rootNode;
					V.editor.locate(q)
				}
			})
		}, V.prototype.addLocateListFileItem = function(q) {
			var V = this;
			hV.config.locateFileEnabled && q.push({
				id: "locateFile",
				label: _("editor.locatefile"),
				action: function() {
					var q = V.ld || V.tree.sm().ld() || V.rootNode;
					V.editor.locate(q)
				}
			})
		}, V.prototype.$55$ = function(q) {
			var V = this;
			q.push({
				id: "open",
				label: _("editor.open"),
				action: function() {
					V.editor.open(V.ld)
				},
				visible: function() {
					var q = V.ld;

					return !!q && (q.fileType === fV || q.fileType === TV || q.fileType === BV || q.fileType === oV)
				}
			})
		}, V.prototype.addExportItem = function(q) {
			var V = this;
			q.push({
				id: "export",
				label: _("editor.export"),
				action: function() {
					var q = [],
						n = V.getFileListView().sm();
					n.size() > 0 && (n.each(function(V) {
						q.push(V.url)
					}), V.editor.request("export", q))
				},
				visible: function() {
					var q = V.getFileListView().sm().ld();
					return !!q && (q.fileType === fV || q.fileType === TV || q.fileType === BV || q.fileType === oV)
				}
			})
		}, V.prototype.addRenameItem = function(q, V) {
			var n = this;
			q.push({
				id: "rename",
				label: _("editor.rename"),
				action: function() {
					var q = V.sm().ld();

					q && q !== n.rootNode && V.beginEditing(q)
				},
				visible: function() {
					var q = V.sm().ld();
					
					return q && V.isEditable(q)
				}
			})
		}, V.prototype.addPublishedItem = function(q) {
			var V = this;
			q.push({
				id: "published",
				label: '发布到公共资源',
				action: function() {
					var node = editor.symbols.accordion.sm().ld();
					debugger;
				},
				visible: function() {
					var q = V.getFileListView().sm().ld();
					
					return false;
				}
			})
		}, V.prototype.addInsertItem = function(q) {
			var V = this;
			q.push({
				id: "insert",
				label: _("editor.insert"),
				action: function() {
					V.editor.$100$(V.getFileListView().sm().ld())
				},
				visible: function() {
					var q = V.getFileListView().sm().ld();
					return !!q && (!!V.editor.gv && (V.editor.url !== q.url && (q.fileType === BV ? !!V.editor.symbolView : q.fileType === TV || q.fileType === DV)))
				}
			})
		}, V.prototype.addCopyItem = function(q) {
			var V = this;
			q.push({
				id: "copy",
				label: _("editor.copy"),
				action: function() {
					V.copyFiles()
				},
				visible: function() {
					if(!V.getFileListView().editable) return !1;
					var q = V.getFileListView().sm().ld();
					return !(!q || q === V.rootNode)
				}
			})
		}, V.prototype.addPasteItem = function(q) {
			var V = this;
			q.push({
				id: "paste",
				label: _("editor.paste"),
				action: function() {
					V.pasteFiles()
				},
				visible: function() {
					var q = V.ld;
					
					return !!V.getFileListView().editable && (!V.isAccordionMode() || !!V.ld)
				}
			})
		}, V.prototype.copyFiles = function() {
			var q = this;
			this.copyFileInfos.length = 0, this.getFileListView().sm().each(function(V) {
				if(V.fileType !== sV && V.fileType !== mV && V.fileType !== tV) {
					var n = {
						url: V.url,
						name: V.getName()
					};
					q.copyFileInfos.push(n), q.loadFileInfo(n)
				}
			})
		}, V.prototype.loadFileInfo = function(q) {
			var V = q.url;
			if(this.editor.requestBase64(V, function(V) {
					q.content = V
				}), xq(V)) {
				var n = Aq(V);
				this.dataModel.getDataById(n) && this.editor.requestBase64(n, function(V) {
					q.image = V
				})
			}
		}, V.prototype.pasteFiles = function() {
			var q = this;
			this.copyFileInfos.forEach(function(V) {
				if(V.content) {
					var n = V.url,
						S = void 0,
						_ = 2,
						x = q.currentDir + "/" + P(V.name),
						O = n.substring(n.lastIndexOf("."), n.length);
					for(S = x + O; q.dataModel.getDataById(S);) S = x + " " + _++ + O;
					var w = {
						path: S,
						content: V.content
					};
					q.editor.request("upload", w), V.image && (w.path = Aq(S), w.content = V.image, q.editor.request("upload", w))
				}
			})
		}, V.prototype.enableDroppableToSymbolView = function() {
			var q = this.list;
			this.mode === RV && (q = this.accordion), q.isDroppableToSymbolView = !0
		}, V.prototype.enableDroppableToDisplayView = function() {
			var q = this.list;
			this.mode === RV && (q = this.accordion), q.isDroppableToDisplayView = !0
		}, V.prototype.getFileListView = function() {
			return this.mode === RV ? this.accordion : this.list
		}, V.prototype.initTreeMenu = function(q, V) {}, V.prototype.initListMenu = function(q, V) {}, V.prototype.initAccordionMenu = function(q, V) {}, MV(V, [{
			key: "currentDir",
			get: function() {
				var q = void 0;
				return this.isAccordionMode() ? (q = this.ld, q && q.fileType !== mV && (q = q.getParent()), q ? q.url : this.accordion.dirs[this.accordion.dirs.length - 1].url) : (q = this.tree.sm().ld(), q ? q.url : this.rootDir)
			}
		}, {
			key: "ld",
			get: function() {
				return this.getFileListView().sm().ld()
			}
		}]), V
	}(bn);
	hV.Explorer = Fn;
	var an = function(q) {
			function V(n) {
				var S = arguments.length <= 1 || void 0 === arguments[1] || arguments[1];
				YV(this, V);
				var _ = QV(this, q.call(this, n, "displays", S));
				return _.enableDroppableToDisplayView(), _
			}
			return LV(V, q), V.prototype.initTreeMenu = function(q, V) {
				this.addLocateTreeFileItem(V), this.addNewFolderItem(V, this.tree), this.addNewDisplayItem(V, this.tree), this.addRenameItem(V, this.tree), this.addDeleteItem(V, this.tree), this.$53$(V)
			}, V.prototype.initListMenu = function(q, V) {
				this.$55$(V), this.addLocateListFileItem(V), this.addNewFolderItem(V, this.list), this.addNewDisplayItem(V, this.list), this.addCopyItem(V), this.addPasteItem(V), this.addRenameItem(V, this.list), this.addDeleteItem(V, this.list), this.addExportItem(V)
			}, V.prototype.initAccordionMenu = function(q, V) {
				this.$55$(V), this.addLocateListFileItem(V), this.addNewFolderItem(V, this.accordion), this.addNewDisplayItem(V, this.accordion), this.addCopyItem(V), this.addPasteItem(V), this.addRenameItem(V, this.accordion), this.addDeleteItem(V, this.accordion), this.addExportItem(V)
			}, V.prototype.addNewDisplayItem = function(q, V) {
				var n = this;
				q.push({
					id: "newDisplayView",
					label: _("editor.newdisplayview"),
					action: function() {
						if(hteditor_config.displayNumber < 1){
                    		editor.showMessage('创建图纸个数达到上限！');
                    		return
                    	}
						createDisplaysDialog();
						//n.editor.newDisplayView(), n.editor.save()
					},
					visible: function() {
						if(!V.editable) return !1;
						if(n.isAccordionMode()) {
							var q = n.accordion.sm().ld();
							return q && q.fileType === mV
						}
						return !0
					}
				})
			}, V
		}(Fn),
		hn = function(q) {
			function V(n) {
				var S = arguments.length <= 1 || void 0 === arguments[1] || arguments[1];
				YV(this, V);
				var _ = QV(this, q.call(this, n, "symbols", S));
				return _.enableDroppableToDisplayView(), _.enableDroppableToSymbolView(), _
			}
			return LV(V, q), V.prototype.initTreeMenu = function(q, V) {
				this.addLocateTreeFileItem(V), this.addNewFolderItem(V, this.tree), this.addNewSymbolItem(V, this.tree), this.addRenameItem(V, this.tree), this.addDeleteItem(V, this.tree), this.$53$(V)
			}, V.prototype.initListMenu = function(q, V) {
				this.$55$(V), this.addInsertItem(V), this.addLocateListFileItem(V), this.addNewFolderItem(V, this.list), this.addNewSymbolItem(V, this.list), this.addCopyItem(V), this.addPasteItem(V), this.addRenameItem(V, this.list), this.addDeleteItem(V, this.list), this.addExportItem(V)
			}, V.prototype.initAccordionMenu = function(q, V) {
				this.$55$(V), this.addInsertItem(V), this.addLocateListFileItem(V), this.addNewFolderItem(V, this.accordion), this.addNewSymbolItem(V, this.accordion), this.addCopyItem(V), this.addPasteItem(V), this.addRenameItem(V, this.accordion), this.addDeleteItem(V, this.accordion), this.addExportItem(V)
				,this.addPublishedItem(V)
			}, V.prototype.addNewSymbolItem = function(q, V) {
				var n = this;
				q.push({
					id: "newSymbolView",
					label: _("editor.newsymbolview"),
					action: function() {
						createSymbolsDialog();
						//n.editor.newSymbolView(), n.editor.save()
					},
					visible: function() {
						return V.editable
					}
				})
			}, V
		}(Fn),
		$n = function(q) {
			function V(n) {
				var S = arguments.length <= 1 || void 0 === arguments[1] || arguments[1];
				YV(this, V);
				var _ = QV(this, q.call(this, n, "components", S));
				return _.enableDroppableToSymbolView(), _
			}
			return LV(V, q), V.prototype.initTreeMenu = function(q, V) {
				this.addLocateTreeFileItem(V), this.addNewFolderItem(V, this.tree), this.addNewComponentItem(V, this.tree), this.addRenameItem(V, this.tree), this.addDeleteItem(V, this.tree), this.$53$(V)
			}, V.prototype.initListMenu = function(q, V) {
				this.$55$(V), this.addInsertItem(V), this.addLocateListFileItem(V), this.addNewFolderItem(V, this.list), this.addNewComponentItem(V, this.list), this.addCopyItem(V), this.addPasteItem(V), this.addRenameItem(V, this.list), this.addDeleteItem(V, this.list), this.addExportItem(V)
			}, V.prototype.initAccordionMenu = function(q, V) {
				this.$55$(V), this.addInsertItem(V), this.addLocateListFileItem(V), this.addNewFolderItem(V, this.accordion), this.addNewComponentItem(V, this.accordion), this.addCopyItem(V), this.addPasteItem(V), this.addRenameItem(V, this.accordion), this.addDeleteItem(V, this.accordion), this.addExportItem(V)
			}, V.prototype.addNewComponentItem = function(q, V) {
				var n = this;
				q.push({
					id: "newComponent",
					label: _("editor.newcomponent"),
					action: function() {
						n.editor.newComponent()
					},
					visible: function() {
						return V.editable
					}
				})
			}, V
		}(Fn),
		tn = function(q) {
			function V(n) {
				var S = arguments.length <= 1 || void 0 === arguments[1] || arguments[1];
				YV(this, V);
				var _ = QV(this, q.call(this, n, "scenes", S));
				return _.enableDroppableToDisplayView(), _
			}
			return LV(V, q), V.prototype.initTreeMenu = function(q, V) {}, V.prototype.initListMenu = function(q, V) {}, V.prototype.initAccordionMenu = function(q, V) {}, V
		}(Fn),
		sn = function(q) {
			function V(n) {
				var S = arguments.length <= 1 || void 0 === arguments[1] || arguments[1];
				YV(this, V);
				var _ = QV(this, q.call(this, n, "models", S));
				return _.enableDroppableToDisplayView(), _
			}
			return LV(V, q), V.prototype.initTreeMenu = function(q, V) {}, V.prototype.initListMenu = function(q, V) {}, V.prototype.initAccordionMenu = function(q, V) {}, V
		}(Fn),
		mn = function(q) {
			function V(n) {
				var S = arguments.length <= 1 || void 0 === arguments[1] || arguments[1];
				YV(this, V);
				var _ = QV(this, q.call(this, n, "assets", S));
				return _.enableDroppableToDisplayView(), _.enableDroppableToSymbolView(), _
			}
			return LV(V, q), V.prototype.initTreeMenu = function(q, V) {
				this.addLocateTreeFileItem(V), this.addNewFolderItem(V, this.tree), this.addRenameItem(V, this.tree), this.addDeleteItem(V, this.tree), this.$53$(V)
			}, V.prototype.initListMenu = function(q, V) {
				this.addInsertItem(V), this.addLocateListFileItem(V), this.addNewFolderItem(V, this.list), this.addCopyItem(V), this.addPasteItem(V), this.addRenameItem(V, this.list), this.addDeleteItem(V, this.list), this.$54$(V)
			}, V.prototype.initAccordionMenu = function(q, V) {
				this.addInsertItem(V), this.addLocateListFileItem(V), this.addNewFolderItem(V, this.accordion), this.addCopyItem(V), this.addPasteItem(V), this.addRenameItem(V, this.accordion), this.addDeleteItem(V, this.accordion), this.$54$(V)
			}, V.prototype.$54$ = function(q) {
				var V = this;
				q.push("separator"), q.push({
					id: "convertToDisplay",
					label: _("editor.converttodisplay"),
					action: function() {
						V.editor.open(V.getFileListView().sm().ld(), !1)
					},
					visible: function() {
						var q = V.getFileListView().sm().ld();
						return !!q && (Kq(q.url) || gq(q.url))
					}
				}), q.push({
					id: "convertToSymbol",
					label: _("editor.converttosymbol"),
					action: function() {
						V.editor.open(V.getFileListView().sm().ld(), !0)
					},
					visible: function() {
						var q = V.getFileListView().sm().ld();
						return !!q && (Kq(q.url) || gq(q.url))
					}
				})
			}, V
		}(Fn),
		Dn = function(q) {
			function V(n) {
				YV(this, V);
				var S = QV(this, q.call(this));
				return S.editor = n, S
			}
			return LV(V, q), V.prototype.$6$ = function(q) {
				this.setGraphView(this.editor.gv)
			}, V
		}(en),
		Tn = function(q) {
			function V(n) {
				var S = arguments.length <= 1 || void 0 === arguments[1] || arguments[1];
				YV(this, V);
				var _ = QV(this, q.call(this));
				_.editView = n, _.editor = n.editor, _.editable = S, _._topCanvas = t(), _._topDiv = s(), _._view.insertBefore(_._topCanvas, _._scrollBarDiv), _._view.insertBefore(_._topDiv, _._scrollBarDiv);
				var x = [];
				return _.menu = new pn(x), _.initMenuItems(x), _.menu.addTo(_.getView()), _.editor.menus.push(_.menu), _.addTopPainter(function(q) {
					return q.texureImage2D = !0
				}), _
			}
			return LV(V, q), V.prototype.isEditable = function(V) {
				return !!this.editable && q.prototype.isEditable.call(this, V)
			}, V.prototype.isMovable = function(V) {
				return !!this.editable && q.prototype.isMovable.call(this, V)
			}, V.prototype.onGroupDoubleClicked = function(V, n, S) {
				this.editable && q.prototype.onGroupDoubleClicked.call(this, V, n, S)
			}, V.prototype.onEdgeDoubleClicked = function(V, n, S) {
				this.editable && q.prototype.onEdgeDoubleClicked.call(this, V, n, S)
			}, V.prototype.checkDoubleClickOnNote = function(V, n) {
				return !!this.editable && q.prototype.checkDoubleClickOnNote.call(this, V, n)
			}, V.prototype.$57$ = function(q) {
				var V = this;
				q.push({
					id: "copy",
					label: _("editor.copy"),
					action: function() {
						V.editor.copy()
					},
					visible: function() {
						return !!V.editor.ld
					}
				}), q.push({
					id: "paste",
					label: _("editor.paste"),
					action: function() {
						V.editor.paste()
					},
					visible: function() {
						return V.editor.hasCopyInfo()
					}
				})
			}, V.prototype.$56$ = function(q) {
				var V = this;
				q.push({
					separator: !0,
					visible: function() {
						return !!V.editor.ld
					}
				}), q.push({
					id: "bringToFront",
					label: _("editor.bringtofront"),
					action: function() {
						V.editor.bringToFront()
					},
					visible: function() {
						return !!V.editor.ld
					}
				}), q.push({
					id: "bringForward",
					label: _("editor.bringforward"),
					action: function() {
						V.editor.bringForward()
					},
					visible: function() {
						return !!V.editor.ld
					}
				}), q.push({
					id: "sendBackward",
					label: _("editor.sendbackward"),
					action: function() {
						V.editor.sendBackward()
					},
					visible: function() {
						return !!V.editor.ld
					}
				}), q.push({
					id: "sendToBack",
					label: _("editor.sendtoback"),
					action: function() {
						V.editor.sendToBack()
					},
					visible: function() {
						return !!V.editor.ld
					}
				})
			}, V.prototype.initMenuItems = function(q) {}, V.prototype.onClosed = function() {
				x(this.editor.menus, this.menu)
			}, V.prototype.$58$ = function(q) {
				return q && this.copyMap[q._id] ? q._id : q
			}, V.prototype.$50$ = function(q, V) {
				return q instanceof ht.Data ? this.dm().contains(q) ? q : void 0 : V[q]
			}, V.prototype.getSelectWidth = function(q) {
				return !this.isEditable(q) || q instanceof ht.Edge ? q.s("select.width") : 0
			}, V.prototype.onSelectionChanged = function(q) {
				if(1 === this.sm().size() && ("set" === q.kind || "append" === q.kind)) {
					var V = this.sm().ld();
					V && document.activeElement === this.getView() && this._dataModel.isAutoAdjustIndex() && this.adjustIndex(V)
				}
			}, V.prototype.getContentRect = function() {
				var V = q.prototype.getContentRect.call(this);
				return V.width && V.height || (V = {
					x: 0,
					y: 0,
					width: this.dm().a("width") || 100,
					height: this.dm().a("height") || 100,
					empty: !0
				}), V
			}, V.prototype.isDroppable = function(q, V) {
				return !1
			}, V.prototype.$59$ = function(q) {
				if(this.dragImage) {
					var V = hV.config.dragImageSize,
						n = c(q);
					this.dragImage.style.left = n.x - V / 2 + "px", this.dragImage.style.top = n.y - V / 2 + "px"
				}
			}, V.prototype.removeDragImage = function() {
				this.dragImage && (L(this.dragImage), this.dragImage = null)
			}, V.prototype.handleCrossDrag = function(q, V, n) {
				var S = this,
					_ = n.view,
					x = _.draggingData;
				if("enter" === V) {
					if(this._topDiv.style.border = "solid " + hV.config.color_select_dark + " 2px", !this.dragImage && x) {
						var O = void 0 === x.a("dragImage") ? x.getImage() : x.a("dragImage");
						if(ht.Default.getImage(O) !== ht.Default.getImage("editor.unknown")) {
							var w = hV.config.dragImageSize;
							this.dragImage = ht.Default.toCanvas(O, w, w, "centerUniform", x, n.view, null, ht.Default.devicePixelRatio), this.$59$(q), this.dragImage.style.opacity = hV.config.dragImageOpacity, this.dragImage.className = "ht-editor-dnd-image", ht.Default.appendToScreen(this.dragImage)
						}
					}
				} else "exit" === V || "cancel" === V ? (this._topDiv.style.border = "", this.removeDragImage()) : "over" === V ? this.$59$(q) : "drop" === V && (this._topDiv.style.border = "", x ? ! function() {
					S.removeDragImage();
					var V = S.lp(q);
					_.isSelected(x) ? _.sm().toSelection().each(function(n) {
						_.handleDropToEditView ? _.handleDropToEditView(S.editView, n, V, q) : S.editor.$100$(n, V)
					}) : _.handleDropToEditView ? _.handleDropToEditView(S.editView, x, V, q) : S.editor.$100$(x, V)
				}() : _ === this.editor.dndFromOutside && this.editor.dropLocalFileOnGraphView(q))
			}, V
		}(yn),
		fn = function(q) {
			function V(n) {
				return YV(this, V), QV(this, q.call(this, n))
			}
			return LV(V, q), V.prototype.handleDataModelChange = function(V) {
				q.prototype.handleDataModelChange.call(this, V), this.editor && this.editor.fireEvent("displayViewDataModelChanged", {
					displayView: this.editView,
					event: V
				})
			}, V.prototype.handleDataModelPropertyChange = function(V) {
				q.prototype.handleDataModelPropertyChange.call(this, V), this.editor && this.editor.fireEvent("displayViewDataModelPropertyChanged", {
					displayView: this.editView,
					event: V
				})
			}, V.prototype.handleDataPropertyChange = function(V) {
				q.prototype.handleDataPropertyChange.call(this, V), this.editor && this.editor.fireEvent("displayViewDataPropertyChanged", {
					displayView: this.editView,
					event: V
				})
			}, V.prototype.initMenuItems = function(q) {
				this.$57$(q), this.$56$(q), this.addBlockItems(q)
			}, V.prototype.isDroppable = function(q, V) {
				return !!V.view.isDroppableToDisplayView
			}, V.prototype.isSelectable = function(V, n) {
				return !V._refGraph && q.prototype.isSelectable.call(this, V, n)
			}, V.prototype.addBlockItems = function(q) {
				var V = this,
					n = function() {
						return V.sm().size() > 0
					},
					S = function() {
						for(var q = 0; q < V.sm().size(); q++) {
							var n = V.sm().getSelection().get(q);
							if(n instanceof ht.Block && !(n instanceof ht.RefGraph)) return !0
						}
						return !1
					};
				q.push({
					separator: !0,
					visible: function() {
						return n() || S()
					}
				}), q.push({
					id: "block",
					label: _("editor.block"),
					action: function() {
						V.editor.block()
					},
					visible: n
				}), q.push({
					id: "unblock",
					label: _("editor.unblock"),
					action: function() {
						V.editor.unblock()
					},
					visible: S
				})
			}, V
		}(Tn),
		Bn = function(q) {
			function V(n, S, _) {
				YV(this, V);
				var x = QV(this, q.call(this));
				return x.defaultValueMap = {}, x.parse(n, S, _), x
			}
			return LV(V, q), V.prototype.toLabel = function() {
				return this.getDisplayName() || this.s("type") || _("editor.comptype.comp")
			}, V.prototype.getClass = function() {
				return V
			}, V.prototype.getStyle = function(V, n) {
				var S = q.prototype.getStyle.call(this, V, n);
				return void 0 === S && (S = this.defaultValueMap[V]), S
			}, V.prototype.$61$ = function(q) {
				var V = this;
				this.properties && (this.properties = null), this.disableDirty = !0, this.defaultValueMap = {};
				var n = this.s("type"),
					S = ht.Default.getCompType(n);
				S ? ! function() {
					V.$60$ = null;
					var n = {
						cache: S,
						width: {
							value: 100,
							isSafeFunc: !0,
							func: function(q) {
								return q._width
							}
						},
						height: {
							value: 100,
							isSafeFunc: !0,
							func: function(q) {
								return q._height
							}
						},
						comps: [{
							type: {
								func: function(q) {
									return q.compType
								},
								isSafeFunc: !0
							}
						}]
					};
					if(!S.width || V._width > 0 || V.setWidth(S.width), !S.height || V._height > 0 || V.setHeight(S.height), S.properties) {
						V.properties = S.properties;
						for(var _ in V.properties) {
							var x = V.properties[_];
							n.comps[0][_] = {
								func: "style@" + _
							}, q ? Cq(V, _, q[_], x.defaultValue) : void 0 === V.s(_) && Cq(V, _, void 0, x.defaultValue), V.defaultValueMap[_] = x.defaultValue
						}
					}
					var O = hV.config.customProperties.comp;
					O && O.length && O.forEach(function(q) {
						var V = q.property;
						n.comps[0][V] = {
							func: "style@" + V
						}
					}), V.setImage(n), V.ivLater()
				}() : (this.$60$ = q, "editor.comp" !== this.getImage() && (this.setImage("editor.comp"), this.ivLater())), this.disableDirty = !1
			}, V.prototype.ivLater = function() {
				var q = this;
				ht.Default.callLater(function() {
					q.disableDirty = !0, q.iv(), q.disableDirty = !1
				})
			}, V.prototype.onStyleChanged = function(V, n, S) {
				q.prototype.onStyleChanged.call(this, V, n, S), "type" === V && this.$61$(this.parsingComp)
			}, V.prototype.parse = function(q, V, n) {
				q && (this.parsingComp = q, Cq(this, "type", q.type), this.$61$(q), cq(this, q, V, n), this.parsingComp = null)
			}, V.prototype.toJSON = function() {
				var q = {};
				if(yq(this, q, "type", "type", void 0), Jq(this, q), this.properties)
					for(var V in this.properties) {
						var n = this.properties[V];
						yq(this, q, V, V, n.defaultValue)
					}
				return q
			}, MV(V, [{
				key: "compType",
				get: function() {
					var q = this.s("type");
					return this.$60$ ? this.$61$(this.$60$) : q && ht.Default.getCompType(q) !== this.getImage().cache && this.$61$(), q
				}
			}]), V
		}(ht.Node),
		In = function(q) {
			function V(n, S, _) {
				YV(this, V);
				var x = QV(this, q.call(this));
				return x.s({
					border_color: hV.config.color_dark,
					border_width: 1
				}), x.setImage("border_image"), x.parse(n, S, _), x
			}
			return LV(V, q), V.prototype.getClass = function() {
				return V
			}, V.prototype.toLabel = function() {
				return this.getDisplayName() || _("editor.comptype.border")
			}, V.prototype.parse = function(q, V, n) {
				q && (Cq(this, "type", q.type, "border"), Cq(this, "border_color", q.color, hV.config.color_dark), Cq(this, "border_width", q.width, 1), cq(this, q, V, n))
			}, V.prototype.toJSON = function() {
				var q = {};
				return yq(this, q, "type", "type", void 0), yq(this, q, "border_color", "color", void 0), yq(this, q, "border_width", "width", void 0), Jq(this, q), q
			}, MV(V, [{
				key: "compType",
				get: function() {
					return this.s("type")
				}
			}]), V
		}(ht.Node),
		on = function(q) {
			function V(n, S, _) {
				YV(this, V);
				var x = QV(this, q.call(this));
				return x.setSize(100, 100), x.setImage("pieChart_image"), x.s({
					"chart.label": !1,
					"chart.label.color": ht.Default.labelColor,
					"chart.label.font": ht.Default.labelFont,
					"chart.hollw": !1,
					"chart.start.angle": 0,
					"chart.values": [],
					"chart.colors": void 0
				}), x.parse(n, S, _), x
			}
			return LV(V, q), V.prototype.getClass = function() {
				return V
			}, V.prototype.toLabel = function() {
				return this.getDisplayName() || _("editor.comptype.piechart")
			}, V.prototype.parse = function(q, V, n) {
				q && (Cq(this, "chart.type", q.type, "pieChart"), Cq(this, "chart.label", q.label, !1), Cq(this, "chart.label.color", q.labelColor, ht.Default.labelColor), Cq(this, "chart.label.font", q.labelFont, ht.Default.labelFont), Cq(this, "chart.hollow", q.hollow, !1), Cq(this, "chart.start.angle", q.startAngle, 0), Cq(this, "chart.values", q.values, []), Cq(this, "chart.colors", q.colors, void 0), cq(this, q, V, n))
			}, V.prototype.toJSON = function() {
				var q = {};
				return yq(this, q, "chart.type", "type", void 0), yq(this, q, "chart.label", "label", !1), yq(this, q, "chart.label.color", "labelColor", ht.Default.labelColor), yq(this, q, "chart.label.font", "labelFont", ht.Default.labelFont), yq(this, q, "chart.hollow", "hollow", !1), yq(this, q, "chart.start.angle", "startAngle", 0), yq(this, q, "chart.values", "values", []), yq(this, q, "chart.colors", "colors", void 0), Jq(this, q), q
			}, MV(V, [{
				key: "compType",
				get: function() {
					return this.s("chart.type")
				}
			}]), V
		}(ht.Node),
		rn = function(q) {
			function V(n, S, _) {
				YV(this, V);
				var x = QV(this, q.call(this));
				return x.setSize(100, 100), x.setImage("columnChart_image"), x.s({
					"chart.label": !1,
					"chart.label.color": ht.Default.labelColor,
					"chart.label.font": ht.Default.labelFont,
					"chart.series": [],
					"chart.min.value": 0,
					"chart.max.value": void 0
				}), x.parse(n, S, _), x
			}
			return LV(V, q), V.prototype.getClass = function() {
				return V
			}, V.prototype.toLabel = function() {
				return this.getDisplayName() || _("editor.comptype.columnchart")
			}, V.prototype.parse = function(q, V, n) {
				q && (Cq(this, "chart.type", q.type, void 0), Cq(this, "chart.label", q.label, !1), Cq(this, "chart.label.color", q.labelColor, ht.Default.labelColor), Cq(this, "chart.label.font", q.labelFont, ht.Default.labelFont), Cq(this, "chart.series", q.series, []), Cq(this, "chart.min.value", q.minValue, 0), Cq(this, "chart.max.value", q.maxValue, void 0), cq(this, q, V, n))
			}, V.prototype.toJSON = function() {
				var q = {};
				return yq(this, q, "chart.type", "type", void 0), yq(this, q, "chart.label", "label", !1), yq(this, q, "chart.label.color", "labelColor", ht.Default.labelColor), yq(this, q, "chart.label.font", "labelFont", ht.Default.labelFont), yq(this, q, "chart.series", "series", []), yq(this, q, "chart.min.value", "minValue", 0), yq(this, q, "chart.max.value", "maxValue", void 0), Jq(this, q), q
			}, MV(V, [{
				key: "compType",
				get: function() {
					return this.s("chart.type")
				}
			}]), V
		}(ht.Node),
		kn = function(q) {
			function V(n, S, _) {
				YV(this, V);
				var x = QV(this, q.call(this));
				return x.setSize(100, 100), x.setImage("lineChart_image"), x.s({
					"chart.label": !1,
					"chart.label.color": ht.Default.labelColor,
					"chart.label.font": ht.Default.labelFont,
					"chart.series": [],
					"chart.min.value": 0,
					"chart.max.value": void 0,
					"chart.line.point": !1,
					"chart.line.width": 2,
					"chart.line.3d": !1
				}), x.parse(n, S, _), x
			}
			return LV(V, q), V.prototype.getClass = function() {
				return V
			}, V.prototype.toLabel = function() {
				return this.getDisplayName() || _("editor.comptype.linechart")
			}, V.prototype.parse = function(q, V, n) {
				q && (Cq(this, "chart.type", q.type, void 0), Cq(this, "chart.label", q.label, !1), Cq(this, "chart.label.color", q.labelColor, ht.Default.labelColor), Cq(this, "chart.label.font", q.labelFont, ht.Default.labelFont), Cq(this, "chart.series", q.series, []), Cq(this, "chart.min.value", q.minValue, 0), Cq(this, "chart.max.value", q.maxValue, void 0), Cq(this, "chart.line.point", q.linePoint, !1), Cq(this, "chart.line.width", q.lineWidth, 2), Cq(this, "chart.line.3d", q.line3d, !1), cq(this, q, V, n))
			}, V.prototype.toJSON = function() {
				var q = {};
				return yq(this, q, "chart.type", "type", void 0), yq(this, q, "chart.label", "label", !1), yq(this, q, "chart.label.color", "labelColor", ht.Default.labelColor), yq(this, q, "chart.label.font", "labelFont", ht.Default.labelFont), yq(this, q, "chart.series", "series", []), yq(this, q, "chart.min.value", "minValue", 0), yq(this, q, "chart.max.value", "maxValue", void 0), yq(this, q, "chart.line.point", "linePoint", !1), yq(this, q, "chart.line.width", "lineWidth", 2), yq(this, q, "chart.line.3d", "line3d", !1), Jq(this, q), q
			}, MV(V, [{
				key: "compType",
				get: function() {
					return this.s("chart.type")
				}
			}]), V
		}(ht.Node),
		Rn = function(q) {
			function V(n, S, _) {
				YV(this, V);
				var x = QV(this, q.call(this, n.getView().graphView));
				return x.tab = n, x.editView = n.getView(), x.editor = x.editView.editor, x.clazz = S, x.type = _, x
			}
			return LV(V, q), V.prototype.beginTransaction = function() {
				this._isBeginTransaction || (this._isBeginTransaction = !0, this.dm.beginTransaction())
			}, V.prototype.endTransaction = function() {
				this._isBeginTransaction && (this._isBeginTransaction = !1, this.dm.endTransaction())
			}, V.prototype.getDataAt = function(q) {
				return this.gv.getDataAt(q)
			}, V.prototype.getNodeAt = function(q) {
				var V = this.getDataAt(q);
				return V instanceof ht.Node ? V : null
			}, V.prototype.setUp = function() {
				q.prototype.setUp.call(this), this.sm.cs()
			}, V.prototype.$0$ = function(q) {}, V.prototype.drawRect = function(q, V, n, S) {
				V = this.toRect(V), S && (q.fillStyle = S), n && (q.strokeStyle = n), q.lineWidth = 1, q.beginPath(), q.rect(V.x, V.y, V.width, V.height), q.stroke(), S && q.fill(), n && q.stroke()
			}, V.prototype.drawPoint = function(q, V, n, S, _) {
				V = this.toPoint(V), _ && (q.fillStyle = _), S && (q.strokeStyle = S), q.lineWidth = 1, q.beginPath(), q.arc(V.x, V.y, n, 0, 2 * Math.PI, !0), _ && q.fill(), S && q.stroke()
			}, V.prototype.drawPoints = function(q, V, n, S, _) {
				for(var x = 0; x < V.length; x++) this.drawPoint(q, V[x], n, S, _)
			}, V.prototype.drawLine = function(q, V, n, S) {
				V = this.toPoint(V), n = this.toPoint(n), q.lineWidth = 1, q.strokeStyle = S, q.beginPath(), q.moveTo(V.x, V.y), q.lineTo(n.x, n.y), q.stroke()
			}, V.prototype.toRect = function(q) {
				var V = this.zoom;
				return {
					x: q.x * V + this.tx,
					y: q.y * V + this.ty,
					width: q.width * V,
					height: q.height * V
				}
			}, V.prototype.toPoint = function(q) {
				return {
					x: q.x * this.zoom + this.tx,
					y: q.y * this.zoom + this.ty
				}
			}, V.prototype.add = function(q) {
				this.editView.addData(q)
			}, V.prototype.remove = function(q) {
				this.dm.remove(q)
			}, V.prototype.lp = function(q) {
				return this.gv.lp(q)
			}, MV(V, [{
				key: "dm",
				get: function() {
					return this.gv.dm()
				}
			}, {
				key: "sm",
				get: function() {
					return this.gv.dm().sm()
				}
			}, {
				key: "zoom",
				get: function() {
					return this.gv.getZoom()
				}
			}, {
				key: "tx",
				get: function() {
					return this.gv.tx()
				}
			}, {
				key: "ty",
				get: function() {
					return this.gv.ty()
				}
			}]), V
		}(ht.graph.Interactor),
		qS = function(q) {
			function V(n, S, _) {
				return YV(this, V), QV(this, q.call(this, n, S, _))
			}
			return LV(V, q), V.prototype.tearDown = function() {
				q.prototype.tearDown.call(this), this.node = this.p1 = this.p2 = null
			}, V.prototype.$49$ = function(q) {
				this.node ? this.remove(this.node) : this.editView.$5$("edit")
			}, V.prototype.handle_mousedown = function(q) {
				this.handle_touchstart(q)
			}, V.prototype.handle_touchstart = function(q) {
				r(q), p(q) && (this.gv.setFocus(q), this.p1 = this.lp(q), this.startDragging(q))
			}, V.prototype.handleWindowMouseMove = function(q) {
				this.handleWindowTouchMove(q)
			}, V.prototype.handleWindowMouseUp = function(q) {
				this.handleWindowTouchEnd(q)
			}, V.prototype.handleWindowTouchMove = function(q) {
				if(r(q), this.p1) {
					this.p2 = this.lp(q);
					var V = G(this.p1, this.p2);
					if(this.node) this.node.setRect(V);
					else {
						if(!V.width || !V.height) return;
						this.beginTransaction(), this.createNode(V, !1)
					}
				}
			}, V.prototype.handleWindowTouchEnd = function(q) {
				if(r(q), this.endTransaction(), !this.node && this.p1 && this.createNode({
						x: this.p1.x - 25,
						y: this.p1.y - 25,
						width: 50,
						height: 50
					}, !0), this.node) {
					var V = "display" === this.editView.type ? "dataCreated" : "compCreated",
						n = {
							data: this.node
						};
					n["display" === this.editView.type ? "displayView" : "symbolView"] = this.editView, this.editor.fireEvent(V, n)
				}
				hV.config.continuousCreating ? this.node = this.p1 = this.p2 = null : this.editView.$5$("edit")
			}, V.prototype.createNode = function(q, V) {
				zq(this.type) ? this.node = this.type(q, V) : this.node = new this.clazz, V ? this.node.setPosition(q.x + q.width / 2, q.y + q.height / 2) : this.node.setRect(q), this.node.setParent(this.editView.graphView.getCurrentSubGraph()), this.dm.add(this.node), this.dm.sm().ss(this.node), this.editView.graphView.setFocus()
			}, V.prototype.$0$ = function(q) {
				this.node && this.drawRect(q, this.node.getRect(), hV.config.color_data_border)
			}, V
		}(Rn),
		VS = function(q) {
			function V(n, S, _) {
				return YV(this, V), QV(this, q.call(this, n, S, _))
			}
			return LV(V, q), V.prototype.tearDown = function() {
				q.prototype.tearDown.call(this), this.draggingPoint = this.n1 = this.n2 = null
			}, V.prototype.$49$ = function(q) {
				this.n1 ? (this.draggingPoint = this.n1 = this.n2 = null, this.editView.validateCanvas()) : this.editView.$5$("edit")
			}, V.prototype.$0$ = function(q) {
				if(this.n1 && (this.drawRect(q, this.gv.getNodeRect(this.n1), hV.config.color_data_border), this.draggingPoint && this.drawLine(q, this.n1.p(), this.draggingPoint, hV.config.color_data_border)), this.n2) {
					var V = this.gv.getNodeRect(this.n2);
					this.n1 !== this.n2 && this.drawRect(q, V, hV.config.color_data_border);
					var n = this.toPoint({
							x: V.x,
							y: V.y
						}),
						S = 3;
					q.beginPath(), q.moveTo(n.x, n.y - 15 - S), q.lineTo(n.x + 10, n.y - 15 - S), q.lineTo(n.x + 10, n.y - S), q.lineTo(n.x + 5, n.y - 7 - S), q.moveTo(n.x + 10, n.y - S), q.lineTo(n.x + 15, n.y - 7 - S), q.lineWidth = 1, q.strokeStyle = hV.config.color_data_border, q.stroke()
				}
			}, V.prototype.handle_mousemove = function(q) {
				if(r(q), !this.draggingPoint) {
					var V = this.getNodeAt(q);
					V !== this.n1 && (this.n1 = V, this.editView.validateCanvas())
				}
			}, V.prototype.handle_mousedown = function(q) {
				this.handle_touchstart(q)
			}, V.prototype.handle_touchstart = function(q) {
				r(q), p(q) && (this.gv.setFocus(q), this.draggingPoint || (this.n1 = this.getNodeAt(q), this.n1 && (this.draggingPoint = this.lp(q), this.startDragging(q))))
			}, V.prototype.handleWindowMouseMove = function(q) {
				this.handleWindowTouchMove(q)
			}, V.prototype.handleWindowMouseUp = function(q) {
				this.handleWindowTouchEnd(q)
			}, V.prototype.handleWindowTouchMove = function(q) {
				var V = this.getNodeAt(q);
				this.draggingPoint = this.lp(q), this.autoScroll(q), (hV.config.edgeLoop || this.n1 !== V) && (this.n2 = V), this.editView.validateCanvas()
			}, V.prototype.handleWindowTouchEnd = function(q) {
				if(this.n1 && this.n2) {
					var V = void 0;
					lq(this.type) ? (V = new this.clazz(this.n1, this.n2), V.s("edge.type", this.type)) : V = zq(this.type) ? this.type(this.n1, this.n2) : new this.clazz(this.n1, this.n2), this.add(V), hV.config.continuousCreating || this.editView.$5$("edit")
				}
				this.draggingPoint = this.n1 = this.n2 = null, this.editView.validateCanvas()
			}, V
		}(Rn),
		nS = function(q) {
			function V(n, S, _) {
				YV(this, V);
				var x = QV(this, q.call(this, n, S, _));
				return x.points = [], x.segments = [], x.nextPoint = null, x
			}
			return LV(V, q), V.prototype.tearDown = function() {
				q.prototype.tearDown.call(this), this.points = [], this.segments = [], this.nextPoint = null, this.isBreak = !1
			}, V.prototype.$49$ = function(q) {
				this.isBreak ? this.createShape() : (this.preCtrl = null, this.isBreak = !0, this.editView.validateCanvas())
			}, V.prototype.createShape = function() {
				if(this.points.length > 1) {
					var q = void 0;
					zq(this.type) ? q = this.type(this.points, this.segments) : (q = new this.clazz, q.setPoints(this.points), q.setSegments(this.segments)), this.add(q)
				}
				this.editView.$5$("edit"), this.editor.pointsEditingMode = !0
			}, V.prototype.handle_mousedown = function(q) {
				this.handle_touchstart(q)
			}, V.prototype.handle_touchstart = function(q) {
				if(r(q), p(q)) {
					if(this.gv.setFocus(q), y(q)) this.createShape();
					else {
						var V = this.judgeNextPoint(q, !0);
						if(this.points.length) {
							var n = this.points[this.points.length - 1];
							if(Math.abs(n.x - V.x) < .01 && Math.abs(n.y - V.y) < .01) return
						}
						this.preCtrl ? (this.points.push(this.preCtrl), this.points.push(V), this.points.push(V), this.segments.push(4), this.preCtrl = null) : (this.isBreak ? (this.segments.push(1), this.isBreak = !1) : this.segments.push(this.points.length > 0 ? 2 : 1), this.points.push(V)), this.nextPoint = this.lp(q), this.editView.validateCanvas()
					}
					this.downPoint = this.lp(q), this.startDragging(q), this._dragging = !0
				}
			}, V.prototype.judgeNextPoint = function(q, V) {
				var n = this.lp(q);
				if(this._dragging || this.isBreak && !V) return null;
				if(ht.Default.isShiftDown() && this.points.length > 0) {
					var S = this.points[this.points.length - 1],
						_ = n.x - S.x,
						x = n.y - S.y,
						O = Math.atan2(x, _),
						w = ht.Default.getDistance(S, n),
						K = O % (Math.PI / 4);
					return O -= K, Math.abs(K) > Math.PI / 8 && (K > 0 ? O += Math.PI / 4 : O -= Math.PI / 4), {
						x: S.x + Math.cos(O) * w,
						y: S.y + Math.sin(O) * w
					}
				}
				var g = this.gv.getEditInteractor(),
					A = g.gridGuide.findClosest(n);
				return A && (A.x && (n.x += A.x), A.y && (n.y += A.y)), n
			}, V.prototype.handle_mousemove = function(q) {
				this.nextPoint = this.judgeNextPoint(q), this.editView.validateCanvas()
			}, V.prototype.handle_touchend = function(q) {}, V.prototype.handle_mouseup = function(q) {
				this.handle_touchend(q)
			}, V.prototype.handleWindowTouchMove = function(q) {
				return this.handleWindowMouseMove(q)
			}, V.prototype.updateCtrl = function(q) {
				var V = this.points.length,
					n = this.points[V - 1],
					S = this.downPoint,
					_ = this.lp(q),
					x = this.gv.getZoom(),
					O = ht.Default.getDistance(S, _),
					w = this.segments[this.segments.length - 1];
				if(O * x > 5) {
					if(ht.Default.isShiftDown()) {
						var K = Math.abs;
						K(n.x - _.x) >= K(n.y - _.y) ? _.y = n.y : _.x = n.x
					} else {
						var g = this.gv.getEditInteractor(),
							A = g.gridGuide.findClosest(_);
						A && (A.x && (_.x += A.x), A.y && (_.y += A.y))
					}
					var l = {
						x: 2 * n.x - _.x,
						y: 2 * n.y - _.y
					};
					4 === w ? this.points[V - 2] = l : 1 !== w && (this.segments.pop(), this.segments.push(4), this.points.splice(V - 1, 0, l), this.points.push(this.points[V - 1])), this.preCtrl = _
				} else 4 === w && (this.points[V - 2] = this.points[V - 1], this.preCtrl = null)
			}, V.prototype.handleWindowMouseMove = function(q) {
				0 !== this.points.length && (this.updateCtrl(q), this.editView.validateCanvas())
			}, V.prototype.handleWindowTouchEnd = function(q) {
				return this.handleWindowMouseUp(q)
			}, V.prototype.handleWindowMouseUp = function(q) {
				0 !== this.points.length && (this._dragging = !1, this.updateCtrl(q), this.nextPoint = this.judgeNextPoint(q, !0))
			}, V.prototype.$0$ = function(q) {
				var V = [];
				q.beginPath();
				for(var n = 0, S = void 0, _ = void 0, x = void 0, O = 0; O < this.segments.length; O++) {
					var w = this.segments[O];
					1 === w ? (S = this.toPoint(this.points[n++]), q.moveTo(S.x, S.y)) : 2 === w ? (S = this.toPoint(this.points[n++]), q.lineTo(S.x, S.y)) : 3 === w ? (S = this.toPoint(this.points[n++]), _ = this.toPoint(this.points[n++]), q.quadraticCurveTo(S.x, S.y, _.x, _.y)) : 4 === w ? (S = this.toPoint(this.points[n++]), _ = this.toPoint(this.points[n++]), x = this.toPoint(this.points[n++]), q.bezierCurveTo(S.x, S.y, _.x, _.y, x.x, x.y)) : 5 === w && q.closePath(), V.push(this.points[n - 1])
				}
				var K = this.preCtrl;
				if(this.nextPoint)
					if(K) S = this.toPoint(K), _ = this.toPoint(this.nextPoint), x = this.toPoint(this.nextPoint), q.bezierCurveTo(S.x, S.y, _.x, _.y, x.x, x.y);
					else {
						var g = this.toPoint(this.nextPoint);
						q.lineTo(g.x, g.y)
					}
				if(q.strokeStyle = hV.config.color_data_border, q.lineWidth = 1, q.stroke(), this.drawPoints(q, V, 4, hV.config.color_data_border, hV.config.color_data_background), K) {
					var A = this.points[this.points.length - 1],
						l = this.gv.getZoom(),
						Z = 3 / l,
						z = 6 / l,
						H = {
							x: 2 * A.x - K.x,
							y: 2 * A.y - K.y
						};
					this.drawLine(q, K, H, hV.config.color_data_border), this.drawRect(q, {
						x: H.x - Z,
						y: H.y - Z,
						width: z,
						height: z
					}, hV.config.color_data_border, hV.config.color_data_background), this.drawRect(q, {
						x: K.x - Z,
						y: K.y - Z,
						width: z,
						height: z
					}, hV.config.color_data_border, hV.config.color_data_background)
				}
			}, V
		}(Rn),
		SS = {
			width: !0,
			height: !0,
			position: !0,
			rotation: !0,
			anchor: !0,
			scale: !0,
			expanded: !0
		},
		_S = {
			border: In,
			rect: ln,
			circle: ln,
			oval: ln,
			roundRect: ln,
			star: ln,
			triangle: ln,
			hexagon: ln,
			pentagon: ln,
			diamond: ln,
			rightTriangle: ln,
			parallelogram: ln,
			trapezoid: ln,
			polygon: ln,
			arc: ln,
			image: zn,
			shape: Zn,
			text: Hn,
			pieChart: on,
			oneDimensionalColumnChart: rn,
			columnChart: rn,
			lineChart: kn,
			comp: Bn
		},
		xS = function() {
			function q(V, n, S, _) {
				var x = this;
				YV(this, q), this.editor = V, this.tab = n, this.type = _, n.setView(this);
				var O = this.graphView = new S(this);
				this._view = h(!0, this), O.addViewListener(function(q) {
					"validate" === q.kind && x.validateCanvas()
				}), this._hRuler = t(), this._vRuler = t(), this._view.appendChild(O.getView()), this.$5$("edit"), O.isInteractive = function() {
					return !1
				}, O.addPropertyChangeListener(function() {
					x.iv()
				}), O.addInteractorListener(function(q) {
					x.handleInteractorEvent(q)
				}), this.dm.sm().addSelectionChangeListener(function(q) {
					x.iv()
				}), this.dm.addDataModelChangeListener(function(q) {
					x.handleDataModelChanged(q)
				}), this.dm.addDataPropertyChangeListener(function(q) {
					x.handleDataPropertyChanged(q)
				}), this.dm.addPropertyChangeListener(function(q) {
					x.handleDataModelPropertyChanged(q)
				}), this.dm.addHierarchyChangeListener(function(q) {
					x.handleHierarchyChanged(q)
				}), this.dm.layout = function(q, V) {
					x._autoLayout || (x._autoLayout = new ht.layout.AutoLayout(O)), x._autoLayout.options = V || {};
					var n = x.graphView.getZoom(),
						S = x.graphView.tx(),
						_ = x.graphView.ty();
					x.dm.beginTransaction(), x._autoLayout.setAnimate(hV.config.animate);
					var w = function() {
						var q = x.graphView.getZoom(),
							V = x.graphView.tx(),
							O = x.graphView.ty(),
							w = {
								undo: function() {
									x.graphView.setZoom(n), x.graphView.tx(S), x.graphView.ty(_)
								},
								redo: function() {
									x.graphView.setZoom(q), x.graphView.tx(V), x.graphView.ty(O)
								}
							};
						x.dm.addHistory(w), x.dm.endTransaction()
					};
					x._autoLayout.layout(q, function() {
						hV.config.animate ? O.fitContent({
							finishFunc: w
						}) : (O.fitContent(!1, hV.config.fitPadding), w())
					})
				}, this.graphView.setEditable(!0), this.graphView.getInteractors().each(function(q) {
					q.keep = !0
				}), this.setRulerEnabled(this.editor.isRulerEnabled()), this.init()
			}
			return q.prototype.handleInteractorEvent = function(q) {
				"prepareMove" !== q.kind && "prepareEdit" !== q.kind || !q.event.altKey || (this.editor.copy(), this.editor.paste(!0), this.editor.gv.validate())
			}, q.prototype.handleDataModelChanged = function(q) {
				this.dirty = !0
			}, q.prototype.handleDataPropertyChanged = function(q) {
				q.data.disableDirty || this.graphView.fpImageLoaded || "*" !== q.property && (SS[q.property] && this.iv(), this.dirty = !0)
			}, q.prototype.handleHierarchyChanged = function(q) {
				this.dirty = !0
			}, q.prototype.handleDataModelPropertyChanged = function(q) {
				var V = q.property,
					n = q.newValue;
				null != n && ("a:gridBlockSize" === V ? this.graphView.getEditInteractor().setStyle("gridBlockSize", n) : "a:gridThickLinesEvery" === V ? this.graphView.getEditInteractor().setStyle("gridThickLinesEvery", n) : "a:gridThickColor" === V ? this.graphView.getEditInteractor().setStyle("gridThickColor", n) : "a:gridLightColor" === V ? this.graphView.getEditInteractor().setStyle("gridLightColor", n) : "a:gridAngle" === V ? this.graphView.getEditInteractor().setStyle("gridAngle", n) : "a:gridRotation" === V ? this.graphView.getEditInteractor().setStyle("gridRotation", n) : "a:gridZoomThreshold" === V && this.graphView.getEditInteractor().setStyle("gridZoomThreshold", n)), "a:connectActionType" === V ? this.graphView.setCurrentConnectActionType(n) : "a:rotateAsClock" === V && this.graphView.getEditInteractor().setStyle("rotateAsClock", n), this.dirty = !0, this.validateCanvas()
			}, q.prototype.onPropertyChanged = function(q) {
				"rulerEnabled" === q.property && (this.graphView.getEditInteractor().alignmentGuideEnabled = q.newValue), this.iv()
			}, q.prototype.parse = function(q, V) {
				(q || V) && (this.url = q, V ? this.update(V) : Q(q, this.update.bind(this)))
			}, q.prototype.update = function(q, V) {
				var n = this;
				q && (V ? ! function() {
					var S = W(n.content),
						_ = q,
						x = {
							undo: function() {
								n._updateImpl(S, !0)
							},
							redo: function() {
								n._updateImpl(_, !0)
							}
						};
					n.dm.disableHistoryManager(), n._updateImpl(q, V), n.dm.enableHistoryManager(), n.dm.addHistory(x)
				}() : (this.dm.disableHistoryManager(), this._updateImpl(q, V), this.dm.enableHistoryManager(), this.dm.clearHistoryManager()))
			}, q.prototype._saveNew = function(q, V, n, S) {
				var x = this,
					O = function(n, O) {
						if("ok" === O) {
							var w = xq(n) ? P(n) : n,
								K = S + "/" + w + ".json",
								g = x.editor.getFileNode(K);
							g ? tq(_("editor.filenameconflict"), K, function() {
								q && q()
							}) : (x.tab.setName(w), x.url = K, x.tab.setTag(x.url), x.editor.dataView.updateUrl(), x._saveImpl(V))
						} else q && q()
					},
					w = {
						name: void 0
					};
				return "display" === this.type ? (w.displayView = this, this.editor.fireEvent("displayViewNewNameInputing", w)) : "symbol" === this.type && (w.symbolView = this, this.editor.fireEvent("symbolViewNewNameInputing", w)), !w.preventDefault && void(w.name ? O(w.name, "ok") : $q(n, this.tab.getName(), {
					nullable: !1,
					trim: !0,
					maxLength: hV.config.maxFileNameLength
				}, O))
			}, q.prototype._saveAs = function(q, V) {
				this.tab.setName(E(V)), this.url = V, this.tab.setTag(this.url), this.editor.dataView.updateUrl(), this._saveImpl(q)
			}, q.prototype._saveImpl = function(q) {
				var V = this,
					n = this.url,
					S = {
						url: n
					};
				return "display" === this.type ? (hV.config.settingDefaultValueBeforeSaving && this.dm.each(function(q) {
					if(q instanceof ht.Node) {
						var V = ht.Default.getImage(q.getImage());
						V && V.dataBindings && V.dataBindings.forEach(function(V) {
							var n = q.getAttrObject(),
								S = V.defaultValue;
							if(void 0 !== S) {
								var _ = V.attr;
								n && void 0 !== n[_] || q.a(_, S)
							}
						})
					}
				}), S.displayView = this, this.editor.fireEvent("displayViewSaving", S)) : "symbol" === this.type && (S.symbolView = this, this.editor.fireEvent("symbolViewSaving", S)), !S.preventDefault && (S = {
					path: S.url,
					content: W(this.content)
				}, void this.editor.request("upload", S, function(S) {
					S === !0 && V.editor.saveImage(V.dm.a("snapshotURL") || V.graphView, n.substr(0, n.length - 5) + ".png", function() {
						V.dirty = !1
					}), q && q(), V.editor.showMessage(_("editor.savedsuccessfully"), qn, 1e3)
				}))
			}, q.prototype.$65$ = function(q, V) {
				this.tab.getTag() && V.indexOf("?") === -1 && (V += "?tag=" + encodeURI(this.tab.getTag()));
				var n = {
					url: V
				};
				if("display" === this.type ? (n.displayView = this, this.editor.fireEvent("displayViewPreviewing", n)) : "symbol" === this.type && (n.symbolView = this, this.editor.fireEvent("symbolViewPreviewing", n)), n.preventDefault) return !1;
				V = n.url, window.open(V, V);
				var S = this.content;
				S.title = this.tab.getName(), n = {
					path: q,
					content: W(S)
				}, this.editor.request("upload", n, function(q) {})
			}, q.prototype.$4$ = function() {
				return this._interactionState
			}, q.prototype.$5$ = function(q, V, n) {
				var S = this,
					_ = this._interactionState;
				if(_ !== q) {
					this._interactionState = q, this.editor.pointsEditingMode = !1;
					var x = [];
					if(this.graphView.getInteractors().each(function(V) {
							V.keep ? V.disabled = "edit" !== q : x.push(V)
						}), x.forEach(function(q) {
							q.tearDown(), S.graphView.getInteractors().remove(q)
						}), "edit" !== q) {
						var O = lq(V) ? this.$63$(V, n) : this.$62$(V, n);
						O.setUp(), this.graphView.getInteractors().add(O)
					}
					this.graphView.invalidateSelection(), this.editor.mainToolbar.iv(), this.fp("interactionState", _, q), this.validateCanvas()
				}
			}, q.prototype.$62$ = function(q, V) {
				var n = new q;
				return n instanceof ht.Shape ? new nS(this.tab, null, function(n, S) {
					var _ = new q;
					return _.setPoints(n), _.setSegments(S), V && V(_), _
				}) : n instanceof ht.Edge ? new VS(this.tab, null, function(q, n) {
					var S = new ht.Edge(q, n);
					return V && V(S), S
				}) : n instanceof ht.Node ? new qS(this.tab, null, function(n, S) {
					var _ = new q;
					return V && V(_, n, S), _
				}) : void 0
			}, q.prototype.createComp = function(q) {}, q.prototype.$63$ = function(q, V) {
				var n = _S[q];
				return "shape" === q ? new nS(this.tab, null, function(q, S) {
					var _ = {
						type: "shape",
						background: null,
						borderColor: hV.config.color_data_border,
						borderWidth: 1
					};
					V && V(_, q, S);
					var x = new n(_);
					return x.setPoints(q), x.setSegments(S), x
				}) : new qS(this.tab, null, function(S, x) {
					var O = void 0;
					return O = "arc" === q ? {
						type: q,
						rect: [S.x, S.y, S.width, S.height],
						background: hV.config.color_data_background,
						borderWidth: 1,
						borderColor: hV.config.color_data_border,
						arcFrom: 0,
						arcTo: 4.1888
					} : "border" === q ? {
						type: q,
						rect: [S.x, S.y, S.width, S.height],
						border: 1,
						color: hV.config.color_data_border
					} : "text" === q ? {
						type: q,
						rect: [S.x, S.y, S.width, S.height],
						text: _("editor.text")
					} : "comp" === q || "image" === q ? x ? {
						rect: [S.x + S.width / 2, S.y + S.height / 2, -1, -1]
					} : {
						rect: [S.x, S.y, S.width, S.height]
					} : "pieChart" === q ? {
						type: "pieChart",
						values: [10, 20, 40, 60, 80],
						colors: ["#7EB6EA", "#434348", "#93EB82", "#F5A262", "#8087E6"]
					} : "oneDimensionalColumnChart" === q ? {
						type: "columnChart",
						series: [{
							values: [10, 20, 40, 60, 80],
							colors: ["#7EB6EA", "#434348", "#93EB82", "#F5A262", "#8087E6"]
						}]
					} : "columnChart" === q ? {
						type: "columnChart",
						series: [{
							values: [30, 40, 60, 70, 80],
							color: "#7EB6EA"
						}, {
							values: [20, 40, 50, 80, 90],
							color: "#434348"
						}]
					} : "lineChart" === q ? {
						type: "lineChart",
						series: [{
							values: [10, 40, 30, 60, 70],
							color: "#7EB6EA"
						}]
					} : {
						type: q,
						rect: [S.x, S.y, S.width, S.height],
						background: hV.config.color_data_background,
						borderWidth: 1,
						borderColor: hV.config.color_data_border
					}, V && V(O, S, x), new n(O)
				})
			}, q.prototype.init = function() {
				this.clear()
			}, q.prototype.resetGrid = function() {}, q.prototype.clear = function() {
				this.dm.setName(void 0), this.dm.setBackground(void 0), this.dm.setHierarchicalRendering(!1), this.dm.setLayers(void 0), this.dm.clear(), this.dm.setAttrObject(void 0), this.resetGrid()
			}, q.prototype.onClosed = function() {
				this.graphView.onClosed()
			}, q.prototype.addData = function(q) {
				var V = !(arguments.length <= 1 || void 0 === arguments[1]) && arguments[1],
					n = !(arguments.length <= 2 || void 0 === arguments[2]) && arguments[2],
					S = !(arguments.length <= 3 || void 0 === arguments[3]) && arguments[3],
					_ = "display" === this.type ? "dataCreated" : "compCreated",
					x = {
						data: q
					};
				return x["display" === this.type ? "displayView" : "symbolView"] = this, n ? void this.editor.fireEvent(_, x) : (this.dm.beginTransaction(), V || q.getParent() || q.setParent(this.graphView.getCurrentSubGraph()), this.dm.add(q), V || (S || this.dm.sm().ss(q), this.graphView.setFocus()), this.editor.fireEvent(_, x), void this.dm.endTransaction())
			}, q.prototype.validateCanvas = function() {
				var q = this.graphView._topCanvas,
					V = B(q);
				V.clearRect(0, 0, q.clientWidth, q.clientHeight), this.graphView.getInteractors().each(function(q) {
					q.$0$ && q.$0$(V)
				}), this.$0$(V), V.restore()
			}, q.prototype.redraw = function() {
				this._lastWidth = this._lastHeight = null, this.iv()
			}, q.prototype.validateImpl = function() {
				var q = this._rulerSize,
					V = this._rulerEnabled,
					n = this.getWidth(),
					S = this.getHeight();
				if(n !== this._lastWidth || S !== this._lastHeight || q !== this._lastRulerSize || V !== this._lastRulerEnabled) {
					if(this._lastWidth = n, this._lastHeight = S, this._lastRulerSize = q, this._lastRulerEnabled = V, V) {
						this._hRuler.parentNode || (this._view.appendChild(this._hRuler), this._view.appendChild(this._vRuler));
						var _ = Math.max(0, n - q),
							x = Math.max(0, S - q);
						Y(this._hRuler, q, 0, _, q), Y(this._vRuler, 0, q, q, x), Y(this.graphView, q, q, _, x), Y(this.graphView._topDiv, 0, 0, _, x), M(this.graphView._topCanvas, _, x), M(this._hRuler, _, q), M(this._vRuler, q, x)
					} else this._hRuler.parentNode && (L(this._hRuler), L(this._vRuler)), Y(this.graphView, 0, 0, n, S), Y(this.graphView._topDiv, 0, 0, n, S), M(this.graphView._topCanvas, n, S);
					this.validateCanvas()
				}
				this._hRuler.style.background = this._rulerBackground, this._vRuler.style.background = this._rulerBackground, this.drawRuler()
			}, q.prototype.$0$ = function(q) {
				var V = this.graphView.getZoom(),
					n = this.graphView.tx(),
					S = this.graphView.ty(),
					_ = Math.round(this.dm.a("width") || 0) * V,
					x = Math.round(this.dm.a("height") || 0) * V,
					O = this.graphView.getWidth(),
					w = this.graphView.getHeight();
				_ > 0 && x > 0 && O > 0 && w > 0 && (q.beginPath(), n && q.rect(0, 0, n, w), S && O - n && q.rect(n, 0, O - n, S), O - n - _ && x && q.rect(n + _, S, O - n - _, x), O - n && w - S - x && q.rect(n, S + x, O - n, w - S - x), q.fillStyle = hV.config.color_mask, q.fill())
			}, q.prototype.drawVerticalText = function(q, V, n) {
				q.save(), q.translate(11, n + 11), q.rotate(-Math.PI / 2), D(q, V, this._rulerFont, this._rulerColor, 11, -11, 0, this._rulerSize, "right"), q.restore()
			}, q.prototype.drawRuler = function() {
				if(this._rulerEnabled) {
					var q, V, n, S, _, x, O = this._rulerFont,
						w = this._rulerSize,
						K = this._rulerColor,
						g = this.graphView,
						A = g.getUnionNodeRect(g.sm().getSelection()),
						l = g.getZoom(),
						Z = Math.log(l) / Math.log(10),
						z = Math.floor(Z),
						H = 100,
						i = 10,
						N = H / Math.pow(10, z) * l,
						U = N / i,
						j = z > 1 ? 40 + 10 * (z - 1) : 40,
						p = Math.round(g.tx()),
						y = Math.round(g.ty()),
						X = {
							x: -p,
							y: -y,
							width: g.getWidth(),
							height: g.getHeight()
						},
						e = Math.floor(X.x / N),
						b = Math.ceil((X.x + X.width) / N),
						c = Math.floor(X.y / N),
						J = Math.ceil((X.y + X.height) / N);
					for(B(this._hRuler, 0, 0, 1, {
							x: 0,
							y: 0,
							width: X.width,
							height: w
						}).restore(), S = B(this._hRuler, p, 0, 1), S.lineWidth = 1, S.strokeStyle = K, A && (S.beginPath(), S.rect(A.x * l, 0, A.width * l, w), S.fillStyle = hV.config.color_line, S.fill()), S.beginPath(), q = e; q <= b; q++) _ = q * N, x = z > 1 ? (_ / l).toFixed(z - 1) : Math.round(_ / l), _ = Math.round(_), S.moveTo(_, w), S.lineTo(_, 0), D(S, x, O, K, _, 0, 1, w, "left");
					for(S.stroke(), S.beginPath(), q = e; q <= b; q++)
						for(n = 1; n < i; n++) _ = q * N + n * U, x = z > 1 ? (_ / l).toFixed(z - 1) : Math.round(_ / l), _ = Math.round(_), S.moveTo(_, w), 5 === n ? (S.lineTo(_, w - 10), D(S, x, O, K, _, 0, 1, w, "left")) : (S.lineTo(_, w - 4), U > j && D(S, x, O, K, _, 0, 1, w, "left"));
					for(S.stroke(), S.restore(), B(this._vRuler, 0, 0, 1, {
							x: 0,
							y: 0,
							width: w,
							height: X.height
						}).restore(), S = B(this._vRuler, 0, y, 1), S.lineWidth = 1, S.strokeStyle = K, A && (S.beginPath(), S.rect(0, A.y * l, w, A.height * l), S.fillStyle = hV.config.color_line, S.fill()), S.beginPath(), V = c; V <= J; V++) _ = V * N, x = z > 1 ? (_ / l).toFixed(z - 1) : Math.round(_ / l), _ = Math.round(_), S.moveTo(w, _), S.lineTo(0, _), this.drawVerticalText(S, x, _);
					for(S.stroke(), S.beginPath(), V = c; V <= J; V++)
						for(n = 1; n < i; n++) _ = V * N + n * U, x = z > 1 ? (_ / l).toFixed(z - 1) : Math.round(_ / l), _ = Math.round(_), S.moveTo(w, _), 5 === n ? (S.lineTo(w - 10, _), this.drawVerticalText(S, x, _)) : (S.lineTo(w - 4, _), U > j && this.drawVerticalText(S, x, _));
					S.stroke(), S.restore()
				}
			}, MV(q, [{
				key: "dm",
				get: function() {
					return this.graphView.dm()
				}
			}, {
				key: "dirty",
				get: function() {
					return this.tab.a("dirty")
				},
				set: function(q) {
					ht.Default.loadingRefGraph || this.tab.a("dirty", q)
				}
			}]), q
		}();
	I(xS, {
		ms_v: 1,
		ms_fire: 1,
		ms_ac: ["rulerEnabled", "rulerBackground", "rulerFont", "rulerColor", "rulerSize", "guideColor"],
		_rulerFont: hV.config.smallFont,
		_rulerBackground: hV.config.color_pane,
		_rulerColor: hV.config.color_dark,
		_rulerSize: hV.config.rulerSize,
		_guideColor: hV.config.color_transparent,
		_interactionState: void 0
	}), hV.EditView = xS;
	var OS = function(q) {
			function V(n, S, _, x) {
				YV(this, V);
				var O = QV(this, q.call(this, n, S, fn, "display"));
				O.displayTree = O.list = new dn(O);
				var w = O.graphView.getEditInteractor();
				return w.gridEnabled = O.editor.isGridEnabled(), O.dirty = !1, O.dm.enableHistoryManager(hV.config.maxUndoRedoSteps), O.parse(_, x), _ ? O.editor.fireEvent("displayViewOpened", {
					displayView: O,
					url: _,
					json: x
				}) : O.editor.fireEvent("displayViewCreated", {
					displayView: O,
					json: x
				}), O
			}
			return LV(V, q), V.prototype.init = function() {
				q.prototype.init.call(this), this.dm.setHierarchicalRendering(!0)
			}, V.prototype.onClosed = function() {
				q.prototype.onClosed.call(this), this.displayTree.onClosed()
			}, V.prototype.handleDataModelChanged = function(q) {
				"add" !== q.kind || this.isDeserializing || q.data.setLayer(this.editor.currentLayer), this.dirty = !0
			}, V.prototype._updateImpl = function(q, V) {
				var S = this,
					_ = d(q);
				this.clear(), this.isDeserializing = !0, this.dm.deserialize(_, void 0, {
					disableOnPreDeserialize: !0,
					disableOnPostDeserialize: !0
				}), this.isDeserializing = !1, this.dirty = !!V, V || (_.contentRect ? ! function() {
					var q = n(_.contentRect);
					ht.Default.grow(q, hV.config.fitPadding), S.graphView.getWidth() && S.graphView.getHeight() ? S.graphView.fitRect(q, hV.config.animate) : setTimeout(function() {
						S.graphView.fitRect(q, hV.config.animate)
					}, 500)
				}() : this.graphView.fitContent(hV.config.animate, hV.config.fitPadding))
			}, V.prototype.reload = function() {
				if(this.url) {
					var q = {
						displayView: this,
						url: this.url
					};
					return this.editor.fireEvent("displayViewReloading", q), !q.preventDefault && void this.parse(this.url)
				}
			}, V.prototype.save = function(q, V) {
				var n = this,
					S = function() {
						q && q(), n.editor.fireEvent("displayViewSaved", {
							displayView: n,
							url: n.url
						}), n.editor.selectFileNode(n.url)
					};
				if(V) this._saveAs(S, V);
				else if(this.url) this._saveImpl(S);
				else {
					var x = this.editor.displays.currentDir,
						O = _("editor.inputnewdisplayname");
					this._saveNew(q, S, O, x)
				}
			}, V.prototype.clear = function() {
				q.prototype.clear.call(this), this.dm.a("connectActionType", hV.config.displayConnectActionType), this.dm.a("rotateAsClock", hV.config.rotateAsClock)
			}, V.prototype.resetGrid = function() {
				this.dm.a("gridBlockSize", hV.config.displayGridBlockSize), this.dm.a("gridThickLinesEvery", hV.config.displayGridThickLinesEvery), this.dm.a("gridThickColor", hV.config.displayGridThickColor), this.dm.a("gridLightColor", hV.config.displayGridLightColor), this.dm.a("gridAngle", hV.config.displayGridAngle), this.dm.a("gridRotation", hV.config.displayGridRotation), this.dm.a("gridZoomThreshold", hV.config.displayGridZoomThreshold)
			}, V.prototype.preview = function() {
				this.$65$("previews/display.json", this.dm.a("previewURL") || hV.config.displayPreviewURL)
			}, MV(V, [{
				key: "content",
				get: function() {
					var q = this.dm,
						V = q.toJSON();
					V.modified = (new Date).toString(), q.a("connectActionType") === hV.config.displayConnectActionType && delete V.connectActionType, q.a("rotateAsClock") === hV.config.rotateAsClock && delete V.rotateAsClock, q.a("gridBlockSize") === hV.config.displayGridBlockSize && delete V.a.gridBlockSize, q.a("gridThickLinesEvery") === hV.config.displayGridThickLinesEvery && delete V.a.gridThickLinesEvery, q.a("gridThickColor") === hV.config.displayGridThickColor && delete V.a.gridThickColor, q.a("gridLightColor") === hV.config.displayGridLightColor && delete V.a.gridLightColor, q.a("gridAngle") === hV.config.displayGridAngle && delete V.a.gridAngle, q.a("gridRotation") === hV.config.displayGridRotation && delete V.a.gridRotation, q.a("gridZoomThreshold") === hV.config.displayGridZoomThreshold && delete V.a.gridZoomThreshold, q.a("xAlignmentGuides") && !q.a("xAlignmentGuides").length && delete V.a.xAlignmentGuides, q.a("yAlignmentGuides") && !q.a("yAlignmentGuides").length && delete V.a.yAlignmentGuides;
					var n = this.graphView.getContentRect();
					return q.a("width") > 0 && q.a("height") > 0 && (V.contentRect = {
						x: 0,
						y: 0,
						width: q.a("width"),
						height: q.a("height")
					}), q.size() && n && n.width && n.height && (V.contentRect = n), V
				}
			}]), V
		}(xS),
		wS = function(q) {
			function V(n) {
				return YV(this, V), QV(this, q.call(this, n))
			}
			return LV(V, q), V.prototype.setDataModel = function(q) {
				var V = this,
					n = V._dataModel,
					S = V._selectionModel;
				n !== q && (n && (n.umm(V.handleDataModelChange, V), n.umd(V.handleDataPropertyChange, V), n.removeIndexChangeListener(V.handleIndexChange, V), S || n.sm().ums(V.handleSelectionChange, V)), V._dataModel = q, q.mm(V.handleDataModelChange, V), q.md(V.handleDataPropertyChange, V), q.addIndexChangeListener(V.handleIndexChange, V), S ? S._setDataModel(q) : q.sm().ms(V.handleSelectionChange, V), V.fp("dataModel", n, q))
			}, V.prototype.handleIndexChange = function(q) {
				this.ivm()
			}, V.prototype.handleDataPropertyChange = function(q) {
				this.invalidateData(q.data)
			}, V.prototype.validateModel = function() {
				var q = this;
				q._rows.clear(), q._rowMap = {};
				var V = q._rows = q._dataModel.toDatas(q.isVisible, q),
					n = 0,
					S = q.getCurrentSortFunc(),
					_ = V.size();
				for(S && V.sort(S); n < _; n++) q._rowMap[V.get(n)._id] = n
			}, V
		}(Xn),
		KS = function(q) {
			function V(n, S) {
				var _ = arguments.length <= 2 || void 0 === arguments[2] || arguments[2];
				YV(this, V);
				var x = QV(this, q.call(this, S));
				return x.editor = n, x.editable = _, x.addTopPainter(x.$1$.bind(x)), x
			}
			return LV(V, q), V.prototype.isEditable = function(q) {
				return this.editable
			}, V.prototype.handleDelete = function() {
				this.editable && this.removeSelection()
			}, V.prototype.handleDataDoubleSelect = function(q, V) {
				if(this.isEditable(V)) {
					var n = this.getIcon(V) ? this.getIndent() : 0;
					this.lp(q).x > n && this.beginEditing(V)
				}
			}, V.prototype.rename = function(q, V) {
				q.setName(V)
			}, V.prototype.isDroppable = function(q, V) {
				return !1
			}, V.prototype._clearDragInfo = function() {
				this.editor.dnd.hideTip(), this._dragInfo && (this._dragInfo = null, this.redraw())
			}, V.prototype._endDrag = function(q, V) {}, V.prototype._endCrossDrag = function(q, V) {}, V.prototype.$1$ = function(q) {
				q.texureImage2D = !0;
				var V = void 0;
				if(this._dragInfo && this._dragInfo.inView ? V = this._dragInfo : this._crossDragInfo && (V = this._crossDragInfo), V) {
					var n = this.getWidth(),
						S = (this.getRowHeight(), V.type, hV.config.color_select_dark);
					if(V.refData) {
						var _ = V.y;
						q.beginPath(), q.arc(4, _, 3, 0, 2 * Math.PI, !0), q.moveTo(7, _), q.lineTo(n, _), q.lineWidth = 2, q.strokeStyle = S, q.stroke()
					} else {
						var x = this.getViewRect();
						f(q, S, x.x, x.y, x.width, x.height, 2)
					}
				}
			}, V.prototype._dragging = function(q, V) {
				var n = this.getRowHeight(),
					S = this.lp(q),
					_ = S.y / n,
					x = Math.floor(_),
					O = this.getRowSize();
				x > O - 1 ? (V.refData = null, V.type = null, V.parent = null) : (V.refData = this.getRowDatas().get(x), S.y - x * n < .5 * n ? (V.type = "up", V.y = x * n) : (V.type = "down", V.y = (x + 1) * n)), this.autoScroll(q), this.redraw()
			}, V.prototype.$2$ = function() {
				var q = "";
				if(this.draggingData && (q = this.getLabel(this.draggingData), this.isSelected(this.draggingData))) {
					var V = this.sm().size();
					q += V > 1 ? " (+" + V + ") " : ""
				}
				return q
			}, V.prototype.handleDragAndDrop = function(q, V) {
				if(this.editable) {
					if("prepare" === V) return void this._clearDragInfo();
					"begin" === V && (this._dragInfo = {
						tip: this.$2$(),
						view: this
					});
					var n = this._dragInfo;
					if(n) {
						var S = this.editor.dnd;
						if("begin" === V || "between" === V) {
							var _ = this.getView().contains(b(q));
							return _ ? (n.inView = !0, this._dragging(q, n), S.clearDropView(q, n)) : (n.inView && this.redraw(), n.inView = !1, S.crossDrag(q, n)), void S.showTip(n.tip, q)
						}
						return "end" === V ? (n.inView ? this._endDrag(q, n) : S.crossDrop(q, n), void this._clearDragInfo()) : "cancel" === V ? (n.inView || S.crossCancel(q, n), void this._clearDragInfo()) : void 0
					}
				}
			}, V.prototype.handleCrossDrag = function(q, V, n) {
				if(this.editable) return "exit" === V || "cancel" === V ? (this._crossDragInfo = null, void this.redraw()) : "enter" === V || "over" === V ? (this._crossDragInfo || (this._crossDragInfo = {}), void this._dragging(q, this._crossDragInfo)) : "drop" === V ? (this._endCrossDrag(q, n), this._crossDragInfo = null, void this.redraw()) : void 0
			}, V.prototype.beginEditing = function(q) {
				var V = this;
				this.cancelEditing(), this.makeVisible(q), this.validate();
				var n = this.getIcon(q) ? this.getIndent() : 0,
					S = this.ty() + this.getRowIndex(q) * this.getRowHeight(),
					_ = Math.max(1, this.getWidth() - n),
					x = this.getRowHeight();
				this._currentEditor = new ht.widget.TextField, this._currentEditor.data = q;
				var O = this._currentEditor.getElement(),
					w = this.getLabel(q);
				O.value = null == w ? "" : w, O.onblur = function(q) {
					V.endEditing()
				}, O.onkeydown = function(q) {
					N(q) ? V.endEditing() : U(q) && V.cancelEditing()
				}, this.getView().appendChild(this._currentEditor.getView()), Y(this._currentEditor, n, S, _, x), this._currentEditor.setFocus(), ht.Default.callLater(O.select, O)
			}, V.prototype.endEditing = function() {
				var q = this._currentEditor;
				q && (this.rename(q.data, q.getValue()), delete this._currentEditor, L(q.getView()), this.redraw())
			}, V.prototype.cancelEditing = function() {
				var q = this._currentEditor;
				q && (delete this._currentEditor, L(q.getView()), this.redraw())
			}, V
		}(wS);
	hV.DNDIndexList = KS;
	var gS = function(q) {
		function V(n) {
			var S = arguments.length <= 1 || void 0 === arguments[1] || arguments[1];
			YV(this, V);
			var _ = QV(this, q.call(this, n.editor, n.dm, S));
			return _.graphView = n.graphView, _.nodeIcon = Qq(_), _.initMenu(), n.dm.addDataPropertyChangeListener(function(q) {
				q.data.editorIcon = null
			}), _
		}
		return LV(V, q), V.prototype.onDataDoubleClicked = function(q, V) {
			V.altKey ? this.graphView.fitData(q, !0, hV.config.fitPadding) : this.graphView.makeCenter(q, !0)
		}, V.prototype.onPropertyChanged = function(V) {
			"filter" === V.property && this.ivm(), q.prototype.onPropertyChanged.call(this, V)
		}, V.prototype.handleDataPropertyChange = function(V) {
			!this._filter || "displayName" !== V.property && "s:text" !== V.property && "s:type" !== V.property && "s:image" !== V.property ? q.prototype.handleDataPropertyChange.call(this, V) : this.ivm()
		}, V.prototype.isVisible = function(q) {
			if(!this._filter) return !0;
			var V = this.getLabel(q);
			return null != V && (V = (V + "").toLowerCase(), V.indexOf(this._filter) >= 0)
		}, V.prototype.validate = function() {
			this.graphView.validate(), q.prototype.validate.call(this)
		}, V.prototype.getIcon = function(q) {
			return q instanceof Un ? "editor.restore.state" : q instanceof ht.Text ? q.getIcon() : q instanceof ht.Shape ? (q.editorIcon || (q.editorIcon = aq(q)), q.editorIcon) : q instanceof ht.Node ? this.nodeIcon : null
		}, V.prototype.isDroppable = function(q, V) {
			return !1
		}, V.prototype._endCrossDrag = function(q, V) {}, V.prototype._endDrag = function(q, V) {
			var n = this;
			this.editor.beginTransaction();
			var S = V.type,
				_ = V.refData;
			if(this.isSelected(this.draggingData)) {
				var x = this.getRowOrderSelection();
				"down" === S && x.reverse(), x.each(function(q) {
					n._dropData(q, S, _)
				})
			} else this._dropData(this.draggingData, S, _), this.sm().ss(this.draggingData);
			this.editor.endTransaction()
		}, V.prototype._dropData = function(q, V, n) {
			if(n) {
				var S = this.dm().getDatas(),
					_ = S.indexOf(n);
				"down" === V && _++, S.indexOf(q) < _ && _--, this.dm().moveToIndex(q, _)
			} else this.dm().bringToFront(q)
		}, V.prototype.rename = function(q, V) {
			q.setDisplayName(V)
		}, V.prototype.initMenu = function() {
			var q = this;
			this.menu = new pn;
			var V = [{
				id: "copy",
				label: _("editor.copy"),
				action: function() {
					q.editor.copy()
				},
				visible: function() {
					return q.editable && !!q.editor.ld
				}
			}, {
				id: "paste",
				label: _("editor.paste"),
				action: function() {
					q.editor.paste()
				},
				visible: function() {
					return q.editable && q.editor.hasCopyInfo()
				}
			}, {
				id: "delete",
				label: _("editor.delete"),
				action: function() {
					q.editor.delete()
				},
				visible: function() {
					return q.editable && !!q.editor.ld
				}
			}, "separator", {
				id: "bringToFront",
				label: _("editor.bringtofront"),
				action: function() {
					q.editor.bringToFront()
				},
				visible: function() {
					return q.editable && !!q.editor.ld
				}
			}, {
				id: "bringForward",
				label: _("editor.bringforward"),
				action: function() {
					q.editor.bringForward()
				},
				visible: function() {
					return q.editable && !!q.editor.ld
				}
			}, {
				id: "sendBackward",
				label: _("editor.sendbackward"),
				action: function() {
					q.editor.sendBackward()
				},
				visible: function() {
					return q.editable && !!q.editor.ld
				}
			}, {
				id: "sendToBack",
				label: _("editor.sendtoback"),
				action: function() {
					q.editor.sendToBack()
				},
				visible: function() {
					return q.editable && !!q.editor.ld
				}
			}];
			this.menu.setItems(V), this.menu.addTo(this.getView()), this.editor.menus.push(this.menu)
		}, V.prototype.onClosed = function() {
			x(this.editor.menus, this.menu)
		}, V
	}(KS);
	I(gS, {
		ms_ac: ["filter"]
	});
	var AS = function(q) {
			function V(n) {
				return YV(this, V), QV(this, q.call(this, n))
			}
			return LV(V, q), V.prototype.handleDataModelChange = function(V) {
				q.prototype.handleDataModelChange.call(this, V), this.editor && this.editor.fireEvent("symbolViewDataModelChanged", {
					symbolView: this.editView,
					event: V
				})
			}, V.prototype.handleDataModelPropertyChange = function(V) {
				q.prototype.handleDataModelPropertyChange.call(this, V), this.editor && this.editor.fireEvent("symbolViewDataModelPropertyChanged", {
					symbolView: this.editView,
					event: V
				})
			}, V.prototype.handleDataPropertyChange = function(V) {
				q.prototype.handleDataPropertyChange.call(this, V), this.editor && this.editor.fireEvent("symbolViewDataPropertyChanged", {
					symbolView: this.editView,
					event: V
				})
			}, V.prototype.isDroppable = function(q, V) {
				return !!V.view.isDroppableToSymbolView
			}, V.prototype.initMenuItems = function(q) {
				this.$57$(q), this.$56$(q)
			}, V
		}(Tn),
		lS = function(q) {
			function V(n, S, _) {
				YV(this, V);
				var x = QV(this, q.call(this));
				return x.setIcon("editor.func"), x.setImage("editor.func"), x.parse(n, S, _), x
			}
			return LV(V, q), V.prototype.toLabel = function() {
				return this.getDisplayName() || _("editor.comptype.func")
			}, V.prototype.getClass = function() {
				return V
			}, V.prototype.parse = function(q, V, n) {
				q && (this.a("type", q.type), cq(this, q, V, n))
			}, V.prototype.toJSON = function() {
				var q = {};
				return q.type = this.a("type"), Jq(this, q), q
			}, MV(V, [{
				key: "compType",
				get: function() {
					return "function"
				}
			}]), V
		}(ht.Node),
		ZS = {
			rect: ln,
			circle: ln,
			oval: ln,
			roundRect: ln,
			star: ln,
			triangle: ln,
			hexagon: ln,
			pentagon: ln,
			diamond: ln,
			rightTriangle: ln,
			parallelogram: ln,
			trapezoid: ln,
			polygon: ln,
			arc: ln,
			image: zn,
			shape: Zn,
			text: Hn,
			border: In,
			pieChart: on,
			columnChart: rn,
			percentageColumnChart: rn,
			stackedColumnChart: rn,
			lineChart: kn,
			clip: Nn,
			restore: Un,
			endClip: Un
		};
	hV.toDatas = function(q, V) {
		var n = [];
		return q.forEach(function(q) {
			var S = pV(q);
			if(S) {
				var _ = UV(S),
					x = jV(_, V);
				x && n.push(x)
			}
		}), n
	};
	var zS = function(q) {
			function V(n, S, _, x) {
				YV(this, V);
				var O = QV(this, q.call(this, n, S, AS, "symbol"));
				O.graphView.vectorDataBindingDisabled = !0, O.graphView.getLabel = function() {
					return null
				}, O.graphView.setVisibleFunc(function(q) {
					return !(q instanceof Un)
				}), O.list = O.symbolList = new gS(O), O.dm.a({
					name: void 0,
					comps: [],
					width: 100,
					height: 100,
					boundExtend: 0,
					fitSize: !1,
					scrollable: !1,
					interactive: !1,
					disableSelectedBorder: !1,
					pixelPerfect: !0,
					clip: !1,
					visible: !0,
					color: void 0,
					blendMode: "multiply",
					opacity: 1
				});
				var w = hV.config.customProperties.symbol;
				w && w.length && w.forEach(function(q) {
					O.dm.a(q.property, q.defaultValue)
				});
				var K = O.graphView.getEditInteractor();
				return K.gridEnabled = O.editor.isGridEnabled(), O.dm.addIndexChangeListener(function() {
					O.dirty = !0
				}), O.dirty = !1, O.dm.enableHistoryManager(hV.config.maxUndoRedoSteps), O.parse(_, x), _ ? O.editor.fireEvent("symbolViewOpened", {
					symbolView: O,
					url: _,
					json: x
				}) : O.editor.fireEvent("symbolViewCreated", {
					symbolView: O,
					json: x
				}), O
			}
			return LV(V, q), V.prototype.clear = function() {
				q.prototype.clear.call(this), this.dm.a("connectActionType", hV.config.symbolConnectActionType), this.dm.setAutoAdjustIndex(!1)
			}, V.prototype.onClosed = function() {
				q.prototype.onClosed.call(this), this.list.onClosed()
			}, V.prototype._updateImpl = function(q, V) {
				var n = this,
					S = this.dm,
					_ = d(q);
				this.clear(), S.setBackground(_.background), S.a("previewURL", _.previewURL), S.a("snapshotURL", _.snapshotURL), S.dataBindings = _.dataBindings, null != _.gridBlockSize && this.dm.a("gridBlockSize", _.gridBlockSize), null != _.gridThickLinesEvery && this.dm.a("gridThickLinesEvery", _.gridThickLinesEvery), null != _.gridThickColor && this.dm.a("gridThickColor", _.gridThickColor), null != _.gridLightColor && this.dm.a("gridLightColor", _.gridLightColor), null != _.gridAngle && this.dm.a("gridAngle", _.gridAngle), null != _.gridRotation && this.dm.a("gridRotation", _.gridRotation), null != _.gridZoomThreshold && this.dm.a("gridZoomThreshold", _.gridZoomThreshold), _.hasOwnProperty("connectActionType") && this.dm.a("connectActionType", _.connectActionType), _.hasOwnProperty("rotateAsClock") && this.dm.a("rotateAsClock", _.rotateAsClock), $V.forEach(function(q) {
					S.a(q, _[q])
				}), S.a({
					name: _.name,
					renderHTML: _.renderHTML,
					comps: Eq(_.comps, []),
					width: Eq(_.width, 100),
					height: Eq(_.height, 100),
					boundExtend: Eq(_.boundExtend, 0),
					fitSize: Eq(_.fitSize, !1),
					scrollable: Eq(_.scrollable, !1),
					interactive: Eq(_.interactive, !1),
					disableSelectedBorder: Eq(_.disableSelectedBorder, !1),
					pixelPerfect: Eq(_.pixelPerfect, !0),
					clip: Eq(_.clip, !1),
					visible: Eq(_.visible, !0),
					color: Eq(_.color, void 0),
					blendMode: Eq(_.blendMode, "multiply"),
					opacity: Eq(_.opacity, 1),
					comps_func: Yq(_.comps),
					width_func: Yq(_.width),
					height_func: Yq(_.height),
					fitSize_func: Yq(_.fitSize),
					scrollable_func: Yq(_.scrollable),
					interactive_func: Yq(_.interactive),
					disableSelectedBorder_func: Yq(_.disableSelectedBorder),
					pixelPerfect_func: Yq(_.pixelPerfect),
					visible_func: Yq(_.visible),
					color_func: Yq(_.color),
					blendMode_func: Yq(_.blendMode),
					opacity_func: Yq(_.opacity)
				});
				var x = hV.config.customProperties.symbol;
				x && x.length && x.forEach(function(q) {
					S.a(q.property, Eq(_[q.property], q.defaultValue))
				}), S.a("comps").forEach(function(q) {
					pV(q, n)
				}), this.dirty = !!V, V || this.graphView.fitContent(hV.config.animate, hV.config.fitPadding)
			}, V.prototype.reload = function() {
				if(this.url) {
					var q = {
						symbolView: this,
						url: this.url
					};
					return this.editor.fireEvent("symbolViewReloading", q), !q.preventDefault && void this.parse(this.url)
				}
			}, V.prototype.save = function(q, V) {
				var n = this,
					S = function() {
						q && q(), n.editor.fireEvent("symbolViewSaved", {
							symbolView: n,
							url: n.url
						}), n.editor.selectFileNode(n.url)
					};
				if(V) this._saveAs(S, V);
				else if(this.url) this._saveImpl(S);
				else {
					var x = this.editor.symbols.currentDir,
						O = _("editor.inputnewsymbolname");
					this._saveNew(q, S, O, x)
				}
			}, V.prototype.addValue = function(q, V, n) {
				var S = this.dm.a(V),
					_ = this.dm.a(V + "_func");
				bq(q, V, _, S, n)
			}, V.prototype.resetGrid = function() {
				this.dm.a("gridBlockSize", hV.config.symbolGridBlockSize), this.dm.a("gridThickLinesEvery", hV.config.symbolGridThickLinesEvery), this.dm.a("gridThickColor", hV.config.symbolGridThickColor), this.dm.a("gridLightColor", hV.config.symbolGridLightColor), this.dm.a("gridAngle", hV.config.symbolGridAngle), this.dm.a("gridRotation", hV.config.symbolGridRotation), this.dm.a("gridZoomThreshold", hV.config.symbolGridZoomThreshold)
			}, V.prototype.preview = function() {
				this.$65$("previews/symbol.json", this.dm.a("previewURL") || hV.config.symbolPreviewURL)
			}, MV(V, [{
				key: "content",
				get: function() {
					var q = this,
						V = this.graphView.getEditInteractor(),
						n = (V.gridGuide, this.dm),
						S = {
							modified: (new Date).toString()
						};
					n.getBackground() && (S.background = n.getBackground()), n.dataBindings && (S.dataBindings = n.dataBindings), n.a("previewURL") && (S.previewURL = n.a("previewURL")), n.a("snapshotURL") && (S.snapshotURL = n.a("snapshotURL")), n.a("connectActionType") !== hV.config.symbolConnectActionType && (S.connectActionType = n.a("connectActionType")), n.a("rotateAsClock") !== hV.config.rotateAsClock && (S.rotateAsClock = n.a("rotateAsClock")), n.a("gridBlockSize") !== hV.config.symbolGridBlockSize && (S.gridBlockSize = n.a("gridBlockSize")), n.a("gridThickLinesEvery") !== hV.config.symbolGridThickLinesEvery && (S.gridThickLinesEvery = n.a("gridThickLinesEvery")), n.a("gridThickColor") !== hV.config.symbolGridThickColor && (S.gridThickColor = n.a("gridThickColor")), n.a("gridLightColor") !== hV.config.symbolGridLightColor && (S.gridLightColor = n.a("gridLightColor")), n.a("gridAngle") !== hV.config.symbolGridAngle && (S.gridAngle = n.a("gridAngle")), n.a("gridRotation") !== hV.config.symbolGridRotation && (S.gridRotation = n.a("gridRotation")), n.a("gridZoomThreshold") !== hV.config.symbolGridZoomThreshold && (S.gridZoomThreshold = n.a("gridZoomThreshold")), n.a("xAlignmentGuides") && n.a("xAlignmentGuides").length && (S.xAlignmentGuides = n.a("xAlignmentGuides")), n.a("yAlignmentGuides") && n.a("yAlignmentGuides").length && (S.yAlignmentGuides = n.a("yAlignmentGuides")), $V.forEach(function(q) {
						n.a(q) && (S[q] = n.a(q))
					}), n.a("renderHTML") && (S.renderHTML = n.a("renderHTML")), this.addValue(S, "width"), this.addValue(S, "height"), this.addValue(S, "boundExtend", 0), this.addValue(S, "fitSize", !1), this.addValue(S, "scrollable", !1), this.addValue(S, "interactive", !1), this.addValue(S, "disableSelectedBorder", !1), this.addValue(S, "pixelPerfect", !0), this.addValue(S, "name"), this.addValue(S, "clip", !1), this.addValue(S, "visible", !0), this.addValue(S, "color"), this.addValue(S, "blendMode", "multiply"), this.addValue(S, "opacity", 1);
					var _ = hV.config.customProperties.symbol;
					_ && _.length && _.forEach(function(V) {
						q.addValue(S, V.property, hV.config.saveSymbolCustomPropertyDefaultValue ? void 0 : V.defaultValue)
					});
					var x = [];
					return n.a("comps_func") ? S.comps = {
						values: x,
						func: n.a("comps_func")
					} : S.comps = x, n.each(function(q) {
						x.push(q.toJSON())
					}), S
				}
			}]), V
		}(xS),
		HS = function(q) {
			function V(n) {
				YV(this, V);
				var S = QV(this, q.call(this));
				return S.editor = n, S.getTabModel().sm().ms(function() {
					S.editor.$6$(S.currentTab)
				}), S.menu = new pn([{
					id: "closeTab",
					label: _("editor.closetab"),
					action: function() {
						S.closeTab()
					}
				}, {
					id: "closeOtherTabs",
					label: _("editor.closeothertabs"),
					action: function() {
						S.closeOtherTabs()
					}
				}, {
					id: "closeTabsToTheRight",
					label: _("editor.closetabstotheright"),
					action: function() {
						S.closeTabsToTheRight()
					}
				}]), S.menu.beforeShow = function(q) {
					S._rightClickTab = S.getTabAt(q)
				}, S.menu.addTo(S.getTitleDiv()), S.editor.menus.push(S.menu), S
			}
			return LV(V, q), V.prototype.drawCloseIcon = function(V, n, S, _) {
				V.a("dirty") ? (n.fillStyle = S, n.beginPath(), n.arc(_.x + _.width / 2, _.y + _.height / 2, 3, 0, 2 * Math.PI, !0), n.fill()) : q.prototype.drawCloseIcon.call(this, V, n, S, _)
			}, V.prototype.open = function(q) {
				
				if(q) {
					var V = q.fileType,
						n = V === fV,
						S = V === TV;
					if(n || S) {
						var _ = q.url,
							x = this.getTabModel().getDataByTag(_);
						x || (x = new ht.Tab, x.setTag(_), x.setIcon(n ? "editor.display" : "editor.symbol"), x.setClosable(!0), x.setName(P(q.getName())), n ? new OS(this.editor, x, _) : new zS(this.editor, x, _), this.editor.addTab(x)), this.getTabModel().sm().ss(x)
					}
				}
			}, V.prototype.newDisplayView = function(q) {
				var V = new ht.Tab;
				V.setClosable(!0), V.setIcon("editor.display"), V.setName(q || _("editor.untitled"));
				var n = new OS(this.editor, V);
				return this.editor.addTab(V, !0), n
			}, V.prototype.newSymbolView = function(q) {
				var V = arguments.length <= 1 || void 0 === arguments[1] || arguments[1],
					n = new ht.Tab;
				n.setClosable(!0), n.setIcon("editor.symbol"), n.setName(q || _("editor.untitled"));
				var S = new zS(this.editor, n);
				return this.editor.addTab(n, !0), V && this.editor.zoomToFit(), S
			}, V.prototype.$101$ = function() {
				this.getTabModel().each(function(q) {
					q.getView().graphView.invalidateAll()
				})
			}, V.prototype.reload = function() {
				this.currentTab && this.currentTab.getView().reload()
			}, V.prototype.save = function(q, V) {
				this.currentTab && this.currentTab.getView().save(q, V)
			}, V.prototype.preview = function() {
				this.currentTab && this.currentTab.getView().preview()
			}, V.prototype.selectTab = function(q) {
				q && this.getTabModel().sm().ss(q)
			}, V.prototype.onTabClosing = function(q, V) {
				return this.closeTab(q), !1
			}, V.prototype.closeTab = function(q, V, n) {
				q = q || this._rightClickTab || this.currentTab, q && this.closeTabs([q], V, n)
			}, V.prototype.closeOtherTabs = function(q, V) {
				var n = this._rightClickTab || this.currentTab;
				this.closeTabs(this.tabs.filter(function(q) {
					return q !== n
				}), q, V)
			}, V.prototype.closeTabsToTheRight = function(q, V) {
				var n = this._rightClickTab || this.currentTab;
				if(n) {
					var S = this.tabs.indexOf(n);
					this.closeTabs(this.tabs.slice(S + 1), q, V)
				}
			}, V.prototype.closeAllTabs = function(q, V) {
				this.closeTabs(this.tabs, q, V)
			}, V.prototype.closeTabs = function(q, V, n) {
				var S = this,
					_ = void 0,
					x = function(O) {
						if("cancel" !== O && q.length) {
							var w = q.shift(0);
							void 0 === _ && (_ = S.tabs.indexOf(w) - 1), S.$66$(w, x, n)
						} else {
							V && V();
							var K = S.tabs.length;
							!S.currentTab && K && ((void 0 === _ || _ < 0) && (_ = 0), _ > K - 1 && (_ = K - 1), S.selectTab(S.tabs[_]))
						}
					};
				x(), this._rightClickTab = null
			}, V.prototype.removeTab = function(q) {
				var V = q.getView(),
					n = {
						url: V.url
					};
				"display" === V.type ? (n.displayView = V, this.editor.fireEvent("displayViewClosing", n)) : "symbol" === V.type && (n.symbolView = V, this.editor.fireEvent("symbolViewClosing", n)), n.preventDefault || (V.onClosed(), this.getTabModel().remove(q), this.editor.fireEvent("tabClosed", {
					tab: q
				}), "display" === V.type ? this.editor.fireEvent("displayViewClosed", n) : "symbol" === V.type && this.editor.fireEvent("symbolViewClosed", n))
			}, V.prototype.$66$ = function(q, V, n) {
				var S = this,
					x = q.getView();
				!n && x.dirty ? ! function() {
					var n = [{
							label: _("editor.notsave"),
							action: function() {
								O.hide(), S.removeTab(q), V && V("notSave")
							}
						}, {
							label: _("editor.save"),
							action: function() {
								x.save(function() {
									O.hide(), S.removeTab(q), V && V("save")
								})
							}
						}, {
							label: _("editor.cancel"),
							action: function() {
								O.hide(), V && V("cancel")
							}
						}],
						O = new FV({
							title: q.getName(),
							contentPadding: 20,
							width: 260,
							draggable: !0,
							content: "<p>" + _("editor.savechange") + "</p>",
							buttons: n
						});
					O.$49$ = n[2].action, O.$48$ = n[1].action, O.show()
				}() : (this.removeTab(q), V && V())
			}, MV(V, [{
				key: "currentTab",
				get: function() {
					return this.getTabModel().sm().ld()
				}
			}, {
				key: "tabs",
				get: function() {
					return this.getTabModel().getRoots().toArray()
				}
			}]), V
		}(Jn),
		iS = function(q) {
			function V(n) {
				YV(this, V);
				var S = QV(this, q.call(this));
				S.editor = n, S.buttons = {};
				var _ = [];
				_.push(S.createItem("distributeHorizontal")), _.push(S.createItem("distributeVertical")), _.push(S.createItem("alignLeft")), _.push(S.createItem("alignHorizontal")), _.push(S.createItem("alignRight")), _.push(S.createItem("alignTop")), _.push(S.createItem("alignVertical")), _.push(S.createItem("alignBottom")), S.addSearchItem(_);
				var x = 22,
					w = [x, x, x, x, x, x, x, x, .1];
				return O(hV.config.compactFilter) || (S.addCompactItem(_), w.push(x)), S.addRow(_, w), S.updateItems(), S
			}
			return LV(V, q), V.prototype.createItem = function(q) {
				var V = this,
					n = "editor.align." + q.toLocaleLowerCase();
				return this.buttons[q] = Dq(null, _(n), n, function() {
					V[q]()
				})
			}, V.prototype.updateItems = function() {
				var q = this,
					V = this.buttons;
				this.dataModel ? ! function() {
					var n = [];
					q.dataModel.sm().each(function(q) {
						q instanceof ht.Node && n.push(q)
					}), n.length > 2 ? (V.distributeHorizontal.setDisabled(!1), V.distributeVertical.setDisabled(!1), V.alignLeft.setDisabled(!1), V.alignHorizontal.setDisabled(!1), V.alignRight.setDisabled(!1), V.alignTop.setDisabled(!1), V.alignVertical.setDisabled(!1), V.alignBottom.setDisabled(!1)) : n.length > 1 ? (V.distributeHorizontal.setDisabled(!0), V.distributeVertical.setDisabled(!0), V.alignLeft.setDisabled(!1), V.alignHorizontal.setDisabled(!1), V.alignRight.setDisabled(!1), V.alignTop.setDisabled(!1), V.alignVertical.setDisabled(!1), V.alignBottom.setDisabled(!1)) : (V.distributeHorizontal.setDisabled(!0), V.distributeVertical.setDisabled(!0), V.alignLeft.setDisabled(!0), V.alignHorizontal.setDisabled(!0), V.alignRight.setDisabled(!0), V.alignTop.setDisabled(!0), V.alignVertical.setDisabled(!0), V.alignBottom.setDisabled(!0))
				}() : (V.distributeHorizontal.setDisabled(!0), V.distributeVertical.setDisabled(!0), V.alignLeft.setDisabled(!0), V.alignHorizontal.setDisabled(!0), V.alignRight.setDisabled(!0), V.alignTop.setDisabled(!0), V.alignVertical.setDisabled(!0), V.alignBottom.setDisabled(!0))
			}, V.prototype.$6$ = function(q) {
				this.dataModel && this.dataModel.sm().ums(this.updateItems, this), q ? (this.dataModel = q.getView().dm, this.dataModel.sm().ms(this.updateItems, this)) : this.dataModel = null, this.updateItems()
			}, V.prototype.getUnionRect = function(q) {
				return this.editor.gv ? this.editor.gv.getUnionNodeRect(q) : null
			}, V.prototype.isSelected = function(q) {
				return this.dataModel && this.dataModel.sm().contains(q)
			}, V.prototype.hasSelectedGroupParent = function(q) {
				return q instanceof ht.Group && (!!this.isSelected(q) || this.hasSelectedGroupParent(q.getParent()))
			}, V.prototype.hasSelectedHost = function(q) {
				var V = this,
					n = function(S) {
						return S !== q && (S instanceof ht.Node && (!!V.isSelected(S) || n(S.getHost())))
					};
				return n(q.getHost())
			}, V.prototype.distributeHorizontal = function() {
				this.editor.beginTransaction();
				var q = this.editor.gv,
					V = this.selection,
					n = this.getUnionRect(V);
				q && n && ! function() {
					V.sort(function(V, n) {
						return q.getNodeRect(V).x - q.getNodeRect(n).x
					});
					var S = {},
						_ = 0;
					V.forEach(function(V) {
						var n = q.getNodeRect(V);
						S[V._id] = n, _ += n.width
					});
					var x = (n.width - _) / (V.length - 1),
						O = n.x;
					V.forEach(function(V) {
						var n = q.getNodeRect(V);
						V.translate(O - n.x, 0), O += n.width + x
					})
				}(), this.editor.endTransaction()
			}, V.prototype.distributeVertical = function() {
				this.editor.beginTransaction();
				var q = this.editor.gv,
					V = this.selection,
					n = this.getUnionRect(V);
				q && n && ! function() {
					V.sort(function(V, n) {
						return q.getNodeRect(V).y - q.getNodeRect(n).y
					});
					var S = {},
						_ = 0;
					V.forEach(function(V) {
						var n = q.getNodeRect(V);
						S[V._id] = n, _ += n.height
					});
					var x = (n.height - _) / (V.length - 1),
						O = n.y;
					V.forEach(function(V) {
						var n = q.getNodeRect(V);
						V.translate(0, O - n.y), O += n.height + x
					})
				}(), this.editor.endTransaction()
			}, V.prototype.alignLeft = function() {
				this.editor.beginTransaction();
				var q = this.editor.gv,
					V = this.selection,
					n = this.getUnionRect(V);
				q && n && V.forEach(function(V) {
					var S = q.getNodeRect(V);
					V.translate(n.x - S.x, 0)
				}), this.editor.endTransaction()
			}, V.prototype.alignHorizontal = function() {
				this.editor.beginTransaction();
				var q = this.editor.gv,
					V = this.selection,
					n = this.getUnionRect(V);
				q && n && V.forEach(function(V) {
					var S = q.getNodeRect(V);
					V.translate(n.x + n.width / 2 - S.x - S.width / 2, 0)
				}), this.editor.endTransaction()
			}, V.prototype.alignRight = function() {
				this.editor.beginTransaction();
				var q = this.editor.gv,
					V = this.selection,
					n = this.getUnionRect(V);
				q && n && V.forEach(function(V) {
					var S = q.getNodeRect(V);
					V.translate(n.x + n.width - S.x - S.width, 0)
				}), this.editor.endTransaction()
			}, V.prototype.alignTop = function() {
				this.editor.beginTransaction();
				var q = this.editor.gv,
					V = this.selection,
					n = this.getUnionRect(V);
				q && n && V.forEach(function(V) {
					var S = q.getNodeRect(V);
					V.translate(0, n.y - S.y)
				}), this.editor.endTransaction()
			}, V.prototype.alignVertical = function() {
				this.editor.beginTransaction();
				var q = this.editor.gv,
					V = this.selection,
					n = this.getUnionRect(V);
				q && n && V.forEach(function(V) {
					var S = q.getNodeRect(V);
					V.translate(0, n.y + n.height / 2 - S.y - S.height / 2)
				}), this.editor.endTransaction()
			}, V.prototype.alignBottom = function() {
				this.editor.beginTransaction();
				var q = this.editor.gv,
					V = this.selection,
					n = this.getUnionRect(V);
				q && n && V.forEach(function(V) {
					var S = q.getNodeRect(V);
					V.translate(0, n.y + n.height - S.y - S.height)
				}), this.editor.endTransaction()
			}, V.prototype.addSearchItem = function(q) {
				var V = this;
				this.searchField = new ht.widget.TextField;
				var n = this.searchField.getElement();
				n.onkeyup = function(q) {
					U(q) && (n.value = ""), V.editor.filterProperties()
				}, q.push(this.searchField)
			}, V.prototype.addCompactItem = function(q) {
				var V = this,
					n = Tq("editor.filter", function() {
						return V.editor.inspectorCompact
					}),
					S = function() {
						V.editor.inspectorCompact = !V.editor.inspectorCompact
					};
				q.push(Dq(null, _("editor.inspectorcompact"), n, S))
			}, MV(V, [{
				key: "selection",
				get: function() {
					var q = this,
						V = [];
					return this.dataModel && this.dataModel.sm().each(function(n) {
						n instanceof ht.Node && (q.hasSelectedGroupParent(n.getParent()) || q.hasSelectedHost(n) || V.push(n))
					}), V
				}
			}, {
				key: "filter",
				get: function() {
					return this.searchField.getElement().value
				}
			}]), V
		}(aV);
	hV.InspectorTool = iS;
	var NS = function(q) {
			function V(n) {
				YV(this, V);
				var S = QV(this, q.call(this));
				return S.editor = n, S.initForm(), S.visible = !1, S.$6$(), S.oopsImageJSON = ht.Default.getImage("editor.oops"), S.oopsImage = ht.Default.toCanvas(S.oopsImageJSON, S.oopsImageJSON.width, S.oopsImageJSON.height, "fill", null, null, null, ht.Default.devicePixelRatio).toDataURL(), S
			}
			return LV(V, q), V.prototype.initForm = function() {
				var q = this;
				this.addRow([{
					id: "content",
					textArea: {}
				}], [.1], .1), this.addRow([{
					id: "url",
					textField: {
						editable: !1
					}
				}, {
					id: "edit",
					button: {
						onClicked: function() {
							q.editing = !q.editing
						}
					}
				}, {
					id: "commit",
					button: {
						label: _("editor.commit"),
						onClicked: function() {
							q.currentView.update(q.content, !0), q.editing = !1
						}
					}
				}], [.1, 50, 50]), this.getView().style.background = hV.config.color_pane, this.textArea = this.getViewById("content").getElement(), this.editing = !1
			}, V.prototype.$67$ = function() {
				var q = this;
				this.visible && !this.editing && (this._updateContentLater || (this._updateContentLater = !0, setTimeout(function() {
					q.updateContent()
				}, 100)))
			}, V.prototype.updateContent = function() {
				this.visible && !this.editing && (this._updateContentLater = !1, this.content = this.currentView ? W(this.currentView.content) : "")
			}, V.prototype.updateUrl = function() {
				this.v("url", this.tab && this.tab.getTag() || "")
			}, V.prototype.$6$ = function(q) {
				this.editing = !1, this.dataModel && (this.dataModel.removeDataModelChangeListener(this.$67$, this), this.dataModel.removeDataPropertyChangeListener(this.$67$, this), this.dataModel.removePropertyChangeListener(this.$67$, this)), q ? (this.currentView = q.getView(), this.dataModel = this.currentView.dm, this.dataModel.addDataModelChangeListener(this.$67$, this), this.dataModel.addDataPropertyChangeListener(this.$67$, this), this.dataModel.addPropertyChangeListener(this.$67$, this), this.setDisabled(!1)) : (this.currentView = null, this.dataModel = null, this.setDisabled(!0)), this.tab = q, this.updateUrl(), this.$67$()
			}, MV(V, [{
				key: "editing",
				get: function() {
					return this._editing
				},
				set: function(q) {
					this._editing !== q && (this._editing = q, this.getViewById("edit").setLabel(_(q ? "editor.cancel" : "editor.edit")), this.getViewById("commit").setDisabled(!q), this.getViewById("content").setEditable(q), q || this.$67$())
				}
			}, {
				key: "visible",
				get: function() {
					return this._visible
				},
				set: function(q) {
					this._visible !== q && (this._visible = q, q ? this.updateContent() : this.editing || (this.content = ""))
				}
			}, {
				key: "content",
				get: function() {
					return this.v("content")
				},
				set: function(q) {
					if(q && q.length > hV.config.maxStringLength) {
						q = "Oops, tooooo long!", this.setDisabled(!0, this.oopsImage);
						var V = this.oopsImageJSON.width,
							n = this.oopsImageJSON.height;
						this.getDisabledDiv().style.backgroundSize = V + "px " + n + "px"
					} else this.setDisabled(!1);
					this.v("content", q)
				}
			}]), V
		}(aV),
		US = function(q) {
			function V(n) {
				YV(this, V);
				var S = QV(this, q.call(this));
				return S.editor = n, S.centerPane = new jn, S.setCenterView(S.centerPane), S.controlPane = new aV, S.controlPane.addRow([{
					id: "filter",
					textField: {}
				}], [.1, ht.Default.isTouchable ? 32 : 18]), S.setBottomView(S.controlPane), S.setBottomHeight(ht.Default.widgetRowHeight + 8), S.input = S.controlPane.getViewById("filter").getElement(), S.input.onkeyup = function(q) {
					S.list && (U(q) && (S.input.value = ""), S.list.setFilter(S.input.value))
				}, S
			}
			return LV(V, q), V.prototype.$6$ = function(q) {
				this.tab = q, this.list = q ? q.getView().list : null, this.controlPane.v("filter", this.list ? this.list.getFilter() || "" : "")
			}, MV(V, [{
				key: "list",
				get: function() {
					return this.centerPane.getCenterView()
				},
				set: function(q) {
					this.centerPane.setCenterView(q)
				}
			}]), V
		}(jn),
		jS = function(q) {
			function V(n) {
				YV(this, V);
				var S = QV(this, q.call(this));
				return S.editor = n, S._layerNames = [], S.setDisabled(!0), S.tableModel = new ht.DataModel, S.tablePane = new cn(S.tableModel), S.tableView = S.tablePane.getTableView(), S.tableView.setEditable(!0), S.tablePane.getView().style.border = hV.config.color_line + " solid 1px", S.tablePane.addColumns([S.$74$("name", _("editor.name"), 100), S.$74$("visible", _("editor.visible"), 50), S.$74$("selectable", _("editor.selectable"), 50), S.$74$("movable", _("editor.movable"), 50), S.$74$("editable", _("editor.editable"), 50)]), S.addRow([S.tablePane], [.1], .1), S.addRow([{
					button: {
						icon: "editor.add",
						toolTip: _("editor.add"),
						onClicked: function() {
							S.addLayer(ht.Data.prototype._layer, !0, !0, !0, !0), S.updateLayers()
						}
					}
				}, {
					button: {
						icon: "editor.delete",
						toolTip: _("editor.delete"),
						onClicked: function() {
							S.tableView.sm().size() && (S.tableView.removeSelection(), S.updateLayers())
						}
					}
				}, null, {
					button: {
						icon: "editor.top",
						toolTip: _("editor.bringtofront"),
						onClicked: function() {
							S.tableView.sm().size() && (S.tableModel.moveSelectionToTop(), S.updateLayers())
						}
					}
				}, {
					button: {
						icon: "editor.up",
						toolTip: _("editor.bringforward"),
						onClicked: function() {
							S.tableView.sm().size() && (S.tableModel.moveSelectionUp(), S.updateLayers())
						}
					}
				}, {
					button: {
						icon: "editor.down",
						toolTip: _("editor.sendbackward"),
						onClicked: function() {
							S.tableView.sm().size() && (S.tableModel.moveSelectionDown(), S.updateLayers())
						}
					}
				}, {
					button: {
						icon: "editor.bottom",
						toolTip: _("editor.sendtoback"),
						onClicked: function() {
							S.tableView.sm().size() && (S.tableModel.moveSelectionToBottom(), S.updateLayers())
						}
					}
				}], [20, 20, .1, 20, 20, 20, 20]), S
			}
			return LV(V, q), V.prototype.addLayer = function(q, V, n, S, _) {
				V !== !1 && (V = !0), n !== !1 && (n = !0), S !== !1 && (S = !0), _ !== !1 && (_ = !0);
				var x = new ht.Data;
				x.a({
					name: q,
					visible: V,
					selectable: n,
					movable: S,
					editable: _
				}), this.tableModel.add(x)
			}, V.prototype.$74$ = function(q, V, n) {
				var S = this;
				return {
					name: q,
					tag: q,
					accessType: "attr",
					width: n,
					displayName: V,
					align: "center",
					editable: !0,
					setValue: function(V, n, _) {
						_ !== V.a(q) && (V.a(q, _), S.updateLayers())
					}
				}
			}, V.prototype.$6$ = function(q) {
				this.dataModel && this.dataModel.removePropertyChangeListener(this.handleDataModelPropertyChange, this);
				var V = this.editor.displayView;
				V ? (this.dataModel = V.dm, this.dataModel.addPropertyChangeListener(this.handleDataModelPropertyChange, this), this.setDisabled(!1)) : (this.dataModel = null, this.setDisabled(!0)), this.updateTable()
			}, V.prototype.handleDataModelPropertyChange = function(q) {
				var V = this;
				if("layers" === q.property) {
					this.updateTable(), this._layerNames = [];
					var n = this.dataModel.getLayers();
					n && n.forEach(function(q) {
						V._layerNames.push(Zq(q) ? q.name : q)
					}), this.editor.inspector && this.editor.inspector.$35$()
				}
			}, V.prototype.updateLayers = function() {
				if(this.dataModel) {
					var q = this.tableModel.size() ? [] : null;
					q && this.tableModel.getRoots().forEach(function(V) {
						q.push({
							name: V.a("name"),
							visible: V.a("visible"),
							selectable: V.a("selectable"),
							movable: V.a("movable"),
							editable: V.a("editable")
						})
					}), this.isSettingLayers = !0, this.dataModel.setLayers(q), this.isSettingLayers = !1
				}
			}, V.prototype.updateTable = function() {
				var q = this;
				if(!this.isSettingLayers && (this.tableModel.clear(), this.dataModel)) {
					var V = this.dataModel.getLayers();
					V && V.forEach(function(V) {
						Zq(V) ? q.addLayer(V.name, V.visible, V.selectable, V.movable, V.editable) : q.addLayer(V, !0, !0, !0, !0)
					})
				}
			}, MV(V, [{
				key: "currentLayer",
				get: function() {
					var q = this.tableModel.sm().ld();
					if(q) return q.a("name");
					var V = this.tableModel.getRoots();
					return V.size() ? (q = V.get(V.size() - 1), q.a("name")) : ht.Data.prototype._layer
				}
			}, {
				key: "layerNames",
				get: function() {
					return this._layerNames
				}
			}]), V
		}(aV),
		pS = function(q) {
			function V(n) {
				YV(this, V);
				var S = QV(this, q.call(this));
				return S.editor = n, S.editor.menus.push(S), S.setItems([{
					id: "file",
					label: _("editor.file"),
					items: [S.createItem("newDisplayView", _("editor.newdisplayview"), "newDisplayView", hV.config.displaysVisible), S.createItem("newSymbolView", _("editor.newsymbolview"), "newSymbolView", hV.config.symbolsVisible), S.createItem("newComponent", _("editor.newcomponent"), "newComponent", hV.config.componentsVisible)]
				}, {
					id: "edit",
					label: _("editor.edit"),
					items: [S.createItem("undo", _("editor.undo"), "undo"), S.createItem("redo", _("editor.redo"), "redo"), {
						id: "afterRedo",
						separator: !0
					}, S.createItem("copy", _("editor.copy"), "copy"), S.createItem("paste", _("editor.paste"), "paste")]
				}]), S
			}
			return LV(V, q), V.prototype.createItem = function(q, V, n) {
				var S = this,
					_ = arguments.length <= 3 || void 0 === arguments[3] || arguments[3],
					x = {
						id: q,
						label: V,
						visible: _
					};
				return n && (x.action = function() {
					S.editor[n]()
				}), x
			}, V
		}(pn),
		yS = function(q) {
			function V(n) {
				YV(this, V);
				var S = QV(this, q.call(this));
				return S.editor = n, S.initMenu(), S.$69$(), S.enableToolTip(), S
			}
			return LV(V, q), V.prototype.$6$ = function() {
				this.iv()
			}, V.prototype.initMenu = function() {
				var q = this;
				this.editor.mainMenu = new pS(this.editor);
				var V = function(V) {
					var n = q.editor.mainMenu;
					n.isShowing() && !n.getView().contains(V.target) && n.hide()
				};
				window.addEventListener("touchstart", V, !1), window.addEventListener("mousedown", V, !1)
			}, V.prototype.$69$ = function() {
				var q = function(q) {
						return function(V) {
							"node" === q || "subgraph" === q || ("edge" === q ? V.s({
								"edge.width": 1,
								"edge.color": hV.config.color_data_border
							}) : "group" === q ? V.setExpanded(!0) : "arc" === q ? V.s({
								shape: q,
								"shape.background": hV.config.color_data_background,
								"shape.border.width": 1,
								"shape.border.color": hV.config.color_data_border,
								"shape.arc.from": 0,
								"shape.arc.to": 4.1888
							}) : "shape" === q ? V.s({
								"shape.background": null,
								"shape.border.color": hV.config.color_data_border,
								"shape.border.width": 1
							}) : "text" === q ? V.s("text", _("editor.text")) : V.s({
								shape: q,
								"shape.background": hV.config.color_data_background,
								"shape.border.width": 1,
								"shape.border.color": hV.config.color_data_border
							}))
						}
					},
					V = [];
				V.push(this.$68$()), V.push(this.createEditItem()), V.push(this.editor.createDisplayItem("Shape", _("editor.shape"), "editor.display.shape", ht.Shape, q("shape"))), V.push(this.editor.createDisplayItem("Oval", _("editor.oval"), "editor.display.oval", ht.Node, q("oval"))), V.push(this.editor.createDisplayItem("RoundRect", _("editor.roundrect"), "editor.display.roundrect", ht.Node, q("roundRect"))), V.push(this.editor.createDisplayItem("Rect", _("editor.rect"), "editor.display.rect", ht.Node, q("rect"))), V.push(this.editor.createDisplayItem("Polygon", _("editor.polygon"), "editor.display.polygon", ht.Node, q("polygon"))), V.push(this.editor.createDisplayItem("Triangle", _("editor.triangle"), "editor.display.triangle", ht.Node, q("triangle"))), V.push(this.editor.createDisplayItem("Star", _("editor.star"), "editor.display.star", ht.Node, q("star"))), V.push(this.editor.createDisplayItem("Arc", _("editor.arc"), "editor.display.arc", ht.Node, q("arc"))), V.push(this.editor.createDisplayItem("Text", _("editor.text"), "editor.display.text", ht.Text, q("text"))), V.push(this.editor.createDisplayItem("Node", _("editor.node"), "editor.display.node", ht.Node, q("node"))), V.push(this.editor.createDisplayItem("Group", _("editor.group"), "editor.display.group", ht.Group, q("group"))), V.push(this.editor.createDisplayItem("SubGraph", _("editor.subgraph"), "editor.display.subgraph", ht.SubGraph, q("subgraph"))), V.push(this.editor.createDisplayItem("Edge", _("editor.edge"), "editor.display.edge", ht.Edge, q("edge"))), V.push(this.editor.createSymbolItem("shape", _("editor.shape"), "editor.symbol.shape", "shape")), V.push(this.editor.createSymbolItem("oval", _("editor.oval"), "editor.symbol.oval", "oval")), V.push(this.editor.createSymbolItem("roundRect", _("editor.roundrect"), "editor.symbol.roundrect", "roundRect")), V.push(this.editor.createSymbolItem("rect", _("editor.rect"), "editor.symbol.rect", "rect")), V.push(this.editor.createSymbolItem("polygon", _("editor.polygon"), "editor.symbol.polygon", "polygon")), V.push(this.editor.createSymbolItem("triangle", _("editor.triangle"), "editor.symbol.triangle", "triangle")), V.push(this.editor.createSymbolItem("star", _("editor.star"), "editor.symbol.star", "star")), V.push(this.editor.createSymbolItem("arc", _("editor.arc"), "editor.symbol.arc", "arc")), V.push(this.editor.createSymbolItem("text", _("editor.text"), "editor.symbol.text", "text")), V.push(this.editor.createSymbolItem("border", _("editor.border"), "editor.symbol.border", "border")), V.push(this.editor.createSymbolItem("piechart", _("editor.piechart"), "editor.symbol.piechart", "pieChart")), V.push(this.editor.createSymbolItem("onedimensionalcolumnchart", _("editor.onedimensionalcolumnchart"), "editor.symbol.onedimensionalcolumnchart", "oneDimensionalColumnChart")), V.push(this.editor.createSymbolItem("columnchart", _("editor.columnchart"), "editor.symbol.columnchart", "columnChart")), V.push(this.editor.createSymbolItem("linechart", _("editor.linechart"), "editor.symbol.linechart", "lineChart")), this.setItems(V)
			}, V.prototype.$68$ = function() {
				var q = this,
					V = sq("menu", _("editor.menu"), "editor.menu");
				return V.action = function(V, n, S) {
					q.editor.mainMenu.isShowing() || (q.editor.mainMenu.showOnView(q, 4, 20), S.preventDefault(), S.stopPropagation())
				}, V
			}, V.prototype.createEditItem = function() {
				var q = this,
					V = function() {
						return q.editor.currentView && "edit" === q.editor.currentView.$4$()
					},
					n = sq("edit", _("editor.edit"), "editor.edit", V);
				return n.visible = function() {
					return !!q.editor.currentView
				}, n.action = function() {
					var V = q.editor.currentView;
					V && V.$5$("edit")
				}, n
			}, V
		}(Cn),
		XS = function(q) {
			function V(n) {
				YV(this, V);
				var S = QV(this, q.call(this));
				return S.editor = n, S.$69$(), S.enableToolTip(), S.setStickToRight(!0), S
			}
			return LV(V, q), V.prototype.handlePropertyChange = function(q) {
				"zoom" === q.property && this.$70$()
			}, V.prototype.$70$ = function() {
				this.label.innerHTML = this.graphView ? parseInt(100 * this.graphView.getZoom()) + "%" : ""
			}, V.prototype.$6$ = function(q) {
				this.graphView && this.graphView.removePropertyChangeListener(this.handlePropertyChange, this), q ? (this.graphView = q.getView().graphView, this.graphView.addPropertyChangeListener(this.handlePropertyChange, this)) : this.graphView = null, this.iv(), this.$70$()
			}, V.prototype.$69$ = function() {
				var q = this,
					V = void 0,
					n = function() {
						return !!q.graphView
					},
					S = [];
				V = sq("undo", _("editor.undo"), "editor.undo"), V.action = function() {
					q.editor.undo()
				}, V.visible = n, S.push(V), V = sq("redo", _("editor.redo"), "editor.redo"), V.action = function() {
					q.editor.redo()
				}, V.visible = n, S.push(V), S.push({
					separator: !0,
					visible: n
				}), V = sq("rulers", _("editor.showrulers"), "editor.rulers", function() {
					return q.editor.isRulerEnabled()
				}), V.action = function() {
					q.editor.toggleRulerEnabled()
				}, V.visible = n, S.push(V), V = sq("grid", _("editor.showgrid"), "editor.grid", function() {
					return q.editor.isGridEnabled()
				}), V.action = function() {
					q.editor.toggleGridEnabled()
				}, V.visible = n, S.push(V), S.push({
					separator: !0,
					visible: n
				}), V = sq("save", _("editor.save"), "editor.save"), V.action = function() {
					q.editor.save()
				}, V.visible = n, S.push(V), V = sq("preview", _("editor.preview"), "editor.preview"), V.action = function() {
					q.editor.preview()
				}, V.visible = n, S.push(V), V = sq("reload", _("editor.reload"), "editor.reload"), V.action = function() {
					q.editor.reload()
				}, V.visible = n, S.push(V), S.push({
					separator: !0,
					visible: n
				}), V = sq("zoomOut", _("editor.zoomout"), "editor.zoomout"), V.action = function() {
					q.editor.zoomOut()
				}, V.visible = n, S.push(V), S.push(this.createZoomItem(n)), V = sq("zoomIn", _("editor.zoomin"), "editor.zoomin"), V.action = function() {
					q.editor.zoomIn()
				}, V.visible = n, S.push(V), V = sq("zoomToFit", _("editor.zoomtofit"), "editor.zoomtofit"), V.action = function() {
					q.editor.zoomToFit()
				}, V.visible = n, S.push(V), S.push({
					separator: !0,
					visible: n
				}), V = sq("toggleLeft", _("editor.toggleleft"), "editor.toggleleft"), V.action = function() {
					q.editor.toggleLeft()
				}, S.push(V), V = sq("toggleBoth", _("editor.toggleboth"), "editor.toggleboth"), V.action = function() {
					q.editor.toggleBoth()
				}, S.push(V), V = sq("toggleRight", _("editor.toggleright"), "editor.toggleright"), V.action = function() {
					q.editor.toggleRight()
				}, S.push(V), this.setItems(S)
			}, V.prototype.createZoomItem = function(q) {
				var V = this,
					n = this.label = ht.Default.createDiv(!0);
				n.style.font = this.getLabelFont(), n.style.color = this.getLabelColor(), n.style.cursor = "ew-resize", n.style.width = "40px", n.style.height = ht.Default.widgetRowHeight + "px", n.style.lineHeight = ht.Default.widgetRowHeight + "px", n.style.whiteSpace = "nowrap", n.style.textAlign = "center";
				var S = function(q) {
					q.preventDefault();
					var n = V.editor.gv;
					if(n) {
						y(q) && V.editor.zoomReset();
						var S = n.getZoom(),
							_ = e(q).x,
							x = function(q) {
								q.preventDefault();
								var V = e(q).x - _;
								n.setZoom(S * (1 + .005 * V))
							};
						window.addEventListener("mousemove", x, !1), window.addEventListener("touchmove", x, !1);
						var O = function(q) {
							q.preventDefault(), window.removeEventListener("mousemove", x, !1), window.removeEventListener("touchmove", x, !1), window.removeEventListener("mouseup", O, !1), window.removeEventListener("touchend", O, !1)
						};
						window.addEventListener("mouseup", O, !1), window.addEventListener("touchend", O, !1)
					}
				};
				return n.addEventListener("mousedown", S, !1), n.addEventListener("touchstart", S, !1), {
					id: "zoom",
					unfocusable: !0,
					element: n,
					visible: q
				}
			}, V
		}(Cn),
		eS = function(q) {
			function V(n) {
				YV(this, V);
				var S = QV(this, q.call(this));
				S.editor = n, S._errorMsg = null, S.$72$(), S.$71$(), S.$73$(), S.splitView = new bn(S.inspectorPane, S.graphView, "v", (-200)), S.mainSplitView = new bn(S.funcPane, S.splitView, "h", (-360));
				var x = [];
				return x.push({
					label: _("editor.refresh"),
					action: function() {
						S.refresh()
					}
				}), x.push({
					label: _("editor.ok"),
					action: function() {
						S.ok()
					}
				}), x.push({
					label: _("editor.cancel"),
					action: function() {
						S.hide()
					}
				}), S.setConfig({
					closable: !0,
					draggable: !0,
					width: hV.config.componentViewSize.width,
					height: hV.config.componentViewSize.height,
					contentPadding: 0,
					resizeMode: "wh",
					maximizable: !0,
					content: S.mainSplitView,
					buttons: x,
					buttonsAlign: "right"
				}), S
			}
			return LV(V, q), V.prototype.$49$ = function() {
				this.hide()
			}, V.prototype.$48$ = function() {
				this.ok()
			}, V.prototype.$72$ = function() {
				var q = this;
				ht.Default.setCompType("_editingCompType_", {
					func: function() {}
				}), this.node = new ht.Node, this.node.setImage({
					width: 100,
					height: 100,
					fitSize: !0,
					comps: [{
						type: "_editingCompType_"
					}]
				}), this.graphView = new yn, this.graphView.dm().add(this.node), this.graphView.sm().ss(this.node), this.graphView.mi(function(V) {
					"doubleClickData" !== V.kind && "doubleClickBackground" !== V.kind || q.graphView.fitContent(hV.config.animate, hV.config.fitPadding)
				});
				var V = this;
				ht.Default.drawCompType = function(q, n, S, x, O, w) {
					var K = "_editingCompType_" === x.type;
					try {
						K && V.beforeDrawCompType(n), q(n, S, x, O, w), K && V.afterDrawCompType(n)
					} catch(q) {
						K && (V.afterDrawCompType(n), V._errorMsg = _("editor.compFunctionError")), console.error(q.stack || q)
					}
				}
			}, V.prototype.beforeDrawCompType = function(q) {
				var V = this._restoreFlag;
				V || (V = this._restoreFlag = q.createLinearGradient(0, 0, 10, 10), V.addColorStop(0, "black"), V.addColorStop(0, "black")), q.fillStyle = V, q.save(), q.fillStyle = "#000000"
			}, V.prototype.afterDrawCompType = function(q) {
				if(q.restore(), q.fillStyle !== this._restoreFlag) {
					for(var V = 0, n = 20; q.fillStyle !== this._restoreFlag && (q.restore(), V++, !(V >= n)););
					q.fillStyle = "black", this._errorMsg = _("editor.compLossSaveOrRestore")
				} else this._errorMsg = null
			}, V.prototype.$73$ = function() {
				this.funcPane = new aV, this.funcPane.addRow([{
					id: "head",
					element: "function(g, rect, comp, data, view) {"
				}], [.1]);
				var q = ht.Default.getClass(hV.config.codeEditorClass);
				this.funcPane.addRow([{
					id: "func",
					element: new q
				}], [.1], .1), this.funcPane.addRow(["}"], [.1])
			}, V.prototype.$71$ = function() {
				var q = hV.config.indent;
				this.inspectorPane = new aV, this.inspectorPane.addRow([_("editor.name"), {
					id: "name",
					textField: {}
				}], [q, .1]), this.inspectorPane.addRow([_("editor.path"), {
					id: "path",
					textField: {
						editable: !1
					}
				}], [q, .1]), this.inspectorPane.addRow([_("editor.snapshoturl"), {
					id: "snapshotURL",
					textField: {}
				}], [q, .1]), this.inspectorPane.addRow([_("editor.width"), {
					id: "width",
					textField: {}
				}, _("editor.height"), {
					id: "height",
					textField: {}
				}], [q, .1, hV.config.indent2, .1]), this.inspectorPane.addLine(), this.createTable()
			}, V.prototype.$74$ = function(q, V, n, S) {
				return {
					name: q,
					tag: q,
					accessType: "attr",
					width: n,
					displayName: V,
					align: "center",
					enum: S,
					editable: !0
				}
			}, V.prototype.createTable = function() {
				var q = this;
				this.tableModel = new ht.DataModel, this.tablePane = new cn(this.tableModel), this.tableView = this.tablePane.getTableView(), this.tableView.setEditable(!0), this.tablePane.getView().style.border = hV.config.color_line + " solid 1px", this.tablePane.addColumns([this.$74$("property", _("editor.property"), 90), this.$74$("valueType", _("editor.valuetype"), 80, {
					values: hV.consts.valueTypes,
					labels: hV.consts.valueTypeLabels
				}), this.$74$("defaultValue", _("editor.defaultvalue"), 90), this.$74$("name", _("editor.name"), 90), this.$74$("description", _("editor.description"), 120)]), this.$75$(), this.inspectorPane.addRow([this.tablePane], [.1], .1), this.inspectorPane.addRow([{
					button: {
						label: _("editor.add"),
						onClicked: function() {
							var V = new ht.Data;
							V.a({
								property: "property",
								valueType: "String"
							}), q.tableModel.add(V)
						}
					}
				}, {
					button: {
						label: _("editor.delete"),
						onClicked: function() {
							q.tableView.removeSelection()
						}
					}
				}, null], [50, 50, .1])
			}, V.prototype.$75$ = function() {
				var q = this,
					V = this.tableView.getColumnModel().getDataByTag("defaultValue");
				V.getEnumValues = function(q) {
					var V = q ? hV.config.valueTypes[q.a("valueType")] : null;
					return V && "enum" === V.type ? V.values : null
				}, V.getEnumLabels = function(q) {
					var V = q ? hV.config.valueTypes[q.a("valueType")] : null;
					return V && "enum" === V.type ? V.labels : null
				}, V.getEnumIcons = function(q) {
					var V = q ? hV.config.valueTypes[q.a("valueType")] : null;
					return V && "enum" === V.type ? V.icons : null
				}, V.getEnumDropDownWidth = function(q) {
					var V = q ? hV.config.valueTypes[q.a("valueType")] : null;
					return V && "enum" === V.type ? V.dropDownWidth : null
				}, V.getValueType = function(q) {
					var V = q ? hV.config.valueTypes[q.a("valueType")] : null;
					return V ? V.type : null
				}, V.isCellEditable = function(V, n, S, x) {
					var O = V ? hV.config.valueTypes[V.a("valueType")] : null,
						w = O ? O.type : null;
					if("function" === w) {
						var K = _("editor.function") + " " + (V.a("property") || "");
						return q.editor.functionView.open(V.a("defaultValue"), function(q) {
							V.a("defaultValue", q)
						}, K), !1
					}
					if("multiline" === w) return q.editor.textView.open(V.a("defaultValue"), function(q) {
						V.a("defaultValue", q)
					}, V.a("property") || "&nbsp;"), !1;
					if("font" === w) return q.editor.fontView.open(V.a("defaultValue"), function(q) {
						V.a("defaultValue", q)
					}, V.a("property") || "&nbsp;"), !1;
					if("object" === w || "custom" === w || "stringArray" === w || "objectArray" === w || "numberArray" === w || "colorArray" === w) {
						var g = _("editor.object") + " " + (V.a("property") || "");
						return q.editor.objectView.open(V.a("defaultValue"), function(q) {
							V.a("defaultValue", q)
						}, g), !1
					}
					return !0
				}
			}, V.prototype.open = function(q) {
				var V = this;
				this.fileNode = q, q ? Q(q.url, function(n) {
					V.update(q.url, q.path, P(q.getName()), n)
				}) : this.update(void 0, this.editor.components.currentDir, _("editor.untitled"))
			}, V.prototype.update = function(q, V, n, S) {
				if(S) {
					if(S = d(S), this.setTitle(_("editor.editcomponent")), this.node.setWidth(S.width || 100), this.node.setHeight(S.height || 100), this.inspectorPane.v("width", this.node.getWidth()), this.inspectorPane.v("height", this.node.getHeight()), this.inspectorPane.v("snapshotURL", S.snapshotURL || ""), this.inspectorPane.getViewById("name").setEditable(!1), this.inspectorPane.v("name", n || ""), this.inspectorPane.v("path", V || ""), this.funcPane.v("func", K(S.func)), this.tableModel.clear(), S.properties)
						for(var x in S.properties) {
							var O = S.properties[x],
								w = new ht.Data;
							w.a({
								property: x,
								valueType: O.valueType,
								defaultValue: O.defaultValue,
								name: O.name,
								description: O.description
							}), this.tableModel.add(w)
						}
					this.refresh(), this.show(), this.url = q, this.editor.fireEvent("componentViewOpened", {
						componentView: this,
						url: q,
						json: S
					})
				} else this.setTitle(_("editor.newcomponent")), this.node.setWidth(100), this.node.setHeight(100), this.inspectorPane.v("width", this.node.getWidth()), this.inspectorPane.v("height", this.node.getHeight()), this.inspectorPane.v("snapshotURL", ""), this.inspectorPane.getViewById("name").setEditable(!0), this.inspectorPane.v("name", n), this.inspectorPane.v("path", V), this.funcPane.v("func", ""), this.tableModel.clear(), this.refresh(), this.show(), this.url = q, this.editor.fireEvent("componentViewCreated", {
					componentView: this
				})
			}, V.prototype.$76$ = function() {
				var q = this.funcPane.v("head"),
					V = this.funcPane.v("func").trim();
				return g(q + "\n" + V + "\n}")
			}, V.prototype.$77$ = function() {
				var q = {};
				return this.tableModel.each(function(V) {
					q[V.a("property")] = {
						valueType: V.a("valueType"),
						defaultValue: V.a("defaultValue"),
						name: V.a("name"),
						description: V.a("description")
					}
				}), q
			}, V.prototype.refresh = function(q) {
				ht.Default.setCompType("_editingCompType_", {
					func: this.$76$(),
					properties: this.$77$()
				}), this.node.setWidth(parseFloat(this.inspectorPane.v("width"))), this.node.setHeight(parseFloat(this.inspectorPane.v("height"))), this.node.iv(), this.graphView.fitContent(hV.config.animate, hV.config.fitPadding);
				var V = function(n) {
					"validate" === n.kind && (q && q(!this._errorMsg), this._errorMsg && this.editor.showMessage(this._errorMsg, Vn), this.graphView.removeViewListener(V, this))
				};
				this.graphView.addViewListener(V, this)
			}, V.prototype.ok = function() {
				var q = this,
					V = this.inspectorPane.v("name").trim();
				if(V) {
					xq(V) && (V = P(V));
					var n = this.inspectorPane.v("path"),
						S = this.content,
						_ = {
							componentView: this,
							url: this.url || n + "/" + V + ".json",
							json: W(S)
						};
					this.editor.fireEvent("componentViewSaving", _), _.preventDefault || (_ = {
						path: _.url,
						content: _.json
					}, this.refresh(function(x) {
						x && q.editor.request("upload", _, function(x) {
							x === !0 && (q.refresh(), q.graphView.sm().cs(), q.graphView.validate(), q.editor.saveImage(S.snapshotURL || q.graphView, n + "/" + V + ".png"), q.hide(), q.editor.selectFileNode(_.path), _ = {
								componentView: q,
								url: _.path,
								json: _.content
							}, q.editor.fireEvent("componentViewSaved", _))
						})
					}))
				}
			}, MV(V, [{
				key: "content",
				get: function() {
					var q = {
						modified: (new Date).toString(),
						width: parseFloat(this.inspectorPane.v("width")),
						height: parseFloat(this.inspectorPane.v("height")),
						snapshotURL: this.inspectorPane.v("snapshotURL"),
						func: this.$76$()
					};
					return this.tableModel.size() && (q.properties = this.$77$()), q
				}
			}]), V
		}(FV),
		bS = 460,
		cS = 230,
		JS = function(q) {
			function V(n) {
				YV(this, V);
				var S = QV(this, q.call(this));
				S.editor = n, S.addRow([_("editor.binding"), {
					id: "compProperty",
					textField: {
						editable: !1
					}
				}, {
					element: _("editor.type"),
					align: "right"
				}, {
					id: "type",
					comboBox: {
						values: ["attr", "func"],
						onValueChanged: function(q, V) {
							var n = "func" === V,
								_ = n ? ht.Default.labelColor : hV.config.color_disabled;
							S.getViewById("func").setEditable(n), S.getItemById("head").color = _, S.getItemById("end").color = _, S.getViewById("property").setDisabled(n), n && S.getViewById("property").setValue(""), S.iv()
						}
					}
				}, {
					element: _("editor.property"),
					align: "right"
				}, {
					id: "property",
					textField: {}
				}], [50, 90, 40, 60, 60, .1]), S.addLine(), S.addRow([{
					id: "head",
					element: ""
				}], [.1]);
				var x = ht.Default.getClass(hV.config.codeEditorClass);
				S.addRow([{
					id: "func",
					element: new x
				}], [.1], .1), S.addRow([{
					id: "end",
					element: "}"
				}, {
					button: {
						label: _("editor.ok"),
						onClicked: function() {
							S.hide(!0)
						}
					}
				}, {
					button: {
						label: _("editor.cancel"),
						onClicked: function() {
							S.hide()
						}
					}
				}], [.1, 50, 50]), S.setWidth(bS), S.setHeight(cS), S.getView().className = "ht-editor-databinding", S.getView().style.background = hV.config.color_pane, S.getView().style.border = hV.config.color_pane_dark + " solid 1px", S.getView().style.boxShadow = "0px 0px 3px " + ht.Default.toolTipShadowColor, S.getView().style.overflow = "visible";
				var O = function(q) {
					!S.getView().parentNode || S.button.getView().contains(q.target) || S.getViewById("type").getListView().getView().contains(q.target) || S.getView().contains(q.target) || S.hide()
				};
				return window.addEventListener("mousedown", O, !1), window.addEventListener("touchstart", O, !1), S
			}
			return LV(V, q), V.prototype.toggle = function(q, V, n, S, _, x) {
				this.getView().parentNode ? this.hide() : this.show(q, V, n, S, _, x)
			}, V.prototype.show = function(q, V, n, S, _, x) {
				if(!this.getView().parentNode) {
					var O = q.getView().getBoundingClientRect(),
						w = (this.getView().style, J());
					ht.Default.appendToScreen(this), O.bottom + cS + 1 > w.height ? this.getView().style.top = w.top + O.top - cS - 1 + "px" : this.getView().style.top = w.top + O.bottom + 1 + "px", this.getView().style.left = w.left + O.right - bS + "px", this.iv(), this.button = q, this.name = V, this.inspector = S, this.setter = x, this.v("compProperty", n || V);
					var g = void 0,
						A = !1;
					this.inspector.global ? "clip" === V ? (g = _ ? _() : this.inspector.dataModel.a("clip"), this.v("head", "function(g, width, height, data, view, image) {"), A = !0) : (g = _ ? _() : this.inspector.dataModel.a(V + "_func"), this.v("head", "function(data, view) {")) : (g = _ ? _() : this.inspector.data.a(V), this.inspector.data instanceof lS && "type" === V ? (this.v("head", "function(g, rect, comp, data, view) {"), A = !0) : this.v("head", "function(data, view) {"));
					lq(g) ? (nn.test(g) ? (this.v("type", "attr"), this.v("property", g.slice(5))) : (this.v("type", "attr"), this.v("property", g)), this.v("func", "")) : zq(g) ? (this.v("type", "func"), this.v("property", ""), this.v("func", K(g))) : (this.v("type", "attr"), this.v("property", ""), this.v("func", "")), A ? (this.v("type", "func"), this.v("property", ""), this.getViewById("type").setDisabled(!0)) : this.getViewById("type").setDisabled(!1)
				}
			}, V.prototype.hide = function() {
				var q = this,
					V = !(arguments.length <= 0 || void 0 === arguments[0]) && arguments[0];
				if(this.getView().parentNode && (L(this.getView()), V)) {
					var n = this.v("type"),
						S = this.v("property"),
						_ = void 0;
					if("func" === n) {
						var x = this.v("func").trim();
						(x || this.inspector.data instanceof lS && "type" === this.name) && (_ = g(this.v("head") + "\n" + x + "\n}"))
					} else S && "attr" === n && (_ = "attr@" + S);
					this.setter ? this.setter(_) : this.inspector.global ? "clip" === this.name ? this.inspector.dataModel.a("clip", _) : this.inspector.dataModel.a(this.name + "_func", _) : this.inspector.setValue(function(V, n) {
						V.a(q.name, n)
					}, _)
				}
			}, V
		}(aV),
		CS = function(q) {
			function V(n) {
				YV(this, V);
				var S = QV(this, q.call(this));
				S.editor = n, S.createTabView();
				var x = [];
				return x.push({
					label: _("editor.ok"),
					action: function() {
						S.ok()
					}
				}), x.push({
					label: _("editor.cancel"),
					action: function() {
						S.hide()
					}
				}), S.setConfig({
					title: _("editor.eventhandlers"),
					closable: !0,
					draggable: !0,
					width: hV.config.eventViewSize.width,
					height: hV.config.eventViewSize.height,
					contentPadding: 6,
					resizeMode: "wh",
					maximizable: !0,
					content: S.tabView,
					buttons: x,
					buttonsAlign: "right"
				}), S
			}
			return LV(V, q), V.prototype.$49$ = function() {
				this.hide()
			}, V.prototype.$48$ = function() {
				this.ok()
			}, V.prototype.ok = function() {
				var q = this;
				this.target && $V.forEach(function(V) {
					var n = q[V + "FormPane"],
						S = n.v("body").trim();
					"data" === q.inspectorType ? ! function() {
						var n = S ? g("function(event, data, view) {\n" + S + "\n}") : void 0;
						q.target.forEach(function(q) {
							q.s(V, n)
						})
					}() : ! function() {
						var n = S ? g("function(event, data, view, point, width, height) {\n" + S + "\n}") : void 0;
						q.target.forEach(function(q) {
							q.a(V, n)
						})
					}()
				}), this.hide()
			}, V.prototype.createTabView = function() {
				var q = this,
					V = this.tabView = new Jn,
					n = ht.Default.getClass(hV.config.codeEditorClass);
				$V.forEach(function(S) {
					var x = q[S + "FormPane"] = new aV;
					x.addRow([{
						id: "head",
						element: ""
					}], [.1]), x.addRow([{
						id: "body",
						element: new n
					}], [.1], .1), x.addRow(["}"], [.1]), q[S + "Tab"] = V.add(_("editor.event." + S.toLowerCase()), x)
				}), V.getTabModel().sm().ss(V.getTabModel().getDatas().get(0))
			}, V.prototype.open = function(q, V) {
				var n = this;
				q && q.length && (this.target = q, this.inspectorType = V, $V.forEach(function(S) {
					var _ = n[S + "FormPane"];
					"data" === V ? (_.v("head", S + ": function(event, data, view) {"), _.v("body", K(q[q.length - 1].s(S)))) : (_.v("head", S + ": function(event, data, view, point, width, height) {"), _.v("body", K(q[q.length - 1].a(S))))
				}), this.show())
			}, V
		}(FV),
		GS = function(q) {
			function V(n) {
				YV(this, V);
				var S = QV(this, q.call(this));
				S.editor = n, S.formPane = new aV;
				var x = ht.Default.getClass(hV.config.codeEditorClass);
				S.formPane.addRow([{
					id: "function",
					element: new x
				}], [.1], .1);
				var O = [];
				return O.push({
					label: _("editor.ok"),
					action: function() {
						S.ok()
					}
				}), O.push({
					label: _("editor.cancel"),
					action: function() {
						S.hide()
					}
				}), S.setConfig({
					title: _("editor.function"),
					closable: !0,
					draggable: !0,
					width: hV.config.functionViewSize.width,
					height: hV.config.functionViewSize.height,
					contentPadding: 6,
					resizeMode: "wh",
					maximizable: !0,
					content: S.formPane,
					buttons: O,
					buttonsAlign: "right"
				}), S
			}
			return LV(V, q), V.prototype.$49$ = function() {
				this.hide()
			}, V.prototype.$48$ = function() {
				this.ok()
			}, V.prototype.parse = function(q) {
				if(q) return q = q.trim(), q.startsWith("function") || (q = "function() {\n" + q + "\n}"), g(q)
			}, V.prototype.ok = function() {
				this.setValue && this.setValue(this.parse(this.formPane.v("function"))), this.hide()
			}, V.prototype.open = function(q, V, n) {
				this.setValue = V, this.setTitle(n), this.formPane.v("function", w(q)), this.show()
			}, V
		}(FV);
	hV.FunctionView = GS;
	var vS = function(q) {
			function V(n) {
				YV(this, V);
				var S = QV(this, q.call(this));
				S.editor = n;
				var x = ht.Default.getClass(hV.config.codeEditorClass);
				S.formPane = new aV, S.formPane.addRow([{
					id: "object",
					element: new x
				}], [.1], .1);
				var O = [];
				return O.push({
					label: _("editor.ok"),
					action: function() {
						S.ok()
					}
				}), O.push({
					label: _("editor.cancel"),
					action: function() {
						S.hide()
					}
				}), S.setConfig({
					title: _("editor.object"),
					closable: !0,
					draggable: !0,
					width: hV.config.objectViewSize.width,
					height: hV.config.objectViewSize.height,
					contentPadding: 6,
					resizeMode: "wh",
					maximizable: !0,
					content: S.formPane,
					buttons: O,
					buttonsAlign: "right"
				}), S
			}
			return LV(V, q), V.prototype.$49$ = function() {
				this.hide()
			}, V.prototype.$48$ = function() {
				this.ok()
			}, V.prototype.ok = function() {
				if(this.setValue) {
					var q = this.formPane.v("object").trim(),
						V = new Function("return " + q);
					q = V(), this.setValue(q)
				}
				this.hide()
			}, V.prototype.open = function(q, V, n) {
				if(this.setValue = V, this.setTitle(n), q = this.stringify(q, 4)) {
					this._funcMap;
					for(var S in this._funcMap) q = q.replace('"' + S + '"', w(this._funcMap[S]))
				}
				this.formPane.v("object", q), this.show()
			}, V.prototype.stringify = function(q, V) {
				var n = this,
					S = Date.prototype.toJSON;
				Date.prototype.toJSON = function() {
					return "__ht__date" + this.getTime()
				}, this._funcMap = {};
				var _ = JSON.stringify(q, function(q, V) {
					if("function" == typeof V) {
						var S = Math.random().toString().substring(3, 16) + Date.now();
						return n._funcMap[S] = V, S
					}
					return V
				}, null == V ? 2 : V);
				return Date.prototype.toJSON = S, _
			}, V
		}(FV),
		uS = function(q) {
			function V(n) {
				YV(this, V);
				var S = QV(this, q.call(this));
				S.editor = n, S.formPane = new aV, S.formPane.addRow([{
					id: "text",
					textArea: {}
				}], [.1], .1);
				var x = [];
				return x.push({
					label: _("editor.ok"),
					action: function() {
						S.ok()
					}
				}), x.push({
					label: _("editor.cancel"),
					action: function() {
						S.hide()
					}
				}), S.setConfig({
					closable: !0,
					draggable: !0,
					width: hV.config.textViewSize.width,
					height: hV.config.textViewSize.height,
					contentPadding: 6,
					resizeMode: "wh",
					maximizable: !0,
					content: S.formPane,
					buttons: x,
					buttonsAlign: "right"
				}), S
			}
			return LV(V, q), V.prototype.$49$ = function() {
				this.hide()
			}, V.prototype.$48$ = function() {
				this.ok()
			}, V.prototype.ok = function() {
				this.setValue && this.setValue(this.formPane.v("text")), this.hide()
			}, V.prototype.open = function(q, V, n) {
				this.setValue = V, this.setTitle(n), this.formPane.v("text", q), this.show()
			}, V
		}(FV),
		WS = function() {
			function q() {
				YV(this, q)
			}
			return q.prototype.init = function() {
				var q = this.baseFonts = ["monospace", "sans-serif", "serif"],
					V = this.testString = "mmmmmmmmmmlli",
					n = this.testSize = "72px",
					S = this.h = document.getElementsByTagName("body")[0],
					_ = this.s = document.createElement("span");
				_.style.fontSize = n, _.innerHTML = V;
				var x = this.defaultWidth = {},
					O = this.defaultHeight = {};
				for(var w in q) _.style.fontFamily = q[w], S.appendChild(_), x[q[w]] = _.offsetWidth, O[q[w]] = _.offsetHeight, S.removeChild(_);
				this.initialized = !0
			}, q.prototype.detect = function(q) {
				this.initialized || this.init();
				var V = !1,
					n = this.baseFonts,
					S = this.s,
					_ = this.h,
					x = this.defaultWidth,
					O = this.defaultHeight;
				for(var w in n) {
					S.style.fontFamily = q + "," + n[w], _.appendChild(S);
					var K = S.offsetWidth != x[n[w]] || S.offsetHeight != O[n[w]];
					_.removeChild(S), V = V || K
				}
				return V
			}, q
		}(),
		dS = function(q) {
			function V(n) {
				YV(this, V);
				var S = QV(this, q.call(this));
				return S.editor = n, S
			}
			return LV(V, q), V.prototype.init = function() {
				var q = this;
				this._detector = new WS;
				var V = this.borderPane = new jn,
					n = this.rightBorder = new jn,
					S = this.previewGraph = new ht.graph.GraphView,
					x = this.listView = new Xn,
					O = this.formPane = new aV;
				x.getView().style.borderRight = "2px solid #f7f7f7", V.setLeftView(x), V.setCenterView(n), V.setLeftWidth(180), n.setBottomView(S), n.setBottomHeight(120), n.setCenterView(O), S.adjustTranslateX = function() {
					return 0
				}, S.adjustTranslateY = function() {
					return 0
				}, S.handleScroll = function() {
					return !1
				}, S.setScrollBarVisible(!1);
				var w = this.textNode = new ht.Text;
				w.s({
					"2d.selectable": !1,
					text: hV.config.fontPreview
				}), w.setAnchor(0, 0), w.setSize(2e3, 120), w.p(4, 4), S.dm().add(w);
				var K = 60;
				O.setVPadding(32), O.setVGap(32), O.setHGap(0), O.addRow([{
					element: _("editor.font.style"),
					align: "right"
				}, "", {
					id: "normal",
					button: this.createStyleButton(_("editor.font.normal"))
				}, {
					id: "bold",
					button: this.createStyleButton(_("editor.font.bold"))
				}, {
					id: "oblique",
					button: this.createStyleButton(_("editor.font.oblique"))
				}, {
					id: "obliqueBold",
					button: this.createStyleButton(_("editor.font.obliqueBold"))
				}], [K, 8, .1, .1, .1, .1], 32), O.addRow([{
					element: _("editor.font.size"),
					align: "right"
				}, "", {
					id: "fontSize",
					slider: {
						max: 72,
						min: 12,
						step: 1,
						onValueChanged: function(V, n) {
							O.getItemById("fontSizeLabel").element = n + "", O.iv(), q._handleFontChange()
						}
					}
				}, {
					id: "fontSizeLabel",
					element: "12"
				}], [K, 8, .1, 20], 32);
				var g = [];
				g.push({
					label: _("editor.ok"),
					action: function() {
						q.ok()
					}
				}), g.push({
					label: _("editor.cancel"),
					action: function() {
						q.hide()
					}
				}), this.initFontList(), this.setConfig({
					closable: !0,
					draggable: !0,
					width: hV.config.fontViewSize.width,
					height: hV.config.fontViewSize.height,
					contentPadding: 6,
					resizeMode: "wh",
					maximizable: !0,
					content: V,
					buttons: g,
					buttonsAlign: "right"
				}), this._init = !0
			}, V.prototype.createStyleButton = function(q) {
				var V = this;
				return {
					label: q,
					groupId: "fontStyle",
					labelSelectColor: hV.config.color_select,
					labelColor: "#2c2c2c",
					borderSelectColor: "red",
					background: "rgb(247,247,247)",
					selectBackground: "rgb(247,247,247)",
					togglable: !0,
					borderColor: null,
					onClicked: function(q) {
						V._handleFontChange()
					}
				}
			}, V.prototype.initFontList = function() {
				var q = this,
					V = this.listView,
					n = V.getView().style,
					S = V.dm(),
					_ = this._detector,
					x = hV.config.fontList;
				return V.sm().ms(function(V) {
					q._handleFontChange(V)
				}), x.forEach(function(q) {
					if(_.detect(q)) {
						var V = new ht.Node;
						V.setIcon(null), V.setName(q), S.add(V)
					}
				}), S.sm().setSelectionMode("single"), n.background = "white", V
			}, V.prototype.$49$ = function() {
				this.hide()
			}, V.prototype.$48$ = function() {
				this.ok()
			}, V.prototype._handleFontChange = function() {
				this.textNode.s("text.font", this.getFontString())
			}, V.prototype.getFontString = function() {
				var q = this.listView,
					V = this.formPane,
					n = q.sm().ld(),
					S = "";
				if(n) {
					var _ = q.sm().ld().getName();
					return ["bold", "oblique", "obliqueBold"].forEach(function(q, n) {
						var _ = V.getItemById(q);
						_.element.isSelected() && (0 === n ? S = "bold " : 1 === n ? S = "italic " : 2 === n && (S = "italic bold "))
					}), "" + S + V.getValue("fontSize") + "px " + _
				}
			}, V.prototype.ok = function() {
				this.setValue && this.setValue(this.getFontString()), this.hide()
			}, V.prototype.analysisFontString = function() {
				var q = arguments.length <= 0 || void 0 === arguments[0] ? ht.Default.labelFont : arguments[0],
					V = q.split(/px\s+/),
					n = V[0].split(/\s+/),
					S = V[1].split(",").map(function(q) {
						return q.trim()
					}),
					_ = /\d+/,
					x = void 0,
					O = void 0,
					w = void 0;
				n.forEach(function(q) {
					"bold" === q ? x = !0 : "oblique" === q || "italic" === q ? O = !0 : _.test(q) && (w = parseInt(q))
				}), this.setFormValue(w, S, x, O)
			}, V.prototype.setFormValue = function(q, V, n, S) {
				var _ = this.listView,
					x = this.formPane;
				_.sm().cs(), _.dm().each(function(q) {
					q.getName().toLowerCase() === V[0].toLowerCase() && _.sm().ss(q)
				});
				var O = 0;
				n && S ? O = 3 : n ? O = 1 : S && (O = 2), ["normal", "bold", "oblique", "obliqueBold"].forEach(function(q, V) {
					var n = x.getItemById(q);
					n.element.setSelected(O === V)
				}), x.getItemById("fontSizeLabel").element = q + "", x.setValue("fontSize", q)
			}, V.prototype.open = function(q, V, n) {
				this._init || this.init(), this.setValue = V, this.setTitle(n), this.analysisFontString(q), this.show()
			}, V
		}(FV);
	hV.FontView = dS;
	var PS = 300,
		ES = 230,
		YS = function(q) {
			function V(n) {
				YV(this, V);
				var S = QV(this, q.call(this));
				S.editor = n, S.addRow([{
					id: "content",
					textArea: {}
				}], [.1], .1), S.addRow([null, {
					button: {
						label: _("editor.ok"),
						onClicked: function() {
							S.hide(!0)
						}
					}
				}, {
					button: {
						label: _("editor.cancel"),
						onClicked: function() {
							S.hide()
						}
					}
				}], [.1, 50, 50]), S.setWidth(PS), S.setHeight(ES), S.getView().className = "ht-editor-styleicons", S.getView().style.background = hV.config.color_pane, S.getView().style.border = hV.config.color_pane_dark + " solid 1px", S.getView().style.boxShadow = "0px 0px 3px " + ht.Default.toolTipShadowColor, S.getView().style.overflow = "visible";
				var x = function(q) {
					!S.getView().parentNode || S.button.getView().contains(q.target) || S.getView().contains(q.target) || S.hide()
				};
				return window.addEventListener("mousedown", x, !1), window.addEventListener("touchstart", x, !1), S
			}
			return LV(V, q), V.prototype.toggle = function(q, V) {
				this.getView().parentNode ? this.hide() : this.show(q, V)
			}, V.prototype.show = function(q, V) {
				if(!this.getView().parentNode) {
					var n = q.getView().getBoundingClientRect(),
						S = (this.getView().style, J());
					ht.Default.appendToScreen(this), this.getView().style.top = S.top + n.top + "px", this.getView().style.left = S.left + n.left - PS - 4 + "px", this.iv(), this.button = q, this.data = V;
					var _ = V.s("icons");
					this.v("content", _ ? W(_) : "")
				}
			}, V.prototype.hide = function() {
				var q = !(arguments.length <= 0 || void 0 === arguments[0]) && arguments[0];
				if(this.getView().parentNode && (L(this.getView()), q)) {
					var V = this.v("content").trim();
					this.data.s("icons", V ? d(V) : void 0)
				}
			}, V
		}(aV),
		MS = function() {
			function q(V) {
				var n = this;
				YV(this, q), this.editor = V;
				var S = this.container = ht.Default.createDiv(),
					_ = this.wrap = ht.Default.createDiv(),
					x = S.style;
				x.pointerEvents = "none", x.position = "absolute", x.left = 0, x.right = 0, x.top = 0, x.bottom = 0, S.appendChild(_), x = _.style, x.width = "600px", x.position = "absolute", x.left = "50%", x.bottom = "20px", x.marginLeft = "-300px", x.pointerEvents = "none", this._cache = [], this._visibleCount = 0, this.layoutContainer(), window.addEventListener("resize", function() {
					n.layoutContainer()
				})
			}
			return q.prototype.layoutContainer = function() {
				var q = this.container,
					V = ht.Default.getWindowInfo(),
					n = q.style;
				n.width = V.width + "px", n.height = V.height + "px"
			}, q.prototype.createMessage = function(q) {
				var V = this._cache.pop();
				if(!V) {
					V = document.createElement("div");
					var n = V.style;
					n.boxSizing = "border-box", n.padding = 0, n.backgroundColor = "rgba(61,61,61,0.15)", n.color = "rgb(247,247,247)", n.margin = "5px auto", n.textAlign = "center", n.borderRadius = "19px", n.height = 0, n.overflow = "hidden", n.pointerEvents = "none", n.webkitTransition = "0.3s all", n.mozTransition = "0.3s all", n.msTransition = "0.3s all", n.oTransition = "0.3s all", n.transition = "0.3s all"
				}
				return V.innerText = q, V
			}, q.prototype.show = function(q) {
				var V = this,
					n = arguments.length <= 1 || void 0 === arguments[1] ? qn : arguments[1],
					S = arguments.length <= 2 || void 0 === arguments[2] ? 2e3 : arguments[2],
					_ = this.createMessage(q);
				this.wrap.appendChild(_), this._visibleCount || document.body.appendChild(this.container), this._visibleCount++, _.style.backgroundColor = n === qn ? "rgba(61,61,61,0.15)" : "#FF7C7C", setTimeout(function() {
					_.style.height = "38px", _.style.padding = "8px 20px", V.hideLater(_, S)
				}, 10)
			}, q.prototype.hideLater = function(q, V) {
				var n = this;
				setTimeout(function() {
					q.style.height = 0, q.style.padding = 0, setTimeout(function() {
						n.wrap.removeChild(q), n._cache.push(q), n._visibleCount--, n._visibleCount || document.body.removeChild(n.container)
					}, 500)
				}, V)
			}, q
		}(),
		LS = function q(V, n) {
			var S = this;
			YV(this, q), this.editor = V, this.inspector = n, ["isDataTitleVisible", "isDataPropertyVisible", "isCompTitleVisible", "isCompPropertyVisible", "isDisplayTitleVisible", "isDisplayPropertyVisible", "isSymbolTitleVisible", "isSymbolPropertyVisible"].forEach(function(q) {
				S[q] = function() {
					return !(hV.config.detailFilter[q] && !hV.config.detailFilter[q].apply(n, arguments)) && !(V.inspectorCompact && hV.config.compactFilter[q] && !hV.config.compactFilter[q].apply(n, arguments))
				}
			})
		},
		QS = function(q) {
			function V(n, S, _) {
				var x = !(arguments.length <= 3 || void 0 === arguments[3]) && arguments[3];
				YV(this, V);
				var O = QV(this, q.call(this));
				return O.setHPadding(8), O.global = x, O.editor = n, O.name = S, O.type = _, O.setVPadding(0), O.inspectorFilter = new LS(n, O), O.updateHandlers = [], O.propertyChangeHandlers = [], O.editor.fireEvent("inspectorInitializing", {
					inspector: O
				}), O.initForm(), O.editor.fireEvent("inspectorInitialized", {
					inspector: O
				}), O.$104$(), O.editor.fireEvent("inspectorCreated", {
					inspector: O
				}), O.$47$ = O._rows, O
			}
			return LV(V, q), V.prototype.initForm = function() {}, V.prototype.beginTransaction = function() {
				this.dataModel && this.dataModel.beginTransaction()
			}, V.prototype.endTransaction = function() {
				this.dataModel && this.dataModel.endTransaction()
			}, V.prototype.addUpdateHandler = function(q) {
				this.updateHandlers.push(q)
			}, V.prototype.removeUpdateHandler = function(q) {
				x(this.updateHandlers, q)
			}, V.prototype.addPropertyChangeHandler = function(q) {
				this.propertyChangeHandlers.push(q)
			}, V.prototype.removePropertyChangeHandler = function(q) {
				x(this.propertyChangeHandlers, q)
			}, V.prototype.$104$ = function() {
				for(var q = this._rows, V = !0, n = q.length - 1; n >= 0; n--) q[n].title ? V ? this.removeRow(q[n]) : V = !0 : V = !1
			}, V.prototype.isTitleVisible = function(q) {
				return q.visible !== !1 && (!zq(q.visible) || q.visible(this) !== !1)
			}, V.prototype.isPropertyVisible = function(q) {
				var V = this.editor.inspectorInputFilter;
				if(V) {
					if(!q.keys) return !1;
					V = V.toLowerCase();
					var n = q.keys.name;
					if(n && n.toLowerCase().indexOf(V) >= 0) return !0;
					var S = q.keys.displayName;
					return !!(S && S.toLowerCase().indexOf(V) >= 0)
				}
				return q.visible !== !1 && !(zq(q.visible) && !q.visible(this))
			}, V.prototype.makeItemsHidden = function(q) {
				var V = this;
				q.hidden = !0, q.forEach(function(q) {
					var n = V.getItemView(q);
					n && (n.style.display = "none")
				})
			}, V.prototype.makeItemsVisible = function(q) {
				var V = this;
				q.hidden = !1, q.forEach(function(q) {
					var n = V.getItemView(q);
					n && (n.style.display = "block")
				})
			}, V.prototype.filterPropertiesLater = function() {
				var q = this;
				this._filterPropertiesLater || (this._filterPropertiesLater = !0, requestAnimationFrame(function() {
					q.filterProperties()
				}))
			}, V.prototype.isTitleExpanded = function(q) {
				return !(q && !this.editor.inspectorInputFilter) || hV.config.expandedTitles[q]
			}, V.prototype.filterProperties = function() {
				var q = this;
				this._filterPropertiesLater = !1;
				var V = [],
					n = void 0,
					S = !1;
				this.$47$.forEach(function(_) {
					var x = _.items;
					_.title ? (q.isTitleVisible(_) ? (n = _.title, _.button.setIcon(q.isTitleExpanded(n) ? "expandIcon" : "collapseIcon"), !S && V.length && V[V.length - 1].title && q.makeItemsHidden(V.pop().items), V.push(_), q.makeItemsVisible(x)) : (n = "HTISFUCKINGAWESOME", q.makeItemsHidden(x)), S = !1) : (q.isTitleExpanded(n) && q.isPropertyVisible(_) ? (V.push(_), q.makeItemsVisible(x)) : q.makeItemsHidden(x), !S && q.isPropertyVisible(_) && (S = !0))
				}), !S && V.length && V[V.length - 1].title && this.makeItemsHidden(V.pop().items), this._rows = V, this.updateProperties(), this.iv()
			}, V.prototype.addTitle = function(q, V) {
				var n = this,
					S = this._oldTitle;
				this.editor.fireEvent("titleCreating", {
					oldTitle: S,
					title: q,
					inspector: this
				});
				var x = function() {
						hV.config.expandedTitles[q] = !hV.config.expandedTitles[q], n.filterProperties()
					},
					O = [],
					w = this.addButton(O, null, null, null, x, !0);
				w.setBorderColor(null);
				var K = _("editor." + q.toLowerCase(), !0) || _(q);
				O.push({
					element: K,
					font: hV.config.boldFont
				}), V = V || {}, V.title = q, V.background = hV.config.color_pane_dark, V.button = w;
				var g = this.addRow(O, [20, .1], hV.config.inspectorTitleHeight || null, V);
				return this._oldTitle = q, this.editor.fireEvent("titleCreated", {
					oldTitle: S,
					title: q,
					inspector: this
				}), g
			}, V.prototype.$35$ = function(q) {
				var V = this;
				q && (this.propertyChangeHandlers.forEach(function(n) {
					n(q, V)
				}), this.$47$.forEach(function(n) {
					n.onPropertyChanged && n.onPropertyChanged(q, V)
				})), this._updatePropertiesLater || (this._updatePropertiesLater = !0, requestAnimationFrame(function() {
					V.updateProperties()
				}))
			}, V.prototype.updateProperties = function() {
				this._updating = !0, this.updateHandlers.forEach(function(q) {
					q()
				}), this.editor.fireEvent("propertiesUpdated", {
					inspector: this
				}), this._updating = !1, this._updatePropertiesLater = !1
			}, V.prototype.eachSelection = function(q) {
				this.dataModel && (this.beginTransaction(), this.dataModel.sm().each(function(V) {
					q(V)
				}), this.endTransaction())
			}, V.prototype.getPropertyValue = function(q, V) {
				var n = this.global ? this.dataModel : this.data;
				if(n) {
					if(V = this.fixAccessType(V), "s" === V) return n.s(q);
					if("a" === V) return n.a(q);
					if("p" === V) {
						var S = ht.Default.getter(q);
						if(n[S]) return n[S]()
					}
				}
			}, V.prototype.setPropertyValue = function(q, V, n, S) {
				if(!this._updating && this.dataModel) {
					n = this.fixAccessType(n);
					var _ = void 0;
					this.global ? _ = [this.dataModel] : S ? this.data && (_ = [this.data]) : _ = this.dataModel.sm().toSelection().toArray(), _ && _.forEach(function(S) {
						if("s" === n && S.s(q, V), "a" === n && S.a(q, V), "p" === n) {
							var _ = ht.Default.setter(q);
							S[_] && S[_](V)
						}
					})
				}
			}, V.prototype.getValue = function(q) {
				if(this.dataModel) return this.global ? q(this.dataModel) : this.data ? q(this.data) : void 0
			}, V.prototype.setValue = function(q, V, n) {
				!this._updating && this.dataModel && (this.beginTransaction(), this.global ? q(this.dataModel, n ? n() : V) : q.once ? this.data && q(this.data) : this.dataModel.sm().each(function(S) {
					q(S, n ? n() : V)
				}), this.endTransaction())
			}, V.prototype.addLabelArray = function(q, V, n, S, _) {
				return this.addLabel(q, V, n, S), this.addArray(q, n, S, _)
			}, V.prototype.addLabelTextArea = function(q, V, n, S) {
				return this.addLabel(q, V, n, S), this.addTextArea(q, n, S)
			}, V.prototype.addLabelMultiline = function(q, V, n, S) {
				var _ = this;
				this.addLabelInput(q, V, n, S), this.addButton(q, "...", null, null, function(q) {
					var x = function(q) {
						_.setValue(S, q)
					};
					_.editor.textView.open(_.getValue(n), x, V)
				}, !0)
			}, V.prototype.addLabelInput = function(q, V, n, S, _, x, O) {
				return this.addLabel(q, V, n, S, x), this.addInput(q, n, S, _, O)
			}, V.prototype.addLabelRange = function(q, V, n, S, _, x, O, w) {
				return this.addLabelInput(q, V, function(q) {
					var V = n(q);
					return null == V ? x : V
				}, S ? function(q, V) {
					void 0 !== x && V > x && (V = x), void 0 !== _ && V < _ && (V = _), S(q, V)
				} : null, w, O)
			}, V.prototype.addLabelColor = function(q, V, n, S) {
				return this.addLabel(q, V, n, S), this.addColor(q, n, S)
			}, V.prototype.addLabelCheckBox = function(q, V, n, S) {
				return this.addLabel(q, V, n, S), this.addCheckBox(q, n, S)
			}, V.prototype.addLabelFunction = function(q, V, n, S, _) {
				return this.addLabel(q, V, n, S), this.addFunction(q, n, S, _)
			}, V.prototype.addLabelObject = function(q, V, n, S, _) {
				return this.addLabel(q, V, n, S), this.addObject(q, n, S, _)
			}, V.prototype.addLabelComboBox = function(q, V, n, S, _, x, O) {
				return this.addLabel(q, V, n, S), this.addComboBox(q, n, S, _, x, O)
			}, V.prototype.addLabelURL = function(q, V, n, S, _) {
				var x = this.addLabelInput(q, V, n, S, null, null, !1);
				return S && ! function() {
					var q = x.getElement();
					x.isDroppable = _ || function(q, V) {
						return !!V.view.draggingData
					}, x.handleCrossDrag = function(V, n, S) {
						"enter" === n ? q.style.border = "solid " + hV.config.color_select_dark + " 2px" : "exit" === n || "cancel" === n ? q.style.border = "" : "over" === n || "drop" === n && (q.style.border = "", q.value = S.view.draggingData.url, x.setFocus(), x.handleChange())
					}
				}(), x
			}, V.prototype.addLabelImage = function(q, V, n, S) {
				var _ = function(q, V) {
					if(!V.view.draggingData) return !1;
					var n = V.view.draggingData.fileType;
					return n === DV || n === TV
				};
				return this.addLabelURL(q, V, n, S, _), this.addImage(q, n, S)
			}, V.prototype.addLabelGradient = function(q, V, n, S, _) {
				var x = this,
					O = [],
					w = function() {
						return x.data && x.data.s(_) || hV.config.color_light
					},
					K = function() {
						return x.data && x.data.s(S) || hV.config.color_select
					};
				hV.consts.gradients.forEach(function(q) {
					q ? O.push({
						width: 20,
						height: 14,
						comps: [{
							type: "rect",
							rect: [0, 0, 20, 14],
							gradient: q,
							gradientColor: {
								func: w
							},
							background: {
								func: K
							}
						}]
					}) : O.push({
						width: 20,
						height: 14,
						comps: []
					})
				});
				var g = this.addLabelComboBox(q, V, function(q) {
					return q.s(n)
				}, function(q, V) {
					q.s(n, V)
				}, hV.consts.gradients, null, O);
				this.updateHandlers.push(function() {
					if(!q.hidden) {
						var V = w(),
							n = K();
						g._lastGradientColor === V && g._lastBackground === n || (g._lastGradientColor = V, g._lastBackground = n, g.iv())
					}
				})
			}, V.prototype.addLabelFont = function(q, V, n, S) {
				var _ = this;
				this.addLabelInput(q, V, function(q) {
					return n(q) || ht.Default.labelFont
				}, S ? function(q, V) {
					S(q, V || void 0)
				} : null), this.addButton(q, "...", null, null, function(q) {
					var x = function(q) {
						_.setValue(S, q)
					};
					_.editor.fontView.open(_.getValue(n), x, V)
				}, !0)
			}, V.prototype.addLabelRotation = function(q, V, n, S, _, x, O) {
				return this.addLabelInput(q, V, function(q) {
					var V = n(q);
					return null == V ? x : 180 / Math.PI * n(q)
				}, S ? function(q, V) {
					V = V * Math.PI / 180, void 0 !== x && V > x && (V = x), void 0 !== _ && V < _ && (V = _), S(q, V)
				} : null, "number", O || 1)
			}, V.prototype.addLabelAlign = function(q, V, n, S) {
				return this.addLabelComboBox(q, V, function(q) {
					return n(q) || "center"
				}, S, hV.consts.aligns, hV.consts.alignLabels)
			}, V.prototype.addLabelVAlign = function(q, V, n, S) {
				return this.addLabelComboBox(q, V, function(q) {
					return n(q) || "bottom"
				}, S, hV.consts.vAligns, hV.consts.vAlignLabels)
			}, V.prototype.addLabelStretch = function(q, V, n, S) {
				this.addLabelComboBox(q, V, function(q) {
					return n(q) || "fill"
				}, S, hV.consts.stretchs, hV.consts.stretchLabels)
			}, V.prototype.addOrientation = function(q, V, n, S) {
				return this.addLabelComboBox(q, V, function(q) {
					return n(q) || "top"
				}, S, hV.consts.orientations, hV.consts.orientationLabels)
			}, V.prototype.addLabelLabel = function(q, V, n, S) {
				this.addLabelInput(q, V, function(q) {
					var V = n(q);
					return V && V.replace && (V = V.replace(/\n/g, "\\n")), V
				}, S ? function(q, V) {
					V && V.replace && (V = V.replace(/\\n/g, "\n")), S(q, V)
				} : null)
			}, V.prototype.toDisplayName = function(q) {
				var V = q[0];
				if(V) {
					if(lq(V)) return V;
					if(lq(V.element)) return V.element;
					if(V.element) return V.element.innerHTML
				}
			}, V.prototype.addLabel = function(q, V, n, S, _) {
				var x = this;
				if(_ && S) {
					var O = mq(V, q.length ? "right" : "left");
					q.push(O), O.style.cursor = "ew-resize";
					var w = function(q) {
						q.preventDefault(), x.beginTransaction();
						var V = x.getValue(n) || 0,
							O = e(q).x,
							w = function(q) {
								q.preventDefault();
								var n = V + (e(q).x - O) * _;
								x.setValue(S, n)
							};
						window.addEventListener("mousemove", w, !1), window.addEventListener("touchmove", w, !1);
						var K = function(q) {
							x.endTransaction(), q.preventDefault(), window.removeEventListener("mousemove", w, !1), window.removeEventListener("touchmove", w, !1), window.removeEventListener("mouseup", K, !1), window.removeEventListener("touchend", K, !1)
						};
						window.addEventListener("mouseup", K, !1), window.addEventListener("touchend", K, !1)
					};
					return O.addEventListener("mousedown", w, !1), O.addEventListener("touchstart", w, !1), O
				}
				var K = {
					element: V,
					align: q.length ? "right" : "left"
				};
				return q.push(K), K
			}, V.prototype.createHandleChange = function(q, V, n) {
				var S = this;
				return function() {
					var _ = q.value;
					if("pattern" === n)
						if(_ = _.trim()) {
							if(_.indexOf("[") < 0 || _.indexOf("]") < 0) return;
							if(_ = _.replace("[", "").replace("]", "").split(","), _.length) {
								for(var x = [], O = 0; O < _.length; O++) {
									var w = parseFloat(_[O]);
									if(isNaN(w)) return;
									x.push(w)
								}
								_ = x
							} else _ = void 0
						} else _ = void 0;
					else if("number" === n) {
						if(_ = parseFloat(_), isNaN(_)) return
					} else if("int" === n) {
						if(_ = parseInt(_), isNaN(_)) return
					} else _ || (_ = void 0);
					S.setValue(V, _)
				}
			}, V.prototype.createArrayIndexColumn = function(q, V, S, x) {
				var O = this,
					w = q[V],
					K = "object" === x ? W(w) : w;
				return {
					name: V,
					width: 50,
					align: "center",
					editable: !!S,
					sortable: !1,
					clickable: !1,
					getValueType: function(q) {
						return x
					},
					getValue: function(q) {
						return K
					},
					setValue: function(_, x, w, K) {
						O.setValue(S, void 0, function() {
							var S = q.slice();
							return S[V] = n(w), S
						})
					},
					isCellEditable: function(q, n, S, K) {
						if("object" === x) {
							var g = _("editor.object") + " [" + V + "]";
							return O.editor.objectView.open(w, function(V) {
								n.setValue(q, n, V, K)
							}, g), !1
						}
						return !0
					}
				}
			}, V.prototype.addArray = function(q, V, n, S) {
				var x = this,
					O = new cn;
				O.getTableHeader().setMovable(!1), O.getView().style.border = hV.config.color_line + " solid 1px";
				var w = O.getTableView();
				return w.getDataModel().add(new ht.Data), this.updateHandlers.push(function() {
					if(!q.hidden) {
						var K = x.getValue(V);
						if(w.getColumnModel().clear(), O.addColumns([{
								name: _("editor.length"),
								width: 50,
								align: "center",
								editable: !!n,
								sortable: !1,
								clickable: !1,
								valueType: "int",
								getValue: function(q) {
									return K ? K.length : 0
								},
								setValue: function(q, V, _, O) {
									x.setValue(n, void 0, function() {
										if(_ >= 0) {
											var q = rq(K, _);
											return "number" === S || "int" === S ? Iq(q) : "color" === S && oq(q), q
										}
									})
								}
							}]), K) {
							for(var g = [], A = 0; A < K.length; A++) g.push(x.createArrayIndexColumn(K, A, n, S));
							O.addColumns(g)
						}
					}
				}), q.push(O), O
			}, V.prototype.addTextArea = function(q, V, n) {
				var S = this,
					_ = new ht.widget.TextArea,
					x = _.getElement();
				return n ? (x.onblur = function() {
					S.setValue(n, x.value)
				}, x.forceOnblur = x.onblur) : _.setEditable(!1), this.updateHandlers.push(function() {
					if(!q.hidden) {
						var n = S.getValue(V);
						null == n && (n = ""), x.value !== n && (x.value = n)
					}
				}), q.push(_), _
			}, V.prototype.addInput = function(q, V, n, _, x) {
				var O = this,
					w = new ht.widget.TextField;
				"number" !== _ && "int" !== _ || w.setType("number");
				var K = w.getElement();
				return n ? ! function() {
					var q = O.createHandleChange(K, n, _);
					w.handleChange = q, x ? (K.onkeyup = q, K.onchange = q) : (K.onblur = q, K.forceOnblur = K.onblur, K.onkeydown = function(V) {
						N(V) && q()
					})
				}() : w.setEditable(!1), this.updateHandlers.push(function() {
					if(!q.hidden) {
						var n = O.getValue(V);
						"pattern" === _ ? n = n ? "[" + n.join() + "]" : "" : "number" === _ ? n = S(parseFloat(n || 0)) : "int" === _ ? n = parseInt(n || 0) : null == n && (n = ""), K.value !== n && (lq(n) && n.length > 1e3 && n.startsWith("data:image") && (n = n.substr(0, 10) + "[...]"), K.value = n)
					}
				}), q.push(w), w
			}, V.prototype.addColor = function(q, V, n) {
				var S = this,
					_ = new ht.widget.ColorPicker;
				return n ? (_.setInstant(!0), _.onValueChanged = function() {
					S.setValue(n, _.getValue())
				}, _.addViewListener(function(q) {
					"open" === q.kind ? S.beginTransaction() : "close" === q.kind && S.endTransaction()
				})) : _.setDisabled(!0), this.updateHandlers.push(function() {
					if(!q.hidden) {
						var n = S.getValue(V);
						void 0 === n && (n = null), _.getValue() != n && _.setValue(n)
					}
				}), q.push(_), _
			}, V.prototype.addImage = function(q, V, n) {
				var S = this,
					_ = new ht.widget.Image;
				_.vectorDataBindingDisabled = !0, this.updateHandlers.push(function() {
					if(!q.hidden) {
						var n = S.getValue(V);
						_.rawIcon = n, n = ht.Default.getImage(n), n && n.snapshotURL ? _.setIcon(n.snapshotURL) : _.setIcon(_.rawIcon)
					}
				});
				var x = _.getView();
				x.style.cursor = "pointer";
				var O = function(q) {
					q.preventDefault(), y(q) ? S.editor.open(_.rawIcon) : S.editor.selectFileNode(_.rawIcon)
				};
				return x.addEventListener("mousedown", O, !1), x.addEventListener("touchstart", O, !1), q.push(_), _
			}, V.prototype.addCheckBox = function(q, V, n) {
				var S = this,
					_ = new ht.widget.CheckBox;
				return n ? _.onValueChanged = function() {
					S.setValue(n, _.getValue())
				} : _.setDisabled(!0), this.updateHandlers.push(function() {
					if(!q.hidden) {
						var n = !!S.getValue(V);
						_.getValue() !== n && _.setValue(n)
					}
				}), q.push(_), _
			}, V.prototype.addFunction = function(q, V, n, S) {
				var x = this,
					O = function() {
						var q = _("editor.function") + " " + (S || ""),
							O = function(q) {
								x.setValue(n, q)
							};
						x.editor.functionView.open(x.getValue(V), O, q)
					},
					K = S || _("editor.function"),
					g = Dq(K, null, null, O);
				return q.push(g), this.updateHandlers.push(function() {
					if(!q.hidden) {
						var n = x.getValue(V);
						g.setLabel(w(n)), g.setLabelColor(n ? hV.config.color_select : ht.Default.labelColor)
					}
				}), g
			}, V.prototype.addObject = function(q, V, n, S) {
				var x = this,
					O = function() {
						var q = _("editor.object") + " " + (S || ""),
							O = function(q) {
								x.setValue(n, q)
							};
						x.editor.objectView.open(x.getValue(V), O, q)
					},
					w = Dq("", null, null, O);
				return q.push(w), this.updateHandlers.push(function() {
					if(!q.hidden) {
						var n = x.getValue(V);
						w.setLabel(W(n)), w.setLabelColor(void 0 !== n ? hV.config.color_select : ht.Default.labelColor)
					}
				}), w
			}, V.prototype.addComboBox = function(q, V, n, S, _, x) {
				var O = this,
					w = new ht.widget.ComboBox;
				return w.setValues(S), w.setLabels(_), w.setIcons(x), w.setDisabled(!n), n && (w.onValueChanged = function() {
					O.setValue(n, w.getValue())
				}), this.updateHandlers.push(function() {
					if(!q.hidden) {
						var n = O.getValue(V);
						w.getValue() !== n && w.setValue(n)
					}
				}), x && x[0].width && w.setIndent(x[0].width + 4), q.push(w), w
			}, V.prototype.addButton = function(q, V, n, S, _, x) {
				var O = this,
					w = function() {
						O.global || x ? _() : O.eachSelection(_)
					},
					K = Dq(V, n, S, w);
				return q.push(K), K
			}, V.prototype.addFuncRow = function(q, V, n, S) {
				var _ = this,
					x = S ? this.getRowHeight() * S : null,
					O = function() {
						_.dataModel && _.editor.funcView.toggle(K, V, n, _)
					},
					w = (n || V) + ": { func: ... }",
					K = this.addButton(q, null, w, null, O, !0);
				this.updateHandlers.push(function() {
					if(!q.hidden) {
						var n = !1;
						_.global ? _.dataModel && (n = "clip" === V ? zq(_.dataModel.a(V)) : !!_.dataModel.a(V + "_func")) : _.data && (n = !!_.data.a(V)), K.setIcon(n ? "editor.bind.state" : "editor.unbind.state")
					}
				});
				var g = q.length,
					A = void 0;
				return 3 === g ? A = this.addRow(q, [hV.config.indent, .1, 20], x) : 4 === g ? A = this.addRow(q, [hV.config.indent, .1, 20, 20], x) : 5 === g ? A = this.addRow(q, [hV.config.indent, .1, 20, 20, 20], x) : 6 === g && (A = this.addRow(q, [hV.config.indent, .1, 20, 20, 20, 20], x)), A.keys = {
					name: n || V,
					displayName: this.toDisplayName(q)
				}, !this.addingCustomProperties && On[this.type][n || V] && this.removeRows([A]), A
			}, V.prototype.addNameRow = function(q, V, n, S) {
				var _ = S ? this.getRowHeight() * S : null,
					x = q.length,
					O = void 0;
				return 2 === x ? O = this.addRow(q, [hV.config.indent, .1], _) : 3 === x ? O = this.addRow(q, [hV.config.indent, .1, 20], _) : 4 === x ? O = this.addRow(q, [hV.config.indent, .1, 20, 20], _) : 5 === x && (O = this.addRow(q, [hV.config.indent, .1, 20, 20, 20], _)), O.keys = {
					name: V,
					displayName: this.toDisplayName(q),
					accessType: n
				}, V = (n ? n + ":" : "") + V, !this.addingCustomProperties && On[this.type][V] && this.removeRows([O]), O
			}, V.prototype.$78$ = function() {
				var q = this;
				this.addTitle("TitleGridsGuides");
				var V = [];
				this.addLabelInput(V, _("editor.gridblocksize"), function(q) {
					return q.a("gridBlockSize")
				}, function(q, V) {
					V > 0 && q.a("gridBlockSize", V)
				}, "int", 1), this.addNameRow(V, "gridBlockSize", "a"), V = [], this.addLabelInput(V, _("editor.gridthicklinesevery"), function(q) {
					return q.a("gridThickLinesEvery")
				}, function(q, V) {
					V > 0 && q.a("gridThickLinesEvery", V)
				}, "int", 1), this.addNameRow(V, "gridThickLinesEvery", "a"), V = [], this.addLabelColor(V, _("editor.gridthickcolor"), function(q) {
					return q.a("gridThickColor")
				}, function(q, V) {
					q.a("gridThickColor", V)
				}), this.addNameRow(V, "gridThickColor", "a"), V = [], this.addLabelColor(V, _("editor.gridlightcolor"), function(q) {
					return q.a("gridLightColor")
				}, function(q, V) {
					q.a("gridLightColor", V)
				}), this.addNameRow(V, "gridLightColor", "a"), V = [], this.addLabelInput(V, _("editor.gridangle"), function(q) {
					return 180 / Math.PI * q.a("gridAngle")
				}, function(q, V) {
					q.a("gridAngle", V * Math.PI / 180)
				}, "number", 1), this.addNameRow(V, "gridAngle", "a"), V = [], this.addLabelInput(V, _("editor.gridrotation"), function(q) {
					return 180 / Math.PI * q.a("gridRotation")
				}, function(q, V) {
					q.a("gridRotation", V * Math.PI / 180)
				}, "number", 1), this.addNameRow(V, "gridRotation", "a"), V = [], this.addLabelInput(V, _("editor.gridzoomthreshold"), function(q) {
					return q.a("gridZoomThreshold")
				}, function(q, V) {
					V > 0 && q.a("gridZoomThreshold", V)
				}, "number", .01), this.addNameRow(V, "gridZoomThreshold", "a"), V = [null];
				this.addButton(V, _("editor.reset"), null, null, function() {
					q.editor.currentView && q.editor.currentView.resetGrid && q.editor.currentView.resetGrid()
				});
				this.addNameRow(V, "gridReset")
			}, V.prototype.$27$ = function() {
				var q = this;
				this.addTitle("TitleEditingPoint");
				var V = {
					Mirrored: 0,
					Straight: 1,
					Disconnected: 2,
					Asymmetric: 3
				};
				this.editingPointButtons = [];
				var n = function(n, S) {
						var x = _("editor.editingpoint." + S.toLowerCase()),
							O = "editor.point." + S.toLowerCase(),
							w = Dq(x, null, O, function() {
								q.editor.editInteractor.getSubModule("Curve").setCurrentSelectionStatus(w.statusValue)
							});
						w.setOrientation("v"), w.setTogglable(!0), w.setGroupId("editingPoint"), w.statusValue = V[S], q.editingPointButtons.push(w), n.push(w)
					},
					S = [];
				n(S, "Straight"), n(S, "Mirrored"), this.addRow(S, [.1, .1], 60), S = [], n(S, "Disconnected"), n(S, "Asymmetric"), this.addRow(S, [.1, .1], 60)
			}, V.prototype.addCustomProperties = function() {
				var q = this,
					V = hV.config.customProperties[this.type];
				V && V.length && (this.addTitle("TitleCustom"), V.forEach(function(V) {
					q.addCustomProperty(V)
				}))
			}, V.prototype.fixAccessType = function(q) {
				return q = q || "a", "symbol" === this.type ? q = "a" : "comp" === this.type && (q = "s"), q
			}, V.prototype.addEventProperties = function() {
				var q = this,
					V = [],
					n = function() {
						var V = q.global ? q.dataModel : q.data;
						V && (V = q.global ? [q.dataModel] : q.dataModel.sm().getSelection().toArray()), q.editor.eventView.open(V, q.type)
					};
				this.addLabel(V, _("editor.events"));
				var S = this.addButton(V, _("editor.eventhandlers"), null, null, n, !0);
				"data" === this.type ? (this.addCheckBox(V, function(q) {
					return !!q && q.s("interactive")
				}, function(q, V) {
					q && q.s("interactive", V)
				}), this.addRow(V, [hV.config.indent, .1, 20]).keys = {
					name: "eventHandlers"
				}) : this.addRow(V, [hV.config.indent, .1]).keys = {
					name: "eventHandlers"
				}, this.updateHandlers.push(function() {
					if(!V.hidden) {
						var n = !1,
							_ = q.global ? q.dataModel : q.data;
						$V.forEach(function(V) {
							n || (n = "data" === q.type ? _.s(V) : _.a(V))
						}), S.setLabelColor(n ? hV.config.color_select : ht.Default.labelColor)
					}
				})
			}, V.prototype.addCustomProperty = function(q) {
				var V = q.name,
					n = q.valueType,
					S = q.editable !== !1,
					x = q.defaultValue,
					O = this.fixAccessType(q.accessType),
					w = q.dataBinding,
					K = q.property;
				if(n = hV.config.valueTypes[n], !n) return !1;
				this.addingCustomProperties = !0;
				var g = [],
					Z = _(V) || K,
					z = A(O, K),
					H = l(O, K),
					i = function(q) {
						var V = z(q);
						return void 0 === V && (V = x), V
					},
					N = S ? H : null;
				"int" === n.type || "number" === n.type ? n.angle ? this.addLabelRotation(g, Z, i, N, n.min, n.max, n.step) : this.addLabelRange(g, Z, i, N, n.min, n.max, n.step, n.type) : "color" === n.type ? this.addLabelColor(g, Z, i, N) : "boolean" === n.type ? this.addLabelCheckBox(g, Z, i, N) : "enum" === n.type ? this.addLabelComboBox(g, Z, i, N, n.values, n.labels, n.icons) : "image" === n.type ? this.addLabelImage(g, Z, i, N) : "url" === n.type ? this.addLabelURL(g, Z, i, N) : "multiline" === n.type ? this.addLabelMultiline(g, Z, i, N) : "colorArray" === n.type ? this.addLabelArray(g, Z, i, N, "color") : "numberArray" === n.type ? this.addLabelArray(g, Z, i, N, "number") : "stringArray" === n.type ? this.addLabelArray(g, Z, i, N, "string") : "objectArray" === n.type ? this.addLabelArray(g, Z, i, N, "object") : "function" === n.type ? this.addLabelFunction(g, Z, i, N, K) : "object" === n.type ? this.addLabelObject(g, Z, i, N, K) : "custom" === n.type ? n.buildUI(this, g, Z, i, N) : this.addLabelInput(g, Z, i, N);
				var U = void 0;
				"display" !== this.type && w ? "data" === this.type ? U = this.addDBRow(g, O, K, null, n.rows) : "symbol" !== this.type && "comp" !== this.type || (U = this.addFuncRow(g, K, null, n.rows)) : U = this.addNameRow(g, O + ":" + K, O, n.rows), U && (U.visible = q.visible, U.onPropertyChanged = q.onPropertyChanged), this.addingCustomProperties = !1
			}, V
		}(aV);
	hV.Inspector = QS;
	var FS = function(q) {
			function V(n, S) {
				return YV(this, V), QV(this, q.call(this, n, S, "display", !0))
			}
			return LV(V, q), V.prototype.initForm = function() {
				this.addCustomProperties(), this.$12$(), this.$78$(), this.$79$()
			}, V.prototype.isTitleVisible = function(V) {
				return !!this.inspectorFilter.isDisplayTitleVisible(this.editor, V.title) && q.prototype.isTitleVisible.call(this, V)
			}, V.prototype.isPropertyVisible = function(V) {
				return !!this.inspectorFilter.isDisplayPropertyVisible(this.editor, V.keys && V.keys.name) && q.prototype.isPropertyVisible.call(this, V)
			}, V.prototype.$12$ = function() {
				this.addTitle("TitleBasic");
				var q = [];
				this.addLabelInput(q, _("editor.previewurl"), function(q) {
					return q.a("previewURL")
				}, function(q, V) {
					q.a("previewURL", V)
				}), this.addNameRow(q, "previewURL", "a"), q = [], this.addLabelImage(q, _("editor.snapshoturl"), function(q) {
					return q.a("snapshotURL")
				}, function(q, V) {
					q.a("snapshotURL", V)
				}), this.addNameRow(q, "snapshotURL", "a"), q = [], this.addLabelColor(q, _("editor.background"), function(q) {
					return q.getBackground()
				}, function(q, V) {
					q.setBackground(V)
				}), this.addNameRow(q, "background", "p"), q = [], this.addLabelInput(q, _("editor.width"), function(q) {
					return q.a("width")
				}, function(q, V) {
					q.a("width", V)
				}, "number", 1), this.addNameRow(q, "width", "a"), q = [], this.addLabelInput(q, _("editor.height"), function(q) {
					return q.a("height")
				}, function(q, V) {
					q.a("height", V)
				}, "number", 1), this.addNameRow(q, "height", "a"), q = [], this.addLabelInput(q, _("editor.datacount"), function(q) {
					return q.size()
				}), this.addNameRow(q, "count"), q = [], this.addLabelFunction(q, _("editor.onpredeserialize"), function(q) {
					return q.a("onPreDeserialize")
				}, function(q, V) {
					q.a("onPreDeserialize", V)
				}, "onPreDeserialize"), this.addNameRow(q, "onPreDeserialize", "a"), q = [], this.addLabelFunction(q, _("editor.onpostdeserialize"), function(q) {
					return q.a("onPostDeserialize")
				}, function(q, V) {
					q.a("onPostDeserialize", V)
				}, "onPostDeserialize"), this.addNameRow(q, "onPostDeserialize", "a"), q = [], this.addLabelComboBox(q, _("editor.connectactiontype"), function(q) {
					return q.a("connectActionType")
				}, function(q, V) {
					q.a("connectActionType", V)
				}, hV.consts.displayConnectActionTypes, hV.consts.displayConnectActionTypeLabels), this.addNameRow(q, "connectActionType", "a"), q = [], this.addLabelCheckBox(q, _("editor.rotateasclock"), function(q) {
					return q.a("rotateAsClock")
				}, function(q, V) {
					q.a("rotateAsClock", V)
				}), this.addNameRow(q, "rotateAsClock", "a"), q = [], this.addLabelCheckBox(q, _("editor.hierarchicalrendering"), function(q) {
					return q.isHierarchicalRendering()
				}, function(q, V) {
					q.setHierarchicalRendering(V)
				}), this.addNameRow(q, "hierarchicalRendering", "p")
			}, V.prototype.$79$ = function() {
				this.addTitle("TitleLayout");
				var q = [];
				this.$80$(q, "circular"), this.$80$(q, "symmetric"), this.$80$(q, "hierarchical"), this.$80$(q, "towardnorth"), this.$80$(q, "towardsouth"), this.$80$(q, "towardeast"), this.$80$(q, "towardwest"), this.addRow(q, [.1, .1, .1, .1, .1, .1, .1]).keys = {
					name: "layouts"
				}
			}, V.prototype.$80$ = function(q, V) {
				var n = this,
					S = function() {
						n.dataModel && n.dataModel.layout(V)
					};
				return this.addButton(q, null, _("editor.layout." + V), "editor.layout." + V + ".state", S)
			}, V
		}(QS),
		aS = {
			visible: "Boolean",
			selectable: "Boolean",
			movable: "Boolean",
			editable: "Boolean",
			opacity: "Opacity",
			clipPercentage: "Percentage",
			clipDirection: "ClipDirection",
			shadow: "Boolean",
			shadowColor: "Color",
			shadowBlur: "PositiveNumber",
			shadowOffsetX: "PositiveNumber",
			shadowOffsetY: "PositiveNumber",
			type: "String",
			background: "Color",
			repeatImage: "String",
			borderWidth: "PositiveNumber",
			borderColor: "Color",
			border3d: "Boolean",
			border3dColor: "Color",
			border3dAccuracy: "PositiveNumber",
			borderCap: "CapStyle",
			borderJoin: "JoinStyle",
			gradient: "Gradient",
			gradientColor: "Color",
			dash: "Boolean",
			dashOffset: "Number",
			dashColor: "Color",
			dashWidth: "PositiveNumber",
			dash3d: "Boolean",
			dash3dColor: "Color",
			dash3dAccuracy: "PositiveNumber",
			borderWidthAbsolute: "Boolean",
			fillClipPercentage: "Percentage",
			fillClipDirection: "ClipDirection",
			depth: "Number",
			cornerRadius: "PositiveNumber",
			polygonSide: "Int",
			arcFrom: "Number",
			arcTo: "Number",
			arcClose: "Boolean",
			arcOval: "Boolean",
			displayName: "String",
			scaleX: "Number",
			scaleY: "Number",
			anchorX: "Number",
			anchorY: "Number",
			rotation: "Number",
			color: "Color",
			width: "PositiveNumber",
			label: "Boolean",
			labelColor: "Color",
			labelFont: "String",
			minValue: "Number",
			maxValue: "Number",
			linePoint: "Boolean",
			lineWidth: "PositiveNumber",
			line3d: "Boolean",
			text: "String",
			align: "Align",
			vAlign: "VAlign",
			closePath: "Boolean",
			fillRule: "FillRule",
			name: "String",
			stretch: "Stretch",
			values: "NumberArray",
			colors: "ColorArray",
			hollow: "Boolean"
		},
		hS = function(q) {
			function V(n, S) {
				return YV(this, V), QV(this, q.call(this, n, S, "symbol", !0))
			}
			return LV(V, q), V.prototype.initForm = function() {
				this.addCustomProperties(), this.$12$(), this.addDataBindingProperties(), this.$78$()
			}, V.prototype.isTitleVisible = function(V) {
				return !!this.inspectorFilter.isSymbolTitleVisible(this.editor, V.title) && q.prototype.isTitleVisible.call(this, V)
			}, V.prototype.isPropertyVisible = function(V) {
				return !!this.inspectorFilter.isSymbolPropertyVisible(this.editor, V.keys && V.keys.name) && q.prototype.isPropertyVisible.call(this, V)
			}, V.prototype.$12$ = function() {
				var q = this,
					V = void 0;
				this.addTitle("TitleBasic"), this.addEventProperties(), this.addHTMLProperties(), V = [], this.addLabelInput(V, _("editor.previewurl"), function(q) {
					return q.a("previewURL")
				}, function(q, V) {
					q.a("previewURL", V)
				}), this.addRow(V, [hV.config.indent, .1]).keys = {
					name: "previewURL"
				}, V = [], this.addLabelImage(V, _("editor.snapshoturl"), function(q) {
					return q.a("snapshotURL")
				}, function(q, V) {
					q.a("snapshotURL", V)
				}), this.addRow(V, [hV.config.indent, .1, 20]).keys = {
					name: "snapshotURL"
				}, V = [], this.addLabelColor(V, _("editor.background"), function(q) {
					return q.getBackground()
				}, function(q, V) {
					q.setBackground(V)
				}), this.addRow(V, [hV.config.indent, .1]).keys = {
					name: "background"
				}, V = [], this.addLabelInput(V, _("editor.width"), function(q) {
					return q.a("width")
				}, function(q, V) {
					q.a("width", V)
				}, "number", 1), this.addFuncRow(V, "width"), V = [], this.addLabelInput(V, _("editor.height"), function(q) {
					return q.a("height")
				}, function(q, V) {
					q.a("height", V)
				}, "number", 1), this.addFuncRow(V, "height"), V = [], this.addLabelInput(V, _("editor.boundextend"), function(q) {
					return q.a("boundExtend")
				}, function(q, V) {
					q.a("boundExtend", V)
				}, "number", 1), this.addFuncRow(V, "boundExtend"), V = [], this.addLabelComboBox(V, _("editor.connectactiontype"), function(q) {
					return q.a("connectActionType")
				}, function(q, V) {
					q.a("connectActionType", V)
				}, hV.consts.symbolConnectActionTypes, hV.consts.symbolConnectActionTypeLabels), this.addRow(V, [hV.config.indent, .1]).keys = {
					name: "connectActionType"
				}, V = [], this.addLabelCheckBox(V, _("editor.rotateasclock"), function(q) {
					return q.a("rotateAsClock")
				}, function(q, V) {
					q.a("rotateAsClock", V)
				}), this.addFuncRow(V, "rotateAsClock"), V = [], this.addLabelCheckBox(V, _("editor.fitsize"), function(q) {
					return q.a("fitSize")
				}, function(q, V) {
					q.a("fitSize", V)
				}), this.addFuncRow(V, "fitSize"), V = [], this.addLabelCheckBox(V, _("editor.scrollable"), function(q) {
					return q.a("scrollable")
				}, function(q, V) {
					q.a("scrollable", V)
				}), this.addFuncRow(V, "scrollable"), V = [], this.addLabelCheckBox(V, _("editor.interactive"), function(q) {
					return q.a("interactive")
				}, function(q, V) {
					q.a("interactive", V)
				}), this.addFuncRow(V, "interactive"), V = [], this.addLabelCheckBox(V, _("editor.disableselectedborder"), function(q) {
					return q.a("disableSelectedBorder")
				}, function(q, V) {
					q.a("disableSelectedBorder", V)
				}), this.addFuncRow(V, "disableSelectedBorder"), V = [], this.addLabelCheckBox(V, _("editor.pixelperfect"), function(q) {
					return q.a("pixelPerfect")
				}, function(q, V) {
					q.a("pixelPerfect", V)
				}), this.addFuncRow(V, "pixelPerfect"), V = [], this.addLabelCheckBox(V, _("editor.visible"), function(q) {
					return q.a("visible")
				}, function(q, V) {
					q.a("visible", V)
				}), this.addFuncRow(V, "visible"), V = [], this.addLabelCheckBox(V, _("editor.clip"), function(q) {
					return q.a("clip")
				}, function(q, V) {
					q.a("clip", V)
				}).onValueChanged = function(V, n) {
					q.dataModel && (n ? q.dataModel.a("clip") || q.dataModel.a("clip", !0) : q.dataModel.a("clip", !1))
				}, this.addFuncRow(V, "clip"), V = [], this.addLabelComboBox(V, _("editor.blendmode"), function(q) {
					return q.a("blendMode")
				}, function(q, V) {
					q.a("blendMode", V)
				}, ["multiply", "override", "override_rgb", "override_a"], [_("editor.blendmode.multiply"), _("editor.blendmode.override"), _("editor.blendmode.override_rgb"), _("editor.blendmode.override_a")]), this.addFuncRow(V, "blendMode"), V = [], this.addLabelInput(V, _("editor.compcount"), function(q) {
					return q.size()
				}), this.addNameRow(V, "count")
			}, V.prototype.addHTMLProperties = function() {
				var q = this,
					V = [],
					n = function() {
						q.editor.functionView.open(q.dataModel.a("renderHTML"), function(V) {
							q.dataModel.a("renderHTML", V)
						}, _("editor.renderhtml"))
					};
				this.addLabel(V, _("editor.html"));
				var S = this.addButton(V, _("editor.renderhtml"), null, null, n, !0);
				this.addRow(V, [hV.config.indent, .1]).keys = {
					name: "renderHTML"
				}, this.updateHandlers.push(function() {
					if(!V.hidden) {
						var n = q.dataModel.a("renderHTML");
						S.setLabelColor(n ? hV.config.color_select : ht.Default.labelColor)
					}
				})
			}, V.prototype.addDataBindingProperties = function() {
				this.addTitle("TitleDataBinding"), this.$81$(), this.$82$()
			}, V.prototype.$74$ = function(q, V, n, S) {
				var _ = this;
				return {
					name: q,
					tag: q,
					width: n,
					displayName: V,
					align: "center",
					enum: S,
					editable: !0,
					getValue: function(V) {
						return V.dataBinding[q]
					},
					setValue: function(V, n, S, x) {
						V.dataBinding[q] !== S && _.modifyDataBindings(function() {
							V.dataBinding[q] = S
						})
					}
				}
			}, V.prototype.$75$ = function() {
				var q = this,
					V = this.tableView.getColumnModel().getDataByTag("defaultValue");
				V.getEnumValues = function(q) {
					var V = q ? hV.config.valueTypes[q.dataBinding.valueType] : null;
					return V && "enum" === V.type ? V.values : null
				}, V.getEnumLabels = function(q) {
					var V = q ? hV.config.valueTypes[q.dataBinding.valueType] : null;
					return V && "enum" === V.type ? V.labels : null
				}, V.getEnumIcons = function(q) {
					var V = q ? hV.config.valueTypes[q.dataBinding.valueType] : null;
					return V && "enum" === V.type ? V.icons : null
				}, V.getEnumDropDownWidth = function(q) {
					var V = q ? hV.config.valueTypes[q.dataBinding.valueType] : null;
					return V && "enum" === V.type ? V.dropDownWidth : null
				}, V.getValueType = function(q) {
					var V = q ? hV.config.valueTypes[q.dataBinding.valueType] : null;
					return V ? V.type : null
				}, V.isCellEditable = function(V, n, S, x) {
					var O = hV.config.valueTypes[V.dataBinding.valueType],
						w = O ? O.type : null;
					if("function" === w) {
						var K = _("editor.function") + " " + (V.dataBinding.attr || "");
						return q.editor.functionView.open(V.dataBinding.defaultValue, function(n) {
							V.dataBinding.defaultValue = n, q.tableView.redraw()
						}, K), !1
					}
					if("multiline" === w) return q.editor.textView.open(V.dataBinding.defaultValue, function(n) {
						V.dataBinding.defaultValue = n, q.tableView.redraw()
					}, V.dataBinding.attr || "&nbsp;"), !1;
					if("font" === w) return q.editor.fontView.open(V.dataBinding.defaultValue, function(n) {
						V.dataBinding.defaultValue = n, q.tableView.redraw()
					}, V.dataBinding.attr || "&nbsp;"), !1;
					if("object" === w || "stringArray" === w || "custom" === w || "objectArray" === w || "numberArray" === w || "colorArray" === w) {
						var g = _("editor.object") + " " + (V.dataBinding.attr || "");
						return q.editor.objectView.open(V.dataBinding.defaultValue, function(n) {
							V.dataBinding.defaultValue = n, q.tableView.redraw()
						}, g), !1
					}
					return !0
				}
			}, V.prototype.$81$ = function() {
				var q = this,
					V = this.tableModel = new ht.DataModel,
					n = new cn(V),
					S = this.tableView = n.getTableView();
				S.setEditable(!0), n.getView().style.border = hV.config.color_line + " solid 1px", n.addColumns([this.$74$("attr", "Attr", 90), this.$74$("valueType", _("editor.valuetype"), 80, {
					values: hV.consts.valueTypes,
					labels: hV.consts.valueTypeLabels
				}), this.$74$("defaultValue", _("editor.defaultvalue"), 90), this.$74$("name", _("editor.name"), 80), this.$74$("description", _("editor.description"), 120)]), this.$75$();
				var O = [n];
				this.addRow(O, [.1], "120+0.1");
				var w = null;
				this.updateHandlers.push(function() {
					if(!O.hidden && q.dataModel && (!w || q.dataModel.dataBindings !== w)) {
						w = q.dataModel.dataBindings;
						var n = V.sm().toSelection().toArray();
						V.clear(), q.dataModel.dataBindings && q.dataModel.dataBindings.forEach(function(q) {
							var S = new ht.Data;
							S.dataBinding = q, V.add(S);
							for(var _ = 0; _ < n.length; _++)
								if(eq(n[_].dataBinding, q)) {
									x(n, n[_]), V.sm().as(S);
									break
								}
						})
					}
				})
			}, V.prototype.modifyDataBindings = function(q) {
				var V = n(this.dataModel.dataBindings);
				q();
				var S = n(this.dataModel.dataBindings);
				this.dataModel.dataBindings = S, this.dataModel.fp("f:dataBindings", V, S)
			}, V.prototype.$83$ = function(q, V, n, S, _) {
				var x = new ht.Data;
				x.dataBinding = {
					attr: q || "",
					valueType: V || "String",
					defaultValue: n,
					name: S,
					description: _
				};
				var O = {
					symbolView: this.editor.symbolView,
					dataBinding: x.dataBinding
				};
				return this.editor.fireEvent("dataBindingAdding", O), !O.preventDefault && (x.dataBinding = O.dataBinding, this.dataModel.dataBindings || (this.dataModel.dataBindings = []), void this.dataModel.dataBindings.push(x.dataBinding))
			}, V.prototype.add = function() {
				var q = this;
				this.modifyDataBindings(function() {
					q.$83$()
				})
			}, V.prototype.delete = function() {
				var q = this;
				this.tableView.sm().ld() && this.modifyDataBindings(function() {
					q.tableView.sm().each(function(V) {
						x(q.dataModel.dataBindings, V.dataBinding)
					})
				})
			}, V.prototype.reorder = function() {
				var q = this;
				this.dataModel.dataBindings = [], this.tableModel.getRoots().each(function(V) {
					q.dataModel.dataBindings.push(V.dataBinding)
				})
			}, V.prototype.import = function() {
				var q = this;
				this.modifyDataBindings(function() {
					hV.config.clearDataBindingsBeforeImporting && (q.dataModel.dataBindings = []);
					var V = q.editor.symbolView.content,
						n = {};
					V.dataBindings && V.dataBindings.forEach(function(q) {
						n[q.attr] = !0
					}), V.comps.forEach(function(V) {
						for(var S in V) {
							var _ = V[S];
							if(Zq(_))
								if(lq(_.func) && nn.test(_.func)) {
									var x = _.func.slice(5);
									if(!n[x]) {
										var O = void 0,
											w = void 0,
											K = void 0,
											g = void 0;
										if(xq(V.type)) {
											var A = ht.Default.getCompType(V.type);
											if(A) {
												var l = A.properties[S];
												O = l.valueType, K = l.name, g = l.description
											}
										} else O = aS[S];
										q.$83$(x, O, w, K, g), n[x] = !0
									}
								} else {
									var Z = {};
									Rq(_, Z);
									for(var z in Z) n[z] || q.$83$(z, aS[Z[z]])
								}
						}
					})
				})
			}, V.prototype.$82$ = function() {
				var q = this,
					V = hV.config.importDataBindingsButtonVisible ? {
						button: {
							icon: "editor.import",
							toolTip: _("editor.import"),
							onClicked: function() {
								q.import()
							}
						}
					} : null;
				this.addRow([{
					button: {
						icon: "editor.add",
						toolTip: _("editor.add"),
						onClicked: function() {
							q.add()
						}
					}
				}, {
					button: {
						icon: "editor.delete",
						toolTip: _("editor.delete"),
						onClicked: function() {
							q.delete()
						}
					}
				}, V, null, {
					button: {
						icon: "editor.top",
						toolTip: _("editor.bringtofront"),
						onClicked: function() {
							q.tableView.sm().size() && q.modifyDataBindings(function() {
								q.tableModel.moveSelectionToTop(), q.reorder()
							})
						}
					}
				}, {
					button: {
						icon: "editor.up",
						toolTip: _("editor.bringforward"),
						onClicked: function() {
							q.tableView.sm().size() && q.modifyDataBindings(function() {
								q.tableModel.moveSelectionUp(), q.reorder()
							})
						}
					}
				}, {
					button: {
						icon: "editor.down",
						toolTip: _("editor.sendbackward"),
						onClicked: function() {
							q.tableView.sm().size() && q.modifyDataBindings(function() {
								q.tableModel.moveSelectionDown(), q.reorder()
							})
						}
					}
				}, {
					button: {
						icon: "editor.bottom",
						toolTip: _("editor.sendtoback"),
						onClicked: function() {
							q.tableView.sm().size() && q.modifyDataBindings(function() {
								q.tableModel.moveSelectionToBottom(), q.reorder()
							})
						}
					}
				}], [20, 20, 20, .1, 20, 20, 20, 20])
			}, V
		}(QS),
		$S = function(q) {
			function V(n, S) {
				return YV(this, V), QV(this, q.call(this, n, S, "data"))
			}
			return LV(V, q), V.prototype.initForm = function() {
				this.addCustomProperties(), this.$28$()
			}, V.prototype.isTitleVisible = function(V) {
				return !!this.inspectorFilter.isDataTitleVisible(this.editor, this.data, V.title) && q.prototype.isTitleVisible.call(this, V)
			}, V.prototype.isPropertyVisible = function(V) {
				return !!this.inspectorFilter.isDataPropertyVisible(this.editor, this.data, V.keys && V.keys.accessType, V.keys && V.keys.name) && q.prototype.isPropertyVisible.call(this, V)
			}, V.prototype.addDBRow = function(q, V, n, S, _) {
				var x = this,
					O = _ ? this.getRowHeight() * _ : null,
					w = q.length,
					K = void 0;
				return !hV.config.dataBindings || hV.config.dataBindings.filter && !hV.config.dataBindings.filter(V, n) ? 2 === w ? K = this.addRow(q, [hV.config.indent, .1], O, S) : 3 === w ? K = this.addRow(q, [hV.config.indent, .1, 20], O, S) : 4 === w ? K = this.addRow(q, [hV.config.indent, .1, 20, 20], O, S) : 5 === w && (K = this.addRow(q, [hV.config.indent, .1, 20, 20, 20], O, S)) : ! function() {
					var _ = function() {
							hV.config.dataBindings.onButtonClicked(x.data, V, n)
						},
						g = V + ":" + n,
						A = x.addButton(q, null, g, null, _, !0);
					x.updateHandlers.push(function() {
						if(!q.hidden && x.data) {
							var S = hV.config.isDataBound(x.data, V, n);
							A.setIcon(S ? "editor.bind.state" : "editor.unbind.state")
						}
					}), 2 === w ? K = x.addRow(q, [hV.config.indent, .1, 20], O, S) : 3 === w ? K = x.addRow(q, [hV.config.indent, .1, 20, 20], O, S) : 4 === w ? K = x.addRow(q, [hV.config.indent, .1, 20, 20, 20], O, S) : 5 === w && (K = x.addRow(q, [hV.config.indent, .1, 20, 20, 20, 20], O, S))
				}(), K.keys = {
					name: n,
					displayName: this.toDisplayName(q),
					accessType: V
				}, !this.addingCustomProperties && On[this.type][V + ":" + n] && this.removeRows([K]), K
			}, V.prototype.addDBInput = function(q, V, n, S, _) {
				var x = [];
				return this.addLabelInput(x, V, A(q, n), l(q, n), S, _), this.addDBRow(x, q, n)
			}, V.prototype.addDBLabel = function(q, V, n) {
				var S = [];
				return this.addLabelLabel(S, V, A(q, n), l(q, n)), this.addDBRow(S, q, n)
			}, V.prototype.addDBCheckBox = function(q, V, n) {
				var S = [];
				return this.addLabelCheckBox(S, V, A(q, n), l(q, n)), this.addDBRow(S, q, n)
			}, V.prototype.addDBImage = function(q, V, n) {
				var S = [];
				return this.addLabelImage(S, V, A(q, n), l(q, n)), this.addDBRow(S, q, n)
			}, V.prototype.addDBColor = function(q, V, n) {
				var S = [];
				return this.addLabelColor(S, V, A(q, n), l(q, n)), this.addDBRow(S, q, n)
			}, V.prototype.addDBFont = function(q, V, n) {
				var S = [];
				return this.addLabelFont(S, V, A(q, n), l(q, n)), this.addDBRow(S, q, n)
			}, V.prototype.addDBPattern = function(q, V, n) {
				var S = [];
				return this.addLabelInput(S, V, A(q, n), l(q, n), "pattern"), this.addDBRow(S, q, n)
			}, V.prototype.addDBRotation = function(q, V, n) {
				var S = [];
				return this.addLabelRotation(S, V, A(q, n), l(q, n)), this.addDBRow(S, q, n)
			}, V.prototype.addDBAlign = function(q, V, n) {
				var S = [];
				return this.addLabelAlign(S, V, A(q, n), l(q, n)), this.addDBRow(S, q, n)
			}, V.prototype.addDBVAlign = function(q, V, n) {
				var S = [];
				return this.addLabelVAlign(S, V, A(q, n), l(q, n)), this.addDBRow(S, q, n)
			}, V.prototype.addDBOrientation = function(q, V, n) {
				var S = [];
				return this.addOrientation(S, V, A(q, n), l(q, n)), this.addDBRow(S, q, n)
			}, V.prototype.addDBComboBox = function(q, V, n, S, _, x) {
				var O = [];
				return this.addLabelComboBox(O, V, A(q, n), l(q, n), S, _, x), this.addDBRow(O, q, n)
			}, V.prototype.addDBStretch = function(q, V, n) {
				var S = [];
				return this.addLabelStretch(S, V, A(q, n), l(q, n)), this.addDBRow(S, q, n)
			}, V.prototype.addDBZeroToOne = function(q, V, n) {
				var S = [];
				return this.addLabelRange(S, V, A(q, n), l(q, n), 0, 1, .01, "number"), this.addDBRow(S, q, n)
			}, V.prototype.addDBPosition = function(q, V, n) {
				var S = [];
				return this.addLabelRange(S, V, A(q, n), l(q, n), 1, 55, 1, "int"), this.addDBRow(S, q, n)
			}, V.prototype.addDBRange = function(q, V, n, S, _, x, O) {
				var w = [];
				return this.addLabelRange(w, V, A(q, n), l(q, n), S, _, x, O), this.addDBRow(w, q, n)
			}, V.prototype.addDBGradient = function(q, V, n, S) {
				var _ = [];
				return this.addLabelGradient(_, q, V, n, S), this.addDBRow(_, "s", V)
			}, V.prototype.addDBBodyColorProperty = function() {
				this.addDBColor("s", _("editor.bodycolor"), "body.color")
			}, V.prototype.addDBOpacityProperty = function() {
				this.addDBZeroToOne("s", _("editor.opacity"), "opacity")
			}, V.prototype.$84$ = function() {
				var q = this,
					V = [];
				this.addLabel(V, _("editor.icons"));
				var n = function() {
						q.data && q.editor.iconsView.toggle(S, q.data)
					},
					S = this.addButton(V, "Icons", "s:icons", null, n, !0);
				return this.updateHandlers.push(function() {
					V.hidden || S.setLabelColor(q.data.s("icons") ? hV.config.color_select : ht.Default.labelColor)
				}), this.addDBRow(V, "s", "icons")
			}, V.prototype.addDBData = function(q, V, n, S) {
				var _ = this;
				S = S || l(q, n);
				var x = A(q, n),
					O = [],
					w = this.addLabelInput(O, V, function(q) {
						var V = x(q);
						return V ? V.toLabel() || V.getClassName() : ""
					}),
					K = w.getElement();
				w.isDroppable = function(q, V) {
					return V.view.draggingData && _.dataModel === V.view.draggingData.getDataModel()
				}, w.handleCrossDrag = function(q, V, n) {
					"enter" === V ? K.style.border = "solid " + hV.config.color_select_dark + " 2px" : "exit" === V || "cancel" === V ? K.style.border = "" : "over" === V || "drop" === V && (K.style.border = "", _.setValue(S, n.view.draggingData), w.setFocus())
				}, K.onkeydown = function(q) {
					j(q) && _.setValue(S, null)
				};
				var g = new ht.widget.Image;
				return g.drawImage = function(q, V, n, S, x, O) {
					var w = g.data,
						K = _.editor.list;
					w && K && K.dm().contains(w) && (V = K.getIcon(w), V && T(q, ht.Default.getImage(V), "centerUniform", n, S, x, O, w, K))
				}, this.updateHandlers.push(function() {
					if(!O.hidden) {
						var q = g.data;
						g.data = _.getValue(x), g.fp("data", q, g.data)
					}
				}), O.push(g), this.addDBRow(O, q, n)
			}, V.prototype.$28$ = function() {
				this.addTitle("TitleBasic"), this.addEventProperties();
				var q = [];
				this.addLabelInput(q, _("editor.class"), function(q) {
					return q.getClassName()
				}), this.addRow(q, [hV.config.indent, .1]).keys = {
					accessType: "p",
					name: "className"
				}, this.addDBInput("p", _("editor.name"), "displayName"), this.addDBInput("p", _("editor.tag"), "tag"), this.addDBImage("p", _("editor.icon"), "icon"), this.addDBData("p", _("editor.parent"), "parent")
			}, V.prototype.$30$ = function() {
				this.addTitle("TitleLabel"), this.addDBLabel("s", _("editor.content"), "label"), this.addDBFont("s", _("editor.font"), "label.font"), this.addDBColor("s", _("editor.color"), "label.color"), this.addDBColor("s", _("editor.background"), "label.background"), this.addDBPosition("s", _("editor.position"), "label.position"), this.addDBInput("s", _("editor.offsetx"), "label.offset.x", "number", 1), this.addDBInput("s", _("editor.offsety"), "label.offset.y", "number", 1), this.addDBInput("s", _("editor.maxlength"), "label.max", "number", 1), this.addDBRotation("s", _("editor.rotation"), "label.rotation"), this.addDBZeroToOne("s", _("editor.opacity"), "label.opacity"), this.addDBRange("s", _("editor.scale"), "label.scale", .01, 100, .1, "number"), this.addDBAlign("s", _("editor.align"), "label.align"), this.addDBCheckBox("s", _("editor.fixed"), "label.position.fixed")
			}, V.prototype.$31$ = function() {
				this.addTitle("TitleNote"), this.addDBLabel("s", _("editor.content"), "note"), this.addDBFont("s", _("editor.font"), "note.font"), this.addDBColor("s", _("editor.color"), "note.color"), this.addDBColor("s", _("editor.background"), "note.background"), this.addDBInput("s", _("editor.borderwidth"), "note.border.width", "number", 1), this.addDBColor("s", _("editor.bordercolor"), "note.border.color"), this.addDBPosition("s", _("editor.position"), "note.position"), this.addDBInput("s", _("editor.offsetx"), "note.offset.x", "number", 1), this.addDBInput("s", _("editor.offsety"), "note.offset.y", "number", 1), this.addDBZeroToOne("s", _("editor.opacity"), "note.opacity"), this.addDBRange("s", _("editor.scale"), "note.scale", .01, 100, .1, "number"), this.addDBInput("s", _("editor.maxlength"), "note.max", "number", 1), this.addDBAlign("s", _("editor.align"), "note.align"), this.addDBCheckBox("s", _("editor.toggleable"), "note.toggleable"), this.addDBCheckBox("s", _("editor.expanded"), "note.expanded")
			}, V.prototype.addDBLayer = function() {
				var q = this,
					V = [],
					n = A("p", "layer"),
					S = l("p", "layer");
				this.addLabel(V, _("editor.layer"), n, S);
				var x = new ht.widget.ComboBox;
				x.onValueChanged = function() {
					q.setValue(S, x.getValue())
				}, this.updateHandlers.push(function() {
					if(!V.hidden) {
						x.setValues(q.editor.layerPane.layerNames);
						var S = q.getValue(n);
						x.getValue() !== S && x.setValue(S)
					}
				}), V.push(x);
				var O = this.addDBRow(V, "p", "layer");
				return O.items.tag = "layer", O
			}, V.prototype.addDBDesaturate = function() {
				this.addDBCheckBox("s", _("editor.desaturate"), "2d.gray")
			}, V
		}(QS),
		tS = {
			TitleShapeBackground: !0,
			TitleShapeBorder: !0,
			TitleShapeDash: !0
		},
		sS = function(q) {
			function V(n, S) {
				return YV(this, V), QV(this, q.call(this, n, S))
			}
			return LV(V, q), V.prototype.initForm = function() {
				this.addCustomProperties(), this.$28$(), this.$92$(), this.addLayoutProperties(), this.$23$(), this.$29$(), this.$30$(), this.$31$(), this.$26$()
			}, V.prototype.$28$ = function() {
				q.prototype.$28$.call(this), this.addDBDesaturate(), this.addDBLayer(), this.addDBInput("p", _("editor.tooltip"), "toolTip"), this.addDBBodyColorProperty(), this.addDBOpacityProperty(), this.$84$()
			}, V.prototype.$92$ = function() {
				var q = this;
				this.addDBStretch("s", _("editor.stretch"), "image.stretch").items.tag = "imageRelative", this.addDBComboBox("s", _("editor.shape"), "shape", hV.consts.shapes, hV.consts.shapeLabels, hV.consts.shapeIcons);
				var V = [];
				this.addLabelImage(V, _("editor.image"), function(V) {
					var n = V.getImage(),
						S = ht.Default.getImage(n);
					return q.$86$(Zq(S) ? S.dataBindings : null, S), n
				}, function(q, V) {
					q.setImage && (lq(V) && V.endsWith("[...]") || q.setImage(V))
				}), this.addButton(V, null, _("editor.resetsize"), "editor.resetsize.state", function(q) {
					q instanceof ht.Node && q.setSize(-1, -1)
				}), this.imageRow = this.addDBRow(V, "p", "image"), this.imageRow.items.tag = "imageRelative"
			}, V.prototype.addLayoutProperties = function() {
				var q = this;
				this.addTitle("TitleNodeLayout");
				var V = this.layoutGv = window.layoutGv = new ht.graph.GraphView,
					n = this.layoutNode = new ht.Node,
					S = !1;
				n.setImage("editor.layout.helper"), n.a("selectColor", hV.config.color_select), V.dm().add(n), V.tx(50), V.ty(50), V.handleScroll = function() {}, V.handlePinck = function() {}, V.setScrollBarVisible(!1), V.setRectSelectable(!1), V.setPannable(!1), V.setMovableFunc(function() {
					return !1
				}), V.dm().md(function(V) {
					S || ("a:layout.v" === V.property ? q.data.s("layout.v", V.newValue) : "a:layout.h" === V.property && q.data.s("layout.h", V.newValue))
				}), this.addRow(["", {
					element: V
				}, ""], [.1, 100, .1], 100), this.addUpdateHandler(function() {
					var V = q.data;
					S = !0, n.a({
						"layout.v": V.s("layout.v"),
						"layout.h": V.s("layout.h")
					}), S = !1
				}), this.addDBComboBox("s", _("editor.nodeLayout.h"), "layout.h", hV.consts.hLayoutValues, hV.consts.hLayoutLabels), this.addDBComboBox("s", _("editor.nodeLayout.v"), "layout.v", hV.consts.vLayoutValues, hV.consts.vLayoutLabels)
			}, V.prototype.$23$ = function() {
				this.addTitle("TitleNode"), this.addDBInput("p", _("editor.posx"), "x", "number", 1), this.addDBInput("p", _("editor.posy"), "y", "number", 1), this.addDBInput("p", _("editor.width"), "width", "number", 1), this.addDBInput("p", _("editor.height"), "height", "number", 1), this.addDBRotation("p", _("editor.rotation"), "rotation");
				var q = [];
				this.addLabelInput(q, _("editor.scalex"), A("p", "scaleX"), l("p", "scaleX"), "number", .01), this.addButton(q, null, _("editor.flipx"), "editor.flipx", function(q) {
					q instanceof ht.Node && q.setScaleX(-q.getScaleX())
				}), this.addDBRow(q, "p", "scaleX"), q = [], this.addLabelInput(q, _("editor.scaley"), A("p", "scaleY"), l("p", "scaleY"), "number", .01), this.addButton(q, null, _("editor.flipy"), "editor.flipy", function(q) {
					q instanceof ht.Node && q.setScaleY(-q.getScaleY())
				}), this.addDBRow(q, "p", "scaleY"), q = [], this.addLabelInput(q, _("editor.anchorx"), function(q) {
					return q.getAnchor().x
				}, function(q, V) {
					q instanceof ht.Node && q.setAnchor(V, q.getAnchor().y, !0)
				}, "number", .01), this.addDBRow(q, "p", "anchorX"), q = [], this.addLabelInput(q, _("editor.anchory"), function(q) {
					return q.getAnchor().y
				}, function(q, V) {
					q instanceof ht.Node && q.setAnchor(q.getAnchor().x, V, !0)
				}, "number", .01), this.addDBRow(q, "p", "anchorY"), this.$85$(), this.addDBData("p", _("editor.host"), "host", function(q, V) {
					q instanceof ht.Node && (null == V || V instanceof ht.Node) && q.setHost(V)
				}), this.addDBComboBox("s", _("editor.fullscreen"), "fullscreen", hV.consts.fullscreenValues, hV.consts.fullscreenLabels), this.addDBComboBox("s", _("editor.movemode"), "2d.move.mode", [void 0, "x", "y"], ["", _("editor.horizontal"), _("editor.vertical")]), this.addDBCheckBox("s", _("editor.ingroup"), "ingroup"), this.addDBCheckBox("s", _("editor.visible"), "2d.visible"), this.addDBCheckBox("s", _("editor.selectable"), "2d.selectable"), this.addDBCheckBox("s", _("editor.movable"), "2d.movable"), this.addDBCheckBox("s", _("editor.editable"), "2d.editable"), this.addDBCheckBox("s", _("editor.pixelperfect"), "pixelPerfect")
			}, V.prototype.$85$ = function() {
				this.addDBZeroToOne("s", _("editor.clippercentage"), "clip.percentage"), this.addDBComboBox("s", _("editor.clipdirection"), "clip.direction", hV.consts.clipDirections, hV.consts.clipDirectionLabels)
			}, V.prototype.$29$ = function() {
				this.$25$(), this.addShapeForegroundProperties(), this.$33$(), this.addShapeDashProperties()
			}, V.prototype.$25$ = function() {
				this.addTitle("TitleShapeBackground"), this.addDBColor("s", _("editor.background"), "shape.background"), this.addDBGradient(_("editor.gradient"), "shape.gradient", "shape.background", "shape.gradient.color"), this.addDBColor("s", _("editor.gradientcolor"), "shape.gradient.color"), this.addDBImage("s", _("editor.repeatimage"), "shape.repeat.image"), this.addDBZeroToOne("s", _("editor.clippercentage"), "shape.fill.clip.percentage"), this.addDBComboBox("s", _("editor.clipdirection"), "shape.fill.clip.direction", hV.consts.clipDirections, hV.consts.clipDirectionLabels)
			}, V.prototype.addShapeForegroundProperties = function() {
				this.addTitle("TitleShapeForeground"), this.addDBColor("s", _("editor.foreground"), "shape.foreground"), this.addDBGradient(_("editor.gradient"), "shape.foreground.gradient", "shape.foreground", "shape.foreground.gradient.color"), this.addDBColor("s", _("editor.gradientcolor"), "shape.foreground.gradient.color"), this.addDBZeroToOne("s", _("editor.clippercentage"), "shape.foreground.clip.percentage"), this.addDBComboBox("s", _("editor.clipdirection"), "shape.foreground.clip.direction", hV.consts.clipDirections, hV.consts.clipDirectionLabels)
			}, V.prototype.$33$ = function() {
				this.addTitle("TitleShapeBorder"), this.addDBInput("s", _("editor.width"), "shape.border.width", "number", 1), this.addDBCheckBox("s", _("editor.widthabsolute"), "shape.border.width.absolute"), this.addDBPattern("s", _("editor.pattern"), "shape.border.pattern"), this.addDBColor("s", _("editor.color"), "shape.border.color"), this.addDBCheckBox("s", _("editor.threed"), "shape.border.3d"), this.addDBColor("s", _("editor.threedcolor"), "shape.border.3d.color"), this.addDBComboBox("s", _("editor.join"), "shape.border.join", hV.consts.joins, hV.consts.joinLabels), this.addDBComboBox("s", _("editor.cap"), "shape.border.cap", hV.consts.caps, hV.consts.capLabels), this.$24$()
			}, V.prototype.$24$ = function() {
				this.addDBInput("s", _("editor.depth"), "shape.depth", "int", 1).items.tag = "shapeDepth", this.addDBInput("s", _("editor.sides"), "shape.polygon.side", "int", 1).items.tag = "shapeSide", this.addDBInput("s", _("editor.radius"), "shape.corner.radius", "number", 1).items.tag = "shapeRadius", this.addDBCheckBox("s", _("editor.arcoval"), "shape.arc.oval").items.tag = "shapeArc", this.addDBCheckBox("s", _("editor.closed"), "shape.arc.close").items.tag = "shapeArc", this.addDBRotation("s", _("editor.arcfrom"), "shape.arc.from").items.tag = "shapeArc", this.addDBRotation("s", _("editor.arcto"), "shape.arc.to").items.tag = "shapeArc"
			}, V.prototype.addShapeDashProperties = function() {
				this.addTitle("TitleShapeDash"), this.addDBPattern("s", _("editor.pattern"), "shape.dash.pattern"), this.addDBCheckBox("s", _("editor.dash"), "shape.dash"), this.addDBColor("s", _("editor.color"), "shape.dash.color"), this.addDBInput("s", _("editor.offset"), "shape.dash.offset", "number", 1), this.addDBInput("s", _("editor.width"), "shape.dash.width", "number", 1), this.addDBCheckBox("s", _("editor.threed"), "shape.dash.3d"), this.addDBColor("s", _("editor.threedcolor"), "shape.dash.3d.color")
			}, V.prototype.$35$ = function(V) {
				if(V) {
					if("s:shape" === V.property) return void this.filterPropertiesLater();
					if("s:select.type" === V.property) {
						if("shadow" === V.oldValue || "shadow" === V.newValue) return void this.filterPropertiesLater()
					} else "host" === V.property && this.filterPropertiesLater()
				}
				q.prototype.$35$.call(this, V)
			}, V.prototype.isTitleVisible = function(V) {
				if(this.data) {
					if(!(this.data instanceof ht.Shape) && !this.data.s("shape") && tS[V.title]) return !1;
					if("TitleNodeLayout" === V.title && !this.data.getHost()) return !1
				}
				return q.prototype.isTitleVisible.call(this, V)
			}, V.prototype.isPropertyVisible = function(V) {
				if(this.data) {
					var n = V.items.tag;
					if(n)
						if("selectShadow" === n) {
							if("shadow" !== this.data.s("select.type")) return !1
						} else if("shapeDepth" === n) {
						if("rect" !== this.data.s("shape")) return !1
					} else if("shapeSide" === n) {
						if("polygon" !== this.data.s("shape")) return !1
					} else if("shapeRadius" === n) {
						if("roundRect" !== this.data.s("shape")) return !1
					} else if("shapeArc" === n) {
						if("arc" !== this.data.s("shape")) return !1
					} else if("imageRelative" === n) {
						if(this.data.s("shape")) return !1
					} else if("layer" === n && !this.editor.layerPane.layerNames.length) return !1
				}
				return q.prototype.isPropertyVisible.call(this, V)
			}, V.prototype.$86$ = function(q, V) {
				var n = this;
				this.dataBindings !== q && (this.$46$ = q, this.pendingImage = V, this._updateDataBindingsLater || (this._updateDataBindingsLater = !0, requestAnimationFrame(function() {
					n.$87$()
				})))
			}, V.prototype.$87$ = function() {
				var q = this;
				return this._updateDataBindingsLater = !1, this.dataBindings === this.$46$ ? (this.$46$ = null, void(this.pendingImage = null)) : (this._rows = this.$47$, this.removeRows(this.$45$), this.$45$ = [], this.dataBindings = this.$46$, this.dataBindings && ! function() {
					var V = {},
						n = {},
						S = {};
					q.pendingImage.comps.forEach(function(q) {
						if(xq(q.type)) {
							var _ = ht.Default.getCompType(q.type);
							if(_)
								for(var x in _.properties) V[x] = _.properties[x].defaultValue
						}
						Rq(q, n, S)
					});
					for(var _ in n) void 0 === S[_] && (S[_] = V[n[_]]);
					var x = q._rows.indexOf(q.imageRow) + 1;
					q.dataBindings.forEach(function(V) {
						q.$88$(V, x, S) && x++
					})
				}(), this.$47$ = this._rows, void this.filterProperties())
			}, V.prototype.$88$ = function(q, V, n) {
				var S = [],
					x = q.attr,
					O = hV.config.valueTypes[q.valueType];
				if(!O) return this.editor.fireEvent("error", {
					message: "Wrong value type:" + q.valueType
				}), !1;
				var w = _(q.name) || x,
					K = function(q) {
						var V = q.a(x);
						return void 0 === V && (V = n[x]), V
					},
					g = function(q, V) {
						q.a(x, V)
					};
				return "int" === O.type || "number" === O.type ? O.angle ? this.addLabelRotation(S, w, K, g, O.min, O.max, O.step) : this.addLabelRange(S, w, K, g, O.min, O.max, O.step, O.type) : "color" === O.type ? this.addLabelColor(S, w, K, g) : "boolean" === O.type ? this.addLabelCheckBox(S, w, K, g) : "enum" === O.type ? this.addLabelComboBox(S, w, K, g, O.values, O.labels, O.icons) : "multiline" === O.type ? this.addLabelMultiline(S, w, K, g) : "font" === O.type ? this.addLabelFont(S, w, K, g) : "image" === O.type ? this.addLabelImage(S, w, K, g) : "url" === O.type ? this.addLabelURL(S, w, K, g) : "colorArray" === O.type ? this.addLabelArray(S, w, K, g, "color") : "numberArray" === O.type ? this.addLabelArray(S, w, K, g, "number") : "stringArray" === O.type ? this.addLabelArray(S, w, K, g, "string") : "objectArray" === O.type ? this.addLabelArray(S, w, K, g, "object") : "function" === O.type ? this.addLabelFunction(S, w, K, g, x) : "object" === O.type ? this.addLabelObject(S, w, K, g, x) : "custom" === O.type ? O.buildUI(this, S, w, K, g) : this.addLabelInput(S, w, K, g), this.$45$.push(this.addDBRow(S, "a", x, {
					index: V
				}, O.rows)), S.tag = "imageRelative", !0
			}, V.prototype.$26$ = function() {
				this.addTitle("TitleSelect"), this.addDBColor("s", _("editor.color"), "select.color"), this.addDBInput("s", _("editor.width"), "select.width", "number", 1), this.addDBInput("s", _("editor.padding"), "select.padding", "number", 1), this.addDBComboBox("s", _("editor.selecttype"), "select.type", hV.consts.selectTypes, hV.consts.selectTypeLabels, hV.consts.selectTypeIcons), this.addDBInput("s", _("editor.shadowblur"), "shadow.blur", "number", 1).items.tag = "selectShadow", this.addDBInput("s", _("editor.shadowoffsetx"), "shadow.offset.x", "number", 1).items.tag = "selectShadow", this.addDBInput("s", _("editor.shadowoffsety"), "shadow.offset.y", "number", 1).items.tag = "selectShadow"
			}, V
		}($S),
		mS = {
			"h.v": !0,
			"v.h": !0,
			ortho: !0,
			flex: !0,
			"extend.east": !0,
			"extend.west": !0,
			"extend.north": !0,
			"extend.south": !0,
			ortho2: !0,
			flex2: !0,
			"extend.north2": !0,
			"extend.south2": !0,
			"extend.west2": !0,
			"extend.east2": !0,
			"v.h2": !0,
			"h.v2": !0
		},
		DS = {
			"extend.east": !0,
			"extend.west": !0,
			"extend.north": !0,
			"extend.south": !0,
			"extend.north2": !0,
			"extend.south2": !0,
			"extend.west2": !0,
			"extend.east2": !0
		},
		TS = function(q) {
			function V(n, S) {
				return YV(this, V), QV(this, q.call(this, n, S))
			}
			return LV(V, q), V.prototype.initForm = function() {
				this.$27$(), q.prototype.initForm.call(this), this.addDBDesaturate(), this.$89$(), this.$90$(), this.$91$(), this.$30$(), this.$31$(), this.$26$()
			}, V.prototype.isTitleVisible = function(V) {
				return !("TitleEditingPoint" === V.title && !this.editor.pointsEditingMode) && q.prototype.isTitleVisible.call(this, V)
			}, V.prototype.$35$ = function(V) {
				return V && "s:edge.type" === V.property ? void this.filterPropertiesLater() : void q.prototype.$35$.call(this, V)
			}, V.prototype.isPropertyVisible = function(V) {
				if(this.data) {
					var n = V.items.tag;
					if(n) {
						var S = this.data.s("edge.type");
						if("edgeRipple" === n) {
							if("ripple" !== S) return !1
						} else if("edgeRadius" === n) {
							if(!mS[S]) return !1
						} else if("edgeOrtho" === n) {
							if("ortho" !== S && "ortho2" !== S) return !1
						} else if("edgeFlex" === n) {
							if("flex" !== S && "flex2" !== S) return !1
						} else if("edgeExtend" === n) {
							if(!DS[S]) return !1
						} else if("layer" === n && !this.editor.layerPane.layerNames.length) return !1
					}
				}
				return q.prototype.isPropertyVisible.call(this, V)
			}, V.prototype.$28$ = function() {
				q.prototype.$28$.call(this), this.addDBLayer(), this.addDBInput("p", _("editor.tooltip"), "toolTip"), this.addDBOpacityProperty(), this.$84$()
			}, V.prototype.$26$ = function() {
				this.addTitle("TitleSelect"), this.addDBColor("s", _("editor.color"), "select.color"), this.addDBInput("s", _("editor.width"), "select.width", "number", 1);
				var q = [];
				this.addLabelCheckBox(q, _("editor.shadow"), function(q) {
					return "shadow" === q.s("select.type")
				}, function(q, V) {
					q.s("select.type", V ? "shadow" : null)
				}), this.addDBRow(q, "s", "select.type"), this.addDBInput("s", _("editor.shadowblur"), "shadow.blur", "number", 1), this.addDBInput("s", _("editor.shadowoffsetx"), "shadow.offset.x", "number", 1), this.addDBInput("s", _("editor.shadowoffsety"), "shadow.offset.y", "number", 1)
			}, V.prototype.$89$ = function() {
				this.addTitle("TitleEdgeBasic"), this.addDBInput("s", _("editor.width"), "edge.width", "number", 1), this.addDBCheckBox("s", _("editor.widthabsolute"), "edge.width.absolute"), this.addDBPattern("s", _("editor.pattern"), "edge.pattern"), this.addDBColor("s", _("editor.color"), "edge.color"), this.addDBCheckBox("s", _("editor.threed"), "edge.3d"), this.addDBColor("s", _("editor.threedcolor"), "edge.3d.color"), this.addDBComboBox("s", _("editor.join"), "edge.join", hV.consts.joins, hV.consts.joinLabels), this.addDBComboBox("s", _("editor.cap"), "edge.cap", hV.consts.caps, hV.consts.capLabels), this.addDBInput("s", _("editor.group"), "edge.group"), this.addDBInput("s", _("editor.offset"), "edge.offset", "number", 1), this.addDBInput("s", _("editor.gap"), "edge.gap", "number", 1), this.addDBComboBox("s", _("editor.type"), "edge.type", hV.consts.edgeTypes), this.addDBInput("s", _("editor.radius"), "edge.corner.radius", "number", 1).items.tag = "edgeRadius", this.addDBZeroToOne("s", _("editor.ortho"), "edge.ortho").items.tag = "edgeOrtho", this.addDBInput("s", _("editor.flex"), "edge.flex", "number", 1).items.tag = "edgeFlex", this.addDBInput("s", _("editor.extend"), "edge.extend", "number", 1).items.tag = "edgeExtend", this.addDBInput("s", _("editor.ripplesize"), "edge.ripple.size", "int", 1).items.tag = "edgeRipple", this.addDBInput("s", _("editor.ripplelength"), "edge.ripple.length", "number", 1).items.tag = "edgeRipple", this.addDBInput("s", _("editor.rippleelevation"), "edge.ripple.elevation", "number", 1).items.tag = "edgeRipple", this.addDBCheckBox("s", _("editor.rippleboth"), "edge.ripple.both").items.tag = "edgeRipple", this.addDBCheckBox("s", _("editor.ripplestraight"), "edge.ripple.straight").items.tag = "edgeRipple", this.addDBCheckBox("s", _("editor.center"), "edge.center"), this.addDBCheckBox("s", _("editor.ingroup"), "ingroup"), this.addDBCheckBox("s", _("editor.visible"), "2d.visible"), this.addDBCheckBox("s", _("editor.selectable"), "2d.selectable"), this.addDBCheckBox("s", _("editor.editable"), "2d.editable"), this.addDBCheckBox("s", _("editor.independent"), "edge.independent"), this.addDBCheckBox("s", _("editor.toggleable"), "edge.toggleable");
				var q = [],
					V = function(q, V) {
						q instanceof ht.Edge && q.toggle()
					};
				V.once = !0, this.addLabelCheckBox(q, _("editor.expanded"), function(q) {
					return q.s("edge.expanded")
				}, V), this.addDBRow(q, "s", "edge.expanded")
			}, V.prototype.$91$ = function() {
				this.addTitle("TitleEdgeDash"), this.addDBCheckBox("s", _("editor.dash"), "edge.dash"), this.addDBPattern("s", _("editor.pattern"), "edge.dash.pattern"), this.addDBColor("s", _("editor.color"), "edge.dash.color"), this.addDBInput("s", _("editor.offset"), "edge.dash.offset", "number", 1), this.addDBInput("s", _("editor.width"), "edge.dash.width", "number", 1), this.addDBCheckBox("s", _("editor.threed"), "edge.dash.3d"), this.addDBColor("s", _("editor.threedcolor"), "edge.dash.3d.color")
			}, V.prototype.$90$ = function() {
				this.addTitle("TitleEdgeEndpoint"), this.addDBData("p", _("editor.sourcenode"), "source", function(q, V) {
					q instanceof ht.Edge && (null == V || V instanceof ht.Node) && q.setSource(V)
				}), this.addDBData("p", _("editor.targetnode"), "target", function(q, V) {
					q instanceof ht.Edge && (null == V || V instanceof ht.Node) && q.setTarget(V)
				}), this.addDBPosition("s", _("editor.sourceposition"), "edge.source.position"), this.addDBInput("s", _("editor.sourceoffsetx"), "edge.source.offset.x", "number", 1), this.addDBInput("s", _("editor.sourceoffsety"), "edge.source.offset.y", "number", 1), this.addDBInput("s", _("editor.sourceanchorx"), "edge.source.anchor.x", "number", .01), this.addDBInput("s", _("editor.sourceanchory"), "edge.source.anchor.y", "number", .01), this.addDBPosition("s", _("editor.targetposition"), "edge.target.position"), this.addDBInput("s", _("editor.targetoffsetx"), "edge.target.offset.x", "number", 1), this.addDBInput("s", _("editor.targetoffsety"), "edge.target.offset.y", "number", 1), this.addDBInput("s", _("editor.targetanchorx"), "edge.target.anchor.x", "number", .01), this.addDBInput("s", _("editor.targetanchory"), "edge.target.anchor.y", "number", .01)
			}, V
		}($S),
		fS = function(q) {
			function V(n, S) {
				return YV(this, V), QV(this, q.call(this, n, S))
			}
			return LV(V, q), V.prototype.initForm = function() {
				this.addCustomProperties(), this.$28$(), this.$92$(), this.addLayoutProperties(), this.$23$(), this.$32$(), this.$94$(), this.$93$(), this.$29$(), this.$30$(), this.$31$(), this.$26$()
			}, V.prototype.$35$ = function(V) {
				return V && "s:group.type" === V.property ? void this.filterPropertiesLater() : void q.prototype.$35$.call(this, V)
			}, V.prototype.isTitleVisible = function(V) {
				return(!this.data || !this.data.s("group.type") || "TitleGroupTitle" !== V.title) && q.prototype.isTitleVisible.call(this, V)
			}, V.prototype.isPropertyVisible = function(V) {
				if(this.data) {
					var n = V.items.tag;
					if(n && "groupDepth" === n) {
						var S = this.data.s("group.type");
						if(S && "rect" !== S) return !1
					}
				}
				return q.prototype.isPropertyVisible.call(this, V)
			}, V.prototype.$32$ = function() {
				this.addTitle("TitleGroupBasic"), this.addDBComboBox("s", _("editor.type"), "group.type", [void 0, "rect", "oval", "circle", "roundRect"], ["", _("editor.grouptype.rect"), _("editor.grouptype.oval"), _("editor.grouptype.circle"), _("editor.grouptype.roundrect")]), this.addDBPosition("s", _("editor.position"), "group.position"), this.addDBColor("s", _("editor.background"), "group.background"), this.addDBGradient(_("editor.gradient"), "group.gradient", "group.background", "group.gradient.color"), this.addDBColor("s", _("editor.gradientcolor"), "group.gradient.color"), this.addDBImage("s", _("editor.image"), "group.image"), this.addDBStretch("s", _("editor.stretch"), "group.image.stretch"), this.addDBImage("s", _("editor.repeatimage"), "group.repeat.image"), this.addDBCheckBox("s", _("editor.toggleable"), "group.toggleable"), this.addDBCheckBox("p", _("editor.expanded"), "expanded"), this.addDBInput("s", _("editor.depth"), "group.depth", "number", 1).items.tag = "groupDepth"
			}, V.prototype.$94$ = function() {
				this.addTitle("TitleGroupTitle"), this.addDBLabel("s", _("editor.content"), "label"), this.addDBFont("s", _("editor.font"), "group.title.font"), this.addDBColor("s", _("editor.color"), "group.title.color"), this.addDBColor("s", _("editor.background"), "group.title.background"), this.addDBAlign("s", _("editor.align"), "group.title.align"), this.addDBOrientation("s", _("editor.valuetype.orientation"), "group.title.orientation"), this.addDBCheckBox("s", "\u5206\u5272\u7ebf", "group.splitLine")
			}, V.prototype.$93$ = function() {
				this.addTitle("TitleGroupBorder"), this.addDBInput("s", _("editor.width"), "group.border.width", "number", 1), this.addDBPattern("s", _("editor.pattern"), "group.border.pattern"), this.addDBColor("s", _("editor.color"), "group.border.color"), this.addDBComboBox("s", _("editor.join"), "group.border.join", hV.consts.joins, hV.consts.joinLabels), this.addDBComboBox("s", _("editor.cap"), "group.border.cap", hV.consts.caps, hV.consts.capLabels), this.addDBInput("s", _("editor.radius"), "group.border.radius", "number", 1), this.addDBInput("s", _("editor.padding"), "group.padding", "number", 1), this.addDBInput("s", _("editor.paddingleft"), "group.padding.left", "number", 1), this.addDBInput("s", _("editor.paddingright"), "group.padding.right", "number", 1), this.addDBInput("s", _("editor.paddingtop"), "group.padding.top", "number", 1), this.addDBInput("s", _("editor.paddingbottom"), "group.padding.bottom", "number", 1)
			}, V
		}(sS),
		BS = function(q) {
			function V(n, S) {
				return YV(this, V), QV(this, q.call(this, n, S))
			}
			return LV(V, q), V.prototype.initForm = function() {
				this.$27$(), this.addCustomProperties(), this.$28$(), this.addLayoutProperties(), this.$23$(), this.$29$(), this.$30$(), this.$31$(), this.$26$()
			}, V.prototype.isTitleVisible = function(V) {
				return !("TitleEditingPoint" === V.title && !this.editor.pointsEditingMode) && q.prototype.isTitleVisible.call(this, V)
			}, V.prototype.$24$ = function() {
				this.addDBCheckBox("p", _("editor.closed"), "closePath"), this.addDBColor("s", _("editor.outlinecolor"), "border.color"), this.addDBInput("s", _("editor.outlinewidth"), "border.width", "number", 1)
			}, V.prototype.$25$ = function() {
				q.prototype.$25$.call(this), this.addDBComboBox("s", _("editor.fillrule"), "shape.fill.rule", hV.consts.fillRules, hV.consts.fillRuleLabels)
			}, V.prototype.$26$ = function() {
				this.addTitle("TitleSelect"), this.addDBColor("s", _("editor.color"), "select.color"), this.addDBInput("s", _("editor.width"), "select.width", "number", 1);
				var q = [];
				this.addLabelCheckBox(q, _("editor.shadow"), function(q) {
					return "shadow" === q.s("select.type")
				}, function(q, V) {
					q.s("select.type", V ? "shadow" : null)
				}), this.addDBRow(q, "s", "select.type"), this.addDBInput("s", _("editor.shadowblur"), "shadow.blur", "number", 1), this.addDBInput("s", _("editor.shadowoffsetx"), "shadow.offset.x", "number", 1), this.addDBInput("s", _("editor.shadowoffsety"), "shadow.offset.y", "number", 1)
			}, V
		}(sS),
		IS = function(q) {
			function V(n, S) {
				return YV(this, V), QV(this, q.call(this, n, S))
			}
			return LV(V, q), V.prototype.$23$ = function() {
				q.prototype.$23$.call(this), this.addDBCheckBox("p", _("editor.clickthroughenabled"), "clickThroughEnabled");
				var V = [];
				this.addLabelCheckBox(V, _("editor.syncsize"), function(q) {
					return q.isSyncSize()
				}, function(q, V) {
					q instanceof ht.Block && (q.setSyncSize(V), q instanceof ht.RefGraph && (q.p(0, 0), q.setRotation(0), q.setAnchor(.5, .5), q.setScale(1, 1), q.setSize(20, 20), q.setRef(q.getRef())))
				}), this.addDBRow(V, "p", "syncSize")
			}, V.prototype.addDBDesaturate = function() {}, V.prototype.addDBBodyColorProperty = function() {}, V.prototype.addDBOpacityProperty = function() {}, V.prototype.$92$ = function() {}, V.prototype.$29$ = function() {}, V.prototype.$85$ = function() {}, V
		}(sS),
		oS = function(q) {
			function V(n, S) {
				return YV(this, V), QV(this, q.call(this, n, S))
			}
			return LV(V, q), V.prototype.$28$ = function() {
				q.prototype.$28$.call(this), this.addDBRef()
			}, V.prototype.addDBRef = function() {
				var q = this,
					V = [],
					n = function(q) {
						return q.getRef()
					},
					S = function(q, V) {
						q instanceof ht.RefGraph && (q.p(0, 0), q.setRotation(0), q.setAnchor(.5, .5), q.setScale(1, 1), q.setSize(20, 20), q.setRef(V))
					},
					x = function(V, n) {
						var S = n.view.draggingData;
						return !!S && (q.editor.url !== S.url && S.fileType === fV)
					};
				return this.addLabelURL(V, _("editor.ref"), n, S, x), this.addDBRow(V, "p", "ref")
			}, V.prototype.addDBDesaturate = function() {}, V
		}(IS),
		rS = function(q) {
			function V(n, S) {
				return YV(this, V), QV(this, q.call(this, n, S))
			}
			return LV(V, q), V.prototype.initForm = function() {
				this.addCustomProperties(), this.$28$(), this.addLayoutProperties(), this.$22$(), this.$23$(), this.$26$()
			}, V.prototype.$22$ = function() {
				this.addTitle("TitleText"), this.addDBInput("s", _("editor.content"), "text"), this.addDBAlign("s", _("editor.align"), "text.align"), this.addDBVAlign("s", _("editor.valign"), "text.vAlign"), this.addDBColor("s", _("editor.color"), "text.color"), this.addDBFont("s", _("editor.font"), "text.font"), this.addDBCheckBox("s", _("editor.shadow"), "text.shadow"), this.addDBColor("s", _("editor.shadowcolor"), "text.shadow.color"), this.addDBInput("s", _("editor.shadowblur"), "text.shadow.blur", "number", 1), this.addDBInput("s", _("editor.shadowoffsetx"), "text.shadow.offset.x", "number", 1), this.addDBInput("s", _("editor.shadowoffsety"), "text.shadow.offset.y", "number", 1)
			}, V
		}(sS),
		kS = function(q) {
			function V(n, S) {
				return YV(this, V), QV(this, q.call(this, n, S, "comp"))
			}
			return LV(V, q), V.prototype.initForm = function() {
				this.addCustomProperties(), this.$12$(), this.$20$()
			}, V.prototype.isTitleVisible = function(V) {
				return !!this.inspectorFilter.isCompTitleVisible(this.editor, this.data ? this.data.compType : null, V.title) && q.prototype.isTitleVisible.call(this, V)
			}, V.prototype.isPropertyVisible = function(V) {
				return !!this.inspectorFilter.isCompPropertyVisible(this.editor, this.data ? this.data.compType : null, V.keys && V.keys.name) && q.prototype.isPropertyVisible.call(this, V)
			}, V.prototype.$12$ = function() {
				this.addTitle("TitleBasic"), this.addEventProperties(), this.$14$(), this.$15$(), this.$13$(), this.$21$(), this.$16$(), this.$17$(), this.$18$(), this.$19$(), this.addStyleCheckBox(_("editor.visible"), "2d.visible", "visible"), this.addStyleCheckBox(_("editor.selectable"), "2d.selectable", "selectable"), this.addStyleCheckBox(_("editor.movable"), "2d.movable", "movable"), this.addStyleCheckBox(_("editor.editable"), "2d.editable", "editable"), this.addStyleCheckBox(_("editor.pixelperfect"), "comp.pixelPerfect", "pixelPerfect"), this.addStyleZeroToOne(_("editor.opacity"), "opacity", "opacity")
			}, V.prototype.$13$ = function() {
				var q = [];
				this.addLabelInput(q, _("editor.area"), function(q) {
					return "[" + S(q.p().x - q.getWidth() * q.getAnchor().x) + "," + S(q.p().y - q.getHeight() * q.getAnchor().y) + "," + S(q.getWidth()) + "," + S(q.getHeight()) + "]"
				}), this.addFuncRow(q, "rect")
			}, V.prototype.$14$ = function() {
				var q = [];
				this.addLabelInput(q, _("editor.type"), function(q) {
					return q.compType
				}), this.addRow(q, [hV.config.indent, .1]).keys = {
					name: "type"
				}
			}, V.prototype.$15$ = function() {
				var q = [];
				this.addLabelInput(q, _("editor.name"), function(q) {
					return q.getDisplayName()
				}, function(q, V) {
					q.setDisplayName(V)
				}), this.addFuncRow(q, "displayName")
			}, V.prototype.$16$ = function() {
				var q = [];
				this.addLabelInput(q, _("editor.rotation"), function(q) {
					return 180 / Math.PI * q.getRotation()
				}, function(q, V) {
					q instanceof ht.Node && q.setRotation(V * Math.PI / 180)
				}, "number", 1), this.addFuncRow(q, "rotation")
			}, V.prototype.$17$ = function() {
				var q = [];
				this.addLabelInput(q, _("editor.anchorx"), function(q) {
					return q.getAnchor().x
				}, function(q, V) {
					q instanceof ht.Node && q.setAnchor(V, q.getAnchor().y, !0)
				}, "number", .01), this.addFuncRow(q, "anchorX"), q = [], this.addLabelInput(q, _("editor.anchory"), function(q) {
					return q.getAnchor().y
				}, function(q, V) {
					q instanceof ht.Node && q.setAnchor(q.getAnchor().x, V, !0)
				}, "number", .01), this.addFuncRow(q, "anchorY")
			}, V.prototype.$18$ = function() {
				var q = [];
				this.addLabelInput(q, _("editor.scalex"), function(q) {
					return q.getScale().x
				}, function(q, V) {
					q instanceof ht.Node && q.setScale(V, q.getScale().y)
				}, "number", .01), this.addFuncRow(q, "scaleX"), q = [], this.addLabelInput(q, _("editor.scaley"), function(q) {
					return q.getScale().y
				}, function(q, V) {
					q instanceof ht.Node && q.setScale(q.getScale().x, V)
				}, "number", .01), this.addFuncRow(q, "scaleY")
			}, V.prototype.$19$ = function() {
				this.addStyleZeroToOne(_("editor.clippercentage"), "clip.percentage", "clipPercentage"), this.addStyleComboBox(_("editor.clipdirection"), "clip.direction", hV.consts.clipDirections, hV.consts.clipDirectionLabels, null, "clipDirection")
			}, V.prototype.$20$ = function() {
				this.addTitle("TitleShadow"), this.addStyleCheckBox(_("editor.shadow"), "shadow", "shadow"), this.addStyleColor(_("editor.shadowcolor"), "select.color", "shadowColor"), this.addStyleInput(_("editor.shadowblur"), "shadow.blur", "number", 1, "shadowblur"), this.addStyleInput(_("editor.shadowoffsetx"), "shadow.offset.x", "number", 1, "shadowOffsetX"), this.addStyleInput(_("editor.shadowoffsety"), "shadow.offset.y", "number", 1, "shadowOffsetYs")
			}, V.prototype.$21$ = function() {
				var q = [];
				return this.addLabelInput(q, _("editor.posx"), function(q) {
					return q.p().x
				}, function(q, V) {
					q instanceof ht.Node && q.p(V, q.p().y)
				}, "number", 1), this.addLabelInput(q, _("editor.posy"), function(q) {
					return q.p().y
				}, function(q, V) {
					q instanceof ht.Node && q.p(q.p().x, V)
				}, "number", 1), this.addRow(q, [hV.config.indent, .1, hV.config.indent2, .1]).keys = {
					name: "position"
				}, q = [], this.addLabelInput(q, _("editor.width"), function(q) {
					return q.getWidth()
				}, function(q, V) {
					q instanceof ht.Node && q.setWidth(V)
				}, "number", 1), this.addLabelInput(q, _("editor.height"), function(q) {
					return q.getHeight()
				}, function(q, V) {
					q instanceof ht.Node && q.setHeight(V)
				}, "number", 1), this.addRow(q, [hV.config.indent, .1, hV.config.indent2, .1]).keys = {
					name: "size"
				}, q
			}, V.prototype.addStyleColor = function(q, V, n) {
				var S = [];
				return this.addLabelColor(S, q, function(q) {
					return q.s(V)
				}, function(q, n) {
					q.s(V, n)
				}), this.addFuncRow(S, V, n)
			}, V.prototype.addStyleFunction = function(q, V, n) {
				var S = [];
				return this.addLabelFunction(S, q, function(q) {
					return q.s(V)
				}, function(q, n) {
					q.s(V, n)
				}, n), this.addFuncRow(S, V, n)
			}, V.prototype.addStyleObject = function(q, V, n) {
				var S = [];
				return this.addLabelObject(S, q, function(q) {
					return q.s(V)
				}, function(q, n) {
					q.s(V, n)
				}, n), this.addFuncRow(S, V, n)
			}, V.prototype.addStyleLabel = function(q, V, n) {
				var S = [];
				return this.addLabelInput(S, q, function(q) {
					var n = q.s(V);
					return n && n.replace && (n = n.replace(/\n/g, "\\n")), n
				}, function(q, n) {
					n && n.replace && (n = n.replace(/\\n/g, "\n")), q.s(V, n)
				}), this.addFuncRow(S, V, n)
			}, V.prototype.addStyleArray = function(q, V, n, S, _) {
				var x = [];
				return this.addLabelArray(x, q, function(q) {
					return q.s(V)
				}, function(q, n) {
					q.s(V, n)
				}, S), this.addFuncRow(x, V, n, _)
			}, V.prototype.addStyleMultiline = function(q, V, n, S) {
				var _ = [];
				return this.addLabelMultiline(_, q, function(q) {
					return q.s(V)
				}, function(q, n) {
					q.s(V, n)
				}), this.addFuncRow(_, V, n, S)
			}, V.prototype.addStyleFont = function(q, V, n, S) {
				var _ = [];
				return this.addLabelFont(_, q, function(q) {
					return q.s(V)
				}, function(q, n) {
					q.s(V, n)
				}), this.addFuncRow(_, V, n, S)
			}, V.prototype.addStyleTextArea = function(q, V, n, S) {
				var _ = [];
				return this.addLabelTextArea(_, q, function(q) {
					return q.s(V)
				}, function(q, n) {
					q.s(V, n)
				}), this.addFuncRow(_, V, S, n)
			}, V.prototype.addStyleInput = function(q, V, n, S, _) {
				var x = [];
				return this.addLabelInput(x, q, function(q) {
					return q.s(V)
				}, function(q, n) {
					q.s(V, n)
				}, n, S), this.addFuncRow(x, V, _)
			}, V.prototype.addStyleCheckBox = function(q, V, n) {
				var S = [];
				return this.addLabelCheckBox(S, q, function(q) {
					return q.s(V)
				}, function(q, n) {
					q.s(V, n)
				}), this.addFuncRow(S, V, n)
			}, V.prototype.addStyleAlign = function(q, V, n) {
				var S = [];
				return this.addLabelComboBox(S, q, function(q) {
					return q.s(V) || "center"
				}, function(q, n) {
					q.s(V, n)
				}, ["left", "center", "right"], [_("editor.align.left"), _("editor.align.center"), _("editor.align.right")]), this.addFuncRow(S, V, n)
			}, V.prototype.addStyleVAlign = function(q, V, n) {
				var S = [];
				return this.addLabelComboBox(S, q, function(q) {
					return q.s(V) || "bottom"
				}, function(q, n) {
					q.s(V, n)
				}, ["top", "middle", "bottom"], [_("editor.valign.top"), _("editor.valign.middle"), _("editor.valign.bottom")]), this.addFuncRow(S, V, n)
			}, V.prototype.addStyleStretch = function(q, V, n) {
				var S = [];
				return this.addLabelComboBox(S, q, function(q) {
					return q.s(V) || "fill"
				}, function(q, n) {
					q.s(V, n)
				}, ["fill", "uniform", "centerUniform"], [_("editor.stretch.fill"), _("editor.stretch.uniform"), _("editor.stretch.centeruniform")]), this.addFuncRow(S, V, n)
			}, V.prototype.addStyleComboBox = function(q, V, n, S, _, x) {
				var O = [];
				return this.addLabelComboBox(O, q, function(q) {
					return q.s(V)
				}, function(q, n) {
					q.s(V, n)
				}, n, S, _), this.addFuncRow(O, V, x)
			}, V.prototype.addStyleImage = function(q, V, n) {
				var S = [];
				return this.addLabelImage(S, q, function(q) {
					return q.s(V)
				}, function(q, n) {
					q.s(V, n)
				}), this.addFuncRow(S, V, n)
			}, V.prototype.addStyleURL = function(q, V, n) {
				var S = [];
				return this.addLabelURL(S, q, function(q) {
					return q.s(V)
				}, function(q, n) {
					q.s(V, n)
				}), this.addFuncRow(S, V, n)
			}, V.prototype.addStylePattern = function(q, V, n) {
				var S = [];
				return this.addLabelInput(S, q, function(q) {
					return q.s(V)
				}, function(q, n) {
					q.s(V, n)
				}, "pattern"), this.addFuncRow(S, V, n)
			}, V.prototype.addStyleZeroToOne = function(q, V, n) {
				return this.addStyleRange(q, V, 0, 1, .01, n)
			}, V.prototype.addStylePosition = function(q, V, n) {
				return this.addStyleRange(q, V, 1, 55, 1, n)
			}, V.prototype.addStyleRange = function(q, V, n, S, _, x) {
				var O = [];
				return this.addLabelInput(O, q, function(q) {
					var n = q.s(V);
					return null == n ? S : n
				}, function(q, _) {
					void 0 !== S && _ > S && (_ = S), void 0 !== n && _ < n && (_ = n), q.s(V, _)
				}, "number", _), this.addFuncRow(O, V, x)
			}, V.prototype.addStyleRotation = function(q, V, n, S, _, x) {
				var O = [];
				return this.addLabelInput(O, q, function(q) {
					var n = q.s(V);
					return null == n ? _ : 180 / Math.PI * n
				}, function(q, n) {
					n = n * Math.PI / 180, void 0 !== _ && n > _ && (n = _), void 0 !== S && n < S && (n = S), q.s(V, n)
				}, "number", x || 1), this.addFuncRow(O, V, n)
			}, V.prototype.addStyleGradient = function(q, V, n, S, _) {
				var x = [];
				return this.addLabelGradient(x, q, V, n, S), this.addFuncRow(x, V, _)
			}, V
		}(QS),
		RS = function(q) {
			function V(n, S) {
				return YV(this, V), QV(this, q.call(this, n, S))
			}
			return LV(V, q), V.prototype.$35$ = function(V) {
				return V && "s:shape" === V.property ? void this.filterPropertiesLater() : void q.prototype.$35$.call(this, V)
			}, V.prototype.isTitleVisible = function(V) {
				if(this.data) {
					var n = this.data.s("shape");
					if("TitleArc" === V.title && "arc" !== n) return !1
				}
				return q.prototype.isTitleVisible.call(this, V)
			}, V.prototype.isPropertyVisible = function(V) {
				if(this.data) {
					var n = V.items.tag;
					if(n) {
						var S = this.data.s("shape");
						if("shapeDepth" === n && "rect" !== S) return !1;
						if("shapeCornerRadius" === n && "roundRect" !== S) return !1;
						if("shapePolygonSide" === n && "polygon" !== S) return !1
					}
				}
				return q.prototype.isPropertyVisible.call(this, V)
			}, V.prototype.initForm = function() {
				q.prototype.initForm.call(this), this.$37$(), this.$38$(), this.addDashProperties(), this.addArcProperties()
			}, V.prototype.$14$ = function() {
				this.addStyleComboBox(_("editor.type"), "shape", hV.consts.shapes.slice(1), hV.consts.shapeLabels.slice(1), hV.consts.shapeIcons.slice(1), "type")
			}, V.prototype.$37$ = function() {
				this.addTitle("TitleBackground"), this.addStyleColor(_("editor.background"), "shape.background", "background"), this.addStyleImage(_("editor.repeatimage"), "shape.repeat.image", "repeatImage"), this.addStyleGradient(_("editor.gradient"), "shape.gradient", "shape.background", "shape.gradient.color", "gradient"), this.addStyleColor(_("editor.gradientcolor"), "shape.gradient.color", "gradientColor"), this.addStyleZeroToOne(_("editor.clippercentage"), "shape.fill.clip.percentage", "fillClipPercentage"), this.addStyleComboBox(_("editor.clipdirection"), "shape.fill.clip.direction", hV.consts.clipDirections, hV.consts.clipDirectionLabels, null, "fillClipDirection")
			}, V.prototype.$38$ = function() {
				this.addTitle("TitleBorder"), this.addStyleInput(_("editor.width"), "shape.border.width", "number", 1, "borderWidth"), this.addStyleCheckBox(_("editor.widthabsolute"), "shape.border.width.absolute", "borderWidthAbsolute"), this.addStyleColor(_("editor.color"), "shape.border.color", "borderColor"),
					this.addStylePattern(_("editor.pattern"), "shape.border.pattern", "borderPattern"), this.addStyleCheckBox(_("editor.threed"), "shape.border.3d", "border3d"), this.addStyleColor(_("editor.threedcolor"), "shape.border.3d.color", "border3dColor"), this.addStyleComboBox(_("editor.cap"), "shape.border.cap", hV.consts.caps, hV.consts.capLabels, null, "borderCap"), this.addStyleComboBox(_("editor.join"), "shape.border.join", hV.consts.joins, hV.consts.joinLabels, null, "borderJoin"), this.addStyleInput(_("editor.depth"), "shape.depth", "int", 1, "depth").items.tag = "shapeDepth", this.addStyleInput(_("editor.radius"), "shape.corner.radius", "number", 1, "cornerRadius").items.tag = "shapeCornerRadius", this.addStyleInput(_("editor.sides"), "shape.polygon.side", "int", 1, "polygonSide").items.tag = "shapePolygonSide"
			}, V.prototype.addDashProperties = function() {
				this.addTitle("TitleDash"), this.addStyleCheckBox(_("editor.dash"), "shape.dash", "dash"), this.addStylePattern(_("editor.pattern"), "shape.dash.pattern", "dashPattern"), this.addStyleColor(_("editor.color"), "shape.dash.color", "dashColor"), this.addStyleInput(_("editor.offset"), "shape.dash.offset", "number", 1, "dashOffset"), this.addStyleInput(_("editor.width"), "shape.dash.width", "number", 1, "dashWidth"), this.addStyleCheckBox(_("editor.threed"), "shape.dash.3d", "dash3d"), this.addStyleColor(_("editor.threedcolor"), "shape.dash.3d.color", "dash3dColor")
			}, V.prototype.addArcProperties = function() {
				this.addTitle("TitleArc"), this.addStyleCheckBox(_("editor.arcoval"), "shape.arc.oval", "arcOval"), this.addStyleCheckBox(_("editor.closed"), "shape.arc.close", "arcClose"), this.addStyleRotation(_("editor.arcfrom"), "shape.arc.from", "arcFrom"), this.addStyleRotation(_("editor.arcto"), "shape.arc.to", "arcTo")
			}, V
		}(kS),
		q_ = function(q) {
			function V(n, S) {
				return YV(this, V), QV(this, q.call(this, n, S))
			}
			return LV(V, q), V.prototype.initForm = function() {
				q.prototype.initForm.call(this), this.addTitle("TitleImage");
				var V = [];
				this.addLabelImage(V, _("editor.name"), function(q) {
					return q.s("image")
				}, function(q, V) {
					lq(V) && V.endsWith("[...]") || q.s("image", V)
				}), this.addButton(V, null, _("editor.resetsize"), "editor.resetsize.state", function(q) {
					q instanceof ht.Node && q.setSize(-1, -1)
				}), this.addFuncRow(V, "image", "name"), this.addStyleColor(_("editor.color"), "body.color", "color"), this.addStyleStretch(_("editor.stretch"), "image.stretch", "stretch")
			}, V
		}(kS),
		V_ = function(q) {
			function V(n, S) {
				return YV(this, V), QV(this, q.call(this, n, S))
			}
			return LV(V, q), V.prototype.initForm = function() {
				q.prototype.initForm.call(this), this.$44$()
			}, V.prototype.$44$ = function() {
				this.addTitle("TitleBorder"), this.addStyleInput(_("editor.width"), "border_width", "number", 1, "border"), this.addStyleColor(_("editor.color"), "border_color", "color")
			}, V
		}(kS),
		n_ = function(q) {
			function V(n, S) {
				return YV(this, V), QV(this, q.call(this, n, S))
			}
			return LV(V, q), V.prototype.initForm = function() {
				q.prototype.initForm.call(this), this.addBasicChartProperties()
			}, V.prototype.addBasicChartProperties = function() {
				this.addTitle("TitleChart"), this.addStyleCheckBox(_("editor.text"), "chart.label", "label"), this.addStyleColor(_("editor.color"), "chart.label.color", "labelColor"), this.addStyleFont(_("editor.font"), "chart.label.font", "labelFont")
			}, V
		}(kS),
		S_ = function(q) {
			function V(n, S) {
				return YV(this, V), QV(this, q.call(this, n, S))
			}
			return LV(V, q), V.prototype.initForm = function() {
				q.prototype.initForm.call(this), this.addPieChartProperties()
			}, V.prototype.addBasicChartProperties = function() {
				q.prototype.addBasicChartProperties.call(this), this.addStyleRotation(_("editor.rotation"), "chart.start.angle", "startAngle"), this.addStyleCheckBox(_("editor.hollow"), "chart.hollow", "hollow")
			}, V.prototype.createChartIndexColumn = function(q) {
				var V = this;
				return {
					name: q,
					width: 50,
					align: "center",
					editable: !0,
					sortable: !1,
					clickable: !1,
					getValueType: function(q) {
						return "chart.values" === q.getTag() ? "number" : "color"
					},
					getValue: function(n) {
						if(V.data) {
							var S = V.data.s(n.getTag());
							return S ? S[q] : void 0
						}
					},
					setValue: function(n, S, _, x) {
						var O = n.getTag(),
							w = function(V, n) {
								var S = rq(V.s(O));
								S[q] = n, "chart.values" === O ? Iq(S) : oq(S), V.s(O, S)
							};
						V.setValue(w, _)
					}
				}
			}, V.prototype.addPieChartProperties = function() {
				var q = this,
					V = this.tableModel = new ht.DataModel,
					n = this.tablePane = new cn(V),
					S = this.tableView = n.getTableView();
				n.getTableHeader().setMovable(!1), S.setEditable(!0), n.getView().style.border = hV.config.color_line + " solid 1px";
				var x = [n];
				this.addRow(x, [.1], ht.Default.widgetRowHeight + 4 * S.getRowHeight()).keys = {
					name: "chartTable"
				};
				var O = new ht.Data,
					w = new ht.Data;
				O.setTag("chart.values"), w.setTag("chart.colors"), V.add(O), V.add(w), this.updateHandlers.push(function() {
					if(!x.hidden && q.data) {
						S.getColumnModel().clear(), n.addColumns([{
							name: _("editor.length"),
							width: 50,
							align: "center",
							editable: !0,
							sortable: !1,
							clickable: !1,
							valueType: "int",
							getValue: function(V) {
								if(!q.data) return 0;
								var n = q.data.s("chart.values");
								return n ? n.length : 0
							},
							setValue: function(V, n, S, _) {
								var x = function(q, V) {
									if(V >= 0) {
										var n = rq(q.s("chart.values"), V);
										Iq(n), q.s("chart.values", n), n = rq(q.s("chart.colors"), V), oq(n), q.s("chart.colors", n)
									}
								};
								q.setValue(x, S)
							}
						}, {
							tag: "binding",
							name: _("editor.binding"),
							width: 50,
							align: "center",
							editable: !0,
							sortable: !1,
							clickable: !1,
							isCellEditable: function(V, S, _, x) {
								var O = "chart.values" === V.getTag() ? "values" : "colors";
								return q.editor.funcView.toggle(n, V.getTag(), O, q), !1
							},
							drawCell: function(V, n, S, _, x, O, w, K, g) {
								var A = !!q.data.a(n.getTag()),
									l = ht.Default.getImage(A ? "editor.bind" : "editor.unbind"),
									Z = A && !S ? hV.config.color_select : hV.config.color_dark;
								T(V, l, "centerUniform", x, O, w, K, n, g, Z)
							}
						}]);
						for(var V = q.data.s("chart.values"), O = V ? V.length : 0, w = 0; w < O; w++) n.addColumns([q.createChartIndexColumn(w)])
					}
				})
			}, V
		}(n_),
		__ = function(q) {
			function V(n, S) {
				return YV(this, V), QV(this, q.call(this, n, S))
			}
			return LV(V, q), V.prototype.initForm = function() {
				q.prototype.initForm.call(this), this.addOneDimensionalProperties()
			}, V.prototype.createChartIndexColumn = function(q) {
				var V = this;
				return {
					name: q,
					width: 50,
					align: "center",
					editable: !0,
					sortable: !1,
					clickable: !1,
					getValueType: function(q) {
						return "values" === q.getTag() ? "number" : "color"
					},
					getValue: function(n) {
						if(V.data) {
							var S = Eq(V.data.s("chart.series"));
							if(S && S[0]) {
								var _ = Eq(S[0][n.getTag()]);
								return _ ? _[q] : void 0
							}
						}
					},
					setValue: function(S, _, x, O) {
						var w = S.getTag(),
							K = function(V, S) {
								var _ = V.s("chart.series");
								if(_) {
									var x = n(_),
										O = Eq(x);
									if(O[0]) {
										var K = Eq(O[0][w]);
										K && K[q] !== S && (K[q] = S, "values" === w ? Iq(K) : oq(K), V.s("chart.series", x))
									}
								}
							};
						V.setValue(K, x)
					}
				}
			}, V.prototype.addOneDimensionalProperties = function() {
				var q = this,
					V = this.tableModel = new ht.DataModel,
					S = this.tablePane = new cn(V),
					x = this.tableView = S.getTableView();
				S.getTableHeader().setMovable(!1), x.setEditable(!0), S.getView().style.border = hV.config.color_line + " solid 1px";
				var O = [S];
				this.addRow(O, [.1], ht.Default.widgetRowHeight + 4 * x.getRowHeight()).keys = {
					name: "chartTable"
				};
				var w = new ht.Data,
					K = new ht.Data;
				w.setTag("values"), K.setTag("colors"), V.add(w), V.add(K), this.updateHandlers.push(function() {
					if(!O.hidden && q.data) {
						x.getColumnModel().clear(), S.addColumns([{
							name: _("editor.length"),
							width: 50,
							align: "center",
							editable: !0,
							sortable: !1,
							clickable: !1,
							valueType: "int",
							getValue: function(V) {
								if(!q.data) return 0;
								var n = Eq(q.data.s("chart.series"));
								if(!n) return 0;
								if(!n[0]) return 0;
								var S = Eq(n[0].values);
								return S ? S.length : 0
							},
							setValue: function(V, S, _, x) {
								var O = function(q, V) {
									if(V >= 0) {
										var S = q.s("chart.series"),
											_ = S ? n(S) : [],
											x = Eq(_);
										x[0] || (x[0] = {});
										var O = x[0];
										O.values || (O.values = []), O.colors || (O.colors = []);
										var w = Eq(O.values),
											K = Eq(O.colors);
										V === w.length && V === K.length || (w.length = V, K.length = V, Iq(w), oq(K), q.s("chart.series", _))
									}
								};
								q.setValue(O, _)
							}
						}, {
							tag: "binding",
							name: _("editor.binding"),
							width: 50,
							align: "center",
							editable: !0,
							sortable: !1,
							clickable: !1,
							isCellEditable: function(V, _, x, O) {
								var w = V.getTag(),
									K = function() {
										return eV(q.data, w)
									},
									g = function(V) {
										q.setValue(function(q, S) {
											var _ = q.s("chart.series");
											if(_) {
												var x = n(_),
													O = Eq(x);
												if(O[0]) {
													var K = Eq(O[0][w]);
													O[0][w] = V ? {
														value: K,
														func: V
													} : K, q.s("chart.series", x)
												}
											}
										}, V)
									};
								return q.editor.funcView.toggle(S, w, w, q, K, g), !1
							},
							drawCell: function(V, n, S, _, x, O, w, K, g) {
								var A = !!eV(q.data, n.getTag()),
									l = ht.Default.getImage(A ? "editor.bind" : "editor.unbind"),
									Z = A && !S ? hV.config.color_select : hV.config.color_dark;
								T(V, l, "centerUniform", x, O, w, K, n, g, Z)
							}
						}]);
						for(var V = XV(q.data, "values"), w = V ? V.length : 0, K = 0; K < w; K++) S.addColumns([q.createChartIndexColumn(K)])
					}
				})
			}, V
		}(n_),
		x_ = function(q) {
			function V(n, S) {
				return YV(this, V), QV(this, q.call(this, n, S))
			}
			return LV(V, q), V.prototype.initForm = function() {
				q.prototype.initForm.call(this), this.addSeriesChartProperties()
			}, V.prototype.addSeriesChartProperties = function() {
				var q = this,
					V = [],
					S = function(q) {
						var V = q.s("chart.series");
						return V ? V.length : 0
					},
					x = function(q, V) {
						if(V >= 0) {
							var S = q.s("chart.series"),
								_ = S ? n(S) : [],
								x = Eq(_);
							if(x.length !== V) {
								x.length = V;
								for(var O = void 0, w = 0; w < V; w++) {
									x[w] || (x[w] = {});
									var K = x[w];
									K.values || (K.values = []), K.color || (K.color = ht.Color.chart[w % ht.Color.chart.length]);
									var g = Eq(K.values);
									Eq(K.colors);
									0 === w ? O = g.length : g.length = O, Iq(g)
								}
								q.s("chart.series", _)
							}
						}
					};
				this.addLabelInput(V, _("editor.series"), S, x, "int", 1), S = function(q) {
					var V = q.s("chart.series");
					if(V) {
						var n = V[0];
						if(n) {
							var S = Eq(n.values);
							return S ? S.length : 0
						}
					}
					return 0
				}, x = function(q, V) {
					if(V >= 0) {
						var S = q.s("chart.series"),
							_ = S ? n(S) : [],
							x = Eq(_);
						if(x.length) {
							for(var O = 0; O < x.length; O++) {
								x[O] || (x[O] = {});
								var w = x[O];
								w.values || (w.values = []);
								var K = Eq(w.values);
								if(K.length === V) return;
								w.color || (w.color = ht.Color.chart[O % ht.Color.chart.length]);
								Eq(w.colors);
								K.length = V, Iq(K)
							}
							q.s("chart.series", _)
						}
					}
				}, this.addLabelInput(V, _("editor.length"), S, x, "int", 1), this.addRow(V, [hV.config.indent, .1, hV.config.indent2, .1]).keys = {
					name: "chartSeries"
				};
				var O = this.tableModel = new ht.DataModel,
					w = this.tablePane = new cn(O),
					K = this.tableView = w.getTableView();
				w.getTableHeader().setMovable(!1), K.setEditable(!0), w.getView().style.border = hV.config.color_line + " solid 1px";
				var g = [w];
				this.addRow(g, [.1], 160).keys = {
					name: "chartTable"
				}, this.updateHandlers.push(function() {
					if(!g.hidden && q.data) {
						O.clear(), K.getColumnModel().clear();
						var V = q.data.s("chart.series");
						if(V)
							for(var S = 0; S < V.length; S++) {
								var x = new ht.Data;
								x.serie = V[S], x.index = S, O.add(x)
							}
						if(w.addColumns([{
								name: _("editor.index"),
								width: 50,
								align: "center",
								sortable: !1,
								clickable: !1,
								valueType: "int",
								getValue: function(q) {
									return q.index
								}
							}, {
								tag: "binding",
								name: _("editor.colorbinding"),
								width: 50,
								align: "center",
								editable: !0,
								sortable: !1,
								clickable: !1,
								isCellEditable: function(V, S, _, x) {
									var O = V.index,
										K = function() {
											return Yq(V.serie.color)
										},
										g = function(V) {
											q.setValue(function(q, S) {
												var _ = q.s("chart.series");
												if(_) {
													var x = n(_),
														w = Eq(x),
														K = w[O];
													if(K) {
														var g = Eq(K.color);
														K.color = V ? {
															value: g,
															func: V
														} : g, q.s("chart.series", x)
													}
												}
											}, V)
										};
									return q.editor.funcView.toggle(w, "values", "values", q, K, g), !1
								},
								drawCell: function(q, V, n, S, _, x, O, w, K) {
									var g = !!Yq(V.serie.color),
										A = ht.Default.getImage(g ? "editor.bind" : "editor.unbind"),
										l = g && !n ? hV.config.color_select : hV.config.color_dark;
									T(q, A, "centerUniform", _, x, O, w, V, K, l)
								}
							}, {
								name: _("editor.color"),
								width: 50,
								align: "center",
								editable: !0,
								sortable: !1,
								clickable: !1,
								valueType: "color",
								getValue: function(q) {
									return Eq(q.serie.color)
								},
								setValue: function(V, S, _, x) {
									var O = V.index,
										w = Eq(V.serie.color);
									if(_ && w !== _) {
										var K = function(q, V) {
											var S = q.s("chart.series");
											if(S) {
												var _ = n(S),
													x = Eq(_),
													w = x[O];
												if(w) {
													var K = Yq(w.color);
													w.color = K ? {
														value: V,
														func: K
													} : V, q.s("chart.series", _)
												}
											}
										};
										q.setValue(K, _)
									}
								}
							}, {
								tag: "binding",
								name: _("editor.valuebinding"),
								width: 50,
								align: "center",
								editable: !0,
								sortable: !1,
								clickable: !1,
								isCellEditable: function(V, S, _, x) {
									var O = V.index,
										K = function() {
											return Yq(V.serie.values)
										},
										g = function(V) {
											q.setValue(function(q, S) {
												var _ = q.s("chart.series");
												if(_) {
													var x = n(_),
														w = Eq(x),
														K = w[O];
													if(K) {
														var g = Eq(K.values);
														K.values = V ? {
															value: g,
															func: V
														} : g, q.s("chart.series", x)
													}
												}
											}, V)
										};
									return q.editor.funcView.toggle(w, "values", "values", q, K, g), !1
								},
								drawCell: function(q, V, n, S, _, x, O, w, K) {
									var g = !!Yq(V.serie.values),
										A = ht.Default.getImage(g ? "editor.bind" : "editor.unbind"),
										l = g && !n ? hV.config.color_select : hV.config.color_dark;
									T(q, A, "centerUniform", _, x, O, w, V, K, l)
								}
							}]), V) {
							var A = V[0];
							if(A) {
								var l = Eq(A.values);
								if(l)
									for(var Z = 0; Z < l.length; Z++) w.addColumns([q.createChartIndexColumn(Z)])
							}
						}
					}
				})
			}, V.prototype.createChartIndexColumn = function(q) {
				var V = this;
				return {
					name: q,
					width: 50,
					align: "center",
					editable: !0,
					sortable: !1,
					clickable: !1,
					valueType: "number",
					getValue: function(V) {
						var n = Eq(V.serie.values);
						return n ? n[q] : void 0
					},
					setValue: function(S, _, x, O) {
						var w = S.index,
							K = function(V, S) {
								var _ = V.s("chart.series");
								if(_) {
									var x = n(_),
										O = Eq(x);
									if(O[w]) {
										var K = Eq(O[w].values);
										K && K[q] !== S && (K[q] = S, V.s("chart.series", x))
									}
								}
							};
						V.setValue(K, x)
					}
				}
			}, V
		}(n_),
		O_ = function(q) {
			function V(n, S) {
				return YV(this, V), QV(this, q.call(this, n, S))
			}
			return LV(V, q), V.prototype.addBasicChartProperties = function() {
				q.prototype.addBasicChartProperties.call(this), this.addStyleComboBox(_("editor.type"), "chart.type", hV.consts.columnChartTypes, hV.consts.columnChartTypeLabels, null, "type")
			}, V.prototype.$14$ = function() {}, V
		}(x_),
		w_ = function(q) {
			function V(n, S) {
				return YV(this, V), QV(this, q.call(this, n, S))
			}
			return LV(V, q), V.prototype.initForm = function() {
				q.prototype.initForm.call(this)
			}, V
		}(x_),
		K_ = function(q) {
			function V(n, S) {
				return YV(this, V), QV(this, q.call(this, n, S))
			}
			return LV(V, q), V.prototype.initForm = function() {
				this.$27$(), q.prototype.initForm.call(this)
			}, V.prototype.isTitleVisible = function(V) {
				return !("TitleEditingPoint" === V.title && !this.editor.pointsEditingMode) && q.prototype.isTitleVisible.call(this, V)
			}, V.prototype.$14$ = function() {
				var q = [];
				this.addLabelInput(q, _("editor.type"), function(q) {
					return q.compType
				}), this.addRow(q, [hV.config.indent, .1]).keys = {
					name: "type"
				}
			}, V.prototype.$37$ = function() {
				q.prototype.$37$.call(this), this.addStyleComboBox(_("editor.fillrule"), "shape.fill.rule", hV.consts.fillRules, hV.consts.fillRuleLabels, null, "fillRule")
			}, V.prototype.$38$ = function() {
				q.prototype.$38$.call(this);
				var V = [];
				this.addLabelCheckBox(V, _("editor.closed"), function(q) {
					return q.isClosePath()
				}, function(q, V) {
					q instanceof ht.Shape && q.setClosePath(V)
				}), this.addFuncRow(V, "name")
			}, V
		}(RS),
		g_ = function(q) {
			function V(n, S) {
				return YV(this, V), QV(this, q.call(this, n, S))
			}
			return LV(V, q), V.prototype.initForm = function() {
				q.prototype.initForm.call(this), this.addTitle("TitleText"), this.addStyleLabel(_("editor.text"), "text", "text"), this.addStyleAlign(_("editor.align"), "text.align", "align"), this.addStyleVAlign(_("editor.valign"), "text.vAlign", "vAlign"), this.addStyleColor(_("editor.color"), "text.color", "color"), this.addStyleFont(_("editor.font"), "text.font", "font")
			}, V.prototype.$20$ = function() {
				this.addTitle("TitleShadow"), this.addStyleCheckBox(_("editor.shadow"), "text.shadow", "shadow"), this.addStyleColor(_("editor.shadowcolor"), "text.shadow.color", "shadowColor"), this.addStyleInput(_("editor.shadowblur"), "text.shadow.blur", "number", 1, "shadowblur"), this.addStyleInput(_("editor.shadowoffsetx"), "text.shadow.offset.x", "number", 1, "shadowOffsetX"), this.addStyleInput(_("editor.shadowoffsety"), "text.shadow.offset.y", "number", 1, "shadowOffsetYs")
			}, V
		}(kS),
		A_ = function(q) {
			function V(n, S) {
				return YV(this, V), QV(this, q.call(this, n, S))
			}
			return LV(V, q), V.prototype.$14$ = function() {
				var q = [];
				this.addLabelInput(q, _("editor.type"), function(q) {
					return "function"
				}), this.addFuncRow(q, "type")
			}, V
		}(kS),
		l_ = function(q) {
			function V(n, S) {
				return YV(this, V), QV(this, q.call(this, n, S))
			}
			return LV(V, q), V.prototype.initForm = function() {
				q.prototype.initForm.call(this), this.addComponent()
			}, V.prototype.$14$ = function() {}, V.prototype.addComponent = function() {
				var q = this;
				this.addTitle("TitleComponent");
				var V = [];
				this.addLabelInput(V, _("editor.type"), function(V) {
					var n = V.s("type");
					return q.$43$(V.properties), n
				}, function(q, V) {
					q.s("type", V)
				}, null, null, !1);
				var n = new ht.widget.Image;
				n.vectorDataBindingDisabled = !0, this.updateHandlers.push(function() {
					if(!V.hidden) {
						var S = q.data ? q.data.s("type") : null;
						q.$43$(q.data.properties), n.setIcon(S ? Aq(S) : null), n.compType = S
					}
				});
				var S = n.getView();
				S.style.cursor = "pointer";
				var x = function(V) {
					V.preventDefault(), y(V) ? q.editor.open(n.compType) : q.editor.selectFileNode(n.compType)
				};
				S.addEventListener("mousedown", x, !1), S.addEventListener("touchstart", x, !1), V.push(n), this.addFuncRow(V, "type")
			}, V.prototype.$43$ = function(q) {
				var V = this;
				this.properties !== q && (this.pendingProperties = q, this._updateComponentLater || (this._updateComponentLater = !0, requestAnimationFrame(function() {
					V.$61$()
				})))
			}, V.prototype.$61$ = function() {
				if(this._updateComponentLater = !1, this.properties === this.pendingProperties) return void(this.pendingProperties = null);
				if(this._rows = this.$47$, this.removeRows(this.$36$), this.$36$ = [], this.properties = this.pendingProperties, this.properties)
					for(var q in this.properties) this.addProperty(q, this.properties[q]);
				this.$47$ = this._rows, this.filterProperties()
			}, V.prototype.addProperty = function(q, V) {
				var n = hV.config.valueTypes[V.valueType];
				if(!n) return this.editor.fireEvent("error", {
					message: "Wrong value type:" + V.valueType
				}), !1;
				var S = _(V.name) || q;
				if("int" === n.type || "number" === n.type) {
					var x = (n.max, n.min, function(V) {
							return V.s(q)
						}),
						O = function(V, n) {
							V.s(q, n)
						},
						w = [];
					n.angle ? this.addLabelRotation(w, S, x, O, n.min, n.max, n.step) : this.addLabelRange(w, S, x, O, n.min, n.max, n.step, n.type), this.addFuncRow(w, q, q)
				} else if("color" === n.type) this.addStyleColor(S, q, q);
				else if("boolean" === n.type) this.addStyleCheckBox(S, q, q);
				else if("enum" === n.type) this.addStyleComboBox(S, q, n.values, n.labels, n.icons, q);
				else if("multiline" === n.type) this.addStyleMultiline(S, q, q, n.rows);
				else if("font" === n.type) this.addStyleFont(S, q, q, n.rows);
				else if("image" === n.type) this.addStyleImage(S, q, q);
				else if("url" === n.type) this.addStyleURL(S, q, q);
				else if("colorArray" === n.type) this.addStyleArray(S, q, q, "color", n.rows);
				else if("numberArray" === n.type) this.addStyleArray(S, q, q, "number", n.rows);
				else if("stringArray" === n.type) this.addStyleArray(S, q, q, "string", n.rows);
				else if("objectArray" === n.type) this.addStyleArray(S, q, q, "object", n.rows);
				else if("function" === n.type) this.addStyleFunction(S, q, q);
				else if("custom" === n.type) {
					var K = function(V) {
							return V.s(q)
						},
						g = function(V, n) {
							V.s(q, n)
						},
						A = [];
					n.buildUI(this, A, S, K, g), this.addFuncRow(A, q, q)
				} else "object" === n.type ? this.addStyleObject(S, q, q) : this.addStyleInput(S, q, null, null, q);
				return this.$36$.push(this._rows[this._rows.length - 1]), !0
			}, V
		}(kS),
		Z_ = function(q) {
			function V(n, S) {
				return YV(this, V), QV(this, q.call(this, n, S))
			}
			return LV(V, q), V.prototype.initForm = function() {
				this.$27$(), this.addTitle("TitleBasic"), this.$14$(), this.$15$()
			}, V.prototype.isTitleVisible = function(V) {
				return !("TitleEditingPoint" === V.title && !this.editor.pointsEditingMode) && q.prototype.isTitleVisible.call(this, V)
			}, V
		}(kS),
		z_ = function(q) {
			function V(n, S) {
				return YV(this, V), QV(this, q.call(this, n, S))
			}
			return LV(V, q), V.prototype.initForm = function() {
				this.addTitle("TitleBasic"), this.$14$(), this.$15$()
			}, V
		}(kS),
		H_ = function(q) {
			function V(n) {
				YV(this, V);
				var S = QV(this, q.call(this));
				return S.editor = n, S.getView().style.background = hV.config.color_pane, S
			}
			return LV(V, q), V.prototype.handleDataModelPropertyChange = function(q) {
				var V = this.inspector;
				V && V.global && V.$35$(q)
			}, V.prototype.handleDataModelChange = function(q) {
				var V = this.inspector;
				V && V.global && V.$35$()
			}, V.prototype.handleDataPropertyChange = function(q) {
				var V = this.inspector;
				V && !V.global && V.data === q.data && V.$35$(q)
			}, V.prototype.handleSelectionChange = function(q) {
				this.updateInspector(), this.inspector && this.inspector.updateProperties()
			}, V.prototype.$42$ = function(q) {
				var V = this.inspector;
				V && ("pointsEditingMode" === q.property ? V.filterPropertiesLater() : "shapePointStatus" === q.property && V.editingPointButtons && V.editingPointButtons.forEach(function(V) {
					V.setSelected(V.statusValue === q.newValue), V.setBorderColor(V.isSelected() ? hV.config.color_line : null)
				}))
			}, V.prototype.$6$ = function(q) {
				this.dataModel && (this.dataModel.removeDataModelChangeListener(this.handleDataModelChange, this), this.dataModel.removePropertyChangeListener(this.handleDataModelPropertyChange, this), this.dataModel.removeDataPropertyChangeListener(this.handleDataPropertyChange, this), this.dataModel.sm().ums(this.handleSelectionChange, this), this.currentView.graphView.getEditInteractor().ump(this.$42$, this)), q ? (this.currentView = q.getView(), this.dataModel = this.currentView.dm, this.dataModel.addDataModelChangeListener(this.handleDataModelChange, this), this.dataModel.addPropertyChangeListener(this.handleDataModelPropertyChange, this), this.dataModel.addDataPropertyChangeListener(this.handleDataPropertyChange, this), this.dataModel.sm().ms(this.handleSelectionChange, this), this.currentView.graphView.getEditInteractor().mp(this.$42$, this)) : (this.currentView = null, this.dataModel = null), this.$95$()
			}, V.prototype.$95$ = function() {
				var q = this;
				this._updateInspectorLater || (this._updateInspectorLater = !0, requestAnimationFrame(function() {
					q.updateInspector()
				}))
			}, V.prototype.updateInspector = function() {
				if(this._updateInspectorLater = !1, this.dataModel) {
					var q = this.dataModel.sm().ld();
					if(q)
						if(this.currentView instanceof zS)
							if(q instanceof Nn) this.inspector = this.clipInspector;
							else if(q instanceof Un) this.inspector = this.restoreInspector;
					else if(q instanceof ln) this.inspector = this.basicInspector;
					else if(q instanceof In) this.inspector = this.borderInspector;
					else if(q instanceof zn) this.inspector = this.imageInspector;
					else if(q instanceof on) this.inspector = this.pieChartInspector;
					else if(q instanceof rn) {
						var V = Eq(q.s("chart.series"));
						V && V.length <= 1 && V[0].colors ? this.inspector = this.oneDimensionalColumnChartInspector : this.inspector = this.columnChartInspector
					} else q instanceof kn ? this.inspector = this.lineChartInspector : q instanceof Zn ? this.inspector = this.shapeInspector : q instanceof Hn ? this.inspector = this.textInspector : q instanceof lS ? this.inspector = this.funcTypeInspector : q instanceof Bn && (this.inspector = this.compTypeInspector);
					else q instanceof ht.Shape ? this.inspector = this.htShapeInspector : q instanceof ht.Edge ? this.inspector = this.htEdgeInspector : q instanceof ht.Group ? this.inspector = this.htGroupInspector : q instanceof ht.Text ? this.inspector = this.htTextInspector : q instanceof ht.RefGraph ? this.inspector = this.htRefGraphInspector : q instanceof ht.Block ? this.inspector = this.htBlockInspector : q instanceof ht.Node ? this.inspector = this.htNodeInspector : this.inspector = this.htDataInspector;
					else this.currentView instanceof zS ? this.inspector = this.symbolInspector : this.inspector = this.displayInspector
				} else this.inspector = null
			}, MV(V, [{
				key: "basicInspector",
				get: function() {
					return this._basicInspector || (this._basicInspector = new RS(this.editor, "basic")), this._basicInspector
				}
			}, {
				key: "borderInspector",
				get: function() {
					return this._borderInspector || (this._borderInspector = new V_(this.editor, "border")), this._borderInspector
				}
			}, {
				key: "clipInspector",
				get: function() {
					return this._clipInspector || (this._clipInspector = new Z_(this.editor, "clip")), this._clipInspector
				}
			}, {
				key: "restoreInspector",
				get: function() {
					return this._restoreInspector || (this._restoreInspector = new z_(this.editor, "restore")), this._restoreInspector
				}
			}, {
				key: "imageInspector",
				get: function() {
					return this._imageInspector || (this._imageInspector = new q_(this.editor, "image")), this._imageInspector
				}
			}, {
				key: "pieChartInspector",
				get: function() {
					return this._pieChartInspector || (this._pieChartInspector = new S_(this.editor, "pieChart")), this._pieChartInspector
				}
			}, {
				key: "oneDimensionalColumnChartInspector",
				get: function() {
					return this._oneDimensionalColumnChartInspector || (this._oneDimensionalColumnChartInspector = new __(this.editor, "oneDimensionalColumnChartInspector")), this._oneDimensionalColumnChartInspector
				}
			}, {
				key: "columnChartInspector",
				get: function() {
					return this._columnChartInspector || (this._columnChartInspector = new O_(this.editor, "columnChart")), this._columnChartInspector
				}
			}, {
				key: "lineChartInspector",
				get: function() {
					return this._lineChartInspector || (this._lineChartInspector = new w_(this.editor, "lineChart")), this._lineChartInspector
				}
			}, {
				key: "shapeInspector",
				get: function() {
					return this._shapeInspector || (this._shapeInspector = new K_(this.editor, "shape")), this._shapeInspector
				}
			}, {
				key: "textInspector",
				get: function() {
					return this._textInspector || (this._textInspector = new g_(this.editor, "text")), this._textInspector
				}
			}, {
				key: "funcTypeInspector",
				get: function() {
					return this._funcTypeInspector || (this._funcTypeInspector = new A_(this.editor, "func")), this._funcTypeInspector
				}
			}, {
				key: "compTypeInspector",
				get: function() {
					return this._compTypeInspector || (this._compTypeInspector = new l_(this.editor, "comp")), this._compTypeInspector
				}
			}, {
				key: "htShapeInspector",
				get: function() {
					return this._htShapeInspector || (this._htShapeInspector = new BS(this.editor, "Shape")), this._htShapeInspector
				}
			}, {
				key: "htBlockInspector",
				get: function() {
					return this._htBlockInspector || (this._htBlockInspector = new IS(this.editor, "Block")), this._htBlockInspector
				}
			}, {
				key: "htRefGraphInspector",
				get: function() {
					return this._htRefGraphInspector || (this._htRefGraphInspector = new oS(this.editor, "RefGraph")), this._htRefGraphInspector
				}
			}, {
				key: "htGroupInspector",
				get: function() {
					return this._htGroupInspector || (this._htGroupInspector = new fS(this.editor, "Group")), this._htGroupInspector
				}
			}, {
				key: "htEdgeInspector",
				get: function() {
					return this._htEdgeInspector || (this._htEdgeInspector = new TS(this.editor, "Edge")), this._htEdgeInspector
				}
			}, {
				key: "htNodeInspector",
				get: function() {
					return this._htNodeInspector || (this._htNodeInspector = new sS(this.editor, "Node")), this._htNodeInspector
				}
			}, {
				key: "htTextInspector",
				get: function() {
					return this._htTextInspector || (this._htTextInspector = new rS(this.editor, "Text")), this._htTextInspector
				}
			}, {
				key: "htDataInspector",
				get: function() {
					return this._htDataInspector || (this._htDataInspector = new $S(this.editor, "Data")), this._htDataInspector
				}
			}, {
				key: "displayInspector",
				get: function() {
					return this._displayInspector || (this._displayInspector = new FS(this.editor, "display")), this._displayInspector
				}
			}, {
				key: "symbolInspector",
				get: function() {
					return this._symbolInspector || (this._symbolInspector = new hS(this.editor, "symbol")), this._symbolInspector
				}
			}, {
				key: "inspector",
				get: function() {
					return this.getCenterView()
				},
				set: function(q) {
					var V = this.getCenterView();
					q ? (q.dataModel = this.dataModel, this.dataModel && (q.data = this.dataModel.sm().ld()), this.getCenterView() !== q && this.setCenterView(q), q.filterPropertiesLater()) : this.setCenterView(null), q === V || null == q && null == V || this.editor.fireEvent("inspectorUpdated", {
						inspector: q,
						oldInspector: V
					})
				}
			}]), V
		}(jn),
		i_ = function() {
			function q(V) {
				YV(this, q), this.editor = V
			}
			return q.prototype.showTip = function(q, V) {
				this.tip.innerHTML = q, this.tip.parentNode !== document.body && ht.Default.appendToScreen(this.tip);
				var n = c(V);
				this.tip.style.left = n.x + 15 + "px", this.tip.style.top = n.y + "px"
			}, q.prototype.hideTip = function() {
				L(this.tip)
			}, q.prototype.clearDropView = function(q, V) {
				this._dropView && (this._dropView.handleCrossDrag(q, "exit", V), this._dropView = null)
			}, q.prototype.crossDrag = function(q, V) {
				var n = this._dropView,
					S = this.$96$(q, V);
				n !== S ? (n && n.handleCrossDrag(q, "exit", V), S && S.handleCrossDrag(q, "enter", V)) : S && S.handleCrossDrag(q, "over", V), 
				this._dropView = S
			}, q.prototype.crossDrop = function(q, V) {
				this._dropView && (this._dropView.handleCrossDrag(q, "drop", V), this._dropView = null)
			}, q.prototype.crossCancel = function(q, V) {
				this._dropView && (this._dropView.handleCrossDrag(q, "cancel", V), this._dropView = null)
			}, q.prototype.$96$ = function(q, V) {
				for(var n = b(q); n && !(n._ht && n._ht.isDroppable && n._ht.isDroppable(q, V));) n = n.parentNode;
				return n ? n._ht : null
			}, MV(q, [{
				key: "tip",
				get: function() {
					if(!this._tip) {
						this._tip = s(), this._tip.className = "ht-editor-dnd-tip";
						var q = this._tip.style;
						q.whiteSpace = "nowrap", q.color = hV.config.color_light, q.background = hV.config.color_transparent, q.font = ht.Default.labelFont, q.padding = "4px", q.borderRadius = "4px", q.position = "absolute", q.zIndex = 1e4
					}
					return this._tip
				}
			}]), q
		}();
	hV.DND = i_;
	var N_ = function() {
		function q(V, n) {
			YV(this, q), this.editor = V, this.dnd = V.dnd, this._dragInfo = {
				view: this
			}, n && (n.addEventListener("dragenter", this.handle_dragenter.bind(this), !1), n.addEventListener("dragover", this.handle_dragover.bind(this), !1), n.addEventListener("dragleave", this.handle_dragleave.bind(this), !1), n.addEventListener("drop", this.handle_drop.bind(this), !1), n.addEventListener("dragexit", this.handle_dragexit.bind(this), !1), n.addEventListener("dragend", this.handle_dragend.bind(this), !1)), this.isDroppableToDisplayView = !0, this.isDroppableToSymbolView = !0
		}
		return q.prototype.handle_dragenter = function(q) {
			r(q), q.stopPropagation(), this.dnd.crossDrag(q, this._dragInfo)
		}, q.prototype.handle_dragover = function(q) {
			r(q), q.stopPropagation(), this.dnd.crossDrag(q, this._dragInfo)
		}, q.prototype.handle_dragleave = function(q) {
			r(q), q.stopPropagation(), this.dnd.crossCancel(q, this._dragInfo)
		}, q.prototype.handle_dragexit = function(q) {
			r(q), q.stopPropagation(), this.dnd.crossCancel(q, this._dragInfo)
		}, q.prototype.handle_dragend = function(q) {
			r(q), q.stopPropagation(), this.dnd.crossCancel(q, this._dragInfo)
		}, q.prototype.handle_drop = function(q) {
			r(q), q.stopPropagation(), this.dnd.crossDrop(q, this._dragInfo)
		}, q
	}();
	hV.DNDFromOutside = N_;
	var U_ = function() {
		function q(V) {
			YV(this, q), this.params = V || {}, this.$39$ = this.params.$39$, this._eventNotifier = new ht.Notifier;
			var n = ht.Default.getClass(hV.config.serviceClass);
			this.$40$ = new n(this.handleServiceEvent.bind(this), this), this.emptyFunc = function() {}
		}
		return q.prototype.addEventListener = function(q, V, n) {
			this._eventNotifier.add(q, V, n)
		}, q.prototype.removeEventListener = function(q, V) {
			this._eventNotifier.remove(q, V)
		}, q.prototype.fireEvent = function(q, V) {
			V = V || {}, hV.config.handleEvent && hV.config.handleEvent(this, q, V);
			var n = "on" + q.charAt(0).toUpperCase() + q.slice(1);
			hV.config[n] && hV.config[n](this, V), this.params && this.params[n] && this.params[n](this, V), this._eventNotifier.fire({
				editor: this,
				type: q,
				params: V
			})
		}, q.prototype.handleServiceEvent = function(q) {
			if("connected" === q.type) this.init && (this.init(), this.init = null);
			else if("fileChanged" === q.type) {
				var V = q.path;
				v(V) && this.$101$(), k(V) ? this.requestDisplays() : R(V) ? this.requestSymbols() : qq(V) ? this.requestComponents() : Vq(V) ? this.requestScenes() : nq(V) ? this.requestModels() : Sq(V) && this.requestAssets()
			} else "download" === q.type ? this.downloadFile(q.path) : "confirm" === q.type && this.requestImport(q.path);
			this.fireEvent(q.type, q)
		}, q.prototype.onPropertyChanged = function(q) {
			"rulerEnabled" !== q.property && "gridEnabled" !== q.property || this.rightToolbar.iv()
		}, q.prototype.init = function() {
			this._inspectorCompact = !O(hV.config.compactFilter), this.menus = [], this.cloneInfo = {
				type: null,
				funcArray: [],
				jsonArray: []
			}, this.initSID(), this.$7$(), this.requestDisplays(), this.requestSymbols(), this.requestComponents(), this.requestScenes(), this.requestModels(), this.requestAssets(), this.$39$ && this.$39$.addEventListener("keydown", this.$105$.bind(this), !1), this.dnd = new i_(this), this.dndFromOutside = new N_(this, this.$39$), this.fireEvent("editorCreated"), this.fireEvent("mainMenuCreated"), this.fireEvent("mainToolbarCreated"), this.fireEvent("rightToolbarCreated");
			var q = this.params.open || V("hteditor");
			q && (xq(q) ? this._pendingOpenJSON = q : "newdisplay" === q ? this.newDisplayView() : "newsymbol" === q ? this.newSymbolView() : "newcomponent" === q && this.newComponent())
		}, q.prototype.$7$ = function() {
			this.mainTabView = new HS(this), this.funcView = new JS(this), this.eventView = new CS(this), this.functionView = new GS(this), this.objectView = new vS(this), this.textView = new uS(this), this.fontView = new dS(this), this.iconsView = new YS(this), this.componentView = new eS(this), this.messageView = new MS(this), this.$8$(), this.$9$(), this.$11$(), this.$10$(), this.leftSplitView = new bn(this.leftTopTabView, this.mainTabView, "h", hV.config.leftSplitViewPosition), this.rightSplitView = new bn(this.rightTopBorderPane, this.rightBottomTabView, "v", hV.config.rightSplitViewPosition), this.mainSplitView = new bn(this.leftSplitView, this.rightSplitView, "h", hV.config.mainSplitViewPosition), this.mainPane = new jn, this.mainPane.setTopView(this.topBorderPane), this.mainPane.setCenterView(this.mainSplitView), Bq(this.mainPane, this.$39$), this.mainPane.validateImpl()
		}, q.prototype.initSID = function() {
			var q = window.location.href.match("sid=([0-9a-z-]*)");
			q && (this.sid = q[1])
		}, q.prototype.$8$ = function() {
			var q = this;
			this.mainToolbar = new yS(this), this.rightToolbar = new XS(this), this.topBorderPane = new jn, this.topBorderPane.setCenterView(this.mainToolbar), this.topBorderPane.setRightView(this.rightToolbar), this.topBorderPane.setHeight(28), this.rightToolbar.onSumWidthChanged = function() {
				q.topBorderPane.setRightWidth(q.rightToolbar.getSumWidth())
			}
		}, q.prototype.$9$ = function() {
			this.displays = new an(this, hV.config.displaysEditable), this.symbols = new hn(this, hV.config.symbolsEditable), this.components = new $n(this, hV.config.componentsEditable), this.scenes = new tn(this, hV.config.scenesEditable), this.models = new sn(this, hV.config.modelsEditable),
				this.assets = new mn(this, hV.config.assetsEditable), this.leftTopTabView = new Jn, this.displaysTab = this.leftTopTabView.add(_("editor.displays"), this.displays, !1, hV.config.displaysVisible), this.symbolsTab = this.leftTopTabView.add(_("editor.symbols"), this.symbols, !1, hV.config.symbolsVisible), this.componentsTab = this.leftTopTabView.add(_("editor.components"), this.components, !1, hV.config.componentsVisible), this.scenesTab = this.leftTopTabView.add(_("editor.scenes"), this.scenes, !1, hV.config.scenesVisible), this.modelsTab = this.leftTopTabView.add(_("editor.models"), this.models, !1, hV.config.modelsVisible), this.assetsTab = this.leftTopTabView.add(_("editor.assets"), this.assets, !1, hV.config.assetsVisible), this.leftTopTabView.selectByIndex(0)
		}, q.prototype.$10$ = function() {
			this.inspectorTool = new iS(this), this.inspectorPane = new H_(this), this.rightTopBorderPane = new jn, this.rightTopBorderPane.setTopView(this.inspectorTool), this.rightTopBorderPane.setCenterView(this.inspectorPane), this.rightTopBorderPane.setTopHeight(ht.Default.widgetHeaderHeight + 6)
		}, q.prototype.$11$ = function() {
			var q = this;
			this.listPane = new US(this), this.layerPane = new jS(this), this.overview = new Dn(this), this.dataView = new NS(this), this.rightBottomTabView = new Jn, this.listPaneTab = this.rightBottomTabView.add(_("editor.list"), this.listPane, !0), this.layerTab = this.rightBottomTabView.add(_("editor.layer"), this.layerPane), this.overviewTab = this.rightBottomTabView.add(_("editor.overview"), this.overview), this.dataViewTab = this.rightBottomTabView.add(_("editor.data"), this.dataView);
			var V = this.rightBottomTabView.getTabModel().sm();
			V.ms(function() {
				var n = V.ld();
				q.dataView.visible = n.getView() === q.dataView, q.overview.setAutoUpdate(n.getView() === q.overview)
			})
		}, q.prototype.newFolder = function(q) {
			var V = this,
				n = this.explorer;
			n && ! function() {
				var S = q.sm().ld();
				q !== q.explorer.list || S && S.fileType === mV || (S = q.explorer.tree.sm().ld()), S && !n.isAccordionMode() || (S = q.explorer.rootNode);
				var x = _("editor.inputnewfoldername");
				$q(x, "", {
					nullable: !1,
					trim: !0,
					maxLength: hV.config.maxFileNameLength
				}, function(q, n) {
					if("ok" === n) {
						var x = S.url + "/" + q;
						if(V.getFileNode(x)) return void tq(_("editor.filenameconflict"), x, function() {});
						V.request("mkdir", x, function(q) {})
					}
				})
			}()
		}, q.prototype.getFileNode = function(q) {
			for(var V = this.leftTopTabView.getTabModel().getDatas(), n = 0; n < V.size(); n++) {
				var S = V.get(n);
				if(S.getView() instanceof Fn) {
					var _ = S.getView().dataModel.getDataById(q);
					if(_) return _
				}
			}
			return null
		}, q.prototype.selectFileNode = function(q) {
			for(var V = this, n = this.leftTopTabView.getTabModel().getDatas(), S = 0; S < n.size(); S++) {
				var _ = n.get(S);
				if(_.getView() instanceof Fn) {
					var x = function() {
						var n = _.getView(),
							S = n.dataModel.getDataById(q);
						if(S) return V.leftTopTabView.getTabModel().sm().ss(_), n.isAccordionMode() ? (S.fileType === mV ? n.accordion.sm().ss(S) : (S.getParent().expanded = !0, n.accordion.sm().ss(S)), n.accordion.ivm()) : S.fileType === mV ? (n.tree.sm().ss(S), setTimeout(function() {
							n.tree.makeVisible(S)
						}, 500)) : (n.tree.sm().ss(S.getParent()), n.list.sm().ss(S), setTimeout(function() {
							n.tree.makeVisible(S.getParent()), n.list.makeVisible(S)
						}, 500)), delete V._pendingSelectURL, {
							v: void 0
						}
					}();
					if("object" == typeof x) return x.v
				}
			}
			this._pendingSelectURL = q
		}, q.prototype.renameFile = function(q, V) {
			if(!q || q.$34$ || !V) return !1;
			if(V.length > hV.config.maxFileNameLength) return tq(_("editor.inputmax"), V, function() {}), !1;
			if(xq(q.getName()) && !xq(V) && (V += ".json"), q.getName() === V) return !1;
			var n = q.path + "/" + V;
			if(this.getFileNode(n)) return tq(_("editor.filenameconflict"), n, function() {}), !1;
			q.$34$ = n;
			var S = {
				old: q.url,
				new: q.$34$
			};
			return xq(S.old) && this.request("rename", {
				old: Aq(S.old),
				new: Aq(S.new)
			}, function(q) {}), this.request("rename", S, function(q) {}), this.mainTabView.getTabModel().each(function(n) {
				n.getTag() === q.url && (n.setTag(q.$34$), n.getView().url = q.$34$, n.setName(P(V)))
			}), !0
		}, q.prototype.moveFile = function(q, V) {
			if(V.path === 'public'){
				return
			}
			if(q && V && !q.$34$ && !V.$34$) {
				var n = {
					data: q,
					url: q.url,
					parent: V
				};
				if(this.fireEvent("fileMoving", n), !n.preventDefault) {
					var S = q.getParent();
					
					if(q.setParent(V), S !== q.getParent()) {
						q.$34$ = V.url + "/" + q.getName();
						var _ = {
							old: q.url,
							new: q.$34$
						};
						xq(_.old) && this.request("rename", {
							old: Aq(_.old),
							new: Aq(_.new)
						}, function(q) {}), this.request("rename", _, function(q) {})
					}
				}
			}
		}, q.prototype.removeFiles = function(q) {
			var V = this;
			q.forEach(function(q) {
				if(!q.$34$) {
					var n = q.url || q;
					xq(n) && V.request("remove", Aq(n), function(q) {}), V.request("remove", n, function(q) {})
				}
			})
		}, q.prototype.requestBase64 = function(q, V) {
			this.request("source", {
				url: q,
				encoding: "base64",
				prefix: "data:;base64,"
			}, V)
		}, q.prototype.request = function(q, V, n, S) {
			var _ = this;
			n = n || this.emptyFunc, S ? setTimeout(function() {
				_.$40$.request(q, V, n)
			}, S) : this.$40$.request(q, V, n)
		}, q.prototype.requestDisplays = function() {
			var q = this;
			this._requestingDisplays || (this.request("explore", "/displays", function(V) {
				q._requestingDisplays = !1, q.displays.parse(V), q._pendingOpenJSON && k(q._pendingOpenJSON) && (q.displays.dataModel.getDataById(q._pendingOpenJSON) ? (q.open(q._pendingOpenJSON), q.selectFileNode(q._pendingOpenJSON)) : hV.config.newIfFailToOpen && (q.newDisplayView(), q.save(null, q._pendingOpenJSON)), delete q._pendingOpenJSON), q._pendingSelectURL && k(q._pendingSelectURL) && q.selectFileNode(q._pendingSelectURL)
			}, hV.config.requestDelay), this._requestingDisplays = !0)
		}, q.prototype.requestSymbols = function() {
			var q = this;
			this._requestingSymbols || (this.request("explore", "/symbols", function(V) {
				q._requestingSymbols = !1, q.symbols.parse(V), q._pendingOpenJSON && R(q._pendingOpenJSON) && (q.symbols.dataModel.getDataById(q._pendingOpenJSON) ? (q.open(q._pendingOpenJSON), q.selectFileNode(q._pendingOpenJSON)) : hV.config.newIfFailToOpen && (q.newSymbolView(), q.save(null, q._pendingOpenJSON)), delete q._pendingOpenJSON), q._pendingSelectURL && R(q._pendingSelectURL) && q.selectFileNode(q._pendingSelectURL)
			}, hV.config.requestDelay), this._requestingSymbols = !0)
		}, q.prototype.requestComponents = function() {
			var q = this;
			this._requestingComponents || (this.request("explore", "/components", function(V) {
				q._requestingComponents = !1, q.components.parse(V), q._pendingOpenJSON && qq(q._pendingOpenJSON) && (q.components.dataModel.getDataById(q._pendingOpenJSON) ? q.open(q._pendingOpenJSON) : hV.config.newIfFailToOpen && q.newComponent(), delete q._pendingOpenJSON), q._pendingSelectURL && qq(q._pendingSelectURL) && q.selectFileNode(q._pendingSelectURL)
			}, hV.config.requestDelay), this._requestingComponents = !0)
		}, q.prototype.requestScenes = function() {
			var q = this;
			this._requestingScenes || (this.request("explore", "/scenes", function(V) {
				q._requestingScenes = !1, q.scenes.parse(V), q._pendingOpenJSON && Vq(q._pendingOpenJSON) && (q.open(q._pendingOpenJSON), delete q._pendingOpenJSON), q._pendingSelectURL && isScenes(q._pendingSelectURL) && q.selectFileNode(q._pendingSelectURL)
			}, hV.config.requestDelay), this._requestingScenes = !0)
		}, q.prototype.requestModels = function() {
			var q = this;
			this._requestingModels || (this.request("explore", "/models", function(V) {
				q._requestingModels = !1, q.models.parse(V), q._pendingOpenJSON && nq(q._pendingOpenJSON) && (q.open(q._pendingOpenJSON), delete q._pendingOpenJSON), q._pendingSelectURL && nq(q._pendingSelectURL) && q.selectFileNode(q._pendingSelectURL)
			}, hV.config.requestDelay), this._requestingModels = !0)
		}, q.prototype.requestAssets = function() {
			var q = this;
			this._requestingAssets || (this.request("explore", "/assets", function(V) {
				q._requestingAssets = !1, q.assets.parse(V), q._pendingOpenJSON && Sq(q._pendingOpenJSON) && (q.open(q._pendingOpenJSON), delete q._pendingOpenJSON), q._pendingSelectURL && Sq(q._pendingSelectURL) && q.selectFileNode(q._pendingSelectURL)
			}, hV.config.requestDelay), this._requestingAssets = !0)
		}, q.prototype.requestImport = function(q) {
			var V = this;
			hV.config.importConfirm ? tq("", _("editor.importconfirm"), function() {
				V.request("import", {
					path: q,
					move: !0
				})
			}, function() {
				V.request("import", {
					path: q,
					move: !1
				})
			}) : this.request("import", {
				path: q,
				move: !0
			})
		}, q.prototype.downloadFile = function(q) {
			try {
				var V = document.createElement("iframe");
				V.src = q, V.style.display = "none", document.body.appendChild(V)
			} catch(q) {}
		}, q.prototype.$6$ = function(q) {
			var V = this._currentTab;
			this._currentTab = q, this.inspectorPane.$6$(q), this.listPane.$6$(q), this.overview.$6$(q), this.dataView.$6$(q), this.layerPane.$6$(q), this.mainToolbar.$6$(q), this.rightToolbar.$6$(q), this.inspectorTool.$6$(q), this.fireEvent("tabUpdated", {
				tab: q,
				oldTab: V
			})
		}, q.prototype.beginTransaction = function() {
			this.dm && this.dm.beginTransaction()
		}, q.prototype.endTransaction = function() {
			this.dm && this.dm.endTransaction()
		}, q.prototype.$101$ = function() {
			this.mainTabView.$101$()
		}, q.prototype.dropLocalFileOnGraphView = function(q) {
			var V = {
				event: q
			};
			if(this.displayView ? (V.displayView = this.displayView, this.fireEvent("displayViewOutsideDropping", V)) : this.symbolView && (V.symbolView = this.symbolView, this.fireEvent("symbolViewOutsideDropping", V)), !V.preventDefault)
				for(var n = q.dataTransfer.files, S = 0; S < n.length; S++) {
					var _ = n[S],
						x = _.name;
					_q(x) && !gq(x) ? this.insertLocalImageFile(q, _) : xq(x) && this.insertLocalJSONFile(q, _)
				}
		}, q.prototype.insertLocalImageFile = function(q, V) {
			var n = this,
				S = this.gv.lp(q);
			fq(V, function(q) {
				if(n.displayView) {
					var _ = new ht.Node;
					_.setImage(q), _.p(S), _.setDisplayName(E(V.name)), n.displayView.addData(_)
				} else if(n.symbolView) {
					var x = new zn({
						type: "image",
						name: q,
						rect: [S.x, S.y, -1, -1]
					});
					x.setDisplayName(E(V.name)), n.symbolView.addData(x)
				}
			}, !0)
		}, q.prototype.insertLocalJSONFile = function(q, V) {
			var n = this;
			fq(V, function(V) {
				n.$99$(V, n.currentView.graphView.lp(q))
			})
		}, q.prototype.dropLocalFileOnDir = function(q, V) {
			for(var n = q.dataTransfer.files, S = 0; S < n.length; S++) this.uploadLocalFile(n[S], V.url)
		}, q.prototype.uploadLocalFile = function(q, V) {
			var n = this,
				S = q.name;
			fq(q, function(q) {
				var _ = {
					path: V + "/" + S,
					content: q
				};
				n.request("upload", _)
			}, !0)
		}, q.prototype.addTab = function(q, V) {
			this.mainTabView.add(q), this.fireEvent("tabCreated", {
				tab: q
			}), V && this.mainTabView.getTabModel().sm().ss(q), this.mainTabView.validate()
		}, q.prototype.openByJSON = function(q, V, n, S, _) {
			this.mainTabView.getTabModel();
			if(q === fV) {
				var x = this.mainTabView.getTabModel().getDataByTag(V);
				x || (x = new ht.Tab, x.setTag(V), x.setIcon("editor.display"), x.setClosable(!0), x.setName(n), new OS(this, x, V, S), this.addTab(x)), this.mainTabView.getTabModel().sm().ss(x)
			} else if(q === TV) {
				var O = this.mainTabView.getTabModel().getDataByTag(V);
				O || (O = new ht.Tab, O.setTag(V), O.setIcon("editor.symbol"), O.setClosable(!0), O.setName(n), new zS(this, O, V, S), this.addTab(O)), this.mainTabView.getTabModel().sm().ss(O)
			} else q === BV && this.componentView.update(V, _, n, S)
		}, q.prototype.isOpenable = function(q) {
			return !hV.config.isOpenable || hV.config.isOpenable(q)
		}, q.prototype.open = function(q, V) {
			var n = this;
			lq(q) && (q = this.getFileNode(q)), q && !q.$34$ && this.isOpenable(q) && (q.fileType === fV ? this.mainTabView.open(q) : q.fileType === TV ? this.mainTabView.open(q) : q.fileType === BV ? this.componentView.open(q) : q.fileType === DV && (Kq(q.url) ? Q(q.url, function(S) {
				var _ = ht.Default.svgToShape(S, {
					segments: hV.config.svgSegments
				});
				setTimeout(function() {
					var S = P(q.getName());
					V ? n.newSymbolView(S, !1) : n.newDisplayView(S), _.output.comps.forEach(function(q) {
						delete q.repeatImage
					}), n.beginTransaction();
					var x = hV.toDatas(_.output.comps, V);
					x.forEach(function(q) {
						n.currentView.addData(q, !0)
					}), V && (_.output.width && n.dm.a("width", _.output.width), _.output.height && n.dm.a("height", _.output.height)), n.zoomToFit(), n.endTransaction()
				}, 600)
			}) : gq(q.url) && Q(q.url, function(S) {
				var _ = P(q.getName()),
					x = ht.Default.cadToShape(S),
					O = {},
					w = Object.keys(x.blockDef).length,
					K = function() {
						V ? n.newSymbolView(_, !1) : n.newDisplayView(_), n.beginTransaction(), x.comps.forEach(function(q) {
							"image" === q.type && O[q.name] && (q.name = O[q.name])
						});
						var q = hV.toDatas(x.comps, V);
						q.forEach(function(q) {
							n.currentView.addData(q, !0)
						}), V && (x.width && n.dm.a("width", x.width), x.height && n.dm.a("height", x.height)), n.zoomToFit(), n.endTransaction()
					};
				w ? ! function() {
					var V = function() {
							w--, 0 === w && K()
						},
						S = "symbols/" + q.path.substr("assets/".length) + "/" + _ + "/";
					for(var g in x.blockDef) {
						x.blockDef[g].comps.forEach(function(q) {
							"image" === q.type && (q.name = S + q.name + ".json")
						});
						var A = {
							path: O[g] = S + g + ".json",
							content: W(x.blockDef[g])
						};
						n.request("upload", A, V)
					}
				}() : K()
			})))
		}, q.prototype.$99$ = function(q, V) {
			var n = this;
			if(q) {
				if(this.beginTransaction(), q = d(q), this.displayView && Hq(q.d)) {
					var S = this.displayView.graphView,
						_ = S.dm().deserialize(q, S.getCurrentSubGraph(), {
							justDatas: !0,
							disableOnPreDeserialize: !0,
							disableOnPostDeserialize: !0
						});
					if(S.sm().ss(_.toList(S.isSelectable, S)), _.each(function(q) {
							n.displayView.addData(q, !0, !0)
						}), V) {
						var x = S.getUnionNodeRect(_.toArray());
						S.moveSelection(V.x - x.x - x.width / 2, V.y - x.y - x.height / 2)
					}
				} else this.symbolView && Hq(q.comps) && q.comps.forEach(function(q) {
					pV(q, n.symbolView)
				});
				this.gv.setFocus(), this.endTransaction()
			}
		}, q.prototype.$100$ = function(q, V) {
			var n = this;
			if(q) {
				if(!this.tab) return void this.open(q);
				if(!gq(q.url)) {
					if(q.fileType === fV) return void(this.displayView && (hV.config.insertDisplayViewAsRefGraph ? ! function() {
						var S = new ht.RefGraph;
						S.setRef(q.url), S.onPendingUpdated = function() {
							S.onPendingUpdated = null, S.p(V)
						}, S.setDisplayName(E(q.url)), n.displayView.addData(S)
					}() : Q(q.url, function(q) {
						n.$99$(q, V)
					})));
					if(this.url !== q.url)
						if(q.fileType !== BV) {
							if(q.fileType !== TV && q.fileType !== DV) return q.fileType === oV ? void(this.displayView && hV.config.handleInsertSceneFileToGraphView && hV.config.handleInsertSceneFileToGraphView(this.displayView, q, V)) : void(q.fileType === IV && this.displayView && hV.config.handleInsertModelFileToGraphView && hV.config.handleInsertModelFileToGraphView(this.displayView, q, V));
							if(this.displayView) {
								var S = new ht.Node;
								if(S.setImage(q.url), V) S.p(V.x, V.y);
								else {
									var _ = this.gv.getViewRect();
									_ && S.p(_.x + _.width / 2, _.y + _.height / 2)
								}
								S.setDisplayName(E(q.url)), this.displayView.addData(S)
							} else if(this.symbolView) {
								var x = ht.Default.getImage(q.url),
									O = x ? x.width : -1,
									w = x ? x.height : -1,
									K = V ? V.x : (this.dm.a("width") || 0) / 2,
									g = V ? V.y : (this.dm.a("height") || 0) / 2,
									A = new zn({
										type: "image",
										name: q.url,
										rect: [K - (O > 0 ? O / 2 : 0), g - (w > 0 ? w / 2 : 0), O, w]
									});
								A.setDisplayName(E(q.url)), this.symbolView.addData(A)
							}
						} else if(this.symbolView) {
						var l = new Bn({
							type: q.url,
							rect: [V ? V.x : (this.dm.a("width") || 0) / 2, V ? V.y : (this.dm.a("height") || 0) / 2, -1, -1]
						});
						l.setDisplayName(E(q.url)), this.symbolView.addData(l)
					}
				}
			}
		}, q.prototype.newDisplayView = function(q) {
			return this.mainTabView.newDisplayView(q)
		}, q.prototype.newSymbolView = function(q, V) {
			return this.mainTabView.newSymbolView(q, V)
		}, q.prototype.newComponent = function() {
			this.componentView.open()
		}, q.prototype.save = function(q, V) {
			this.mainTabView.save(q, V)
		}, q.prototype.reload = function() {
			this.mainTabView.reload()
		}, q.prototype.preview = function() {
			this.mainTabView.preview()
		}, q.prototype.closeTab = function(q, V, n) {
			this.mainTabView.closeTab(q, V, n)
		}, q.prototype.closeOtherTabs = function(q, V) {
			this.mainTabView.closeOtherTabs(q, V)
		}, q.prototype.closeTabsToTheRight = function(q, V) {
			this.mainTabView.closeTabsToTheRight(q, V)
		}, q.prototype.closeAllTabs = function(q, V) {
			this.mainTabView.closeAllTabs(q, V)
		}, q.prototype.filterProperties = function() {
			this.inspector && this.inspector.filterPropertiesLater()
		}, q.prototype.isRulerEnabled = function() {
			return this._rulerEnabled
		}, q.prototype.setRulerEnabled = function(q) {
			var V = this._rulerEnabled;
			V !== q && (this._rulerEnabled = q, this.tabs.forEach(function(V) {
				V.getView().setRulerEnabled(q)
			}), this.fp("rulerEnabled", V, q))
		}, q.prototype.toggleRulerEnabled = function() {
			this.setRulerEnabled(!this.isRulerEnabled())
		}, q.prototype.isGridEnabled = function() {
			return this._gridEnabled
		}, q.prototype.setGridEnabled = function(q) {
			var V = this._gridEnabled;
			V !== q && (this._gridEnabled = q, this.tabs.forEach(function(V) {
				V.getView().graphView.getEditInteractor().gridEnabled = q
			}), this.fp("gridEnabled", V, q))
		}, q.prototype.toggleGridEnabled = function() {
			this.setGridEnabled(!this.isGridEnabled())
		}, q.prototype.toggleLeft = function() {
			"normal" === this.leftSplitView.getStatus() ? this.leftSplitView.setStatus("cl") : this.leftSplitView.setStatus("normal")
		}, q.prototype.toggleRight = function() {
			"normal" === this.mainSplitView.getStatus() ? this.mainSplitView.setStatus("cr") : this.mainSplitView.setStatus("normal")
		}, q.prototype.toggleBoth = function() {
			"normal" === this.mainSplitView.getStatus() || "normal" === this.leftSplitView.getStatus() ? (this.mainSplitView.setStatus("cr"), this.leftSplitView.setStatus("cl")) : (this.mainSplitView.setStatus("normal"), this.leftSplitView.setStatus("normal"))
		}, q.prototype.zoomIn = function() {
			this.gv && this.gv.zoomIn(hV.config.animate)
		}, q.prototype.zoomOut = function() {
			this.gv && this.gv.zoomOut(hV.config.animate)
		}, q.prototype.zoomReset = function() {
			this.gv && this.gv.zoomReset(hV.config.animate)
		}, q.prototype.zoomToFit = function() {
			this.gv && this.gv.fitContent(hV.config.animate, hV.config.fitPadding)
		}, q.prototype.delete = function() {
			this.gv && this.gv.removeSelection()
		}, q.prototype.copyFiles = function() {
			this.explorer.copyFiles()
		}, q.prototype.pasteFiles = function() {
			this.explorer.pasteFiles()
		}, q.prototype.copy = function() {
			var q = this;
			if(this.ld) {
				var V = this.cloneInfo;
				if(V.funcArray.length = 0, V.jsonArray.length = 0, V.offset = {
						x: 0,
						y: 0
					}, V.lastCheck = null, V.lastView = this.gv, this.displayView) V.type = "display";
				else {
					if(!this.symbolView) return void(V.type = null);
					V.type = "symbol"
				}
				var n = {};
				this.selection.forEach(function(q) {
					q._refGraph || (n[q._id] = q, q instanceof ht.Block && !(q instanceof ht.RefGraph) && o(q, n))
				});
				var S = [];
				this.gv.each(function(q) {
					n[q._id] && S.push(q)
				}), this.gv.copyMap = n, S.forEach(function(n) {
					var S = q.gv.isSelected(n),
						_ = n.$51$(q.gv);
					if(0 !== _.length) {
						V.funcArray.push([n._id, S].concat(_));
						var x = UV(n);
						x && V.jsonArray.push([S, x])
					}
				}), this.fireEvent("copy", {
					datas: S,
					info: V
				}), this.gv.copyMap = null
			}
		}, q.prototype.hasCopyInfo = function() {
			return this.cloneInfo.funcArray.length > 0
		}, q.prototype.paste = function(q) {
			var V = this,
				n = this.gv,
				S = this.cloneInfo;
			if(S.funcArray.length && n) {
				var _ = [],
					x = [];
				if(this.beginTransaction(), ht.Default.setIsolating(!0), "display" === S.type && this.displayView || "symbol" === S.type && this.symbolView ? ! function() {
						var q = {},
							O = [];
						S.funcArray.forEach(function(S) {
							var w = S[0],
								K = S[1],
								g = S[2],
								A = S[3],
								l = A(g, n);
							V.currentView.addData(l, !0), q[w] = l, _.push(l), O.push(g), K && x.push(l)
						});
						for(var w = 0; w < _.length; w++) _[w].$50$(O[w], n, q)
					}() : S.jsonArray.length && S.jsonArray.forEach(function(q) {
						var S = q[0],
							O = q[1],
							w = jV(O, !!V.symbolView);
						w && (w.setParent(n.getCurrentSubGraph()), V.currentView.addData(w, !0), _.push(w), S && x.push(w))
					}), ht.Default.setIsolating(!1), x.length && this.sm.ss(x), S.lastView !== n && (S.offset.x = -hV.config.pasteOffset, S.offset.y = -hV.config.pasteOffset), !q && _.length) {
					S.offset.x += hV.config.pasteOffset, S.offset.y += hV.config.pasteOffset, n.moveDatas(_, S.offset.x, S.offset.y);
					var O = n.$64$(_);
					O && (S.offset.x += O.x, S.offset.y += O.y, S.lastCheck || (n.moveDatas(_, -hV.config.pasteOffset, -hV.config.pasteOffset), S.offset.x -= hV.config.pasteOffset, S.offset.y -= hV.config.pasteOffset)), S.lastCheck = O
				}
				S.lastView = n, this.fireEvent("paste", {
					datas: _,
					info: S
				}), n.setFocus(), this.endTransaction()
			}
		}, q.prototype.block = function() {
			var q = this;
			if(this.displayView) {
				var V = this.selection;
				V.length && ! function() {
					q.beginTransaction();
					var n = new ht.Block;
					V.forEach(function(q) {
						q.setParent(n)
					}), q.displayView.addData(n), q.endTransaction()
				}()
			}
		}, q.prototype.unblock = function() {
			var q = this;
			if(this.displayView) {
				this.beginTransaction();
				var V = [];
				this.selection.forEach(function(n) {
					n instanceof ht.Block && !(n instanceof ht.RefGraph) && ! function() {
						var S = n.getParent();
						n.getChildren().toArray().forEach(function(q) {
							q.setParent(S), V.push(q)
						}), q.dm.remove(n)
					}()
				}), V.length && (this.sm.ss(V), this.gv.setFocus()), this.endTransaction()
			}
		}, q.prototype.bringForward = function() {
			this.dm && (this.dm.isHierarchicalRendering() ? this.dm.moveSelectionDown() : this.dm.bringSelectionForward())
		}, q.prototype.bringToFront = function() {
			this.dm && (this.dm.isHierarchicalRendering() ? this.dm.moveSelectionToBottom() : this.dm.bringSelectionToFront())
		}, q.prototype.sendBackward = function() {
			this.dm && (this.dm.isHierarchicalRendering() ? this.dm.moveSelectionUp() : this.dm.sendSelectionBackward())
		}, q.prototype.sendToBack = function() {
			this.dm && (this.dm.isHierarchicalRendering() ? this.dm.moveSelectionToTop() : this.dm.sendSelectionToBack())
		}, q.prototype.undo = function() {
			this.dm && this.dm.undo()
		}, q.prototype.redo = function() {
			this.dm && this.dm.redo()
		}, q.prototype.distributeHorizontal = function() {
			this.inspectorTool.distributeHorizontal()
		}, q.prototype.distributeVertical = function() {
			this.inspectorTool.distributeVertical()
		}, q.prototype.alignLeft = function() {
			this.inspectorTool.alignLeft()
		}, q.prototype.alignHorizontal = function() {
			this.inspectorTool.alignHorizontal()
		}, q.prototype.alignRight = function() {
			this.inspectorTool.alignRight()
		}, q.prototype.alignTop = function() {
			this.inspectorTool.alignTop()
		}, q.prototype.alignVertical = function() {
			this.inspectorTool.alignVertical()
		}, q.prototype.alignBottom = function() {
			this.inspectorTool.alignBottom()
		}, q.prototype.folder = function q() {
			if(this.displayView) {
				this.beginTransaction();
				var q = new ht.Data;
				q.s("editor.folder", !0), this.dm.add(q);
				var V = this.list.getTopRowOrderSelection();
				V.each(function(V) {
					q.addChild(V)
				}), this.sm.ss(q), this.endTransaction()
			}
		}, q.prototype.unfolder = function() {
			var q = this;
			if(this.displayView) {
				this.beginTransaction();
				var V = this.sm.toSelection(function(q) {
					return q.s("editor.folder")
				});
				V.forEach(function(q) {
					q.toChildren().forEach(function(V) {
						V.setParent(q.getParent())
					})
				}), V.forEach(function(V) {
					q.dm.remove(V)
				}), this.endTransaction()
			}
		}, q.prototype.locate = function(q) {
			q && this.request("locate", q.url || q)
		}, q.prototype.saveImage = function(q, V, n) {
			var S = this,
				_ = function() {
					var _ = {
						path: V,
						content: kq(q)
					};
					S.request("upload", _, n)
				};
			lq(q) && !ht.Default.getImage(q) ? /.json$/.test(q) ? ht.Default.xhrLoad(q, function(V) {
				V && (ht.Default.setImage(q, ht.Default.parse(V)), _())
			}) : ! function() {
				var V = new window.Image;
				V.onload = function() {
					ht.Default.setImage(q, V), _()
				}, V.src = q
			}() : _()
		}, q.prototype.$105$ = function(q) {
			var V = q.keyCode;
			if(a(q) && 83 === V && q.preventDefault(), _n.length) {
				if((q.target._ignore || !hq(q.target)) && !ht.Default.popup) {
					var n = _n[_n.length - 1];
					U(q) && n.$49$ ? n.$49$() : N(q) && n.$48$ && n.$48$()
				}
			} else {
				if(a(q) && 83 === V) return void this.save();
				if(!hq(q.target)) {
					if(q.preventDefault(), U(q)) {
						for(var S = 0; S < this.menus.length; S++)
							if(this.menus[S].isShowing()) return void this.menus[S].hide();
						if(this.funcView.getView().parentNode) return void this.funcView.hide();
						if(this.iconsView.getView().parentNode) return void this.iconsView.hide();
						if(this.tab) {
							var _ = this.tab.getView().graphView.getInteractors();
							_ && _.each(function(V) {
								V.$49$ && V.$49$(q)
							})
						}
					}
					80 === V ? this.preview() : 187 === V ? this.zoomIn() : 189 === V ? this.zoomOut() : 48 === V ? this.zoomToFit() : 57 === V ? this.zoomReset() : a(q) && 67 === V ? this.copy() : a(q) && 86 === V ? this.paste() : a(q) && F(q) && 90 === V ? this.redo() : a(q) && 90 === V ? this.undo() : q.altKey && a(q) && 221 === V ? this.bringToFront() : q.altKey && a(q) && 219 === V ? this.sendToBack() : a(q) && 221 === V ? this.bringForward() : a(q) && 219 === V && this.sendBackward()
				}
			}
		}, q.prototype.createDisplayItem = function(q, V, n, S, _) {
			var x = this,
				O = function() {
					return x.displayView && x.displayView.$4$() === q
				},
				w = sq(q, V, n, O);
			return w.visible = function() {
				return !!x.displayView
			}, w.action = function() {
				x.displayView && x.displayView.$5$(q, S, _)
			}, w
		}, q.prototype.createSymbolItem = function(q, V, n, S, _) {
			var x = this,
				O = function() {
					return x.symbolView && x.symbolView.$4$() === q
				},
				w = sq(q, V, n, O);
			return w.visible = function() {
				return !!x.symbolView
			}, w.action = function() {
				x.symbolView && x.symbolView.$5$(q, S, _)
			}, w
		}, q.prototype.showMessage = function(q, V, n) {
			this.messageView.show(q, V, n)
		}, MV(q, [{
			key: "dm",
			get: function() {
				return this.gv ? this.gv.dm() : null
			}
		}, {
			key: "gv",
			get: function() {
				var q = this.mainTabView.getTabModel().sm().ld();
				return q ? q.getView().graphView : null
			}
		}, {
			key: "editInteractor",
			get: function() {
				return this.gv ? this.gv.getEditInteractor() : null
			}
		}, {
			key: "pointsEditingMode",
			get: function() {
				return !!this.editInteractor && this.editInteractor.pointsEditingMode
			},
			set: function(q) {
				this.editInteractor && (this.editInteractor.pointsEditingMode = q)
			}
		}, {
			key: "anchorVisible",
			get: function() {
				return !!this.editInteractor && this.editInteractor.getStyle("anchorVisible")
			},
			set: function(q) {
				this.editInteractor && this.editInteractor.setStyle("anchorVisible", q)
			}
		}, {
			key: "sm",
			get: function() {
				return this.gv ? this.gv.sm() : null
			}
		}, {
			key: "ld",
			get: function() {
				return this.sm ? this.sm.ld() : null
			}
		}, {
			key: "selection",
			get: function() {
				var q = this,
					V = [];
				return this.gv && this.gv.each(function(n) {
					q.gv.isSelected(n) && V.push(n)
				}), V
			}
		}, {
			key: "tabs",
			get: function() {
				return this.mainTabView.tabs
			}
		}, {
			key: "inspector",
			get: function() {
				return this.inspectorPane.inspector
			}
		}, {
			key: "list",
			get: function() {
				return this.listPane.list
			}
		}, {
			key: "tab",
			get: function() {
				return this.mainTabView.currentTab
			}
		}, {
			key: "url",
			get: function() {
				return this.tab ? this.tab.getTag() : null
			}
		}, {
			key: "explorer",
			get: function() {
				return this.leftTopTabView.getCurrentTab().getView()
			}
		}, {
			key: "dir",
			get: function() {
				return this.explorer ? this.explorer.tree.getSelectionModel().getLastData() : null
			}
		}, {
			key: "file",
			get: function() {
				return this.explorer ? this.explorer.getFileListView().getSelectionModel().getLastData() : null
			}
		}, {
			key: "currentLayer",
			get: function() {
				return this.layerPane.currentLayer
			}
		}, {
			key: "currentView",
			get: function() {
				var q = this.tab;
				return q ? q.getView() : null
			}
		}, {
			key: "displayTree",
			get: function() {
				return this.displayView ? this.displayView.displayTree : null
			}
		}, {
			key: "displayView",
			get: function() {
				var q = this.currentView;
				return q instanceof OS ? q : null
			}
		}, {
			key: "symbolList",
			get: function() {
				return this.symbolView ? this.symbolView.symbolList : null
			}
		}, {
			key: "symbolView",
			get: function() {
				var q = this.currentView;
				return q instanceof zS ? q : null
			}
		}, {
			key: "inspectorCompact",
			get: function() {
				return this._inspectorCompact
			},
			set: function(q) {
				this._inspectorCompact = q, this.filterProperties(), this.inspectorTool.iv()
			}
		}, {
			key: "inspectorInputFilter",
			get: function() {
				return this.inspectorTool.searchField.getValue()
			},
			set: function(q) {
				this.inspectorTool.searchField.setValue(q), this.filterProperties()
			}
		}]), q
	}();
	I(U_, {
		ms_fire: 1,
		_rulerEnabled: hV.config.rulerEnabled,
		_gridEnabled: hV.config.gridEnabled
	}), hV.Editor = U_;
	var j_ = function() {
			function q(V) {
				YV(this, q);
				var n = this._view = document.createElement("div"),
					S = this._editableLayer = document.createElement("div"),
					_ = S.style;
				this.config = V, this._editable = !0, _.backgroundColor = "rgba( 255, 255, 255, 0.3)", _.position = "absolute", _.top = 0, _.right = 0, _.bottom = 0, _.left = 0, _.zIndex = 1e3, hV.config.useCodeEditor || (this._monacoEditor = new ht.widget.TextArea, this._view = this._monacoEditor.getView(), V && V.value && this._monacoEditor.setValue(V.value)), n.style.position = "absolute"
			}
			return q.prototype.getView = function() {
				return this._view
			}, q.prototype.setValue = function(q) {
				void 0 !== q && null !== q || (q = ""), this.monacoEditor && this.monacoEditor.setValue(q)
			}, q.prototype.getValue = function() {
				return this.monacoEditor && this.monacoEditor.getValue()
			}, q.prototype.layout = function() {
				this.monacoEditor && this.monacoEditor.layout()
			}, q.prototype.invalidate = function() {
				this.layoutLater()
			}, q.prototype.iv = function() {
				this.invalidate()
			}, q.prototype.layoutLater = function(q) {
				var V = this;
				setTimeout(function() {
					V.layout()
				}, q || 300)
			}, q.prototype.setEditable = function(q) {
				if(this._monacoEditor instanceof ht.widget.TextArea) return void this._monacoEditor.setEditable(q);
				if(this._editable !== q) {
					var V = this._editableLayer;
					q ? V.parentNode && V.parentNode.removeChild(V) : this.getView().appendChild(V), this._editable = q
				}
			}, q.prototype.isEditable = function() {
				return this._monacoEditor instanceof ht.widget.TextArea ? this._monacoEditor.isEditable() : this._editable
			}, MV(q, [{
				key: "monacoEditor",
				get: function() {
					return !this._monacoEditor && window.monaco && (this._monacoEditor = monaco.editor.create(this._view, this.config || {
						value: "",
						language: "javascript",
						minimap: {
							enabled: !1
						}
					})), this._monacoEditor
				}
			}]), q
		}(),
		p_ = function() {
			function q(V, n) {
				var S = this;
				YV(this, q), this.editor = n, this.handler = V, this.cookie = 0, this.callbacks = {}, this.cmds = {};
				var _ = hV.config.host || window.location.hostname,
					x = hV.config.port || window.location.port,
					O = window.location.protocol + "//" + _ + ":" + x;
					var userStr = getCookie("user");
					if(!userStr){
				    	userStr = '{}'
				    }
	    			var UserJson = JSON.parse(userStr);
	    			var userName = '';
	    		if(UserJson && UserJson.name){
	    			userName = UserJson.name + '/';
	    		}
	    		//hV.config.userName = userName;
				this.socket = io.connect(O), this.socket.on("connect", function() {
					S.handler({
						type: "connected",
						message: O
					})
				}), this.socket.on("disconnect", function() {
					S.handler({
						type: "disconnected",
						message: O
					})
				}), this.socket.on(userName+"fileChanged", function(q) {
					S.handler({
						type: "fileChanged",
						path: q.path,
						event: q.event
					})
				}), this.socket.on(userName+"operationDone", function(q, V) {
					S.handleRespone(q, V)
				}), this.socket.on("download", function(q) {
					S.handler({
						type: "download",
						path: q
					})
				}), this.socket.on(userName+"confirm", function(q, V) {
					S.handler({
						type: "confirm",
						path: q,
						datas: V
					})
				})
			}
			return q.prototype.request = function(q, V, n) {
				var S = ++this.cookie;
				this.callbacks[S] = n, this.cmds[S] = q;
				var _ = this.editor.sid;
				this.socket.emit(q, S,V, _ ? {
					sid: _
				} : null);
				var x = q;
				V && (lq(V) ? x = q + ": " + V : V.path && (x = q + ": " + V.path)), this.handler({
					type: "request",
					message: x,
					cmd: q,
					data: V
				})
			}, q.prototype.handleRespone = function(q, V) {
				var n = this.callbacks[q],
					S = this.cmds[q];
				delete this.callbacks[q], delete this.cmds[q], n && n(V), this.handler({
					type: "response",
					message: S,
					cmd: S,
					data: V
				})
			}, q
		}(),
		y_ = function() {
			function q(V, n) {
				var S = this;
				YV(this, q), this.editor = n, this.handler = V, this.cookie = 0, this.callbacks = {}, this.cmds = {}, this.fileChangeVersion = String((new Date).getTime());
				var _ = hV.config.host || window.location.hostname,
					x = hV.config.port || window.location.port,
					O = this.url = window.location.protocol + "//" + _ + ":" + x;
				setTimeout(function() {
					S.handler({
						type: "connected",
						message: O
					})
				}, 1), hV.config.checkForFileChanges && hV.config.checkForFileChangesInterval && this.fileChangedEvent()
			}
			return q.prototype.request = function(q, V, n) {
				var S = ++this.cookie;
				this.callbacks[S] = n, this.cmds[S] = q;
				var _ = this.editor.sid;
				this[q](S, V, _ ? _ : null, n);
				var x = q;
				V && (lq(V) ? x = q + ": " + V : V.path && (x = q + ": " + V.path)), this.handler({
					type: "request",
					message: x,
					cmd: q,
					data: V
				})
			}, q.prototype.fileChangedEvent = function() {
				var q = this,
					V = this.url + "/fileVersion";
				V += "/" + q.fileChangeVersion, V += "?sid=" + this.editor.sid, q.send("GET", V, null, function(V) {
					q.fileChangeVersion = String((new Date).getTime());
					var n = V.target.response;
					if(n) {
						n = JSON.parse(n);
						var S = Object.keys(n);
						S.forEach(function(V) {
							q.handler({
								type: "fileChanged",
								path: V
							})
						})
					}
				}), setTimeout(function() {
					q.fileChangedEvent()
				}, hV.config.checkForFileChangesInterval)
			}, q.prototype.export = function(q, V, n) {
				var S = this,
					_ = new ht.Request,
					x = {},
					O = new FormData,
					w = this.url + "/export";
				w += "?sid=" + n, O.append("dir", V), x.url = encodeURI(w), x.method = "POST", x.data = O, _.setResponseType("blob"), _.onload = function(V) {
					var n = V.target;
					if(200 == n.status || 0 === n.status) {
						var _ = n.response,
							x = n.getResponseHeader("Content-Disposition").split(";"),
							O = x[1].split("=")[1],
							w = new Blob([_], {
								type: "application/zip"
							}),
							K = document.createElement("a");
						K.href = window.URL.createObjectURL(w), K.download = decodeURI(O), K.click(), S.handleRespone(q, !0)
					}
				}, _.send(x)
			}, q.prototype.mkdir = function(q, V, n) {
				var S = this,
					_ = new ht.Request,
					x = {},
					O = new FormData,
					w = this.url + "/mkdir";
				w += "?sid=" + n, O.append("path", V), x.url = encodeURI(w), x.method = "POST", x.data = O, _.onload = function(n) {
					var _ = n.target;
					if(200 == _.status || 0 === _.status) {
						var x = _.response || _.responseText;
						S.handleRespone(q, "true" === x), S.handler({
							type: "fileChanged",
							path: V
						})
					}
				}, _.send(x)
			}, q.prototype.explore = function(q, V, n) {
				var S = this,
					_ = new ht.Request,
					x = {},
					O = this.url + "/explore";
				O += "/" + V, O += "?sid=" + n, x.url = encodeURI(O), _.onload = function(V) {
					var n = V.target;
					if(200 == n.status || 0 === n.status) {
						var _ = n.response || n.responseText;
						S.handleRespone(q, JSON.parse(_))
					}
				}, _.send(x)
			}, q.prototype.upload = function(q, V, n) {
				var S = this,
					_ = new FormData,
					x = this.url + "/upload",
					O = V.path;
				x += "?sid=" + n, _.append("path", V.path), _.append("content", V.content), S.send("POST", x, _, function(V) {
					var n = V.target;
					if(200 == n.status || 0 === n.status) {
						var _ = n.response;
						if(S.handleRespone(q, !0), _) {
							var x = JSON.parse(_);
							S.handler({
								type: "confirm",
								path: x.tempName,
								datas: x.paths
							})
						} else S.handler({
							type: "fileChanged",
							path: O
						})
					}
				})
			}, q.prototype.rename = function(q, V, n) {
				var S = this,
					_ = new FormData,
					x = V.new,
					O = V.old,
					w = this.url + "/rename";
				w += "?sid=" + n, _.append("newPath", x), _.append("oldPath", O), S.send("POST", w, _, function(V) {
					var n = V.target;
					if(200 == n.status || 0 === n.status) {
						var _ = n.response || n.responseText;
						S.handleRespone(q, "true" === _), "true" === _ && (S.handler({
							type: "fileChanged",
							path: x
						}), S.handler({
							type: "fileChanged",
							path: O
						}))
					}
				})
			}, q.prototype.remove = function(q, V, n) {
				var S = this,
					_ = new FormData,
					x = this.url + "/remove";
				x += "?sid=" + n, _.append("path", V), S.send("POST", x, _, function(n) {
					var _ = n.target;
					if(200 == _.status || 0 === _.status) {
						var x = _.response || _.responseText;
						S.handleRespone(q, "true" === x), "true" === x && S.handler({
							type: "fileChanged",
							path: V
						})
					}
				})
			}, q.prototype.locate = function(q, V, n) {
				var S = this,
					_ = this.url + "/locate";
				_ += "?dir=" + V, _ += "&sid=" + n, S.send("GET", _, null, function(V) {
					var n = V.target;
					200 != n.status && 0 != n.status || S.handleRespone(q, !0)
				})
			}, q.prototype.open = function(q, V, n) {
				var S = this,
					_ = this.url + "/open";
				_ += "?url=" + V, _ += "&sid=" + n,
					S.send("GET", _, null, function(V) {
						var n = V.target;
						200 != n.status && 0 != n.status || S.handleRespone(q, !0)
					})
			}, q.prototype.source = function(q, V, n) {
				var S = this,
					_ = new FormData,
					x = this.url + "/source";
				x += "?sid=" + n, _.append("url", V.url), _.append("encoding", V.encoding), _.append("prefix", V.prefix), S.send("POST", x, _, function(V) {
					var n = V.target;
					if(200 == n.status || 0 === n.status) {
						var _ = n.response || n.responseText;
						S.handleRespone(q, _)
					}
				})
			}, q.prototype.import = function(q, V, n) {
				var S = this,
					_ = new FormData,
					x = this.url + "/import";
				x += "?sid=" + n, _.append("path", V.path), _.append("move", V.move), S.send("POST", x, _, function(V) {
					var n = V.target;
					200 != n.status && 0 !== n.status || S.handleRespone(q, !0)
				})
			}, q.prototype.send = function(q, V, n, S) {
				var _ = new ht.Request,
					x = {};
				x.url = encodeURI(V), x.method = q, x.data = n, S && (_.onload = S), _.send(x)
			}, q.prototype.handleRespone = function(q, V) {
				var n = this.callbacks[q],
					S = this.cmds[q];
				delete this.callbacks[q], delete this.cmds[q], n && n(V), this.handler({
					type: "response",
					message: S,
					cmd: S,
					data: V
				})
			}, q
		}();
	return console.log("HT Editor v" + gn + " powered by HT for Web v" + ht.Default.getVersion() + " from www.hightopo.com"), !window.onbeforeunload && hV.config.promptBeforeClosing && (window.onbeforeunload = function(q) {
		return q.returnValue = _("editor.closetip"), q.returnValue
	}), hV.version = gn, hV.getString = _, hV.stringifyFunction = w, hV.parseFunction = g, hV.createButton = Dq, hV.createItem = sq, hV.layoutMainView = Bq, hV.msClass = I, hV.initContext = B, hV.getInput = $q, hV.trimExtension = P, hV.fileNameToDisplayName = E, hV.isJSON = xq, hV.getter = A, hV.setter = l, hV.snapshot = kq, hV.CodeEditor = j_, hV.WebSocketService = p_, hV.HTTPService = y_, hV.createEditor = function(q) {
		if(window.location.host.indexOf("hightopo") >= 0) {
			var V = "https:" == document.location.protocol ? " https://" : " http://";
			document.write(unescape("%3Cdiv style='display:none'%3E%3Cspan id='cnzz_stat_icon_1000279011'%3E%3C/span%3E%3Cscript src='" + V + "s23.cnzz.com/z_stat.php%3Fid%3D1000279011%26show%3Dpic' type='text/javascript'%3E%3C/script%3E%3C/div%3E")), document.body.style.margin = "0px", document.body.style.padding = "0px"
		}
		q && (ht.Default.isString(q) ? q = {
			container: q
		} : q.tagName && q.appendChild && (q = {
			container: q
		})), q = q || {};
		var n = void 0,
			S = void 0 === q.container ? hV.config.container : q.container;
		return null === S ? n = null : S ? ht.Default.isString(S) ? n = document.getElementById(S) : S.length ? (n = ht.Default.createDiv(), n.style.left = S[0] + "px", n.style.top = S[1] + "px", n.style.width = S[2] + "px", n.style.height = S[3] + "px", document.body.appendChild(n)) : n = S : n = document.body, q.$39$ = n, new U_(q)
	}, hV.init = function() {
		hV.consts || (JV(), cV(), bV())
	}, hV
});