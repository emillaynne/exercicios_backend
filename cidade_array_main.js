const readlineSync = require('readline-sync')
const Cidade = require('./cidade_class')

console.log('================================================')
console.log('     Dados da Cidade e População     ')
console.log('================================================')
let nome = readlineSync.question("Digite o nome da Cidade: ")
let estado = readlineSync.question("Digite o nome do Estado: ")
let numPopulacao = readlineSync.question("Digite o numero da Populacao: ")
let numHomens = readlineSync.question("Digite o numero de Homens da cidade: ")
let numMulheres = readlineSync.question("Digite o numero de Mulheres da cidade: ")


const cidade1 = new Cidade(nome,estado,numPopulacao,numHomens,numMulheres)

let homensPercentual = cidade1.percentualHomens()
let mulheresPercentual = cidade1.percentualMulheres()



console.log('================================================')
console.log('     resultado sobre os dados da cidade     ')
console.log('================================================')
console.log(`     o percentual de mulheres é ${mulheresPercentual.toFixed(0)} % de ${numPopulacao}  habitantes`)
console.log(`     o percentual de homens é ${homensPercentual.toFixed(0)} % de ${numPopulacao} habitantes`)
console.log('================================================')