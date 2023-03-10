import { question } from "readline-sync";

let soLuong: number = Number(question('Nhap so luong: '));
let donGia: number = Number(question('Nhap don gia: '));

const tien: number = soLuong * donGia;

const thueGtgt: number = tien * 0.1 ;

console.log('Tien phai tra la: ', tien);
console.log('Thue GTGT phai tra la: ', thueGtgt);
