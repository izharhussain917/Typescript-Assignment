class Animal {
    constructor(public name: string, public description: string) {}
}

let animals: Animal[] = [
    new Animal("Dog", "A dog would make a great pet."),
    new Animal("Cat", "A cat can be an independent and loving companion."),
    new Animal("Rabbit", "Rabbits are social animals and can be wonderful pets."),
];

// Print names and statements about each animal
for (let animal of animals) {
    console.log(animal.name + ": " + animal.description);
}

// Print a common characteristic statement
console.log("Any of these animals would make a great pet!");