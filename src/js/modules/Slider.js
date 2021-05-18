import {
    TimelineMax,
    TweenMax,
    Back
} from 'gsap';

// Selectors
const sliderWrapper = document.getElementById('slider');
const sliderItems = document.querySelectorAll('.slider__item');

// Slider
export default class Slider {
    constructor() {
        this.currentItem = 0;
        this.init();

        this.indicatorsWrapper = document.querySelector('.slider-indicators');
        this.dots = document.querySelectorAll('.slider-indicators__item');
        this.galleryItems = document.querySelectorAll('.slider-gallery__item');
    }

    init() {
        this.inS(this.currentItem);
        this.createIndicators();
    }

    inS(index) {
        const item = sliderItems[index];
        const texts = item.querySelector('.hero__description');
        const timeline = new TimelineMax();

        TweenMax.set(item, {
            scale: .9
        });
        TweenMax.set(item, {
            left: '-100vw'
        });

        timeline
            .to(item, .5, {
                left: 0,
                delay: 1
            })
            .to(item, .5, {
                scale: 1
            })
            .staggerFrom(texts, .5, {
                y: 300,
                autoAlpha: 0,
                ease: Back.easeOut
            }, 0.2)
    }

    out(index, nextIndex) {
        const item = sliderItems[index];
        const texts = item.querySelector('.hero__description');
        const timeline = new TimelineMax();
        timeline
            .staggerTo(texts, .5, {
                y: 300,
                autoAlpha: 0,
                ease: Back.easeIn
            }, '-0.5')
            .to(item, .5, {
                scale: .9
            })
            .to(item, .5, {
                left: '100vw'
            })
            .call(this.inS, [nextIndex], this, '-=1.5')
            .set(texts, {
                clearProps: 'all'
            })
    }

    setActiveClass(arr, index, activeClass) {
        arr.forEach(item => {
            item.classList.remove(activeClass);
            if (parseInt(item.dataset.id) === index) item.classList.add(activeClass);
        });
    }

    changeCurrentItem(index) {
        this.out(this.currentItem, index);
        this.setActiveClass(this.galleryItems, index, 'slider-gallery__item--active');
        this.setActiveClass(this.dots, index, 'slider-indicators__item--active');
        this.currentItem = index;
    }

    next() {
        const next = this.currentItem !== sliderItems.length - 1 ? this.currentItem + 1 : 0;
        this.changeCurrentItem(next);
    }

    prev() {
        const prev = this.currentItem > 0 ? this.currentItem - 1 : sliderItems.length - 1;
        this.changeCurrentItem(prev);
    }

    createIndicators() {
        const indicatorsWrapper = document.createElement('div');
        indicatorsWrapper.classList.add('slider-indicators');
        sliderWrapper.append(indicatorsWrapper);

        sliderItems.forEach((item, index) => {
            const indicator = document.createElement('span');
            indicator.classList.add('slider-indicators__item');
            indicator.setAttribute('data-id', index);
            indicatorsWrapper.append(indicator);

            if (index === 0) indicator.classList.add('slider-indicators__item--active');

            indicator.addEventListener('click', (e) => {
                this.changeIndicators(e.target);
            })
        })
    }

    changeActive(item) {
        const id = parseInt(item.dataset.id);
        // if (id === this.currentItem) return false;
        const next = this.currentItem !== id ? id : this.currentItem;
        this.changeCurrentItem(next);
    }

    changeIndicators(item) {
        this.changeActive(item)
    }

    createGalleryNav(item) {
        this.changeActive(item)
    }

}