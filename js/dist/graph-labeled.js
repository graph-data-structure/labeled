"use strict";

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

(function () {

	'use strict';

	var definition = function definition(exports, undefined) {

		/* js/src/Labeled.js */
		/**
   * Wrapper allowing vertex labeling.
   *
   */

		var Labeled = function Labeled(G, V, labels) {

			this.G = G;
			this.V = V;
			this.labels = labels;
		};

		Labeled.prototype.vadd = function (label) {

			var ref = this.G.vadd();

			this.labels.set(ref, label);

			this.V.set(label, ref);

			return label;
		};

		Labeled.prototype.vdel = function (label) {

			// vertex to delete
			var v = this.V.get(label);

			this.V["delete"](label);

			// remove vertex from underlying data structure
			this.G.vdel(v);
		};

		Labeled.prototype.eadd = function (u, v) {

			return this.G.eadd(this.V.get(u), this.V.get(v));
		};

		Labeled.prototype.edel = function (e) {

			return this.G.edel(e);
		};

		Labeled.prototype.vitr = regeneratorRuntime.mark(function callee$2$0() {
			var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, v;

			return regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:
						_iteratorNormalCompletion = true;
						_didIteratorError = false;
						_iteratorError = undefined;
						context$3$0.prev = 3;
						_iterator = this.G.vitr()[Symbol.iterator]();

					case 5:
						if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
							context$3$0.next = 12;
							break;
						}

						v = _step.value;
						context$3$0.next = 9;
						return this.labels.get(v);

					case 9:
						_iteratorNormalCompletion = true;
						context$3$0.next = 5;
						break;

					case 12:
						context$3$0.next = 18;
						break;

					case 14:
						context$3$0.prev = 14;
						context$3$0.t0 = context$3$0["catch"](3);
						_didIteratorError = true;
						_iteratorError = context$3$0.t0;

					case 18:
						context$3$0.prev = 18;
						context$3$0.prev = 19;

						if (!_iteratorNormalCompletion && _iterator["return"]) {
							_iterator["return"]();
						}

					case 21:
						context$3$0.prev = 21;

						if (!_didIteratorError) {
							context$3$0.next = 24;
							break;
						}

						throw _iteratorError;

					case 24:
						return context$3$0.finish(21);

					case 25:
						return context$3$0.finish(18);

					case 26:
					case "end":
						return context$3$0.stop();
				}
			}, callee$2$0, this, [[3, 14, 18, 26], [19,, 21, 25]]);
		});

		Labeled.prototype.eitr = function () {

			return this.G.eitr();
		};

		Labeled.prototype.iitr = function (v) {

			return this.G.iitr(this.V.get(v));
		};

		Labeled.prototype.initr = function (v) {

			return this.G.initr(this.V.get(v));
		};

		Labeled.prototype.outitr = function (v) {

			return this.G.outitr(this.V.get(v));
		};

		Labeled.prototype.nitr = regeneratorRuntime.mark(function callee$2$0(w) {
			var _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, v;

			return regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:
						_iteratorNormalCompletion2 = true;
						_didIteratorError2 = false;
						_iteratorError2 = undefined;
						context$3$0.prev = 3;
						_iterator2 = this.G.nitr(this.V.get(w))[Symbol.iterator]();

					case 5:
						if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
							context$3$0.next = 12;
							break;
						}

						v = _step2.value;
						context$3$0.next = 9;
						return this.labels.get(v);

					case 9:
						_iteratorNormalCompletion2 = true;
						context$3$0.next = 5;
						break;

					case 12:
						context$3$0.next = 18;
						break;

					case 14:
						context$3$0.prev = 14;
						context$3$0.t0 = context$3$0["catch"](3);
						_didIteratorError2 = true;
						_iteratorError2 = context$3$0.t0;

					case 18:
						context$3$0.prev = 18;
						context$3$0.prev = 19;

						if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
							_iterator2["return"]();
						}

					case 21:
						context$3$0.prev = 21;

						if (!_didIteratorError2) {
							context$3$0.next = 24;
							break;
						}

						throw _iteratorError2;

					case 24:
						return context$3$0.finish(21);

					case 25:
						return context$3$0.finish(18);

					case 26:
					case "end":
						return context$3$0.stop();
				}
			}, callee$2$0, this, [[3, 14, 18, 26], [19,, 21, 25]]);
		});

		Labeled.prototype.dsitr = regeneratorRuntime.mark(function callee$2$0(w) {
			var _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, v;

			return regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:
						_iteratorNormalCompletion3 = true;
						_didIteratorError3 = false;
						_iteratorError3 = undefined;
						context$3$0.prev = 3;
						_iterator3 = this.G.dsitr(this.V.get(w))[Symbol.iterator]();

					case 5:
						if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
							context$3$0.next = 12;
							break;
						}

						v = _step3.value;
						context$3$0.next = 9;
						return this.labels.get(v);

					case 9:
						_iteratorNormalCompletion3 = true;
						context$3$0.next = 5;
						break;

					case 12:
						context$3$0.next = 18;
						break;

					case 14:
						context$3$0.prev = 14;
						context$3$0.t0 = context$3$0["catch"](3);
						_didIteratorError3 = true;
						_iteratorError3 = context$3$0.t0;

					case 18:
						context$3$0.prev = 18;
						context$3$0.prev = 19;

						if (!_iteratorNormalCompletion3 && _iterator3["return"]) {
							_iterator3["return"]();
						}

					case 21:
						context$3$0.prev = 21;

						if (!_didIteratorError3) {
							context$3$0.next = 24;
							break;
						}

						throw _iteratorError3;

					case 24:
						return context$3$0.finish(21);

					case 25:
						return context$3$0.finish(18);

					case 26:
					case "end":
						return context$3$0.stop();
				}
			}, callee$2$0, this, [[3, 14, 18, 26], [19,, 21, 25]]);
		});

		Labeled.prototype.dpitr = regeneratorRuntime.mark(function callee$2$0(w) {
			var _iteratorNormalCompletion4, _didIteratorError4, _iteratorError4, _iterator4, _step4, v;

			return regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:
						_iteratorNormalCompletion4 = true;
						_didIteratorError4 = false;
						_iteratorError4 = undefined;
						context$3$0.prev = 3;
						_iterator4 = this.G.dpitr(this.V.get(w))[Symbol.iterator]();

					case 5:
						if (_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done) {
							context$3$0.next = 12;
							break;
						}

						v = _step4.value;
						context$3$0.next = 9;
						return this.labels.get(v);

					case 9:
						_iteratorNormalCompletion4 = true;
						context$3$0.next = 5;
						break;

					case 12:
						context$3$0.next = 18;
						break;

					case 14:
						context$3$0.prev = 14;
						context$3$0.t0 = context$3$0["catch"](3);
						_didIteratorError4 = true;
						_iteratorError4 = context$3$0.t0;

					case 18:
						context$3$0.prev = 18;
						context$3$0.prev = 19;

						if (!_iteratorNormalCompletion4 && _iterator4["return"]) {
							_iterator4["return"]();
						}

					case 21:
						context$3$0.prev = 21;

						if (!_didIteratorError4) {
							context$3$0.next = 24;
							break;
						}

						throw _iteratorError4;

					case 24:
						return context$3$0.finish(21);

					case 25:
						return context$3$0.finish(18);

					case 26:
					case "end":
						return context$3$0.stop();
				}
			}, callee$2$0, this, [[3, 14, 18, 26], [19,, 21, 25]]);
		});

		Labeled.prototype.edges = regeneratorRuntime.mark(function callee$2$0() {
			var _iteratorNormalCompletion5, _didIteratorError5, _iteratorError5, _iterator5, _step5, _step5$value, u, v, e;

			return regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:
						_iteratorNormalCompletion5 = true;
						_didIteratorError5 = false;
						_iteratorError5 = undefined;
						context$3$0.prev = 3;
						_iterator5 = this.G.edges()[Symbol.iterator]();

					case 5:
						if (_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done) {
							context$3$0.next = 15;
							break;
						}

						_step5$value = _slicedToArray(_step5.value, 3);
						u = _step5$value[0];
						v = _step5$value[1];
						e = _step5$value[2];
						context$3$0.next = 12;
						return [this.labels.get(u), this.labels.get(v), e];

					case 12:
						_iteratorNormalCompletion5 = true;
						context$3$0.next = 5;
						break;

					case 15:
						context$3$0.next = 21;
						break;

					case 17:
						context$3$0.prev = 17;
						context$3$0.t0 = context$3$0["catch"](3);
						_didIteratorError5 = true;
						_iteratorError5 = context$3$0.t0;

					case 21:
						context$3$0.prev = 21;
						context$3$0.prev = 22;

						if (!_iteratorNormalCompletion5 && _iterator5["return"]) {
							_iterator5["return"]();
						}

					case 24:
						context$3$0.prev = 24;

						if (!_didIteratorError5) {
							context$3$0.next = 27;
							break;
						}

						throw _iteratorError5;

					case 27:
						return context$3$0.finish(24);

					case 28:
						return context$3$0.finish(21);

					case 29:
					case "end":
						return context$3$0.stop();
				}
			}, callee$2$0, this, [[3, 17, 21, 29], [22,, 24, 28]]);
		});

		Labeled.prototype.incident = regeneratorRuntime.mark(function callee$2$0(w) {
			var _iteratorNormalCompletion6, _didIteratorError6, _iteratorError6, _iterator6, _step6, _step6$value, u, v, e;

			return regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:
						_iteratorNormalCompletion6 = true;
						_didIteratorError6 = false;
						_iteratorError6 = undefined;
						context$3$0.prev = 3;
						_iterator6 = this.G.incident(this.V.get(w))[Symbol.iterator]();

					case 5:
						if (_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done) {
							context$3$0.next = 15;
							break;
						}

						_step6$value = _slicedToArray(_step6.value, 3);
						u = _step6$value[0];
						v = _step6$value[1];
						e = _step6$value[2];
						context$3$0.next = 12;
						return [this.labels.get(u), this.labels.get(v), e];

					case 12:
						_iteratorNormalCompletion6 = true;
						context$3$0.next = 5;
						break;

					case 15:
						context$3$0.next = 21;
						break;

					case 17:
						context$3$0.prev = 17;
						context$3$0.t0 = context$3$0["catch"](3);
						_didIteratorError6 = true;
						_iteratorError6 = context$3$0.t0;

					case 21:
						context$3$0.prev = 21;
						context$3$0.prev = 22;

						if (!_iteratorNormalCompletion6 && _iterator6["return"]) {
							_iterator6["return"]();
						}

					case 24:
						context$3$0.prev = 24;

						if (!_didIteratorError6) {
							context$3$0.next = 27;
							break;
						}

						throw _iteratorError6;

					case 27:
						return context$3$0.finish(24);

					case 28:
						return context$3$0.finish(21);

					case 29:
					case "end":
						return context$3$0.stop();
				}
			}, callee$2$0, this, [[3, 17, 21, 29], [22,, 24, 28]]);
		});

		Labeled.prototype.ingoing = regeneratorRuntime.mark(function callee$2$0(w) {
			var _iteratorNormalCompletion7, _didIteratorError7, _iteratorError7, _iterator7, _step7, _step7$value, u, v, e;

			return regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:
						_iteratorNormalCompletion7 = true;
						_didIteratorError7 = false;
						_iteratorError7 = undefined;
						context$3$0.prev = 3;
						_iterator7 = this.G.ingoing(this.V.get(w))[Symbol.iterator]();

					case 5:
						if (_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done) {
							context$3$0.next = 15;
							break;
						}

						_step7$value = _slicedToArray(_step7.value, 3);
						u = _step7$value[0];
						v = _step7$value[1];
						e = _step7$value[2];
						context$3$0.next = 12;
						return [this.labels.get(u), this.labels.get(v), e];

					case 12:
						_iteratorNormalCompletion7 = true;
						context$3$0.next = 5;
						break;

					case 15:
						context$3$0.next = 21;
						break;

					case 17:
						context$3$0.prev = 17;
						context$3$0.t0 = context$3$0["catch"](3);
						_didIteratorError7 = true;
						_iteratorError7 = context$3$0.t0;

					case 21:
						context$3$0.prev = 21;
						context$3$0.prev = 22;

						if (!_iteratorNormalCompletion7 && _iterator7["return"]) {
							_iterator7["return"]();
						}

					case 24:
						context$3$0.prev = 24;

						if (!_didIteratorError7) {
							context$3$0.next = 27;
							break;
						}

						throw _iteratorError7;

					case 27:
						return context$3$0.finish(24);

					case 28:
						return context$3$0.finish(21);

					case 29:
					case "end":
						return context$3$0.stop();
				}
			}, callee$2$0, this, [[3, 17, 21, 29], [22,, 24, 28]]);
		});

		Labeled.prototype.outgoing = regeneratorRuntime.mark(function callee$2$0(w) {
			var _iteratorNormalCompletion8, _didIteratorError8, _iteratorError8, _iterator8, _step8, _step8$value, u, v, e;

			return regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:
						_iteratorNormalCompletion8 = true;
						_didIteratorError8 = false;
						_iteratorError8 = undefined;
						context$3$0.prev = 3;
						_iterator8 = this.G.outgoing(this.V.get(w))[Symbol.iterator]();

					case 5:
						if (_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done) {
							context$3$0.next = 15;
							break;
						}

						_step8$value = _slicedToArray(_step8.value, 3);
						u = _step8$value[0];
						v = _step8$value[1];
						e = _step8$value[2];
						context$3$0.next = 12;
						return [this.labels.get(u), this.labels.get(v), e];

					case 12:
						_iteratorNormalCompletion8 = true;
						context$3$0.next = 5;
						break;

					case 15:
						context$3$0.next = 21;
						break;

					case 17:
						context$3$0.prev = 17;
						context$3$0.t0 = context$3$0["catch"](3);
						_didIteratorError8 = true;
						_iteratorError8 = context$3$0.t0;

					case 21:
						context$3$0.prev = 21;
						context$3$0.prev = 22;

						if (!_iteratorNormalCompletion8 && _iterator8["return"]) {
							_iterator8["return"]();
						}

					case 24:
						context$3$0.prev = 24;

						if (!_didIteratorError8) {
							context$3$0.next = 27;
							break;
						}

						throw _iteratorError8;

					case 27:
						return context$3$0.finish(24);

					case 28:
						return context$3$0.finish(21);

					case 29:
					case "end":
						return context$3$0.stop();
				}
			}, callee$2$0, this, [[3, 17, 21, 29], [22,, 24, 28]]);
		});

		Labeled.prototype.endpoints = function (e) {
			var _G$endpoints = this.G.endpoints(e);

			var _G$endpoints2 = _slicedToArray(_G$endpoints, 2);

			var u = _G$endpoints2[0];
			var v = _G$endpoints2[1];

			return [this.labels.get(u), this.labels.get(v)];
		};

		Labeled.prototype.reverse = function () {

			return this.G.reverse();
		};

		exports.Labeled = Labeled;

		/* js/src/label.js */

		var label = function label(Graph) {

			return function () {

				return new Labeled(new Graph(), new Map(), new WeakMap());
			};
		};

		exports.label = label;

		return exports;
	};
	if (typeof exports === "object") {
		definition(exports);
	} else if (typeof define === "function" && define.amd) {
		define("aureooms-js-graph-labeled", [], function () {
			return definition({});
		});
	} else if (typeof window === "object" && typeof window.document === "object") {
		definition(window["graphlabeled"] = {});
	} else console.error("unable to detect type of module to define for aureooms-js-graph-labeled");
})();