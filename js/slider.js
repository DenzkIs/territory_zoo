$(document).ready(function(){
    $(".popular_goods_slider").slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        infinity: true,
        speed: 800,
        nextArrow: $('.popular_goods_next_button'),
        prevArrow: $('.popular_goods_previous_button'),
    })
})
$(document).ready(function(){
    $(".new_goods_slider").slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        infinity: true,
        speed: 800,
        nextArrow: $('.new_goods_next_button'),
        prevArrow: $('.new_goods_previous_button'),
    })
})