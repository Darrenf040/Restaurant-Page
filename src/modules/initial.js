import menuLoad from './menu.js';
import homeRefresh from './home.js';
import reservationLoad from './reservation.js';
import aboutSrc from '../assets/images/about.jpg';


export function createElement(ele){
    if(ele == "div"){
        return document.createElement("div");
    }
    else if(ele == "btn"){
        return document.createElement("button");
    }
    else if(ele == "p"){
        return document.createElement("p");
    }
    else if(ele == "h1"){
        return document.createElement("h1");
    }
    else if(ele == "h2"){
        return document.createElement("h2");
    }
    else if(ele == 'footer'){
        return document.createElement("footer");
    }

}

export function header(){
    const headerContainer = createElement("div");
    headerContainer.classList.add("header");

    const title = createElement("h1");
    title.textContent = "Midnight Tacos";

    const home = createElement("btn");
    home.textContent = "Home";
    home.id = "home";
    home.addEventListener("click", homeRefresh);

    const menu = createElement("btn");
    menu.textContent = "Menu";
    menu.id = "menu";
    menu.addEventListener("click", menuLoad);

    const reservation = createElement("btn");
    reservation.textContent = "Reservation";
    reservation.id = "Reservation"
    reservation.addEventListener("click", reservationLoad);

    const links = createElement("div");
    links.classList.add("links");
    links.append(home,menu,reservation);

    headerContainer.append(title, links)
    return headerContainer;
}
export function main(){
    const mainContainer = createElement("div");
    mainContainer.classList.add("main");
    
    
    const aboutContainer = createElement("div");
    aboutContainer.classList.add("about-us");

    const imageContainer = createElement("div");
    imageContainer.classList.add("image-container")
    const aboutImg = new Image();
    aboutImg.src = aboutSrc;
    imageContainer.append(aboutImg);

    const aboutHeading = createElement("h1");
    aboutHeading.textContent = "Discover Culinary Excellence";
    const aboutText = createElement("p");
    aboutText.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores iure ad qui laborum ipsam ipsum optio aut rerum accusantium, id quae consectetur eaque totam accusamus assumenda ullam perspiciatis necessitatibus saepe?";

    const textContent = createElement("div");
    textContent.append(aboutHeading,aboutText)
    textContent.classList.add("text-content");

    aboutContainer.append(textContent, imageContainer);

    mainContainer.append(aboutContainer);
    return mainContainer;
}

export function footer(){
    const footerContainer = createElement("footer");

    const copyright = createElement("p");
    copyright.textContent = "Copyright \u00A9 Midnight Tacos";

    footerContainer.append(copyright);
    return footerContainer
}

function homePage(){

    const allContent = createElement("div");

    allContent.classList.add("home-page");
    allContent.append(header(),main(),footer());
    return allContent
}

export default function homeLoad(){
    const content = document.getElementById("content")


    content.append(homePage());
}