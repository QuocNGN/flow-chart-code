// Nhập một số nguyên dương n (n<1000)
// a)    Tính và in ra tổng từ 1 đến n.
// b)    Tính tổng các ước số của n.
// c)    Tính tổng các chữ số của n.
// d)    Tìm chữ số lớn nhất của n.

//*===================================//
//* a) Tính và in ra tổng từ 1 đến n.
//*===================================//
function sumTonN(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  return sum;
}
console.log(sumTonN(4));

//*===================================//
//* b) Tính tổng các ước số của n.
//*===================================//
function sumUocSo(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
}
console.log(sumUocSo(6));

//*===================================//
//* c) Tính tổng các chữ số của n.
//*===================================//
function findTotalSum(n) {
  let sum = 0;
  
  // Duyệt qua từng chữ số của n
  while (n > 0) {
    let lastDigit = n % 10; // Lấy chữ số cuối cùng
    sum += lastDigit;       // Cộng chữ số cuối vào tổng
    // n = (n - (n % 10)) / 10;
    n = Math.floor(n / 10);  // Bỏ chữ số cuối cùng của n 
  }

  return sum;
}

console.log(findTotalSum(123));  // Output: 6

//*===================================//
//* d) Tìm chữ số lớn nhất của n.
//*===================================//
function findMaxDigits(n) {
  let max = 0;

  while (n > 0) {
    // Lấy chữ số cuối cùng của 'num' bằng phép chia lấy dư cho 10.
    let digit = n % 10;
    if (digit > max) {
      max = digit;
    }
    // Cập nhật 'num' bằng cách bỏ đi chữ số cuối cùng (chia cho 10 và lấy phần nguyên).
    n = Math.floor(n / 10);
  }
  return max;
}

console.log(findMaxDigits(528));