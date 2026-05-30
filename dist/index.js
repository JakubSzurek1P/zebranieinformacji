"use strict";
const verticalMenu = document.getElementById('vertical-menu');
const horizontalMenu = document.getElementById('horizontal-menu');
verticalMenu.style.top = `${horizontalMenu.offsetHeight - horizontalMenu.getBoundingClientRect().top + 10}px`;
verticalMenu.style.maxHeight = `${verticalMenu.querySelector('a').offsetHeight * 4 + 40}px`;
window.addEventListener('resize', (e) => {
    verticalMenu.style.top = `${horizontalMenu.offsetHeight - horizontalMenu.getBoundingClientRect().top + 10}px`;
    verticalMenu.style.maxHeight = `${verticalMenu.querySelector('a').offsetHeight * 4 + 50}px`;
});
