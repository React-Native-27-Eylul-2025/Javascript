// yazılan bir string'i tersine çeviren programı yazınız
let str = "Mahir Sarıpınar"

var strSonHali = "";

for(let sayac = str.length-1; sayac >= 0; sayac--) {
        strSonHali += str[sayac];
}

console.log(strSonHali)
