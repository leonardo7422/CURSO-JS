function getInteiroAleatorioEntre (min, max) {
    const valor =  Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao // não necessário atribuir um valor, diferente do While.

do {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`A opção escolhida foi ${opcao}`)
} while(opcao != -1) 

console.log('Até a próxima!')
