import {header, footer, createElement} from './initial.js';

function reservationSection(){
    const content = document.getElementById("content");

    const reserve = document.createElement("div");
    reserve.className = "reservation-container"
    reserve.innerHTML = `
    <div class="reservation">
        <form action="">
            <div class="form-container">
                <h1>Make A Reservation</h1>
                <input type="date" id="date" />
                <input type="time">
                <input type="number" name="" id="" placeholder="How many People">
                <button type="submit">Reserve Table</button>
            </div>
        </form>
        <div class="contact-container">
        <h1>Contact Us</h1>
            <div>
                <h2>123456 elms street drive</h2>
                <p>123-456-7890</p>
                <p>mrbeast@gmail.com</p>
            </div>
            <div>
                <h2>Hours of operation</h2>
                <p>Monday-Saturday</p>
                <p>6am to 2am</p>
                <p>Sundays</p>
                <p>Closed</p>
            </div>
        </div>
    </div>`;    

    return reserve;
}

export default function resrvationLoad(){
    const content = document.getElementById("content");

    content.innerHTML = '';
    const wrapper = createElement("div");
    wrapper.className = "reservation-section";
    content.append(wrapper);
    wrapper.append(header(), reservationSection(), footer());
}