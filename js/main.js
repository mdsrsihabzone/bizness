var container = document.querySelector('.gallery');
var mixer = mixitup(container, {
    selectors: {
        control: '[our-mix-control]'
    }
}); 

// menu active class
$(document).ready(function () {
        // animat plugin
        new WOW().init();
        // animat plugin end
        
        $(".owl-carousel").owlCarousel({
            autoplay: true,
            autoplayTimeout: 2000,
            loop: true,
            smartSpeed: 500,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 5
                }
            }
        });
        // scrolling window 
        $('.top').click(function () {
            $('html, body').animate({
                scrollTop: 0
            }, 1000);
        });

        $(window).scroll(function () {
            let ourwindow = $(this).scrollTop();

            if (ourwindow < 100) {
                $('.top').fadeOut();
            } else {
                $('.top').fadeIn();
            };

            // fixed menu
            if (ourwindow > 50) {
                $('body').addClass('fixed');
            } else {
                $('body').removeClass('fixed');
            }
        });

        $('.navbar-nav  a[href^="#"]').click(function(e){
            e.preventDefault()

         let target = this.hash;
          $('html, body').animate({
              scrollTop :$(target).offset().top -45
          },1000);

        })
        
    })

    