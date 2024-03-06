function orderSandwich(...items: string[]): void {
    console.log("Sandwich Order:");
    
    if (items.length === 0) {
        console.log("  - No items selected.");
    } else {
        for (const item of items) {
            console.log(`  - ${item}`);
        }
    }
    
    console.log("--------------------");
}

// Call the function with different numbers of arguments
orderSandwich("Ham", "Cheese", "Lettuce");
orderSandwich("Turkey", "Swiss");
orderSandwich();