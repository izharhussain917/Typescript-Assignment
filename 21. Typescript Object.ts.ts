// write a prgoram that creates objects containing these items.

// let person_Name : string = `Izha`;
// const personName_Array : string[] = [`Ahmed`, `Bilal`, `Hira`];

interface person{
    age : number,
    name: string,
    Nationality: string,
    student: boolean
}

let person = {
    age : 26,
    name : `Taha`,
    Nationality: `Pakistan`,
    student : true

}
console.log(person);

// Datatype of car Object
interface car {
    maker: string,
    Model: number,
    color: string,
    Automatic: boolean
}
// Car Object
let car = {
    maker: `toyota`,
    Model: 2024,
    Color: `Black`,
    Automatic: true
}
console.log(car);
