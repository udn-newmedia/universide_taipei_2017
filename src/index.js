import '../style/style.css'
import $ from 'jquery'
import 'lazysizes'
import 'fullpage.js'
import imgBg from '../assets/bg.png'

import poster4 from '../assets/spin1.jpg'
import poster5 from '../assets/spin2.jpg'
import poster8 from '../assets/back.jpg'
import poster10 from '../assets/under1.jpg'
import poster11 from '../assets/under2.jpg'
import poster13 from '../assets/backspin.jpg'
import poster15 from '../assets/fist.jpg'

$(document).ready(function(){

    $('#movie-4').attr('poster', poster4)
    $('#movie-5').attr('poster', poster5)
    $('#movie-8').attr('poster', poster8)
    $('#movie-10').attr('poster', poster10)
    $('#movie-11').attr('poster', poster11)
    $('#movie-13').attr('poster', poster13)
    $('#movie-15').attr('poster', poster15)

    var bar_witdh = 0

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

    // $('.f-video-contain').css('height', 600*w/h + 'px')
    $('video').css('width', w + 'px')

    $('#nav-icon').click(function(){
        console.log(123)
        $(this).toggleClass('open')
        $('#pannel').toggleClass('open')
        $('#head').toggleClass('open')
    })

    $('#page-down').click(function(){
        $.fn.fullpage.moveSectionDown()
    })
    
    $('#comment-pannel .fa').click(function(){
        $('#comment-pannel').toggleClass('open')
        $('#msg').toggleClass('close')
    })

    $('#msg').click(function(){
        $('#msg').toggleClass('close')
        $('#comment-pannel').toggleClass('open')
    })

    $('#fullpage').fullpage({
        navigation: false,    	
        scrollOverflow : true,
    	afterLoad: function(anchorLink, index){
            bar_witdh = (index-1) / 17 * 100
            $('#indicator-bar').css('width', bar_witdh+'%')
            $('.under').css('border-bottom-color', 'transparent')
            $('#section-' + index + ' .under').css('border-bottom-color', '#FFE400')
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
                $('#page-down').css('opacity', 1)
            }
            if(index == 3){
                $('#section-3 .box-container').css('opacity', 1)
                $('#section-3 .box-container').css('transform', 'translate(0, 0)')
                $('#section-4 .popup').css('transform', 'translate(0, 100px)')
            }
    		if(index == 4){
                $('#section-3 .box-container').css('transform', 'translate(0, 50px)')
                $('#movie-4').get(0).play()
                $('#section-5 .popup').css('transform', 'translate(0, 100px)')
    		}
    		if(index == 5){
                $('#movie-5').get(0).play()
                $('#section-4 .popup').css('transform', 'translate(0, 100px)')
    		}
    		if(index == 6){
                $('#section-5 .popup').css('transform', 'translate(0, 100px)')
                $('#section-7 .box-container').css('transform', 'translate(0, 50px)')
            }
            if(index == 7){
                $('#section-7 .box-container').css('opacity', 1)
                $('#section-7 .box-container').css('transform', 'translate(0, 0)')
                $('#section-8 .popup').css('transform', 'translate(0, 100px)')
            }
            if(index == 8){
                $('#section-7 .box-container').css('transform', 'translate(0, 50px)')
                $('#movie-8').get(0).play()
                $('#section-9 .box-container').css('transform', 'translate(0, 50px)')
            }
            if(index == 9){
                $('#section-9 .box-container').css('opacity', 1)
                $('#section-9 .box-container').css('transform', 'translate(0, 0)')
                $('#section-8 .popup').css('transform', 'translate(0, 100px)')
                $('#section-10 .popup').css('transform', 'translate(0, 100px)')
            }
            if(index == 10){
                $('#section-9 .box-container').css('transform', 'translate(0, 50px)')
                $('#movie-10').get(0).play()
                $('#section-11 .popup').css('transform', 'translate(0, 100px)')
            }
            if(index == 11){
                $('#movie-11').get(0).play()
                $('#section-10 .popup').css('transform', 'translate(0, 100px)')
            }
            if(index == 12){
                $('#section-12 .box-container').css('opacity', 1)
                $('#section-12 .box-container').css('transform', 'translate(0, 0)')
                $('#section-11 .popup').css('transform', 'translate(0, 100px)')
            }
            if(index == 13){
                $('#section-12 .box-container').css('transform', 'translate(0, 50px)')
                $('#movie-13').get(0).play()
                $('#section-13 .box-container').css('transform', 'translate(0, 50px)')
            }
            if(index == 14){
                $('#section-14 .box-container').css('opacity', 1)
                $('#section-14 .box-container').css('transform', 'translate(0, 0)')
                $('#section-15 .popup').css('transform', 'translate(0, 100px)')
            }
            if(index == 15){
                $('#section-14 .box-container').css('transform', 'translate(0, 50px)')
                $('#movie-15').get(0).play()
            }
            if(index == 16){
                $('#section-15 .popup').css('transform', 'translate(0, 100px)')
            }
            if(index == 17){
                $('#page-down').css('opacity', 1)
            }
            if(index == 18){
                $('#comment-pannel').toggleClass('open')
            }

        },
        devtool: 'source-map',
        onLeave: function(index, nextIndex, direction){
            console.log(index, nextIndex, direction)
            if(index == 2 && direction == 'up'){
                $('#page-down').css('opacity', 0)
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
            if(index == 4){
                $('#section-5 .popup').css('transform', 'translate(0, 0)')
            }
            if(index == 5){
                $('#section-4 .popup').css('transform', 'translate(0, 0)')
            }
            if(index == 6){
                $('#section-5 .popup').css('transform', 'translate(0, 0)')
            }
            if(index == 6 && direction == 'down'){
                $('#section-7 .yellow-back').css('height', '100vh')
            }
            if(index == 7 && direction == 'up'){
                $('#section-7 .yellow-back').css('height', 0)
            }
            if(index == 7){
                $('#section-7 .box-container').css('opacity', 0)
                $('#section-8 .popup').css('transform', 'translate(0, 0)')
            }
            if(index == 8 && direction == 'down'){
                $('#section-9 .yellow-back').css('height', '100vh')
            }
            if(index == 8){
                $('#section-8 .popup').css('transform', 'translate(0, 0)')
            }
            if(index == 9 && direction == 'up'){
                $('#section-9 .yellow-back').css('height', 0)
            }
            if(index == 9){
                $('#section-9 .box-container').css('opacity', 0)
                $('#section-8 .popup').css('transform', 'translate(0, 0)')
                $('#section-10 .popup').css('transform', 'translate(0, 0)')
            }
            if(index == 10){
                $('#section-11 .popup').css('transform', 'translate(0, 0)')
            }
            if(index == 11 && direction == 'down'){
                $('#section-12 .yellow-back').css('height', '100vh')
            }
            if(index == 11){
                $('#section-10 .popup').css('transform', 'translate(0, 0)')
            }
            if(index == 12 && direction == 'up'){
                $('#section-12 .yellow-back').css('height', 0)
            }
            if(index == 12){
                $('#section-12 .box-container').css('opacity', 0)
                $('#section-11 .popup').css('transform', 'translate(0, 0)')
                $('#section-13 .popup').css('transform', 'translate(0, 0)')
            }
            if(index == 13){
                $('#section-14 .yellow-back').css('height', '100vh')
            }
            if(index == 14 && direction == 'up'){
                $('#section-14 .yellow-back').css('height', 0)
            }
            if(index == 14){
                $('#section-14 .box-container').css('opacity', 0)
                $('#section-15 .popup').css('transform', 'translate(0, 0)')
            }
            if(index == 15){

            }
            if(index == 16){
                $('#section-15 .popup').css('transform', 'translate(0, 0)')
            }
            if(index == 17 && direction == 'down'){
                $('#page-down').css('opacity', 0)
            }
            if(index == 18){
                $('#msg').toggleClass('close')
            }
            
        }
    });

    $('.fp-section').css('transition', 'all .7s ease-in-out')

})