var xhr = new XMLHttpRequest();
var url = './health_article.json';

xhr.open('GET', url, true);
xhr.responseType = 'json';

xhr.onload = function() {
  const data = xhr.response;          // tout le JSON
  const articles = data.articles;     // le tableau dans le JSON
  const articlesDiv = document.getElementById('articles');

  articles.forEach(function(article) {
    const articleDiv = document.createElement('div');
    articleDiv.classList.add('article');

    const title = document.createElement('h2');
    title.textContent = article.title;

    const description = document.createElement('p');
    description.textContent = article.description;

    const waysHeader = document.createElement('h3');
    waysHeader.textContent = "Moyens d'atteindre :";

    const waysList = document.createElement('ul');
    article.ways_to_achieve.forEach(function(way) {
      const li = document.createElement('li');
      li.textContent = way;
      waysList.appendChild(li);
    });

    const benefitsHeader = document.createElement('h3');
    benefitsHeader.textContent = 'Avantages :';

    const benefitsList = document.createElement('ul');
    article.benefits.forEach(function(benefit) {
      const li = document.createElement('li');
      li.textContent = benefit;
      benefitsList.appendChild(li);
    });

    articleDiv.appendChild(title);
    articleDiv.appendChild(description);
    articleDiv.appendChild(waysHeader);
    articleDiv.appendChild(waysList);
    articleDiv.appendChild(benefitsHeader);
    articleDiv.appendChild(benefitsList);

    articlesDiv.appendChild(articleDiv);
  });
};

xhr.send();
