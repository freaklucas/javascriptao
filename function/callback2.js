const notas = [7.7, 5, 3, 9.9, 8.4, 2, 9]

const menorQueSete = nota => nota < 7
const notasBaixas = notas.filter(menorQueSete)

console.log(notasBaixas)

document.getElementsByTagName('body')[0].onclick = function (e) {
    console.log('O evento ocorreu!!')
}