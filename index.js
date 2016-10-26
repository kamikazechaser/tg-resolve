/***
 * tg-resolve
 *
 * A light Node.js Library that resolves Telegram usernames and/or ids to a complete User or/and Chat JSON object(s)
 *
 * Mohammed Sohail <sohailsameja@gmail.com>
 *
 * Released Under MIT License
 *
 ***/

'use-strict';

// Node Packages

var request = require('request');

// API Constants

var url = 'https://api.pwrtelegram.xyz/bot'
var token = '262278980:AAHeL1LJ3jqtzMOhHruxOeYrw0BxnvBhyho'
var method = 'getChat'
var type = 'chat_id'

// Resolver Function

var resUser = module.exports = function (chatId, callback) {
    request({
        uri: url + token + '/' + method + '?' + type + '=' + chatId,
        json: true
    }, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var result = body && body.result;
            if(result)callback(error, result);
            else callback(new Error('Username not found'));
        }
        else{
            callback(error)
        }
    });
}
