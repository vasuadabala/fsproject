//Write a program to find LCM of two positive numbers.

function findGCD(a: number, b: number): number {
  let gcd = 1;
  let min = (a < b) ? a : b;
  
  for (let i = 1; i <= min; i++) {
      if (a % i === 0 && b % i === 0) {
          gcd = i;
      }
  }
  return gcd;
}

function findLCM(a: number, b: number): number {
  let gcd = findGCD(a, b);
  let lcm = (a * b) / gcd;
  return lcm;
}

let num1 = 12;
let num2 = 18;
let lcm = findLCM(num1, num2);
console.log(`LCM of ${num1} and ${num2} is ${lcm}`);
