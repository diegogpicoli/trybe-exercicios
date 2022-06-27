const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const productsPrices = products.map((nome, index) => {
    return {[products[index]] : prices[index]}
})

console.log(productsPrices)