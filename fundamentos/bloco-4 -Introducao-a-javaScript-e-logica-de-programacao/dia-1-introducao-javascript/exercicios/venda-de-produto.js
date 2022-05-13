const custo = 100
const valorDeVenda = 200

const custoComImposto = custo + (20 * custo / 100)

const lucroPorProduto = valorDeVenda - custoComImposto

if (custo > 0 && valorDeVenda > 0){
    console.log(`O Lucro que a empresa vai ter ao vender 1000 unidades é: ${lucroPorProduto * 1000}`)
}
else {
    console.log("Erro!")
}