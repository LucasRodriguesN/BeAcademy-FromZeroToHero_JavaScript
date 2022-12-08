## O que é uma função no JavaScript?

Uma função JavaScript é um bloco de código projetado para executar uma tarefa específica.
Uma função JavaScript é definida com a palavra- function chave, seguida por um name,
seguido por parênteses () .

Os nomes da funções podem conter letras, dígitos, sublinhados e cifrões (mesmas regras das variáveis).
Os parênteses podem incluir nomes de parâmetros separados por vírgulas:
(parâmetro1, parâmetro2, ...)

O código a ser executado, pela função, é colocado entre chaves: {}

# Documentação: https://www.w3schools.com/js/js_functions.asp

# Anatomia function

function myFunction(){
    //My code
}

# Anatomia function Anonymous

const myFunction =  function () {
    //My code
}

# Execução

myFunction ()

# Parâmetros da função

function myFunctionParameters(parameter1, parameter2){
    //My code
}

# Argumentos na execução
//


## Arrow function, maneira mais moderna de criar uma função

## Exemplo
const arrowFunction = () -> {
    console.log('arrow function')
}

arrowFunction()

## Exemplo com parâmetros e retorno

const arrowFunction = (num1 , num2) => {
    total = num1 + num2
    return total
}

const result = arrowFunction(90,20)
console.log(result)

