import Slider from './modules/Slider';
import navMenu from './modules/Menu';
import searchToggle from './modules/search';

window.addEventListener('DOMContentLoaded', () => {
    console.log('GODNESS!!!');
    const btnNext = document.querySelector('.slider-arrows__item--next');
    const btnPrev = document.querySelector('.slider-arrows__item--prev');
    const galleryLinks = document.querySelectorAll('.slider-gallery__item');


    const slider = new Slider();

    // Events
    btnNext.addEventListener('click', () => slider.next());
    btnPrev.addEventListener('click', () => slider.prev());

    galleryLinks.forEach((item, index) => {
        if (index === 0) return item.classList.add('slider-gallery__item--active');

        item.addEventListener('click', (e) => slider.createGalleryNav(item))
    });

    navMenu('.navigation', '.menu');
    searchToggle();

    const moreText = document.querySelectorAll('.more');
    const btnMore = document.querySelectorAll('.hero__btn');

    btnMore.forEach((item, index) => {
        item.addEventListener('click', e => {
            moreText[index].classList.toggle('more--active');
        })
    });


});