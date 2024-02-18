$(document).ready(function () {
    $("#news-slider").owlCarousel({
        items: 3,
        margin: 15,
        loop: true,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });
});


$('#carouselExampleMulti').carousel({
    interval: 2000 // Set the interval according to your needs
});