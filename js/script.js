$(document).ready(function(){
	$('a').click(function(){
		$('html, body').animate({
			scrollTop: $( $.attr(this, 'href') ).offset().top
		}, 500);
		return false;
	});
	
	function changeBorder() {
		var text = '';
		//var possible = '01 ';
		var possible = 'AB CD EF 01 23 45 67 89 ';

		for(var i = 0; i < 1500; i++) {
			text += possible.charAt(Math.floor(Math.random() * possible.length));
		}
		$('.content-border').text(text);
	}
	setInterval(changeBorder, 50);
});