const students = ['Ana', 'Marcos', 'Maria', 'Mauro', 'Karol', 'João']
const grades = ['7', '6.4', '9', '4.2', '8.6', '8.2']

// Filter use TRUE and FALSE as a codition to output data.

const failedStudents = students.filter((_, index) => {
    return grades[index] < 7
})

console.log(failedStudents)
