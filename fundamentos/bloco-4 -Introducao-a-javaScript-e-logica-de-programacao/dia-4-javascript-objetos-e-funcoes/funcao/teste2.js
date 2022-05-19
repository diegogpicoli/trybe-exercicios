let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 3];
var contador = {};
array.forEach(function(x) { contador[x] = (contador[x] || 0)+1; });

// console.log(contador);

// for (index in contador){
//     console.log(contador[index])
// }

var lista = []
for (index in contador){
    lista.push(contador[index])
}


function maiorMenor(array){
    for (numero of array){
      if (numero > 9){
        return true
      } else if (numero < 0){
          return true
      } 
    }return false
  }

console.log(maiorMenor(array))


console.log('(',12,')')