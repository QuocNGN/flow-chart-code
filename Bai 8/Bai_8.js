// Nhập một chuỗi ký tự:
// a) Đếm số nguyên âm.
// b) Đếm số lần xuất hiện của một ký tự.
// c) Tìm ký tự xuất hiện nhiều nhất.

function countVowels(string) {
  // debugger;
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    // Kiểm tra ký tự có phải là nguyên âm không
    if (
      char === 'a' ||
      char === 'e' ||
      char === 'i' ||
      char === 'o' ||
      char === 'u' ||
      char === 'A' ||
      char === 'E' ||
      char === 'I' ||
      char === 'O' ||
      char === 'U'
    ) {
      count++;
    }
  }
  return count;
}
console.log(countVowels('Hello, world!')); // 3

//*==================================================//
//* b) Đếm số lần xuất hiện của một ký tự.
//*================================================//
function countCharacter(str, charToCount) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === charToCount) {
      count++;
    }
  }
  return count;
}
console.log(countCharacter('Hello, world!', 'o')); // 2
console.log(countCharacter('abcdefghijklmnopqrstuvwxyzABCDEFGH', 'a')); // 1

//*==================================================//
//* c) Tìm ký tự xuất hiện nhiều nhất.
//*================================================//
function findMostFrequentChar(str) {
  debugger
  const charCount = {}; // Bản đồ lưu trữ số lần xuất hiện của ký tự
  let mostFrequent = ''; // Ký tự xuất hiện nhiều nhất
  let maxCount = 0; // Số lần xuất hiện cao nhất

  for (let i = 0; i < str.length; i++) {
    // Sử dụng vòng lặp for truyền thống
    const char = str[i]; // Ký tự hiện tại
    // Tăng số lần xuất hiện
    if (charCount[char]) {
      charCount[char]++; // Nếu đã có, tăng thêm 1
    } else {
      charCount[char] = 1; // Nếu chưa có, khởi tạo bằng 1
    }

    // Kiểm tra và cập nhật ký tự xuất hiện nhiều nhất
    if (charCount[char] > maxCount) {
      maxCount = charCount[char];
      mostFrequent = char; // Cập nhật ký tự xuất hiện nhiều nhất
    }
  }
//   return { mostFrequent, count: maxCount }; // Trả về ký tự xuất hiện nhiều nhất
  return mostFrequent; // Trả về ký tự xuất hiện nhiều nhất
}

console.log(findMostFrequentChar('Hello World'));

