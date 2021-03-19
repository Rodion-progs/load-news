const showBackgroundImage = (img) => {
  return img !== null ? `url('${img}'` : 'linear-gradient(133deg, rgba(255,255,255,1) 0%, rgba(120,86,255,1) 100%);';
}
const showReadOrNo = (read) => {
  return read ? 'Прочитанно' : 'Непрочитано';
}
const localeDate = (date) => {
  return new Date(date).toLocaleString();
}

export const card = (article) => {
  return `
    <div class="card">
        <div class="card__img" style="background-image: ${showBackgroundImage(article.media ? article.media : article.media_content)}">
            <div class="card__img-gradient"></div>
        </div>
      <div class="card__body">
        <p>${article.title}</p>
        <p>${article.author ? article.author : ''}</p>  
        <p>${localeDate(article.published_date)}</p>  
        <p></p>  
      </div>
      <div class="card__footer">
        <a href="${article.link}" target="_blank" class="card__read-more" data-read-more-id="${article._id}">Подробнее</a>
        <div class="card__read-info">
        ${showReadOrNo(article.read)}
        <svg 
          xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
          x="0px" y="0px"
          width="20px" 
          height="20px" 
          viewBox="0 0 78.369 78.369" 
          class="card__icon ${article.read ? 'card__icon_read' : 'card__icon_no-read'}"
          style="enable-background:new 0 0 78.369 78.369;"
          xml:space="preserve">
          <path d="M78.049,19.015L29.458,67.606c-0.428,0.428-1.121,0.428-1.548,0L0.32,40.015c-0.427-0.426-0.427-1.119,0-1.547l6.704-6.704
            c0.428-0.427,1.121-0.427,1.548,0l20.113,20.112l41.113-41.113c0.429-0.427,1.12-0.427,1.548,0l6.703,6.704
            C78.477,17.894,78.477,18.586,78.049,19.015z"/>
        </svg>
        </div>
      </div>
    </div>
  `
}
