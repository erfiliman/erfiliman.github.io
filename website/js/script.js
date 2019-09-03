





$(function(){
	$('.list-categories__item').on('click', function(){
		$(this).find("ul:first").slideToggle();
	});

function nextBg(el) {
	var bg = $(el).next().css('background-image');
	bg = bg.replace('url(','').replace(')','').replace(/\"/gi, "");
}

	$('.wallpaper-item').on('click', function() {
		var bg = $(this).css('background-image');
		bg = bg.replace('url(','').replace(')','').replace(/\"/gi, "");
		$('.modal-wallpaper-show__item').attr('src', bg );
		$('.modal-wallpaper-show').fadeIn(400);
		$('.modal-wallpaper-show').on('click', function () {
			$(this).fadeOut(200);
		});
		console.log(bg);
	});

	$('.login').on('click', function() {
		var modal = $('.modal-autho_login');
		var winH = $(window).height();
		var winW = $(window).width();
		modal.css('top', winH/2-modal.height()/2);
		modal.css('left', winW/2-modal.width()/2);
		$('.modal-autho_login').fadeIn(200);
	});

	$('.register').on('click', function() {
		var modal = $('.modal-autho_register');
		var winH = $(window).height();
		var winW = $(window).width();
		modal.css('top', winH/2-modal.height()/2);
		modal.css('left', winW/2-modal.width()/2);
		$('.modal-autho_register').fadeIn(200);
	});

	$('.close-btn').on('click', function (){
			$('.modal-autho').fadeOut(200);
	});

	$('#register-password-confirm, #register-password').on('keyup', function () {
		if ($('#register-password').val() == $('#register-password-confirm').val()) {
			$('.check-req_password').html('&#10004;').css('color','lime').show(100);
		} else 
		$('.check-req_password').html('&#10008;').css('color', 'red').show(100);
	});
});
