function reverseAnArray(n, arr) {
  let reversedArr = [];

//   for (let i = n - 1; i >= 0; i--) {
//     reversedArr.push(arr[i]);
//   }
//   console.log(reversedArr.join(" "));
let joined = ''
for(let i = 0; i < n; i++){
    reversedArr[n - 1 - i] = arr[i]
}
for(let i = 0; i<reversedArr.length; i++){
    joined += reversedArr[i]
    if(i < reversedArr.length-1){
        joined += ' '
    }
}
console.log(joined);
}
reverseAnArray(4, [-1, 20, 99, 5]);
