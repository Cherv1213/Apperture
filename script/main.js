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

