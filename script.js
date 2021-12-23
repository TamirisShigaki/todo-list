window.onload = function () {
  //! Requisito 5 e 6

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

  //! Requisito 7 e 8 - com ajuda do Kleverson Eller 19-C

  let corLista = document.querySelector('#lista-tarefas');
  corLista.addEventListener('click', mudaCor);

  function mudaCor(event) {
    let pintarTarefa = document.querySelectorAll('#lista-tarefas li');

    for (let index of pintarTarefa) {
      index.removeAttribute('id');
      event.target.id = 'selected';
    }
  }

  //! Requisito 9
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

  //! Requisito 11

  let deleteFinalizado = document.querySelector('#remover-finalizados');
  deleteFinalizado.addEventListener('click', apagarFinalizado);

  function apagarFinalizado() {
    let itemSelecionado = document.querySelectorAll('.completed');
    for (let i = 0; i < itemSelecionado.length; i += 1) {
      itemSelecionado[i].parentElement.removeChild(itemSelecionado[i]);
    }
  }

  //!Requisito 12 - com ajuda do Kleverson Eller 19-C
  //O método JSON.stringify() converte valores em javascript para uma String  JSON.
  //O método JSON.parse() analisa uma string JSON, construindo o valor ou um objeto JavaScript descrito pela string.
  //! Salva Lista:

  let salvaLista = document.querySelector('#salvar-tarefas');
  salvaLista.addEventListener('click', listaSalva);

  function listaSalva() {
    let lista = document.querySelectorAll('#lista-tarefas li');
    let salva = [];
    for (let i of lista) {
      let classe = i.classList.value;
      let texto = i.innerHTML;
      salva.push({
        classes: classe,
        textos: texto,
      });
    }
    localStorage.setItem('listaSalva', JSON.stringify(salva));
  }

  //! Retorno a lista Salva

  let retornaListaSalva = localStorage.getItem('listaSalva');
  let transformaObjeto = JSON.parse(retornaListaSalva);
  let listaRetornada = document.querySelector('#lista-tarefas');

  function novaLista() {
    if (transformaObjeto !== null) {
      for (let i of transformaObjeto) {
        let novaLi = document.createElement('li');
        let novaClasse = i.classes;
        if (novaClasse !== '') {
          novaLi.classList.add(novaClasse);
        }
        let novoTexto = i.textos;
        novaLi.innerHTML = novoTexto;
        listaRetornada.appendChild(novaLi);
      }
    }
  }
  novaLista();

  //! Requisito 13 - com ajuda do Kleverson Eller 19-C
  //! Para Cima
  let botaoCima = document.querySelector('#mover-cima');
  botaoCima.addEventListener('click', paraCima);

  function paraCima() {
    let itemSelecionado = document.querySelector('#selected');
    let itemAnterior = null;
    let lista = document.querySelector('#lista-tarefas');
    let primeiroFilho = lista.firstChild;
    if (itemSelecionado !== null) {
      itemAnterior = itemSelecionado.previousSibling;
    }
    if (
      itemSelecionado !== null &&
      itemSelecionado !== primeiroFilho &&
      itemAnterior !== null
    ) {
      lista.insertBefore(itemSelecionado, itemAnterior); //O método Node.insertBefore() insere um nó antes do nó de referência como um filho de um nó pai especificado.
    }
  }
};

//! Para Baixo
let botaoBaixo = document.querySelector('#mover-baixo');
botaoBaixo.addEventListener('click', paraBaixo);

function paraBaixo() {
  let itemSelecionado = document.querySelector('#selected');
  let itemAnterior = null;
  let lista = document.querySelector('#lista-tarefas');
  let ultimoFilho = lista.lastChild;

  if (itemSelecionado !== null) {
    itemAnterior = itemSelecionado.nextSibling;
  }
  if (
    itemSelecionado !== null &&
    itemSelecionado !== ultimoFilho &&
    itemAnterior !== null
  ) {
    lista.insertBefore(itemAnterior, itemSelecionado); // o metodo foi usado inverso para adicionar o nó depois
  }

  //! Requisito 14 - com ajuda do Kleverson Eller 19-C

  let deleteSelecionado = document.querySelector('#remover-selecionado');
  deleteSelecionado.addEventListener('click', apagarSelecionado);

  function apagarSelecionado() {
    let apagar = document.querySelector('#selected');
    let item = document.querySelector('#lista-tarefas');
    item.removeChild(apagar);
  }
}
