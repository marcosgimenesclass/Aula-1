const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");
const contadores = document.querySelectorAll(".contador");

// Definindo os tempos objetivos para cada aba
const tempos = [
    new Date("2024-12-20T00:00:00"), // Tempo objetivo 1
    new Date("2024-12-20T00:00:00"), // Tempo objetivo 2
    new Date("2024-12-20T00:00:00"), // Tempo objetivo 3
    new Date("2024-12-20T00:00:00")  // Tempo objetivo 4
];

// Função para calcular o tempo restante até um tempo objetivo
function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;

    // Garantindo que não há valores negativos sendo retornados
    if (tempoFinal > 0) {
        return [dias, horas, minutos, segundos];
    } else {
        return [0, 0, 0, 0];
    }
}

// Função para atualizar todos os contadores de tempo
function atualizaCronometro() {
    for (let i = 0; i < contadores.length; i++) {
        document.getElementById("dias" + i).textContent = calculaTempo(tempos[i])[0];
        document.getElementById("horas" + i).textContent = calculaTempo(tempos[i])[1];
        document.getElementById("min" + i).textContent = calculaTempo(tempos[i])[2];
        document.getElementById("seg" + i).textContent = calculaTempo(tempos[i])[3];
    }
}

// Função para iniciar o cronômetro atualizando a cada segundo
function comecaCronometro() {
    atualizaCronometro();
    setInterval(atualizaCronometro, 1000);
}

// Inicialização do cronômetro
comecaCronometro();

// Event listener para os botões de troca de aba
for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {
        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");

        // Atualiza o cronômetro ao mudar de aba
        atualizaCronometro();
    }
}
