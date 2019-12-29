# react-button-a11y
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)
[![npm version](https://img.shields.io/npm/v/react-button-a11y.svg)](https://www.npmjs.com/package/react-button-a11y) [![npm downloads](https://img.shields.io/npm/dm/react-button-a11y.svg)](https://www.npmjs.com/package/react-button-a11y) [![Build Status](https://travis-ci.org/rpearce/react-button-a11y.svg?branch=master)](https://travis-ci.org/rpearce/react-button-a11y) [![Coverage Status](https://coveralls.io/repos/github/rpearce/react-button-a11y/badge.svg?branch=master)](https://coveralls.io/github/rpearce/react-button-a11y?branch=master) [![Maintainability](https://api.codeclimate.com/v1/badges/8e4debef4b9f0e8acd6e/maintainability)](https://codeclimate.com/github/rpearce/react-button-a11y/maintainability)

Make non-button elements accessible in React. This component applies the
following to an element that wants to be a "button":
  * `role="button"`
  * `tabIndex="0"`
  * `onKeyDown` listener for enter and spacebar (like normal `<button>`s) that
    will trigger an `onClick` callback
  * enforced labelling via either `aria-label` or `children`

## Links
* [Installation](#installation)
* [Usage](#usage)
* [API](#api)
* [All Contributors](#contributors)
* [Authors](./AUTHORS)
* [Changelog](./CHANGELOG.md)
* [Contributing](./CONTRIBUTING.md)
* [Code of Conduct](./CODE_OF_CONDUCT.md)

# Installation
```
npm i react-button-a11y
```
or
```
yarn add react-button-a11y
```

## Usage

### With `aria-label`
```js
import ButtonA11y from 'react-button-a11y'

// ...

<ButtonA11y
  aria-label="Click this to do X"
  className="some-className"
  onClick={evt => { console.log('press happened: ', evt) }}
/>
```

### Without `aria-label`
If you don't provide an `aria-label`, you need to provide `children` so that
there is something to describe what clicking / tapping this button does.
```js
import ButtonA11y from 'react-button-a11y'

// ...

<ButtonA11y
  className="some-className"
  onClick={evt => { console.log('press happened: ', evt) }}
>
  Click this to do X
</ButtonA11y>
```

# API

| Prop | Type | Required | Default  | Details |
| ---  | --- | ---  | --- | --- |
| `aria-label` | String | yes if `children` absent | none | Pass an `aria-label` if you don't pass children with descriptive text |
| `children` | Node | yes if `aria-label` absent | none | Pass `children` with descriptive text if you don't pass an `aria-label` |
| `element` | String | no | `'span'` | The default element is a `div`, but you can pass a `span`, e.g., if you like |
| `onClick` | Function | yes | `Function.prototype` | When the button is "pressed" (via Enter or Spacebar or click), this callback will be triggered with the event |
| `strictMode` | Bool | no | `true` | An error will be thrown if enabled and you fail to pass both an `aria-label` and `children` |

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars2.githubusercontent.com/u/592876?v=4" width="100px;"/><br /><sub><b>Robert Pearce</b></sub>](https://robertwpearce.com)<br />[💻](https://github.com/rpearce/react-button-a11y/commits?author=rpearce "Code") [📖](https://github.com/rpearce/react-button-a11y/commits?author=rpearce "Documentation") [💡](#example-rpearce "Examples") [🤔](#ideas-rpearce "Ideas, Planning, & Feedback") [⚠️](https://github.com/rpearce/react-button-a11y/commits?author=rpearce "Tests") |
| :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!
