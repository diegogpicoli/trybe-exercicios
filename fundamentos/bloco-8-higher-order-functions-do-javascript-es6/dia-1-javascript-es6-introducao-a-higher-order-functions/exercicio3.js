const sorteia = () => {
    const sorteado = Math.ceil(Math.random() * (1, 5))
    return sorteado
}   

const checa = (numero, func) => {
    if (numero === func()){
        return console.log('Parabéns você ganhou')
    } return console.log("Tente novamente")
    
}

checa(2, sorteia)
