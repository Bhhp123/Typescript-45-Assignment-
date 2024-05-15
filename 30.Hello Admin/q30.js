var usernames = ["admin", "user1", "user2", "user3", "user4"];
usernames.forEach(function (usernames) {
    if (usernames == "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(usernames, ", thank you for loggin in try again"));
    }
});
