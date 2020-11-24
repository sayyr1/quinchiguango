const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=876c077c999b25363ac86cddaf172d7d"; 


fetch(apiURL)
.then(response => response.json())
.then(jsObject => {
console.log(jsObject);
const curtemp = document.querySelector('#current-temp');
const icon = document.querySelector('#imagesrc');
const weathericon = document.querySelector('#icon');

curtemp.innerHTML = jsObject.main.temp;
icon.textContent = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
const isrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
weathericon.setAttribute('src', isrc);
weathericon.setAttribute('alt', jsObject.weather[0].description);

});
