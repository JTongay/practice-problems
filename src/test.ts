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
  public static validate(pin: string): boolean {
    const reg = new RegExp('^[0-9]+$');
    return reg.test(pin) && (pin.length === 4 || pin.length === 6);
  }
}

/**
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Note: If the number is a multiple of both 3 and 5, only count it once.
 */
export class Multiples {
  public static threeOrFive(num: number): number {
    let total: number = 0;
    for(let i = 0; i < num; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        total += i;
      }
    }
    return total;
  }
}
