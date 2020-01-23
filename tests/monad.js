const R = require('ramda')
const { assert } = require('chai');
const Either = require('data.either');

const monadUtils= require('../monad');

const mul2 = (x) => x*2;

const oneRight = Either.Right(1);
const oneLeft = Either.Left(1);

describe('Monad Utilities Tests', () => {
    it('Monad Utilities Tests', () => {
        assert.equal(R.compose(monadUtils.value, monadUtils.map(mul2))(oneRight), 2, "map and value work with right")
        assert.equal(monadUtils.chain(mul2)(oneRight), 2, "Chain work with right")

        assert.equal(R.compose(monadUtils.value, monadUtils.map(mul2))(oneLeft), 1, "map and value work with left")
        assert.equal(monadUtils.chain(mul2)(oneLeft), oneLeft, "chain work with left")
    })
})
