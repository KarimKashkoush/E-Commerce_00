let openNav = document.getElementById("openNav");
let openNavIqon = document.getElementById("openNavIqon");
let closeNav = document.getElementById("closeNav");
let navContent = document.getElementById("navContent");




openNav.onclick = () => {
    navContent.style.left = '0';
}

closeNav.onclick = () => {
    navContent.style.left = '-100%';
}


let swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
});
