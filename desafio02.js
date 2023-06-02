const listaDeAlunos = [`João`, `Juliana`, `Ana`, `Caio`, `Lara`, `Marjorie`, `Guilherme`]
const medias = [8, 7, 9, 6, 5, 10, 3]

const data = [listaDeAlunos, medias]

function checkMedias(aluno) {
    if (data[0].includes(aluno)) {
        // const alunos = data[0]
        // const medias = data[1]
        const [alunos, medias] = data // ECMA6

        const index = alunos.indexOf(aluno)
        const mediaDoAluno = medias[index]

        console.log(`O aluno ${aluno} possui a média ${mediaDoAluno}.`)
    } else {
        console.log(`Aluno não encontrado.`)
    }
}

checkMedias('Ana')
