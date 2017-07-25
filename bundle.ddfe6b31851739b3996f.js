webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

var _jquery = __webpack_require__(1);

var _jquery2 = _interopRequireDefault(_jquery);

__webpack_require__(2);

__webpack_require__(3);

var _bg = __webpack_require__(6);

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

    // $('.f-video-contain').css('height', 600*w/h + 'px')

    (0, _jquery2.default)('#fullpage').fullpage({
        navigation: false,
        scrollOverflow: true,
        afterLoad: function afterLoad(anchorLink, index) {

            if (index == 1) {
                console.log(index);
                (0, _jquery2.default)('#cover-title').css('opacity', 1);
                (0, _jquery2.default)('#cover-title').css('transform', 'translate(0, 0)');
                (0, _jquery2.default)('#cover-subtitle').css('opacity', 1);
                (0, _jquery2.default)('#cover-subtitle').css('transform', 'translate(0, 0)');
                (0, _jquery2.default)('#cover-v h1').css('opacity', 1);
                (0, _jquery2.default)('#cover-v h1').css('transform', 'translate(0, 0)');
                (0, _jquery2.default)('#cover-v hr').css('width', '100%');
            }
            if (index == 2) {
                (0, _jquery2.default)('#cover-title').css('opacity', 0);
                (0, _jquery2.default)('#cover-title').css('transform', 'translate(0, 50px)');
                (0, _jquery2.default)('#cover-subtitle').css('opacity', 0);
                (0, _jquery2.default)('#cover-subtitle').css('transform', 'translate(0, 50px)');
                (0, _jquery2.default)('#cover-v h1').css('opacity', 0);
                (0, _jquery2.default)('#cover-v h1').css('transform', 'translate(0, 50px)');
                (0, _jquery2.default)('#cover-v hr').css('width', '0');
                (0, _jquery2.default)('#section-3 .box-container').css('transform', 'translate(0, 50px)');
            }
            if (index == 3) {
                (0, _jquery2.default)('#section-3 .box-container').css('opacity', 1);
                (0, _jquery2.default)('#section-3 .box-container').css('transform', 'translate(0, 0)');
                (0, _jquery2.default)('#section-4 .popup').css('transform', 'translate(0, 100px)');
            }
            if (index == 4) {
                (0, _jquery2.default)('#section-3 .box-container').css('transform', 'translate(0, 50px)');
                (0, _jquery2.default)('#movie-4').get(0).play();
                (0, _jquery2.default)('#section-5 .popup').css('transform', 'translate(0, 100px)');
            }
            if (index == 5) {
                (0, _jquery2.default)('#movie-5').get(0).play();
                (0, _jquery2.default)('#section-4 .popup').css('transform', 'translate(0, 100px)');
            }
            if (index == 6) {
                (0, _jquery2.default)('#section-5 .popup').css('transform', 'translate(0, 100px)');
                (0, _jquery2.default)('#section-7 .box-container').css('transform', 'translate(0, 50px)');
            }
            if (index == 7) {
                (0, _jquery2.default)('#section-7 .box-container').css('opacity', 1);
                (0, _jquery2.default)('#section-7 .box-container').css('transform', 'translate(0, 0)');
                (0, _jquery2.default)('#section-8 .popup').css('transform', 'translate(0, 100px)');
            }
            if (index == 8) {
                (0, _jquery2.default)('#section-7 .box-container').css('transform', 'translate(0, 50px)');
                (0, _jquery2.default)('#movie-8').get(0).play();
                (0, _jquery2.default)('#section-9 .box-container').css('transform', 'translate(0, 50px)');
            }
            if (index == 9) {
                (0, _jquery2.default)('#section-9 .box-container').css('opacity', 1);
                (0, _jquery2.default)('#section-9 .box-container').css('transform', 'translate(0, 0)');
                (0, _jquery2.default)('#section-8 .popup').css('transform', 'translate(0, 100px)');
                (0, _jquery2.default)('#section-10 .popup').css('transform', 'translate(0, 100px)');
            }
            if (index == 10) {
                (0, _jquery2.default)('#section-9 .box-container').css('transform', 'translate(0, 50px)');
                (0, _jquery2.default)('#movie-10').get(0).play();
                (0, _jquery2.default)('#section-11 .popup').css('transform', 'translate(0, 100px)');
            }
            if (index == 11) {
                (0, _jquery2.default)('#movie-11').get(0).play();
                (0, _jquery2.default)('#section-10 .popup').css('transform', 'translate(0, 100px)');
            }
            if (index == 12) {
                (0, _jquery2.default)('#section-12 .box-container').css('opacity', 1);
                (0, _jquery2.default)('#section-12 .box-container').css('transform', 'translate(0, 0)');
                (0, _jquery2.default)('#section-11 .popup').css('transform', 'translate(0, 100px)');
            }
            if (index == 13) {
                (0, _jquery2.default)('#section-12 .box-container').css('transform', 'translate(0, 50px)');
                (0, _jquery2.default)('#movie-13').get(0).play();
                (0, _jquery2.default)('#section-13 .box-container').css('transform', 'translate(0, 50px)');
            }
            if (index == 14) {
                (0, _jquery2.default)('#section-14 .box-container').css('opacity', 1);
                (0, _jquery2.default)('#section-14 .box-container').css('transform', 'translate(0, 0)');
                (0, _jquery2.default)('#section-15 .popup').css('transform', 'translate(0, 100px)');
            }
            if (index == 15) {
                (0, _jquery2.default)('#section-14 .box-container').css('transform', 'translate(0, 50px)');
                (0, _jquery2.default)('#movie-15').get(0).play();
            }
            if (index == 16) {
                (0, _jquery2.default)('#section-15 .popup').css('transform', 'translate(0, 100px)');
            }
        },
        onLeave: function onLeave(index, nextIndex, direction) {
            console.log(index, nextIndex, direction);

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
            if (index == 4) {
                (0, _jquery2.default)('#section-5 .popup').css('transform', 'translate(0, 0)');
            }
            if (index == 5) {
                (0, _jquery2.default)('#section-4 .popup').css('transform', 'translate(0, 0)');
            }
            if (index == 6) {
                (0, _jquery2.default)('#section-5 .popup').css('transform', 'translate(0, 0)');
            }
            if (index == 6 && direction == 'down') {
                (0, _jquery2.default)('#section-7 .yellow-back').css('height', '100vh');
            }
            if (index == 7 && direction == 'up') {
                (0, _jquery2.default)('#section-7 .yellow-back').css('height', 0);
            }
            if (index == 7) {
                (0, _jquery2.default)('#section-7 .box-container').css('opacity', 0);
                (0, _jquery2.default)('#section-8 .popup').css('transform', 'translate(0, 0)');
            }
            if (index == 8 && direction == 'down') {
                (0, _jquery2.default)('#section-9 .yellow-back').css('height', '100vh');
            }
            if (index == 8) {
                (0, _jquery2.default)('#section-8 .popup').css('transform', 'translate(0, 0)');
            }
            if (index == 9 && direction == 'up') {
                (0, _jquery2.default)('#section-9 .yellow-back').css('height', 0);
            }
            if (index == 9) {
                (0, _jquery2.default)('#section-9 .box-container').css('opacity', 0);
                (0, _jquery2.default)('#section-8 .popup').css('transform', 'translate(0, 0)');
                (0, _jquery2.default)('#section-10 .popup').css('transform', 'translate(0, 0)');
            }
            if (index == 10) {
                (0, _jquery2.default)('#section-11 .popup').css('transform', 'translate(0, 0)');
            }
            if (index == 11 && direction == 'down') {
                (0, _jquery2.default)('#section-12 .yellow-back').css('height', '100vh');
            }
            if (index == 11) {
                (0, _jquery2.default)('#section-10 .popup').css('transform', 'translate(0, 0)');
            }
            if (index == 12 && direction == 'up') {
                (0, _jquery2.default)('#section-12 .yellow-back').css('height', 0);
            }
            if (index == 12) {
                (0, _jquery2.default)('#section-12 .box-container').css('opacity', 0);
                (0, _jquery2.default)('#section-11 .popup').css('transform', 'translate(0, 0)');
                (0, _jquery2.default)('#section-13 .popup').css('transform', 'translate(0, 0)');
            }
            if (index == 13) {
                (0, _jquery2.default)('#section-14 .yellow-back').css('height', '100vh');
            }
            if (index == 14 && direction == 'up') {
                (0, _jquery2.default)('#section-14 .yellow-back').css('height', 0);
            }
            if (index == 14) {
                (0, _jquery2.default)('#section-14 .box-container').css('opacity', 0);
                (0, _jquery2.default)('#section-15 .popup').css('transform', 'translate(0, 0)');
            }
            if (index == 15) {}
            if (index == 16) {
                (0, _jquery2.default)('#section-15 .popup').css('transform', 'translate(0, 0)');
            }
        }
    });

    (0, _jquery2.default)('.fp-section').css('transition', 'all .7s ease-in-out');
});

/***/ }),
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ec605a388f6ea9e42cca0226e41b6977.jpg";

/***/ })
],[4]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZS9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9iZy5qcGciXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJyZWFkeSIsImNhbnZhcyIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsInByb3AiLCJpbWciLCJJbWFnZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJkcmF3SW1hZ2UiLCJzcmMiLCJ3Iiwid2luZG93Iiwid2lkdGgiLCJoIiwiaGVpZ2h0IiwiZnVsbHBhZ2UiLCJuYXZpZ2F0aW9uIiwic2Nyb2xsT3ZlcmZsb3ciLCJhZnRlckxvYWQiLCJhbmNob3JMaW5rIiwiaW5kZXgiLCJjb25zb2xlIiwibG9nIiwiY3NzIiwiZ2V0IiwicGxheSIsIm9uTGVhdmUiLCJuZXh0SW5kZXgiLCJkaXJlY3Rpb24iLCJjbGVhclJlY3QiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSx5Qzs7Ozs7Ozs7Ozs7O0FDQUE7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7O0FBRUEsc0JBQUVBLFFBQUYsRUFBWUMsS0FBWixDQUFrQixZQUFVOztBQUV4QixRQUFJQyxTQUFTRixTQUFTRyxjQUFULENBQXdCLFFBQXhCLENBQWI7QUFDQSxRQUFJQyxNQUFNRixPQUFPRyxVQUFQLENBQWtCLElBQWxCLENBQVY7O0FBRUEsMEJBQUUsU0FBRixFQUFhQyxJQUFiLENBQWtCLE9BQWxCLEVBQTJCLEdBQTNCO0FBQ0EsMEJBQUUsU0FBRixFQUFhQSxJQUFiLENBQWtCLFFBQWxCLEVBQTRCLElBQTVCOztBQUVBLFFBQUlDLE1BQU0sSUFBSUMsS0FBSixFQUFWO0FBQ0FELFFBQUlFLGdCQUFKLENBQXFCLE1BQXJCLEVBQTZCLFlBQVc7QUFDcENMLFlBQUlNLFNBQUosQ0FBY0gsR0FBZCxFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixHQUF6QixFQUE4QixJQUE5QixFQUFvQyxDQUFw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QixDQUE0QixXQUE1QixFQUF5QyxpQkFBekM7QUFDSDtBQUNELGdCQUFHSCxTQUFTLEVBQVosRUFBZSxDQUVkO0FBQ0QsZ0JBQUdBLFNBQVMsRUFBWixFQUFlO0FBQ1gsc0NBQUUsb0JBQUYsRUFBd0JHLEdBQXhCLENBQTRCLFdBQTVCLEVBQXlDLGlCQUF6QztBQUNIO0FBR0o7QUEvS21CLEtBQXhCOztBQWtMQSwwQkFBRSxhQUFGLEVBQWlCQSxHQUFqQixDQUFxQixZQUFyQixFQUFtQyxxQkFBbkM7QUFFSCxDQXZNRCxFOzs7Ozs7O0FDTkEsZ0YiLCJmaWxlIjoiYnVuZGxlLmRkZmU2YjMxODUxNzM5YjM5OTZmLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3N0eWxlL3N0eWxlLmNzc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImltcG9ydCAnLi4vc3R5bGUvc3R5bGUuY3NzJ1xyXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXHJcbmltcG9ydCAnbGF6eXNpemVzJ1xyXG5pbXBvcnQgJ2Z1bGxwYWdlLmpzJ1xyXG5pbXBvcnQgaW1nQmcgZnJvbSAnLi4vYXNzZXRzL2JnLmpwZydcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYWNrLTEnKTtcclxuICAgIHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuXHJcbiAgICAkKCcjYmFjay0xJykucHJvcCgnd2lkdGgnICw3MjApXHJcbiAgICAkKCcjYmFjay0xJykucHJvcCgnaGVpZ2h0JywgMTI4MClcclxuICAgIFxyXG4gICAgdmFyIGltZyA9IG5ldyBJbWFnZSgpXHJcbiAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY3R4LmRyYXdJbWFnZShpbWcsIDAsIDAsIDcyMCwgMTI4MCwgMCwgMCwgNzIwLCAxMjgwKTtcclxuICAgIH0sIGZhbHNlKTtcclxuICAgIGltZy5zcmMgPSBpbWdCZ1xyXG5cclxuICAgIGNvbnN0IHcgPSAkKHdpbmRvdykud2lkdGgoKVxyXG4gICAgY29uc3QgaCA9ICQod2luZG93KS5oZWlnaHQoKVxyXG5cclxuICAgIC8vICQoJy5mLXZpZGVvLWNvbnRhaW4nKS5jc3MoJ2hlaWdodCcsIDYwMCp3L2ggKyAncHgnKVxyXG4gICAgXHJcbiAgICAkKCcjZnVsbHBhZ2UnKS5mdWxscGFnZSh7XHJcbiAgICAgICAgbmF2aWdhdGlvbjogZmFsc2UsICAgIFx0XHJcbiAgICAgICAgc2Nyb2xsT3ZlcmZsb3cgOiB0cnVlLFxyXG4gICAgXHRhZnRlckxvYWQ6IGZ1bmN0aW9uKGFuY2hvckxpbmssIGluZGV4KXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKGluZGV4ID09IDEpe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coaW5kZXgpXHJcbiAgICAgICAgICAgICAgICAkKCcjY292ZXItdGl0bGUnKS5jc3MoJ29wYWNpdHknLCAxKVxyXG4gICAgICAgICAgICAgICAgJCgnI2NvdmVyLXRpdGxlJykuY3NzKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKDAsIDApJylcclxuICAgICAgICAgICAgICAgICQoJyNjb3Zlci1zdWJ0aXRsZScpLmNzcygnb3BhY2l0eScsIDEpXHJcbiAgICAgICAgICAgICAgICAkKCcjY292ZXItc3VidGl0bGUnKS5jc3MoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoMCwgMCknKVxyXG4gICAgICAgICAgICAgICAgJCgnI2NvdmVyLXYgaDEnKS5jc3MoJ29wYWNpdHknLCAxKVxyXG4gICAgICAgICAgICAgICAgJCgnI2NvdmVyLXYgaDEnKS5jc3MoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoMCwgMCknKVxyXG4gICAgICAgICAgICAgICAgJCgnI2NvdmVyLXYgaHInKS5jc3MoJ3dpZHRoJywgJzEwMCUnKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGluZGV4ID09IDIpe1xyXG4gICAgICAgICAgICAgICAgJCgnI2NvdmVyLXRpdGxlJykuY3NzKCdvcGFjaXR5JywgMClcclxuICAgICAgICAgICAgICAgICQoJyNjb3Zlci10aXRsZScpLmNzcygndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgwLCA1MHB4KScpXHJcbiAgICAgICAgICAgICAgICAkKCcjY292ZXItc3VidGl0bGUnKS5jc3MoJ29wYWNpdHknLCAwKVxyXG4gICAgICAgICAgICAgICAgJCgnI2NvdmVyLXN1YnRpdGxlJykuY3NzKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKDAsIDUwcHgpJylcclxuICAgICAgICAgICAgICAgICQoJyNjb3Zlci12IGgxJykuY3NzKCdvcGFjaXR5JywgMClcclxuICAgICAgICAgICAgICAgICQoJyNjb3Zlci12IGgxJykuY3NzKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKDAsIDUwcHgpJylcclxuICAgICAgICAgICAgICAgICQoJyNjb3Zlci12IGhyJykuY3NzKCd3aWR0aCcsICcwJylcclxuICAgICAgICAgICAgICAgICQoJyNzZWN0aW9uLTMgLmJveC1jb250YWluZXInKS5jc3MoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoMCwgNTBweCknKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGluZGV4ID09IDMpe1xyXG4gICAgICAgICAgICAgICAgJCgnI3NlY3Rpb24tMyAuYm94LWNvbnRhaW5lcicpLmNzcygnb3BhY2l0eScsIDEpXHJcbiAgICAgICAgICAgICAgICAkKCcjc2VjdGlvbi0zIC5ib3gtY29udGFpbmVyJykuY3NzKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKDAsIDApJylcclxuICAgICAgICAgICAgICAgICQoJyNzZWN0aW9uLTQgLnBvcHVwJykuY3NzKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKDAsIDEwMHB4KScpXHJcbiAgICAgICAgICAgIH1cclxuICAgIFx0XHRpZihpbmRleCA9PSA0KXtcclxuICAgICAgICAgICAgICAgICQoJyNzZWN0aW9uLTMgLmJveC1jb250YWluZXInKS5jc3MoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoMCwgNTBweCknKVxyXG4gICAgICAgICAgICAgICAgJCgnI21vdmllLTQnKS5nZXQoMCkucGxheSgpXHJcbiAgICAgICAgICAgICAgICAkKCcjc2VjdGlvbi01IC5wb3B1cCcpLmNzcygndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgwLCAxMDBweCknKVxyXG4gICAgXHRcdH1cclxuICAgIFx0XHRpZihpbmRleCA9PSA1KXtcclxuICAgICAgICAgICAgICAgICQoJyNtb3ZpZS01JykuZ2V0KDApLnBsYXkoKVxyXG4gICAgICAgICAgICAgICAgJCgnI3NlY3Rpb24tNCAucG9wdXAnKS5jc3MoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoMCwgMTAwcHgpJylcclxuICAgIFx0XHR9XHJcbiAgICBcdFx0aWYoaW5kZXggPT0gNil7XHJcbiAgICAgICAgICAgICAgICAkKCcjc2VjdGlvbi01IC5wb3B1cCcpLmNzcygndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgwLCAxMDBweCknKVxyXG4gICAgICAgICAgICAgICAgJCgnI3NlY3Rpb24tNyAuYm94LWNvbnRhaW5lcicpLmNzcygndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgwLCA1MHB4KScpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoaW5kZXggPT0gNyl7XHJcbiAgICAgICAgICAgICAgICAkKCcjc2VjdGlvbi03IC5ib3gtY29udGFpbmVyJykuY3NzKCdvcGFjaXR5JywgMSlcclxuICAgICAgICAgICAgICAgICQoJyNzZWN0aW9uLTcgLmJveC1jb250YWluZXInKS5jc3MoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoMCwgMCknKVxyXG4gICAgICAgICAgICAgICAgJCgnI3NlY3Rpb24tOCAucG9wdXAnKS5jc3MoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoMCwgMTAwcHgpJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihpbmRleCA9PSA4KXtcclxuICAgICAgICAgICAgICAgICQoJyNzZWN0aW9uLTcgLmJveC1jb250YWluZXInKS5jc3MoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoMCwgNTBweCknKVxyXG4gICAgICAgICAgICAgICAgJCgnI21vdmllLTgnKS5nZXQoMCkucGxheSgpXHJcbiAgICAgICAgICAgICAgICAkKCcjc2VjdGlvbi05IC5ib3gtY29udGFpbmVyJykuY3NzKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKDAsIDUwcHgpJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihpbmRleCA9PSA5KXtcclxuICAgICAgICAgICAgICAgICQoJyNzZWN0aW9uLTkgLmJveC1jb250YWluZXInKS5jc3MoJ29wYWNpdHknLCAxKVxyXG4gICAgICAgICAgICAgICAgJCgnI3NlY3Rpb24tOSAuYm94LWNvbnRhaW5lcicpLmNzcygndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgwLCAwKScpXHJcbiAgICAgICAgICAgICAgICAkKCcjc2VjdGlvbi04IC5wb3B1cCcpLmNzcygndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgwLCAxMDBweCknKVxyXG4gICAgICAgICAgICAgICAgJCgnI3NlY3Rpb24tMTAgLnBvcHVwJykuY3NzKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKDAsIDEwMHB4KScpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoaW5kZXggPT0gMTApe1xyXG4gICAgICAgICAgICAgICAgJCgnI3NlY3Rpb24tOSAuYm94LWNvbnRhaW5lcicpLmNzcygndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgwLCA1MHB4KScpXHJcbiAgICAgICAgICAgICAgICAkKCcjbW92aWUtMTAnKS5nZXQoMCkucGxheSgpXHJcbiAgICAgICAgICAgICAgICAkKCcjc2VjdGlvbi0xMSAucG9wdXAnKS5jc3MoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoMCwgMTAwcHgpJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihpbmRleCA9PSAxMSl7XHJcbiAgICAgICAgICAgICAgICAkKCcjbW92aWUtMTEnKS5nZXQoMCkucGxheSgpXHJcbiAgICAgICAgICAgICAgICAkKCcjc2VjdGlvbi0xMCAucG9wdXAnKS5jc3MoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoMCwgMTAwcHgpJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihpbmRleCA9PSAxMil7XHJcbiAgICAgICAgICAgICAgICAkKCcjc2VjdGlvbi0xMiAuYm94LWNvbnRhaW5lcicpLmNzcygnb3BhY2l0eScsIDEpXHJcbiAgICAgICAgICAgICAgICAkKCcjc2VjdGlvbi0xMiAuYm94LWNvbnRhaW5lcicpLmNzcygndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgwLCAwKScpXHJcbiAgICAgICAgICAgICAgICAkKCcjc2VjdGlvbi0xMSAucG9wdXAnKS5jc3MoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoMCwgMTAwcHgpJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihpbmRleCA9PSAxMyl7XHJcbiAgICAgICAgICAgICAgICAkKCcjc2VjdGlvbi0xMiAuYm94LWNvbnRhaW5lcicpLmNzcygndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgwLCA1MHB4KScpXHJcbiAgICAgICAgICAgICAgICAkKCcjbW92aWUtMTMnKS5nZXQoMCkucGxheSgpXHJcbiAgICAgICAgICAgICAgICAkKCcjc2VjdGlvbi0xMyAuYm94LWNvbnRhaW5lcicpLmNzcygndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgwLCA1MHB4KScpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoaW5kZXggPT0gMTQpe1xyXG4gICAgICAgICAgICAgICAgJCgnI3NlY3Rpb24tMTQgLmJveC1jb250YWluZXInKS5jc3MoJ29wYWNpdHknLCAxKVxyXG4gICAgICAgICAgICAgICAgJCgnI3NlY3Rpb24tMTQgLmJveC1jb250YWluZXInKS5jc3MoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoMCwgMCknKVxyXG4gICAgICAgICAgICAgICAgJCgnI3NlY3Rpb24tMTUgLnBvcHVwJykuY3NzKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKDAsIDEwMHB4KScpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoaW5kZXggPT0gMTUpe1xyXG4gICAgICAgICAgICAgICAgJCgnI3NlY3Rpb24tMTQgLmJveC1jb250YWluZXInKS5jc3MoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoMCwgNTBweCknKVxyXG4gICAgICAgICAgICAgICAgJCgnI21vdmllLTE1JykuZ2V0KDApLnBsYXkoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGluZGV4ID09IDE2KXtcclxuICAgICAgICAgICAgICAgICQoJyNzZWN0aW9uLTE1IC5wb3B1cCcpLmNzcygndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgwLCAxMDBweCknKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25MZWF2ZTogZnVuY3Rpb24oaW5kZXgsIG5leHRJbmRleCwgZGlyZWN0aW9uKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coaW5kZXgsIG5leHRJbmRleCwgZGlyZWN0aW9uKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYoaW5kZXggPT0gMiAmJiBkaXJlY3Rpb24gPT0gJ2Rvd24nKXtcclxuICAgICAgICAgICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgNzIwLCAxMjgwKVxyXG4gICAgICAgICAgICAgICAgJCgnI3NlY3Rpb24tMyAueWVsbG93LWJhY2snKS5jc3MoJ2hlaWdodCcsICcxMDB2aCcpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoaW5kZXggPT0gMyAmJiBkaXJlY3Rpb24gPT0gJ3VwJyl7XHJcbiAgICAgICAgICAgICAgICBjdHguZHJhd0ltYWdlKGltZywgMCwgMCwgNzIwLCAxMjgwLCAwLCAwLCA3MjAsIDEyODApO1xyXG4gICAgICAgICAgICAgICAgJCgnI3NlY3Rpb24tMyAueWVsbG93LWJhY2snKS5jc3MoJ2hlaWdodCcsIDApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoaW5kZXggPT0gMyl7XHJcbiAgICAgICAgICAgICAgICAkKCcjc2VjdGlvbi0zIC5ib3gtY29udGFpbmVyJykuY3NzKCdvcGFjaXR5JywgMClcclxuICAgICAgICAgICAgICAgICQoJyNzZWN0aW9uLTQgLnBvcHVwJykuY3NzKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKDAsIDApJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihpbmRleCA9PSA0KXtcclxuICAgICAgICAgICAgICAgICQoJyNzZWN0aW9uLTUgLnBvcHVwJykuY3NzKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKDAsIDApJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihpbmRleCA9PSA1KXtcclxuICAgICAgICAgICAgICAgICQoJyNzZWN0aW9uLTQgLnBvcHVwJykuY3NzKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKDAsIDApJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihpbmRleCA9PSA2KXtcclxuICAgICAgICAgICAgICAgICQoJyNzZWN0aW9uLTUgLnBvcHVwJykuY3NzKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKDAsIDApJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihpbmRleCA9PSA2ICYmIGRpcmVjdGlvbiA9PSAnZG93bicpe1xyXG4gICAgICAgICAgICAgICAgJCgnI3NlY3Rpb24tNyAueWVsbG93LWJhY2snKS5jc3MoJ2hlaWdodCcsICcxMDB2aCcpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoaW5kZXggPT0gNyAmJiBkaXJlY3Rpb24gPT0gJ3VwJyl7XHJcbiAgICAgICAgICAgICAgICAkKCcjc2VjdGlvbi03IC55ZWxsb3ctYmFjaycpLmNzcygnaGVpZ2h0JywgMClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihpbmRleCA9PSA3KXtcclxuICAgICAgICAgICAgICAgICQoJyNzZWN0aW9uLTcgLmJveC1jb250YWluZXInKS5jc3MoJ29wYWNpdHknLCAwKVxyXG4gICAgICAgICAgICAgICAgJCgnI3NlY3Rpb24tOCAucG9wdXAnKS5jc3MoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoMCwgMCknKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGluZGV4ID09IDggJiYgZGlyZWN0aW9uID09ICdkb3duJyl7XHJcbiAgICAgICAgICAgICAgICAkKCcjc2VjdGlvbi05IC55ZWxsb3ctYmFjaycpLmNzcygnaGVpZ2h0JywgJzEwMHZoJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihpbmRleCA9PSA4KXtcclxuICAgICAgICAgICAgICAgICQoJyNzZWN0aW9uLTggLnBvcHVwJykuY3NzKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKDAsIDApJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihpbmRleCA9PSA5ICYmIGRpcmVjdGlvbiA9PSAndXAnKXtcclxuICAgICAgICAgICAgICAgICQoJyNzZWN0aW9uLTkgLnllbGxvdy1iYWNrJykuY3NzKCdoZWlnaHQnLCAwKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGluZGV4ID09IDkpe1xyXG4gICAgICAgICAgICAgICAgJCgnI3NlY3Rpb24tOSAuYm94LWNvbnRhaW5lcicpLmNzcygnb3BhY2l0eScsIDApXHJcbiAgICAgICAgICAgICAgICAkKCcjc2VjdGlvbi04IC5wb3B1cCcpLmNzcygndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgwLCAwKScpXHJcbiAgICAgICAgICAgICAgICAkKCcjc2VjdGlvbi0xMCAucG9wdXAnKS5jc3MoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoMCwgMCknKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGluZGV4ID09IDEwKXtcclxuICAgICAgICAgICAgICAgICQoJyNzZWN0aW9uLTExIC5wb3B1cCcpLmNzcygndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgwLCAwKScpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoaW5kZXggPT0gMTEgJiYgZGlyZWN0aW9uID09ICdkb3duJyl7XHJcbiAgICAgICAgICAgICAgICAkKCcjc2VjdGlvbi0xMiAueWVsbG93LWJhY2snKS5jc3MoJ2hlaWdodCcsICcxMDB2aCcpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoaW5kZXggPT0gMTEpe1xyXG4gICAgICAgICAgICAgICAgJCgnI3NlY3Rpb24tMTAgLnBvcHVwJykuY3NzKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKDAsIDApJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihpbmRleCA9PSAxMiAmJiBkaXJlY3Rpb24gPT0gJ3VwJyl7XHJcbiAgICAgICAgICAgICAgICAkKCcjc2VjdGlvbi0xMiAueWVsbG93LWJhY2snKS5jc3MoJ2hlaWdodCcsIDApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoaW5kZXggPT0gMTIpe1xyXG4gICAgICAgICAgICAgICAgJCgnI3NlY3Rpb24tMTIgLmJveC1jb250YWluZXInKS5jc3MoJ29wYWNpdHknLCAwKVxyXG4gICAgICAgICAgICAgICAgJCgnI3NlY3Rpb24tMTEgLnBvcHVwJykuY3NzKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKDAsIDApJylcclxuICAgICAgICAgICAgICAgICQoJyNzZWN0aW9uLTEzIC5wb3B1cCcpLmNzcygndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgwLCAwKScpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoaW5kZXggPT0gMTMpe1xyXG4gICAgICAgICAgICAgICAgJCgnI3NlY3Rpb24tMTQgLnllbGxvdy1iYWNrJykuY3NzKCdoZWlnaHQnLCAnMTAwdmgnKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGluZGV4ID09IDE0ICYmIGRpcmVjdGlvbiA9PSAndXAnKXtcclxuICAgICAgICAgICAgICAgICQoJyNzZWN0aW9uLTE0IC55ZWxsb3ctYmFjaycpLmNzcygnaGVpZ2h0JywgMClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihpbmRleCA9PSAxNCl7XHJcbiAgICAgICAgICAgICAgICAkKCcjc2VjdGlvbi0xNCAuYm94LWNvbnRhaW5lcicpLmNzcygnb3BhY2l0eScsIDApXHJcbiAgICAgICAgICAgICAgICAkKCcjc2VjdGlvbi0xNSAucG9wdXAnKS5jc3MoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoMCwgMCknKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGluZGV4ID09IDE1KXtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoaW5kZXggPT0gMTYpe1xyXG4gICAgICAgICAgICAgICAgJCgnI3NlY3Rpb24tMTUgLnBvcHVwJykuY3NzKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKDAsIDApJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcuZnAtc2VjdGlvbicpLmNzcygndHJhbnNpdGlvbicsICdhbGwgLjdzIGVhc2UtaW4tb3V0JylcclxuXHJcbn0pXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZWM2MDVhMzg4ZjZlYTllNDJjY2EwMjI2ZTQxYjY5NzcuanBnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvYmcuanBnXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=