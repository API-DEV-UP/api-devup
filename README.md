<p align="center">
<a href="https://www.npmjs.com/package/api-devup"><img src="https://img.shields.io/npm/v/api-devup.svg?style=flat-square" alt="NPM version"></a>
<a href="https://www.npmjs.com/package/api-devup"><img src="https://img.shields.io/npm/dt/api-devup.svg?style=flat-square" alt="NPM downloads"></a>
</p>

API-DEVUP is a powerful [Node.js](https://nodejs.org) library is intended for interaction with the service [DEV-UP.RU](https://dev-up.ru) 🚀

| 📖 [API Documentation](https://dev-up.ru/dev) | 📖 [Module Documentation](https://api-dev-up.github.io/api-devup/index.html) | 🤖 [Author](https://vk.com/zeuvs) |
| --------------------------------------------- | ---------------------------------------------------------------------------- | --------------------------------- |

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

```console
npm i api-devup --save
```

### Usage example

JavaScript

```js
const { DevUp } = require("api-devup");

const API = new DevUp("token");

API.profile.get().then((res) => console.log(res));
```

TypeScript

```ts
import { DevUp } from "api-devup";

const API = new DevUp("token");

API.profile.get().then((res) => console.log(res));
```
