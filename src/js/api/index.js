const API_KEY = '6e524d283a494e14ab9e57815dee4a12';

export const getNews = async (page = 1, query = 'Russia') => {
  try {
    const response = await fetch(`https://newsapi.org/v2/everything?q=${query}&page=${page}&from=2021-02-20&sortBy=publishedAt&apiKey=${API_KEY}`);
    const articles = await response.json();
    return articles.articles;
  } catch (e) {
    console.error(e)
  }
}
