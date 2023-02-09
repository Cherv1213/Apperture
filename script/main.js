"use strict"

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if(iconMenu){
   iconMenu.addEventListener("click", function (e){
      document.body.classList.toggle('_lock');
      iconMenu.classList.toggle('_active');
      menuBody.classList.toggle('_active');
   });
}

if (iconMenu.classList.contains('_active')){
   document.body.classList.remove('_lock');
   iconMenu.classList.remove('_active');
   menuBody.classList.remove('_active');
}

$(document).ready(function(){
   $('.owl-carousel').owlCarousel({
       margin:100,
       loop:true,
        autoplay:true,
        autoplayTimeout:1000,
        autoplayHoverPause:true,
        responsive:{
           0:{
               items:2,
               margin:20,
           },
           500:{
            margin:50,
           },
           1000:{
               items:5,
           }
       }
   });
});