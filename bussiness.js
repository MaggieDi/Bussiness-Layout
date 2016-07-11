$(document).ready(function(){


$(".form-style").focusin(function(){
		$(this).toggleClass("contact-active");
		
	});
	$(".form-style").focusout(function(){
		$(this).removeClass("contact-active");
		
	});
    $('.icon').click(function(){
        $('#main-nav').toggleClass('responsive');

    });
 });