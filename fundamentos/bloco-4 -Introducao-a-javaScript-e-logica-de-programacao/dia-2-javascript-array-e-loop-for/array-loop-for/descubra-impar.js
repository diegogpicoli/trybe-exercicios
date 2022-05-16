let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let numerosImpares = []

for (let numero of numbers){
    if (numero % 2 != 0){
        numerosImpares.push(numero)
    }
}

if (numerosImpares.length > 0){
    console.log(numerosImpares.length)
}
else{
    console.log("Nenhum valor impar encontrado")
}