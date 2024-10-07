// Nhập một chuỗi ký tự hoặc dãy số:
// a) Tìm dãy con tăng/giảm dài nhất. 
// b) Sắp xếp ký tự theo thứ tự tăng/giảm và in ra.

// a) Tìm dãy con tăng dài nhất
function findLongestIncreasingSubsequence(str) {
    let longest = ""; 
    let current = ""; 

    for (let i = 0; i < str.length; i++) {
        if (i === 0 || str[i] > str[i - 1]) {
            current += str[i]; // Dãy tăng tiếp tục
        } else {
            if (current.length > longest.length) {
                longest = current; // Cập nhật dãy tăng dài nhất
            }
            current = str[i]; // Bắt đầu dãy tăng mới
        }
    }

    if (current.length > longest.length) {
        longest = current; // Kiểm tra dãy cuối cùng
    }
    return longest;
}

// Tìm dãy con giảm dài nhất
function findLongestDecreasingSubsequence(str) {
    let longest = "";
    let current = "";

    for (let i = 0; i < str.length; i++) {
        if (i === 0 || str[i] < str[i - 1]) {
            current += str[i]; // Dãy giảm tiếp tục
        } else {
            if (current.length > longest.length) {
                longest = current; // Cập nhật dãy giảm dài nhất
            }
            current = str[i]; // Bắt đầu dãy giảm mới
        }
    }

    if (current.length > longest.length) {
        longest = current; // Kiểm tra dãy cuối cùng
    }
    return longest;
}

// b) Sắp xếp ký tự theo thứ tự tăng dần/giảm dần và in ra
function sortStringAscending(str) {
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        arr.push(str[i]);
    }
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr.join(""); // Kết hợp lại thành chuỗi
}

function sortStringDescending(str) {
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        arr.push(str[i]);
    }
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr.join(""); // Kết hợp lại thành chuỗi
}

// Ví dụ sử dụng
const str = "abcdfghijklmno";

// a) Tìm dãy con tăng dài nhất
const longestInc = findLongestIncreasingSubsequence(str);
console.log("Dãy con tăng dài nhất:", longestInc);

const longestDec = findLongestDecreasingSubsequence(str);
console.log("Dãy con giảm dài nhất:", longestDec);

// b) Sắp xếp ký tự theo thứ tự tăng dần và giảm dần
const sortedAsc = sortStringAscending(str);
console.log("Ký tự sắp xếp tăng dần:", sortedAsc);

const sortedDesc = sortStringDescending(str);
console.log("Ký tự sắp xếp giảm dần:", sortedDesc);
