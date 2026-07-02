// exercicio 1 

// for (let number = 1; number <= 10; number++) {
//   console.log(number);

// }

// EXERCICIO 2 

// for(let number = 0; number <= 20; number++) {
//   if(number % 2 === 0) {
//     console.log(number);
//   }
// }

// EXERCICIO 3

// const multiplicador = 7

// for (let i = 1; i <= 10; i++) {
//   let produto = multiplicador * i;
//   console.log(multiplicador, 'x', i, '=',  produto);
// }

// EXERCICIO 4

// let soma = 0;

// for (let i = 1; i <= 100; i++) {
//   soma = soma + i;
// }
// console.log(soma);

// EXERCICIO 5

// let somaPares = 0
// let somaImpares = 0

// for (let i = 1; i <= 30; i++) {
//   if(i % 2 === 0) {
//     somaPares = somaPares + i;
//   } else {
//     somaImpares = somaImpares + i;
//   }
// }
// console.log('Quantidade numero pares:', somaPares);
// console.log('Quantidade numero pares:', somaImpares);


// DESAFIO BONUS



for (let linha = 1; linha <= 5; linha++) {
  let resultado = ""
  for(let contador = 1; contador <= linha; contador++){
    resultado += "*"
  }
  console.log(resultado);
  
}

