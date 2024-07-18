const API_KEY = "ce2754c04cbb459aa7328102c1b7bf19";
const url = "https://newsapi.org/v2/everything?q=";

document.addEventListener('DOMContentLoaded', () => fetchNews("india"));

async function fetchNews(query) {
    const res = await fetch(`${url}${query}&apiKey=${API_KEY}`);
    const data = await res.json();
    console.log(data);
    bindData(data.articles);
}

function bindData(articles) {
    const cardsContainer = document.getElementById("cards-container");
    const newsCardTemplate = document.getElementById("template-news-card");

    cardsContainer.innerHTML = "";

    articles.forEach((article) => {
        if (!article.urlToImage) return;

        const cardClone = newsCardTemplate.content.cloneNode(true);
        // fillDataInCard(cardClone, article); // Uncomment and implement this line to fill card data
        cardsContainer.appendChild(cardClone);
    });
}
