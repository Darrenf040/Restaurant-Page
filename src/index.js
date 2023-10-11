import homeLoad from './modules/home.js';
import menuLoad from './modules/menu.js';

homeLoad();

const menuBtn = document.getElementById("menu");

menuBtn.addEventListener("click", menuLoad);