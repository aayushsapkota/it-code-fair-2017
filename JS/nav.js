$(document).ready(function() {


$(".menubutton").click(function() {
  /* Act on the event */
  $(".topnav").toggleClass('responsive');
});


});

$(document).ready(function() {

  $(window).scroll(function () {
      
      //trying to know exact nav location when we should switch using console
     // console.log($(window).scrollTop());
    if ($(window).scrollTop() > 150) {
      $('.menubutton').addClass('menubutton_fixed');
    }
    if ($(window).scrollTop() < 150) {
      $('.menubutton').removeClass('menubutton_fixed');
    }
      
      
   
});
});
$(document).ready(function() {

  $(window).scroll(function () {
      
      //trying to know exact nav location when we should switch using console
     // console.log($(window).scrollTop());
    if ($(window).scrollTop() > 130) {
      $('#myTopnav').addClass('myTopnav_fixed');
    }
    if ($(window).scrollTop() < 130) {
      $('#myTopnav').removeClass('myTopnav_fixed');
    }
      
      
   
});
});


$(document).ready(function () {
		$(document).on("scroll", onScroll);
 
		$('a[href^="#"]').on('click', function (e) {
			e.preventDefault();
			$(document).off("scroll");
 
			$('a').each(function () {
				$(this).removeClass('active');
			})
			$(this).addClass('active');
 
			var target = this.hash;
			$target = $(target);
			$('html, body').stop().animate({
				'scrollTop': $target.offset().top+2
			}, 500, 'swing', function () {
				window.location.hash = target;
				$(document).on("scroll", onScroll);
			});
		});
	});
 
	function onScroll(event){
		var scrollPosition = $(document).scrollTop();
		$('nav a').each(function () {
			var currentLink = $(this);
			var refElement = $(currentLink.attr("href"));
			if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
				$('nav a').removeClass("active");
				currentLink.addClass("active");
			}
			else{
				currentLink.removeClass("active");
			}
		});
    };