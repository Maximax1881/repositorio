let notas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let cuantosmayores = 0
let cuantosmenores = 0

    for(let i=0; i<notas.lenght; i++) { 
        if (notas[i]>=7) {
        cuantosmayores++
        }else {
        cuantosmenores++
        }
    }

    console.log(cuantosmayores, cuantosmenores)
