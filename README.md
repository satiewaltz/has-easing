# has-easing

> Returns true if a string is a valid CSS timing function or name.

Example:

```js
import hasEasing from 'has-easing';
hasEasing('cubic-bezier(.17,.67,.83,.67)
```

This tool is useful if you writing an animable component that uses CSS transitions, but need to provide valid input for your API.

## Install

```sh
yarn add has-easing
```

## Development Commands

```sh
$ npm test # run tests with Jest
$ npm run coverage # run tests with coverage and open it on browser
$ npm run lint # lint code
$ npm run docs # generate docs
$ npm run build # generate docs and transpile code
$ npm run watch # watch code changes and run scripts automatically
$ npm run patch # bump patch version and publish to npm e.g. 0.0.1
$ npm run minor # bump minor version and publish to npm e.g. 0.1.0
$ npm run major # bump major version and publish to npm e.g. 1.0.0

## API

#### Table of Contents

-   [hasEasing](#haseasing)

### hasEasing

This function checks if an input is a valid transition timing function.

**Parameters**

-   `easing` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** String to check if it's a valid timing function.
-   `strict` **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** Boolean if true throws errors on invalid input.

Returns **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The timing function passed in.

## License

MIT © [Dave Barthly](https://github.com/satiewaltz)
```
