var MyFriend = ['Bilal', 'Wajid', 'Aryan'];
MyFriend.forEach(function (MyFriend) {
    console.log("\nMr. ".concat(MyFriend, "! you are invited to my dinner on sunday\nThank you.\n"));
});
var absent_Guest = 'Bilal';
console.log("Mr. ".concat(absent_Guest, " You are not invite to Dinner"));
var new_guest = "Wahab";
MyFriend[MyFriend.indexOf(absent_Guest)] = new_guest;
MyFriend.forEach(function (MyFriend) {
    console.log("\nMr. ".concat(MyFriend, "! you are invited to my dinner on sunday\nThank you.\n"));
});
