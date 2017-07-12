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
    	}
    });

    

})