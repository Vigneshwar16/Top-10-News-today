# 🌍 Top 10 News Today

A sleek, responsive web app that fetches the **top 10 latest news headlines** live from a news API. Built using **HTML, CSS, and JavaScript**, with a modern card-style design.

---

## 🔹 Features

- Displays **Top 10 headlines** from the United States.  
- Shows **news images, titles, descriptions, and "Read more" links**.  
- **Responsive grid layout** — works on mobile, tablet, and desktop.  
- **Glassmorphism card style** with hover effects for a modern look.  
- **Automatic refresh** every 10 minutes to keep news updated.  
- Error handling — shows a message if the news API fails.  

---

## 🖥️ Demo

Check out a live demo here: https://github.com/Vigneshwar16/Top-10-News-today.git

> ⚠️ Note: The free NewsAPI key works on localhost. To run online, consider using a **CORS-friendly news API** like NewsData.io or GNews.

---

## 📂 Project Structure

Top-10-News-today/
├── index.html # Main HTML file
├── news.js # JavaScript for fetching and displaying news
├── news.css # Custom CSS for styling
└── README.md # Project documentation

yaml
Copy code

---

## ⚙️ How to Run Locally

1. Clone the repository:

git clone https://github.com/Vigneshwar16/Top-10-News-today.git
Navigate to the project folder:

bash
Copy code
cd Top-10-News-today
Open index.html using a local server (required for API requests):

Using VS Code Live Server extension, or

Using Python:

bash
Copy code
python -m http.server 8000
Then visit http://localhost:8000

Enjoy the latest news headlines!

🔧 How It Works
* news.js fetches news from a news API using your API key.

* The data is parsed and displayed as cards dynamically in the HTML.

* CSS handles responsive design, hover effects, and card styling.

* The page refreshes every 10 minutes automatically.

📌 Customization
Change the country by modifying the API URL in news.js:

js
Copy code
const ENDPOINT = `https://newsapi.org/v2/top-headlines?country=us&pageSize=10&apiKey=YOUR_KEY`;
Add categories (sports, technology, business, etc.) by adding &category=technology in the API URL.

💻 Technologies Used
HTML5

CSS3 (Flexbox, Grid, Glassmorphism)

JavaScript (ES6)

News API (NewsAPI.org)

📸 Screenshot

📫 License
This project is open-source under the MIT License. Feel free to modify and share!

Made with ❤️ by Vigneshwar M
