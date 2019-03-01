
$(document).ready(function () {
  AOS.init();

  // $('.single-item').slick({
  //   arrows: false,
  //   dots: true,
  //   infinite: true,
  // });

  $('.responsive').slick({
    arrows: true,
    dots: true,
    infinite: true,
    speed: 300,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: true
        }
      },
      {
        breakpoint: 400,
        settings: {
          arrows: false
        }
      },
      {
        breakpoint: 700,
        settings: {
          arrows: false
        }
      }
    ]
  });
  
  
});

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementsByClassName("site-header")[0].style.top = "0";
  } else {
    document.getElementsByClassName("site-header")[0].style.top = "-61px";
  }
  prevScrollpos = currentScrollPos;
  
} 


