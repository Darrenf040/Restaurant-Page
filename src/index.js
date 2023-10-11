import {header, main, footer} from './home.js';
import menu from './menu.js';

const content = document.getElementById("content");
content.append(header(), main(), footer());

