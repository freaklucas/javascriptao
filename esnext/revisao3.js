// ES8: Object .values/object.entries
const obj = { a: 1, b: 2, c: 3 }

console.log(Object.values(obj))
console.log(Object.entries(obj))

// melhorias na notacao literal
const nome = 'Lucas'
const pessoa = {
    nome,
    ola() {
        return 'Isso é uma função também :)'
    }
}

console.log(pessoa.nome, pessoa.ola())

// Class 
class Animal { }
class Cachorro extends Animal {
    falar() {
        return 'Cachorro fala: auau'
    }
}

console.log(new Cachorro().falar())