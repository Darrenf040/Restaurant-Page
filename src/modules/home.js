import homeLoad from '../modules/initial.js';

export default function load(){
    const content = document.getElementById("content");
    content.innerHTML = '';

    homeLoad();
}
