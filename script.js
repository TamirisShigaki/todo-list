//Requisito 5 e 6
let botao = document.querySelector('#criar-tarefa');
botao.addEventListener('click', novoItem);

function novoItem() {
  let lista = document.querySelector('#lista-tarefas');
  let tarefa = document.createElement('li');
  tarefa.classList.add('tarefa');
  let input = document.querySelector('#texto-tarefa').value;
  let limpaInput = document.querySelector('#texto-tarefa');

  if (input === '') {
    alert('Erro: Digite nova tarefa!');
  } else {
    input.value = '';
    tarefa.innerHTML = input;
    lista.appendChild(tarefa);
  }
  limpaInput.value = '';
}

//Requisito 7 e 8 - com ajuda da Laís Nametala 19-A
let corLista = document.querySelector('#lista-tarefas');
corLista.addEventListener('click', mudaCor);

function mudaCor(event) {
  let pintarTarefa = document.querySelectorAll('.selected');
  let itemSelecionado = document.querySelector('.selected');

  if (pintarTarefa.length > 0) {
    itemSelecionado.classList.remove('selected');
    itemSelecionado = event.target;
    itemSelecionado.classList.add('selected');
  } else {
    event.target.classList.add('selected');
  }
}
