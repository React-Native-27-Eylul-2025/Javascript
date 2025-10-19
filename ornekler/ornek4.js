// 1'den x'e kadar olan sayıların toplamını bulan program

let x = 3




// console.log(toplam)

function toplam(x) {
    let sonuc = 0;
    
    for(let i = 1; i<=x; i++){
        sonuc += i
    }
    return sonuc
}

console.log(toplam(12))