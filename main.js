const botoes = document.querySelectorAll(".botao");

for(let i = 0; i < botoes.length; i++){
    botoes[i].onclick = function() {
        // Primeiro, remova a classe 'ativo' de todos os botões
        for(let j = 0; j < botoes.length; j++){
            botoes[j].classList.remove('ativo');
            botoes[j].style.backgroundColor = ""; // Redefina a cor de fundo para vazio
        }
        // Em seguida, adicione a classe 'ativo' ao botão clicado
        this.classList.add('ativo'); // Usamos 'this' para se referir ao botão atual
        this.style.backgroundColor = "#FF5733"; // Substitua pela cor desejada
    }
}
