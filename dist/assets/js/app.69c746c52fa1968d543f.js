!function(e){function n(n){for(var r,c,i=n[0],l=n[1],d=n[2],u=0,p=[];u<i.length;u++)c=i[u],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&p.push(a[c][0]),a[c]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(s&&s(n);p.length;)p.shift()();return o.push.apply(o,d||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],r=!0,i=1;i<t.length;i++){var l=t[i];0!==a[l]&&(r=!1)}r&&(o.splice(n--,1),e=c(c.s=t[0]))}return e}var r={},a={0:0},o=[];function c(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.m=e,c.c=r,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)c.d(t,r,function(n){return e[n]}.bind(null,r));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="/";var i=window.webpackJsonp=window.webpackJsonp||[],l=i.push.bind(i);i.push=n,i=i.slice();for(var d=0;d<i.length;d++)n(i[d]);var s=l;o.push([222,1]),t()}({222:function(e,n,t){t(223),e.exports=t(516)},512:function(e,n,t){var r=t(513);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};t(514)(r,a);r.locals&&(e.exports=r.locals)},513:function(e,n,t){},516:function(e,n,t){"use strict";t.r(n);var r=t(147),a=t.n(r),o=t(148),c=t.n(o),i=t(220),l=t.n(i),d=t(221),s=t.n(d),u=t(149),p=t.n(u),f=t(36),v=t.n(f),h="ef232ccb21mshf4e60b4956c0862p1fc9abjsnc3d2b0e3204d",g=function(){var e=s()(p.a.mark((function e(){var n,t,r,a,o=arguments;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.length>0&&void 0!==o[0]?o[0]:1,o.length>1&&void 0!==o[1]?o[1]:"Russia",e.prev=2,e.next=5,fetch(v()(t="https://newscatcher.p.rapidapi.com/v1/search_free?q=Интерактивные%20обучающие%20технологии&page=".concat(n,"&lang=ru&page_size=")).call(t,20,"&media=True"),{method:"GET",headers:{"x-rapidapi-key":h,"x-rapidapi-host":"newscatcher.p.rapidapi.com"}});case 5:return r=e.sent,e.next=8,r.json();case 8:return a=e.sent,e.abrupt("return",a.articles);case 12:e.prev=12,e.t0=e.catch(2),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(){return e.apply(this,arguments)}}(),m=function(e){var n,t,r,a,o,c,i,l,d,s;return v()(n=v()(t=v()(r=v()(a=v()(o=v()(c=v()(i='\n    <div class="card">\n        <div class="card__img" style="background-image: '.concat((s=e.media?e.media:e.media_content,null!==s?"url('".concat(s,"'"):"linear-gradient(133deg, rgba(255,255,255,1) 0%, rgba(120,86,255,1) 100%);"),'">\n            <div class="card__img-gradient"></div>\n        </div>\n      <div class="card__body">\n        <p>')).call(i,e.title,"</p>\n        <p>")).call(c,e.author?e.author:"","</p>  \n        <p>")).call(o,(d=e.published_date,new Date(d).toLocaleString()),'</p>  \n        <p></p>  \n      </div>\n      <div class="card__footer">\n        <a href="')).call(a,e.link,'" target="_blank" class="card__read-more" data-read-more-id="')).call(r,e._id,'">Подробнее</a>\n        <div class="card__read-info">\n        ')).call(t,(l=e.read,l?"Прочитанно":"Непрочитано"),'\n        <svg \n          xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" \n          x="0px" y="0px"\n          width="20px" \n          height="20px" \n          viewBox="0 0 78.369 78.369" \n          class="card__icon ')).call(n,e.read?"card__icon_read":"card__icon_no-read",'"\n          style="enable-background:new 0 0 78.369 78.369;"\n          xml:space="preserve">\n          <path d="M78.049,19.015L29.458,67.606c-0.428,0.428-1.121,0.428-1.548,0L0.32,40.015c-0.427-0.426-0.427-1.119,0-1.547l6.704-6.704\n            c0.428-0.427,1.121-0.427,1.548,0l20.113,20.112l41.113-41.113c0.429-0.427,1.12-0.427,1.548,0l6.703,6.704\n            C78.477,17.894,78.477,18.586,78.049,19.015z"/>\n        </svg>\n        </div>\n      </div>\n    </div>\n  ')};document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".button_load-more"),n=document.getElementById("feed-news"),t=document.getElementById("feed-row"),r=[],o=JSON.parse(localStorage.getItem("ReadingArticle"))||[],i=1;g().then((function(n){o.length&&c()(n).call(n,(function(e){return e.read=o.some((function(n){return n===e._id}))})),r.push.apply(r,a()(n)),e.innerText="Показать новости (".concat(r.length,")")})).catch((function(){return n.insertAdjacentHTML("beforeend","<h2>Что- то пошло не так, попробуйте ещё раз</h2>")})),e.addEventListener("click",(function a(){r.length&&(r.forEach((function(e){t.insertAdjacentHTML("beforeend",m(e))})),e.removeEventListener("click",a),e.style.display="none",n.insertAdjacentHTML("beforeend",'\n    <div class="controls">\n      <button class="button button_primary" data-more-news>Показать ещё</button>\n    </div>\n  '),n.scrollIntoView({behavior:"smooth",block:"start"}))})),n.addEventListener("click",(function(e){var n=e.target;if(n.closest("[data-read-more-id]")){var d=n.closest("[data-read-more-id]").dataset.readMoreId;o.push(d),localStorage.setItem("ReadingArticle",l()(o))}else n.closest("[data-more-news]")&&(i++,g(i).then((function(e){c()(e).call(e,(function(e){return e.read=o.some((function(n){return n===e.url}))})),r.push.apply(r,a()(e)),r.forEach((function(e){t.insertAdjacentHTML("beforeend",m(e))}))})))}))}));t(512)}});