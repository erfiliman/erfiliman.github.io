$(function(){
	$('.list-categories__item').on('click', function(){
		$(this).find("ul:first").slideToggle();
	});

	$('.wallpaper-item').on('click', function() {
		var bg = $(this).css('background-image');
		bg = bg.replace('url(','').replace(')','').replace(/\"/gi, "");
		$('.modal-wallpaper-show__item').attr('src', bg );
		$('.modal-wallpaper-show').fadeIn(400);
		$('.modal-wallpaper-show').on('click', function () {
			$(this).fadeOut(400);
		});
		console.log(bg);
	});
});
