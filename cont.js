const botoes = document.querySelectorAll('.objetivos');
const textos = document.querySelectorAll('.aba-conteudo');


console.log(botoes.length);

for (let x = 0; x < botoes.length; x++) {
    console.log(x);
    botoes[x].onclick = function() {
      for (let j = 0; j < botoes.length; j++){
      botoes[j].classList.remove('ativo');
      textos[j].classList.remove('ativa');
    }
    botoes[x].classList.add('ativo');
    textos[x].classList.add('ativa');
  }
}

const contadores = document.querySelectorAll('.contador');
const tempoObjetivo1 = new Date ('2025-01-01T00:00:00');
const tempoObjetivo2 = new Date ('2024-12-10T00:00:00');
const tempoObjetivo3 = new Date ('2024-11-10T00:00:00');
const tempoObjetivo4 = new Date ('2024-12-13T00:00:00');
let tempoAtual = new Date ();
let tempoFinal = tempoObjetivo1 - tempoAtual;
let tempoFinal = tempoObjetivo2 - tempoAtual;
let tempoFinal = tempoObjetivo3 - tempoAtual;
let tempoFinal = tempoObjetivo4 - tempoAtual;

let segundos = Math.floor(tempoFinal/1000);
let minutos = Math.floor(segundos/60);
let horas = Math.floor(minutos/60);
let dias = Math.floor(horas/24)

segundos %= 60;
minutos %= 60;
horas %= 24;
contadores[0].textContent = dias + " dias " + horas + " horas " + minutos + " minutos " + segundos +" segundos ";