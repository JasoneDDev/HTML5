$(document).ready( function(e){
        //$('.imagetray').slick({
        //    infinite: true,
        //    slidesToShow: 4,
         //   slidesToScroll: 2
        //});
        $('.imagetray').slick({
                    dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 2,
            responsive: [
                {
                breakpoint: 1124,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
                },
                {
                breakpoint: 820,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
                },
                {
                breakpoint: 580,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]});

    var $window           = $(window),
        win_height_padded = $window.height() * 1.2,
        isTouch           = Modernizr.touch;

    $window.on('scroll', revealOnScroll);

    function revealOnScroll() {
        var scrolled = $window.scrollTop();
        $(".revealOnScroll:not(.animated)").each(function () {
          var $this     = $(this),
              offsetTop = $this.offset().top;
    
          if (scrolled + win_height_padded > offsetTop) {
              $this.addClass('animated ' + $this.data('animation'));
          }
        });
    }
   

});