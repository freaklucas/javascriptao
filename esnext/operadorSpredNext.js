// operador ... rest(juntar) spread (espalhar)
// usar rest com parametro na funcao

const funcionario = { nome: 'Maria', salario: 12348.99 }
const clone = { ativo: true, ...funcionario } //spred

console.log(clone)

// usar spred com array

const grupoA = ['João', 'Pedro', 'Maria']
const grupoFinal = ['Gloria', 'Rafaela', ...grupoA]

console.log(grupoFinal)