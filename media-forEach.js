const grades = [10, 6.5, 8, 7.5]

let sumGrades = 0

grades.forEach(function (grade, indice) {
    sumGrades += grade
    // console.log(indice)
})

const media = sumGrades / grades.length

console.log(`A média das notas é ${media}.`)
