/***
 * tg-resolve
 *
 * A light Node.js Library that resolves Telegram usernames and/or ids to a
 * complete User or/and Chat JSON object(s)
 *
 * Mohammed Sohail <sohailsameja@gmail.com>
 * Released Under MIT License
 ***/


// Node Packages

var request = require('request');

// API Constants

var url = 'https://api.pwrtelegram.xyz/bot'
var method = 'getChat'
var type = 'chat_id'

// Resolver Function

var tgresolve = module.exports = function (token, chatId, callback) {
    request({
        uri: url + token + '/' + method + '?' + type + '=' + chatId,
        json: true
    }, function (error, response, body) {
        if (error) {
            return callback(error);
        }
        if (response.statusCode !== 200) {
            error = new Error('Bad response');
            error.response = response;
            return callback(error);
        }
        if (!body || !body.result) {
            error = new Error('Username not found');
            return callback(error);
        }
        return callback(null, body.result);
    });
}


tgresolve.Tgresolve = function Tgresolve(token) {
    this.token = token;
};


tgresolve.Tgresolve.prototype.tgresolve = function (chatId, callback) {
    return tgresolve(this.token, chatId, callback);
};
