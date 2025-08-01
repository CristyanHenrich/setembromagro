function scrollCarousel(direction) {
    const carousel = document.getElementById("benefits-carousel");
    const scrollAmount = 300;
    carousel.scrollBy({
        left: direction * scrollAmount,
        behavior: "smooth",
    });
}

const images = [
    "./img/sitio4.jpeg",
    "./img/sitio3.jpeg",
    "./img/sitio5.jpeg",
    "./img/sitio2.jpeg",
    "./img/sitio1.jpeg",
];

let current = 0;

function showImage(index) {
    const img = document.getElementById("carousel-image");
    img.src = images[index];
}

function nextImage() {
    current = (current + 1) % images.length;
    showImage(current);
}

function prevImage() {
    current = (current - 1 + images.length) % images.length;
    showImage(current);
}

setInterval(nextImage, 5000);

document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper(".teamSwiper", {
        slidesPerView: 1.1,
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
            1280: {
                slidesPerView: 4,
            },
        },
        autoplay: {
            delay: 1700,
            disableOnInteraction: false,
        },
    });
});
