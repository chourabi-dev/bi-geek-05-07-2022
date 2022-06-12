/**
 * if (condition) {
    
}
if (condition) {
    
} else {
    
}

if (condition) {
    
}else if (condition) {
    
} else if(  ){

}else if(  ){

}else if(  ){

}else if(  ){

}else{

}
*/


/**
 * for (let i = 0; i < 10; i++) {
   
}

while (condition) {
    // 
}

do {
    
} while (condition);


 */



//  calcul moy

const notes = [18,18,19,6,2,3,8,4,12,19,13,16];

let total = 0;

for (let i = 0; i < notes.length; i++) {
   total= total + notes[i];
    
}

let moy = (total / notes.length);

if ( moy >=0 && moy < 10   ) {
    console.log( `Moyenne : ${moy}  bien` );
} else if ( moy >=10 && moy < 15   ) {
    console.log( `Moyenne : ${moy}  trés bien` );
}else {
    console.log( `Moyenne : ${moy}  c bn` );   
}



// min

min = notes[0];

for (let j = 0; j < notes.length; j++) {
    if (notes[j] < min ) {
        min = notes[j];
    }   
}


max = notes[0];
for (let j = 0; j < notes.length; j++) {
    if (notes[j] > max ) {
        max = notes[j];
    }
}


console.log(min,max);

//  0  moy 10  bien
//  10 moy 15 trés bien
//  moy > 15 c bn


/******************************************************************************* */


var x = 1;
var y = 1;
var z = x+y;


// get the first input

var inputElementX =  document.getElementById("x");
var inputElementY =  document.getElementById("y");
var resElement = document.getElementById("res");
var operation = document.getElementById("op");



function calcul(){
    const xValue = Number(inputElementX.value);
    const yValue = Number(inputElementY.value);

    if (inputElementX.value != ''  &&  inputElementY.value != "") {
        if (   isNaN(xValue) == false && isNaN(yValue) == false    ) {

            const op = operation.value;

            /*if (op === "+") {
                resElement.innerHTML = ( (xValue+yValue) );
            }else if( op === "-" ){
                resElement.innerHTML = ( (xValue-yValue) );
            }*/

            switch (op) {
                case "+":
                    resElement.innerHTML = (xValue+yValue) ;
                    break;
                case "-":
                    resElement.innerHTML =  (xValue-yValue) ;
                    break;
                case "*":
                    resElement.innerHTML =  (xValue*yValue) ;
                    break;
                case "/":
                    resElement.innerHTML =  (xValue/yValue) ;
                    break;
                    
            }



            
        } else {
            resElement.innerHTML =( "bad format" );
        }
    } else {
        resElement.innerHTML = ( "x and y are required" );
    }
}





