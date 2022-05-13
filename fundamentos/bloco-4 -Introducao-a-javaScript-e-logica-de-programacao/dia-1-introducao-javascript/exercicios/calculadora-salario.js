const salario = 300
let salarioMenosInss = 0
let salarioFinal = 0

if (salario <= 1556.94){
    salarioMenosInss = salario - (8 * salario / 100)
}
else if (salario <= 2594.92 ){
    salarioMenosInss = salario - (9 * salario / 100)
    }
else if (salario <= 5189.82 ){
    salarioMenosInss = salario - (11 * salario / 100)
}
else if (salario > 5189.82){
    salarioMenosInss = salario - 570,88
}

if (salarioMenosInss <= 1903.98){
    salarioFinal = salarioMenosInss
}
else if (salarioMenosInss <= 2826.65){
    salarioFinal = salarioMenosInss - ((7.5 * salarioMenosInss / 100) - 142,80) 
}
else if (salarioMenosInss <= 2826.65){
    salarioFinal = salarioMenosInss - ((7.5 * salarioMenosInss / 100) - 142,80) 
}
else if (salarioMenosInss <= 3751.05){
    salarioFinal = salarioMenosInss - ((15 * salarioMenosInss / 100) - 354,80) 
}
else if (salarioMenosInss <= 4664.68){
    salarioFinal = salarioMenosInss - ((22.5 * salarioMenosInss / 100) - 636,13) 
}
else if (salarioMenosInss <= 4664.68){
    salarioFinal = salarioMenosInss - ((27.5 * salarioMenosInss / 100) - 869,36) 
}


console.log(salarioFinal)