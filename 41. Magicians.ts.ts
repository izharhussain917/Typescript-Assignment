// Define an array of magician names
let magicians: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];

// Function to show magicians
function show_magicians(magicianNames: string[]): void {
    console.log("Magicians:");
    magicianNames.forEach((magician, index) => {
        console.log(`${index + 1}. ${magician}`);
    });
}

// Call the function with the array of magician names
show_magicians(magicians);