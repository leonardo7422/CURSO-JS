const nome = 'Rebeca'
const concatenacao = '0lá ' + nome + '!'

const template =`
    Olá
    ${nome}!`

console.log (concatenacao, template)

//expresões...
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)
