let Array = [2,0,3,4,6,1,7,2,9];
let max = 0

for (let i = 0; i < Array.length()-1; i++) {
    if (Array[i] > max){
        max = Array[i];
    }
}

console.log(max);