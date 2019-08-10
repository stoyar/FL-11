const rootNode = document.getElementById('root');

let fieldNewTask = document.getElementById('task_content');
let fieldModify = document.getElementById('modify_content');
const btnAddTask = document.querySelector('.add_button');
const btnsCancel = document.getElementsByClassName('cancel_button');
const btnSaveAdd = document.querySelector('.save_button_add');
const btnSaveModify = document.querySelector('.save_button_modify');
let checkboxes = document.querySelectorAll('li>input');
let main = document.getElementById('main_page');
let adder = document.getElementById('add_page');
let edit = document.getElementById('modify_page');
let container = document.querySelector('ul');
let contents = document.getElementsByTagName('p');
let btnsDelete = document.getElementsByTagName('img');

let counter = 0;
let onclickP = 0;

const goToMain = () => {
  main.style.display='flex';
  adder.style.display='none';
  edit.style.display='none';
  location.href = 'index.html#main_page';
  fieldNewTask.value = '';
  fieldModify.value = '';
}

let addNew = function(value) {
  let li = document.createElement('li');
  let input = document.createElement('input');
  input.type='checkbox';
  input.id = ++counter;
  let p = document.createElement('p');
  p.innerHTML = value;
  p.id = ++counter;
  let img = document.createElement('img');
  img.src='./assets/img/remove-s.jpg';
  container.appendChild(li);
  li.appendChild(input);
  li.appendChild(p);
  li.appendChild(img);
  input.addEventListener('click', (event) => {
    let pp = event.target.nextElementSibling;
    console.log(event.target.hasAttribute('checked'));
    if (event.target.hasAttribute('checked')) {
      pp.style.backgroundColor = '#fff';
      event.target.removeAttribute('checked');
    } else {
      pp.style.backgroundColor = 'gray';
      event.target.setAttribute('checked', 'checked');
    }
    });
  p.addEventListener('click', (event) => {
    onclickP = event.target.id;
    main.style.display='none';
    adder.style.display='none';
    edit.style.display='flex';
    location.href = 'index.html#modify_page';  
  });
  img.addEventListener('click', function(event) {
    event.target.parentElement.remove();
  });
}

for (let i = 0; i < btnsCancel.length; i++) {
  btnsCancel[i].addEventListener('click', () => {
    goToMain();
  });
}

btnAddTask.addEventListener('click', () => {
  main.style.display='none';
  adder.style.display='flex';  
  edit.style.display='none';
  location.href = 'index.html#add_page';
})

btnSaveAdd.addEventListener('click', () => {
  let task = fieldNewTask.value;
  if (task !== '') {
    addNew(task);
    goToMain();
  } else {
    alert(`Task can't be empty`);
  }
})

btnSaveModify.addEventListener('click', function() {
  let p = document.getElementById(onclickP);
  if (p.textContent !== fieldModify.value) {
    p.innerHTML = fieldModify.value;
    goToMain();
  } else {
    alert(`You can't add already exist task`)
  }
})