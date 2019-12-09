function showTitle() {
    if (window.pageYOffset == 0) {
        $('html, body').animate({
            scrollTop: "200px"
        }, 1500);
    }
}

setTimeout(showTitle, 6000);