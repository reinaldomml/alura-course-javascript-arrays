const grades = [10, 6.5, 8, 7.5]

let sumGrades = 0

for (let i = 0; i < grades.length; i++) {
    sumGrades += grades[i]
}

const media = sumGrades / grades.length

console.log(`A média das notas é ${media}.`)
