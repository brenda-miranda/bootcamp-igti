/**
 * Proposições lógicas 
 * 8 > 9 
 * result: false
 * 
 * 9 === 9
 * result: true
 * 
 * 9 === '9'
 * result: false
 */


// Estrutura de decisão (if, else)
var a = 8;
var b = 8;

if ( a > b ) {
   console.log(a + ' é maior que ' + b);
} else { //não posso afirmar que a é menor que b automaticamente, pois eles podem ser iguais, logo, outro if será necessário.
   if ( a < b ) {
      console.log(a + ' é menor que ' + b);
   } else {
      console.log(a + ' é igual a ' + b);
   }
}
