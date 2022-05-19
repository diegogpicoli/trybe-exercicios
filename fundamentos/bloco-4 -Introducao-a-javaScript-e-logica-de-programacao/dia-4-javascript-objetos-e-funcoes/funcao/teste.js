let lista = 'ola tudo bom?'

//     function ola(lista){
//         let lista1 = ''
//             for (letra of lista){
//             if (letra == 'a'){
//                 lista1 += (letra.replace('a', 1))
//             } else if (letra == 'e'){
//                 lista1 += (letra.replace('e', 2))
//             } else if (letra == 'i'){
//                 lista1 += (letra.replace('i', 3))
//             } else if (letra == 'o'){
//                 lista1 += (letra.replace('o', 4))
//             } else if (letra == 'u'){
//                 lista1 += (letra.replace('u', 5))
//             } else{
//                 lista1 += (letra)
//             }
//             }
//         return lista1
// }
// console.log(ola('ola tudo bom?'))

function encode(lista) {
    let lista1 = ''
        for (letra of lista){
            if (letra == 'a'){
                lista1 += (letra.replace('a', 1))
            } else if (letra == 'e'){
                lista1 += (letra.replace('e', 2))
            } else if (letra == 'i'){
                lista1 += (letra.replace('i', 3))
            } else if (letra == 'o'){
                lista1 += (letra.replace('o', 4))
            } else if (letra == 'u'){
                lista1 += (letra.replace('u', 5))
            } else{
                lista1 += (letra)
            }
        }
    return lista1
  }
  console.log(encode('ola tudo bom?'))