const searchToggle = () => {
    const form = document.querySelector('.search-form');
    const input = document.querySelector(".search-form__input");
    const searchBtn = document.querySelector(".search-form__btn");

    const expand = () => {
        form.classList.toggle("search-form--active");
        searchBtn.classList.toggle("close");
        input.classList.toggle("square");
    };

    searchBtn.addEventListener("click", expand);
}

export default searchToggle;