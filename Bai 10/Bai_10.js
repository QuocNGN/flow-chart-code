// Nhập hai số nguyên dương a và b:
// a) Tìm ước chung lớn nhất. 
// b) Tìm bội chung nhỏ nhất.

//*==================================================//
//* a) Tìm ước chung lớn nhất. 
//*================================================//
function gcd(a, b) {
    // Tìm ước chung lớn nhất (UCLN) sử dụng thuật toán Euclid
    while (b !== 0) {
        let temp = b;
        b = a % b; // Lấy phần dư
        a = temp;  // Cập nhật a
    }
    return a; // Trả về UCLN
}


//*==================================================//
//* b) Tìm bội chung nhỏ nhất.
//*================================================//
function lcm(a, b) {
    // Tìm bội chung nhỏ nhất (BCNN) từ UCLN
    return (a * b) / gcd(a, b); // Sử dụng công thức BCNN = (a * b) / UCLN
}

// Nhập hai số nguyên dương
let a = 12; // Ví dụ số a
let b = 18; // Ví dụ số b

const ucln = gcd(a, b); // Tính UCLN
const bcnn = lcm(a, b); // Tính BCNN

console.log("Ước chung lớn nhất của", a, "và", b, "là:", ucln);
console.log("Bội chung nhỏ nhất của", a, "và", b, "là:", bcnn);
