//Type conversion

//Convertendo string para número e número para string
console.log(Number('9') + 24);
console.log(typeof String(9) + 'Converteu');

//Concatenar
let oneWord = 'Moacir'//6 letras
console.log(oneWord.length)

//Maiúsclas e minúsculas
let phrase = "Olha aí"
console.log(phrase.toUpperCase())
console.log(phrase.toLowerCase())

//Converção para inteiro
let decimalNumber = 32.8
console.log(parseInt(decimalNumber))

let integerNumber = 24
console.log(parseFloat(decimalNumber))

//Trabalhando com casas decimais
let niceNumber = 24.9875775458884454878484
console.log(niceNumber.toFixed(2));
console.log(niceNumber.toFixed(2).replace('.',','));

//Precisão numérica
let otherNumber = 129/32
console.log(Number(otherNumber.toPrecision()))

//Manipulando string e array

/*
    Separando um texto que contém espaços, em um novo array onde
    cada texto é uma posição do array

*/

let newPhrase = "Fala galera"
console.log(newPhrase)
let phraseToArray = newPhrase.split(' ')
console.log(phraseToArray)

// Convertendo novamente o texto para string
// .join(" ") -> Permite que eu gere separações ( - , _/ '')

let phraseModify = phraseToArray.join(" ").toLocaleLowerCase()
console.log(phraseModify)

// Verificar se contém palavras ou letras
let stringInclude = "Veem Pay"
console.log(stringInclude.includes("Pay"))

//Objetos

let ArrayInclude = [
    "Pay",
    "Veem",
    {
        firstName: "Pay",
        lastName: "Veem"
    }
]
console.log(ArrayInclude.includes("Pay"))

// String startWith
console.log(stringInclude.startsWith("Ve"))
// String endsWith
console.log(stringInclude.endsWith("m"))

//Transformando um array em caracteres
let wordToArray = "Quem tá gostando"
console.log(Array.from(wordToArray))

//Manipulando Arrays
const animals = ["🐱", "🐶", "🐘", "🦒", "🦁"] //4 (length 5)
console.log(animals)

//Add item no fim do array
console.log(animals.push("🐀"))
console.log(animals)

//Add item no início
console.log(animals.unshift("🐷"))
console.log(animals)

//Remover item do fim
console.log(animals.pop())
console.log(animals)

//Remover item do início
console.log(animals.shift())
console.log(animals)

//Pegar somente alguns elementos do array
//Não modifica o array
console.log(animals.slice(0,3))
console.log(animals)

//Remover 1 ou mais intens do array
animals.slice(1,3)
console.log(animals.splice(1,3))

//Encontrar a posição do array
let index = animals.indexOf('🐶')
console.log(index)
animals.splice(index, posição)
console.log(animals)

