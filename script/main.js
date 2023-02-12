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


/*-------------------------------------------------------------------------------------------------*/
const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_active');
			} else {
				if (!animItem.classList.contains('_anim-no-hide')) {
					animItem.classList.remove('_active');
				}
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}

	setTimeout(() => {
		animOnScroll();
	}, 300);
}