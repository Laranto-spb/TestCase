window.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.swiper-container', {
        // Optional parameters
        loop: true,
        slidesPerView: 3,
        spaceBetween: 30,
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

})



