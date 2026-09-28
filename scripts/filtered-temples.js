// 1. Footer Date Calculations
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

// 2. Mobile Hamburger Menu Toggle
const hambutton = document.getElementById("hambutton");
const navmenu = document.getElementById("navmenu");

hambutton.addEventListener("click", () => {
    navmenu.classList.toggle("open");
    // Switch burger icon to an 'X' close icon when open
    if (navmenu.classList.contains("open")) {
        hambutton.textContent = "❌";
    } else {
        hambutton.textContent = "☰";
    }
});

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
     {
        templeName: "Adelaide Australia Temple",
        location: "Marden, South Australia, Australia",
        dedicated: "2000, June, 15",
         area: 10700,
         imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/adelaide-australia-temple/adelaide-australia-temple-4359-main.jpg "
    },
    {
        templeName: "Madrid Spain Temple",
        location: "Madrid, Spain",
        dedicated: "1999, 3, 19",
        area: 45800,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/_temp/056-Madrid-Spain-Temple.jpg"
    },
    {
        templeName: "Manila Philippines Temple",
        location: "Quezon City, Metro Manila, Philippines",
        dedicated: "1984, 9, 25",
        area: 26683,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/_temp/029-Manila-Philippines-Temple.jpg"
    }
        

        

    
];


// 4. Card Generation Engine
const gallery = document.querySelector(".gallery");
const galleryTitle = document.getElementById("gallery-title");

function displayTemples(filteredTemples) {
    gallery.innerHTML = ""; // Clear current cards

    filteredTemples.forEach(temple => {
        const card = document.createElement("section");

        // Lazy load images natively for performance optimization
        card.innerHTML = `
            <h3>${temple.templeName}</h3>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Size:</strong> ${temple.area.toLocaleString()} sq ft</p>
            <img src="${temple.imageUrl}" alt="${temple.templeName} Temple" loading="lazy">
        `;

        gallery.appendChild(card);
    });
}

// 5. Filtering Logical System
const navLinks = document.querySelectorAll("#navmenu a");

navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        // Update styling of active link
        navLinks.forEach(l => l.classList.remove("active"));
        link.classList.add("active");

        const filter = link.textContent;
        galleryTitle.textContent = filter; // Sync page heading

        let filteredList = [];

        switch (filter) {
            case "Old":
                // Dedicated prior to the year 1900
                filteredList = temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
                break;
            case "New":
                // Dedicated after the year 2000
                filteredList = temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
                break;
            case "Large":
                // Area larger than 90,000 square feet
                filteredList = temples.filter(t => t.area > 90000);
                break;
            case "Small":
                // Area smaller than 10,000 square feet
                filteredList = temples.filter(t => t.area < 10000);
                break;
            default:
                // "Home" displays everything
                filteredList = temples;
                break;
        }

        displayTemples(filteredList);

        // Auto-close hamburger menu on mobile after clicking a filter selection
        if (window.innerWidth < 768) {
            navmenu.classList.remove("open");
            hambutton.textContent = "☰";
        }
    });
});

// Render everything on initial home load
displayTemples(temples);
