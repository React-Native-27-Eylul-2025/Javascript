// arraydeki sayıları toplayan kodu yazınız.

let myArray = [1,2,6,9,3,67,8,0,32];

let toplam = 0;

for (let i = 0; i < myArray.length; i++) {
    toplam = toplam + myArray[i]
}

console.log(toplam)