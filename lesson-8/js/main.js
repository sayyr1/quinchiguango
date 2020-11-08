function toggleMenu() {
    document.getElementById('primaryNav').classList.toggle('hide');
}

const today = new Date()
  console.log(today);
  
  const dayNumber = today.getDay();
  console.log(dayNumber);
  
  const element = document.getElementById("message");
  if (dayNumber==6){element.classList.add('showme');}
  else {element.classList.add('hideme');}
  let lastMod= new Date(document.lastModified);
document.getElementById('dates').textContent=lastMod;

const imagesToLoad= document.querySelectorAll('img[data-src]');
const imgOptions = {
    threshold:0,
    rootMargin:"0px 0px 50px 0px"
};
const loadImages =(image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');
    };
};
if('IntersectionObserver' in window){
    const imgObserver = new IntersectionObserver((items, imgObserver) => {
    items.forEach((item)=>{
        if(item.isIntersecting) {
            loadImages(item.target);
            imgObserver.unobserve(item.target);
        }
    });
}, imgOptions);

imagesToLoad.forEach((img) => {
    imgObserver.observe(img);
});
}
else {
    imagesToLoad.forEach((img)=>{
        loadImages(img);
    });
}



