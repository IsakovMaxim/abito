	// НАСТРОЙКА БУРГЕРА
	const menuBtn = document.querySelector('.header__burger');
    const menu = document.querySelector('.header__navbar-panel');
	const menuCloseBtn = document.querySelector('.header__close-burger');
	menuBtn.addEventListener("click", () => {
        menu.classList.toggle("is-open");
	});

	menuCloseBtn.addEventListener("click", () => {
        menu.classList.toggle("is-open");
	});