//View counter
const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://api.zerocool.zone/visitor-count-api");
    let data = await response.json();
    counter.innerHTML = ` Views: ${data}`;
}

updateCounter();