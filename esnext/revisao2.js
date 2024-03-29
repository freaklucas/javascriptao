// arrow funcion

const soma = (a, b) => a * b
console.log(soma(2, 4))

// arrow function(this) = no contexto local

const lexico1 = () => console.log(this === exports)
lexico1()

// parametro default

function log(texto = 'Vue js') {
    console.log(texto)
}

log()
log('Sobrescrevi o vue')

//operador rest

function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}

console.log(total(2,3,4))
