import { expect } from 'chai';
import { romanNumerals } from '../src/test';
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
