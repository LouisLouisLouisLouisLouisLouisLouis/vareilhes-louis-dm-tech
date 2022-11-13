function bigNbr(x, y, z) {
    let result = 0
    if(x > y){
        result = x
    }
    else{
        result = y
    }
    if(z > result){
        result = z
    }
    return result;
}
console.log(bigNbr(1,2,3));