$(function(){
	$(".fancybox").fancybox();
	$("#resume").click(function(){
		$(".home").hide();
		$(".resume").show();
		$(this).addClass('active');
		$('#home').removeClass('active');
	}),
	$("#home").click(function(){
		$(".resume").hide();
		$(".home").show();
		$(this).addClass('active');
		$('#resume').removeClass('active');
	});
	$(".fancybox").fancybox({
		loop: false,
		prevEffect	: 'fade',
		nextEffect	: 'fade',
		prevSpeed: 100,
		nextSpeed: 100,
		helpers	: {
			overlay: {
				locked: true
			},
			title	: {
				type: 'inside'
			},
			thumbs	: {
				width	: 150,
				height	: 150
			}
		}
	});
});