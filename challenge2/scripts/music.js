// Client ID: '9X32d2pTy0auybLRc24FmuzOZhQY-WNwebSLjaojP5QPjIQTx6MeX-OgprmicgD2'

baseURL = 'https://api.genius.com/search';
client_access_token = 'VPR3pbs0pBcVqWjnFV7rm5HZufqZToRZNl0ob8FB1hF7NQ5Gm1rxvjG5dnJZQxMZ';

const search_term = document.querySelector('#keyword');
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    query = search_term.value;
    let url = `${baseURL}?q=${query}&access_token=${client_access_token}`;
    findSong(url);
});

async function findSong(URL) {
    let response = await fetch(URL)
    if (response.ok) {
        let data = await response.json();
        //console.log(data);
        displayResults(data);
    }
}

const displayResults = (data) => {
    let main = document.querySelector('main');
    main.innerHTML = '';
    let aside = document.createElement('aside');
    aside.textContent = `Songs by ${query}:`;
    main.append(aside);
    
    data.response.hits.forEach(hit => {
        let article = document.createElement('article');
        let h3 = document.createElement('h3');
        //let a = document.createElement('a');
        // add a to h3
        let fullTitle = hit.result.title;
        h3.textContent = fullTitle;
        // a.textContent = fullTitle;
        // a.setAttribute =
        // h3.appendChild(a);
        article.appendChild(h3);
        main.append(article);
    });

}