

$(document).ready(function(){
    //slide header index page
    $('.test_slider').slick({
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>'
    });

    //slide testimonial
    $('.slide_testimonials').slick({
        dots: true,
        arrows: false
      });
  });