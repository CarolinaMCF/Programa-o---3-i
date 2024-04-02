const botoes = document.querySelectorAll('.objetivos');
console.log(botoes.length);

for (let x = 0; x < botoes.length; x++) {
    console.log(x);
    botoes[x].classList.add('ativo');

}
