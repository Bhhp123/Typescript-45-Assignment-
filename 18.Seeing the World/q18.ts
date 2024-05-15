let Place:string[]=['Italy','Germany','Agra','Dubai','karachi'];

//Print your array is its orginal order.
console.log('\nOriginal order ',Place);

//Print your array in alphabetical order without modifying the actual list.
console.log('\nAlphabetical order ',[...Place].sort());

//Show that your array is still in its orginal order printing it.
console.log('\nOriginal order',Place);

//Print in your array in reverse order without changing the order ofthe orginal list.
console.log('\nReverse order',[...Place].sort().reverse());

//Show that your array the still in its orginal order by printig it again.
console.log('\nOriginal order ',Place);

//Resverse the order of your list. print the array  to show that its order has changed.
Place.reverse();
console.log('\nReverse order ',Place.reverse());

//Resverse the order of your list again. Print the list to show it's back to its orginal order.
Place.reverse
console.log('\nOriginal order ',Place);

//sort your array so it's stored in alphabetical order. Print the array to show its original order
Place.sort();
console.log('\nalphabetical order ',Place);

// Sort to change your array so it's stored reverse alphabetical order. Print the list to show that its order has changed. 
Place.reverse(); 
console.log('\nReverse alphabetical order ',Place);





