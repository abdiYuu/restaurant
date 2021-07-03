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

	
function makeDishCard(dish) {
	const card = document.createElement('div');
	card.classList.add('card');
	const name = document.createElement('h2');
	const image = document.createElement('img');
	const description = document.createElement('p');
	const price = document.createElement('p')
	
	name.innerText = dish.name;
	image.src = dish.image;
	description.innerText = dish.description;
	price.innerText = dish.price;

	card.appendChild(name);
	card.appendChild(description);
	card.appendChild(price);

	return card;
}


function makeMenu() {
	let menu = document.createElement('div');
	menu.classList.add('menu');
	for(let dish of Data) {
		dish = new Dish(dish.name, dish.img, dish.description, dish.price);
		let card = makeDishCard(dish);
		menu.appendChild(card);
		console.log(dish, card);
	}
	return menu;
}

export {makeMenu}
