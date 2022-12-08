//for
//for (início; condição; interação)

for (let i=1; i<=10; i++) {
    console.log(i);
}

for (let i=1; i<=10; i++) {
    if (i === 5){
        break
        //continue
    }
    console.log(i)
}

//while (enquanto)
let interator = 1
while (interator <= 20) {
    console.log(interator)

    interator++
}

//for of
let number = [2, 4, 3, 5, 6]

for (num of number){
    console.log(num)
}

//for in
let animals = {
    name: 'leão'
    weight: 200,
    age: 4
}
for (item in animals){
    //tipo um para capturar valores de objeto em um for in
    console.log(animals["age"])
    //tipo 2 p/ capturar todo o objeto
    console.log(animals)
    //tipo 3 mostra os valores dentro das propriedades
    console.log(animals[item])
    //tipo 4 capturar valores individuais da propriedades de um objeto
    console.log(animals.name)
}

let arrayName = [
    'Luan',
    'Lucas',
    'Victor',
    'Ester'
]

for (item in arrayName) {
    console.log(arrayName) //mostra todo o array
    //console.log(arrayName[item]) mostra todos os valores
    //console.log(arrayName[2]) mostra diretamente um vetor
    //console.log(item) index dos vetores (posições)
}