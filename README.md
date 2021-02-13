<p align="center">
<a href="https://www.npmjs.com/package/api-devup"><img src="https://img.shields.io/npm/v/api-devup.svg?style=flat-square" alt="NPM version"></a>
<a href="https://www.npmjs.com/package/api-devup"><img src="https://img.shields.io/npm/dt/api-devup.svg?style=flat-square" alt="NPM downloads"></a>
</p>

API-DEVUP is a powerful [Node.js](https://nodejs.org) librarys is intended for interaction with the service [DEV-UP.RU](https://dev-up.ru) 🚀

| 📖 [API Documentation](https://dev-up.ru/dev) | 🤖 [Author](https://vk.com/zeuvs) |
| --------------------------------------------- | --------------------------------- |

## Features

- Works with large collections of data
- Easy authorization form

## Installation

> **[Node.js](https://nodejs.org/) 12.0.0 or newer is required**

### NPM

```
npm i api-devup --save
```

### Usage example

```js
const API = require("api-devup");

const api = new API({
  key: process.env.KEY,
});

async function run() {
  const response = await api.getGroups({
    user_id: 1,
  });
  console.log(response);
}

run().catch(console.log);
```

### Library functions

| Method               | Parameters         | Description                                     |
| -------------------- | ------------------ | ----------------------------------------------- |
| getStickers          | user_id: Number    | Retrieves a list of the user's stickers         |
| getStickerInfo       | sticker_id: Number | Gets information about the sticker and the pack |
| getGroups            | user_id: Number    | Retrieves the list of user groups               |
| getApps              | user_id: Number    | Retrieves the list of the user's applications   |
| getProfile           |                    | Retrieves profile information                   |
| audioSpeech          | url: String        | Convert audio to text                           |
| createShortLink      | url: String        | Link Shortening                                 |
| setNotificationsLink | code: String       | Managing notifications from links               |
