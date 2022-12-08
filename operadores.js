//Operadores lógicos


//Operador incremental e decremental
//++ --
let incrementNumber = 4
console.log(incrementNumber)
//+1
incrementNumber++ //5
console.log(incrementNumber)
++incrementNumber //6 + 1
console.log(incrementNumber)

let descrementNumber = 50
console.log(descrementNumber)
descrementNumber-- //49
console.log(descrementNumber)

//Operador aritimétocos
//+ - / * %
let nota1 = 10
let nota2 = 7.5
let nota3 = 9
let nota4 = 4.5
let avg = (nota1+nota2+nota3+nota4)/4
console.log(avg.toFixed(2))

//Operadores relacionais e igualdade
// <> == === != !== >= <=
let numberRelation1 = 20
let numberRelation2 = 40
let relation = numberRelation1 != numberRelation2 //!= diferente no valor
console.log(relation)

relation = numberRelation1 !== numberRelation2 //!== diferente no valor ou diferente no tipo
console.log(relation)

relation = numberRelation1 == numberRelation2 //== igual no valor
console.log(relation)

relation = numberRelation1 === numberRelation2 // === igual no valor e no tipo
console.log(relation)

//Operador de atribuição
let newnumber = 20
newnumber += 40
console.log(newnumber)



//Operadores condicionais (ternário)
//(condition) ? true : false
let value = 24
let value2 = 32
const newCondition = value >= value2 ? 'Isso é verdade' : 'Isso é falso'
console.log(newCondition)