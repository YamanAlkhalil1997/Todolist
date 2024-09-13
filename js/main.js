let input = document.querySelector(".add-task input")
let add = document.querySelector(".add-task .plus")
let taskCotaer = document.querySelector(".tasks")
let taskMsg = document.querySelector(".no-tasks-massage")
let taskC = document.querySelector(".tasks-stats .tasks-count")
let taskCopmleted = document.querySelector(".tasks-stats .tasks-completed")
let deleteAll = document.querySelector(".deleteAll")
let selectAll = document.querySelector(".selectAll")




window.onload = function () {
    input.focus()
}

let emptyArray = [];

add.onclick = () => {
    if (input.value === '') {
        swal({
            title: "Error!",
            text: "this feild is empty!",
            type: "error",
            confirmButtonText: "Cool"
          });
    }
    
    else {
        addTaskToArray (input.value)
        taskMsg.remove()
        let maSpa = document.createElement("span");
        let text = document.createTextNode(input.value)
        let deleteSpa = document.createElement("span")
        let deleteText = document.createTextNode("delete")
        maSpa.appendChild(text)
        maSpa.className = "taskPox";
        deleteSpa.appendChild(deleteText)
        deleteSpa.className = "taskDelete";
        maSpa.appendChild(deleteSpa)
        taskCotaer.appendChild(maSpa)
        calc ()
        input.value ='';
        input.focus()
    }
}




document.addEventListener("click", function (e) {
    if (e.target.className == "taskDelete") {
       e.target.parentElement.remove()
      
    }

    if(taskCotaer.childElementCount == 0) {
        createShowMsg() 
    }

    if (e.target.classList.contains("taskPox")) {
        e.target.classList.toggle("done")

     }
     calc ()
})



function createShowMsg () {
   let spa =   document.createElement("span");
   let spaMsage = document.createTextNode("no taks now please")
   spa.appendChild(spaMsage)
   spa.className = 'no-tasks-massage';
   taskCotaer.appendChild(spa)

}

// function to calculate tasks 


function calc () {
    taskC.innerHTML = document.querySelectorAll(".tasks .taskPox").length;
    taskCopmleted.innerHTML = document.querySelectorAll(".tasks .done").length;
}

deleteAll.onclick = () => {
    taskCotaer.innerHTML = '';
}



    
selectAll.onclick = () => {
    let allTasks = document.querySelectorAll(".tasks .taskPox");
    allTasks.forEach(task => {
        task.classList.toggle("done"); // Adding "done" class to all tasks
    });
    calc(); // Update the completed tasks counter
}   


