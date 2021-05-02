Array.prototype.filter2 = function (callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            newArray.push(this[i])
        }
    }
    return newArray
}

const produtos = [
    { nome: 'Notebook', preco: '2499', fragil: true },
    { nome: 'Macbook', preco: '6499', fragil: true },
    { nome: 'copo', preco: '19.90', fragil: true },
    { nome: 'copo de plástico', preco: '1.99', fragil: false },
]

const produtoCaro = produto => produto.preco >= 2500
const produtoFragil = produto => produto.fragil // return true no caso

console.log(produtos.filter2(produtoCaro).filter2(produtoFragil))