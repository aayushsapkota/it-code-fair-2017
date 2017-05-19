$(document).ready(function() {


$(".icon").click(function() {
  /* Act on the event */
  $(".topnav").toggleClass('responsive');
});


});

$(document).ready(function() {
  
  $(window).scroll(function () {
      //if you hard code, then use console
      //.log to determine when you want the 
      //nav bar to stick.  
      console.log($(window).scrollTop())
    if ($(window).scrollTop() > 130) {
      $('#myTopnav').addClass('myTopnav_fixed');
    }
    if ($(window).scrollTop() < 130) {
      $('#myTopnav').removeClass('myTopnav_fixed');
    }
  });
});
