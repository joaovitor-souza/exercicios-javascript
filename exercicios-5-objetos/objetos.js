// EXERCICIO 1

// const produto = {
//   nome: "Martelo",
//   preco: "50,00",
//   estoque: 10
// }

// console.log(produto);

// EXERCICIO 2

const aluno = {
  nome: "Carlos",
  idade: 22,
  curso: "ADS"
}

console.log(aluno.nome, aluno.curso);

//  EXERCICIO 3

const pessoa = {
  nome: "Maria",
  idade: 25
}

pessoa.idade = 26

// console.log(pessoa);

// EXERCICIO 4
const carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2020
}

carro.ano = 2022
carro.cor = "Prata"
delete carro.modelo

console.log(carro);

// EXERCICIO 5 E 6

// const produto = {
//   nome: "Notebook",
//   preco: "3500",
//   estoque: 10
// }

// for (let propriedades in produto) {
//   // console.log(propriedades);
//   console.log(produto[propriedades]);

// }

// l

// EXERCICIO 7

// const produtos = [
//   {
//     nome: "Notebook",
//     preco: 3500
//   },
//   {
//     nome: "Mouse",
//     preco: 100
//   },
//   {
//     nome: "Teclado",
//     preco: 200
//   }
// ]

// console.log(produtos[0].nome);
// console.log(produtos[1].preco);
// console.log(produtos[2].nome);

// EXERCICIO 8 e 9

const produtos = [
  {
    nome: 'Notebook',
    preco: 3500
  },
  {
    nome: 'Mouse',
    preco: 100
  },
  {
    nome: 'Teclado',
    preco: 200
  },
  {
    nome: 'Monitor',
    preco: 1200
  }
]

// let maiorPreco = 0
// let produtoMaisCaro = ''

// for(let i = 0; i < produtos.length; i++) {

//   if(produtos[i].preco > maiorPreco) {
//     maiorPreco = produtos[i].preco
//     produtoMaisCaro = produtos[i].nome
//   }

// }

// console.log(produtoMaisCaro);


// EXERCICIO 13

// let soma = 0 

// for (let i = 0; i < produtos.length; i++){
//   soma += produtos[i].preco
// }

// const valorTotal = soma / produtos.length

// console.log(valorTotal);

// EXERCICIO 14 


for (let i = 0; i < produtos.length; i++) {
  produtos[i].preco *= 0.9
  console.log(produtos[i]);
}


// EXERCICIO 17

for (let i = 0; i < produtos.length; i++) {

  if (produtos[i].nome === "Teclado") {
    produtos.splice(i, 1)
  }

  if(produtos[i].nome === "Notebook") {
    console.log('O notebook esta na posicão: ', i);
    
  }

}

console.table(produtos);
