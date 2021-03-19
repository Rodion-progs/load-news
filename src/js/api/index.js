const API_KEY = 'ef232ccb21mshf4e60b4956c0862p1fc9abjsnc3d2b0e3204d';
const pageSize = 20;
export const getNews = async (page = 1, query = 'Russia') => {
  try {
    const response = await fetch(
`https://newscatcher.p.rapidapi.com/v1/search_free?q=Elon%20Musk&page=${page}&lang=ru&page_size=${pageSize}&media=True`,
  {
        "method": "GET",
        "headers": {
        "x-rapidapi-key": API_KEY,
        "x-rapidapi-host": "newscatcher.p.rapidapi.com"
      }
    });
    const articles = await response.json();
    return articles.articles;
  } catch (e) {
    console.error(e)
  }
}
