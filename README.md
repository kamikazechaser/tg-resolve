[![https://telegram.me/kamikazechaser](https://img.shields.io/badge/%F0%9F%92%AC_Telegram-kamikazechaser-blue.svg?style=flat-square)](https://telegram.me/kamikazechaser)
[![https://github.com/kamikazechaser/rangi/blob/master/LICENSE.md](https://img.shields.io/badge/license-MIT-lightgreen.svg?style=flat-square)](https://github.com/kamikazechaser/rangi/blob/master/LICENSE)
> 👤 tg-resolve

A light Node.js Library that reolves Telegram usernames and/or ids to a complete User or/and Chat JSON object(s)

> Powered by pwrtelegramapi

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
