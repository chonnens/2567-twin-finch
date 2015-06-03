

// JavaScript Document



$(document).ready(function() {
	$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 514) {
        $(".header").addClass("fix-search");
    } else {
        $(".header").removeClass("fix-search");
    }
});
});