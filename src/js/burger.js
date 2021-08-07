	// НАСТРОЙКА БУРГЕРА
	const menuBtn = document.querySelector('.header__burger');
    const menu = document.querySelector('.header__navbar-panel');
	const menuCloseBtn = document.querySelector('.header__close-burger');
	menuBtn.addEventListener("click", () => {
        menu.classList.toggle("is-open");
		disabledScroll();
	});

	menuCloseBtn.addEventListener("click", () => {
        menu.classList.toggle("is-open");
		enabledScroll();
	});

	// НАСТРЙОКА СКРОЛЛА ПРИ ОТКРЫТИИ/ЗАКРЫТИИ МЕНЮ НА МОБИЛЬНОЙ ВЕРСИИ

	const disabledScroll = () => {
		const widthScroll = window.innerWidth - document.body.offsetWidth;
	
		document.body.dbScrollY = window.scrollY;
	   
		document.body.style.cssText = `
			position: fixed;
			top: ${-window.scrollY}px;
			left: 0;
			width: 100%;
			height: 100vh;
			overflow: hidden;
			padding-right: ${widthScroll}px;
		`;
	};
	
	const enabledScroll = () => {
		document.body.style.cssText = '';
		window.scroll({
			top: document.body.dbScrollY,   
		})
	};