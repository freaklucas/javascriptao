// let e const

{
    var a = 2
    let b = 3
}

console.log(a)

// template string

const produto = 'Ipad'
console.log(`${produto} 
é caro!`)

// destructuring

const [l, e, ...tras] = "Lucas"
console.log(l, e, tras)

const [x, y] = [1, 2,3]
console.log(x,y)

const { idade:i, nome } = { nome: 'Ana', idade: 29 }
console.log(i, nome)
