// Footer Copyright Year

document.querySelector("#currentyear").textContent =
    new Date().getFullYear();


// Last Modified Date

document.querySelector("#lastModified").textContent =
    `Last Modified: ${document.lastModified}`;


// Hamburger Menu

const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");

    if (navigation.classList.contains("open")) {
        menuButton.textContent = "✖";
    } else {
        menuButton.textContent = "☰";
    }
});