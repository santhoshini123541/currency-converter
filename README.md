💱 Currency Converter
Live Demo: https://santhoshini123541.github.io/currency-converter/

A responsive and simple currency converter web application built using HTML, CSS, and JavaScript. This app uses the ExchangeRate-API to fetch real-time exchange rates between global currencies.

✨ Features
✅ Convert any currency to any other (supports 150+ currencies)

🌍 Displays national flags dynamically

🔁 Swap from/to currencies easily

🔢 Pre-fills the amount input with 100 by default

🔒 Input validation (no negatives or empty values)

📱 Fully responsive on mobile & desktop

🌐 Real-time API fetch using your own API key

🔧 Technologies Used
HTML5

CSS3 (Flexbox)

JavaScript (ES6+)

ExchangeRate-API

Flags API

Font Awesome Icons

🛠 How to Use Locally
Clone the repo:

bash
Copy code
git clone https://github.com/santhoshini123541/currency-converter.git
cd currency-converter
Open index.html in your browser.

You’re ready to convert currencies!

📁 Project Structure
bash
Copy code
currency-converter/
├── index.html         # Main HTML structure
├── style.css          # Styling and layout
├── script.js          # Core JS logic & API integration
├── codes.js           # Country-currency-flag mapping object
🗝️ API Details
API Used: ExchangeRate-API

Base URL:

bash
Copy code
https://v6.exchangerate-api.com/v6/YOUR_API_KEY/pair/FROM/TO/AMOUNT
Replace YOUR_API_KEY with your valid key in script.js.
