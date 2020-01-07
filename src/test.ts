export function HelloTest() {
  return true;
}

/**
 * This is a function to a convert any roman numeral string into a number
 * @param roman Roman numeral string ex: IV, X, etc.
 */
export function romanNumerals(roman: string): number {
  const table = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1
  };

  return roman.split('').reduceRight((prev, cur, i, arr) => {
    return table[arr[i + 1]] > table[cur]
      ? prev - table[cur]
      : prev + table[cur];
  }, 0);
}

/**
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.
 */
export class PinValidator {
  static validate(pin: string): boolean {
    const reg = new RegExp('^[0-9]+$');
    return reg.test(pin) && (pin.length === 4 || pin.length === 6);
  }
}
