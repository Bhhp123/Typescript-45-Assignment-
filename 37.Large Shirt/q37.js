function makeShirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("This shirt is size ".concat(size, " and has the message '").concat(message, "' printed on it."));
}
makeShirt(); // Large shirt with default message
makeShirt("Medium"); // Medium shirt with default message
makeShirt("Small", "I love JavaScript"); // Small shirt with custom message
