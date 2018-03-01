# Lodash purge

[![Build Status](https://travis-ci.org/davidwaterston/lodash-purge.svg)](https://travis-ci.org/davidwaterston/lodash-purge)
[![Known Vulnerabilities](https://snyk.io/test/github/davidwaterston/lodash-purge/badge.svg?targetFile=package.json)](https://snyk.io/test/github/davidwaterston/lodash-purge?targetFile=package.json)
[![NPM version](http://img.shields.io/npm/v/lodash-purge.svg)](https://www.npmjs.com/package/lodash-purge/)


Extend [Lodash](https://lodash.com/) to take a deep copy of an array, remove all elements that predicate returns truthy for, and return the new array with the elements removed. The original array is left unchanged.  
This is similar to _remove_ (and in fact makes use of that function) but is intended to be used in place of that function with Vue.js to overcome [problems with _remove_](https://github.com/vuejs/vue/issues/2673) in that situation.


### _.purge(arr, predicate)

**Arguments**  
arr (array): The array of objects to have elements removed. Required.  
predicate (string): The function invoked per iteration. Required.
_purge_ makes use of the Lodash function [_remove_](https://lodash.com/docs/4.17.5#remove) so _predicate_ must follow the rules and structure documented for that function.

**Returns**  
(array): An new array with the specified elements removed.


### Examples  
```
var _ = require('lodash')
require('lodash-purge')

_.purge([{a:12, b:5}, {a: 6}, {a: 12, b:999}], function(obj) {return obj.a === 12 || obj.b === 999;}); // [{a: 6}]
_.purge(['ABC','DEF','GHI','ABC'], function(val) {return val === 'ABC'); // ['DEF','GHI']
_.purge([], function(val) {return val === 'ABC'); // []
_.purge([{a:12, b:5}, {a: 6}, {a: 12, b:999}], function(obj) {return obj.z === 'OK'}); // [{a:12, b:5}, {a: 6}, {a: 12, b:999}]
```


### Version History

| Version | Release Date | Details |   
| :-- | :-- | :-- |
| 1.0.0 | 1st March, 2018 | Initial release. |
