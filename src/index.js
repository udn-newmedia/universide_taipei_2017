import '../style/style.css'
import $ from 'jquery'
import 'lazysizes'
import 'fullpage.js'
import anime from 'animejs'

$(document).ready(function(){

   

    const w = $(window).width()
    const h = $(window).height()
    
    $('#fullpage').fullpage({
        navigation: false,    	
        scrollOverflow : true,
    	afterLoad: function(anchorLink, index){
    		console.log(index)
            if(index == 1){
                $('#cover-title').css('opacity', 1)
                $('#cover-title').css('transform', 'translate(0, 0)')
                $('#cover-subtitle').css('opacity', 1)
                $('#cover-subtitle').css('transform', 'translate(0, 0)')
                $('#cover-v h1').css('opacity', 1)
                $('#cover-v h1').css('transform', 'translate(0, 0)')
                $('#cover-v hr').css('width', '100%')
            }
            if(index == 3){
                $('#section-3 .yellow-back').css('height', '100vh')
                $('#section-3 .yellow-back').css('bottom', '0')
                $('#section-3 .yellow-back').css('top', 'auto')
                $('#section-3 .box-container').css('opacity', 1)
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
            console.log(index)
            if(index == 1){
                $('#cover-title').css('opacity', 0)
                $('#cover-title').css('transform', 'translate(0, -50px)')
                $('#cover-subtitle').css('opacity', 0)
                $('#cover-subtitle').css('transform', 'translate(0, -50px)')
                $('#cover-v h1').css('opacity', 0)
                $('#cover-v h1').css('transform', 'translate(0, -50px)')
                $('#cover-v hr').css('width', '0')                
            }
            if(index == 3){
                $('#section-3 .yellow-back').css('height', 0)
                $('#section-3 .box-container').css('opacity', 0)
                $('#section-3 .yellow-back').css('bottom', 'auto')
                $('#section-3 .yellow-back').css('top', '0')
            }
            
        }
    });

    $('.fp-section').css('transition', 'all .7s ease-in-out')

})