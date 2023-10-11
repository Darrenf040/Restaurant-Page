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

}

export function header(){
    const headerContainer = createElement("div");
    
    const home = createElement("btn");
    home.textContent = "Home";
    home.id = "home";

    const about = createElement("btn");
    about.textContent = "Menu";
    about.id = "menu";

    const reservation = createElement("btn");
    reservation.textContent = "Reservation";
    reservation.id = "Reservation"

    headerContainer.append(home,about,reservation)
    return headerContainer;
}
export function main(){
    const mainContainer = createElement("div");
    
    const title = createElement("h1");
    title.textContent = "Midnight Tacos";
    
    const aboutContainer = createElement("div");

    const aboutHeading = createElement("h1");
    aboutHeading.textContent = "Discover Culinary Excellence";
    
    const aboutText = createElement("p");
    aboutText.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores iure ad qui laborum ipsam ipsum optio aut rerum accusantium, id quae consectetur eaque totam accusamus assumenda ullam perspiciatis necessitatibus saepe?";

    aboutContainer.append(aboutHeading, aboutText);

    const hoursContainer = createElement("div");
    const hoursHeading = createElement("h1");
    hoursHeading.textContent = "Hours";
    
    const sun = createElement("p");
    sun.textContent = "Sunday: Closed";

    const tue = createElement("p");
    tue.textContent = "Tuesday: 6pm-2am";

    const wed = createElement("p");
    wed.textContent = "Wednesday: 6pm-2am";

    const thu = createElement("p");
    thu.textContent = "Thursday: 6pm-2am";

    const fri = createElement("p")
    fri.textContent = "Friday: 6pm-2am";

    const sat = createElement("p")
    sat.textContent = "Saturday: 6pm-2am";

    hoursContainer.append(hoursHeading,sun,tue,wed,thu,fri,sat);

    mainContainer.append(title,aboutContainer,hoursContainer);
    return mainContainer;
}

export function footer(){
    const footerContainer = createElement("div");

    const copyright = createElement("p");
    copyright.textContent = "Copyright \u00A9 Midnight Tacos";

    footerContainer.append(copyright);
    return footerContainer
}

export default function homeLoad(){
    const content = document.getElementById("content")
    content.append(header(), main(), footer());
}