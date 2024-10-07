// Nhập một mảng 2 chiều số nguyên:
// a) Tìm số lớn nhất trong mảng. 
// b) Tìm số nhỏ nhất trong mảng. 
// c) Tính tổng các phần tử trên hàng hoặc cột thứ k. 
// d) Tìm và in ra tất cả các số nguyên tố trong mảng.

// a) Tìm số lớn nhất trong mảng
function findMaxIn2DArray(arr) {
    let max = arr[0][0]; // Giả định phần tử đầu tiên là lớn nhất
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > max) {
                max = arr[i][j]; // Cập nhật giá trị lớn nhất
            }
        }
    }
    return max;
}

// b) Tìm số nhỏ nhất trong mảng
function findMinIn2DArray(arr) {
    let min = arr[0][0]; // Giả định phần tử đầu tiên là nhỏ nhất
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] < min) {
                min = arr[i][j]; // Cập nhật giá trị nhỏ nhất
            }
        }
    }
    return min;
}

// c) Tính tổng các phần tử trên hàng hoặc cột thứ k
function sumRowOrColumn(arr, k, isRow = true) {
    let sum = 0;
    if (isRow) {
        // Tính tổng hàng thứ k
        for (let j = 0; j < arr[k].length; j++) {
            sum += arr[k][j];
        }
    } else {
        // Tính tổng cột thứ k
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i][k];
        }
    }
    return sum;
}

// d) Tìm và in ra tất cả các số nguyên tố trong mảng
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function findAllPrimes(arr) {
    let primes = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (isPrime(arr[i][j])) {
                primes.push(arr[i][j]); // Thêm số nguyên tố vào mảng
            }
        }
    }
    return primes;
}

// Ví dụ sử dụng
const arr2D = [
    [3, 4, 1, 6],
    [7, 8, 9, 2],
    [5, 12, 11, 13]
];

// a) Tìm số lớn nhất
const max = findMaxIn2DArray(arr2D);
console.log("Số lớn nhất trong mảng:", max);

// b) Tìm số nhỏ nhất
const min = findMinIn2DArray(arr2D);
console.log("Số nhỏ nhất trong mảng:", min);

// c) Tính tổng các phần tử trên hàng hoặc cột thứ k
const k = 1; // Ví dụ tính tổng hàng hoặc cột thứ 1
const sumRow = sumRowOrColumn(arr2D, k, true);
console.log("Tổng các phần tử trên hàng thứ", k, ":", sumRow);

const sumCol = sumRowOrColumn(arr2D, k, false);
console.log("Tổng các phần tử trên cột thứ", k, ":", sumCol);

// d) Tìm và in ra tất cả các số nguyên tố
const primes = findAllPrimes(arr2D);
console.log("Các số nguyên tố trong mảng:", primes);
