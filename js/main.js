$(document).ready(function() {

    $('.header__mob--humburger').on('click', function() {
        $('.menu__list-mob').slideToggle(100, function(){
          if($(this).css('display') === 'none'){
          $(this).removeAttr('style')
          };
      });
    });

    $('.spoiler__link').click(function(){ 
      $(this).parent().children('div.spoiler__content').toggle('fast');
      return false;
    });

    $('.products__show-all').on('click', function() {
        $('.product__invisible').slideToggle(500, function(){
          if($(this).css('display') === 'none'){
          $(this).removeAttr('style')
          };
      });
    })
        
  	$('.flashcard__list').slick({
    dots: true,
    infinite: true,
    adaptiveHeight: true,
    prevArrow: '<img class="prev-left" src="img/prev-left.png">',
    nextArrow: '<img class="prev-right" src="img/prev-right.png">',
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          adaptiveHeight: true,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          adaptiveHeight: true,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.banner__list').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000, 
    adaptiveHeight: true,
    prevArrow: '<img class="left" src="img/banner-left.png">',
    nextArrow: '<img class="right" src="img/banner-right.png">',
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  });

  $('.about-us__list').slick({
    dots: true,
    infinite: true,
    speed: 300,
    prevArrow: '<img class="left-arrow" src="img/left-arrow.png">',
    nextArrow: '<img class="right-arrow" src="img/right-arrow.png">',
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
    {
    breakpoint: 9999,
    settings: "unslick"
    },
    {
      breakpoint: 767,
      setting:{
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
    ]
  });

  $('[data-toggle]').on('click', function(e){
    var tgt = $(this).data('target');
    if (tgt && $(tgt).length > 0) {
      $(tgt).toggleClass('collapse');

      e.preventDefault();
      return false;
    }
  });

  var $menu = $('#menu');
  $(window).scroll(function(){
    if ( $(this).scrollTop() > -400 && $menu.hasClass('normal') ) {
      $menu.removeClass('normal').addClass('fix');
    }
    else if($(this).scrollTop() <= -400 && $menu.hasClass('fix')) {
      $menu.removeClass('fix').addClass('normal');
    }
  });

  $(function(){
  $('.clikblock').click(function(){$('html,body').animate({scrollTop:$('.stopblock').offset().top}, 1200);});
  }); 
});




