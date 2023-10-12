import {header, footer, createElement} from './initial.js';

function reservationSection(){
    const content = document.getElementById("content");

    const reserve = document.createElement("div");
    reserve.innerHTML = `<h1>Midnight Tacos</h1>
    <div class="reservation">
        <form action="">
            <h1>Make A Reservation</h1>
            <input type="date" id="date" />
            <input type="time">
            <input type="number" name="" id="" placeholder="How many People">
            <button>Reserve Table</button>
        </form>
        <div>
            <h1>located here</h1>
            <h2>123456 elms street drive</h2>
            <p>123-456-7890</p>
            <p>mrbeast@gmail.com</p>
            <h1>Hours of operation</h1>
            <p>Monday-Saturday</p>
            <p>6am to 2am</p>
            <p>Sundays</p>
            <p>Closed</p>
        </div>
    </div>`;    

    return reserve;
}

export default function resrvationLoad(){
    const content = document.getElementById("content");

    content.innerHTML = '';
    content.append(header(), reservationSection(), footer());
}