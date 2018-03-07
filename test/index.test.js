const expect = require('chai').expect;
const arrayDivider = require('../');

describe('array chunks module', () => {
  describe('validate return types', () => {
    it('should export a function', () => {
        expect(arrayDivider).to.be.a('function');
    });

    it('return new array', () => {
        expect(arrayDivider()).to.be.a('array');
    });

    it('with the empty array as first param', () => {
        expect(arrayDivider([])).to.be.a('array');
    });

    it('with the two parameters', () => {
        expect(arrayDivider([], 2)).to.be.a('array');
    });
  });

  describe('validate params types', () => {
    it('should return error, first parameter should to be a array', () => {
      expect(() => arrayDivider(12)).to.throw(TypeError);
    });

    it('should return error, second parameter should to be a number', () => {
        expect(() => arrayDivider([], NaN)).to.throw(TypeError);
    });
  });

  describe('split array', () => {
      it('split simple array', () => {
          let arrayBefore = [1,2,3,4,5,6];
          let arrayAfter = [[1,2], [3,4], [5,6]];

          expect(arrayDivider(arrayBefore, 2)).to.eql(arrayAfter);
      });

      it('last chunk with shorter length', () => {
        let arrayBefore = [1,2,3,4,5,6,7];
        let arrayAfter = [[1,2], [3,4], [5,6], [7]];

        expect(arrayDivider(arrayBefore, 2)).to.eql(arrayAfter);
      });

      it('return main array with single array child', () => {
        let arrayBefore = [1,2,3,4,5,6,7];
        let arrayAfter = [[1,2,3,4,5,6,7]];

        expect(arrayDivider(arrayBefore)).to.eql(arrayAfter);
      });
  });
});
