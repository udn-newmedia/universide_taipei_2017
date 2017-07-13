webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(2);

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

__webpack_require__(4);

__webpack_require__(5);

var _animejs = __webpack_require__(6);

var _animejs2 = _interopRequireDefault(_animejs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _jquery2.default)(document).ready(function () {

    var w = (0, _jquery2.default)(window).width();
    var h = (0, _jquery2.default)(window).height();

    (0, _jquery2.default)('#fullpage').fullpage({
        navigation: false,
        scrollOverflow: true,
        afterLoad: function afterLoad(anchorLink, index) {
            console.log(index);
            if (index == 1) {
                (0, _jquery2.default)('#cover-title').css('opacity', 1);
                (0, _jquery2.default)('#cover-title').css('transform', 'translate(0, 0)');
                (0, _jquery2.default)('#cover-subtitle').css('opacity', 1);
                (0, _jquery2.default)('#cover-subtitle').css('transform', 'translate(0, 0)');
                (0, _jquery2.default)('#cover-v h1').css('opacity', 1);
                (0, _jquery2.default)('#cover-v h1').css('transform', 'translate(0, 0)');
                (0, _jquery2.default)('#cover-v hr').css('width', '100%');
            }
            if (index == 2) {
                (0, _jquery2.default)('body').css('background-image', 'url:(assets/bg.jpg)');
            }
            if (index == 3) {
                (0, _jquery2.default)('#section-3 .yellow-back').css('height', '100vh');
                (0, _jquery2.default)('#section-3 .yellow-back').css('bottom', '0');
                (0, _jquery2.default)('#section-3 .yellow-back').css('top', 'auto');
                (0, _jquery2.default)('#section-3 .box-container').css('opacity', 1);
            }
            if (index == 4) {
                (0, _jquery2.default)('#movie-4').get(0).play();
            }
            if (index == 5) {
                (0, _jquery2.default)('#movie-5').get(0).play();
            }
            if (index == 6) {
                (0, _jquery2.default)('#movie-6').get(0).play();
            }
        },
        onLeave: function onLeave(index, nextIndex, direction) {
            console.log(index);
            if (index == 1) {
                (0, _jquery2.default)('#cover-title').css('opacity', 0);
                (0, _jquery2.default)('#cover-title').css('transform', 'translate(0, -50px)');
                (0, _jquery2.default)('#cover-subtitle').css('opacity', 0);
                (0, _jquery2.default)('#cover-subtitle').css('transform', 'translate(0, -50px)');
                (0, _jquery2.default)('#cover-v h1').css('opacity', 0);
                (0, _jquery2.default)('#cover-v h1').css('transform', 'translate(0, -50px)');
                (0, _jquery2.default)('#cover-v hr').css('width', '0');
            }
            if (index == 2) {
                (0, _jquery2.default)('body').css('background-image', '');
            }
            if (index == 3) {
                (0, _jquery2.default)('#section-3 .yellow-back').css('height', 0);
                (0, _jquery2.default)('#section-3 .box-container').css('opacity', 0);
                (0, _jquery2.default)('#section-3 .yellow-back').css('bottom', 'auto');
                (0, _jquery2.default)('#section-3 .yellow-back').css('top', '0');
            }
        }
    });

    (0, _jquery2.default)('.fp-section').css('transition', 'all .7s ease-in-out');
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
],[1]);