/***
 * tg-resolve
 *
 * Mohammed Sohail <sohailsameja@gmail.com>
 * Released Under MIT License
 ***/


const token = '262278980:AAE_2pmNjBs09JAr1L5YFWB6Mtsef48cQxI'
if (!token) {
    console.error("Error: Telegram token missing");
    process.exit(1);
}
const username = 135207785
if (!username) {
    console.error("Error: Telegram username missing");
    process.exit(1);
}
const tgresolve = require(".");
const tgresolver = new tgresolve.Tgresolve(token);


// using the bare function
tgresolve(token, username, function(error, user) {
    if (error) {
        console.error("Error (bare): %s\n%j", error, error);
        return;
    }
    console.log("// using bare function\n%j\n", user);
});


// using the resolver (client)
tgresolver.tgresolve(username, function(error, user) {
    if (error) {
        console.error("Error (resolver): %s\n%j", error, error);
        return;
    }
    console.log("// using resolver (client)\n%j\n", user);
});
