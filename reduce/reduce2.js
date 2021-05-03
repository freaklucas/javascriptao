const alunos = [
    { nome: 'João', nota: 3.57, bolsista: true },
    { nome: 'Lucas', nota: 7.57, bolsista: true },
    { nome: 'Joana', nota: 9.57, bolsista: true },
    { nome: 'Grigória', nota: 6, bolsista: false }
]


// todos os alunos são bolsistas?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista // true 
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

// algum aluno é bolsista?

const algumBolsista = (resultado, bolsista) => resultado || bolsista // algum tem que ser bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))