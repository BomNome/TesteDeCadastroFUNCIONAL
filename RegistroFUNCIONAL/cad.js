const nome = prompt('Digite seu nome');
const idade = prompt('Digite sua idade');

document.body.innerHTML += `<div id="nome">Nome: ${nome}</div>`;

if(idade<=17){
    document.body.innerHTML += `<div class="idade">Idade: ${idade}</div>`;
    document.body.innerHTML += `<div class="idade">Você é menor de idade!</div>`;
    document.body.innerHTML += `<img class="img" src="img/rep.png">`;
}
else if(idade>=18){
    document.body.innerHTML += `<div class="idade">Idade: ${idade}</div>`;
    document.body.innerHTML += `<div class="idade">Você é maior de idade!</div>`;
    document.body.innerHTML += `<img class="img" src="img/apr.png">`;
}
