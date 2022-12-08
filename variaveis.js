//Declarar

//Globais
//Hoisting -> var
console.log('Variável name existe aqui', name)

{//Scopo(Bloco de código)
    //Local
    var name = "Lucas"
}

console.log('Variável name exite aqui', name)

//Locais
let name = "Luan"
{
    //Scopo (Bloco de código)
    //Local
    console.log('Meu nome chegou aqui', name)

}

console.log('Meu nome chegou aqui', name)

//Declarar Objetos

const human = {
    nome: "Lucas Rodrigues",
    age: 32,
    weight: 90,
    isAthlete: true
}

console.log(human)
console.log(human.age)

//Concatenar
console.log("O humano" + human.nome + "tem a idade" + human.age)

//Interpolação
console.log(`O humano ${human.nome} tem a idade ${human.age}`)

console.log(human.nome)

//array
const animals = [
    "Elefante", //0
    "Garo", //1
    "Leão", //2
    "Cachorro", //3
    
    {//4
        name: "Moacir",
        age: 2,
        weight: 4
    }
]
//tamanho 4
console.log(animals)