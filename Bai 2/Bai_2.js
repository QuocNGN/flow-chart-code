// Nhập một dãy số nguyên dương n (n > 100000) vd 123123123
// a)    Tìm và in ra số lớn nhất.
// b)    Tìm và in ra số lớn thứ hai.
// c)    Tìm và in ra số nhỏ nhất.
// d)    Tìm và in ra tất cả các số nguyên tố trong dãy.

//*===================================//
//* a) Tìm và in ra số lớn nhất.
//*===================================//
function findMaxDigits(n) {
  let maxDigit = 0; // Khởi tạo maxDigit để lưu chữ số lớn nhất

  while (n > 0) {
    let currentDigit = n % 10; // Lấy chữ số cuối cùng
    if (currentDigit > maxDigit) {
      maxDigit = currentDigit; // Cập nhật maxDigit nếu chữ số lớn hơn
    }
    n = Math.floor(n / 10); // Bỏ chữ số cuối cùng
  }

  return maxDigit;
}

console.log(findMaxDigits(123123123)); // Output: 3

//*===================================//
//* b) Tìm và in ra số lớn thứ hai.
//*===================================//

// function findSecondMaxDigits(n) {
//   let newArr = String(n).split('').map(Number);
//   let uniqueDigits = [...new Set(newArr)]; // Loại bỏ các chữ số trùng lặp.

//   uniqueDigits.sort((a, b) => b - a); // Sắp xếp các chữ số từ lớn đến bé.

//   return uniqueDigits[1]; // Trả về số lớn thứ hai (nếu có).
// }

function findSecondMaxDigit(n) {
  let maxDigit = -1;
  let secondMaxDigit = -1;

  while (n > 0) {
    // Lặp cho đến khi không còn chữ số nào.
    let currentDigit = n % 10; // Lấy chữ số cuối cùng của số n.
    n = Math.floor(n / 10); // Loại bỏ chữ số cuối cùng để tiếp tục duyệt.

    if (currentDigit > maxDigit) {
      secondMaxDigit = maxDigit;
      maxDigit = currentDigit;
    } else if (currentDigit > secondMaxDigit && currentDigit !== maxDigit) {
      // Nếu currentDigit nằm giữa maxDigit và secondMaxDigit.
      secondMaxDigit = currentDigit;
    }

    // Nếu đã tìm được maxDigit là 9 và secondMaxDigit là 8, có thể dừng lại sớm
    if (maxDigit === 9 && secondMaxDigit === 8) {
      break;
    }
  }
  return secondMaxDigit;
}
console.log(findSecondMaxDigit(123123123));

//*===================================//
//* c) Tìm và in ra số nhỏ nhất.
//*===================================//
function findSecondMinDigit(n) {
  let minDigit = 9;

  while (n > 0) {
    let currentDigit = n % 10;
    n = Math.floor(n / 10);

    if (currentDigit < minDigit) {
      minDigit = currentDigit;
    }
  }
  return minDigit;
}

console.log(findSecondMinDigit(1231234123));
console.log(findSecondMinDigit(234568));

//*==================================================//
//* d) Tìm và in ra tất cả các số nguyên tố trong dãy.
//*================================================//
function isPrime(num) {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    debugger
    if (num % i === 0) {
      return false; // Nếu num chia hết cho i, nó không phải số nguyên tố.
    }
  }
  return true; // Nếu không tìm thấy ước số nào, nó là số nguyên tố.
}

function findPrimesInRange(arr) {
  let primes = []; // Mảng để lưu các số nguyên tố.

  for (let i = 0; i < arr.length; i++) {
    if (isPrime(arr[i])) {
      // Kiểm tra xem số arr[i] có phải số nguyên tố không.
      primes.push(arr[i]); // Nếu là số nguyên tố, thêm vào mảng primes.
    }
  }

  return primes; // Trả về mảng các số nguyên tố.
}

// Ví dụ sử dụng
let numbers = [10, 15, 3, 7, 11, 20, 13, 17];
console.log(findPrimesInRange(numbers));
