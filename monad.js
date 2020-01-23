/**
 * Module for generic monadic utilities
**/

const R = require('ramda')

/*
    Calls the monad's chain method with the function as parameter
    Signature:
    (fn, monad( val )) => fn( val )
*/
const chain = R.curry((fn, monad) => {
    return monad.chain(fn)
})

/*
    Calls the monad's map method with the function as parameter
    Signature:
    (fn, monad( val )) => monad( fn( val ) )
*/
const map = R.curry((fn, monad) => {
    return monad.map(fn)
})

/*
    Get the monad's value:
    (monad( val )) => val
*/
const value = R.prop('value')

module.exports = {
    chain,
    map,
    value
}