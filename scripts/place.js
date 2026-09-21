// Footer

document.getElementById("currentyear").textContent =
    new Date().getFullYear();

document.getElementById("lastModified").textContent =
    `Last Modified: ${document.lastModified}`;

// Weather Data

const temperature = 25;
const windSpeed = 10;

// Wind Chill Function (Metric Formula)

function calculateWindChill(temp, speed) {
    return (
        13.12 +
        0.6215 * temp -
        11.37 * Math.pow(speed, 0.16) +
        0.3965 * temp * Math.pow(speed, 0.16)
    ).toFixed(1);
}

const windChill = document.getElementById("windchill");

if (temperature <= 10 && windSpeed > 4.8) {
    windChill.textContent =
        `${calculateWindChill(temperature, windSpeed)} °C`;
} else {
    windChill.textContent = "N/A";
}