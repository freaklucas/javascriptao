const carrinho = [
    '{"nome": "Borracha", "preco": "2.45"}',
    '{"nome": "Caderno", "preco": "13.45"}',
    '{"nome": "Lapis", "preco": "6.45"}',
    '{"nome": "Caneta", "preco": "1.00"}',
]

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)

console.log(resultado)