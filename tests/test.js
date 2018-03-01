var should = require('should');
var _ = require('lodash');
require('../src/purge.js')

describe('_.purge', function () {

    it('Removes the elements specified, leaving the original array unchanged', function (done) {
        var arr = [
            {a: 6},
            {a: 12, b:999},
            {a: 12}
        ];
        var arrResponse = _.purge(arr, function(obj) {
            return (obj.a === 12 || obj.b === 9);
        });

        arr.should.eql([{a: 6},{a: 12, b:999},{a: 12}]);
        arrResponse.should.eql([{a: 6}]);
        done();
    });

    it('Removes the elements specified, leaving the original array unchanged, when an array of simple values is passed in', function (done) {
        var arr = [
            'ABC',
            'DEF',
            'GHI',
            'ABC'
        ];
        var arrResponse = _.purge(arr, function(val) {
            return (val === 'ABC');
        });

        arr.should.eql(['ABC','DEF','GHI','ABC']);
        arrResponse.should.eql(['DEF','GHI']);
        done();
    });

    it('Returns a copy of the input array, without changes, when no matches are found for predicate', function (done) {
        var arr = [
            {a: 6},
            {a: 12, b:999},
            {a: 12}
        ];
        var arrResponse = _.purge(arr, function(obj) {
            return (obj.z === 12);
        });

        arr.should.eql([{a: 6},{a: 12, b:999},{a: 12}]);
        arrResponse.should.eql([{a: 6},{a: 12, b:999},{a: 12}]);
        done();
    });

    it('Returns an empty array when an empty array is passed in', function (done) {
        var arr = [];
        var arrResponse = _.purge(arr, function(obj) {
            return (obj.z === 12);
        });

        arr.should.eql([]);
        arrResponse.should.eql([]);
        done();
    });

});
