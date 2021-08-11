$(document).ready(function(){
 
	$(window).scroll(function(){
		if ($(this).scrollTop() > 600) {
			$('#btnScrollUp').fadeIn();
		} else {
			$('#btnScrollUp').fadeOut();
		}
	});
	 
	$('#btnScrollUp').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 600);
		return false;
	});
 
});