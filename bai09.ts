import { question } from "readline-sync";

let x: number = Number(question('Nhap x: '));
let y: number = Number(question('Nhap y: '));

let S: number;
S = ((Math.sqrt(x)) + (Math.abs(y)))/(Math.sqrt(x**y));

console.log(S);