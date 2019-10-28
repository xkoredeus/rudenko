$(function() {
  $('[data-fancybox]').fancybox({
    animationDuration : 600,
    animationEffect   : 'slide-in-in',
    touch : false
  });
});
$(function() {
  $('.map__pop-btn').on('click', function() {
    $(this).parent('.map__pop-item')
    .toggleClass('active')
    .find('.map__pop-cnt').slideToggle();
  });
});
$(function() {
  if ( $(window).width() < 1280 ) {
    $('.map__pop-cnt').hide();
    $('.tabs-acc__btn').on('click', function(){
      $(this).toggleClass('active').siblings('.tabs-acc__cnt').slideToggle();
    })
  };
});