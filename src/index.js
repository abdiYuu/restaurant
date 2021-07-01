'use strict'
import {makeHome} from './home.js';
import menuPage from './menu.js';
import contactPage from './contact.js'
import './style.css';

let content = document.querySelector('#content');

content.appendChild(makeHome());

