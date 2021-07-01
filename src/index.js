'use strict'
import {makeHome} from './home.js';
import menuPage from './menu.js';
import contactPage from './contact.js'
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
	console.log(e.target.innerText);
}
