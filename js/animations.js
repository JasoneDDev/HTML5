$(document).ready( function(e){

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