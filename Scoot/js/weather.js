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
    