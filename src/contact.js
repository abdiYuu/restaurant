'use strict'
import './style.css';
import locationimg from './location.jpg';

function makeContact() {
	let contact = document.createElement('div');
	contact.classList.add('contact');

	let img_div = document.createElement('div');
	img_div.classList.add('contact_img');
	let img = new Image();
	img.src = locationimg;
	img_div.appendChild(img);

	let info_div = document.createElement('div');
	info_div.classList.add('contact_info');

	let info = document.createElement('p');
	info.innerText = 'Come on in and visit us at 123 Volcano Way, or book a reservation at 123-456-7890!'
	let hours = document.createElement('ul');
	hours.innerHTML = '<li>Mon-Fri: 8am-10pm</li><li>Sat:9am-5pm</li><li>Sun:Closed</li>'
	
	info_div.appendChild(info);
	info_div.appendChild(hours);

	contact.append(img_div);
	contact.append(info_div);
	return contact;
}

export {makeContact};
