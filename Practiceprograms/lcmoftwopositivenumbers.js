//Write a program to find LCM of two positive numbers.
function findGCD(a, b) {
    var gcd = 1;
    var min = (a < b) ? a : b;
    for (var i = 1; i <= min; i++) {
        if (a % i === 0 && b % i === 0) {
            gcd = i;
        }
    }
    return gcd;
}
function findLCM(a, b) {
    var gcd = findGCD(a, b);
    var lcm = (a * b) / gcd;
    return lcm;
}
var num1 = 12;
var num2 = 18;
var lcm = findLCM(num1, num2);
console.log("LCM of ".concat(num1, " and ").concat(num2, " is ").concat(lcm));
