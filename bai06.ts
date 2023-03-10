import { question } from "readline-sync";

let s: number = Number(question('Nhap giay s: '));
///////////số giờ
let h: number = Math.floor(s/3600);

//giờ còn dư lẻ ra
let hDu: number = (s/3600) - h;

//////////số phút
let m: number = Math.floor(hDu*60);

//số phút còn dư lẻ ra
let mDu: number = (hDu*60) - m;

//////////Số giây (còn lại)
let sDu: number = mDu*60;

//in ra 
console.log(h,'h', m, 'm', sDu, 's');