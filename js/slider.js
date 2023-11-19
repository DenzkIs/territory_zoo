$(document).ready(function(){
    $(".popular_goods_slider").slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        infinity: true,
        speed: 800,
        nextArrow: $('.popular_goods_next_button'),
        prevArrow: $('.popular_goods_previous_button'),
    });
    $(".new_goods_slider").slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        infinity: true,
        speed: 800,
        nextArrow: $('.new_goods_next_button'),
        prevArrow: $('.new_goods_previous_button'),
    });
    $(".shop_review_slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinity: true,
        dots: true,
        speed: 800,
        nextArrow: $('.shop_review_next_button'),
        prevArrow: $('.shop_review_previous_button'),
    })
})

