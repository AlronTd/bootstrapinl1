$(document).ready(function () {
    let rollingBanner = $(".owl-rolling-banner")
    rollingBanner.owlCarousel({
        loop: true,
        margin: 119,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            /* 600 */764: {
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

    let carousel1 = $(".owl-carousel-1")
    carousel1.owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            /* 600 */764: {
                items: 5
            },
            991: {
                items: 5
            }
        }
    })
    
    carousel1.on("initialize.owl.carousel translate.owl.carousel dragged.owl.carousel", function(e) {
        let index = e.item.index
        
        $(".owl-item.selected").removeClass('selected')
        $(".owl-item.corner").removeClass('corner')
        $(".owl-item.unselected").removeClass('unselected')
        
        const length = $(".owl-item.active").length
        
        $(".owl-item").eq(index).addClass('selected')
        // $(".owl-item").eq(index - 5).addClass('corner')
        // $(".owl-item").eq(index - 1).addClass('corner')
        // $(".owl-item").eq(index -4).addClass('unselected')
        // $(".owl-item").eq(index - 2).addClass('unselected')
    })
});