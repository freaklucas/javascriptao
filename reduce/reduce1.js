const alunos = [
    { nome: 'João', nota: 3.57, bolsista: false },
    { nome: 'Lucas', nota: 7.57, bolsista: true },
    { nome: 'Joana', nota: 9.57, bolsista: true },
    { nome: 'Grigória', nota: 6, bolsista: false }
]

console.log(alunos.map(al => al.nota))

const resultado = alunos.map(al => al.nota).reduce(function (acumulador, valorAtual) {
    console.log(acumulador, valorAtual)

    return acumulador + valorAtual
})

console.log(resultado)