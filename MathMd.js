function Additions(...numbers){       // +
    let out = 0n;
    for (let e of numbers){
        out += BigInt(e);
    }
    return out
}
function Subtraction(...numbers){     // -
    let out = BigInt(numbers[0]);
    for (let i = 1; i<numbers.length; i++){
        out -= BigInt(numbers[i]);
    }
    return out
}
function multiplication(...numbers){  // *
    let out = 1n;
    for (let e of numbers){
        out *= BigInt(e);
    }
    return out
}
function Division(...numbers){        // /
    let out = BigInt(numbers[0]);
    for (let i = 1; i<numbers.length; i++){
        out /= BigInt(numbers[i]);
    }
    return out
}

export {Additions, Subtraction, multiplication, Division}