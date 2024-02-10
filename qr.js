const fs = require("fs");
const qr = require("qrcode");

const ig = 'https://scontent.fsub6-5.fna.fbcdn.net/v/t39.30808-6/394551485_277213888626445_7031388004239797248_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFQQyKKIrQiX4My6G1Y_yombBh2Qb4LC4xsGHZBvgsLjHGh3dvyjpES1Mk_IumsmoFkd8GFdDXLvUOrtyCYtdyy&_nc_ohc=_Jbsh-JDlzMAX8iJ3hB&_nc_zt=23&_nc_ht=scontent.fsub6-5.fna&oh=00_AfDLC6yk7VgoTdGWkNCwYJkQlvaefBa6mushbYdgHZ3-9w&oe=654052B5';
const output = 'qr.png'

qr.toFile(output, ig,(err)=>{
    if(!err){
        console.log('berhasil disimpan')
    }
})
