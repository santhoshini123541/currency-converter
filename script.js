const API_KEY = "3a4b03c8c6de2a746b3ffbe4";
const BASE_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/pair`;

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

// Fill dropdowns with currency options
for (let select of dropdowns) {
  for (let code in countryList) {
    let option = document.createElement("option");
    option.value = code;
    option.textContent = code;

    if (select.name === "from" && code === "USD") option.selected = true;
    if (select.name === "to" && code === "INR") option.selected = true;

    select.appendChild(option);
  }

  // Update flag on dropdown change
  select.addEventListener("change", (e) => {
    updateFlag(e.target);
  });
}

// Function to update flag icon
function updateFlag(element) {
  const currCode = element.value;
  const countryCode = countryList[currCode];
  const img = element.parentElement.querySelector("img");
  img.src = `https://flagsapi.com/${countryCode}/flat/64.png`;
}

// Convert manually using ExchangeRate-API
async function updateExchangeRate() {
  let amtInput = document.querySelector(".amount input");
  let amtVal = parseFloat(amtInput.value);

  if (isNaN(amtVal) || amtVal <= 0) {
    amtVal = 1;
    amtInput.value = "1";
  }

  const from = fromCurr.value;
  const to = toCurr.value;

  if (from === to) {
    msg.innerText = `${amtVal} ${from} = ${amtVal} ${to}`;
    return;
  }

  const url = `${BASE_URL}/${from}/${to}/${amtVal}`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    if (data.result === "success") {
      const result = data.conversion_result;
      msg.innerText = `${amtVal} ${from} = ${result.toFixed(2)} ${to}`;
    } else {
      msg.innerText = "Conversion failed. Please check currencies.";
    }
  } catch (err) {
    msg.innerText = "Network error. Try again later.";
    console.error(err);
  }
}

// Button click = convert manually
btn.addEventListener("click", (e) => {
  e.preventDefault();
  updateExchangeRate();
});

// Set initial flags
window.addEventListener("load", () => {
  updateFlag(fromCurr);
  updateFlag(toCurr);
});




