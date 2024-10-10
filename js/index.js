$(function () {
    //메인 스와이퍼 슬라이드
    var swiper = new Swiper(".first", {
        slidesPerView: 1,
        spaceBetween: 30,
        effect: "fade",
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    //신상품 스와이퍼 슬라이드
    var swiper2 = new Swiper(".second", {
        slidesPerView: 4,
        spaceBetween: 27,
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
    });

    

    

})


