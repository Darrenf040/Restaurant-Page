import homeLoad from './home.js';
import menuLoad from './menu.js';

homeLoad();

const menuBtn = document.getElementById("menu");

menuBtn.addEventListener("click", menuLoad);