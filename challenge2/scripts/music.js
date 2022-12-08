// Client ID: '9X32d2pTy0auybLRc24FmuzOZhQY-WNwebSLjaojP5QPjIQTx6MeX-OgprmicgD2'

baseURL = 'https://api.genius.com/search';
client_access_token = 'VPR3pbs0pBcVqWjnFV7rm5HZufqZToRZNl0ob8FB1hF7NQ5Gm1rxvjG5dnJZQxMZ';

const search_term = document.querySelector('#keyword');
const btn = document.querySelector('button');
let i = 0;

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

        let div = document.createElement('div');
        div.classList.add(`song-details${i}`);
        let img = document.createElement('img');
        img.setAttribute('src', hit.result.song_art_image_thumbnail_url);
        img.setAttribute('alt', 'Song Art');
        let div2 = document.createElement('div');
        let h4 = document.createElement('h4');
        let p = document.createElement('p');
        let songReleaseDate = hit.result.release_date_for_display;
        p.textContent = `Release Date: ${songReleaseDate}`;
        let a = document.createElement('a');
        let lyricURL = hit.result.stats.url;
        a.textContent = `Genius Lyrics - ${hit.result.title} `;
        a.setAttribute('href', lyricURL);

        let fullTitle = hit.result.title;
        h3.textContent = fullTitle;
        h3.classList.add(`song${i}`);
        h3.setAttribute('onclick', 'showSongDetails(this)');

        h4.textContent = fullTitle;
        article.appendChild(h3);
        div.appendChild(img);
        div2.appendChild(h4);
        div2.appendChild(p);
        div2.appendChild(a);
        div.appendChild(div2);
        article.appendChild(div);
        main.append(article);

        i++;
    });
}

function showSongDetails(element) {
    let current_class = element.getAttribute('class');
    let index = current_class.charAt(current_class.length - 1);
    if (document.querySelector(`.song-details${index}`).style.display == 'grid') {
        document.querySelector(`.song-details${index}`).style.display = 'none';
    } else {
    document.querySelector(`.song-details${index}`).style.display = 'grid';
    }
};