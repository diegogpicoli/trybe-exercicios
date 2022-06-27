const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
  // Adicione o código do exercício aqui:

// 1 - Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA 

// const expectedResult = [
//     'As Crônicas de Gelo e Fogo - Fantasia - George R. R. Martin',
//     'O Senhor dos Anéis - Fantasia - J. R. R. Tolkien',
//     'Fundação - Ficção Científica - Isaac Asimov',
//     'Duna - Ficção Científica - Frank Herbert',
//     'A Coisa - Terror - Stephen King',
//     'O Chamado de Cthulhu - Terror - H. P. Lovecraft',
// ];
  
function formatedBookNames(array) {
    const novoArray = array.map((elemento) => {
        return `${elemento.name} - ${elemento.genre} - ${elemento.author.name}`
    })
    return console.log(novoArray)
}

// 2 - Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author, com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha considerando suas idades quando o livro foi lançado.

// const expectedResult = [
//     {
//       age: 31,
//       author: 'Isaac Asimov',
//     },
//     {
//       age: 38,
//       author: 'H. P. Lovecraft',
//     },
//     {
//       age: 39,
//       author: 'Stephen King',
//     },
//     {
//       age: 43,
//       author: 'George R. R. Martin',
//     },
//     {
//       age: 45,
//       author: 'Frank Herbert',
//     },
//     {
//       age: 62,
//       author: 'J. R. R. Tolkien',
//     },
// ];
  
function nameAndAge(array) {
    const novoArray = array.map((elemento) => {
        return { age: (elemento.releaseYear - elemento.author.birthYear), author: elemento.author.name}
    })
    return novoArray.sort((a, b) => {
        return a.age - b.age
    })
}

// 3 - Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.

// const expectedResult = [
//     {
//       id: 1,
//       name: 'As Crônicas de Gelo e Fogo',
//       genre: 'Fantasia',
//       author: { name: 'George R. R. Martin', birthYear: 1948 },
//       releaseYear: 1991
//     },
//     {
//       id: 2,
//       name: 'O Senhor dos Anéis',
//       genre: 'Fantasia',
//       author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
//       releaseYear: 1954
//     },
//     {
//       id: 3,
//       name: 'Fundação',
//       genre: 'Ficção Científica',
//       author: { name: 'Isaac Asimov', birthYear: 1920 },
//       releaseYear: 1951
//     },
//     {
//       id: 4,
//       name: 'Duna',
//       genre: 'Ficção Científica',
//       author: { name: 'Frank Herbert', birthYear: 1920 },
//       releaseYear: 1965
//     }
//   ];
  
function fantasyOrScienceFiction(array) {
    const novoArray = array.filter((elemento) => {
        return elemento.genre === 'Ficção Científica' || elemento.genre === 'Fantasia'
    })
    return novoArray
}

// 4 - Crie um array ordenado pelos livros com mais de 60 anos de publicação e ordene-o pelo livro mais velho.

// const expectedResult = [
//     {
//       id: 6,
//       name: 'O Chamado de Cthulhu',
//       genre: 'Terror',
//       author: { name: 'H. P. Lovecraft', birthYear: 1890 },
//       releaseYear: 1928,
//     },
//     {
//       id: 3,
//       name: 'Fundação',
//       genre: 'Ficção Científica',
//       author: { name: 'Isaac Asimov', birthYear: 1920 },
//       releaseYear: 1951,
//     },
//     {
//       id: 2,
//       name: 'O Senhor dos Anéis',
//       genre: 'Fantasia',
//       author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
//       releaseYear: 1954,
//     },
// ];
  
function oldBooksOrdered(array) {
    const novoArray = array.filter((elemento) => {
        return (2022 - elemento.releaseYear ) > 60
    })
    return novoArray.sort((a, b) => {
        return a.releaseYear - b.releaseYear
    })
}

//  5 - Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.

// const expectedResult = [
//     'Frank Herbert',
//     'George R. R. Martin',
//     'Isaac Asimov',
//     'J. R. R. Tolkien',
//   ];
  
function fantasyOrScienceFictionAuthors(array) {
    const novoArray = array.filter((elemento) =>  elemento.genre === 'Ficção Científica' || elemento.genre === 'Fantasia').map((elemento) => elemento.author.name)
    return novoArray.sort()
}

// 6 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação.

// const expectedResult = [
//     'O Senhor dos Anéis',
//     'Fundação',
//     'O Chamado de Cthulhu',
// ];
  
function oldBooks(array) {
    const novoArray = array.filter((elemento) => {
        return (2022 - elemento.releaseYear ) > 60
    }).map((elemento) => {
        return elemento.name
    })
    return novoArray
}

//  7 - Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.

// const expectedResult = 'O Senhor dos Anéis';

function authorWith3DotsOnName() {
  return books.find((book) => (
    book.author.name.split(' ')
      .filter((word) => word.endsWith('.')).length === 3
  )).name;
}

