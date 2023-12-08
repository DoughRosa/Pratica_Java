// 8. Desenvolva um algoritmo para ler dois valores e imprimir uma das
// três mensagens a seguir:
// a. ‘Números iguais’, caso os números sejam iguais;
// b. ‘Primeiro é maior’, caso o primeiro seja maior que o segundo;
// c. ‘Segundo maior’, caso o segundo seja maior que o primeiro.

let primeiroNumero = Number(prompt(`Digite o primeiro número: `));
let segundoNumero = Number(prompt('Digite o segundo número: '));

if(primeiroNumero>segundoNumero){
    document.write('Primeiro é maior')
}
else if(primeiroNumero<segundoNumero){
    document.write('Segundo é maior') 
}
else{
    document.write('Números iguais')
}




