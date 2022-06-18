let largo = parseInt (prompt('Ingrese Largo', ""))
let ancho = parseInt (prompt('Ingrese Ancho', ""))
let alto = parseInt (prompt('Ingrese el Alto', "")) 

console.log(largo, ancho, alto)
//console.log(`El Volumen de la Caja es: ${largo * ancho * alto}`);

function areacaja (largo, ancho, alto) {
    return (largo*ancho*alto);
}
const resultado = areacaja(largo, ancho, alto)
console.log(areacaja);