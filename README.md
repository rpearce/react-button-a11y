# react-button-a11y
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)

[![npm version](https://img.shields.io/npm/v/react-button-a11y.svg)](https://www.npmjs.com/package/react-button-a11y) [![npm downloads](https://img.shields.io/npm/dt/react-button-a11y.svg)](https://www.npmjs.com/package/react-button-a11y) [![Build Status](https://travis-ci.org/rpearce/react-button-a11y.svg?branch=master)](https://travis-ci.org/rpearce/react-button-a11y) [![Coverage Status](https://coveralls.io/repos/github/rpearce/react-button-a11y/badge.svg?branch=travis)](https://coveralls.io/github/rpearce/react-button-a11y?branch=travis) [![Maintainability](https://api.codeclimate.com/v1/badges/8e4debef4b9f0e8acd6e/maintainability)](https://codeclimate.com/github/rpearce/react-button-a11y/maintainability)

Make non-button elements accessible in React. This component applies the
following to an element that wants to be a "button":
  * `role="button"`
  * `tabIndex="0"`
  * `onKeyDown` listener for enter and spacebar (like normal `<button>`s) that
    will trigger an `onClick` callback
  * enforced labelling via either `aria-label` or `children`

## Links
* [`API Documentation`](./API.md)
* [`Authors`](./AUTHORS.md)
* [`Changelog`](./CHANGELOG.md)
* [`Contributing`](./CONTRIBUTING.md)
* [`Code of Conduct`](./CODE_OF_CONDUCT.md)

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars2.githubusercontent.com/u/592876?v=4" width="100px;"/><br /><sub><b>Robert Pearce</b></sub>](https://robertwpearce.com)<br />[💻](https://github.com/rpearce/react-button-a11y/commits?author=rpearce "Code") [📖](https://github.com/rpearce/react-button-a11y/commits?author=rpearce "Documentation") [💡](#example-rpearce "Examples") [🤔](#ideas-rpearce "Ideas, Planning, & Feedback") [⚠️](https://github.com/rpearce/react-button-a11y/commits?author=rpearce "Tests") |
| :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!
