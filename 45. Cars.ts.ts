interface Car {
    manufacturer: string;
    modelName: string;
    [key: string]: string | number; // Allow any additional key-value pairs
}

function createCar(manufacturer: string, modelName: string, ...extras: [string, string | number][]): Car {
    const car: Car = {
        manufacturer,
        modelName,
    };

    // Add any additional key-value pairs
    extras.forEach(([key, value]) => {
        car[key] = value;
    });

    return car;
}

// Call the function with required information and additional key-value pairs
const myCar = createCar("Toyota", "Camry", "color", "Blue", "year", `2022`);

// Print the resulting object
console.log(myCar);