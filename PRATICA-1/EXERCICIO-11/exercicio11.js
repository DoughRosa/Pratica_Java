// 11. Crie um algoritmo que armazene um número inteiro positivo, e gere
// um alerta com as seguintes mensagens:
// a. “Número é par!”, se o valor armazenado for par;
// b. “Número é impar!”, se o valor armazenado for ímpar;

let numero = Number(prompt(`Digite um número: `));
let restoDivisao = numero/2;

if(numero<0){
    document.write(`Digite um número positivo!`);
}

if(restoDivisao = 0){
    document.write(`Número par!`);
} else {
    document.write(`Número impar!`);
}







