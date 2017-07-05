import '../style/style.css'
import $ from 'jquery'
import 'lazysizes'

$(document).ready(function(){

    function drawMovie(context, video, width, height){
        context.drawImage(video, 0, 0, width, height);
    }

    const w = $(window).width()
    const h = $(window).height()
    
    let canvas = document.getElementById('back')
    let ctx = canvas.getContext('2d')
    let img = new Image()
    let under1 = new Image()
    let under2 = new Image()
    let under3 = new Image()
    let scroll_now
    let playing = false
    let playInt = null

    if(w <= 768){

        $('#back').prop('width' ,720)
	    $('#back').prop('height', 1280)

        $('.back').css('margin-top',  -(600 * w / 720)/2 + 'px')

        img.src = 'assets/bg.jpg'
        img.addEventListener("load", function() {
  			ctx.drawImage(img, 0, 0, 720, 1280, 0, 0, 720, 1280);
		}, false);
        under1.src = 'assets/under1.gif'
        under2.src = 'assets/under2.gif'
        under3.src = 'assets/under3.gif'

        $(window).on('scroll', function(){

            scroll_now = $(window).scrollTop();

            let intro = scroll_now - $('.intro').offset().top + h
            let first = scroll_now - $('#first').offset().top + h

            if(intro < 150){
                ctx.clearRect(0, 0, 720, 1280)
                ctx.drawImage(img, 0, 0, 720, 1280, 0, 0, 720, 1280);
                $('.bg-b').css('background-color', 'rgba(0, 0, 0, 0)')
            }
            else if(intro >= 150 && intro < h){
                $('.bg-b').css('background-color', 'rgba(0, 0, 0, 0.8)')
            }
            else{
                $('.bg-b').css('background-color', 'rgba(0, 0, 0, 0.8)')
            }

            if(first < 150){
                $('.back').css('opacity', 0)
                $('#back').css('opacity', 1)
                $('#b-title').css('opacity', 0)
            }
            else if(first >= 150 && first < h*1.2){
                $('.bg-b').css('background-color', 'rgba(0, 0, 0, 0.8)')
                $('#back').css('opacity', 1)
                $('.back').css('opacity', 0)
                $('#b-title').css('opacity', 0)
            }
            else if(first >= h*1.2 && first < h *1.8){
                $('.bg-b').css('background-color', 'rgba(0, 0, 0, 0)')
                $('.back').css('opacity', 0)
                $('#under-1').css('opacity', 1)
                $('#back').css('opacity', 0)
                $('#b-title').css('opacity', 1)
                $('#b-title').text('長距離')
            }
            else if(first >= h*1.8 && first < h * 3){
                $('.bg-b').css('background-color', 'rgba(0, 0, 0, 0)')
                $('.back').css('opacity', 0)
                $('#under-2').css('opacity', 1)
                $('#back').css('opacity', 0)
                $('#b-title').css('opacity', 1)
                $('#b-title').text('短距離')
            }
            else{
                $('.bg-b').css('background-color', 'rgba(0, 0, 0, 0)')
                $('.back').css('opacity', 0)
                $('#under-3').css('opacity', 1)
                $('#back').css('opacity', 0)
                $('#b-title').css('opacity', 1)
                $('#b-title').text('上端')
            }

            console.log(first)

        })

    }

    

})