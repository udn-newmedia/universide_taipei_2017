import '../style/style.css'
import $ from 'jquery'
import 'lazysizes'
import 'fullpage.js'

$(document).ready(function(){

    $('#fullpage').fullpage({
        navigation: false,    	
        scrollOverflow : true,

    })

})