[![](https://img.shields.io/npm/dt/tg-resolve.svg?style=flat-square)](https://www.npmjs.com/package/tg-resolve)
[![https://telegram.me/kamikazechaser](https://img.shields.io/badge/%F0%9F%92%AC_Telegram-kamikazechaser-blue.svg?style=flat-square)](https://telegram.me/kamikazechaser)
[![https://github.com/kamikazechaser/rangi/blob/master/LICENSE.md](https://img.shields.io/badge/license-MIT-lightgreen.svg?style=flat-square)](https://github.com/kamikazechaser/rangi/blob/master/LICENSE)
> 👤 tg-resolve

A light Node.js Library that resolves Telegram usernames and/or ids to a complete User or/and Chat JSON object(s)

> Powered by pwrtelegramapi

## Background

The official Telegram API does not allow bots to resolve usernames/ids out of the box. One is forced to create his/her own database so as to resolve usernames. Resolving of usernames is particularly useful in that a bot is able to get a user/chat id of a person or groub it hasn't even seen! Unlike before where a bot is only able to see a person if it has ever recieved his/her message whether in private or in a group.

### Useful Scenarios

- Group Administration Bots
- Bot Which Has Lost Its Database, but users had previously started the bot
- Resolving Group/Channel Ids
- And Much More!

## Install

```bash
npm i tg-resolve -S
```
## Usage

```javascript
var resUser = require(tg-resolve);

resUser('kamikazechaser', function(err, u){
  console.log(u);
  
  /* A JSON Object Is Returned
  
  { 
  id: 135207785,
  first_name: 'Kamikaze Chaser',
  username: 'kamikazechaser',
  type: 'private',
  last_name: '' 
  }
  
  */
});
```
