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

// ======================================== //

let dayOffer = document.getElementById("dayOffer");
let hoursOffer = document.getElementById("hoursOffer");
let minOffer = document.getElementById("minOffer");
let secOffer = document.getElementById("secOffer");
let countDownDate = new Date("Dec 31, 2023 23:59:59");


let counter = setInterval(()=> {
    let timeNow = new Date().getTime();
    let di = countDownDate - timeNow;
    let days = Math.floor(di / (1000 * 60 * 60 * 24)) ;
    let hours = Math.floor(di % (1000 * 60 * 60 * 24) / (1000 * 60 * 60 ));
    let min = Math.floor(di % (1000 * 60 * 60) / (1000 * 60));
    let sec = Math.floor(di % (1000 * 60) / (1000));
    dayOffer.innerHTML = days < 10 ? `0${days}` : `${days}`;
    hoursOffer.innerHTML = hours < 10 ? `0${hours}` : `${hours}`;
    minOffer.innerHTML = min < 10 ? `0${min}` : `${min}`;
    secOffer.innerHTML = sec < 10 ? `0${sec}` : `${sec}`;
}, 1000)
