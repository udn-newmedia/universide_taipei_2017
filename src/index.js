import '../style/style.css'
import $ from 'jquery'
import 'lazysizes'
import 'fullpage.js'
import anime from 'animejs'
import imgBg from '../assets/bg.jpg'

$(document).ready(function(){

    var canvas = document.getElementById('back-1');
    var ctx = canvas.getContext('2d');

    var yellow = anime({
        targets: '#section-3 .back',
        height: '100vh',
        duration: 700,
        loop: false,
        autoplay: false,
        easing: 'linear'
    })

    var gray = anime({
        targets: '#section-2 .back',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        opacity: 0.8,
        duration: 700,
        loop: false,
        autoplay: false,
        easing: 'linear'
    })

    $('#back-1').prop('width' ,720)
    $('#back-1').prop('height', 1280)
    
    var img = new Image()
    img.addEventListener("load", function() {
        ctx.drawImage(img, 0, 0, 720, 1280, 0, 0, 720, 1280);
    }, false);
    img.src = imgBg

    const w = $(window).width()
    const h = $(window).height()
    
    $('#fullpage').fullpage({
        navigation: false,    	
        scrollOverflow : true,
    	afterLoad: function(anchorLink, index){
            if(index == 1){
                $('#cover-title').css('opacity', 1)
                $('#cover-title').css('transform', 'translate(0, 0)')
                $('#cover-subtitle').css('opacity', 1)
                $('#cover-subtitle').css('transform', 'translate(0, 0)')
                $('#cover-v h1').css('opacity', 1)
                $('#cover-v h1').css('transform', 'translate(0, 0)')
                $('#cover-v hr').css('width', '100%')
            }
            if(index == 2){

            }
            
    		if(index == 4){
    			$('#movie-4').get(0).play()
    		}
    		if(index == 5){
    			$('#movie-5').get(0).play()
    		}
    		if(index == 6){
    			$('#movie-6').get(0).play()
    		}
        },
        onLeave: function(index, nextIndex, direction){
            console.log(index, nextIndex, direction)
            if(index == 1 && direction == 'down'){
                gray.play()
            }
            if(index == 1){
                $('#cover-title').css('opacity', 0)
                $('#cover-title').css('transform', 'translate(0, -50px)')
                $('#cover-subtitle').css('opacity', 0)
                $('#cover-subtitle').css('transform', 'translate(0, -50px)')
                $('#cover-v h1').css('opacity', 0)
                $('#cover-v h1').css('transform', 'translate(0, -50px)')
                $('#cover-v hr').css('width', '0')
                
            }
            if(index == 2 && direction == 'up'){
                gray.seek(0)
            }
            if(index == 2 && direction == 'down'){
                ctx.clearRect(0, 0, 720, 1280)
                yellow.play()
                // ctx.fillStyle = '#FFE400'
                // ctx.fillRect(0, 0, 720, 1280)
            }
            if(index == 3 && direction == 'up'){
                yellow.seek(0)
                ctx.drawImage(img, 0, 0, 720, 1280, 0, 0, 720, 1280);
                // $('#section-3 .yellow-back').css('height', 0)
                // $('#section-3 .box-container').css('opacity', 0)
            }
            if(index == 3){
                
            }
           
            
        }
    });

    $('.fp-section').css('transition', 'all .7s ease-in-out')

})