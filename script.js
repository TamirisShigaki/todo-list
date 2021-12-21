window.onload = function () {
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

  //Requisito 7 e 8 - com ajuda do Kleverson Eller 19-C
  let corLista = document.querySelector('#lista-tarefas');
  corLista.addEventListener('click', mudaCor);

  function mudaCor(event) {
    let pintarTarefa = document.querySelectorAll('#lista-tarefas li');

    for (let index of pintarTarefa) {
      index.removeAttribute('id');
      event.target.id = 'selected';
    }
  }

  // Requisito 9
  let riscaLista = document.querySelector('#lista-tarefas');
  riscaLista.addEventListener('dblclick', risca);

  function risca(event) {
    event.target.classList.toggle('completed'); //classe esta sendo "pegada" do css //.toggle remove e add o evento
  }

  //Requisito 10
  let deleteAll = document.querySelector('#apaga-tudo');
  deleteAll.addEventListener('click', apagarTudo);

  function apagarTudo() {
    let apagar = document.querySelectorAll('li');
    for (let i = 0; i < apagar.length; i += 1) {
      apagar[i].remove();
    }
  }

  //Requisito 11
  let deleteFinalizado = document.querySelector('#remover-finalizados');
  deleteFinalizado.addEventListener('click', apagarFinalizado);

  function apagarFinalizado() {
    let itemSelecionado = document.querySelectorAll('.completed');
    for (let i = 0; i < itemSelecionado.length; i += 1) {
      itemSelecionado[i].parentElement.removeChild(itemSelecionado[i]);
    }
  }

  //Requisito 14
  let deleteSelecionado = document.querySelector('#remover-selecionado');
  deleteSelecionado.addEventListener('click', apagarSelecionado);

  function apagarSelecionado() {
    let apagar = document.querySelector('#selected');
    let item = document.querySelector('#lista-tarefas');
    item.removeChild(apagar);
  }
};
