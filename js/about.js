setTimeout(() => {
    const headingElement = document.querySelector("h1");
    const contentDiv = document.querySelector(".about");

    headingElement.innerHTML = headingElement.innerHTML.replace("The","Replaced");
    
    contentDiv.innerHTML = contentDiv.innerHTML.replace("The", "Replaced");
    contentDiv.innerHTML = contentDiv.innerHTML.replace("the ", "replaced");
}, 4000);