import { question } from "readline-sync";

let x1: number = Number(question('Nhap x1: '));
let y1: number = Number(question('Nhap y1: '));

let x2: number = Number(question('Nhap x2: '));
let y2: number = Number(question('Nhap y2: '));

let d: number;
d = Math.sqrt((x2 -x1)**2 +(y2 -y1)**2);

console.log(d);