//Hamburguer buttom
function toggleMenu(){
    document.getElementById('primaryNav').classList.toggle('hide');   
    }
    const imagesToLoad= document.querySelectorAll('img[data-src]');
    imgOptions ={
        threshold:0,
        rootMargin:"0px 0px 50px 0px"
    
    }
    
    
    
    
    const loadImages=(image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () =>{
        image.removeAttribute('data-src');
    
    };
    
    };
    if('IntersectionObserver' in window){
        const imgObserver = new IntersectionObserver((items, imgObserver) =>{
        items.forEach((item)=>{
            if(item.isIntersecting){
                loadImages(item.target);
                imgObserver.unobserve(item.target);
    
    
            }
    
        });
    
    
    
        }, imgOptions);
        imagesToLoad.forEach((img) =>{
            imgObserver.observe(img);
        });
    
    }
    else{
        imagesToLoad.forEach((img) =>{
            loadImages(img);
        });
    
    
    }
    //WEATHER SUMMARY
    
    const api = "//api.openweathermap.org/data/2.5/weather?id=3530103&units=imperial&APPID=876c077c999b25363ac86cddaf172d7d"; 
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
    
    // THREE DAYS FORECAST
    const apiURL = "//api.openweathermap.org/data/2.5/forecast?id=3530103&units=imperial&appid=876c077c999b25363ac86cddaf172d7d";
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
    