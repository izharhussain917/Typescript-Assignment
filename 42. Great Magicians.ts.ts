class Magician {
    constructor(public name: string) {}
}

class MagicianList {
    private magicians: Magician[] = [];

    addMagician(name: string): void {
        this.magicians.push(new Magician(name));
    }

    showMagicians(): void {
        console.log("Magicians:");
        this.magicians.forEach((magician) => {
            console.log(magician.name);
        });
    }

    makeGreat(): void {
        this.magicians.forEach((magician) => {
            magician.name = `the Great ${magician.name}`;
        });
    }
}

// Example usage
const magicianList = new MagicianList();

magicianList.addMagician("Merlin");
magicianList.addMagician("Gandalf");
magicianList.addMagician("Houdini");

console.log("Original Magicians:");
magicianList.showMagicians();

magicianList.makeGreat();

console.log("\nMagicians after make_great():");
magicianList.showMagicians();