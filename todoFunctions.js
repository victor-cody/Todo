//function for getting value stored in todoList
let getTodo = function(){
    return Boolean(localStorage.getItem("todo"))?JSON.parse(localStorage.getItem("todo")):[];
}

//function to add or render any list on the screen
let render = function(list){
    document.querySelector("#td").innerHTML = "";
    list.forEach(function(item){
        newTask(item);
        }
    )
}

//function for saving the task in the local storage
let saveTask = function(todo){
    let tdList = JSON.stringify(todo);
    localStorage.setItem("todo",tdList); //setting value for the first time or updating it
}


let newTask = function(node)
{
    let li = document.createElement("li");
    let status = document.createElement("input");
    let remove = document.createElement("button");
    li.textContent = node.td;

    remove.setAttribute("class","remove");
    remove.textContent="Delete";
    

    status.setAttribute("type","checkbox");
    status.setAttribute("class","status");
    status.checked = node.status;
    li.style.textDecoration = (node.status)?"line-through":"none";

    let div = document.createElement("div");
    div.setAttribute("class","task");
    div.setAttribute("id",node.index);



    div.appendChild(status);
    div.appendChild(li);
    div.appendChild(remove);
    document.querySelector("#td").appendChild(div);

    document.getElementById("new-task").value = ""; //clearing the input feild

}

//function for adding a new task
let addTask = function(todo){
    let td = document.getElementById("new-task").value;
    let status = false;
    let node = {td : td,status : status};
    todo.push(node);
    saveTask(todo); // saving it to local storage
    newTask(node);
}

// function for searching out task
let searchTask = function(todo,e){
    let searchList = todo.filter(function(item){
        return item.td.includes(e.target.value);
    })
    render(searchList); // showing the searched terms on the go..
}


//funtion to delete task
let deleteTodo=function(e,index,todo){
    e.target.parentElement.remove();
    todo.splice(index,1);
    saveTask(todo);
}

//funtion for completing and undoing a task
let changeStatus = function(e,index,todo){
    let state = e.target.checked;
    let td = e.target.parentElement.children[1];
    td.style.textDecoration = (state)?"line-through":"none";
    todo[index].status = state;
    saveTask(todo);
}

//function for hiding complete task
let hideCompleted = function(e,todo){
    if(e.target.checked)
    {
        let filterLst = todo.filter(function(item){
            return !item.status;
        })
     render(filterLst);
    }else{
        render(todo);
    }

}