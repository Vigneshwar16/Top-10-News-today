/* ---------- Top-10 News Fetcher ---------- */
/* Save this as news.js and include it with
   <script src="news.js"></script> in your HTML */

/* 1. Put your free NewsAPI key here
      (sign up at https://newsapi.org/register) */
const API_KEY = "3a9f1072af1a44259a6eba8bc45373c9";

/* 2. Build the endpoint URL:
      - country=us   -> headlines from United States
      - pageSize=10  -> top 10 articles */
const ENDPOINT =
    `https://newsapi.org/v2/top-headlines?country=us&pageSize=10&apiKey=${API_KEY}`;

/* Main function to fetch and display news */
async function loadNews() {
    try {
        const res = await fetch(ENDPOINT);
        const data = await res.json();

        if (!data.articles) {
            throw new Error("No articles returned");
        }

        const container = document.getElementById("news");
        container.innerHTML = ""; // clear any existing cards

        data.articles.forEach(article => {
            const card = document.createElement("article");
            card.className = "card";
            card.innerHTML = `
        <img src="${article.urlToImage || 'https://via.placeholder.com/600x400'}" alt="News image">
        <div class="card-content">
            <h2>${article.title}</h2>
            <p>${article.description || ''}</p>
            <a href="${article.url}" target="_blank">Read more →</a>
        </div>
      `;
            container.appendChild(card);
        });
    } catch (err) {
        const errorBox = document.getElementById("error");
        if (errorBox) {
            errorBox.textContent = "⚠️ Error loading news: " + err.message;
        }
        console.error("News fetch error:", err);
    }
}

/* 3. Load headlines when the page is ready */
document.addEventListener("DOMContentLoaded", loadNews);

/* 4. Optional: automatically refresh every 10 minutes */
setInterval(() => {
    loadNews();
}, 600000); // 600000 ms = 10 minutes
