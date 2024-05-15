function sandwichOrder() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("You have ordered a sandwich with the following items:");
    items.forEach(function (item) { return console.log(item); });
}
// Calling the function with 3 arguments
sandwichOrder("Chicken", "Lettuce", "Tomato");
// Calling the function with 2 arguments
sandwichOrder("Egg", "Mayonnaise");
// Calling the function with 5 arguments
sandwichOrder("Turkey", "Cucumber", "Cheese", "Coleslaw", "Pickles");
