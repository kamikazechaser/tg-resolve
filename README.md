[![](https://img.shields.io/npm/dt/tg-resolve.svg?style=flat-square)](https://www.npmjs.com/package/tg-resolve)
[![https://telegram.me/kamikazechaser](https://img.shields.io/badge/%F0%9F%92%AC_Telegram-kamikazechaser-blue.svg?style=flat-square)](https://telegram.me/kamikazechaser)
[![Travis](https://img.shields.io/travis/kamikazechaser/tg-resolve.svg?style=flat-square)](https://travis-ci.org/kamikazechaser/tg-resolve)
> 👤 tg-resolve

A light Node.js Library that resolves Telegram usernames and/or ids to a complete User or/and Chat JSON object(s)

> Powered by [PWRTelegram API](http://pwrtelegram.xyz/)

## Background

The official Telegram API **does not** allow bots to resolve usernames/ids out of the box. One is forced to create his/her own database so as to resolve usernames. Resolving of usernames is particularly useful in that a bot is able to get a user/chat id of a person or groub it hasn't even seen! Unlike before where a bot is only able to see a person if it has ever recieved his/her message whether in private or in a group.

## Useful Scenarios

- Group administration bots
- In a bot which has lost its database, but users had previously started the bot
- General resolving to get user details e.g [UResolverBot](https://telegram.me/UResolverBot)
- And much more!


## Install

```bash
$ npm install tg-resolve --save
```

## Usage

```js
const tgresolve = require("tg-resolve");

// using the 'bare' function
tgresolve(token, "@kamikazechaser", function(error, result) {
    // ... handle error ...
    console.log(result.id);
});

// you can create a client (referred to as 'resolver')
// that you can repeatedly use
const resolver = new tgresolver.Tgresolve(token);

// using the 'resolver'
resolver.tgresolve("@kamikazechaser", function(error, result) {
    // ... handle error ...
    console.log(result.id);
});
```

_Refer to [example.js](https://github.com/kamikazechaser/tg-resolve/blob/master/example.js) for a more comprehensive guide_

- As of v1.2.0, you will need your own bot token!
- As of v1.3.0, you can pass in your own pwrtg url!


<a name="above-main"></a>
#### tgresolve(token, username[, options], callback)

Resolve the `username` to a [Result](#result).

* **token** (String): Telegram bot token
* **username** (String)
* **options** (Object, Optional)
    * **url** (String): custom [PWRTelegram API](http://pwrtelegram.xyz/) URL
* **callback** (Function):
    * signature: `callback(error, result)`


#### resolver = new tgresolve.Tgresolve(token[, options])

Create a client/resolver.

* **token** (String): Telegram bot token
* **options** (Object, Optional): same as [above](#above-main)


#### resolver.tgresolve(username, callback)

Resolve the `username` to a [Result](#result), using the client.

* **username** (String)
* **callback** (Function): same as [above](#above-main)


<a name="result"></a>
## Result

_When resolving for a Group/Channel_

```js
{
    id: -1001065761006,
    title: "End Of The World Party",
    username: "EOTWGroup",
    type: "supergroup",
    when: "2016-10-18 11:22:56"
}
```

_When resolving for a User_

```js
{
    id: 58258161,
    first_name: "John",
    username: "john_doe",
    type: "private",
    last_name: "Doe",
    when: "2016-10-18 11:22:56"
}
```


## Issues And Contribution

Fork the repository and submit a pull request for whatever change you want to be added to this project. If you have any questions, just open an issue.
