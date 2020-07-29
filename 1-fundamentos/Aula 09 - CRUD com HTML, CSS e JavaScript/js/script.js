/**
 * Garantindo que o JavaScript será
 * processado somente após o total
 * carregamento do HTML
 */
window.addEventListener('load', start);

/**
 * Algumas variáveis globais, o que nem
 * sempre é uma boa prática
 */
var globalIsEditing = false;
var globalCurrentItem = null;
var globalNames = ['Um', 'Dois', 'Três', 'Quatro'];

/**
 * Função de inicialização, a ser executada
 * após o total carregamento da página
 */
function start() {
  preventFormSubmit();
  activateInput();
  renderNames();
}

function preventFormSubmit() {
  function handleSubmit(event) {
    event.preventDefault();
  }

  var form = document.querySelector('form');
  form.addEventListener('submit', handleSubmit);
}

function activateInput() {
  function handleKeyup(event) {
    /**
     * Enquanto o usuário não digital Enter,
     * nada será feito
     */
    if (event.key !== 'Enter') {
      return;
    }

    /**
     * Obtendo o valor digitado
     * trim() elimina os espaços em
     * branco no início e no final da string
     */
    var currentName = event.target.value.trim();

    /**
     * Verificando se o valor é passível
     * de ser um nome
     */
    if (currentName === '') {
      clear();
      return;
    }

    /**
     * Identificando se estamos inserindo ou
     * editando algum nome
     */
    if (globalIsEditing) {
      /**
       * Para editar, trocamos o valor do
       * item do vetor a partir de
       * globalCurrentItem
       */
      globalNames[globalCurrentItem] = currentName;
    } else {
      /**
       * Para inserir, basta invocar o
       * método push
       */
      globalNames.push(currentName);
    }

    /**
     * Limpando o formulário e
     * renderizando os dados
     */
    clear();
    renderNames();
  }

  var inputName = getInput();
  inputName.addEventListener('keyup', handleKeyup);
}

/**
 * Em vários momentos isso foi
 * necessário. Portanto, é uma
 * boa prática isolar o comando
 * em uma função
 */
function getInput() {
  return document.querySelector('#inputName');
}

/**
 * Limpa os dados do formulário
 * e "reinicializa" a edição
 */
function clear() {
  var inputName = getInput();
  inputName.value = '';
  inputName.focus();
  globalIsEditing = false;
}

/**
 * Função mais complexa,
 * que renderiza a lista
 * de nomes na tela a partir do
 * vetor globalNames
 */
function renderNames() {
  /**
   * Função auxiliar para criar
   * o botão de exclusão de cada
   * item
   */
  function createDeleteButton(index) {
    function removeItem() {
      globalNames.splice(index, 1);
      renderNames();
    }

    var button = document.createElement('button');
    button.textContent = 'x';
    button.classList.add('deleteButton');
    button.addEventListener('click', removeItem);

    return button;
  }

  /**
   * Função auxiliar para criar o item
   * de lista de forma clicável, com evento
   * para tratar esse clique
   */
  function createNameSpan(currentName, currentItem) {
    function editItem() {
      var inputName = getInput();
      globalIsEditing = true;
      globalCurrentItem = currentItem;
      inputName.value = currentName;
      inputName.focus();
    }

    var span = document.createElement('span');
    span.textContent = currentName;
    span.classList.add('clickable');
    span.addEventListener('click', editItem);

    return span;
  }

  /**
   * Obtendo a div onde os nomes serão
   * inseridos
   */
  var divNames = document.querySelector('#names');

  /**
   * Criando o elemento <ul> de forma
   * programática
   */
  var ul = document.createElement('ul');

  /**
   * Para cada nome, criamos um <li> correspondente,
   * adicionando um botão para exclusão e tornando
   * o item clicável para edição
   */
  for (var i = 0; i < globalNames.length; i++) {
    /**
     * "Apelidando" alguns dados
     * para facilitar a lógica abaixo
     */
    var currentName = globalNames[i];
    var currentItem = i;

    var deleteButton = createDeleteButton(currentItem);
    var nameSpan = createNameSpan(currentName, currentItem);

    /**
     * Criando o elemento <li> e inserindo
     * o botão e o texto
     */
    var li = document.createElement('li');
    li.appendChild(deleteButton);
    li.appendChild(nameSpan);

    /**
     * Por fim, inserimos o <li>
     * em <ul> de forma
     * programática
     */
    ul.appendChild(li);
  }

  /**
   * Limpamos os dados atuais
   * da <div>
   */
  divNames.innerHTML = '';

  /**
   * Inserimos a <ul>
   * recém-criada
   */
  divNames.appendChild(ul);
}
