# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

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
