// 12. Escreva um algoritmo que armazene o ano atual e o ano de
// nascimento de uma pessoa. Escrever uma mensagem no console
// que diga se ela poderá ou não votar este ano (não é necessário
// considerar o mês em que a pessoa nasceu).

let anoDeNascimento = Number(prompt(`digite o seu ano de nascimento: `));
let anoAtual = 2023;

if(anoAtual-anoDeNascimento>=16){
    document.write(`PODE VOTAR!`);
} else{
    document.write(`NÃO PODE VOTAR!`);
}





