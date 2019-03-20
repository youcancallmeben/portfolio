// card animation to open another page.
function delay(URL) {
  if (URL == "/dividendo")
    document.getElementsByClassName("circle")[0].classList.toggle("circle-expanded");

  setTimeout(function () {
    window.location = URL
  }, 600);
}

function showTitle() {
  if (window.pageYOffset==0) {
    $('html, body').animate({
      scrollTop: "200px"
  }, 1500);
  }
}


$(document).ready(function () {
  // Library for cool shading effect
  AOS.init();
  
  // header appear if you are in home
  if ($('div').is('.home') || $('header').is('.padding-header')) {
    document.getElementsByClassName("site-header")[0].style.top = "0px";
  }
  
  setTimeout(showTitle, 6000);
  
  /* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
  var prevScrollpos = window.pageYOffset;
  
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementsByClassName("site-header")[0].style.top = "0";
    } else {
      document.getElementsByClassName("site-header")[0].style.top = "-61px";
    }
    prevScrollpos = currentScrollPos;
  }

  //hamburger menu
  $('button').on('click', function () {
    $('body').toggleClass('open');
  });

  $('.responsive').slick({
    arrows: true,
    dots: true,
    infinite: true,
    speed: 300,
    // remove arrow on device 'cause overflow
    responsive: [{
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
