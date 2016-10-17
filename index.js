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
        uri: url + token + '/' + method + '?' + type + '=@' + chatId,
        json: true
    }, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            callback(error, body && body.result)
        }
    });
}