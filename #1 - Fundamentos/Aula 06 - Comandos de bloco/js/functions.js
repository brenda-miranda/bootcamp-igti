// função 
function sum(a, b) {
   return a + b;
}

console.log(sum(1, 2));



// função 
function compareNumbers(a, b) {
   // return a > b ? 1 : a < b ? -1 : 0;
   return a - b;
}

console.log(compareNumbers(1, 1));
console.log(compareNumbers(1, 2));
console.log(compareNumbers(2, 1));



// função 
function somatorio(from, upTo) {
   var sum = 0;

   for(var i = from; 1 <= upTo; 1++) {
      sum += i;
   }
   return sum;
}

console.log(somatorio(1, 10));