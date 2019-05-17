# parse-to-dotenv

> Parse object to dotenv

Please consider starring the project to show your ❤️ and support.

[![NPM version](https://badgen.net/npm/v/parse-to-dotenv?icon=npm)](https://npmjs.com/package/parse-to-dotenv)
[![NPM download](https://badgen.net/npm/dm/parse-to-dotenv?icon=npm)](https://npmjs.com/package/parse-to-dotenv)
[![CircleCI](https://badgen.net/circleci/github/evillt/parse-to-dotenv?icon=circleci)](https://circleci.com/gh/evillt/parse-to-dotenv/tree/master)
[![License](https://badgen.net/npm/license/parse-to-dotenv)](./LICENSE)
[![Donation](https://badgen.net/badge/support%20me/donate/f2a)](https://patreon.com/evillt)

## Install

```console
yarn add parse-to-dotenv
```

## Usage

```js
const { parse } = require('parse-to-dotenv')

const dotenv = parse({
  name: 'darkvan',
  age: 18
})
```

Will return:

```
name=darkvan
age=18
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

**parse-to-dotenv** © [evillt](https://github.com/evillt), Released under the [MIT](./LICENSE) License.

Authored and maintained by **EVILLT** with help from contributors ([list](https://github.com/evillt/parse-to-dotenv/contributors)).

> [evila.me](https://evila.me) · GitHub [@evillt](https://github.com/evillt) · Twitter [@evillt](https://twitter.com/evillt)
