"use strict";
const sentinel = document.querySelector('.nav-sentinel');
const nav = document.getElementById('horizontal-menu');
const main = document.getElementsByTagName('main').item(0);
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting && entry.boundingClientRect.top < 0) {
            nav === null || nav === void 0 ? void 0 : nav.classList.add('stuck');
            main === null || main === void 0 ? void 0 : main.classList.add('underStuck');
        }
        else {
            nav === null || nav === void 0 ? void 0 : nav.classList.remove('stuck');
            main === null || main === void 0 ? void 0 : main.classList.remove('underStuck');
        }
    });
}, {
    threshold: [0]
});
observer.observe(sentinel);
