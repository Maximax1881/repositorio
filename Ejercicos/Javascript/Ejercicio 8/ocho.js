let note1 = parseInt (prompt('Ingrese Nota', ""))
let note2 = parseInt (prompt('Ingrese Nota', ""))
let note3 = parseInt (prompt('Ingrese Nota', ""))
let prom4 = 4

console.log(note1, note2, note3)

if (((note1 + note2 + note3)/3) >= prom4) {
    console.log('Regular')
} 
else {
    console.log("Reprobado")
}