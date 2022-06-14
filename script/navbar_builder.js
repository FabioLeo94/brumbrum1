const headerEl = document.querySelector("header");
const navbarContent = [
    [0, "Home", "#home"],
    [1, "Negozio", "#"],
    [2, "Novità", "#"],
    [3, "Storia", "#"],
    [4, "Contattaci", "#"]
];

const logoPath = "/risorse/logo/logo-brumbrum1.jpg";

window.onload = () => {
    navbarBuilder(navbarContent);
}

// Creazione dinamica della navbar
function navbarBuilder(navCont) {
    let navEl = document.createElement("nav");
    let navUl = document.createElement("ul");
    let logoLink = document.createElement("a");
    let logoContainer = document.createElement("div");
    let navLogo = document.createElement("img");

    // rimozioni punti della lista
    navUl.style.listStyle = "none";

    // Settaggio logo
    navLogo.setAttribute("src", logoPath);
    navLogo.setAttribute("alt", "Logo azienda brumbrum™");
    logoLink.setAttribute("href", navCont[0][2])
    // creazione automatizzata della lista di link
    navCont.forEach(el => {
        let navLi = document.createElement("li");
        let navA = document.createElement("a");
        navA.setAttribute("identifier", el[0]);
        navA.innerHTML = el[1];
        navA.setAttribute("href", el[2]);
        navLi.appendChild(navA);
        navUl.appendChild(navLi);
    });

    // Montaggio barra di navigazione
    logoLink.appendChild(navLogo);
    logoContainer.appendChild(logoLink);
    navEl.appendChild(logoContainer);
    navEl.appendChild(navUl);
    headerEl.appendChild(navEl);
}