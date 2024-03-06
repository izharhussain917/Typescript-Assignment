// let personName : string = `ERIC`;
// console.log(`Hello ${personName} would you like to learn some python todya ?`);

let personName: string = ``;
personName = prompt(`What is your Name ?`) ||``;
if (personName !== null && personName !== ``){
    alert(`Hello ${personName}, Would you like to learn some python today?`)
}
