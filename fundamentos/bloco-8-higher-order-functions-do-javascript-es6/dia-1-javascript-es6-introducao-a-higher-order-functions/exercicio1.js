const aguarda = () => 'Acordando!!';

const cafe = () => 'Bora tomar café!!';

const dormir = () => 'Partiu dormir!!';

const doingThings = (imprime) => console.log(imprime())

doingThings(aguarda)
doingThings(cafe)
doingThings(dormir)

