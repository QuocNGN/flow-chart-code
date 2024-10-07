// Nhập một chuỗi ký tự:
// a) Đảo ngược chuỗi. 
// b) Xóa khoảng trắng trong chuỗi. 
// c) Kiểm tra chuỗi đối xứng. 
// d) Tìm dãy con đối xứng dài nhất.

//*==================================================//
//* a) Đảo ngược chuỗi. 
//*================================================//
function reverseString(string) {
  let result = "";
  for (let i = string.length - 1; i >= 0; i--) {
    result += string[i];
  }
  return result;
}
console.log(reverseString("abcdefghijklmnopqr"));

//*==================================================//
//* b) Xóa khoảng trắng trong chuỗi. 
//*================================================//
function removeSpaces(string) {
  let result = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i]!== ' ') {
      result += string[i];
    }
  }
  return result;
}
console.log(removeSpaces("Hello world"));
console.log(removeSpaces("H e  l l o w   o rl    d"));

//*==================================================//
//* c) Kiểm tra chuỗi đối xứng. 
//*================================================//
function isPalindrome(string) {
  let reverseNewString = reverseString(string);
  if (string !== reverseNewString)  {
      return false;
  }
  return  true;
}
console.log(isPalindrome("Hello world"));
console.log(isPalindrome("2002"));

//*==================================================//
//* d) Tìm dãy con đối xứng dài nhất.
//*================================================//
function longestPalindrome(string) {
  
}
console.log("Longest Palindrome");s