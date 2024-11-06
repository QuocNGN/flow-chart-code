// Nhập một số nguyên dương n (n<1000)
// a)    Tính và in ra tổng từ 1 đến n.
// b)    Tính tổng các ước số của n.
// c)    Tính tổng các chữ số của n.
// d)    Tìm chữ số lớn nhất của n.

//*===================================//
//* a) Tính và in ra tổng từ 1 đến n.
//*===================================//
function sumToN(number) {
  let sum = 0;
  for (let i = 1; i <= number; i++) {
    sum += i;
  }

  return sum;
}
console.log(sumToN(4));

//*===================================//
//* b) Tính tổng các ước số của n.
//*===================================//
function sumOfDivisors(number) {
  let sum = 0;
  for (let i = 1; i <= number; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
}
console.log(sumOfDivisors(6));

//*===================================//
//* c) Tính tổng các chữ số của n.
//*===================================//
function findTotalSum(number) {
  let sum = 0;
  
  // Duyệt qua từng chữ số của n
  while (number > 0) {
    let lastDigit = number % 10; // Lấy chữ số cuối cùng
    sum += lastDigit;       // Cộng chữ số cuối vào tổng
    // n = (n - (n % 10)) / 10;
    number = Math.floor(number / 10);  // Bỏ chữ số cuối cùng của n 
  }

  return sum;
}

console.log(findTotalSum(123));  // Output: 6

//*===================================//
//* d) Tìm chữ số lớn nhất của n.
//*===================================//
function findMaxDigits(number) {
  let max = 0;

  while (number > 0) {
    // Lấy chữ số cuối cùng của 'num' bằng phép chia lấy dư cho 10.
    let digit = number % 10;
    if (digit > max) {
      max = digit;
    }
    // Cập nhật 'num' bằng cách bỏ đi chữ số cuối cùng (chia cho 10 và lấy phần nguyên).
    number = Math.floor(number / 10);
  }
  return max;
}

console.log(findMaxDigits(528));