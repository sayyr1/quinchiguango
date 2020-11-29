const api = "//api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=876c077c999b25363ac86cddaf172d7d"; 
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

const events = "https://byui-cit230.github.io/weather/data/towndata.json";
fetch(events)
.then (function(response){
return response.json();
})
.then(function (jsonObject){
const towns = jsonObject['towns'];
let selected = towns.filter(x =>(x.name=='Preston'));
console.log(selected); 
selected.forEach(town =>{
document.getElementById('title_events').innerHTML='Upcoming Events:';
document.getElementById('event1').innerHTML=town.events[0];
document.getElementById('event2').innerHTML=town.events[1];
document.getElementById('event3').innerHTML=town.events[2];

})
})