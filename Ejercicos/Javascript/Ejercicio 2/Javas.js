let valor1= parseInt (prompt("Ingrese primer valor", "1"));
let valor2= parseInt (prompt("Ingrese segundo valor", "2"));
let valor3= parseInt (prompt("Ingrese tercer valor", "4"));

let cuenta= ((valor1 + valor2) * valor3);

console.log(valor1, valor2, valor3);

if (valor1 == valor2 && valor2 == valor3) {
    console.log(cuenta)
} else {
    console.log('No son iguales')
}
