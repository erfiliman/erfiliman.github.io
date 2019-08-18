$(function(){

	var menuIsVis = true;

	$( ".content-list__link" ).hover(
		function() {
			$( this ).prev('.content-image').first().css('border-color', '#00b31d');
		}, 
		function() {
			$( this ).prev('.content-image').first().css('border-color', '#797979');;
		}
	);

	$(".mobile-menu").on("click", function() {
		$(".list-menu").slideToggle("fast");
	});

});