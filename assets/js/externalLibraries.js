
$(document).ready(function () {
  AOS.init();

  $('.single-item').slick({
    arrows: true,
    dots: true,
    infinite: true,
    // slidesToShow: 1, 
    // fade: true,        
    // adaptiveHeight: true,
    // variableWidth: true,
  });
  
$('.one-time').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true
});

});
