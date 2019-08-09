$(function(){

	var menuIsVis = true;

	$( ".content-list__link" ).hover(
		function() {
			$( this ).prev('.content-image-item').first().css('border-color', '#00b31d');
		}, 
		function() {
			$( this ).prev('.content-image-item').first().css('border-color', '#797979');;
		}
	);

	$(".mobile-menu").on("click", function() {
		$(".list-menu").slideToggle("fast");
	});

	$(window).on("resize", function() {
		if($(window).innerWidth()>480) {
			$(".list-menu").css("display","inline-block");
		}
		if($(window).innerWidth()<480) {
			$(".list-menu").css("display","flex");
		}
	});

});