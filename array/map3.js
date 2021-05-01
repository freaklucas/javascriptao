// crindo uma "mini versao da funcao map"

Array.prototype.map2 = function (callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }

    return newArray
}

const carrinho = [
    '{"nome": "Borracha", "preco": "2.45"}',
    '{"nome": "Caderno", "preco": "13.45"}',
    '{"nome": "Lapis", "preco": "6.45"}',
    '{"nome": "Caneta", "preco": "1.00"}',
]

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)

console.log(resultado)