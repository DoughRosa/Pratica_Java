// 9. As maçãs desta estação custam R$0,30 se forem compradas
// menos do que uma dúzia, e R$0,25 se forem compradas pelo menos
// doze. Desenvolva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

let macasCompradas = Number(prompt(`digite o numero de maçãs compradas:`));
let macaNumero = 0.30;
let macaPreco = macasCompradas*macaNumero;

if(macasCompradas>=12){
    macaNumero = 0.25
}

document.write(`Valor total da compra: R$ `,macaPreco.toFixed(2));