import { question } from "readline-sync";

let a: number = Number(question('Nhap so xe (5 so): '));

let c: string = String(a);

// let total: number;
// total = 0;
// total = Number(c[0]) + Number(c[1]) + Number(c[2]) +Number(c[3]) +Number(c[4]);

// console.log('So nut cua xe la: ', Number(String(total)[1]));
let s: number;
s = 0;
for (let index of c) {
    s = s + Number(index);
    // console.log();
}
console.log('Tong so la: ', s);
console.log('So nut cua xe la: ', Number(String(s)[1]));



    
