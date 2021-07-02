'use strict'
import './style.css';

function makeContact() {
	let contact = document.createElement('div');
	contact.classList.add('contact');
	contact.innerText = 'This is the contact page';

	return contact;
}

export {makeContact};
