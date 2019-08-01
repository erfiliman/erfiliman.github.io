$(function(){
	$('.list-categories__item').on('click', function(){
		$(this).find("ul:first").slideToggle();
	});
});