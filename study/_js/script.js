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
		$(".list-menu").toggle("fast");
			if(menuIsVis==true) {
				$(".header").animate({"border-width":"60px", "height": "350px"}, { duration: 200, queue: false });
				menuIsVis = false;
			}
				else {
					$(".header").animate({"border-width":"440px", "height": "730px"}, { duration: 200, queue: false });
					menuIsVis = true;
				}
	});

});