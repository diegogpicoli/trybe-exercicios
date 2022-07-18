// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';
const local = document.querySelector('#jokeContainer')

const newPiada = (piada) => {
  const piadinha = document.createElement('p')
  piadinha.innerText = piada
  local.appendChild(piadinha)
}

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => newPiada(data.joke));
};

window.onload = () => fetchJoke();