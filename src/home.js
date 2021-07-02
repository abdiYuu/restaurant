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

	const title = document.createElement('h1');
	title.innerText = 'Molokai';

	const para = document.createElement('p');
	para.innerText = 'Serving the hottest dishes on this side of the equator. Our mission is to make sure each customer leaves with the satisfaction of a hearty meal.';

	hero_txt.appendChild(title);
	hero_txt.appendChild(para);

	hero.appendChild(hero_txt);

	return hero;
}





export {makeHome};
