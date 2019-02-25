
$(document).ready(function () {
  AOS.init();

  $('.multiple-items').slick({
    arrows: false,
    slidesToShow: 1,
    dots: true,
    infinite: true,
    // fade: true,        
  });
});
