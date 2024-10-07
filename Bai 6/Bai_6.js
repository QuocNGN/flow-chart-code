// Nhập một số nguyên dương n:
// a) Tính và in ra giai thừa của n. 
// b) Tính và in ra tổng các chữ số của n.

//*==================================================//
//* a) Tính và in ra giai thừa của n. 
//*================================================//

function factorial(n) {
  let result = 1;

  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  return result;
}
console.log(factorial(5)); // 120

//*==================================================//
//* b) Tính và in ra tổng các chữ số của n. 
//*================================================//
function sumOfDigits(n) {
  let sum = 0;
  while (n > 0) {
    let lastDigit = n % 10;
    sum += lastDigit;  
    n = (n - lastDigit) / 10;  
  }
  return sum;
}
console.log(sumOfDigits(1234)); // 10