let valor // não inicializada
console.log(valor)

valor = null // ausencia de valor
console.log(valor)
// console.log(valor.toString()) // Erro!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evitar atribuir undefined.
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null // produto sem preço, ou seja, de graça
console.log(!!produto.preco)
console.log(produto)

