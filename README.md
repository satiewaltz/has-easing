# has-easing

> Returns true if a string is a valid [CSS timing function](https://developer.mozilla.org/en-US/docs/Web/CSS/single-transition-timing-function).

## Example:

```js
import hasEasing from 'has-easing';

hasEasing('linear'); // Returns true
hasEasing('ease-in-out'); // Returns true
hasEasing('spinfaster!'); // Returns false
hasEasing(); // Returns false
hasEasing('cubic-bezier(0.17,0.67,0.83,0.67'); // Returns true
hasEasing('cubic-bezier(999,1.67,23,-200'); // Returns false
```

## Install

```sh
yarn add has-easing
```

## Usage

This tool is useful to validate input an animable component that uses CSS transitions.

```jsx
// Index.jsx
import Cube from 'cube';

<Cube animatable={'width'} time={'3s'} easing={'ease-in-out'} />;

// Cube.jsx
// ... Somewhere in a render() method:
const { animatable, value, time, easing } = this.props;
// In this case, hasEasing is used to set a default easing on invalid input:
const easing = hasEasing(easing) ? 'ease-in-out' : easing;
const CSSTransition = `${animatable} ${time} ${easing}`;
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
```

## API

#### Table of Contents

* [hasEasing](#haseasing)

### hasEasing

This function checks if an input is a valid transition timing function.

**Parameters**

* `easing` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** String to check if it's a valid timing function.
* `strict` **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** Boolean if true throws errors on invalid input.

Returns **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The timing function passed in.

## License

MIT © [Dave Barthly](https://github.com/satiewaltz)
