import { expect } from 'chai';
import { romanNumerals, PinValidator } from '../src/test';
import 'mocha';

describe('Roman Numeral Decoder', () => {
  it('should convert I into 1', () => {
    const result = romanNumerals('I');
    expect(result).to.equal(1);
  });
  it('should convert V into 5', () => {
    const result = romanNumerals('V');
    expect(result).to.equal(5);
  });
  it('should convert multiple letters of a roman numeral into the correct number', () => {
    const result = romanNumerals('XXI');
    expect(result).to.equal(21);
  });
  it('should convert IV into 4', () => {
    const result = romanNumerals('IV');
    expect(result).to.equal(4);
  });

  it('should convert IX into a 9', () => {
    const result = romanNumerals('IX');
    expect(result).to.equal(9);
  });
});

describe('PinValidator', () => {
  it('should return false for pins with length other than 4 or 6', () => {
    expect(PinValidator.validate('1')).to.be.false;
    expect(PinValidator.validate('12')).to.be.false;
    expect(PinValidator.validate('123')).to.be.false;
    expect(PinValidator.validate('12345')).to.be.false;
    expect(PinValidator.validate('1234567')).to.be.false;
    expect(PinValidator.validate('1.00')).to.be.false;
    expect(PinValidator.validate('-1231')).to.be.false;
    expect(PinValidator.validate('0000000000')).to.be.false;
  });
  it('should return false for pins which contain characters other than digits', () => {
    expect(PinValidator.validate('a123')).to.be.false;
    expect(PinValidator.validate('.234')).to.be.false;
  });
  it('should return true for valid pins', () => {
    expect(PinValidator.validate('1234')).to.be.true;
    expect(PinValidator.validate('5555')).to.be.true;
    expect(PinValidator.validate('0000')).to.be.true;
    expect(PinValidator.validate('123456')).to.be.true;
    expect(PinValidator.validate('666999')).to.be.true;
  });
})
