function caractereInverse(caractere) {

  var resultat = "";

  for (var x = caractere.length - 1; x >= 0; x--) {

      resultat += caractere[x];
  }
  return resultat;
}
console.log(caractereInverse('anticonstitutionnellement'));