function sandwichOrder(...items: string[]) {
    console.log("You have ordered a sandwich with the following items:");
    items.forEach(item => console.log(item));
}

// Calling the function with 3 arguments
sandwichOrder("Chicken", "Lettuce", "Tomato");

// Calling the function with 2 arguments
sandwichOrder("Egg", "Mayonnaise");

// Calling the function with 5 arguments
sandwichOrder("Turkey", "Cucumber", "Cheese", "Coleslaw", "Pickles");