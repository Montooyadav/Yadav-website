const API_KEY = "ce2754c04cbb459aa7328102c1b7bf19";
const url = "https://newsapi.org/v2/everything?q="

window.addEventListener('load', () => fetchNews("india"));

async function fetchNews(query) {
    const res = await fetch(`${url}${query}&apiKey=${API_KEY}`);
    const data = await res.json();
    console.log(data);
    bindData(data.articles);
}

function bindData(articles) {
    const cardscontainer =document.getElementById('cards-container');
    const newsCardTemplate = document.getElementById('template-news-card');

    cardscontainer.innerHTML = '';

    articles.forEach(article => {
        if(!article.urlToImage) return;
        const cardClone =newsCardTemplate.content.cloneNode(true);
        fillDataInCard(cardClone,article);
        cardscontainer.appendChild(cardClone);
    });

}
function fillDataInCard(cardClone,article) {
    const newsImage = cardClone.querySelector('#news-Img');
    const newsTitle = cardClone.querySelector('#news-title');
    const newsSource = cardClone.querySelector('#news-source');
    const newsDesc = cardClone.querySelector('#news-desc');


    newsImage.src = article.urlToImage;
    newsTitle.innerHTML = article.title;
    newsDesc.innerHTML = article.description;

    const date = new Data (article.publishedAt).toLocalString("en-US", {
        timeZone: "Asia/Jakarta"
    });
    
    newsSource.innerHTML = `${article.source.name} ${date}`;
}






