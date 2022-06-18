let num1 = parseInt(prompt('Ingrese un número'))
let num2 = parseInt(prompt('Ingrese otro número'))
let num3 = parseInt(prompt('Ingrese el último número'))

console.log(num1, num2, num3)

if ((num1>num2) && (num1>num3)) {
    console.log(num1)
} else if ((num2>num1) && (num2>num3)) {
    console.log(num2) 
} else{
     ((num3>num1) && (num3>num2)) 
    console.log(num3)
}

