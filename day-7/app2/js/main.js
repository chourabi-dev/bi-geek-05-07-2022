/**
 *  <li class="list-group-item d-flex justify-content-between align-items-start">
                              <div class="ms-2 me-auto">
                                <div class="fw-bold">Subheading</div>
                                Content for list item
                              </div>
                             
                            </li>
 */

var todoValueElement = document.getElementById("todoValue");
var todosListElement = document.getElementById("todosList"); 
var todos = [];

function deleteElement(index){
  todos.splice(index,1);

  initData();
}

function initData(){

  let blocTotal = '';
  for (let i = 0; i < todos.length; i++) { 
    const BlocHTML = `
    <li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
        <div class="fw-bold">${todos[i].todo} ${i}</div>
        ${ todos[i].date.getFullYear() } / ${ (todos[i].date.getMonth() +1 ) } / ${ todos[i].date.getDate() }
        </div>
        <div>
          <button class="btn btn-danger btn-sm" onclick="deleteElement(${i})">supprimer</button>
        </div>
        
    </li>
    `; 
    blocTotal = blocTotal + BlocHTML; 
  }

  todosListElement.innerHTML = blocTotal; 
  
}



function addTodo(){
                                  // get
    const todo = todoValueElement.value;
    const date = new Date();


    const elem = {
      todo : todo,
      date : new Date()
    };



   if (todo !== '') {
                       
    todos.push(elem); 
    todoValueElement.value = '';
    initData();
   }

}

