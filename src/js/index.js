import { getNews } from '~/js/api/index';
import { card } from '~/js//view/card';
import { controls } from '~/js//view/controls';

document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.button_load-more');
  const feedNews = document.getElementById('feed-news');
  const feedRow = document.getElementById('feed-row');
  const articles = [];
  const readingArticles = JSON.parse(localStorage.getItem('ReadingArticle')) || [];
  let page = 1;

  const showNews = () => {
    if (articles.length) {
      articles.forEach(article => {
        feedRow.insertAdjacentHTML('beforeend', card(article));
      });
      button.removeEventListener('click', showNews);
      button.style.display = 'none';
      feedNews.insertAdjacentHTML('beforeend', controls());
      feedNews.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  getNews()
    .then(articlesFromApi => {
      if (readingArticles.length) {
        articlesFromApi.map(article => article.read = readingArticles.some((item) => item === article._id));
      }
      articles.push(...articlesFromApi);
      button.innerText = `Показать новости (${articles.length})`;
    })
    .catch(() => feedNews.insertAdjacentHTML('beforeend', '<h2>Что- то пошло не так, попробуйте ещё раз</h2>'));

  button.addEventListener('click', showNews);

  feedNews.addEventListener('click', (event) => {
    const target = event.target;
    if (target.closest('[data-read-more-id]')) {
      const id = target.closest('[data-read-more-id]').dataset.readMoreId;
      readingArticles.push(id);
      localStorage.setItem('ReadingArticle', JSON.stringify(readingArticles));
    } else if (target.closest('[data-more-news]')) {
      page++
      getNews(page)
        .then(articlesFromApi => {
          articlesFromApi.map(article => article.read = readingArticles.some((item) => item === article.url));
          articles.push(...articlesFromApi);
          articles.forEach(article => {
            feedRow.insertAdjacentHTML('beforeend', card(article));
          });
      })
    }
  });
})

