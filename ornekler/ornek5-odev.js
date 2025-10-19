// yazılan bir string'i tersine çeviren programı yazınız
// let str = "Mahir Sarıpınar"

// var strSonHali = "";

// for(let sayac = str.length-1; sayac >= 0; sayac--) {
//         strSonHali += str[sayac];
// }

// console.log(strSonHali)


function tersCevir(str){
        var strSonHali = ""

        for(let sayac = str.length-1; sayac >= 0; sayac--) {
                strSonHali += str[sayac]
        }

        return strSonHali
}

console.log(tersCevir("bedirhan"))