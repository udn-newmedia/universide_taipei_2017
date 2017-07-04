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
    let under = new Image()
    let scroll_now
    let under1 = document.getElementById('under-1')
    let under2 = document.getElementById('under-2')
    let under3 = document.getElementById('under-3')
    let playing = false
    let playInt = null

    if(w <= 768){

        $('#back').prop('width' ,720)
	    $('#back').prop('height', 1280)

        img.src = 'assets/bg.jpg'
        img.addEventListener("load", function() {
  			ctx.drawImage(img, 0, 0, 720, 1280, 0, 0, 720, 1280);
		}, false);
        under.src = 'assets/under1.jpg'

        $(window).on('scroll', function(){

            scroll_now = $(window).scrollTop();

            let intro = scroll_now - $('.intro').offset().top + h
            let first = scroll_now - $('#first').offset().top + h

            if(intro < 150){
                ctx.clearRect(0, 0, 720, 1280)
                ctx.drawImage(img, 0, 0, 720, 1280, 0, 0, 720, 1280);
                $('.bg-b').css('background-color', 'rgba(0, 0, 0, 0)')
            }
            else{
                $('.bg-b').css('background-color', 'rgba(0, 0, 0, 0.8)')
            }

            if(first < 150){
                ctx.clearRect(0, 0, 720, 1280)
                ctx.drawImage(img, 0, 0, 720, 1280, 0, 0, 720, 1280);
            }
            else if(first >= 150 && first < h*1.5 - 150){
                $('.bg-b').css('background-color', 'rgba(0, 0, 0, 0.8)')
                ctx.clearRect(0, 0, 720, 1280)
                ctx.drawImage(under1, 0, 0, 720, 1280, 0, 0, 720, 1280);
                clearInterval(playInt)
                playing = false
                under1.pause()
            }
            else if(first >= h*1.5 - 150 && first < h*2 + 300){
                $('.bg-b').css('background-color', 'rgba(0, 0, 0, 0)')
                if(playing == false){
                    playing = true
                    under1.play()
                    playInt = setInterval(function(){
                        ctx.clearRect(0, 0, 720, 1280)
                        ctx.drawImage(under1, 0, 0, 720, 1280, 0, 0, 720, 1280);
                        console.log(5)
                    }, 100)
                }
            }
            else if(first >= h*2 + 300 && first < h*2.5 + 300){
                $('.bg-b').css('background-color', 'rgba(0, 0, 0, 0.8)')
                ctx.clearRect(0, 0, 720, 1280)
                ctx.drawImage(under2, 0, 0, 720, 1280, 0, 0, 720, 1280);
                clearInterval(playInt)
                playing = false
                under1.pause() 
                under2.pause()
            }
            else{
                $('.bg-b').css('background-color', 'rgba(0, 0, 0, 0)')
                if(playing == false){
                    playing = true
                    under2.play()
                    playInt = setInterval(function(){
                        ctx.clearRect(0, 0, 720, 1280)
                        ctx.drawImage(under2, 0, 0, 720, 1280, 0, 0, 720, 1280);
                        console.log(5)
                    }, 100)
                }
            }

            console.log(first)

        })

    }

    

})