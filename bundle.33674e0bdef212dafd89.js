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

var _bg = __webpack_require__(7);

var _bg2 = _interopRequireDefault(_bg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _jquery2.default)(document).ready(function () {

    var canvas = document.getElementById('back-1');
    var ctx = canvas.getContext('2d');

    (0, _jquery2.default)('#back-1').prop('width', 720);
    (0, _jquery2.default)('#back-1').prop('height', 1280);

    var img = new Image();
    img.addEventListener("load", function () {
        ctx.drawImage(img, 0, 0, 720, 1280, 0, 0, 720, 1280);
    }, false);
    img.src = _bg2.default;

    var w = (0, _jquery2.default)(window).width();
    var h = (0, _jquery2.default)(window).height();

    (0, _jquery2.default)('#fullpage').fullpage({
        navigation: false,
        scrollOverflow: true,
        afterLoad: function afterLoad(anchorLink, index) {
            if (index == 1) {
                (0, _jquery2.default)('#cover-title').css('opacity', 1);
                (0, _jquery2.default)('#cover-title').css('transform', 'translate(0, 0)');
                (0, _jquery2.default)('#cover-subtitle').css('opacity', 1);
                (0, _jquery2.default)('#cover-subtitle').css('transform', 'translate(0, 0)');
                (0, _jquery2.default)('#cover-v h1').css('opacity', 1);
                (0, _jquery2.default)('#cover-v h1').css('transform', 'translate(0, 0)');
                (0, _jquery2.default)('#cover-v hr').css('width', '100%');
            }
            if (index == 2) {}
            if (index == 3) {
                (0, _jquery2.default)('#section-3 .box-container').css('opacity', 1);
            }

            if (index == 4) {
                (0, _jquery2.default)('#section-4 .content').css('transform', 'translate(0, 0)');
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
            console.log(index, nextIndex, direction);
            if (index == 1 && direction == 'down') {}
            if (index == 1) {
                (0, _jquery2.default)('#cover-title').css('opacity', 0);
                (0, _jquery2.default)('#cover-title').css('transform', 'translate(0, -50px)');
                (0, _jquery2.default)('#cover-subtitle').css('opacity', 0);
                (0, _jquery2.default)('#cover-subtitle').css('transform', 'translate(0, -50px)');
                (0, _jquery2.default)('#cover-v h1').css('opacity', 0);
                (0, _jquery2.default)('#cover-v h1').css('transform', 'translate(0, -50px)');
                (0, _jquery2.default)('#cover-v hr').css('width', '0');
            }
            if (index == 2 && direction == 'up') {}
            if (index == 2 && direction == 'down') {
                ctx.clearRect(0, 0, 720, 1280);
                (0, _jquery2.default)('#section-3 .yellow-back').css('height', '100vh');
            }
            if (index == 3 && direction == 'up') {
                ctx.drawImage(img, 0, 0, 720, 1280, 0, 0, 720, 1280);
                (0, _jquery2.default)('#section-3 .yellow-back').css('height', 0);
            }
            if (index == 3) {
                (0, _jquery2.default)('#section-3 .box-container').css('opacity', 0);
                (0, _jquery2.default)('#section-4 .popup').css('transform', 'translate(0, 0)');
            }
            if (index == 4 && direction == 'up') {
                (0, _jquery2.default)('#section-4 .popup').css('transform', 'translate(0, 50px)');
            }
            if (index == 4) {
                (0, _jquery2.default)('#section-5 .popup').css('transform', 'translate(0, 0)');
            }
            if (index == 5 && direction == 'up') {
                (0, _jquery2.default)('#section-5 .popup').css('transform', 'translate(0, 50px)');
            }
            if (index == 5) {
                (0, _jquery2.default)('#section-6 .popup').css('transform', 'translate(0, 0)');
            }
            if (index == 6 && direction == 'up') {
                (0, _jquery2.default)('#section-6 .popup').css('transform', 'translate(0, 50px)');
            }
        }
    });

    (0, _jquery2.default)('.fp-section').css('transition', 'all .7s ease-in-out');
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ec605a388f6ea9e42cca0226e41b6977.jpg";

/***/ })
],[1]);