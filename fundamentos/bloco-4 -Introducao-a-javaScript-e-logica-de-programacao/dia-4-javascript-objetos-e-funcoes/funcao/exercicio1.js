// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

function verificaPalindrome(nome){
    let palavra = ''
    for (let index = nome.length -1; index >= 0; index -= 1){
        palavra += nome[index]
    }
    if (palavra == nome){
        return console.log(true)
    }
    return console.log(false)

}

verificaPalindrome('arara');

verificaPalindrome('desenvolvimento');
