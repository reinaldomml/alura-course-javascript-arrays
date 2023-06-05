// const grades = ['7', '8', '10', '6']

// // Spread Operator
// // Forma de copar os dados de uma variavel

// const newGrades = [5, ...grades, 10]

// console.log(`Grades é: ${grades}`)
// console.log(`Em New Grades é: ${newGrades}`)

/* For another kind of variables, this not work */

// let num1 = 10
// let num2 = num1

// num2 += 5
// num1 += 1

// console.log(`Num1 é ${num1}. Num2 é ${num2}`)

// let numeroOriginal = 10

// function alteraNumero(numero) {
//     numero = 50

//     console.log(`numero do parâmetro é ${numero}. numeroOriginal é ${numeroOriginal}`)
// }

// alteraNumero(numeroOriginal)

const arrayOriginal = [7, 7, 8, 9]

function alteraArray(array) {
    array.push(10)

    console.log(`array do parâmetro é ${array}`)
    console.log(`arrayOriginal é ${arrayOriginal}`)
}

alteraArray([...arrayOriginal])
