


function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
};

createDaysOfTheWeek();

  // Escreva seu código abaixo.

// Desafio 1

function criaTodosOsDias(){
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];  
  const diasDaSemana = document.querySelector('#days')
  let contador = -2
  for (let index = 0; index < dezDaysList.length; index += 1){
      contador += 1
      const dia = dezDaysList[index];
      const diaDaLista = document.createElement('li');
      diaDaLista.innerHTML = dia;
      if (contador === 24 || contador === 25 || contador === 31){
        diaDaLista.className = 'day holiday'
      if (contador === 25){
        diaDaLista.className = 'day holiday friday'
      }
    } else if (contador === 4 || contador === 11 || contador === 18){
      diaDaLista.className = 'day friday'
    } else {
      diaDaLista.className = 'day'
    }
    diasDaSemana.appendChild(diaDaLista);
  }
}

criaTodosOsDias()

// Desafio 2
function criaFeriados(feriados){
  const botoes = document.querySelector('.buttons-container')
  const botaoFeriado = document.createElement('button')
  botaoFeriado.innerHTML = 'Feriados'
  botaoFeriado.className = 'btn-holiday'
  botoes.appendChild(botaoFeriado)
}

criaFeriados()

// Desafio 3
const botao =  document.querySelector('.btn-holiday')
const holidays = document.getElementsByClassName('holiday')

botao.addEventListener('click', function(event){
  for (item of holidays){
    if (item.style.backgroundColor !== 'darkblue'){
      item.style.backgroundColor = 'DarkBlue'
    } else {
      item.style.backgroundColor = "rgb(238,238,238)"
    }
  }
})

// Desafio 4
function criaSexta(sexta){
  const botoes = document.querySelector('.buttons-container')
  const botaoSexta = document.createElement('button')
  botaoSexta.innerHTML = 'Sexta-feira'
  botaoSexta.className = 'btn-friday'
  botoes.appendChild(botaoSexta)
}
criaSexta()

// Desafio 5
const botaoSexta =  document.querySelector('.btn-friday')
const fridays = document.getElementsByClassName('friday')
const listaValor = []
for (item of fridays){
  listaValor.push(item.innerHTML)
}
botaoSexta.addEventListener('click', function(event){
  for (let index = 0; index < fridays.length; index += 1){
    if (fridays[index].innerHTML !== 'Sexta-feira'){
      fridays[index].innerHTML = 'Sexta-feira'
    } else {
      for (item2 of listaValor){
        fridays[index].innerHTML = listaValor[index]
      }
    }
  }
})

// Desafio 6
const dias = document.querySelector('#days')

dias.addEventListener('mouseover', function(event){
  event.target.style.fontSize = '30px'
  event.target.style.fontWeight = '600'
})

dias.addEventListener('mouseout', function(event){
    event.target.style.fontWeight = '200';
    event.target.style.fontSize = '20px';
})

// Desafio 7

function criaTarefa(tarefas){
  const pai = document.querySelector('.my-tasks')
  const tarefa = document.createElement('span')
  tarefa.innerHTML = tarefas
  pai.appendChild(tarefa)

}

criaTarefa('Academia')

// Desafio 8

function legendaCor(cor){
  const pai = document.querySelector('.my-tasks')
  const elemento = document.createElement('div')
  elemento.style.backgroundColor = cor
  pai.appendChild(elemento)
}

legendaCor('blue')

// Desafio 9

const filho = document.querySelector('.my-tasks').lastElementChild

filho.addEventListener('click', function(){
  if (filho.className !== 'task selected'){
    filho.className = 'task selected'
  } else {
    filho.className = 'task'
  }
})

// Desafio 10

dias.addEventListener('click', function(event){
  const taskCor = document.querySelector('.my-tasks').lastElementChild.style.backgroundColor
  if (event.target.style.color !== taskCor){
  event.target.style.color = taskCor
  }else {
    event.target.style.color = 'rgb(119,119,119)'
  }
})
