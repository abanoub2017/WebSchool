$(function(){
    
    'use strict';
    
    //typwrite
    var app = document.getElementById('app');

   var typewriter = new Typewriter(app, {
    loop: false
  });

typewriter.typeString('Hello World!')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Strings can be removed')
    .pauseFor(2500)
    .deleteChars(7)
    .typeString('Hello To Eschool Will Be A Good ')
    .start();
    
    
    //Testimonials carousel
        
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 2
  });
    
    
      
    // Nice Scrol
     $("html").niceScroll({ });
      $(".navbar-collapse").niceScroll({ });
   
    
    
    
    
   
    
    
    
    
    
    
    
    
});