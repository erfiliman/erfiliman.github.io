$(function(){
var isVisMenu = false;

	$( ".content-list__link" ).hover(
		function() {
			$( this ).prev('.content-image-item').first().css('border-color', '#00b31d');
		}, 
		function() {
			$( this ).prev('.content-image-item').first().css('border-color', '#797979');;
		}
	);

	
		if ($(window).width()<=480) {
			$('.top-menu').prepend("<div class='mobile-menu'>Menu</div>");
		}

});