/*eslint-disable max-len*/

'use strict'

const assert = require('assert')
const {_getPoolAddressPancake2} = require('../')
const {heximalToBuffer} = require('./_lib')
const {getPoolAddressByHash} = require("../lib");

describe('_getPoolAddressPancake2', () => {
    it('Cake/WBNB', () => {
        let cakeAddress = '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82'
        let wbnbAddress = '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c'
        let actualAddress = getPoolAddressByHash('0xca143ce32fe78f1f7019d7d551a6402fc5350c73', '0x00fb7f630766e6a796048ea87d01acd3068e8ff67d078148a3fa3f4a84f69bd5', cakeAddress, wbnbAddress)

        console.log(actualAddress, '0x0eD7e52944161450477ee417DE9Cd3a859b14fD0')

        assert.strictEqual(
            actualAddress.equals('0x0eD7e52944161450477ee417DE9Cd3a859b14fD0'),
            true
        )
    })

    it('BTC/WBNB', () => {
        let btcbAddress = heximalToBuffer('0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c')
        let wbnbAddress = heximalToBuffer('0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c')
        let expectAddress = heximalToBuffer('0x61eb789d75a95caa3ff50ed7e47b96c132fec082')
        let actualAddress = _getPoolAddressPancake2(btcbAddress, wbnbAddress)

        assert.strictEqual(
            actualAddress.equals(expectAddress),
            true
        )
    })

    it('Different addresses order, return the same result', () => {
        let btcbAddress = heximalToBuffer('0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c')
        let wbnbAddress = heximalToBuffer('0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c')
        let expectAddress = heximalToBuffer('0x61eb789d75a95caa3ff50ed7e47b96c132fec082')
        let actualAddress1 = _getPoolAddressPancake2(btcbAddress, wbnbAddress)
        let actualAddress2 = _getPoolAddressPancake2(wbnbAddress, btcbAddress)

        assert.strictEqual(
            actualAddress1.equals(actualAddress2),
            true
        )
        assert.strictEqual(
            actualAddress1.equals(expectAddress),
            true
        )
    })
})
