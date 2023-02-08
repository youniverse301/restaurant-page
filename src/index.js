import {loadContent, loadHome} from './modules/home';
import loadMenu from './modules/menu';
import { loadAbout } from './modules/about';
import { loadContact } from './modules/contact';
import { removeContent } from './modules/home';



loadContent();

function addNav() {
const homeBtn = document.getElementById('homeBtn');
const menuBtn = document.getElementById('menuBtn');
const aboutBtn = document.getElementById('aboutBtn')
const contactBtn = document.getElementById('contactBtn');
}

homeBtn.addEventListener('click', function() {
    removeContent();
    loadHome();
});
menuBtn.addEventListener('click', function() {
    removeContent();
    loadMenu();
});
aboutBtn.addEventListener('click', function() {
    removeContent();
    loadAbout();
});
contactBtn.addEventListener('click', function() {
    removeContent();
    loadContact();
});



