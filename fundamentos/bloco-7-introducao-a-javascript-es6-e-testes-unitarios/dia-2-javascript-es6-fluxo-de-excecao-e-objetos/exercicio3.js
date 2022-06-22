const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };



const adiciona = (objeto, chave, valor) => {

    objeto[`${chave}`] = valor
}

const listaKeys = (objeto) => console.log(Object.keys(objeto))

const tamanhoObjeto = (objeto) => {
    const array = Object.keys(objeto)
    
    return console.log(array.length)

}

const listaValor = (objeto) => console.log(Object.values(objeto))

adiciona(lesson2, 'turno', 'noite')

const novoObjeto = Object.assign({}, { lesson1: lesson1 }, { lesson2: lesson2 }, { lesson3: lesson3 })


const contaEstudante = (objeto) => {

    return console.log(objeto.lesson1.numeroEstudantes + objeto.lesson2.numeroEstudantes + objeto.lesson3.numeroEstudantes)

}


const chaveValor = (objeto) => {

    const array = Object.assign(objeto)

}

const array = Object.entries(lesson1)

console.log(array)