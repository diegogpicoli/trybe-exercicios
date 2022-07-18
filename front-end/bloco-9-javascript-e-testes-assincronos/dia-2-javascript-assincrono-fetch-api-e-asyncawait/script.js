const url = 'https://api.coincap.io/v2/assets'
const local = document.querySelector('#test')

const testCrypto = () => {

    fetch(url)
      .then((elemento) => elemento.json())
      .then((pagina) => {
        let parada;

        parada = pagina.data
        let contador = 0;
        parada.forEach((item) => {
          if(contador < 10){
            const newElemento = document.createElement('p')
            newElemento.innerText = `(${item.symbol}): ${item.priceUsd}`
            newElemento.className = 'ele'
            local.appendChild(newElemento)
          }
          contador += 1
        })
      })
}


window.onload = () => testCrypto();