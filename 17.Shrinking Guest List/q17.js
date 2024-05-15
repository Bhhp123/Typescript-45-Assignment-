// Original guest list
var guests = ['Frank', 'Alice', 'Bob', 'Charlie', 'Grace', 'David', 'Eve', 'Helen'];
// Print message about limited space
console.log("Unfortunately, I can invite only two people for dinner.");
// Remove guests from the list until only two remain
while (guests.length > 2) {
    var removedGuest = guests.pop();
    console.log("Sorry, ".concat(removedGuest, ", I can't invite you to dinner."));
}
// Print message to the remaining guests
for (var _i = 0, guests_1 = guests; _i < guests_1.length; _i++) {
    var guest = guests_1[_i];
    console.log("".concat(guest, ", you are still invited to dinner!"));
}
// Remove the last two guests from the list
guests = [];
// Print the empty list
console.log(guests);
