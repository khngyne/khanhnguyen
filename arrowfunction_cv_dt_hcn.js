// Hàm tính chu vi hcn
const perimeter = (length, width) => 2 * (length + width);

// Hàm tính diện tích hcn
const area = (length, width) => length * width;

// Khai báo chiều dài và chiều rộng
const length = 5; //chiều dài
const width = 3; //chiều rộng

// Tính chu vi và diện tích
const rectPerimeter = perimeter(length, width);
const rectArea = area(length, width);

// In ket qua
console.log(`Chu vi hcn: ${rectPerimeter}`); //output
console.log(`Dien tich hcn: ${rectArea}`); //output
