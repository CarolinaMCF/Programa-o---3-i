// alert('Hello you!');
var nomeUsuario = '';
var texto = document.querySelector('span');

while(nomeUsuario == '' ){
    nomeUsuario = prompt('Qual é seu nome?');
}

if (nomeUsuario == null){
    texto.textContent = 'Usuário';
} else {
    texto.textContent = nomeUsuario;
}


