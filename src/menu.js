'use strict'

import './style.css';

function makeMenu() {
	let menu = document.createElement('div');
	menu.classList.add('menu');
	menu.innerText = 'This is the menu';

	return menu
}

export {makeMenu}
