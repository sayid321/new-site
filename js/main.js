function openMenu() {
     document.getElementById("toggleMenu").classList.toggle('menu-active')
     document.getElementById("toggleBtn").classList.toggle('active')
     document.getElementById("toggleBtn2").classList.toggle('active')

}

$('img.img-svg').each(function(){
     var $img = $(this);
     var imgClass = $img.attr('class');
     var imgURL = $img.attr('src');
     $.get(imgURL, function(data) {
       var $svg = $(data).find('svg');
       if(typeof imgClass !== 'undefined') {
         $svg = $svg.attr('class', imgClass+' replaced-svg');
       }
       $svg = $svg.removeAttr('xmlns:a');
       if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
         $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
       }
       $img.replaceWith($svg);
     }, 'xml');
});

$(document).ready(function(){
  $('.hero__slider').slick({
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 7,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1030,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          infinite: true,
        }
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
});