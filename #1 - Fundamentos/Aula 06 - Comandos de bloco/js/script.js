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

if (a > b) {
  console.log(a + " é maior que " + b);
} else {
  //não posso afirmar que a é menor que b automaticamente, pois eles podem ser iguais, logo, outro if será necessário.
  if (a < b) {
    console.log(a + " é menor que " + b);
  } else {
    console.log(a + " é igual a " + b);
  }
}

// Estrutura de decisão (switch-case)
var resposta = '';

switch (dia) {
  case 1:
    resposta = "Domingo";
    break;
  case 2:
    resposta = "Segunda";
    break;
  case 3:
    resposta = "Terça";
    break;
  case 4:
    resposta = "Quarta";
    break;
  case 5:
    resposta = "Quinta";
    break;
  case 6:
    resposta = "Sexta";
    break;
  case 7:
    resposta = "Sábado";
    break;

  default:
    resposta = "Dia inválido";

    console.log(reposta);
}


// Operador ternário
a = 6;
b = 7;

var resposta = a > b ? 'maior' : a < b ? 'menor' : 'igual';
console.log(resposta);



// Estruturas de repetição

/**
 * WHILE: enquanto a proposição for verdadeira, eu executo esse bloco de comandos
 * É necessário que tornemos a proposição false em algum momento, caso contrário, loop infinito
 * 
 * DO WHILE: semelhante ao while, mas a proposição é testada ao final do bloco
 * 
 * FOR: semelhante ao while e do while, mas possui uma sintaxe mais elegante e menos propensa a erros
 */

 // Somatório com WHILE
 var numeroAtual = 1;
 var somatorio = 0;

 while ( numeroAtual <= 10 ) {
   somatorio += numeroAtual;
   numeroAtual++;
 }

 console.log('A soma é ' + somatorio);


 
 // Somatório com DO WHILE
 var numeroAtual = 1;
 var somatorio = 0;

 do {
  somatorio += numeroAtual;
  numeroAtual++;
 } while ( numeroAtual <= 10 )

 console.log('A soma é ' + somatorio);

somatorio = 0;