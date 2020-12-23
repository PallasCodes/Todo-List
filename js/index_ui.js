import {saveTask} from "./index_local_storage.js"

const d = document;

export function addTask(btnAddTask, taskContainer, inputAddTask){
    const $taskContainer = d.querySelector(taskContainer);
    const $inputAddTask = d.querySelector(inputAddTask);

    d.addEventListener('click', e => {
        if(e.target.matches(btnAddTask)){
            e.preventDefault()

            displayTask($inputAddTask.value, $taskContainer, localStorage.length);

            saveTask($inputAddTask.value, "todo");
            $inputAddTask.value = "";
            addCheckFnToBtns();
            addDeleteFnToBtns();
        }
    })
}

export function loadTasks(taskContainer){
    const $taskContainer = d.querySelector(taskContainer);
    
    for(let i=0; i < localStorage.length; i++)
        displayTask(JSON.parse(localStorage.getItem(i))[0], $taskContainer, i)
}

export function displayTask(task, $taskContainer, taskId){
    $taskContainer.innerHTML += `
            <div class="task" data-task-id="${taskId}">
                <input type="checkbox" class="task-check">
                <span class="task-description">${task}</span>
                <i class="fas fa-trash btn-delete-task"></i>
            </div>
            `
}

export function addCheckFnToBtns(){
    let $checkboxes = d.querySelectorAll(".task-check")

    $checkboxes.forEach(checkbox => {
        checkbox.addEventListener('click', e => checkbox.parentNode.classList.toggle("done"))
    })
}

export function addDeleteFnToBtns(){
    let $trashIcons = d.querySelectorAll(".btn-delete-task")
    let id = 0;

    $trashIcons.forEach(trashIcon => {
        trashIcon.addEventListener('click', e => {
            trashIcon.parentNode.remove();
            localStorage.removeItem(trashIcon.parentNode.dataset.taskId);
        })
    })
}
