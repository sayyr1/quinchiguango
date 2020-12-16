fetch("data/data.json")
.then((respose) =>respose.json())
.then((rents) =>{
console.table(rents);
for( let x =0; x<7; x++){
     //Table 1//
     document.getElementById(`max${x+1}`).textContent=rents.rental[x].Maxpersons;
     document.getElementById(`half${x+1}`).textContent="$"+rents.rental[x].Halfday3;
     document.getElementById(`fulld${x+1}`).textContent="$"+rents.rental[x].Fullday1;
     document.getElementById(`halfy${x+1}`).textContent="$"+rents.rental[x].Halfday3h;
     document.getElementById(`fully${x+1}`).textContent="$"+rents.rental[x].Fullday;
    //Table 2
    document.getElementById(`metro${x+1}`).textContent=rents.rental[x].Maxpersons;
    document.getElementById(`dio${x+1}`).textContent="$"+rents.rental[x].Halfday3;
    document.getElementById(`pcx${x+1}`).textContent="$"+rents.rental[x].Fullday1;
    document.getElementById(`pio${x+1}`).textContent="$"+rents.rental[x].Halfday3h;
    document.getElementById(`full${x+1}`).textContent="$"+rents.rental[x].Fullday;
  

    

}

});
  
