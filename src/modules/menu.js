import {header, footer, createElement} from './initial.js';


function menuContainer(){
    const menuContainer = createElement("div");

    const title = createElement("h1");
    title.textContent = "Menu";

    const tacos = createElement("h1");
    tacos.textContent = "Tacos";

    const tacosContainer = createElement("div");

    const taco1 = createElement("h2");
    taco1.textContent = "Famous Street Taco";
    const tacoImg1 = new Image();
    tacoImg1.src = "/src/assets/images/taco-image.jpg";
    const price1 = createElement("p");
    price1.textContent = "$12";
    const tacoInfo1 = createElement("p");
    tacoInfo1.textContent = "Comes with 3 tacos, your choice of beef, chick, or pulled pork, jalepenos and tomatoes";

    const taco2 = createElement("h2");
    taco2.textContent = "Plain Jane";
    const tacoImg2 = new Image();
    tacoImg2.src = "/src/assets/images/taco2-image.jpg";
    const price2 = createElement("p");
    price2.textContent = "$9";
    const tacoInfo2 = createElement("p");
    tacoInfo2.textContent = "3 Hard shell tacos with your choice of beef or chicken, shredded cheese, and jalepenos";

    tacosContainer.append(tacos, taco1, tacoImg1, price1, tacoInfo1, taco2, tacoImg2, price2, tacoInfo2);

    const sidesContainer = createElement("div");

    const sides = createElement("h1");
    sides.textContent = "Sides";

    const fries = createElement("h2");
    fries.textContent = "Loaded Fries";
    const friesImg = new Image();
    friesImg.src = "/src/assets/images/fries.jpg";
    const price3 = createElement("p");
    price3.textContent = "$4";
    const friesInfo = createElement("p");
    friesInfo.textContent = "Loaded fries with melted cheese, bacon, green onion, and chicken";



    const nachos = createElement("h2");
    nachos.textContent = "Loaded nachos";
    const nachosImg = new Image();
    nachosImg.src = "/src/assets/images/nachos.jpg";
    const price4 = createElement("p");
    price4.textContent = "$6";
    const nachosInfo = createElement("p");
    nachosInfo.textContent = "Loaded nachos with 3 layer cheese";
    
    sidesContainer.append(sides,fries, friesImg, price3, friesInfo, nachos, nachosImg, price4, nachosInfo);

    const bevContainer = createElement("div");

    const drinks = createElement("h1");
    drinks.textContent = "Drinks";

    const bev = createElement("h2");
    bev.textContent = "OrangeJuice";
    const bevImg = new Image();
    bevImg.src = "/src/assets/images/drink.jpg";
    const price5 = createElement("p");
    price5.textContent = "$2";
    const bevInfo = createElement("p");
    bevInfo.textContent = "Refreshing sunny orange juice";

    bevContainer.append(drinks, bev, bevImg, price5, bevInfo);

    menuContainer.append(title, tacosContainer,sidesContainer, bevContainer);
    return menuContainer;
}

export default function menuLoad(){
    const content = document.getElementById("content");
    content.innerHTML = '';
    
    content.append(header(), menuContainer(), footer());
}
