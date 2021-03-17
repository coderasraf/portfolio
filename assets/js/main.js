const menu = document.querySelector('.menu-item');
const bars = document.querySelector('.bars');
const closeBtn = document.querySelector('.close-btn');
window.addEventListener('DOMContentLoaded',function(){
  bars.addEventListener('click', function(){
    menu.classList.toggle('active');
  })
  closeBtn.addEventListener('click',function(){
    menu.classList.remove('active');
  })
});
// fixed-menu-js code here
const headerTop = document.querySelector('.header-top');
document.addEventListener('DOMContentLoaded', function(){
   const pageYoffset = window.pageYOffset;
   const headerTopHeight = headerTop.offsetHeight;
  window.addEventListener('scroll', function(){
    if (window.pageYOffset > 100) {
      headerTop.classList.add('fixed-menu');
      document.body.style.paddingTop = headerTopHeight + 'px';
    }else{
      headerTop.classList.remove('fixed-menu');
      document.body.style.paddingTop = 0;
    }
    const topLink = document.querySelector('.top-link');
    if (window.pageYOffset > 300) {
      topLink.classList.add('top-link-active');
    }else{
      topLink.classList.remove('top-link-active');
    }
  })
})
  // filtering Isotope js code here
  $(document).ready(function(){
    $(".projects-filter-menu li").on('click',function(){
    $(".projects-filter-menu li").removeClass("active");
    $(this).addClass("active");

    var selector= $(this).attr("data-filter");
    $(".portfolio-lists").isotope({
      filter:selector,
    })
  })
    $('.right-carousel-area').owlCarousel({
      items:1,
      loop:true,
      nav:false,
      dots:false,
      navText:false,
      autoplay:true,
    });
    $('.testimonial-carousel ').owlCarousel({
      items:2,
      loop:true,
      nav:true,
      navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      dots:false,
      autoplay:true,
      responsiveClass:true,
      responsive:{
            0:{
                items:1,
                dots:false,
            },
            600:{
                items:1,
                dots:false,
            },
            1000:{
                items:2,
                loop:true
            }
        }
    })
    $('.previously-work-container').owlCarousel({
      items:4,
      loop:true,
      autoplay:true,
      nav:false,
      dots:false,
      responsiveClass:true,
      responsive:{
        0:{
          items: 1,
          loop:true,
          dots:false,
        },
        600:{
          items:3,
          loop:true,
        },
        1000:{
          items:4,
          loop:true,
          autoplay:true,
          nav:false,
        }
      }
    })
  });