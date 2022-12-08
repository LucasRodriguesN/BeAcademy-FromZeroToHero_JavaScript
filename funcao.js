//Exemplo

//method
function myFristFunction() {
    //Entra meu código
    console.log("Olha função")
}

//Executar
myFristFunction()

//Função com parâmetros e argumentos
//number1 = 32 e number2 = 24
function sum(number1, number2){

    console.log(number1 + number2)

}

sum(32, 24)

//Função com return

function myFristFunctionWithReturn(num1, num2){
    let total = num1 + num2
    return total

}

myFristFunctionWithReturn(20,20)
console.log(myFristFunctionWithReturn(20,20))

//Restaurante
function meuPratoDeComida(comida1, comida2, comida3, comida4) {
    return `Meu prato de comida é: ${comida1}, ${comida2}, ${comida3}, ${comida4}`

}


const prato = meuPratoDeComida('arroz', 'feijão', 'bife', 'batata')
console.log(prato)

//Arrow function
const myFirstArrowFunction = (number1, number2) => {
    let total = number1 + number2
    return total;
}

const result = myFirstArrowFunction(20,20)
console.log(result)

//Função anônima
(function () {
    console.log('PayLivre S2')
})()//Autoexecução

setTimeout(function(){
    console.log('Vou levar 3 seg. para executar')
},3000)//3s

//Parte 1
//let assunto

//function criarAssunto(assunto){
//    return assunto
//}

//console.log(criarAssunto(assunto));

//Parte 2
let assunto = 'Estudar' //var = valor

function criarAssunto(assunto){
    return assunto//
}

console.log(assunto) // resposta => 'Estudar'
console.log(criarAssunto(assunto)); // resposta => 'Estudar'


//Parte 3
let assunto = 'Estudar' //var = valor

function criarAssunto(assunto){
    assunto = "Escutar música" //mudança de valor
    return assunto//
}

console.log(assunto) // resposta => Estudar
console.log(criarAssunto(assunto)); // resposta => Escutar música

//Parte 4
let assunto = 'Estudar' //var = valor

function criarAssunto(){ //Sem parâmetro
    assunto = "Escutar música" //mudança de valor
    return assunto //
}

console.log(assunto) // resposta => Estudar
console.log(criarAssunto(assunto)); // resposta => Escutar música

//Hoisting
digaMinhaIdade()

function digaMinhaIdade(){
    return console.log(30)
}

//Não Funciona
const digaMinhaIdade = function(){
    return console.log(30)
}

//Callback
function minhaFuncao(callback) {
    console.log('Início da minha função =)')

    callback(15,15)

    console.log('Final da minha função')
}

minhaFuncao(
    (num1, num2) => {
        return console.log(num1, num2)
    }
)

//Function construct
function Sum(){
    this.num1,
    this.num2,
    this.calc = function (num1, num2){
        return total = num1 + num2
    }
}

//

const math = new Sum()
//console.log(math)
console.log(math.calc(32,32))

const math2 = new Sum()
console.log(math.calc(50,64))

const math3 = new Sum()
const num1 = math.num1 = 24
const num2 = math.num2 = 50

console.log(num1)
console.log(num2)
console.log(math3.calc(num1, num2))

//
const math = new Sum().calc(45,54)

//
const data = new Date().getDay;
console.log(data)