import {loadContent, loadHome} from './modules/home';
import loadMenu from './modules/menu';


loadContent();

function addNav() {
const homeBtn = document.getElementById('homeBtn');
const menuBtn = document.getElementById('menuBtn');
const aboutBtn = document.getElementById('aboutBtn')
const contactBtn = document.getElementById('contactBtn');
}

homeBtn.addEventListener('click', loadHome);

menuBtn.addEventListener('click', loadMenu);

