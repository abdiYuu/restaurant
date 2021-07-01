'use strict'

import './style.css';
import HeroImage from './hero.jpg';

function makeHome() {
	const hero = document.createElement('div');
	hero.classList.add('hero');

	const img_div = document.createElement('div');
	img_div.classList.add('hero_img');
	
	const hero_image = new Image();
	hero_image.src = HeroImage;

	img_div.appendChild(hero_image);
	hero.appendChild(img_div);

	const hero_txt = document.createElement('div');
	hero_txt.classList.add('hero_txt');

	const about = document.createElement('p');
	about.innerText = 'Welcome to Molokai';
	hero_txt.appendChild(about);

	hero.appendChild(hero_txt);

	return hero;
}





export {makeHome};
