function reverseInPlace(input){

    for(let i = 0; i < input.length / 2; i++){
        
        let char = input[input.length - i - 1]
        input[input.length - i - 1] = input[i]
        input[i] = char;
    }
let stringed = ``
    for(let i = 0; i < input.length; i++){
        stringed += input[i]
        if(i < input.length -1){
            stringed+=' '
        }
    }

    console.log(stringed);


}
// reverseInPlace(['a', 'b', 'c', 'd', 'e'])
reverseInPlace(['33', '123', '0', 'dd'])