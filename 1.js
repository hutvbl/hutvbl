 $(function(){
 	$(window).scroll(function(){
 		vitri = $('body, html').scrollTop();

 		if(vitri > 200){
 			$('.theme2').addClass('display');
 		}
 		else if(vitri < 200){
 			$('.theme2').removeClass('display');
 		}
 		if(vitri > 700){
 			$('.theme3').addClass('display');
 		}
 		else if(vitri < 700){
 			$('.theme3').removeClass('display');
 		}
 		if(vitri > 1400){
 			$('.portfolio, .theme4').addClass('display');
 		}
 		else if(vitri < 1400){
 			$('.portfolio, .theme4').removeClass('display');
 		}
 		if(vitri > 1975){
 			$('.theme5, .footer').addClass('display');
 		}
 		else if(vitri < 1975){
 			$('.theme5, .footer').removeClass('display');
 		}
 	})
})  
 