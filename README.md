<p align="center">
<a href="https://www.npmjs.com/package/api-devup"><img src="https://img.shields.io/npm/v/api-devup.svg?style=flat-square" alt="NPM version"></a>
<a href="https://www.npmjs.com/package/api-devup"><img src="https://img.shields.io/npm/dt/api-devup.svg?style=flat-square" alt="NPM downloads"></a>
</p>

API-DEVUP is a powerful [Node.js](https://nodejs.org) library is intended for interaction with the service [DEV-UP.RU](https://dev-up.ru) 🚀

| 📖 [API Documentation](https://dev-up.ru/dev) | 🤖 [Author](https://vk.com/zeuvs) |
| --------------------------------------------- | --------------------------------- |

## Features

- Works with large collections of data
- Easy authorization form

## Installation

> **[Node.js](https://nodejs.org/) 12.0.0 or newer is required**

### YARN

```console
yarn add api-devup
```

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
