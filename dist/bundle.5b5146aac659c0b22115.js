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

    var yellow = (0, _animejs2.default)({
        targets: '#section-3 .back',
        height: '100vh',
        duration: 700,
        loop: false,
        autoplay: false,
        easing: 'linear'
    });

    var gray = (0, _animejs2.default)({
        targets: '#section-2 .back',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        opacity: 0.8,
        duration: 700,
        loop: false,
        autoplay: false,
        easing: 'linear'
    });

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
            console.log(index, nextIndex, direction);
            if (index == 1 && direction == 'down') {
                gray.play();
            }
            if (index == 1) {
                (0, _jquery2.default)('#cover-title').css('opacity', 0);
                (0, _jquery2.default)('#cover-title').css('transform', 'translate(0, -50px)');
                (0, _jquery2.default)('#cover-subtitle').css('opacity', 0);
                (0, _jquery2.default)('#cover-subtitle').css('transform', 'translate(0, -50px)');
                (0, _jquery2.default)('#cover-v h1').css('opacity', 0);
                (0, _jquery2.default)('#cover-v h1').css('transform', 'translate(0, -50px)');
                (0, _jquery2.default)('#cover-v hr').css('width', '0');
            }
            if (index == 2 && direction == 'up') {
                gray.seek(0);
            }
            if (index == 2 && direction == 'down') {
                ctx.clearRect(0, 0, 720, 1280);
                yellow.play();
                // ctx.fillStyle = '#FFE400'
                // ctx.fillRect(0, 0, 720, 1280)
            }
            if (index == 3 && direction == 'up') {
                yellow.seek(0);
                ctx.drawImage(img, 0, 0, 720, 1280, 0, 0, 720, 1280);
                // $('#section-3 .yellow-back').css('height', 0)
                // $('#section-3 .box-container').css('opacity', 0)
            }
            if (index == 3) {}
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