// bir x değeri tanımlayın ve bu değerin tek mi 
// çift mi olduğunu yazdıran programı yazın

// var x = 20

// if ( x % 2 == 0 ) {
//     console.log("çifttir")
// } else {
//     console.log("tektir")
// }

// eğer çift ise -> true
// tek ise -> false

function tekMi(x){
    if ( x % 2 == 0 ) {
        return false
    } else {
        return true
    }
}

console.log(tekMi(13))