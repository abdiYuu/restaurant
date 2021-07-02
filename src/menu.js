'use strict'

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

let dishes = [];
dishes.push((makeDishCard(new Dish('Molten Lava Cake', 'img', 'Delicious melted fudge', '1.99CAD'))));

function makeMenu() {
	let menu = document.createElement('div');
	menu.classList.add('menu');
	for(let dish of dishes) {
		menu.appendChild(dish);
		console.log(dish);
	}
	return menu;
}

export {makeMenu}
