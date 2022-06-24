// EX1

// const emailListInData = [
//     'roberta@email.com',
//     'paulo@email.com',
//     'anaroberta@email.com',
//     'fabiano@email.com',
//   ];
  
//   const showEmailList = (email) => {
//     console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
//   };
  
  // Adicione seu código aqui

// emailListInData.forEach(showEmailList)

// EX2

// const numbers = [19, 21, 30, 3, 45, 22, 15];

// const findDivisibleBy3And5 = (number) => {
//     if (number % 3 === 0 && number % 5 === 0){
//         return true
//     }
//     return false
// }

// console.log(numbers.find(findDivisibleBy3And5))

// EX3

// const names = ['João', 'Irene', 'Fernando', 'Maria'];

// const findNameWithFiveLetters = (nome) => nome.length >= 5 ? true : false


// console.log(names.find(findNameWithFiveLetters));

// EX4

// const musicas = [
//     { id: '31031685', title: 'Partita in C moll BWV 997' },
//     { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
//     { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
//   ]
  
//   function findMusic(elemento) { 
//       if (elemento.id === '31031685'){
//       return true
//       }
//    }


// findMusic(musicas)

//   console.log(musicas.find(findMusic).title)

// EX5

// const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

// const hasName = (arr, name) => arr.some((item) => item === name)

// console.log(hasName(names, 'Ana'))

// EX6

// const people = [
//     { name: 'Mateus', age: 18 },
//     { name: 'José', age: 16 },
//     { name: 'Ana', age: 23 },
//     { name: 'Cláudia', age: 20 },
//     { name: 'Bruna', age: 19 },
//   ];
  
//   const verifyAges = (arr, minimumAge) => arr.every((item) => item.age >= 18)
  
//   console.log(verifyAges(people, 18));

// EX7

const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
  // Adicione se código aqui

people.sort((a, b) => a.age - b.age);
  
console.log(people);