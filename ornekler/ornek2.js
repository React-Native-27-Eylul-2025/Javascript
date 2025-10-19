// arraydeki sayıları toplayan kodu yazınız.

// let myArray = [1,2,6,9,3,67,8,0,32];

// let toplam = 0;

// for (let i = 0; i < myArray.length; i++) {
//     toplam = toplam + myArray[i]
// }

// console.log(toplam)


// FONKSİYON İLE NASIL YAPILIR

let myArray = [1,2,6,9,3,67,8,0,32];



/**
 * Bu fonksiyon şunu yapar bunu yapar.
 *
 * @param   arr bir arraydir
 * @param   max maximum verilebilecek array uzunluğu
 * @returns array toplamını return eder.
 */
function sumArray(arr, max) {
    let toplam = 0;
    for (let i = 0; i < arr.length; i++) {
        toplam = toplam + arr[i]
    }
    return toplam
}

console.log("sonuç: ", sumArray(myArray))
