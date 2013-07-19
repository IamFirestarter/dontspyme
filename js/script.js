$(document).ready(function(){
	$('a').click(function(){
		$('html, body').animate({
			scrollTop: $( $.attr(this, 'href') ).offset().top
		}, 500);
		return false;
	});
	
	function changeItem() {
		var text = '';
		var possible = '01 ';
		var possible = 'AB CD EF 01 23 45 67 89 ';

		for(var i = 0; i < 1000; i++) {
			text += possible.charAt(Math.floor(Math.random() * possible.length));
		}
		$('.content-border').text(text);
	}
	setInterval(changeItem, 100);
});