
var count = 1;

  function Plus() {
    count++;
    document.getElementById('count').value = count;
  }

  function Minus() {
    if (count > 1) {
      count--;
      document.getElementById('count').value = count;
    }
  }
  

  const dropDown = document.querySelector('.dropdown');
  const dropdownMenu = document.querySelector('.dropdown-menu');
  
  dropDown.addEventListener('click', function() {
    dropdownMenu.classList.toggle('show');
  });

  $(document).ready(function(){
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
      });
      $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        centerMode: true,
        focusOnSelect: true,
        centerMode:false,
        infinite:true

        
      });
  })


$(document).ready(function(){
    $(".owl-carousel").owlCarousel( {
        items:4,
        dots:true,
    });


      
  

   

    $('.main-slider-active').slick({
        fade: true,
        autoplay: true,
        speed: 1000,
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
        responsive: [{
            breakpoint: 992,
            settings: {
                arrows: false,
                dots: true
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                dots: false
            }
        }]
    });

    var rangeSlider = $(".price-range"),
    amount = $("#amount"),
    minPrice = rangeSlider.data('min'),
    maxPrice = rangeSlider.data('max');
    rangeSlider.slider({
    range: true,
    min: minPrice,
    max: maxPrice,
    values: [minPrice, maxPrice],
    slide: function (event, ui) {
        amount.val("$" + ui.values[0] + " - $" + ui.values[1]);
    }
  });
  amount.val(" $" + rangeSlider.slider("values", 0) +
    " - $" + rangeSlider.slider("values", 1));

})

 

 

  
 

  