// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Morango', 'Banana', 'Maça'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Leite Condensado', 'Leite em Pó', 'Mel'];

const fruitSalad = (fruit, additional) => {
    const novaLista = [...specialFruit, ...additionalItens]
    return novaLista
};

// console.log(fruitSalad(specialFruit, additionalItens));


const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const userJobInfos = {...user, ...jobInfos}

// console.log(userJobInfos)

const {name, age, nationality, profession, squad} = userJobInfos

// console.log(`Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squad}`)

const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

// saudacoes[1](saudacoes[0]); // Olá

// Produza o mesmo resultado acima, porém utilizando array destructuring

const [ola, escrevendo] = saudacoes

// escrevendo(ola)

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

// console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

[comida, animal, bebida] = [bebida, comida, animal]; // Criando o array e o desestruturando

// console.log(comida, animal, bebida);

// let numerosPares = [1, 3, 5, 6, 8, 10, 12];

// console.log(numerosPares); // [6, 8, 10, 12];

// [,,, ...numerosPares] = numerosPares;

// console.log(numerosPares);

const getNationality = ({ firstName, nationality = 'Brazilian'}) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};


// console.log(getNationality(otherPerson)); // Ivan is Russian
// console.log(getNationality(person));

const getPosition = (latitude, longitude) => ({
    latitude,
    longitude
});
  
//   console.log(getPosition(-19.8157, -43.9542));

const multiply = (number, value = 3) => {
    return number * value
  };
  
//   console.log(multiply(8));
//   console.log(multiply(8, 2));