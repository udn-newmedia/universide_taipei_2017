import '../style/style.css'
import $ from 'jquery'
import 'lazysizes'
import 'fullpage.js'
import anime from 'animejs'
import imgBg from '../assets/bg.jpg'

$(document).ready(function(){

    var canvas = document.getElementById('back-1');
    var ctx = canvas.getContext('2d');

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
            if(index == 3){
                $('#section-3 .box-container').css('opacity', 1)
            }
            
    		if(index == 4){
                $('#section-4 .content').css('transform', 'translate(0, 0)')
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
            }
            if(index == 2 && direction == 'down'){
                ctx.clearRect(0, 0, 720, 1280)
                $('#section-3 .yellow-back').css('height', '100vh')
            }
            if(index == 3 && direction == 'up'){
                ctx.drawImage(img, 0, 0, 720, 1280, 0, 0, 720, 1280);
                $('#section-3 .yellow-back').css('height', 0)
            }
            if(index == 3){
                $('#section-3 .box-container').css('opacity', 0)
                $('#section-4 .popup').css('transform', 'translate(0, 0)')
            }
            if(index == 4 && direction == 'up'){
                $('#section-4 .popup').css('transform', 'translate(0, 50px)')
            }
            if(index == 4){
                $('#section-5 .popup').css('transform', 'translate(0, 0)')
            }
            if(index == 5 && direction == 'up'){
                $('#section-5 .popup').css('transform', 'translate(0, 50px)')
            }
            if(index == 5){
                $('#section-6 .popup').css('transform', 'translate(0, 0)')
            }
            if(index == 6 && direction == 'up'){
                $('#section-6 .popup').css('transform', 'translate(0, 50px)')
            }
           
            
        }
    });

    $('.fp-section').css('transition', 'all .7s ease-in-out')

})