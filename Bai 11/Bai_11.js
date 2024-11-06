// Nhập một mảng 1 chiều số nguyên n:
// a) Tìm vị trí của số lớn nhất. 
// b) Tìm vị trí của số nhỏ nhất. 
// c) Tìm và in ra tổng các phần tử trong mảng.

//*==================================================//
//* a) Tìm vị trí của số lớn nhất. 
//*================================================//
function findMaxIndex(arr) {
    let maxIndex = 0; // Giả định phần tử đầu tiên là lớn nhất
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[maxIndex]) {
            maxIndex = i; // Cập nhật vị trí phần tử lớn nhất
        }
    }
    return maxIndex;
}

//*==================================================//
//* b) Tìm vị trí của số nhỏ nhất.
//*================================================//
function findMinIndex(arr) {
    let minIndex = 0; // Giả định phần tử đầu tiên là nhỏ nhất
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[minIndex]) {
            minIndex = i; // Cập nhật vị trí phần tử nhỏ nhất
        }
    }
    return minIndex;
}

//*==================================================//
//* c) Tìm và in ra tổng các phần tử trong mảng.
//*================================================//
function sumOfArray(arr) {
    let sum = 0; // Biến để lưu tổng các phần tử
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]; // Cộng từng phần tử vào tổng
    }
    return sum;
}

// Ví dụ sử dụng
const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5];

// Tìm vị trí số lớn nhất
const maxIndex = findMaxIndex(arr);
console.log("Vị trí của số lớn nhất:", maxIndex);

// Tìm vị trí số nhỏ nhất
const minIndex = findMinIndex(arr);
console.log("Vị trí của số nhỏ nhất:", minIndex);

// Tính tổng các phần tử trong mảng
const totalSum = sumArray(arr);
console.log("Tổng các phần tử trong mảng:", totalSum);
