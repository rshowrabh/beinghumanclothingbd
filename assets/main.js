
$(document).ready(function(){
    hero_slider();
})

document.addEventListener("shopify:section:load", function() {
    hero_slider(); 
})

function hero_slider() {
    $('.slider-items').slick({ 
        speed:800,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows:true,
        dots:true,
        prevArrow:"<span type='button' class='arrow-prev'><img src='"+ arrow +"' alt='arrow'></span>",
        nextArrow:"<span type='button' class='arrow-next'><img src='"+ arrow +"' alt='arrow'></span>"
    }); 
}