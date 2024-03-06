function describeCity(city: string, country: string = 'Default Country'): void {
    console.log(`${city} is in ${country}.`);
}

// Calling the function for three different cities
describeCity('Karachi', 'Pakistan');
describeCity('New York', 'USA');
describeCity('Tokyo'); // This will use the default country parameter