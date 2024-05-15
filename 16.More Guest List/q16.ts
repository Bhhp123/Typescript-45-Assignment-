// Original guest list
let guests: string[] = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];

// Print statement to inform about the bigger dinner table
console.log("I found a bigger dinner table, so I can invite more guests!");

// Add a new guest to the beginning of the list
guests.unshift('Frank');

// Add a new guest to the middle of the list
guests.splice(3, 0, 'Grace');

// Add a new guest to the end of the list
guests.push('Helen');

// Print new invitation messages
for (let guest of guests) {
    console.log(`${guest}, you are cordially invited to dinner!`);
}