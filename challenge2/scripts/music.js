// Client ID: '88abukBLBetl4Yk8Yy9lgM-jKAVi7duiHo6H_ZBc32fp3j78xi8uMOaDOb8wZW3X'

baseURL = 'https://api.genius.com/search';
client_access_token = 'Pz0sqNcvHMbUXdVhhkmI2FqlHN36whh8mqt9h-JwG6PcwPlyvMj-8TYEVz0iMX2u';

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