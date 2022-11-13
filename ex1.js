function reverse(caractere) {

    let result = "";

    for (let x = caractere.length - 1; x >= 0; x--) {

        result += caractere[x];

    }
    
    return result;
}
console.log(reverse('anticonstitutionnellement'));