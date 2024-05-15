var users = ["Bilal", "Aryan", "Asad", "Abid"];
if (users.length > 0) {
    users.forEach(function (users) {
        console.log("Hello, ".concat(users));
    });
}
else {
    console.log("we need to find some users!");
}
users = []; // removing all usernames
if (users.length > 0) {
    users.forEach(function (users) {
        console.log("Hello, ".concat(users));
    });
}
else {
    console.log("we need to find some users!");
}
