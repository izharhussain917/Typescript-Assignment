function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}

// Example usage
let cityCountry1 = city_country("Lahore", "Pakistan");
let cityCountry2 = city_country("New York", "USA");
let cityCountry3 = city_country("Tokyo", "Japan");

console.log(cityCountry1);
console.log(cityCountry2);
console.log(cityCountry3);