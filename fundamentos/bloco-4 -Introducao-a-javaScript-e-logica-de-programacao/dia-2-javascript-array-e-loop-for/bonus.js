let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let ordem = []

for (let index = 0; index < numbers.length; index += 1){
    console.log('primeiro for', index)
    for (let index2 = 0; index2 < index; index2 += 1)
        console.log('segundo for',index2)
    
}