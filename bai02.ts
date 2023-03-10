import { question } from "readline-sync";

let a: number = Number(question('Nhap a: '));
let b: number = Number(question('Nhap b: '));
let c: number = Number(question('Nhap c: '));

let result: number;
result = ((a**2) * (b**2))/c;

console.log(result);

