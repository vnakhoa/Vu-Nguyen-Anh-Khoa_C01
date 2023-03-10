import { question } from "readline-sync";

const PI: number = 3.14;
let r: number = Number(question('Nhap ban kinh r: '));

let chuVi: number;
chuVi = 2 * PI * r;

let dienTich: number;
dienTich = PI * r**2;

console.log('Chu vi hinh tron la: ', chuVi);
console.log('Dien tich hinh tron la: ', dienTich);
