 $(function(){
 	$('.b1').click(function(){
 		$('body, html').animate({scrollTop:$('#Portfolio').offset().top});
 		return false;
 	})
 	$('.b2').click(function(){
 		$('body, html').animate({scrollTop:$('#About').offset().top});
 		return false;
 	})
 	$('.b3').click(function(){
 		$('body, html').animate({scrollTop:$('#Contact').offset().top});
 		return false;
 	})

 	$(window).scroll(function(){
 		pos = $('body, html').scrollTop();
 		if(pos > 0){
 			$('.navbar-fixed-top').addClass('mini');
 		}
 		if(pos == 0){
 			$('.navbar-fixed-top').removeClass('mini');
 		}
 	})
})
 