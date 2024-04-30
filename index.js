const input = document.querySelector('#task_input');
const btnAdd = document.querySelector('#btn_add');
const btnClear = document.querySelector('#btn_clear');
let taskList=document.getElementById('UlToDoList');
const storageKey = "myTodoListTasks";

let tasks = [];
const todo_list = document.querySelector("#todo_list");
btnClear.setAttribute('disabled', '');
saveTasks(["task1", "task2"]);

let storedTasks = loadTasksFromLocalStorage();

if (storedTasks !== null && storedTasks.length !== 0) 
{
  tasks = storedTasks;
  storedTasks.forEach(element => {
    createTask(element);
  });
}

function createTask(text) {

  tasks.push(text);
  
  const newElement=document.createElement('li');
  const newCheckBox=document.createElement('input');
  const newP=document.createTextNode('p');
  newCheckBox.type='checkbox';
  newP.textContent=text;

taskList.append(newElement);
  
  newElement.appendChild(newP);
  newElement.appendChild(newCheckBox);
 
  text.value='';
  let saveString = JSON.stringify(tasks);
  localStorage.setItem(storageKey, saveString);
}

btnAdd.addEventListener('click', function() { createTask(input.value); }, false);


function checkcheckbox() {
 let items= document.querySelectorAll("input[type='checkbox']");
 
 var i = 0;

 for (; i < items.length; i++) {
   var check = items[i];

   if (check.value === '1') 
   {
       check.checked = true;
       
}
   }
   if (check.checked === true)
 {
  btnClear.removeAttribute('disabled');
}

console.log(taskList);
console.log(items.length);
}




taskList.addEventListener ('change', checkcheckbox);


function checkTask(event) {
  let target=event.target;
  target.classList.toggle('done');
}

function clearSearch() {
  localStorage.setItem('tasks','[]');
  document.getElementById('UlToDoList').innerHTML='';
}
btnClear.addEventListener('click', clearSearch);

function saveTasks(stringArray) {
  let saveString = JSON.stringify(stringArray);
  localStorage.setItem(storageKey, saveString);
}

function loadTasksFromLocalStorage() {
  let stored = localStorage.getItem(storageKey);
  let parsedObject = JSON.parse(stored);
  return parsedObject;
}

function saveTasks2(stringArray) {
  let tasksObject = {"list": []};
  stringArray.forEach(function (item) {
    tasksObject.list.push(item);
  });
  localStorage.setItem(storageKey, tasks);
}
