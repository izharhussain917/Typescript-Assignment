// // lower case
// let personName: string = "Izhar"
// console.log("lowercase:", personName.toLocaleLowerCase());
// // upper case
// console.log("uppercase:", personName.toLocaleUpperCase());
// // Title case
// console.log("titlecase:", personName.replace(/\bw/g,c=> c.toUpperCase()));


let personName : string = ``;
personName = prompt(`what is your name`) || ``;
let lowercase : string = personName.toLocaleLowerCase();
let uppercase : string = personName.toLocaleUpperCase();
let Titlecase : string = personName.split(``).map(word =>word.charAt(0).toLocaleUpperCase() + word.slice(1).toLocaleLowerCase()).join(``);
if(personName != null && personName !== ``){
    alert(`Hello ${personName}, Here are your name in: 
    lowercase: ${lowercase}
    uppercase: ${uppercase}
    Titlecase: ${Titlecase}`)
}
else{
    alert(`Please fill your name !`)
}