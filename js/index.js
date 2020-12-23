import {addTask, addCheckFnToBtns, addDeleteFnToBtns, loadTasks} from "./index_ui.js"

const d = document;

d.addEventListener("DOMContentLoaded", e => {
    addTask("#btn-add-task", "#task-container", "#input-add-task");
    addCheckFnToBtns(); 
    addDeleteFnToBtns();
})

loadTasks("#task-container")
