'use strict';

var expect = require('chai').expect;
var numSquarer = require('../index');
//import foo from '../dist/Silly';
var foo = require('../dist/Silly');
//var Silly = require('../dist/Silly');

describe('numSquarer', function() {
    it('negatives become positive', function() {
        var result = numSquarer(-1);
        expect(result).to.equal(1);
    });
    it('zero stays zero', function() {
        var result = numSquarer(0);
        expect(result).to.equal(0);
    });
    it('positives stay positive', function() {
        var result = numSquarer(3);
        expect(result).to.equal(9);
    });
    it('silly works', function() {
        var result = foo(5);
        expect(result).to.equal(30);
    })

});