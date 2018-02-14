'use strict';

const arrayChunks = require('../');
const mocha = require('mocha');
const expect = require('chai').expect;

describe('array chunks module', () => {
  describe('validate return types', () => {
    it('should export a function', () => {
        expect(arrayChunks).to.be.a('function');
    });

    it('return new array', () => {
        expect(arrayChunks()).to.be.a('array');
    });

    it('with the empty array as first param', () => {
        expect(arrayChunks([])).to.be.a('array');
    });

    it('with the two parameters', () => {
        expect(arrayChunks([], 2)).to.be.a('array');
    });
  });

  describe('validate params types', () => {
    it('should return error, first parameter should to be a array', () => {
      expect(() => arrayChunks(12)).to.throw(TypeError);
    });

    it('should return error, second parameter should to be a number', () => {
        expect(() => arrayChunks([], NaN)).to.throw(TypeError);
    });
  });

  describe('split array', () => {
      it('split simple array', () => {
          let arrayBefore = [1,2,3,4,5,6];
          let arrayAfter = [[1,2], [3,4], [5,6]];

          expect(arrayChunks(arrayBefore, 2)).to.eql(arrayAfter);
      });

      it('last chunk with shorter length', () => {
        let arrayBefore = [1,2,3,4,5,6,7];
        let arrayAfter = [[1,2], [3,4], [5,6], [7]];

        expect(arrayChunks(arrayBefore, 2)).to.eql(arrayAfter);        
      });

      it('return main array with single array child', () => {
        let arrayBefore = [1,2,3,4,5,6,7];
        let arrayAfter = [[1,2,3,4,5,6,7]];

        expect(arrayChunks(arrayBefore)).to.eql(arrayAfter);  
      });
  });
});