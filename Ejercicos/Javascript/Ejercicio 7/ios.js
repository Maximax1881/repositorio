let pass1 = prompt('Ingrese clave', "")
let pass2 = prompt('Ingrese nuevamente la clave', "")

console.log(pass1, pass2)

if (pass1 == pass2) {
    console.log ('Guardo correctamente')
}
else {
    console.log ('No son correctas')
}