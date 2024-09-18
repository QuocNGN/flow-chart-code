// Nhập một số nguyên dương n:
// a) Kiểm tra n có phải là số nguyên tố.
// b) Kiểm tra n có phải là số hoàn hảo.
// c) Kiểm tra n có phải là số chính phương.
// d) In ra tất cả các số nguyên tố nhỏ hơn hoặc bằng n.

//*==================================================//
//* a) Kiểm tra n có phải là số nguyên tố.
//*================================================//
function isPrime(number) {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrime(7)); // true
console.log(isPrime(9)); //false

//*==================================================//
//* b) Kiểm tra n có phải là số hoàn hảo.
//*================================================//
function isPerfectNumber(number) {
  let sum = 0;
  for (let i = 1; i < number; i++) {
    if (number % i === 0) {
      sum += i;
    }
  }
  if (sum !== number) {
    return false;
  }
  return true;
}
console.log(isPerfectNumber(6)); // 1+2+3 = 6

//*==================================================//
//* C) Kiểm tra n có phải là số chính phương.
//*================================================//
function isSquareNumber(number) {
  let squareNumber = Math.sqrt(number);
  if (squareNumber * squareNumber === number) {
    return true;
  }
  return false;
}
console.log(isSquareNumber(16)); // 16 = 4^4
console.log(isSquareNumber(20)); //
console.log(isSquareNumber(25)); // 25 = 5^5

//*==================================================//
//* d) In ra tất cả các số nguyên tố nhỏ hơn hoặc bằng n.
//*================================================//
function printIntegers(number) {
  let arrInteger = [];
  let index = 0; // Biến đếm số phần tử thêm vào mảng

  for (let i = 1; i < number; i++) {
    if (isPrime(i)) {
      // Thay vì sử dụng push, gán giá trị vào chỉ số tương ứng
      arrInteger[index] = i;
      index++;
    }
  }

  // Cắt mảng để loại bỏ các giá trị không cần thiết (nếu cần)
  //   arrInteger.length = index;
  return arrInteger;
}
console.log(printIntegers(10)); // 2 3 5 7
