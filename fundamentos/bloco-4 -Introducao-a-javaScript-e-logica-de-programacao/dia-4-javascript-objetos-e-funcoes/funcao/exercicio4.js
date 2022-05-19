// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

function maiorNome(array){

    let maior = ''
    for (palavra of array){
        if (palavra.length > maior.length){
            maior = palavra
        }
    }
    return console.log(maior)
}

let nome = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

maiorNome(nome)