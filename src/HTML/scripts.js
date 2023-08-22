//View counter
const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("	https://ixdlv9i1l4.execute-api.us-east-1.amazonaws.com/default/visitor-count-api");
    let data = await response.json();
    counter.innerHTML = ` Views: ${data}`;
}

updateCounter();