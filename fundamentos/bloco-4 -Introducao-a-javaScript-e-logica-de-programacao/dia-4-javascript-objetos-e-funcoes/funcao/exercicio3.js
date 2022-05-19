// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function menorValor(array){
    let menor = array[0]
    for (numero of array){
        if (numero < menor){
            menor = numero
        }
    }
    return console.log(array.indexOf(menor))
}

let numeros = [2, 4, 6, 7, 10, 0, -3];

menorValor(numeros)

