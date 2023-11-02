let helper = require("./helper");
console.log("All users:");
let list = helper.getAllUser();
console.log(list);
console.log("---------------------------------------");
console.log("first user:");
// helper.getFirstUser(list)
console.log(helper.getFirstUser());
console.log("---------------------------------------");
console.log("last user:");
// helper.getLast(list)
console.log(helper.getLast());
console.log("---------------------------------------");
console.log("user by id:");
// helper.getUserByID(list,..)
console.log(helper.getUserByID(5));
console.log("---------------------------------------");
console.log("user by company name:");
// helper.getUserByCompanyName(list,..)
console.log(helper.getUserByCompanyName('Considine-Lockman'));
console.log("---------------------------------------");
console.log("user by city:");
// helper.getUsersByCity(list,..)
console.log( helper.getUsersByCity("Gwenborough"))
console.log("---------------------------------------");
console.log("user by street:");
// helper.getStreet(list,..)
console.log(helper.getStreet(2));
console.log("---------------------------------------");
console.log("added user:");
// helper.addNewUser(list,..)
let newuser ={
    "id": 11,
    "name": "ali",
    "username": "aliii",
    "email": "ali.Padberg@karina.biz",
    "address": {
        "street": "52street",
        "suite": "Suite 198",
        "city": "baghdad",
        "zipcode": "6666-2661",
        "geo": {
        "lat": "-38.986",
        "lng": "57.2882"
        }
    },
    "phone": "024-000-3804",
    "website": "ali.net",
    "company": {
        "name": "miswag",
        "catchPhrase": "Centralizedali",
        "bs": "targetali"
    }
}

helper.addNewUser(newuser);
console.log(helper.getAllUser());

console.log("---------------------------------------");
console.log("update email:");
    helper.updateUser(8,"updated@gmail.com");
    console.log(helper.getAllUser());

console.log("---------------------------------------");
console.log("delete user:");
helper.deleteUserById(11);
console.log(helper.getAllUser());


