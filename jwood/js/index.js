// fullPage

// $(document).ready(function() {
//     $('#fullpage').fullpage();
// });
//


$(document).ready(function() {
    $('#fullpage').fullpage({
        //Navigation
        menu: '#menu',
        lockAnchors: false,
        anchors: ['firstPage', 'secondPage', '3thPage', '4thPage'],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: 0,
        showActiveTooltip: false,
        slidesNavigation: true,
        slidesNavPosition: 'bottom',

        //Scrolling
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 1000,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease-in-out',
        loopBottom: true,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        continuousHorizontal: false,
        scrollHorizontally: false,
        interlockedSlides: false,
        resetSliders: false,
        fadingEffect: false,
        normalScrollElements: '#element1, .element2',
        scrollOverflow: false,
        scrollOverflowOptions: null,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,
        bigSectionsDestination: null,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: true,
        verticalCentered: true,
        sectionsColor: ['#ccc', '#fff'],
        paddingTop: '10px', //'1em',
        paddingBottom: '0', //'10px',
        fixedElements: null,
        responsiveWidth: 0,
        responsiveHeight: 0,
        responsiveSlides: true,

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        //events
        onLeave: function(index, nextIndex, direction) {},
        afterLoad: function(anchorLink, index) {},
        afterRender: function() {},
        afterResize: function() {},
        afterResponsive: function(isResponsive) {},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex) {},
        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex) {}
    });


    //scaler
    $.fn.scale = function(){
      var ww = $(window).width();
      var wh = $(window).height();
      var c = 1.5; //коэффициент, чтобы все не было слишком мелким
      var fs = (ww * wh)/(1920 * 955) * 100 * c;
      console.log(fs);
      if (fs >= 100) return;
      $(this).css('font-size', fs + '%');
    }

    $('section').scale();

    $(window).on('resize',function(){
      $('section').scale();
    });

});

//old pullpage plugin
//
// $(document).ready(function() {
//     $('#fullpage').fullpage({
//       resize: true
//     });
// });
