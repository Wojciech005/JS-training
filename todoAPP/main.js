const form = document.querySelector('form')
const ul = document.querySelector('ul')
const taskNumber = document.querySelector('h1 span')
const taskList = document.getElementsByClassName('task')
const input = document.querySelector('input')


const taskRemove = (e) => {
    e.target.parentNode.remove()
    taskNumber.textContent = taskList.length;
}

const addTask = (e) => {
    e.preventDefault();
    const taskTitle = input.value;
    if(taskTitle === "")return;
    
    console.log(taskTitle)

    const task = document.createElement('li');
    task.className = 'task';
    task.innerHTML = taskTitle   + "    " + '<button>  Delate </button>';

    ul.appendChild(task)
    input.value = "";
    taskNumber.textContent = taskList.length

    task.querySelector('button').addEventListener('click', taskRemove);



}

form.addEventListener('submit', addTask)