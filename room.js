const alunos = [
    `João`,
    `Juliana`,
    `Ana`,
    `Caio`,
    `Lara`,
    `Marjorie`,
    `Guilherme`,
    `Aline`,
    `Fabiana`,
    `André`,
    `Carlos`,
    `Paulo`,
    `Bia`,
    `Vivian`,
    `Isabela`,
    `Vinícius`,
    `Renan`,
    `Renata`,
    `Daisy`,
    `Camilo`,
]

const sala1 = alunos.slice(0, alunos.length / 2)
const sala2 = alunos.slice(alunos.length / 2)

console.log(`Alunos: ${sala1}`)
console.log(`Alunos: ${sala2}`)
