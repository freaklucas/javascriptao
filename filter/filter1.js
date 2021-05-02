const produtos = [
    { nome: 'Notebook', preco: '2499', fragil: true },
    { nome: 'Macbook', preco: '6499', fragil: true },
    { nome: 'copo', preco: '19.90', fragil: true },
    { nome: 'copo de plástico', preco: '1.99', fragil: false },
]

console.log(produtos.filter(function (produtosList) {
    return false
}))

const produtoCaro = produto => produto.preco >= 500
const produtoFragil = produto => produto.fragil // return true no caso

console.log(produtos.filter(produtoCaro).filter(produtoFragil))