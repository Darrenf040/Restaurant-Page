import {header, footer, createElement} from './initial.js';


function menuContainer(){
    const menuContainer = createElement("div");
    menuContainer.classList.add("menu");

    const title = createElement("h1");
    title.textContent = "Menu";

    const tacos = createElement("h1");
    tacos.textContent = "Tacos";

    const tacosContainer = createElement("div");

    const tacoCard1 = createElement("div");
    tacoCard1.classList.add("card");

    
    const taco1 = createElement("h2");
    taco1.textContent = "Famous Street Taco";
    const tacoImg1 = new Image();
    tacoImg1.src = "/src/assets/images/taco-image.jpg";
    const imgContainer1 = createElement("div");
    imgContainer1.append(tacoImg1)
    const taco1left = createElement("div");
    taco1left.append(taco1,imgContainer1)

    const taco1right = createElement("div");
    const price1 = createElement("p");
    price1.textContent = "$12";
    const tacoInfo1 = createElement("p");
    tacoInfo1.textContent = "Comes with 3 tacos, your choice of beef, chick, or pulled pork, jalepenos and tomatoes";
    taco1right.append(price1, tacoInfo1);
    
    tacoCard1.append(taco1left,taco1right);

    const tacoCard2 = createElement("div");
    tacoCard2.classList.add("card");

    const taco2left = createElement("div");
    const taco2 = createElement("h2");
    taco2.textContent = "Plain Jane";
    const tacoImg2 = new Image();
    tacoImg2.src = "/src/assets/images/taco2-image.jpg";
    const imgContainer2 = createElement("div");
    imgContainer2.append(tacoImg2);
    taco2left.append(taco2, imgContainer2);

    const taco2right = createElement("div");
    const price2 = createElement("p");
    price2.textContent = "$9";
    const tacoInfo2 = createElement("p");
    tacoInfo2.textContent = "3 Hard shell tacos with your choice of beef or chicken, shredded cheese, and jalepenos";
    taco2right.append(price2,tacoInfo2);

    tacoCard2.append(taco2left,taco2right);

    tacosContainer.append(tacos, tacoCard1, tacoCard2);

    const sidesContainer = createElement("div");
    const sides = createElement("h1");
    sides.textContent = "Sides";

    const friesCard = createElement("div");
    friesCard.classList.add("card");

    const fries = createElement("h2");
    fries.textContent = "Loaded Fries";
    const friesImg = new Image();
    friesImg.src = "/src/assets/images/fries.jpg";
    const imgContainer3 = createElement("div");
    imgContainer3.append(friesImg);
    const friesLeft = createElement("div");
    friesLeft.append(fries,imgContainer3);

    const price3 = createElement("p");
    price3.textContent = "$4";
    const friesInfo = createElement("p");
    friesInfo.textContent = "Loaded fries with melted cheese, bacon, green onion, and chicken";
    const friesRight = createElement("div");
    friesRight.append(price3, friesInfo);

    friesCard.append(friesLeft,friesRight);

    const nachosCard = createElement("div");
    nachosCard.classList.add("card");

    const nachos = createElement("h2");
    nachos.textContent = "Loaded nachos";
    const nachosImg = new Image();
    nachosImg.src = "/src/assets/images/nachos.jpg";
    const imgContainer4 = createElement("div");
    imgContainer4.append(nachosImg);
    const nachosLeft = createElement("div");
    nachosLeft.append(nachos,imgContainer4);

    const price4 = createElement("p");
    price4.textContent = "$6";
    const nachosInfo = createElement("p");
    nachosInfo.textContent = "Loaded nachos with 3 layer cheese";
    const nachosRight = createElement("div");
    nachosRight.append(price4,nachosInfo)

    nachosCard.append(nachosLeft,nachosRight);

    sidesContainer.append(sides, friesCard, nachosCard);

    const bevContainer = createElement("div");

    const drinkCard = createElement("div");
    drinkCard.classList.add("card");

    const drinks = createElement("h1");
    drinks.textContent = "Drinks";

    const bev = createElement("h2");
    bev.textContent = "OrangeJuice";
    const bevImg = new Image();
    bevImg.src = "/src/assets/images/drink.jpg";
    const imgContainer5 = createElement("div");
    imgContainer5.append(bevImg);
    const bevLeft = createElement("div");
    bevLeft.append(bev, imgContainer5)

    const price5 = createElement("p");
    price5.textContent = "$2";
    const bevInfo = createElement("p");
    bevInfo.textContent = "Refreshing sunny orange juice";
    const bevRight = createElement("div");
    bevRight.append(price5,bevInfo);
    
    drinkCard.append(bevLeft,bevRight);

    bevContainer.append(drinks, drinkCard);

    menuContainer.append(title, tacosContainer,sidesContainer, bevContainer);
    
    return menuContainer;
}

export default function menuLoad(){
    const content = document.getElementById("content");
    content.innerHTML = '';
    
    content.append(header(), menuContainer(), footer());
}
