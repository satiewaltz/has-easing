# has-easing

> Returns true if a string is a valid [CSS timing function](https://developer.mozilla.org/en-US/docs/Web/CSS/single-transition-timing-function).

[![npm version](https://badge.fury.io/js/has-easing.svg)](https://badge.fury.io/js/has-easing) [![GitHub license](https://img.shields.io/github/license/satiewaltz/has-easing.svg)](https://github.com/satiewaltz/has-easing/blob/master/LICENSE) [![GitHub issues](https://img.shields.io/github/issues/satiewaltz/has-easing.svg)](https://github.com/satiewaltz/has-easing/issues) [![Build Status](https://travis-ci.org/satiewaltz/has-easing.svg?branch=master)](https://travis-ci.org/satiewaltz/has-easing) [![codecov](https://codecov.io/gh/satiewaltz/has-easing/branch/master/graph/badge.svg)](https://codecov.io/gh/satiewaltz/has-easing)

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

This tool is useful to validate input for an animable component or an animation library that exposes CSS transitions in their API:

```jsx
// Index.jsx
import Cube from 'cube';

<Cube animatable={'width'} time={'3s'} easing={'ease-in-out'} />;

// Cube.jsx
import hasEasing from 'has-easing';
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

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

#### Table of Contents

-   [hasEasing](#haseasing)

### hasEasing

This function checks if an input is a valid transition timing function.

**Parameters**

-   `easing` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** String to check if it's a valid timing function.

Returns **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** Boolean of whether the timing function is valid.

## License

MIT © [Dave Barthly](https://github.com/satiewaltz)
