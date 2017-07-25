import '../style/style.css'
import $ from 'jquery'
import 'lazysizes'
import 'fullpage.js'
import imgBg from '../assets/gym-bg.png'

$(document).ready(function(){

    var videoTrack = null
    var index_now

    var canvas = document.getElementById('back-1');
    var ctx = canvas.getContext('2d');

    var canvas2 = document.getElementById('video-state');
    var video_state = canvas2.getContext('2d');

    function drawVideoState(id){

        var progress = $('#movie-' + id).get(0).currentTime / $('#movie-' + id).get(0).duration
        console.log(progress)
        video_state.clearRect(0, 0, 35, 35)

        video_state.beginPath();
        video_state.arc(17.5, 17.5, 16, 0, 2 * Math.PI);
        video_state.strokeStyle = 'rgba(255, 255, 255, 0.2)'
        video_state.stroke();

        video_state.beginPath();
        video_state.arc(17.5,17.5,16,-0.5 * Math.PI, (2 * progress - 0.5) * Math.PI);
        video_state.strokeStyle = "#FFA31F";
        video_state.stroke();
        
    }

    $('video').on('ended', function(){
        console.log(this)
        console.log(index_now)
        
        video_state.clearRect(0, 0, 35, 35)

        video_state.beginPath();
        video_state.arc(17.5,17.5,16,-0.5 * Math.PI, (2 * 1 - 0.5) * Math.PI);
        video_state.stroke();
        if(videoTrack){
            clearInterval(videoTrack)
        }
        if(index_now == 4){
            $('#video-state-contain .fa-play').css('opacity', 0.7)
            $('#section-4 .box-container-c').css('opacity', 1)
        }
        if(index_now == 6){
            $('#video-state-contain .fa-play').css('opacity', 0.7)
        }
        if(index_now == 7){
            $('#video-state-contain .fa-play').css('opacity', 0.7)
        }
        if(index_now == 8){
            $('#video-state-contain .fa-play').css('opacity', 0.7)
        }
        if(index_now == 9){
            $('#video-state-contain .fa-play').css('opacity', 0.7)
        }
        if(index_now == 10){
            $('#video-state-contain .fa-play').css('opacity', 0.7)
        }
    })

    $('#video-state-contain .fa-play').click(function(){
        $('#video-state-contain .fa-play').css('opacity', 0)
        $('#movie-' + index_now).get(0).play()
        videoTrack = setInterval(function(){
            drawVideoState(index_now)
        }, 100)
        if(index_now == 4){
            $('#section-4 .box-container-c').css('opacity', 0)
        }
    })

    $('#back-1').prop('width' , 375)
    $('#back-1').prop('height', 667)

    $('#video-state').prop('width' , 35)
    $('#video-state').prop('height', 35)

    video_state.lineWidth = 3

    var img = new Image()
    img.addEventListener("load", function() {
        ctx.drawImage(img, 0, 0, 375, 667, 0, 0, 375, 667);
    }, false);
    img.src = imgBg

    $('#fullpage').fullpage({
        navigation: false,    	
        scrollOverflow : true,
        afterLoad: function(anchorLink, index){
            index_now = index
            if(index == 1){
                console.log(index)
                $('#cover-title').css('opacity', 1)
                $('#cover-title').css('transform', 'translate(0, 0)')
                $('#cover-subtitle').css('opacity', 1)
                $('#cover-subtitle').css('transform', 'translate(0, 0)')
                $('#cover-v h1').css('opacity', 1)
                $('#cover-v h1').css('transform', 'translate(0, 0)')
                $('#cover-v hr').css('width', '100%')
            }
            if(index == 2){
                $('#cover-title').css('opacity', 0)
                $('#cover-title').css('transform', 'translate(0, 50px)')
                $('#cover-subtitle').css('opacity', 0)
                $('#cover-subtitle').css('transform', 'translate(0, 50px)')
                $('#cover-v h1').css('opacity', 0)
                $('#cover-v h1').css('transform', 'translate(0, 50px)')
                $('#cover-v hr').css('width', '0')
                $('#section-3 .box-container').css('transform', 'translate(0, 50px)')
            }
            if(index == 3){
                $('#section-3 .box-container').css('opacity', 1)
                $('#section-3 .box-container').css('transform', 'translate(0, 0)')
            }
            if(index == 4){
                $('#section-3 .box-container').css('transform', 'translate(0, 50px)')
                $('#movie-4').get(0).play()
                $('#video-state').css('opacity', 0.7)
                videoTrack = setInterval(function(){
                    drawVideoState(4)
                }, 100)
            }
            if(index == 5){
                $('#movie-5').get(0).play()
            }
            if(index == 6){
                $('#movie-6').get(0).play()
                $('#video-state').css('opacity', 0.7)
                videoTrack = setInterval(function(){
                    drawVideoState(6)
                }, 100)
            }
            if(index == 7){
                $('#movie-7').get(0).play()
                $('#video-state').css('opacity', 0.7)
                videoTrack = setInterval(function(){
                    drawVideoState(7)
                }, 100)
            }
            if(index == 8){
                $('#movie-8').get(0).play()
                $('#video-state').css('opacity', 0.7)
                videoTrack = setInterval(function(){
                    drawVideoState(8)
                }, 100)
            }
            if(index == 9){
                $('#movie-9').get(0).play()
                $('#video-state').css('opacity', 0.7)
                videoTrack = setInterval(function(){
                    drawVideoState(9)
                }, 100)
            }
            if(index == 10){
                $('#movie-10').get(0).play()
                $('#video-state').css('opacity', 0.7)
                videoTrack = setInterval(function(){
                    drawVideoState(10)
                }, 100)
            }
        },
        onLeave: function(index, nextIndex, direction){

            if(index == 2 && direction == 'down'){
                ctx.clearRect(0, 0, 375, 667)
                $('#section-3 .orange-back').css('height', '100vh')
            }
            if(index == 3){
                $('#section-3 .box-container').css('opacity', 0)
            }
            if(index == 4){
                $('#video-state').css('opacity', 0)
                $('#video-state-contain .fa-play').css('opacity', 0)
                $('#section-4 .box-container-c').css('opacity', 0)
                clearInterval(videoTrack)
            }
            if(index == 5){
            
            }
            if(index == 6){
                $('#video-state').css('opacity', 0)
                $('#video-state-contain .fa-play').css('opacity', 0)
                clearInterval(videoTrack)
            }
            if(index == 7){
                $('#video-state').css('opacity', 0)
                $('#video-state-contain .fa-play').css('opacity', 0)
                clearInterval(videoTrack)
            }
            if(index == 8){
                $('#video-state').css('opacity', 0)
                $('#video-state-contain .fa-play').css('opacity', 0)
                clearInterval(videoTrack)
            }
            if(index == 9){
                $('#video-state').css('opacity', 0)
                $('#video-state-contain .fa-play').css('opacity', 0)
                clearInterval(videoTrack)
            }
            if(index == 10){
                $('#video-state').css('opacity', 0)
                $('#video-state-contain .fa-play').css('opacity', 0)
                clearInterval(videoTrack)
            }

        }

    })

    $('.fp-section').css('transition', 'all .7s ease-in-out')

})