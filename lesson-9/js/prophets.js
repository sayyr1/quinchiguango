const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
fetch (requestURL)
.then(function (response) {
    return response.json();
})
.then(function (jsonObject){
    //console.table(jsonObject);
    const prophets = jsonObject['prophets'];

    prophets.forEach(prophet => {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let p = document.createElement('p');

    let image = document.createElement('img');
     // add details and attributes
    h2.innerHTML = `${prophet.name} <span class="highlight">${prophet.lastname}`;
    p.innerHTML = ` Date of Birth:${prophet.birthdate}<br> Place of Birth:${prophet.birthplace}`
    image.setAttribute('src', prophet.imageurl);
    image.setAttribute('alt', `OfficiL Portrait of ${prophet.name} ${prophet.lastname}`);
    // actuyally add the content
    
    card.appendChild(h2);
    card.appendChild(p);
    card.appendChild(image);

    document.querySelector('div.cards').appendChild(card);

    })
});
