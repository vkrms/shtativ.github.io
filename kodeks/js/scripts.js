//slow scroll

	$('a[href*="#contact"]').click(function (event) {
		event.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top;
		$('body, html').animate({scrollTop: top }, 555);
		if ($.browser.safari) {
			$('body').animate({scrollTop: top }, 555);
		} else {
			$('body, html').animate({scrollTop: top }, 555);
		}
		return false;
	});

//hamburger menu
  var $hamburger = $(".hamburger");
  	$hamburger.on("click", function(e) {
	  	$hamburger.toggleClass("is-active");
	  	$('#nav_items').slideToggle('slow');  
   
  });

