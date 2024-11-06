// Nhập hai số nguyên dương a và b:
// a) Tìm ước chung lớn nhất. 
// b) Tìm bội chung nhỏ nhất.

//*==================================================//
//* a) Tìm ước chung lớn nhất. 
//*================================================//
function greatestCommonDivisor(numberA, numberB) {
    // Tìm ước chung lớn nhất (UCLN) sử dụng thuật toán Euclid
    while (numberB !== 0) {
        let temp = numberB;
        numberB = numberA % numberB; // Lấy phần dư
        numberB = temp;  // Cập nhật a
    }
    return numberB; // Trả về UCLN
}


//*==================================================//
//* b) Tìm bội chung nhỏ nhất.
//*================================================//
function leastCommonMultiple(numberA, numberB) {
    // Tìm bội chung nhỏ nhất (BCNN) từ UCLN
    return (numberA * numberB) / greatestCommonDivisor(numberA, numberB); // Sử dụng công thức BCNN = (a * b) / UCLN
}

// Nhập hai số nguyên dương
let numberA = 12; // Ví dụ số a
let numberB = 18; // Ví dụ số b

const ucln = greatestCommonDivisor(numberA, numberB); // Tính UCLN
const bcnn = leastCommonMultiple(numberA, numberB); // Tính BCNN

console.log("Ước chung lớn nhất của", a, "và", b, "là:", ucln);
console.log("Bội chung nhỏ nhất của", a, "và", b, "là:", bcnn);
