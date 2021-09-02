let todo = getTodo(); // get the todo List from storage
render(todo); // display the initial todo List 

//funtionality for the different events

document.getElementById("add-task").addEventListener("click",function(e){ //event when the add new task button is pressed
    addTask(todo);  //funtion for adding new task and displaying it on page
})

document.getElementById("search-txt").addEventListener("input",function(e){ //event for text typed in seach bar
    searchTask(todo,e); //funtion for searching the tasks and displaying it on page
})




//event to delete todo 
let btns = document.querySelectorAll(".remove");
btns.forEach(function(item,index){
    item.addEventListener("click",function(e){
        deleteTodo(e,index,todo);
    })
})

//event for complete/uncomplete task
let check = document.querySelectorAll(".status");
check.forEach(function(item,index){
    item.addEventListener("change",function(e){
        changeStatus(e,index,todo);
        console.log("i am triggered");
    })
})

document.querySelector("#hide-check").addEventListener("change",function(e){  //event when hide completed is checked and unchecked
   hideCompleted(e,todo);
})