function mostrar() {

let notas=[1,2,3,4,5,6,7,8,9,10]
let mayor= 0
let menor = 0

    for(let i=0; i<notas.length; i++){
        if(notas[i]>=7) {
            mayor++
        } else {
            menor++
        }
        let objeto ={mayor_7:mayor, menor_7_:menor}
        return {objeto}
    }
}
console.log(mostrar())