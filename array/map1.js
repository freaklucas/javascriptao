const nums = [1, 2, 3, 4, 5]

// é um for com um proposito
let resultado = nums.map(function (e) {
    return e * 2
})

console.log(resultado)

//3 funções que passarao como callback pra funcao map

const somarDez = elemento => elemento + 10

const triplo = elemento => elemento * 3

const paraDinheiro = elemento => `R$ ${parseFloat(elemento).toFixed(2).replace('.', ',')}`

resultado = nums.map(somarDez).map(triplo).map(paraDinheiro)

console.log(resultado)