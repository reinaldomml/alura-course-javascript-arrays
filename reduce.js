const SalaJS = [4, 7, 6.5, 5, 6, 7, 8, 5, 9]
const SalaJava = [2, 9, 3, 4, 10]
const SalaPython = [7, 2.5, 8.3, 4, 4.6, 9, 6]

function calculateMedia(gradesFromRoom) {
    const sumOfGrades = gradesFromRoom.reduce((acc, nota) => acc + nota, 0)

    const media = sumOfGrades / gradesFromRoom.length

    return media
}

console.log(`A média da sala de Javascript é ${calculateMedia(SalaJS)}`)
console.log(`A média da sala de Java é ${calculateMedia(SalaJava)}`)
console.log(`A média da sala de Python é ${calculateMedia(SalaPython)}`)
