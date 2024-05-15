let MyFriend:string[]=['Bilal','Wajid','Aryan'];

MyFriend.forEach(MyFriend => {
    console.log(`\nMr. ${MyFriend}! you are invited to my dinner on sunday\nThank you.\n`);
});

let absent_Guest='Bilal';
console.log(`Mr. ${absent_Guest} You are not invite to Dinner`);

let new_guest="Wahab";
MyFriend[MyFriend.indexOf(absent_Guest)]=new_guest;

MyFriend.forEach(MyFriend => {
    console.log(`\nMr. ${MyFriend}! you are invited to my dinner on sunday\nThank you.\n`);
});