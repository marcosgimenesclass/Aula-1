for(let i = 0; i < botoes.length; i++){
    botoes[i].onclick = function() {
        // Primeiro, remova a classe 'ativo' de todos os botões
        for(let j = 0; j < botoes.length; j++){
            botoes[j].classList.remove('ativo');
        }
        // Em seguida, adicione a classe 'ativo' ao botão clicado
        botoes[i].classList.add('ativo');
    }
}
