'use strict'
import {makeHome} from './home.js';
import {makeMenu} from './menu.js';
import {makeContact} from './contact.js'
import './style.css';

const content = document.querySelector('#content');

function makeNav() {
	const nav = document.createElement('nav');
	const btns = [];
	for(let i = 0; i <3; i++) {
		btns.push(document.createElement('button'));
	}
	btns.forEach(btn => {
		btn.classList.add('btn_nav')
		btn.addEventListener('click', switchPage);
		nav.appendChild(btn);
	});
	btns[0].innerText = 'Home';
	btns[1].innerText = 'Menu';
	btns[2].innerText = 'Contact';

	return nav;
}

content.appendChild(makeNav());
content.appendChild(makeHome());

function switchPage(e) {
	(Array.from(content.children)).forEach(child => content.removeChild(child));
	content.appendChild(makeNav());
	let page = e.target.innerText;
	switch(true) {
		case(page === 'Home'):
			content.appendChild(makeHome());
			break;
		case(page === 'Menu'):
			content.appendChild(makeMenu());
			break;
		case(page === 'Contact'):
			content.appendChild(makeContact());
			break;
		default:
			return;
	}
}
