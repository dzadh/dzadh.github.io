// (function($){
// 	var typed = new Typed('#typed',{
// 		strings: ["I'm a Web Developer","I'm a Graphic Designer","I'm a Data Analys"],
// 		typeSpeed:100,
// 		backSpeed:100,
// 		fadeOut: false,
// 		smartBackspace:true,
// 		loop: true
// 		});
// })

$(document).ready(function(){
	$('.projects').isotope({
		// itemSelector: '.projects-wrapper',
		filter: '*',
		layoutMode: 'masonry'
	})

	$('.list-filter a').click(function() {
		var selector = $(this).attr('data-filter');
		$('.list-filter a').removeClass('active');
		$(this).addClass('active');
		$('.projects').isotope({ filter: selector });
		return false;
	});

	$('.popup-image').magnificPopup({
		type: 'image',
		closeOnContentClick : true,
		gallery:{
			enabled:true,
			navigateByImgClick: true
		}
	});
})
