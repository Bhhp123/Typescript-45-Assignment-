var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var Place = ['Italy', 'Germany', 'Agra', 'Dubai', 'karachi'];
//Print your array is its orginal order.
console.log('\nOriginal order ', Place);
//Print your array in alphabetical order without modifying the actual list.
console.log('\nAlphabetical order ', __spreadArray([], Place, true).sort());
//Show that your array is still in its orginal order printing it.
console.log('\nOriginal order', Place);
//Print in your array in reverse order without changing the order ofthe orginal list.
console.log('\nReverse order', __spreadArray([], Place, true).sort().reverse());
//Show that your array the still in its orginal order by printig it again.
console.log('\nOriginal order ', Place);
//Resverse the order of your list. print the array  to show that its order has changed.
Place.reverse();
console.log('\nReverse order ', Place.reverse());
//Resverse the order of your list again. Print the list to show it's back to its orginal order.
Place.reverse;
console.log('\nOriginal order ', Place);
//sort your array so it's stored in alphabetical order. Print the array to show its original order
Place.sort();
console.log('\nalphabetical order ', Place);
// Sort to change your array so it's stored reverse alphabetical order. Print the list to show that its order has changed. 
Place.reverse();
console.log('\nReverse alphabetical order ', Place);
