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


let lastMod= new Date(document.lastModified);
document.getElementById('dates').textContent=lastMod;
