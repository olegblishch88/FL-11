let rootNode = document.getElementById("root");
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const taskInput = document.querySelector('#task');

loadEventListeners();

function loadEventListeners() {
    form.addEventListener('submit', addTask);
    taskList.addEventListener('click', removeTask);
    taskList.addEventListener('click', editTask); 
}

function removeTask(e) {
    if(e.target.parentElement.classList.contains('del')){
        e.target.parentElement.parentElement.remove();
    }
}

function editTask(e) {
    if(e.target.parentElement.classList.contains('edit')){
        e.target.parentElement.parentElement.remove();
        let list = document.createElement('li');
        let input = document.createElement('input');
        let btnSave = document.createElement('button');
        btnSave.classList = 'save';
        btnSave.innerHTML = '<i class="material-icons">save</i>';
        input.classList = 'save-input';
        input.type = 'text';
        list.appendChild(input);
        list.appendChild(btnSave);
        taskList.appendChild(list);
        btnSave.addEventListener('click', () => {
            list.remove();
            let li = document.createElement('li');
            const liButtonEdit = document.createElement('button');
            const liButtonDelete = document.createElement('button');
            liButtonDelete.className = 'del';
            liButtonEdit.className = 'edit';
            liButtonEdit.innerHTML = '<i class="material-icons">edit</i>';
            liButtonDelete.innerHTML = '<i class="material-icons delete">delete</i>';
            li.appendChild(document.createTextNode(input.value));
            li.appendChild(liButtonEdit);
            li.appendChild(liButtonDelete);
            taskList.appendChild(li);            
        })
    }
}

function addTask(e) {
    if(taskInput.value === ''){
        document.getElementById('btn').disabled = true;
    }else{
        const li = document.createElement('li');
        li.className = 'collection-item';
        li.appendChild(document.createTextNode(taskInput.value));
        const liButtonEdit = document.createElement('button');
        const liButtonDelete = document.createElement('button');
        liButtonDelete.className = 'del';
        liButtonEdit.className = 'edit';
        liButtonEdit.innerHTML = '<i class="material-icons">edit</i>';
        liButtonDelete.innerHTML = '<i class="material-icons delete">delete</i>';
        li.appendChild(liButtonEdit);
        li.appendChild(liButtonDelete);
        const input = document.createElement('input');
        input.className = 'checkbox';
        input.type = 'checkbox';
        taskList.insertBefore(input, taskList.children[1]);
        taskList.appendChild(li);
        taskInput.value = '';
    }
    e.preventDefault();
}

const li = document.querySelector('.collection-item');
li.onmousedown = function(e) {
    li.style.position = 'absolute';
    moveAt(e);
    taskList.appendChild(li);
    li.style.zIndex = 1000;

    function moveAt(e){
        li.style.left = e.pageX - li.offsetWidth / 2 + 'px';
        li.style.top = e.pageY - li.offsetHeight / 2 + 'px';
    }
    document.onmousemove = function(e){
        moveAt(e);
    }
    li.onmouseup = function() {
        document.onmousemove = null;
        li.onmouseup = null;
    }
}