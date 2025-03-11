//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo(){
    let input = document.getElementById('amigo'); // Obtém o campo de entrada pelo ID
    let nome = input.value.trim(); // Captura o valor e remove espaços extras

    // Verificando se o nome foi inserido
    if (nome == ""){
        alert("Por favor, insira um nome.");
        return;
    }

    // Verificando se o nome já foi adicionado a lista anteriormente
    if (amigos.includes(nome)){
        alert("Esse nome já foi adicionado!");
        return;
    }

    amigos.push(nome);
    atualizarLista();
    input.value = "";

    console.log(`${nome} foi adicionado! Lista atual:`, amigos);
}

function atualizarLista(){
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++){
        const li = document.createElement("li");
        li.textContent = amigos[i];

        lista.appendChild(li);
    }
}