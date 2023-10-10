import {header, main, footer} from './home.js';

const content = document.getElementById("content");
content.append(header(), main(), footer());

console.log(header());
console.log(main());
console.log(footer());
