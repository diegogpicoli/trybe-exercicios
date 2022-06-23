const fazEmail = (nome) => {
    const email =  `${nome.toLowerCase().split(' ').join('_')}@trybe.com`

    return { [nome] : email}
}

const newEmployees = (fazEmail) => {
    const employees = {
      id1: fazEmail('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: fazEmail('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: fazEmail('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

console.log(newEmployees(fazEmail))
