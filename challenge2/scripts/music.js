// Client ID: '9X32d2pTy0auybLRc24FmuzOZhQY-WNwebSLjaojP5QPjIQTx6MeX-OgprmicgD2'

baseURL = 'https://api.genius.com/search';
client_access_token = 'VPR3pbs0pBcVqWjnFV7rm5HZufqZToRZNl0ob8FB1hF7NQ5Gm1rxvjG5dnJZQxMZ';

const search_term = document.querySelector('#keyword');
const btn = document.querySelector('button');
let i = 0;

btn.addEventListener('click', () => {
    query = search_term.value;
    if (query.length != 0) {
        let url = `${baseURL}?q=${query}&access_token=${client_access_token}`;
        findSong(url);
    } 
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
    let h2 = document.createElement('h2');
    h2.textContent = `Song Results for: ${query}`;
    aside.appendChild(h2);
    main.append(aside);
    if (data.response.hits.length === 0) {
        let h3 = document.createElement('h3');
        let article = document.createElement('article');
        h3.textContent = `Sorry, there no results for: ${query}.`
        article.appendChild(h3);
        main.append(article);
    } else {
        data.response.hits.forEach(hit => {
            let article = document.createElement('article');
            let h3 = document.createElement('h3');
            let div = document.createElement('div');
            let div2 = document.createElement('div');
            let h4 = document.createElement('h4');
            let h5 = document.createElement('h5');
            let p = document.createElement('p');
            let a = document.createElement('a');
            let img = document.createElement('img');

            div.classList.add(`song-details${i}`);
            img.setAttribute('src', hit.result.song_art_image_thumbnail_url);
            img.setAttribute('alt', 'Song Art');
            let songReleaseDate = hit.result.release_date_for_display;
            p.textContent = `Release Date: ${songReleaseDate}`;
            let lyricURL = hit.result.url;
            a.textContent = `Site Link: Genius Lyrics - ${hit.result.title} `;
            a.setAttribute('href', lyricURL);
            let fullTitle = hit.result.title;
            h3.textContent = fullTitle;
            h3.classList.add(`song${i}`);
            h3.setAttribute('onclick', 'showSongDetails(this)');
            h4.textContent = fullTitle;
            let artist = hit.result.artist_names;
            h5.textContent = artist;

            article.appendChild(h3);
            div.appendChild(img);
            div2.appendChild(h4);
            div2.appendChild(h5);
            div2.appendChild(p);
            div2.appendChild(a);
            div.appendChild(div2);
            article.appendChild(div);
            main.append(article);

            i++;
        });
    }
}

function showSongDetails(element) {
    let current_class = element.getAttribute('class');
    // get number index at the end of the class name
    let index = current_class.match(/[0-9]+$/);
    if (document.querySelector(`.song-details${index}`).style.display == 'grid') {
        document.querySelector(`.song-details${index}`).style.display = 'none';
    } else {
        document.querySelector(`.song-details${index}`).style.display = 'grid';
    }
};