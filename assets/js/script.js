
    "use strict";


$('.dropdown-toggle').dropdown();
AOS.init({
    duration: 1000,
  })

  $('.dv_keyInitiatives').owlCarousel({
    loop:false,
    margin:20,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true,
            touchDrag:true,
            mouseDrag:true,
        },
        600:{
            items:3,
            nav:true,
            touchDrag:true,
            mouseDrag:true,
        },
        900:{
            items:4,
            nav:true,
            loop:false,
            touchDrag:true,
            mouseDrag:true,
        },
        1100:{
            items:5,
            nav:false,
            loop:false,
            touchDrag:false,
            mouseDrag:false,
        }
    }
})

$(".dv_Approach").owlCarousel({
    loop: false,
    items: 1,
    dots: false,
    nav: false,
    touchDrag: false,
    mouseDrag: false
})

$(".dv_Stewardship").owlCarousel({
    loop: false,
    items: 1,
    dots: true,
    nav: true,
    touchDrag: true,
    mouseDrag: true
})
$(".v-nav-pills button").on("click", function() {
    var e = $(this).attr("data-slide");
    $(".dv_Approach").trigger("to.owl.carousel", e)
})


$('.dv_Policies').owlCarousel({
    loop:false,
    margin:20,
    responsiveClass:true,
    responsive:{
        0:{
            items:2,
            nav:true,
            touchDrag:true,
            mouseDrag:true,
        },
        600:{
            items:3,
            nav:true,
            touchDrag:true,
            mouseDrag:true,
        },
        900:{
            items:4,
            nav:true,
            touchDrag:true,
            mouseDrag:true,
        },
        1100:{
            items:6,
            nav:true,
            touchDrag:true,
            mouseDrag:true,
        }
    }
})

$(".mobile-nav-toggle").on("click", function(){
    return $(".mobile-nav-toggle .mobile-nav-line:nth-of-type(1)").toggleClass("mobile-nav-line--1"), 
    $(".mobile-nav-toggle .mobile-nav-line:nth-of-type(2)").toggleClass("mobile-nav-line--2"), 
    $(".mobile-nav-toggle .mobile-nav-line:nth-of-type(3)").toggleClass("mobile-nav-line--3"),
    $(".mobile-nav-toggle").toggleClass('mobile-nav-active'),
    $('#navbar').toggleClass('navbar-mobile');
})

