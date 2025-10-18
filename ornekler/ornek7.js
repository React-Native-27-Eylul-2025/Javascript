let agaclar = [ "çınar", "çam", "çınar", "kestane", "ardıç", "söğüt", "salkım" ]
let donguTekrarSayisi = 0
// ismi çınar olanları döngü ile listeden silin


let silinecekAgac = "çınar"

for(let i = 0; i < agaclar.length; i++) {
    donguTekrarSayisi++
    
    let idx = agaclar.indexOf(silinecekAgac)
    if (idx === -1) {
        break;
    }
    agaclar.splice(idx, 1)
}

console.log(donguTekrarSayisi)