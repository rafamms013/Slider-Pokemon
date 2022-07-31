/*
OBJETIVO 1 - Quando clicar na seta avançar temos que mostrar o proximo cartão da lista
    - Passo 1 -> dar um jeito de pegar o elemento HTML da seta avançar
    - Passo 2 -> dar um jeito de indentificar o clique do usuário na seta avançar
    - Passo 3 -> fazer aparecer uo proximo cartao da lista
    - Passo 4 -> buscar o cartao que está selecionado e esconder

    */

/*
OBJETIVO 2 - Quando clicar na seta avançar temos que mostrar o cartão anterior da lista
- Passo 1 -> dar um jeito de pegar o elemento HTML da seta voltar
- Passo 2 -> dar um jeito de indentificar o clique do usuário na seta voltar
- Passo 3 -> fazer aparecer o elemento anterior  da lista
- Passo 4 -> buscar o cartao que está selecionado e esconder

*/

const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;

function esconderCartaoSelecionado() {
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}

function mostrarCartao(indiceCartao) {
    cartoes[indiceCartao].classList.add("selecionado");
}


btnAvancar.addEventListener("click", function () {
    if (cartaoAtual === cartoes.length - 1) return;

    esconderCartaoSelecionado();


    cartaoAtual++;
    mostrarCartao(cartaoAtual);
});


btnVoltar.addEventListener("click", function () {
    if (cartaoAtual === 0) return;


    esconderCartaoSelecionado();

    cartaoAtual--;
    mostrarCartao(cartaoAtual);

});