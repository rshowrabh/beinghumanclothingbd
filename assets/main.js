
$(document).ready(function(){
    main_slider();
    collection_slider()
})

document.addEventListener("shopify:section:load", function() {
    main_slider(); 
    collection_slider()
})

function main_slider() {
    $('.slider-items').slick({ 
        speed:800,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 4000,
        arrows:true,
        dots:true,
        prevArrow:"<span type='button' class='arrow-prev'><img src='"+ arrow +"' alt='arrow'></span>",
        nextArrow:"<span type='button' class='arrow-next'><img src='"+ arrow +"' alt='arrow'></span>"
    }); 
}
function collection_slider() {
    $('.slider-collections').slick({ 
        speed:800,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 4000,
        arrows:true,
        dots:false,
        prevArrow:"<span type='button' class='arrow-prev'><img src='"+ arrow +"' alt='arrow'></span>",
        nextArrow:"<span type='button' class='arrow-next'><img src='"+ arrow +"' alt='arrow'></span>"
    }); 
}