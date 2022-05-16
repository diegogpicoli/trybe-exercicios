let lista = []

for (let index = 1; index < 26; index += 1){
    lista.push(index)
}


for (let index = 0; index < lista.length; index += 1){
     let resultado = lista[index] / 2
    console.log(resultado)
}