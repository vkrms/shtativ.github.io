//hide menu
    $('a#header_menu').click(function () {
    $('#menu').fadeIn('slow');
});
//show menu
    $('#menu a').click(function () {
    $('#menu').fadeOut('slow');
});
 //slow transition 
//    $("#pointer-down").on("click","a", function (event) { 
    $('#pointer_down').click(function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    }); 
    $('#btns').on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
//owl carousel

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        items:1,
        dots:false,
        autoplay:true,
        smartSpeed: 1050,  
        nav:true,
        navContainer:'#testimonials nav',
        navText:['','']
    
});