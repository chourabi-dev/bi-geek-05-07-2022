/**
 * // add new value storage
localStorage.setItem()

//return value from storage
localStorage.getItem()


// delete one item
localStorage.removeItem()

//delete all items
localStorage.clear()
 */


/**
 * localStorage.setItem('array',[1,2,3,4,5]);
localStorage.setItem('year',2022);
localStorage.setItem('user',{ username:"chourabi taher" });
 */



function switchMode(){
    document.getElementById("app").className="dark-mode"; 
    localStorage.setItem('mode','dark');

}

function switchToLightMode(){
    localStorage.removeItem('mode');
    document.getElementById("app").className="";
}


function initMode(){
    const mode = localStorage.getItem('mode');

    if (mode==='dark') {
        document.getElementById("app").className="dark-mode";

    }  
}


initMode();