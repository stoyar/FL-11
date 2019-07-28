const rootNode = document.getElementById('root');

let fieldNewTask = document.getElementById('task_content');
let fieldNodify = document.getElementById('modify_content');
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
let btnDelete = document.getElementsByTagName('img');

let counter = 0;

const scanCheck = function() {
  for (let i = 0; i < checkboxes.length; i++){
    checkboxes[i].addEventListener('click', () => {
    let id = checkboxes[i].id;
    id++;
    let p = document.getElementById(id);
    if (checkboxes[i].getAttribute('checked')) {
      p.style.backgroundColor = '#ccc';
    } else {
      p.style.backgroundColor = '#fff';
    }
    });
  }
}

const scanP = function() {
  for (let i = 0; i < contents.length; i++) {
    contents[i].addEventListener('click', () => {
      main.style.display='none';
      adder.style.display='none';
      edit.style.display='flex';
      location.href = 'index.html#modify_page';  
    });
  }
}

const scanDel = function() {
  for (let i = 0; i < btnDelete.length; i++){
    btnDelete[i].addEventListener('click', function (){
      console.log('Wait, deleting........................')
    })
  }
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
  scanCheck();
  scanP();
}

for (let i = 0; i < btnsCancel.length; i++) {
  btnsCancel[i].addEventListener('click', () => {
    main.style.display='flex';
    adder.style.display='none';
    edit.style.display='none';
    location.href = 'index.html#main_page';
  });
}

btnAddTask.addEventListener('click', () => {
  adder.style.display='flex';  
  main.style.display='none';
  edit.style.display='none';
  location.href = 'index.html#add_page';
})

btnSaveAdd.addEventListener('click', () => {
  let task = fieldNewTask.value;
  if (task !== '') {
    addNew(task);
    main.style.display='flex';
    adder.style.display='none';
    edit.style.display='none';
    location.href = 'index.html#main_page';
    fieldNewTask.value = '';
  } else {
    alert(`Task can't be empty`);
  }
})



btnSaveModify.addEventListener('click', () => {
  console.log('Sorry, too little time(((')

})
