let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
numeroMaior = 0

for (let numero of numbers){
    if (numero > numeroMaior){
        numeroMaior = numero
    }
}

console.log(numeroMaior)