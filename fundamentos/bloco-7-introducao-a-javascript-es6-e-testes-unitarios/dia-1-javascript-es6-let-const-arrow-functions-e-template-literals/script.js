// Exercício 1
// const test = (escopo) => {
//     if (escopo === true) {
//       let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//       ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//       console.log(ifScope);
//     } else {
//       let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//       console.log(elseScope);
//     }
// }

//  test(true);


// Exercício 2
// const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// oddsAndEvens.sort((a, b) => {
//     if (a > b) return 1;
//     if (a < b) return -1;

//     return 0
// })

// console.log(oddsAndEvens); // será necessário alterar essa linha 😉

// console.log(
//     `Os Números ${oddsAndEvens} se encontram ordenados de forma crescente!`
// )


// Exercício 3
// const factorial = (number) => {
//     let numero = number
//     let fatorial = number - 1
//     let armazena = 0

//     for (index = 0; index < number; index += 1){
//         armazena += numero * fatorial
//         numero = armazena
//         fatorial -= 1
        
//     }
//     console.log(armazena)
// }



// factorial(5)

//Exercício 4
// const longestWord = (string) => {
//     const array = string.split(' ')
//     let tamanho = ''
//     for (index = 0; index < array.length; index += 1){
//        if (array[index].length > tamanho.length){
//            tamanho = array[index]
//        }
       
//     }    
//     return console.log(tamanho)
// }


// longestWord('Antônio foi no banheiro e não sabemos o que aconteceu')
