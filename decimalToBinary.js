function decimalToBinary(n){
    let rem;
    let quot = n;
    let bin = ""

    while(quot !== 0){
        rem= quot % 2
        bin = rem + bin
        quot = Math.floor(quot / 2)
        
    }
    return bin
}

console.log(decimalToBinary(10))


let decimalNum = 25;
let binaryNum = parseInt(decimalNum, 10).toString(2);
console.log(binaryNum); // Output: 11001

