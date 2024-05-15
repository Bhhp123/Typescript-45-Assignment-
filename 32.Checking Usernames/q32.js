"use strict";
let current_users = ["user1", "admin", "user3", "user4", "user5"];
let new_users = ["user1", "User6", "User7", "User8", "User9"];
new_users.forEach((new_users) => {
    if (current_users.some((current_users) => current_users.toUpperCase() === new_users.toLowerCase())) {
        console.log(`${new_users} will need to inter a new username.`);
    }
    else {
        console.log(`${new_users} is avalible`);
    }
});
