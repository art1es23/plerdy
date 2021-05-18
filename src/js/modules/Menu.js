'use strict';

const navMenu = (headerSelector, toggleMenuSelector) => {

    const header = document.querySelector(headerSelector),
        toggleMenu = document.querySelector(toggleMenuSelector);

    function toggleMobileMenu() {
        toggleMenu.classList.remove('menu--active');
        header.classList.remove('navigation--active');
        // document.body.classList.remove('scroll--hidden');

        toggleMenu.addEventListener('click', (e) => {
            toggleMenu.classList.toggle('menu--active');
            header.classList.toggle('navigation--active');
            // document.body.classList.toggle('scroll--hidden');
        });


    }

    toggleMobileMenu();
}

export default navMenu;