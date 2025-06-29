# 💱 Currency Converter Web App

A simple and interactive **Currency Converter** web application that allows users to convert between different currencies using real-time exchange rates from the [Fawaz Ahmed Currency API](https://github.com/fawazahmed0/currency-api).

[![Live Demo](https://img.shields.io/badge/Live-Demo-green?style=for-the-badge)](https://currencyexchange110.netlify.app/)

---

## 🚀 Features

- 🌍 Supports conversion between **100+ currencies**
- 🔄 Dynamic currency dropdowns with **country flags**
- 🧮 Real-time conversion using latest exchange rates
- 💡 Automatically sets USD → PKR as default
- 📅 Uses the latest available date for accuracy
- 💻 Built with: HTML, CSS, and JavaScript (no frameworks)

---

## 🔧 Technologies Used

- **HTML**
- **CSS**
- **JavaScript**
- [Fawaz Ahmed Currency API](https://github.com/fawazahmed0/currency-api)
- [FlagsAPI](https://flagsapi.com)

---

## 📁 Project Folder Structure

```bash
currency-converter/
│
├── index.html            # Main HTML page containing layout & structure
├── style.css             # CSS file for styling the converter
├── app.js                # JavaScript logic for currency conversion & API calls
├── codes.js              # Object mapping currency codes to country codes (for flag API)
├── README.md             # Project overview and usage instructions
```

---

## ⚙️ How It Works

1. User selects the **source** and **target** currencies.
2. User enters the amount to convert.
3. On clicking the "Convert" button:
   - App fetches latest exchange rates using `fetch()` from:
     ```
     https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@{date}/v1/currencies/{from}.json
     ```
   - The exchange rate is extracted using:
     ```js
     rate = data[from][to];
     ```
   - Result is displayed in the format:
     ```
     1 USD = 278.15 PKR
     ```

---

## 🛠️ Setup Instructions

To run the project locally:

```bash
# 1. Clone this repository
git clone https://github.com/your-username/currency-converter.git
cd currency-converter
```

```bash
# 2. Open index.html in your browser
# Method 1: Double-click the file in your file explorer
# Method 2: Right-click > Open with > Choose your browser
```

✅ You should now see the **Currency Converter** web app running!

> ℹ️ This is a frontend-only project, so no server setup is required.
