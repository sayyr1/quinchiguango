const apis = "//api.openweathermap.org/data/2.5/weather?id=5585000&units=imperial&APPID=876c077c999b25363ac86cddaf172d7d"; 
// Go fetch it and then wait for a response.
fetch(apis)
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
let selected = towns.filter(x =>(x.name=='Fish Haven'));
console.log(selected); 
selected.forEach(town =>{
document.getElementById('title_events').innerHTML='Upcoming Events:';
document.getElementById('event1').innerHTML=town.events[0];
document.getElementById('event2').innerHTML=town.events[1];
document.getElementById('event3').innerHTML=town.events[2];

})
})
const apiURL = "//api.openweathermap.org/data/2.5/forecast?id=5585000&units=imperial&appid=876c077c999b25363ac86cddaf172d7d";
fetch(apiURL)
.then(response => response.json())
.then(jsObject => {
    console.log(jsObject);
    const forecast = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
   //console.log(forecast);





const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
for(let day = 0; day < forecast.length; day++){
const d =new Date(forecast[day].dt_txt);
document.getElementById(`dayofweek${day+1}`).textContent =weekdays[d.getDay()];
document.getElementById(`forecast${day+1}`).textContent =forecast[day].main.temp;
const iconcode= forecast[day].weather[0].icon;
console.log(iconcode);

const icon_path= "//openweathermap.org/img/w/" + iconcode + ".png";
console.log(icon_path);
document.getElementById(`img${day+1}`).src=icon_path;


    }
});
