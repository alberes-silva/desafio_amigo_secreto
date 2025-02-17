//Declara um array vazio para armazenar os nomes
let amigos = [];

//Função para quando clicar no botão "adicionar"
function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim();
    //Verificar campos vázios
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    //Verificar se o nome já existe na lista
    if (amigos.includes(nome)) {
        alert("Este nome já foi adicionado.");
        return;
    }

    //Adicionar o nome ao array
    amigos.push(nome);
    atualizarLista();

    //limpar o input após adicionar um nome
    input.value = ""; 
    //Retornar o cursor para o input
    input.focus(); 
}

//Função para atualizar a lista
function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    //Limpar a lista antes de atualizar
    lista.innerHTML = ""; 
    //Percorrer o array de amigos e adicionar cada nome à lista
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

//Função quando o botão "Sortear Amigo" é clicado
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Nenhum amigo disponível para sortear.");
        return;
    }

    //Gerar índice aleatório dentro do intervalo do array
    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    //Obter o nome correspondente ao índice sorteado
    let amigoSorteado = amigos[indiceSorteado];

    //Remover o nome sorteado do array
    amigos.splice(indiceSorteado, 1);

    //Atualizar a lista na tela
    atualizarLista();

    //Exibir o nome do amigo sorteado
    document.getElementById("resultado").innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`;
}
