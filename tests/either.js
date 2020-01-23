const R = require('ramda')
const { assert } = require('chai')
const Either = require('data.either')

const eitherUtils = require('../either')

describe('Tests eitherify', () => {
    it('Tests eitherify', () => {
        const ok = eitherUtils.eitherify((x) => x*2)
        const err = eitherUtils.eitherify((x) => {throw 10;})
        const okResult = ok(1)
        const errResult = err(1)
    
        assert(okResult.isRight, "Success returns a right result")
        assert.equal(okResult.value, 2, "Success returns the correct result")
        assert(!errResult.isRight, "Failure returns a left result")
        assert.equal(errResult.value, 10, "Failure wraps the exception value")
    })
})

describe('Tests if_nil_else', () => {
    it('Tests if_nil_else', () => {
        const process = eitherUtils.if_nil_else(() => 10, (x) => x*2);
        const nonNilResult = process(1);
        const nilResult = process(null);

        assert(nonNilResult.isRight, "Success returns a right result")
        assert.equal(nonNilResult.value, 2, "Success returns the correct result")
        assert(!nilResult.isRight, "Failure returns a left result")
        assert.equal(nilResult.value, 10, "Failure wraps the exception value")
    })
})

describe('Tests parse_json', () => {
    it('Tests parse_json', () => {
        const okResult = eitherUtils.parse_json('{"a": 1}')
        const errResult = eitherUtils.parse_json("{'a':")

        assert(okResult.isRight, "Success returns a right result")
        assert.deepEqual(okResult.value, {'a': 1}, "Success returns the correct result")
        assert(!errResult.isRight, "Failure returns a left result")
    })
})
