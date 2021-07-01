'use strict'
import makeHome from './home.js';
import menuPage from './menu.js';
import contactPage from './contact.js'

let content = document.querySelector('#content');

content.appendChild(makeHome());

