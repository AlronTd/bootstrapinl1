$(document).ready(function () {
    let owl = $(".owl-carousel")
    owl.owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 4
            },
            1000: {
                items: 4
            }
        },
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: false,
        autoplaySpeed: 1000,
        fallbackEasing: "none",
        slideTransition: "linear"
    })
});