const d = document;
const ls = localStorage;

export function saveTask(taskDescription, taskStatus) {
    ls.setItem(localStorage.length, JSON.stringify([taskDescription, taskStatus]))
}
