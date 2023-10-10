function createElement(ele){
    if(ele = "div"){
        return document.createElement("div");
    }
    else if(ele == "a"){
        return document.createElement("a");
    }
    else if(ele == "p"){
        return document.createElement("p");
    }
    else if(ele == "h1"){
        return document.createElement("h1");
    }
}

export function header(){
    const headerContainer = createElement("div");
    
    const home = createElement("a").textContent = "Home";
    const about = createElement("a").textContent = "Menu";
    const reservation = createElement("a").textContent = "Reservation";

    headerContainer.append(home,about,reservation)
    return headerContainer;
}
export function main(){
    const mainContainer = createElement("div");
    
    const title = createElement("h1").textContent = "Midnight Tacos";
    
    const aboutContainer = createElement("div");
    const aboutHeading = createElement("h1").textContent = "Discover Culinary Excellence";
    const aboutText = createElement("p").textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores iure ad qui laborum ipsam ipsum optio aut rerum accusantium, id quae consectetur eaque totam accusamus assumenda ullam perspiciatis necessitatibus saepe?"
    aboutContainer.append(aboutHeading, aboutText);

    const hoursContainer = createElement("div");
    const hoursHeading = createElement("h1").textContent = "Hours";
    const sun = createElement("p").textContent = "Sunday: Closed";
    const tue = createElement("p").textContent = "Tuesday: 6pm-2am";
    const wed = createElement("p").textContent = "Wednesday: 6pm-2am";
    const thu = createElement("p").textContent = "Thursday: 6pm-2am";
    const fri = createElement("p").textContent = "Friday: 6pm-2am";
    const sat = createElement("p").textContent = "Saturday: 6pm-2am";
    hoursContainer.append(hoursHeading,sun,tue,wed,thu,fri,sat);

    mainContainer.append(title,aboutContainer,hoursContainer);
    return mainContainer;
}

export function footer(){
    const footerContainer = document.createElement("div");

    const copyright = createElement("p").textContent = "Copyright &#169 Midnight Tacos";
    
    footerContainer.append(copyright);
    return footerContainer
}

