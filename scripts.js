document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menuIcon');
    const closeIcon = document.getElementsByClassName('close')[0];
    const swiper = new Swiper('.testimonialSwiper', {
        // Optional parameters
        loop: true,
       // effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        speed: 500,
        
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        
        // Pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        
        // Auto height
        autoHeight: true,
    });
    menuIcon.addEventListener('click', function() {
        document.querySelector('.menu').style.display = 'flex';
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'block';
    });
    closeIcon.addEventListener('click', function() {
        document.querySelector('.menu').style.display = 'none';
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    });
});