// Bilangan Prima
function isPrimeNumber(x) {
  for (let i = 2; i < x; i++) if (x % i === 0) return "bukan prima";
  return x == 1 ? "bukan prima" : "prima";
}

console.log(isPrimeNumber(7));
console.log(isPrimeNumber(3));
console.log(isPrimeNumber(2));
console.log(isPrimeNumber(4));
console.log(isPrimeNumber(1));

// Tugas Deret
function theNumbersOfTermToN(n) {
  let s = 0,
    a = 2;
  for (let i = 1; i <= n; i++) {
    s += a;
    i % 2 === 0 ? (a += 3) : (a -= 1);
  }
  return s;
}

console.log(theNumbersOfTermToN(1));
console.log(theNumbersOfTermToN(2));
console.log(theNumbersOfTermToN(3));
console.log(theNumbersOfTermToN(4));
console.log(theNumbersOfTermToN(5));
console.log(theNumbersOfTermToN(6));
console.log(theNumbersOfTermToN(10));
console.log(theNumbersOfTermToN(21));
