const botoes = document.querySelectorAll('.objetivos');
console.log(botoes.length);

for (let x = 0; x < botoes.length; x++) {
    console.log(x);
    botoes[x].onclick = function() {
      for (let j = 0; j < botoes.length; j++)
      botoes[j].classList.remove('ativo');
    }
    botoes[x].classList.add('ativo');
  }
}
