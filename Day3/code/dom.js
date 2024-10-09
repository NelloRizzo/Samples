"use strict";
console.log("Script added");
window.onload = () => {
    console.log("Window loaded");
    let body = document
        .getElementsByTagName("body")[0];
    console.log(body);
    let h1 = document.createElement("h1");
    console.log(h1);
    let text = document.createTextNode("Titolo della Pagina");
    console.log(text);
    h1.appendChild(text);
    console.log(h1);
    body.appendChild(h1);
    console.log(body);
    h1.addEventListener("mouseenter", () => h1.setAttribute("class", "red"));
    h1.addEventListener("mouseleave", () => h1.removeAttribute("class"));
};
