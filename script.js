let botao = document.querySelector('#criar-tarefa');
botao.addEventListener('click', novoItem);

function novoItem() {
  let lista = document.querySelector('#lista-tarefas');
  let tarefa = document.createElement('li');
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
