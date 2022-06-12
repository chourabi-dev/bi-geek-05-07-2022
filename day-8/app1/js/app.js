var elements = document.getElementsByClassName("list-elem");
var state = true;

/*
for (let i = 0; i < elements.length; i++) {
    const element = elements[i]; 
   element.style.color=  state ?  'red' : 'blue' ; 
   state = ! state; 
   
}*/

var search = document.getElementById("search");


 
function searchFor(){
    for (let i = 0; i < elements.length; i++) { 
        const element = elements[i]; 
    
        const valueInput = search.value.toLowerCase();
         

       
    
        if ( element.innerHTML.toLowerCase().indexOf(valueInput) != -1) {
            element.style.display = 'list-item';
        } else {
            element.style.display = 'none';
        }
    
    }
}