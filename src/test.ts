export function HelloTest() {
  return true;
}

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
