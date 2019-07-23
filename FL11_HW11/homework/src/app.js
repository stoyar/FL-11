let rootNode = document.getElementById('root');

document.querySelector('i.add_icon').addEventListener('click', addElement);
let idies = '1'
function addElement() {
    let max_items = 10;
    let field_content = document.getElementById('create_field').value;
    if (this.childElementCount === max_items) {
        alert('Too much items');
        return
    } else if (field_content === '') {
        return
    }
    let my_div = null;
    let edit_id = ++idies;
    let save_id = ++edit_id;
    let delete_id = ++save_id;
    let div_id = ++delete_id;
    let newDiv = document.createElement('div');
        newDiv.innerHTML = `<input id="" type="checkbox" class="checkbox material-icons">
        <label for="checkbox"> ${field_content}</label>
        <input type="text" class="edit_field">
        <i class="material-icons edit_icon" id="number${edit_id}">edit</i>
        <i class="material-icons save_icon" id="number${save_id}">save</i>
        <i class="material-icons delete_icon" id="number${delete_id}">delete</i>`;
    newDiv.setAttribute('class', 'list-item');
    newDiv.setAttribute('id', `number${div_id}`);
    my_div = document.querySelector('hidden');
    document.body.insertBefore(newDiv, my_div);
    document.getElementById('create_field').value = '';
    let editBtn = document.getElementById(`number${edit_id}`)
    editBtn.addEventListener('click', console.log('EDIT'));
    document.getElementById(`number${save_id}`).addEventListener('click', delItem(`number${save_id}`));
    document.getElementById(`number${delete_id}`).addEventListener('click', console.log('DELETE'));
    idies = delete_id;
}

function delItem (x) {
    console.log(`del ${x}`);
}