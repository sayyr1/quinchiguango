const api = "https://api.openweathermap.org/data/2.5/weather?id=5607916&units=imperial&APPID=876c077c999b25363ac86cddaf172d7d"; 
// Go fetch it and then wait for a response.
fetch(api)
.then((response) => response.json())
.then((weatherSummary) => {
//console.log(weatherSummary);
document.getElementById('temp').innerHTML=weatherSummary.main.temp;
document.getElementById('high').innerHTML=weatherSummary.main.temp_max;
document.getElementById('humidity').innerHTML=weatherSummary.main.humidity;
document.getElementById('speed').innerHTML=weatherSummary.wind.speed;
})
