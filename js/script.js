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

	var border = $('.content-border-1');
	var borderOffset = border.offset();
	var borderHeight = border.height();	
	var borderY = borderOffset.top + borderHeight / 2;	
	var doc = $(window);
	$(window).scroll(function() {
		var docHeight = doc.height() / 2;
		var docY = doc.scrollTop() + docHeight;
		
		var coco = borderY - docY;
		coco = Math.round(coco);
		coco = Math.abs(coco);
		
		coco = coco * coco;
		console.log(coco);

		changeItem();
	});
	
});