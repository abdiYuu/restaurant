'use strict'

import Data from './menu.json'
import './style.css';


class Dish {
	constructor(name, image, description, price) {
		this.name = name;
		this.image = image;
		this.description = description;
		this.price = price;
	}
}


function importImages(r) {
	let images = {};
	r.keys().forEach((item, index) => {images[item.replace('./', '')] = r(item); });
	return images;
}

const images = importImages(require.context('./menu-images', false, /\.(png|jpg|jpeg|svg)$/))
	
function makeDishCard(dish) {
	const card = document.createElement('div');
	card.classList.add('card');
	const text_div = document.createElement('div');
	text_div.classList.add('card-text');
	const image_div = document.createElement('div');
	image_div.classList.add('card-image');

	const name = document.createElement('h2');
	const image = document.createElement('img');
	const description = document.createElement('p');
	const price = document.createElement('p')
	
	name.innerText = dish.name;
	image.src = dish.image;
	description.innerText = dish.description;
	price.innerText = dish.price;
	
	image_div.appendChild(image);
	text_div.appendChild(name);
	text_div.appendChild(description);
	text_div.appendChild(price);

	card.appendChild(image_div);
	card.appendChild(text_div);

	return card;
}


function makeMenu() {
	let menu = document.createElement('div');
	menu.classList.add('menu');
	for(let dish of Data) {
		let img = images[dish.image];
		dish = new Dish(dish.name, img, dish.description, dish.price);
		let card = makeDishCard(dish);
		menu.appendChild(card);
	}
	return menu;
}

export {makeMenu}
