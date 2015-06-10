// JavaScript Document

jQuery(document).ready(function($){
	
	// Smooth scroll home nav
		$('#smooth-scroll').on('click', 'a', function(e) {
			// prevent default anchor click behavior
   			e.preventDefault();
		
		   // store hash
		   var hash = this.hash;
			
			$('html, body').animate({
			   scrollTop: $(this.hash).offset().top-100
			 }, 900, function(){
		
			   // when done, add hash to url
			   // (default click behaviour)
			   window.location.hash = hash;
			 });
		
		});

	$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 532) {
        $(".header").addClass("fix-search");
    } else {
        $(".header").removeClass("fix-search");
    }
});
});