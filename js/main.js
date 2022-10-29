const links = [
    {
      label: "Week 1 notes",
      url: "week1/index.html"
    },
    {
      label: "Week 2 notes",
      url: "week2/index.html"
    },
    {
      label: "Week 3 notes",
      url: "week3/index.html"
    },
    {
      label: "Week 4 notes",
      url: "week4/index.html"
    },
    {
      label: "Week 5 notes",
      url: "week5/index.html"
    },
    {
      label: "Week 6: Challenge 1",
      url: "challenge1/index.html"
    },
    {
      label: "Week 7 notes",
      url: "week7/index.html"
    }
  ]

function createList() {
  let ol = document.createElement('ol');

  links.forEach( item => {
    let li = document.createElement('li');
    let a = document.createElement('a');
  
    a.textContent= item.label;
    a.setAttribute('href', item.url);
  
    li.appendChild(a);
    ol.appendChild(li);
  });

  document.getElementById('tableContent').appendChild(ol);
}

createList();