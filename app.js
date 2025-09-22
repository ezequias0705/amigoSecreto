// Array para armazenar a lista de amigos.
let amigos = [];

/**
 * Adiciona um novo amigo à lista.
 * Esta função é chamada pelo botão "Adicionar" no HTML.
 */
function adicionarAmigo() {
    // Seleciona o campo de input e a lista de amigos na tela.
    const inputAmigo = document.getElementById('amigo');
    const nomeAmigo = inputAmigo.value.trim();

    // Validação: Verifica se um nome foi digitado.
    if (nomeAmigo === '') {
        alert("Por favor, digite o nome do amigo.");
        return;
    }

    // Validação: Verifica se o nome já existe na lista (ignorando maiúsculas/minúsculas).
    if (amigos.map(a => a.toLowerCase()).includes(nomeAmigo.toLowerCase())) {
        alert("Este nome já foi adicionado. Por favor, insira um nome diferente.");
        inputAmigo.value = ''; // Limpa o campo
        return;
    }

    // Adiciona o amigo ao array e atualiza a exibição na tela.
    amigos.push(nomeAmigo);
    atualizarListaAmigos();

    // Limpa o campo de input e o foca para a próxima inserção.
    inputAmigo.value = '';
    inputAmigo.focus();
}

/**
 * Atualiza a lista de amigos visível no HTML.
 */
function atualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Limpa a lista antes de recriá-la

    // Cria e adiciona cada amigo como um item de lista (li).
    for (let i = 0; i < amigos.length; i++) {
        const item = document.createElement('li');
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}

/**
 * Realiza o sorteio do amigo secreto.
 * Esta função é chamada pelo botão "Sortear amigo" no HTML.
 */
function sortearAmigo() {
    // Validação: Verifica se há pelo menos 4 participantes para um sorteio justo.
    if (amigos.length < 4) {
        alert("Adicione pelo menos 4 amigos para realizar o sorteio!");
        return;
    }

    // Embaralha a lista de amigos.
    embaralhar(amigos);

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // Limpa resultados anteriores

    // Cria os pares do sorteio.
    for (let i = 0; i < amigos.length; i++) {
        // O último da lista tira o primeiro.
        const amigoSecreto = (i === amigos.length - 1) ? amigos[0] : amigos[i + 1];

        const itemResultado = document.createElement('li');
        itemResultado.textContent = `${amigos[i]} -> ${amigoSecreto}`;
        resultado.appendChild(itemResultado);
    }
}

/**
 * Função para embaralhar os itens de um array (Algoritmo Fisher-Yates).
 * @param {Array} lista - O array a ser embaralhado.
 */
function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        // Sorteia um índice aleatório dentro do que falta do array.
        const indiceAleatorio = Math.floor(Math.random() * indice);

        // Troca o elemento atual com o elemento do índice aleatório.
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
          }
