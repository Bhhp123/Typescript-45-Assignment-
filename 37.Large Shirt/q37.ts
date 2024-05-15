function makeShirt(size: string = "Large", message: string = "I love TypeScript"): void {
    console.log(`This shirt is size ${size} and has the message '${message}' printed on it.`);
  }
  
  makeShirt(); // Large shirt with default message
  makeShirt("Medium"); // Medium shirt with default message
  makeShirt("Small", "I love JavaScript"); // Small shirt with custom message