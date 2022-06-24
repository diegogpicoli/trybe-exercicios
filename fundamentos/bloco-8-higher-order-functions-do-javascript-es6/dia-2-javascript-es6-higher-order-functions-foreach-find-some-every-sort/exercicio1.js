const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1990,
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

// 1 - Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.

function authorBornIn1947(objeto) {
    if (objeto.author.birthYear === 1947){
        return true
    }
}

// console.log(books.find(authorBornIn1947).author.name)

// 2 - Retorne o nome do livro de menor nome.


function smallerName(array) {
    let nameBook = array[0].name
    array.forEach(element => {
      if (element.name < nameBook){
          nameBook = element.name
      }
    });
    return nameBook;
  }

// console.log(smallerName(books))

// 3 - Encontre o primeiro livro cujo nome possui 26 caracteres.

function getNamedBook(objeto) {
    if (objeto.name.length === 26){
        return true
    }
}

// console.log(books.find(getNamedBook).name)

// 4 - Ordene os livros por data de lançamento em ordem decrescente.

function booksOrderedByReleaseYearDesc(array) {
    array.sort((a, b) => {
        return a.releaseYear - b.releaseYear
    })
}

// booksOrderedByReleaseYearDesc(books)

// console.log(books)

// 5 - Faça uma função que retorne true, se todas as pessoas autoras nasceram no século XX, ou false, caso contrário.

function everyoneWasBornOnSecXX(array) {
    const verifyAges = (array) => array.every((livro) => livro.author.birthYear > 1901)
    return verifyAges(array)
}

// console.log(everyoneWasBornOnSecXX(books))


// 6 - Faça uma função que retorne true, se algum livro foi lançado na década de 80, e false, caso contrário.

function someBookWasReleaseOnThe80s(array) {
    const verifyAges = (array) => array.some((livro) => livro.releaseYear >= 1980 && livro.releaseYear <= 1989)
    return verifyAges(array)
}

// console.log(someBookWasReleaseOnThe80s(books))

// 7 - Faça uma função que retorne true, caso nenhum author tenha nascido no mesmo ano, e false, caso contrário.

// function authorUnique(array) {
//     let resultado;
//     const nascimentos = []
//     array.forEach(element => {
//         let nascimento = element.author.birthYear
//         function authorBornIn(element) {
//             if (element.author.birthYear === nascimento){
//                 resultado = false
//                 nascimentos.push(element.author.birthYear)
//             }
//             if (resultado === false){
//                 resultado === false
//             } else {
//                 resultado = true
//             }
//         }
//         array.find(authorBornIn)
//     })
//     return resultado
// }

function authorBornIn(element) {
    if (element.author.birthYear === 1920){
        return false
    }
    return true
}


// console.log(authorBornIn(books[2]))

console.log(authorUnique())


function authorUnique() {
    return books.every((book) =>
      !books.some((bookSome) =>
        (bookSome.author.birthYear === book.author.birthYear)
        && (bookSome.author.name !== book.author.name)));
  }