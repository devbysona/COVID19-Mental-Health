!(function($) {
$(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });

 })(jQuery);
 
 AOS.init({
  duration: 1200,
})