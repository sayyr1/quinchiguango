const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";
fetch (requestURL)
.then (function (response){
    return response.json();
})
.then(function (jsonObject){
const  towns = jsonObject['towns'];
let selected = towns.filter(x => (x.name=='Preston' || x.name == 'Fish Haven' || x.name == 'Soda Springs'));
selected.forEach(town =>{
let places = document.createElement('section');

let h2 = document.createElement('h2');
let sub = document.createElement('sub');
let p = document.createElement('p');
let image = document.createElement('img');
//add details and attributes
h2.innerHTML = `${town.name}`;
sub.innerHTML =`${town.motto}`;
p.innerHTML = `Year Founded: ${town.yearFounded} <br> Population: ${town.currentPopulation} <br> Annual Rain Fall: ${town.averageRainfall}`;
image.setAttribute('src', `images/${town.photo}`);
//image.setAttribute('src', );
//actually add the content
places.appendChild(h2);
places.appendChild(sub);
places.appendChild(p);
places.appendChild(image);
document.querySelector('div.preston').appendChild(places);


})


});


















