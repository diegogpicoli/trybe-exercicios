// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function maiorValor(array){
    let maior = 0
    for (numero of array){
        if (numero > maior){
            maior = numero
        }
    }
    return console.log(array.indexOf(maior))
}

let numeros = [2, 3, 6, 7, 10, 1];

maiorValor(numeros)

