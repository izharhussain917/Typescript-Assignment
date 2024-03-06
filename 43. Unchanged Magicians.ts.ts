// Define the original array of magician names
const magicians: string[] = ['Merlin', 'Houdini', 'Gandalf', 'Dumbledore'];

// Function to add "the Great" to each magician's name
function makeGreat(names: string[]): string[] {
    const greatMagicians: string[] = names.map(name => `${name} the Great`);
    return greatMagicians;
}

// Function to display the magicians' names
function showMagicians(names: string[]): void {
    console.log(names.join(', '));
}

// Create a copy of the original array and call makeGreat() with it
const greatMagiciansArray: string[] = makeGreat([...magicians]);

// Display the original array
console.log('Original Magicians:');
showMagicians(magicians);

// Display the array with "the Great" added to each magician's name
console.log('\nMagicians with "the Great":');
showMagicians(greatMagiciansArray);