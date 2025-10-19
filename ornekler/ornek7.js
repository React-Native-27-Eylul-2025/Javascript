// let agaclar = [ "çınar", "çam", "çınar", "kestane", "ardıç", "söğüt", "salkım" ]
// let donguTekrarSayisi = 0
// // ismi çınar olanları döngü ile listeden silin


// let silinecekAgac = "çınar"

// for(let i = 0; i < agaclar.length; i++) {
//     donguTekrarSayisi++
    
//     let idx = agaclar.indexOf(silinecekAgac)
//     if (idx === -1) {
//         break;
//     }
//     agaclar.splice(idx, 1)
// }

// console.log(donguTekrarSayisi)


function removeElementFromArray(arr, str){
    for(let i = 0; i < arr.length; i++) {
        let idx = arr.indexOf(str)
        if (idx === -1) {
            break;
        }
        arr.splice(idx, 1)
    }

    return arr
}

let agaclar = [ "çınar", "çam", "çınar", "kestane", "ardıç", "söğüt", "salkım" ]

let a = removeElementFromArray(agaclar, "çınar")

console.log(a)