const peca1 =  "bispo"

const peca = peca1.toLowerCase()

if (peca == "peão" || peca == "peao"){
    console.log("Anda uma casa na diagonal")
}
else if (peca == "torre"){
    console.log("Anda reto")
}
else if (peca == "cavalo"){
    console.log("Anda em L")    
}
else if (peca == "bispo"){
    console.log("Anda em diagonal")    
}
else if (peca == "Rainha"){
    console.log("Anda em qualquer direção")    
}
else if (peca == "Rei"){
    console.log("Anda em qualquer direção uma casa")    
}
else {
    console.log("Peça invalida")    
}