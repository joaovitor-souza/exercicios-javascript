// function saudacao(nome) {
//   return "Olá " + nome;
// }

// const seuNome = saudacao('Joao')
// console.log(seuNome);


//EXERCICIO 2

// function somar(a, b) {
//   return a + b;
// }

// const resultado = somar(5, 3) 

// console.log(resultado);

// EXERCICIO 3

// function ehPar(numero) {
//   if(numero % 2 === 0){
//     return true
//   } else {
//     return false
//   }
// }

// const resultado = ehPar(5)
// console.log(resultado);

// EXERCICIO 4 

// const resultadoDaNota = verificarNota(1)

// function verificarNota(nota) {
//   if(nota >= 60) {
//     console.log('APROVADO');
//   } else if (nota < 60 && nota >= 45) {
//     console.log('RECUPERAÇÃO');
//   } else{
//     console.log('REPROVADO');
//   }
// }

// EXERCICIO 5 

// function maiorNumero(a, b){
//   if(a > b || a === b) {
//     return a
//   } else {
//     return b
//   } 
// }

// const numeros = maiorNumero(2,2)

// EXERCICIO 6 TABUADA REUTILIZAVEL

// function tabuada(numero) {
//   for(let multiplicador = 1; multiplicador <= 10; multiplicador ++) {
//     const resultado = numero * multiplicador
//     console.log(numero, 'X', multiplicador, '=', resultado);

//   }
// } 

// const tabuadas = tabuada(5)

// EXERCICIO 7

// function somarAte(numero) {
//   let soma = 0
//   for(let i = 1; i <= numero; i++) {
//    soma = soma + i
//    return soma
//   }
// }
// const some = somarAte(5)
// console.log(some);

// EXERCIO 8

// function contarPares(limite){
//   let quantidadeNumero = 0
//   for(let valor = 1; valor <= limite; valor ++) {
//     if(valor % 2 === 0) {
//       quantidadeNumero += 1
//     }
//   }
//   return quantidadeNumero
// }

// const resultado = contarPares(20)

// console.log(resultado);

function fatorial(numero) {

  let acumulador = 1

  for (let multiplicador = numero; multiplicador >= 1; multiplicador--) {

    acumulador = acumulador * multiplicador

  }

  return acumulador
}

const decrescente = fatorial(5)