$(document).ready(function(){

	/* ==========================================================================
	   Exponential Widths & Fonts
	   ========================================================================== */
	   
		function exponential() {
			var view = $(window).width();
			var shot = Math.sqrt(view);
			var type = shot / 10 - 0.5;
			shot = 100 - shot * view / 1000;
			if(shot < 62.51) {
				shot = 62.50;
			} else if (shot > 89.999) {
				shot = 90;
			}
			$('.inner').css('width', shot + '%');
			if(type < 1.41) {
				type = 1.4;
			} else if (type > 1.999) {
				type = 2;
			}
			$('body').css('font-size', type + 'em');
		}
		exponential();
		$(window).resize(exponential);

	/* ==========================================================================
	   Scroll to Top
	   ========================================================================== */

	$('a').click(function(){
		$('html, body').animate({
			scrollTop: $( $.attr(this, 'href') ).offset().top
		}, 500);
		return false;
	});
	
	/* ==========================================================================
	   Border Number rotation
	   ========================================================================== */
	
	function changeBorder() {
		var text = '';
		//var possible = '01 ';
		var possible = 'AB CD EF 01 23 45 67 89 ';

		for(var i = 0; i < 2000; i++) {
			text += possible.charAt(Math.floor(Math.random() * possible.length));
		}
		$('.content-border').text(text);
	}
	setInterval(changeBorder, 100);
/* 	$(window).scroll(changeBorder) */
	
/*
	var movementStrength = 50;
	var height = movementStrength / $(window).height();
	var width = movementStrength / $(window).width();
	
	$("html").mousemove(function(e){
	
		var pageX = e.pageX - ($(window).width() / 2);
		var pageY = e.pageY - ($(window).height() / 2);
		
		var newvalueX = width * pageX * -1;
		var newvalueY = height * pageY * -1;
		
		$('.content-border').css("background-position", newvalueX+"px "+newvalueY+"px");
	});
*/
});