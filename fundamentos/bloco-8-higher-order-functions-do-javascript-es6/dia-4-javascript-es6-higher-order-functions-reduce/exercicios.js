const numeros = [50, 85, -30, 3, 15];
let maior = numeros[0];

for (let numero of numeros) {
    if (numero > maior){
        maior = numero
    }
}

console.log(maior)

const achaMaior = (result, numero) => {
    if (result < numero) {
        result = numero
    }
    return result
} 

const resultado = numeros.reduce(achaMaior, 100)

console.log(resultado)

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const somaPar = (resultado, numero) => {
    if (numero % 2 === 0){
        resultado += numero
    }
    return resultado
}

const soma = numbers.reduce(somaPar)

console.log(soma)

const numerosPares = numbers.filter((numero) =>{
    if (numero % 2 === 0){
        return numero
    }
}).reduce((total, numero) => total += numero )

console.log(numerosPares)
