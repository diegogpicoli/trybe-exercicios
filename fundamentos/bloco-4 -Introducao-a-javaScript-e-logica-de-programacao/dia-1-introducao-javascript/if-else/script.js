const nota = 88

if (nota >= 80 &&  nota < 101){
    console.log("Parabéns você foi aprovado!")
}

else if (nota < 80 && nota >= 60) {
    console.log("Você esta em nossa lista de espera.")
}

else if (nota < 60 && nota >= 0){
    console.log("Você foi reprovado.")
}

else {
    console.log("Valor da nota invalido.")
}