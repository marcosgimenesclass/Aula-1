const botoes = document.querySelectorAll(".botao");
const abas = document.querySelectorAll(".aba-conteudo");

for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function() {

        // Remover a classe 'ativo' de todos os botões
        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
        }

        // Adicionar a classe 'ativo' apenas ao botão clicado
        botoes[i].classList.add("ativo");

        // Mostrar a aba correspondente
        for (let k = 0; k < abas.length; k++) {
            abas[k].classList.remove("ativo");
        }
        abas[i].classList.add("ativo");
    }
}
