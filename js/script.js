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
		for(var i = 0; i < 1000; i++) {
			text += possible.charAt(Math.floor(Math.random() * possible.length));
		}
		$('.content-border').text(text);
	}
	setInterval(changeItem, 50);
});