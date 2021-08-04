$(function() {
	$(window).scroll(function() {
		if($(this).scrollTop() != 0) {
			$('#btnScrollUp').fadeIn();	
		} else {
			$('#btnScrollUp').fadeOut();
		}
	});
 
	$('#btnScrollUp').click(function() {
		$('body,html').animate({scrollTop:0},800);
	});	
});