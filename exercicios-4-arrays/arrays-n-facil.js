/* EXERCICIO 1*/

// const frutas = ["banana", "laranja", "maça", "abacate", "limao"]

// console.log(frutas[0]);
// console.log(frutas[frutas.length - 1]);

// EXERCICIO 2

// const numeros = [1, 2, 3, 4, 5]

// console.log(numeros[0]);
// console.log(numeros[2]);
// console.log(numeros[4]);

// EXERCICIO 3 e 4

// const transportes = ["onibus", "carro", "moto"]

// transportes[1] = "caminhao"

// transportes.length

// console.log(transportes);

// EXERCICIO 5 

// const numeros = [5, 10, 15, 20, 25]

// for(let i = 0; i < numeros.length; i++) {
// console.log(numeros[i]);

// }

// EXERCICIO 6

// const numeros = [5, 10, 15, 20, 25]

// let soma = 0

// for(let i = 0; i < numeros.length; i++) {
//   soma += numeros[i]

// }
// console.log(soma)

//EXERCICIO 7 

// const numeros = [8, 15, 3, 40, 21];

// let maior = 0

// for (let i = 0; i < numeros.length; i++) {

//   if(numeros[i] > maior){
//     maior = numeros[i]
//   }

// };
// console.log(maior);

// EXERCICIO 8


// const numeros = [8, 15, 3, 40, 21];

// let menor = numeros[0]

// for (let i = 0; i < numeros.length; i++) {

//   if(numeros[i] < menor){
//     menor = numeros[i]
//   }

// };
// console.log(menor);

// EXERCICIO 9 

// const numeros = [2,5,6,8,9,10]
// let contagem = 0 

// for(let i = 0; i < numeros.length; i++) {

//   if(numeros[i] % 2 === 0) {
//     contagem ++
//   }

// }

// console.log(contagem)

//EXERCICIO 10

// const numeros = [2,5,6,8,9,10]
// let soma = 0 

// for(let i = 0; i < numeros.length; i++) {

//   if(numeros[i] % 2 === 0) {
//     soma += numeros[i]
//   }

// }

// console.log(soma)


//EXERCICIO 11

// const numeros = [15,5,6,8,9,10,19,15,29]
// let contagem = 0 

// for(let i = 0; i < numeros.length; i++) {

//   if(numeros[i] > numeros[5]) {
//     contagem ++
//   }

// }

// console.log(contagem)

// EXERCICIO 14  

const nomes = [ "João", "Maria", "Pedro", "Ana" ]
let encontrado = false 

for(let i = 0; i < nomes.length; i++) {

  if (nomes[i] === "Pedro") {
    encontrado = true 
  } 

}

if(encontrado) {
  console.log("Encontrado");
} else {
  console.log("Não encontrado ");
  
}


// DESAFIO 1 


// const numeros = [8,7,10,9]

// let soma = 0
// let contagem = 0

// for (let i = 0; i < numeros.length; i++) {

//   soma += numeros[i]
//   contagem ++

// }

// const resultado =  soma / contagem 

// console.log(resultado);


// DESAFIO 2

// SOLUÇÃO TALVEZ SEJA USAR DOIS FOR

// const numeros = [1, 2, 3, 4, 5];

// let guardaNumeros = 0

// for (let i = 4; i >= 0; i--) {

//   console.log(numeros[i]);


// };

// DESAFIO 3 

// const numero = [1,3,5,3,7,3,8]
// let contagem = 0

// for(let i = 0; i < numero.length; i++){
//   if(numero[i] === 3) {
//     contagem ++
//   }
// }

// console.log(contagem);



