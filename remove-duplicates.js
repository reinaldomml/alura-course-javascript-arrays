const names = ['Ana', 'Clara', 'Maria', 'Maria', 'João', 'João', 'João']

const nameSet = new Set(names)

/* Another Option */
// const namesClean = [...new Set(names)]
const namesClean = [...nameSet]

console.log(namesClean)
