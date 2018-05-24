'use strict';

var expect = require('chai').expect;
var numSquarer = require('../index');

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

});