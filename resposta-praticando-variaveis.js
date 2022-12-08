//1.
let person

//2.
console.log(typeof person)

//3.
person = {
    name: "Moacir",
    age: 30,
    weight: 69,
    isAdmin: false,
    isMan: true,
}

//4.
let human = {}
console.log(typeof human)

//4.1
let human = {
        name: "Moacir",
        age: 30,
        weight: 69,
        isAdmin: false,
        isMan: true,
}
    console.log(typeof human)

//4.2
let human = {
        name: "Moacir",
        age: 30,
        weight: 69,
        isAdmin: false,
        isMan: true,
}
console.log(`O humano ${human.name} tem o peso ${human.weight}`);

//5
let humans = []

//6
humans [
    human
]
console.log(humans)

//7
console.log(humans[0].name)

//8
let newHuman = {
    name: "Lucas",
    age: 30,
    weight: 81,
    isAdmin: true,
    isAMan: true,
};
console.log(newHuman)

humans = [
    human,
    newHuman
]
console.log(humans)

//9
console.log(a)
//a
var a = 1
//b
let a
console.log(a)
{
    let a = 2
    console.log(a)
}
console.log(a)
//c
let b = 3 //definição de variável
console.log(b)
{
    let b = 3
    console.log(b)
}
console.log(b)
//d
const c = 10
    {
        console.log(c)
        const c = 20
        console.log(c)
    }