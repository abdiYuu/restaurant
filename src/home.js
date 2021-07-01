'use strict'

function makeHome() {
	const hero = document.createElement('div');
	hero.style.display = 'flex';
	hero.style.width = '75%';
	hero.style.maxWidth = '750px';


	const hero_img = document.createElement('div');
	hero_img.style.border = '1px solid red';
	const img = document.createElement('img');
	hero_img.appendChild(img);

	hero.appendChild(hero_img);

	const hero_txt = document.createElement('div');
	const about = document.createElement('p');
	about.innerText = 'Welcome to Krakatoa!';
	hero_txt.appendChild(about);

	hero.appendChild(hero_txt);

	return hero;
}





module.exports = makeHome;
