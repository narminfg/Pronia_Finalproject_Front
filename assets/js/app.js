
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

  
  
  var lowerSlider = document.querySelector('#lower');
  var  upperSlider = document.querySelector('#upper');
  
  document.querySelector('#two').value=upperSlider.value;
  document.querySelector('#one').value=lowerSlider.value;
  
  var  lowerVal = parseInt(lowerSlider.value);
  var upperVal = parseInt(upperSlider.value);
  
  upperSlider.oninput = function () {
      lowerVal = parseInt(lowerSlider.value);
      upperVal = parseInt(upperSlider.value);
  
      if (upperVal < lowerVal + 4) {
          lowerSlider.value = upperVal - 4;
          if (lowerVal == lowerSlider.min) {
          upperSlider.value = 4;
          }
      }
      document.querySelector('#two').value=this.value
  };
  
  lowerSlider.oninput = function () {
      lowerVal = parseInt(lowerSlider.value);
      upperVal = parseInt(upperSlider.value);
      if (lowerVal > upperVal - 4) {
          upperSlider.value = lowerVal + 4;
          if (upperVal == upperSlider.max) {
              lowerSlider.value = parseInt(upperSlider.max) - 4;
          }
      }
      document.querySelector('#one').value=this.value
  };




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

      $('.brand-carousel').slick({
        autoplay: true,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        focusOnSelect: true,
        centerMode:false,
        infinite:true,
        arrows:false
        

        
      });
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
  $('.count').counterUp({
    delay:10,
    time:1200
});
  })




  
 

  