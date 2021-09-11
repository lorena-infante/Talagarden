/*Glider*/
window.addEventListener('load', function(){
    new Glider(document.querySelector('.slider__list'), {
        slidesToShow: 1,
        dots: '.slider__indicators',
        arrows: {
          prev: '.slider__prev',
          next: '.slider__next'
        }
      });

})