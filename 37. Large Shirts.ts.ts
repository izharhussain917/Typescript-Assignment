// Define a Shirt class
class Shirt {
    size: string;
    message: string;
  
    // Constructor with default values
    constructor(size: string = "large", message: string = "I love TypeScript") {
      this.size = size;
      this.message = message;
    }
  
    // Display information about the shirt
    displayInfo() {
      console.log(`Size: ${this.size}, Message: ${this.message}`);
    }
  }
  
  // Function to create a shirt
  function makeShirt(size: string = "large", message: string = "I love TypeScript"): Shirt {
    return new Shirt(size, message);
  }
  
  // Create a large shirt with default message
  const largeShirt = makeShirt();
  console.log("Large Shirt:");
  largeShirt.displayInfo();
  
  // Create a medium shirt with default message
  const mediumShirt = makeShirt("medium");
  console.log("\nMedium Shirt:");
  mediumShirt.displayInfo();
  
  // Create a shirt of any size with a different message
  const customShirt = makeShirt("small", "Different message");
  console.log("\nCustom Shirt:");
  customShirt.displayInfo();