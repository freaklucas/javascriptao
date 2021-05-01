function Carro(velMaxima = 200, variacaoVelocidade = 5) {
    //atributo privado
    let velocidadeAtual = 0
    
    //metodo publico
    this.acelerar = function () {
        if (velocidadeAtual + variacaoVelocidade <= velMaxima) {
            velocidadeAtual+=variacaoVelocidade
        }
        else {
            velocidadeAtual = velMaxima
        }
    }

    //metodo publico

    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 100)
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro)
console.log(typeof ferrari)