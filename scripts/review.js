let reviews = Number(localStorage.getItem("reviews")) || 0;

reviews++;

localStorage.setItem("reviews", reviews);

document.querySelector("#reviewCount").textContent = reviews;

document.querySelector("#currentyear").textContent = new Date().getFullYear();

document.querySelector("#lastModified").textContent =
    `Last Modification: ${document.lastModified}`;