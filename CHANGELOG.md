# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [3.0.1] - 2019-02-13

### Added
* added missing .browserslistrc file

### Changed
* bumped some dev dependencies

## [3.0.0] - 2019-02-13

### Changed
* sets a new peer dependency to be at least React 16.8
* converts component to functional component and uses the [`useCallback`
  hook](https://reactjs.org/docs/hooks-reference.html#usecallback) for the
  `handleKeyDown` event memoization
* wraps the component and forwarded ref higher-order component in
  [`React.memo`](https://reactjs.org/docs/react-api.html#reactmemo)
* updates example to use [`useState`](https://reactjs.org/docs/hooks-reference.html#usestate)
  and [`useCallback`](https://reactjs.org/docs/hooks-reference.html#usecallback)
  to toggle the button states (text and background color, where applicable)
* rewrites the tests in
  [`react-testing-library`](https://github.com/kentcdodds/react-testing-library)
  to focus less on internals and more on what an end-user might see (and really
  to try it out, too)

## [2.0.0] - 2018-12-29

### Changed
* changed default `element` from `div` to `span`. Unfortunately, this qualifies
  as a breaking change (hence the major version bump).

## [1.0.1] - 2018-12-19

### Fixed
* fixed forwarding refs eating the display name by including
  `react-with-forwarded-refs` as a dependency

## [1.0.0] - 2018-12-18

### Fixed
* support for forwarding refs (#5)

### Changed
* peer dependency on react has to be bumped to `>= 16.3`, so that breaking
  change is the reason for the major version bump

## [0.1.0] - 2018-12-14

### Added
* Added all the things
