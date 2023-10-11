import intialLoad from './modules/initial.js';
import menuLoad from './modules/menu.js';

intialLoad();

const menuBtn = document.getElementById("menu");

menuBtn.addEventListener("click", menuLoad);