
const API_TOKEN = "47ce104e3ca94af265ff6f0a53c1031c";

export function getFilmsFromApiWithSearchedText (text=null) {
  const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text
   return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
  
}