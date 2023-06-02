const alunos = [`João`, `Juliana`, `Ana`, `Caio`, `Lara`, `Marjorie`, `Guilherme`]

const medias = [10, 7, 9, 6, 5, 10, 7]

const listaDeNotasEAlunos = [alunos, medias]

console.log(
    `A aluna da posição 1 da lista de alunos é ${listaDeNotasEAlunos[0][1]} e sua média é ${listaDeNotasEAlunos[1][1]}.
    A aluna da posição 5 da lista de alunos é ${listaDeNotasEAlunos[0][5]} e sua média é ${listaDeNotasEAlunos[1][5]}.`,
)
