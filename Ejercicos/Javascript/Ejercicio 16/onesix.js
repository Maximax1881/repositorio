/*
let billetes 
let monedas10-Array = [10, 10, 10, 10, 10, 10, 10]
let monedas5-Array =  

const billetes = [50, 100, 200, 500, 1000, 2000] 
*/

/*
PRECONDICION:
La maquina cuenta con 30 monedas de 10 y 50 monedas de 5
El precio de todos los productos el multiplo de 5.
La maquina soporta solo billetes uruguayos (50, 100,200, 500, 1000, 2000)
*/

/* Se ingresa el valor del producto (múltiplo de 5)
Se ingresa el dinero entregado en la maquina
Se debe imprimir cuantas monedas de 10 y cuantas de 5 hay que entregar. 
En caso que el cambio no alcance se imprime "no hay cambio"
*/

let price;
let cash; 
let givenAChange = 10;

let coinsOfTen = getChange(givenAchange);

let expectedCoinsOfTen = 1;

console.log(coinsOfTen == expectedCoinsOfTen);

givenAChange = 50;

coinsOfTen = getChange(givenAChange)

expectedCoinsOfTen = 5;

console.log(coinsOfTen == expectedCoinsOfTen);

givenAChange = 55;

coinsOfTen == getChange(givenAChange);


  function getChange(aChange) {
    return aChange/10
}
