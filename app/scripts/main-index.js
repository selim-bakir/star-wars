jQuery(document).ready(function($){

    // CHANGE BACKGROUND OF THE STICKY NAV 
        var nav = $('#navbar');
        var navBurger = $('.blind-burger');
        var navbarPos = navbar.offsetTop;

        function changeBgNav() {
            if (window.pageYOffset > navbarPos) {
                nav.css('background-color', 'black')
            } else {
                nav.css('background-color', 'transparent')
            }
        }

    // BURGER MENU 

    navBurger.click(function(){
        nav.toggleClass('on');
    });

    // AD STICKY
    var adStarWars = $('#ad-battle-front').offset();
    var headerHeight = $('header').outerHeight();
    
    $(window).scroll(function(){
        if($(window).scrollTop() >= headerHeight){
            $('#ad-battle-front').css('position','sticky').css('top','115px');
        } else {
            $('#ad-battle-front').css('position','static');
        }    
        changeBgNav()
    });

    // RETINA SRC IMAGE SWITCH
        var device = $(window).innerWidth() > 680 ? "desktop" : "mobile";
        $("img").each(function() {
            $(this).attr("src", $(this).data(device));
        });


    // PARALLAX
        $(".parallax").each(function() {
            $(this).css("background-image", "url("+$(this).data('image')+")");
        });
});
