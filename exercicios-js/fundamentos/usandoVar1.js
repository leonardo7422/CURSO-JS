{
    {
        {
            {
                var sera = 'Será???'
                console.log(sera)
            }
        }
    }
}

console.log(sera)

// variavel definido com var em js não precisa estar dentro de um escopo para ser encontrada.

function teste() {
    var local = 123
    console.log(local)
}

teste()
console.log(local)

// Porém se a var for declarada dentro de um escopo function, não poderá ser mostrada fora da function sem a mesma ser chamada.