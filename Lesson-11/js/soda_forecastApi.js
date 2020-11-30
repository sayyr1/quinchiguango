const apiURL = "//api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=876c077c999b25363ac86cddaf172d7d";
fetch(apiURL)
.then(response => response.json())
.then(jsObject => {
    console.log(jsObject);
    const forecast = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
   // console.log(forecast);
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


