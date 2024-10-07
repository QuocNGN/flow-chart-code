// Nhập một số nguyên dương n, in ra n số đầu tiên của dãy Fibonacci.

function fibonacci(n) {
  debugger;
  let a = 0,
    b = 1,
    next;
  let arrFibonacci = []; // Tạo mảng để lưu dãy Fibonacci

  arrFibonacci[0] = a; // Lưu số đầu tiên là 0

  if (n > 1) {
    arrFibonacci[1] = b; // Lưu số thứ hai là 1
  }

  for (let i = 2; i < n; i++) {
    next = a + b; // Tính số Fibonacci tiếp theo
    a = b; // Cập nhật a là số tiếp theo
    b = next; // Cập nhật b là tổng của hai số trước
    arrFibonacci[i] = b; // Lưu số Fibonacci vào mảng
  }

  return arrFibonacci;
}
console.log(fibonacci(0)); // [0]
console.log(fibonacci(4)); // [0, 1, 1, 2]
