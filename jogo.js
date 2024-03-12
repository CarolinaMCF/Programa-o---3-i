let numeroSecreto = 7;

let chute = '';


while(chute == null ||  chute != numeroSecreto){
    alert('Nunca esqueça de desistir dos seus sonhos :)');
    chute = prompt('Escolha um número entre 0 e 10.');
}

if(numeroSecreto == chute){
    alert('Parabéns! Você acertou!');
    console.log('Parabéns!');
} else{
    alert('Você errou...que tristreza!');
    console.log('Número incorreto.');
}
