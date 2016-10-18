/***
 * tg-resolve example bot <@UResolverBot>
 *
 * Ensure you install the dependecies in this example bot separately before running it!
 *
 * A light Node.js Library that resolves Telegram usernames and/or ids to a complete User or/and Chat JSON object(s)
 *
 * Mohammed Sohail <sohailsameja@gmail.com>
 *
 * Released Under MIT License 
 *
 ***/

'use-strict';

// Node Modules

var resUser = require('tg-resolve');
var TelegramBot = require('node-telegram-bot-api');
var rangi = require('rangi');

// Bot Constants

var token = 'bot-token';
var bot = new TelegramBot(token, {
    polling: true
});

// /res Command

bot.onText(/\/res (.+)/, function (msg, match) {
    var fromId = msg.from.id;
    var resp = match[1];
    var opts = {
        parse_mode: 'Markdown'
    };
    resUser(resp, function (err, u) {
        console.log(rangi.cyan(JSON.stringify(u)));
        bot.sendMessage(fromId, '*Details*\n\n_Name:_ `' + u.first_name + '` `' + u.last_name + '`\n_Username:_ `' + u.username + '`\n_ID:_ `' + u.id + '`', opts); // Notice that there is no field to get a Group/Channel title!
    });
});

// /start Command

bot.onText(/\/start/, function (msg, match) {
    var fromId = msg.from.id;
    var fromName = msg.from.first_name;
    var resp = 'Hi There *' + fromName + ' *, I am demo bot for [tg-resolve](https://github.com/kamikazechaser/tg-resolve) with the ability to resolve *ANY* `username` or `id`. Very few bots, if any, can do that! (if they have not come across the user or group). See my usage below!\n\n_Usage_\n`/res [username/id]`'
    var opts = {
        parse_mode: 'Markdown'
    };
    bot.sendMessage(fromId, resp, opts);
});

// Handle Uncaught Exceptions

process.on('uncaughtException', function (err) {
    console.log('Fuck unaught exception error: ' + err);
});