/***
 * tg-resolve
 *
 * Mohammed Sohail <sohailsameja@gmail.com>
 * Released Under MIT License
 ***/


const token = process.env.TELEGRAM_TOKEN;
if (!token) {
    console.error("Error: Telegram token missing");
    process.exit(1);
}
const username = process.env.TELEGRAM_USERNAME;
if (!username) {
    console.error("Error: Telegram username missing");
    process.exit(1);
}
const url = process.env.PWRTELEGRAM_URL;
const tgresolve = require(".");
const tgresolver = new tgresolve.Tgresolve(token, { url });


// using the bare function
tgresolve(token, username, { url }, function(error, user) {
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
