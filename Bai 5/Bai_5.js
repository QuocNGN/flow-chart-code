// Nhập một mảng số nguyên, sắp xếp và in ra.

function sortingInteger(arr) {
  let newArr = []
  let index = 0;
  // Sử dụng thuật toán Bubble Sort để sắp xếp mảng
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap phần tử
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        newArr = temp;
        index++;
      }
    }
  }
  return arr;
}
console.log(sortingInteger([5,4,6,7,8,9,1,2,33,6,44,21]));