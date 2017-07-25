webpackJsonp([1],{

/***/ 0:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

var _jquery = __webpack_require__(1);

var _jquery2 = _interopRequireDefault(_jquery);

__webpack_require__(2);

__webpack_require__(3);

var _gymBg = __webpack_require__(8);

var _gymBg2 = _interopRequireDefault(_gymBg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _jquery2.default)(document).ready(function () {

    var videoTrack = null;
    var index_now;

    var canvas = document.getElementById('back-1');
    var ctx = canvas.getContext('2d');

    var canvas2 = document.getElementById('video-state');
    var video_state = canvas2.getContext('2d');

    function drawVideoState(id) {

        var progress = (0, _jquery2.default)('#movie-' + id).get(0).currentTime / (0, _jquery2.default)('#movie-' + id).get(0).duration;
        console.log(progress);
        video_state.clearRect(0, 0, 35, 35);

        video_state.beginPath();
        video_state.arc(17.5, 17.5, 16, 0, 2 * Math.PI);
        video_state.strokeStyle = 'rgba(255, 255, 255, 0.2)';
        video_state.stroke();

        video_state.beginPath();
        video_state.arc(17.5, 17.5, 16, -0.5 * Math.PI, (2 * progress - 0.5) * Math.PI);
        video_state.strokeStyle = "#FFA31F";
        video_state.stroke();
    }

    (0, _jquery2.default)('video').on('ended', function () {
        console.log(this);
        console.log(index_now);

        video_state.clearRect(0, 0, 35, 35);

        video_state.beginPath();
        video_state.arc(17.5, 17.5, 16, -0.5 * Math.PI, (2 * 1 - 0.5) * Math.PI);
        video_state.stroke();
        if (videoTrack) {
            clearInterval(videoTrack);
        }
        if (index_now == 4) {
            (0, _jquery2.default)('#video-state-contain .fa-play').css('opacity', 0.7);
            (0, _jquery2.default)('#section-4 .box-container-c').css('opacity', 1);
        }
        if (index_now == 6) {
            (0, _jquery2.default)('#video-state-contain .fa-play').css('opacity', 0.7);
        }
        if (index_now == 7) {
            (0, _jquery2.default)('#video-state-contain .fa-play').css('opacity', 0.7);
        }
        if (index_now == 8) {
            (0, _jquery2.default)('#video-state-contain .fa-play').css('opacity', 0.7);
        }
        if (index_now == 9) {
            (0, _jquery2.default)('#video-state-contain .fa-play').css('opacity', 0.7);
        }
        if (index_now == 10) {
            (0, _jquery2.default)('#video-state-contain .fa-play').css('opacity', 0.7);
        }
    });

    (0, _jquery2.default)('#video-state-contain .fa-play').click(function () {
        (0, _jquery2.default)('#video-state-contain .fa-play').css('opacity', 0);
        (0, _jquery2.default)('#movie-' + index_now).get(0).play();
        videoTrack = setInterval(function () {
            drawVideoState(index_now);
        }, 100);
        if (index_now == 4) {
            (0, _jquery2.default)('#section-4 .box-container-c').css('opacity', 0);
        }
    });

    (0, _jquery2.default)('#back-1').prop('width', 375);
    (0, _jquery2.default)('#back-1').prop('height', 667);

    (0, _jquery2.default)('#video-state').prop('width', 35);
    (0, _jquery2.default)('#video-state').prop('height', 35);

    video_state.lineWidth = 3;

    var img = new Image();
    img.addEventListener("load", function () {
        ctx.drawImage(img, 0, 0, 375, 667, 0, 0, 375, 667);
    }, false);
    img.src = _gymBg2.default;

    (0, _jquery2.default)('#fullpage').fullpage({
        navigation: false,
        scrollOverflow: true,
        afterLoad: function afterLoad(anchorLink, index) {
            index_now = index;
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
            }
            if (index == 4) {
                (0, _jquery2.default)('#section-3 .box-container').css('transform', 'translate(0, 50px)');
                (0, _jquery2.default)('#movie-4').get(0).play();
                (0, _jquery2.default)('#video-state').css('opacity', 0.7);
                videoTrack = setInterval(function () {
                    drawVideoState(4);
                }, 100);
            }
            if (index == 5) {
                (0, _jquery2.default)('#movie-5').get(0).play();
            }
            if (index == 6) {
                (0, _jquery2.default)('#movie-6').get(0).play();
                (0, _jquery2.default)('#video-state').css('opacity', 0.7);
                videoTrack = setInterval(function () {
                    drawVideoState(6);
                }, 100);
            }
            if (index == 7) {
                (0, _jquery2.default)('#movie-7').get(0).play();
                (0, _jquery2.default)('#video-state').css('opacity', 0.7);
                videoTrack = setInterval(function () {
                    drawVideoState(7);
                }, 100);
            }
            if (index == 8) {
                (0, _jquery2.default)('#movie-8').get(0).play();
                (0, _jquery2.default)('#video-state').css('opacity', 0.7);
                videoTrack = setInterval(function () {
                    drawVideoState(8);
                }, 100);
            }
            if (index == 9) {
                (0, _jquery2.default)('#movie-9').get(0).play();
                (0, _jquery2.default)('#video-state').css('opacity', 0.7);
                videoTrack = setInterval(function () {
                    drawVideoState(9);
                }, 100);
            }
            if (index == 10) {
                (0, _jquery2.default)('#movie-10').get(0).play();
                (0, _jquery2.default)('#video-state').css('opacity', 0.7);
                videoTrack = setInterval(function () {
                    drawVideoState(10);
                }, 100);
            }
        },
        onLeave: function onLeave(index, nextIndex, direction) {

            if (index == 2 && direction == 'down') {
                ctx.clearRect(0, 0, 375, 667);
                (0, _jquery2.default)('#section-3 .orange-back').css('height', '100vh');
            }
            if (index == 3) {
                (0, _jquery2.default)('#section-3 .box-container').css('opacity', 0);
            }
            if (index == 4) {
                (0, _jquery2.default)('#video-state').css('opacity', 0);
                (0, _jquery2.default)('#video-state-contain .fa-play').css('opacity', 0);
                (0, _jquery2.default)('#section-4 .box-container-c').css('opacity', 0);
                clearInterval(videoTrack);
            }
            if (index == 5) {}
            if (index == 6) {
                (0, _jquery2.default)('#video-state').css('opacity', 0);
                (0, _jquery2.default)('#video-state-contain .fa-play').css('opacity', 0);
                clearInterval(videoTrack);
            }
            if (index == 7) {
                (0, _jquery2.default)('#video-state').css('opacity', 0);
                (0, _jquery2.default)('#video-state-contain .fa-play').css('opacity', 0);
                clearInterval(videoTrack);
            }
            if (index == 8) {
                (0, _jquery2.default)('#video-state').css('opacity', 0);
                (0, _jquery2.default)('#video-state-contain .fa-play').css('opacity', 0);
                clearInterval(videoTrack);
            }
            if (index == 9) {
                (0, _jquery2.default)('#video-state').css('opacity', 0);
                (0, _jquery2.default)('#video-state-contain .fa-play').css('opacity', 0);
                clearInterval(videoTrack);
            }
            if (index == 10) {
                (0, _jquery2.default)('#video-state').css('opacity', 0);
                (0, _jquery2.default)('#video-state-contain .fa-play').css('opacity', 0);
                clearInterval(videoTrack);
            }
        }

    });

    (0, _jquery2.default)('.fp-section').css('transition', 'all .7s ease-in-out');
});

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "388d461e246d9066b4d444377e5ada58.png";

/***/ })

},[7]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZS9zdHlsZS5jc3M/YmUyOCIsIndlYnBhY2s6Ly8vLi9zcmMvZ3ltbmFzdGljcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvZ3ltLWJnLnBuZyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsInJlYWR5IiwidmlkZW9UcmFjayIsImluZGV4X25vdyIsImNhbnZhcyIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsImNhbnZhczIiLCJ2aWRlb19zdGF0ZSIsImRyYXdWaWRlb1N0YXRlIiwiaWQiLCJwcm9ncmVzcyIsImdldCIsImN1cnJlbnRUaW1lIiwiZHVyYXRpb24iLCJjb25zb2xlIiwibG9nIiwiY2xlYXJSZWN0IiwiYmVnaW5QYXRoIiwiYXJjIiwiTWF0aCIsIlBJIiwic3Ryb2tlU3R5bGUiLCJzdHJva2UiLCJvbiIsImNsZWFySW50ZXJ2YWwiLCJjc3MiLCJjbGljayIsInBsYXkiLCJzZXRJbnRlcnZhbCIsInByb3AiLCJsaW5lV2lkdGgiLCJpbWciLCJJbWFnZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJkcmF3SW1hZ2UiLCJzcmMiLCJmdWxscGFnZSIsIm5hdmlnYXRpb24iLCJzY3JvbGxPdmVyZmxvdyIsImFmdGVyTG9hZCIsImFuY2hvckxpbmsiLCJpbmRleCIsIm9uTGVhdmUiLCJuZXh0SW5kZXgiLCJkaXJlY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEseUM7Ozs7Ozs7Ozs7QUNBQTs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOzs7Ozs7QUFFQSxzQkFBRUEsUUFBRixFQUFZQyxLQUFaLENBQWtCLFlBQVU7O0FBRXhCLFFBQUlDLGFBQWEsSUFBakI7QUFDQSxRQUFJQyxTQUFKOztBQUVBLFFBQUlDLFNBQVNKLFNBQVNLLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBYjtBQUNBLFFBQUlDLE1BQU1GLE9BQU9HLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBVjs7QUFFQSxRQUFJQyxVQUFVUixTQUFTSyxjQUFULENB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O0FBQ0QsZ0JBQUd5QyxTQUFTLEVBQVosRUFBZTtBQUNYLHNDQUFFLGNBQUYsRUFBa0JoQixHQUFsQixDQUFzQixTQUF0QixFQUFpQyxDQUFqQztBQUNBLHNDQUFFLCtCQUFGLEVBQW1DQSxHQUFuQyxDQUF1QyxTQUF2QyxFQUFrRCxDQUFsRDtBQUNBRCw4QkFBY3hCLFVBQWQ7QUFDSDtBQUVKOztBQXhIbUIsS0FBeEI7O0FBNEhBLDBCQUFFLGFBQUYsRUFBaUJ5QixHQUFqQixDQUFxQixZQUFyQixFQUFtQyxxQkFBbkM7QUFFSCxDQXJORCxFOzs7Ozs7O0FDTkEsZ0YiLCJmaWxlIjoiZ3ltbmFzdGljcy40YWJiMWQzZGRlMzU4YmQ0ZGI1Zi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zdHlsZS9zdHlsZS5jc3Ncbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJpbXBvcnQgJy4uL3N0eWxlL3N0eWxlLmNzcydcclxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xyXG5pbXBvcnQgJ2xhenlzaXplcydcclxuaW1wb3J0ICdmdWxscGFnZS5qcydcclxuaW1wb3J0IGltZ0JnIGZyb20gJy4uL2Fzc2V0cy9neW0tYmcucG5nJ1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuXHJcbiAgICB2YXIgdmlkZW9UcmFjayA9IG51bGxcclxuICAgIHZhciBpbmRleF9ub3dcclxuXHJcbiAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JhY2stMScpO1xyXG4gICAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG5cclxuICAgIHZhciBjYW52YXMyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpZGVvLXN0YXRlJyk7XHJcbiAgICB2YXIgdmlkZW9fc3RhdGUgPSBjYW52YXMyLmdldENvbnRleHQoJzJkJyk7XHJcblxyXG4gICAgZnVuY3Rpb24gZHJhd1ZpZGVvU3RhdGUoaWQpe1xyXG5cclxuICAgICAgICB2YXIgcHJvZ3Jlc3MgPSAkKCcjbW92aWUtJyArIGlkKS5nZXQoMCkuY3VycmVudFRpbWUgLyAkKCcjbW92aWUtJyArIGlkKS5nZXQoMCkuZHVyYXRpb25cclxuICAgICAgICBjb25zb2xlLmxvZyhwcm9ncmVzcylcclxuICAgICAgICB2aWRlb19zdGF0ZS5jbGVhclJlY3QoMCwgMCwgMzUsIDM1KVxyXG5cclxuICAgICAgICB2aWRlb19zdGF0ZS5iZWdpblBhdGgoKTtcclxuICAgICAgICB2aWRlb19zdGF0ZS5hcmMoMTcuNSwgMTcuNSwgMTYsIDAsIDIgKiBNYXRoLlBJKTtcclxuICAgICAgICB2aWRlb19zdGF0ZS5zdHJva2VTdHlsZSA9ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMiknXHJcbiAgICAgICAgdmlkZW9fc3RhdGUuc3Ryb2tlKCk7XHJcblxyXG4gICAgICAgIHZpZGVvX3N0YXRlLmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIHZpZGVvX3N0YXRlLmFyYygxNy41LDE3LjUsMTYsLTAuNSAqIE1hdGguUEksICgyICogcHJvZ3Jlc3MgLSAwLjUpICogTWF0aC5QSSk7XHJcbiAgICAgICAgdmlkZW9fc3RhdGUuc3Ryb2tlU3R5bGUgPSBcIiNGRkEzMUZcIjtcclxuICAgICAgICB2aWRlb19zdGF0ZS5zdHJva2UoKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAkKCd2aWRlbycpLm9uKCdlbmRlZCcsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcylcclxuICAgICAgICBjb25zb2xlLmxvZyhpbmRleF9ub3cpXHJcbiAgICAgICAgXHJcbiAgICAgICAgdmlkZW9fc3RhdGUuY2xlYXJSZWN0KDAsIDAsIDM1LCAzNSlcclxuXHJcbiAgICAgICAgdmlkZW9fc3RhdGUuYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgdmlkZW9fc3RhdGUuYXJjKDE3LjUsMTcuNSwxNiwtMC41ICogTWF0aC5QSSwgKDIgKiAxIC0gMC41KSAqIE1hdGguUEkpO1xyXG4gICAgICAgIHZpZGVvX3N0YXRlLnN0cm9rZSgpO1xyXG4gICAgICAgIGlmKHZpZGVvVHJhY2spe1xyXG4gICAgICAgICAgICBjbGVhckludGVydmFsKHZpZGVvVHJhY2spXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGluZGV4X25vdyA9PSA0KXtcclxuICAgICAgICAgICAgJCgnI3ZpZGVvLXN0YXRlLWNvbnRhaW4gLmZhLXBsYXknKS5jc3MoJ29wYWNpdHknLCAwLjcpXHJcbiAgICAgICAgICAgICQoJyNzZWN0aW9uLTQgLmJveC1jb250YWluZXItYycpLmNzcygnb3BhY2l0eScsIDEpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGluZGV4X25vdyA9PSA2KXtcclxuICAgICAgICAgICAgJCgnI3ZpZGVvLXN0YXRlLWNvbnRhaW4gLmZhLXBsYXknKS5jc3MoJ29wYWNpdHknLCAwLjcpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGluZGV4X25vdyA9PSA3KXtcclxuICAgICAgICAgICAgJCgnI3ZpZGVvLXN0YXRlLWNvbnRhaW4gLmZhLXBsYXknKS5jc3MoJ29wYWNpdHknLCAwLjcpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGluZGV4X25vdyA9PSA4KXtcclxuICAgICAgICAgICAgJCgnI3ZpZGVvLXN0YXRlLWNvbnRhaW4gLmZhLXBsYXknKS5jc3MoJ29wYWNpdHknLCAwLjcpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGluZGV4X25vdyA9PSA5KXtcclxuICAgICAgICAgICAgJCgnI3ZpZGVvLXN0YXRlLWNvbnRhaW4gLmZhLXBsYXknKS5jc3MoJ29wYWNpdHknLCAwLjcpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGluZGV4X25vdyA9PSAxMCl7XHJcbiAgICAgICAgICAgICQoJyN2aWRlby1zdGF0ZS1jb250YWluIC5mYS1wbGF5JykuY3NzKCdvcGFjaXR5JywgMC43KVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgJCgnI3ZpZGVvLXN0YXRlLWNvbnRhaW4gLmZhLXBsYXknKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgICQoJyN2aWRlby1zdGF0ZS1jb250YWluIC5mYS1wbGF5JykuY3NzKCdvcGFjaXR5JywgMClcclxuICAgICAgICAkKCcjbW92aWUtJyArIGluZGV4X25vdykuZ2V0KDApLnBsYXkoKVxyXG4gICAgICAgIHZpZGVvVHJhY2sgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBkcmF3VmlkZW9TdGF0ZShpbmRleF9ub3cpXHJcbiAgICAgICAgfSwgMTAwKVxyXG4gICAgICAgIGlmKGluZGV4X25vdyA9PSA0KXtcclxuICAgICAgICAgICAgJCgnI3NlY3Rpb24tNCAuYm94LWNvbnRhaW5lci1jJykuY3NzKCdvcGFjaXR5JywgMClcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgICQoJyNiYWNrLTEnKS5wcm9wKCd3aWR0aCcgLCAzNzUpXHJcbiAgICAkKCcjYmFjay0xJykucHJvcCgnaGVpZ2h0JywgNjY3KVxyXG5cclxuICAgICQoJyN2aWRlby1zdGF0ZScpLnByb3AoJ3dpZHRoJyAsIDM1KVxyXG4gICAgJCgnI3ZpZGVvLXN0YXRlJykucHJvcCgnaGVpZ2h0JywgMzUpXHJcblxyXG4gICAgdmlkZW9fc3RhdGUubGluZVdpZHRoID0gM1xyXG5cclxuICAgIHZhciBpbWcgPSBuZXcgSW1hZ2UoKVxyXG4gICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1nLCAwLCAwLCAzNzUsIDY2NywgMCwgMCwgMzc1LCA2NjcpO1xyXG4gICAgfSwgZmFsc2UpO1xyXG4gICAgaW1nLnNyYyA9IGltZ0JnXHJcblxyXG4gICAgJCgnI2Z1bGxwYWdlJykuZnVsbHBhZ2Uoe1xyXG4gICAgICAgIG5hdmlnYXRpb246IGZhbHNlLCAgICBcdFxyXG4gICAgICAgIHNjcm9sbE92ZXJmbG93IDogdHJ1ZSxcclxuICAgICAgICBhZnRlckxvYWQ6IGZ1bmN0aW9uKGFuY2hvckxpbmssIGluZGV4KXtcclxuICAgICAgICAgICAgaW5kZXhfbm93ID0gaW5kZXhcclxuICAgICAgICAgICAgaWYoaW5kZXggPT0gMSl7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpbmRleClcclxuICAgICAgICAgICAgICAgICQoJyNjb3Zlci10aXRsZScpLmNzcygnb3BhY2l0eScsIDEpXHJcbiAgICAgICAgICAgICAgICAkKCcjY292ZXItdGl0bGUnKS5jc3MoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoMCwgMCknKVxyXG4gICAgICAgICAgICAgICAgJCgnI2NvdmVyLXN1YnRpdGxlJykuY3NzKCdvcGFjaXR5JywgMSlcclxuICAgICAgICAgICAgICAgICQoJyNjb3Zlci1zdWJ0aXRsZScpLmNzcygndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgwLCAwKScpXHJcbiAgICAgICAgICAgICAgICAkKCcjY292ZXItdiBoMScpLmNzcygnb3BhY2l0eScsIDEpXHJcbiAgICAgICAgICAgICAgICAkKCcjY292ZXItdiBoMScpLmNzcygndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgwLCAwKScpXHJcbiAgICAgICAgICAgICAgICAkKCcjY292ZXItdiBocicpLmNzcygnd2lkdGgnLCAnMTAwJScpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoaW5kZXggPT0gMil7XHJcbiAgICAgICAgICAgICAgICAkKCcjY292ZXItdGl0bGUnKS5jc3MoJ29wYWNpdHknLCAwKVxyXG4gICAgICAgICAgICAgICAgJCgnI2NvdmVyLXRpdGxlJykuY3NzKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKDAsIDUwcHgpJylcclxuICAgICAgICAgICAgICAgICQoJyNjb3Zlci1zdWJ0aXRsZScpLmNzcygnb3BhY2l0eScsIDApXHJcbiAgICAgICAgICAgICAgICAkKCcjY292ZXItc3VidGl0bGUnKS5jc3MoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoMCwgNTBweCknKVxyXG4gICAgICAgICAgICAgICAgJCgnI2NvdmVyLXYgaDEnKS5jc3MoJ29wYWNpdHknLCAwKVxyXG4gICAgICAgICAgICAgICAgJCgnI2NvdmVyLXYgaDEnKS5jc3MoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoMCwgNTBweCknKVxyXG4gICAgICAgICAgICAgICAgJCgnI2NvdmVyLXYgaHInKS5jc3MoJ3dpZHRoJywgJzAnKVxyXG4gICAgICAgICAgICAgICAgJCgnI3NlY3Rpb24tMyAuYm94LWNvbnRhaW5lcicpLmNzcygndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgwLCA1MHB4KScpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoaW5kZXggPT0gMyl7XHJcbiAgICAgICAgICAgICAgICAkKCcjc2VjdGlvbi0zIC5ib3gtY29udGFpbmVyJykuY3NzKCdvcGFjaXR5JywgMSlcclxuICAgICAgICAgICAgICAgICQoJyNzZWN0aW9uLTMgLmJveC1jb250YWluZXInKS5jc3MoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoMCwgMCknKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGluZGV4ID09IDQpe1xyXG4gICAgICAgICAgICAgICAgJCgnI3NlY3Rpb24tMyAuYm94LWNvbnRhaW5lcicpLmNzcygndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgwLCA1MHB4KScpXHJcbiAgICAgICAgICAgICAgICAkKCcjbW92aWUtNCcpLmdldCgwKS5wbGF5KClcclxuICAgICAgICAgICAgICAgICQoJyN2aWRlby1zdGF0ZScpLmNzcygnb3BhY2l0eScsIDAuNylcclxuICAgICAgICAgICAgICAgIHZpZGVvVHJhY2sgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgIGRyYXdWaWRlb1N0YXRlKDQpXHJcbiAgICAgICAgICAgICAgICB9LCAxMDApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoaW5kZXggPT0gNSl7XHJcbiAgICAgICAgICAgICAgICAkKCcjbW92aWUtNScpLmdldCgwKS5wbGF5KClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihpbmRleCA9PSA2KXtcclxuICAgICAgICAgICAgICAgICQoJyNtb3ZpZS02JykuZ2V0KDApLnBsYXkoKVxyXG4gICAgICAgICAgICAgICAgJCgnI3ZpZGVvLXN0YXRlJykuY3NzKCdvcGFjaXR5JywgMC43KVxyXG4gICAgICAgICAgICAgICAgdmlkZW9UcmFjayA9IHNldEludGVydmFsKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgZHJhd1ZpZGVvU3RhdGUoNilcclxuICAgICAgICAgICAgICAgIH0sIDEwMClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihpbmRleCA9PSA3KXtcclxuICAgICAgICAgICAgICAgICQoJyNtb3ZpZS03JykuZ2V0KDApLnBsYXkoKVxyXG4gICAgICAgICAgICAgICAgJCgnI3ZpZGVvLXN0YXRlJykuY3NzKCdvcGFjaXR5JywgMC43KVxyXG4gICAgICAgICAgICAgICAgdmlkZW9UcmFjayA9IHNldEludGVydmFsKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgZHJhd1ZpZGVvU3RhdGUoNylcclxuICAgICAgICAgICAgICAgIH0sIDEwMClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihpbmRleCA9PSA4KXtcclxuICAgICAgICAgICAgICAgICQoJyNtb3ZpZS04JykuZ2V0KDApLnBsYXkoKVxyXG4gICAgICAgICAgICAgICAgJCgnI3ZpZGVvLXN0YXRlJykuY3NzKCdvcGFjaXR5JywgMC43KVxyXG4gICAgICAgICAgICAgICAgdmlkZW9UcmFjayA9IHNldEludGVydmFsKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgZHJhd1ZpZGVvU3RhdGUoOClcclxuICAgICAgICAgICAgICAgIH0sIDEwMClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihpbmRleCA9PSA5KXtcclxuICAgICAgICAgICAgICAgICQoJyNtb3ZpZS05JykuZ2V0KDApLnBsYXkoKVxyXG4gICAgICAgICAgICAgICAgJCgnI3ZpZGVvLXN0YXRlJykuY3NzKCdvcGFjaXR5JywgMC43KVxyXG4gICAgICAgICAgICAgICAgdmlkZW9UcmFjayA9IHNldEludGVydmFsKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgZHJhd1ZpZGVvU3RhdGUoOSlcclxuICAgICAgICAgICAgICAgIH0sIDEwMClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihpbmRleCA9PSAxMCl7XHJcbiAgICAgICAgICAgICAgICAkKCcjbW92aWUtMTAnKS5nZXQoMCkucGxheSgpXHJcbiAgICAgICAgICAgICAgICAkKCcjdmlkZW8tc3RhdGUnKS5jc3MoJ29wYWNpdHknLCAwLjcpXHJcbiAgICAgICAgICAgICAgICB2aWRlb1RyYWNrID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICBkcmF3VmlkZW9TdGF0ZSgxMClcclxuICAgICAgICAgICAgICAgIH0sIDEwMClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25MZWF2ZTogZnVuY3Rpb24oaW5kZXgsIG5leHRJbmRleCwgZGlyZWN0aW9uKXtcclxuXHJcbiAgICAgICAgICAgIGlmKGluZGV4ID09IDIgJiYgZGlyZWN0aW9uID09ICdkb3duJyl7XHJcbiAgICAgICAgICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIDM3NSwgNjY3KVxyXG4gICAgICAgICAgICAgICAgJCgnI3NlY3Rpb24tMyAub3JhbmdlLWJhY2snKS5jc3MoJ2hlaWdodCcsICcxMDB2aCcpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoaW5kZXggPT0gMyl7XHJcbiAgICAgICAgICAgICAgICAkKCcjc2VjdGlvbi0zIC5ib3gtY29udGFpbmVyJykuY3NzKCdvcGFjaXR5JywgMClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihpbmRleCA9PSA0KXtcclxuICAgICAgICAgICAgICAgICQoJyN2aWRlby1zdGF0ZScpLmNzcygnb3BhY2l0eScsIDApXHJcbiAgICAgICAgICAgICAgICAkKCcjdmlkZW8tc3RhdGUtY29udGFpbiAuZmEtcGxheScpLmNzcygnb3BhY2l0eScsIDApXHJcbiAgICAgICAgICAgICAgICAkKCcjc2VjdGlvbi00IC5ib3gtY29udGFpbmVyLWMnKS5jc3MoJ29wYWNpdHknLCAwKVxyXG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh2aWRlb1RyYWNrKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGluZGV4ID09IDUpe1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihpbmRleCA9PSA2KXtcclxuICAgICAgICAgICAgICAgICQoJyN2aWRlby1zdGF0ZScpLmNzcygnb3BhY2l0eScsIDApXHJcbiAgICAgICAgICAgICAgICAkKCcjdmlkZW8tc3RhdGUtY29udGFpbiAuZmEtcGxheScpLmNzcygnb3BhY2l0eScsIDApXHJcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHZpZGVvVHJhY2spXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoaW5kZXggPT0gNyl7XHJcbiAgICAgICAgICAgICAgICAkKCcjdmlkZW8tc3RhdGUnKS5jc3MoJ29wYWNpdHknLCAwKVxyXG4gICAgICAgICAgICAgICAgJCgnI3ZpZGVvLXN0YXRlLWNvbnRhaW4gLmZhLXBsYXknKS5jc3MoJ29wYWNpdHknLCAwKVxyXG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh2aWRlb1RyYWNrKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGluZGV4ID09IDgpe1xyXG4gICAgICAgICAgICAgICAgJCgnI3ZpZGVvLXN0YXRlJykuY3NzKCdvcGFjaXR5JywgMClcclxuICAgICAgICAgICAgICAgICQoJyN2aWRlby1zdGF0ZS1jb250YWluIC5mYS1wbGF5JykuY3NzKCdvcGFjaXR5JywgMClcclxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodmlkZW9UcmFjaylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihpbmRleCA9PSA5KXtcclxuICAgICAgICAgICAgICAgICQoJyN2aWRlby1zdGF0ZScpLmNzcygnb3BhY2l0eScsIDApXHJcbiAgICAgICAgICAgICAgICAkKCcjdmlkZW8tc3RhdGUtY29udGFpbiAuZmEtcGxheScpLmNzcygnb3BhY2l0eScsIDApXHJcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHZpZGVvVHJhY2spXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoaW5kZXggPT0gMTApe1xyXG4gICAgICAgICAgICAgICAgJCgnI3ZpZGVvLXN0YXRlJykuY3NzKCdvcGFjaXR5JywgMClcclxuICAgICAgICAgICAgICAgICQoJyN2aWRlby1zdGF0ZS1jb250YWluIC5mYS1wbGF5JykuY3NzKCdvcGFjaXR5JywgMClcclxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodmlkZW9UcmFjaylcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfSlcclxuXHJcbiAgICAkKCcuZnAtc2VjdGlvbicpLmNzcygndHJhbnNpdGlvbicsICdhbGwgLjdzIGVhc2UtaW4tb3V0JylcclxuXHJcbn0pXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2d5bW5hc3RpY3MuanMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIzODhkNDYxZTI0NmQ5MDY2YjRkNDQ0Mzc3ZTVhZGE1OC5wbmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9neW0tYmcucG5nXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSJdLCJzb3VyY2VSb290IjoiIn0=