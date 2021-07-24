const submitItem = document.getElementById('criar-tarefa');
const inputItem = document.getElementById('texto-tarefa');
const outputOl = document.getElementById('lista-tarefas');

function addItem() {
  submitItem.addEventListener('click', () => {
    const createLi = document.createElement('li');
    createLi.innerText = inputItem.value;
    outputOl.appendChild(createLi);
    inputItem.value = '';
  });
}

function backgroundSelected() {
  outputOl.addEventListener('click', (event) => {
    const drawLi = event.target;
    const selectedLi = document.querySelectorAll('li');
    for (let index = 0; index < selectedLi.length; index += 1) {
      selectedLi[index].classList.remove('selected');
    }
    drawLi.classList.add('selected');
  });
}

function completedItem() {
  outputOl.addEventListener('dblclick', (event) => {
    const troughLi = event.target;
    troughLi.classList.toggle('completed');
  });
}

function clearAll() {
  const clearBttn = document.querySelector('#apaga-tudo');
  clearBttn.addEventListener('click', () => {
    outputOl.innerHTML = '';
  });
}

function clearComplet() {
  const clearCompleted = document.querySelector('#remover-finalizados');
  clearCompleted.addEventListener('click', () => {
    const completeds = document.querySelectorAll('.completed');
    completeds.forEach((removeitem) => removeitem.remove());
  });
}

function saveList() {
  const savebttn = document.querySelector('#salvar-tarefas');
  savebttn.addEventListener('click', () => {
    localStorage.setItem('toDoList', outputOl.innerHTML);
  });
  outputOl.innerHTML = localStorage.getItem('toDoList');
}

function clearSelec() {
  const clearSelectedBttn = document.querySelector('#remover-selecionado');
  clearSelectedBttn.addEventListener('click', () => {
    const clearSelected = document.querySelector('.selected');
    clearSelected.remove();
  });
}

window.onload = () => {
  addItem();
  backgroundSelected();
  completedItem();
  clearAll();
  clearComplet();
  saveList();
  clearSelec();
};
