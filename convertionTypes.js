const inicioFoiNumero = 1

let numType = 18

let numeroFalso = '18'

console.log(`Convertido para number. ${Number(numeroFalso)}. 
${typeof(parseFloat(numeroFalso))}`)

console.log(`Convertido para number. ${parseFloat(numeroFalso)}. 
${typeof parseFloat(numeroFalso)}`)

console.log('Primeiro console.log é '+typeof String(numType))

console.log(typeof(inicioFoiNumero))

console.log(typeof inicioFoiNumero.toString())


let value1 = 1
let value2 = '1'

let convertionSoma = Number(value1) + Number(value2)
let valorNumericoBugado = '100px'


let missionCompleted = true

let valueBoolean1 = false
let valueBoolean2 = true

console.log(`Você completou a missão ? status: ${String(missionCompleted)}`)
console.log(`quer mais missões ? status: ${!missionCompleted.toString()}`)

console.log(`A soma é ${convertionSoma}`)

console.log(`O valor do value1 é ${Number(valueBoolean1)}, já o do value2 é ${Number(valueBoolean2)}`)

console.log(Number(valueBoolean1))
console.log(Number(valueBoolean2))

// Para valor false é 0
// Para valor true é 1


console.log(Number(valorNumericoBugado))// Not a number. Não é um número