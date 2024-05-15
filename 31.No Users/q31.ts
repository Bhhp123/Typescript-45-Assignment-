let users: string[] = ["Bilal", "Aryan", "Asad", "Abid"];

if (users.length > 0) {
  users.forEach((users) => {
    console.log(`Hello, ${users}`);
  });
} else {
  console.log("we need to find some users!");
}

users = []; // removing all usernames

if (users.length > 0) {
  users.forEach((users) => {
    console.log(`Hello, ${users}`);
  });
} else {
  console.log("we need to find some users!");
}
