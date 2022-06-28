const teste = (numero) => {
    if (numero < 0){
        return 0
    }

    let total = 0;

    for (let index = numero - 1; 0 < index; index -= 1){
        if (index % 3 === 0 || index % 5 === 0){
            total += index
        }
    }
    return total
}

console.log(teste(-1))