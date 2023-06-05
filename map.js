const grades = [10, 9.5, 8, 7, 6]

const result = grades.map((grade) => {
    return grade + 1 >= 10 ? 10 : grade + 1
})

console.log(result)
