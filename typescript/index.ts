//function topla(a: number, b: number): number {
//    return a + b
//}

// console.log(topla(5, 4))


// const a: Array<string> = []


//type User = {
//    name: string;
//    surname: string;
//    age: number;
//    hobbies: string[];
//}

interface User {
    name: string,
    surname: string,
    age: number,
    hobbies: Array<string>
}

const user1: User = {
    name: "bedirhan",
    surname: "giden",
    age: 27,
    hobbies: ["sanat sepet", "yazılım"]
}

console.log(user1)

type Weekday = "pazartesi" | "salı" | "çarşamba"

let weekday: Weekday = "pazartesi"

