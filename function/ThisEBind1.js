const pessoa = {
    saudacao: 'bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar

falar() // conflito entre paradigma OO e funcional

const falarDePessoa = pessoa.falar.bind(pessoa) 

falarDePessoa()