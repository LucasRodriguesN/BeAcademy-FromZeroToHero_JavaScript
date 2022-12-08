/// if and else
// se e se não

let num = 10
let num2 = 20
if (num > 5) {
    console.log('Sou maior que 5')

} else {
    console.log('Não sou maior que 5')
}

//>< == === != !==
//&& (and) || (or) ! (not)
if (num >= 10) {
    console.log('Sou maior')

} else if (num1 >= 10 && num2 <=20) {
    console.log('Segunda resposta verdade')
} else {
    console.log('Resposta falsa')
}


//switch
let myExpression = 'x'

switch (myExpression) {
    case 'a':
        console.log('Apertou o a')
        break
    case 'b':
        console.log('Apertou o b')
        break
    case 'c':
        console.log('Apertou o c')
        break
    default:
        console.log('Apertou outra tecla', myExpression)
        break
}

//Calculadora
function calc (num1, operator, num2) {
    let result

    switch(operator) {
        case "+":
            result = num1 + num2
            break

        case "-":
            result = num1 - num2
            break

        case "/":
            result = num1 / num2
            break

            default:
            console.log('Icorreto')
            break

    }
    return result
}

console.log(calc(12, '%', 12))


//throw and try catch

//Saber idade
function myAge(myAge) {
    if(!myAge) {
        throw 'Idade incorreta'
    }

    console.log('Eu executei depois do erro')
}

try {
    myAge(30)
    console.log('Já tratei e deu certo')
} catch(error) {
    console.log(error)

}