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

    if (amigos.includes(nome)){
        alert("Esse nome já foi adicionado!");
        return;
    }

    amigos.push(nome);
    //atualizarLista();
    input.value = "";

    console.log(`${nome} foi adicionado! Lista atual:`, amigos);
}