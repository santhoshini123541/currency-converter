# 💱 Currency Converter

**Live Demo:** [https://santhoshini123541.github.io/currency-converter/](https://santhoshini123541.github.io/currency-converter/)

A simple and responsive currency converter app built using **HTML**, **CSS**, and **JavaScript**. It fetches real-time exchange rates using the **ExchangeRate-API** and supports 150+ currencies with country flags.

---

## ✨ Features

- 🔁 Convert between any two currencies
- 🏳️ Displays country flags based on selected currencies
- 💬 Shows live conversion result
- 🔃 Swap from/to currencies with a single click
- 🛡️ Handles invalid/empty input with default fallback
- 💻 Mobile-friendly and responsive UI
- ⚙️ Manual API integration with user API key

---

## 🧠 How It Works

- User selects the "From" and "To" currencies using dropdowns.
- On clicking **"Get Exchange Rate"**, an API call is made to:
  https://v6.exchangerate-api.com/v6/YOUR_API_KEY/pair/FROM/TO/AMOUNT
  
- The app then displays the converted amount using the returned `conversion_result`.

---

## 🛠 Technologies Used

- HTML5
- CSS3 (Flexbox)
- JavaScript (ES6)
- [ExchangeRate-API](https://www.exchangerate-api.com/)
- [Flags API](https://flagsapi.com/)
- [Font Awesome](https://fontawesome.com/)

---

## 📁 Folder Structure
currency-converter/
├── index.html # Main HTML layout
├── style.css # Styling and layout (responsive)
├── codes.js # Currency-country flag mapping
├── script.js # Core logic and API integration

---

## 🗝️ API Setup

> 🔒 You need to use your own API key from [https://www.exchangerate-api.com/](https://www.exchangerate-api.com/)

1. Replace `YOUR_API_KEY` in `script.js`:
   ```js
   const API_KEY = "your-api-key-here";
   const BASE_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/pair`;
2.The final URL looks like:

bash
Copy code
https://v6.exchangerate-api.com/v6/your-api-key/pair/USD/INR/100
🚀 How to Run Locally
Clone the repository:

bash
Copy code
git clone https://github.com/santhoshini123541/currency-converter.git
cd currency-converter
Open index.html in your browser.


