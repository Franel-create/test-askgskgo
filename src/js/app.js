'use strict';

import * as functions from './modules/functions.js';

functions.isWebp();

// Slider
document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slider__slides .slide');
    const dots = document.querySelectorAll('.slider__dots .slider__dot');

    let currentSlide = 0;
    const slideInterval = 5000;

    const setActiveSlide = (index) => {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
        currentSlide = index;
    };

    const nextSlide = () => {
        let nextSlideIndex = (currentSlide + 1) % slides.length;
        setActiveSlide(nextSlideIndex);
    };

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            setActiveSlide(index);
            clearInterval(autoSlideInterval);
            autoSlideInterval = setInterval(nextSlide, slideInterval);
        });
    });

    let autoSlideInterval = setInterval(nextSlide, slideInterval);

    setActiveSlide(currentSlide);
});


// Play video
const videoImg = document.getElementById('videoImg');
const videoIframe = document.getElementById('videoIframe');
if (videoImg) {
    videoImg.addEventListener('click', () => {
        videoIframe.classList.add('active');
        videoImg.style.display = 'none';
    });
}

// Burger menu
const burger = document.getElementById('burger');
if (burger) {
    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        document.getElementById('menu').classList.toggle('active');
        document.body.classList.toggle('_lock');
    });
}

// Popup open
const callBtn = document.getElementById('callBtn');
if (callBtn) {
    callBtn.addEventListener('click', () => {
        document.getElementById('popupCall').classList.toggle('active');
        document.getElementById('overlay').classList.toggle('active');
        document.body.classList.toggle('_lock');
    });
}


// Close popup
function closePopup(btn) {
    btn.addEventListener('click', () => {
        document.getElementById('popupCall').classList.remove('active');
        overlay.classList.remove('active');
        document.body.classList.remove('_lock');
    });
}
closePopup(document.getElementById('overlay'));
closePopup(document.getElementById('closeBtn'));


