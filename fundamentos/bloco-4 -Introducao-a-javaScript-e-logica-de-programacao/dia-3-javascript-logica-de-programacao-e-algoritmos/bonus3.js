let n = 5   
let indexInverso = n
for (index = 0; index < n + 1; index +=1){
    console.log(' '.repeat(indexInverso) + "*".repeat(index))
    indexInverso -= 1

}