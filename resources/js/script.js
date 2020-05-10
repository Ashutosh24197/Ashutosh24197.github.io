$(document).ready(function(){

    $('.js--section-qualification').waypoint(function(direction){
      if(direction == "down") {
        $('nav').addClass('stickey');
      }else{
        $('nav').removeClass('stickey');
      }
    }, {
      offset: '60px'
    });


/* Navigation scroll  */

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if(location.pathname.relace(/^\//,'')== this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if(target.length){
        $('html,body').animate({
          scrollTop: target.offset().top
        },1000);
        return false;
      }
    }
  });

});



   /* Animation  */

   $('.js-wp-1').waypoint(function(direction){
     $('.js-wp-1').addClass('animated fadeInUp');
   },{
     offset: '50%'
   });

   $('.js-wp-2').waypoint(function(direction){
     $('.js-wp-2').addClass('animated fadeInUp');
   },{
     offset: '50%'
   });

   $('.js-wp-3').waypoint(function(direction){
     $('.js-wp-3').addClass('animated fadeInUp');
   },{
     offset: '50%'
   });

   $('.js-wp-4').waypoint(function(direction){
     $('.js-wp-4').addClass('animated fadeInUp');
   },{
     offset: '50%'
   });

   $('.js-wp-5').waypoint(function(direction){
     $('.js-wp-5').addClass('animated fadeIn');
   },{
     offset: '50%'
   });

   $('.js-wp-6').waypoint(function(direction){
     $('.js-wp-6').addClass('animated fadeIn');
   },{
     offset: '50%'
   });

   /* mobile nav */

   $('.js-nav-icon').click(function(){
     var nav = $('.js-main-nav');
     var icon =$('js-nav-icon');

     nav.slideToggle(200);
     if(icon.html()=='menu'){
       icon.text('close');
     }else{
       icon.text('menu');
     }
   });
 /* typed animation */

 var typed = new Typed('.cotation', {
  strings: ["I am a Problem solver.", "I am a Web developer.","Happy to see you."],
 loop:true,
  typeSpeed: 50,
  backSpeed: 40,
  backDelay:1000,
});


});
