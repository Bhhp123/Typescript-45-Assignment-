// Original guest list
let guests: string[] = ['Frank', 'Alice', 'Bob', 'Charlie', 'Grace', 'David', 'Eve', 'Helen'];

// Print message about limited space
console.log("Unfortunately, I can invite only two people for dinner.");

// Remove guests from the list until only two remain
while (guests.length > 2) {
  let removedGuest = guests.pop();
  console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
}

// Print message to the remaining guests
for (let guest of guests) {
  console.log(`${guest}, you are still invited to dinner!`);
}

// Remove the last two guests from the list
guests = [];

// Print the empty list
console.log(guests);