import { expect } from 'chai';
import { romanNumerals, PinValidator, Multiples, twoSum, isPalindrome, findTheDifference } from '../src/test';
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
});

describe('Multiples of 3 or 5 then add', () => {
  it('should add up all the numbers in a given number that are multiples of 3 or 5' , () => {
    expect(Multiples.threeOrFive(10)).to.equal(23);
  })
})

describe("TwoSum", () => {
  it("returns the sum of back to back indexes", () => {
    const result = twoSum([2,7,11,15], 9);

    expect(result).to.deep.equal([0,1])
  })
  it("returns another sum of the back to back indexes", () => {
    const result = twoSum([3,2,4], 6);

    expect(result).to.deep.equal([1, 2])
  })

  it("returns indexes not directly next to each other", () => {
    const result = twoSum([3, 2, 3], 6);

    expect(result).to.deep.equal([0, 2])
  })
});

describe("isPalindrome number", () => {
  it("returns true for a palindrome", () => {
    const result = isPalindrome(101);

    expect(result).to.be.true;
  });

  it("returns false for not a palindrome", () => {
    const result = isPalindrome(1234);

    expect(result).to.be.false;
  })
})

describe("findTheDifference", () => {
  it("found the difference and returned the extra", () => {
    const result = findTheDifference("abcd", "abcde");

    expect(result).to.equal("e");
  });
});

