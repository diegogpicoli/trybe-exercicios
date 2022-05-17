let array = ['java', 'javascript', 'python', 'html', 'css'];
let maior = ''
let menor = array[0]
for (palavra of array){
    if (palavra.length > maior.length){
        maior = palavra
    }
    else if (palavra.length < menor.length){
        menor = palavra
    }
}

console.log(maior)
console.log(menor)  