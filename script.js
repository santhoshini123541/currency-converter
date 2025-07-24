const BASE_URL = "https://api.frankfurter.app/latest";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

// Populate currency dropdowns
for (let select of dropdowns) {
  for (let code in countryList) {
    const option = document.createElement("option");
    option.value = code;
    option.textContent = code;

    if (select.name === "from" && code === "USD") option.selected = true;
    if (select.name === "to" && code === "INR") option.selected = true;

    select.append(option);
  }

  // Flag change on select
  select.addEventListener("change", (e) => {
    const code = e.target.value;
    const countryCode = countryList[code];
    const img = e.target.parentElement.querySelector("img");
    img.src = `https://flagsapi.com/${countryCode}/flat/64.png`;
  });
}

// Convert currency using API
async function updateExchangeRate() {
  let amountInput = document.querySelector(".amount input");
  let amtVal = parseFloat(amountInput.value);

  if (isNaN(amtVal) || amtVal <= 0) {
    amtVal = 1;
    amountInput.value = "1";
  }

  const from = fromCurr.value;
  const to = toCurr.value;

  if (from === to) {
    msg.innerText = `${amtVal} ${from} = ${amtVal} ${to}`;
    return;
  }

  const URL = `${BASE_URL}?amount=${amtVal}&from=${from}&to=${to}`;

  try {
    const res = await fetch(URL);
    const data = await res.json();
    console.log(data);
    const rate = data.rates[to];

    msg.innerText = `${amtVal} ${from} = ${rate.toFixed(2)} ${to}`;
  } catch (err) {
    msg.innerText = "Conversion failed. Try again.";
    console.error("Error fetching rate:", err);
  }
}

// Event listeners
btn.addEventListener("click", (e) => {
  e.preventDefault();
  updateExchangeRate();
});

window.addEventListener("load", updateExchangeRate);
