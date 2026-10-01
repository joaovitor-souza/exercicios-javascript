// O map transforma (devolve um array do mesmo tamanho).

// O filter seleciona (devolve um array menor).

// O find busca (devolve um único item).

// O reduce pega o array inteiro e o reduz a um único valor absoluto. Esse valor pode ser a soma de todos os números, a união de vários textos, etc


// const produtos = [
//   { id: 1, nome: "Smartphone", preco: 2500 },
//   { id: 2, nome: "Notebook", preco: 4200 },
//   { id: 3, nome: "Fone Bluetooth", preco: 150 },
//   { id: 4, nome: "Monitor", preco: 900 }
// ];

// const produtosFormatados = produtos.map(function (produto) {
//   return `O produto ${produto.nome} custa ${produto.preco}`
// })

// console.log(produtosFormatados);

// Exercicio 2 

// const carrinho = [
//   { produto: "Camiseta", preco: 50 },
//   { produto: "Calça Jeans", preco: 120 },
//   { produto: "Tênis", preco: 200 }
// ];

// const precosComDesconto = carrinho.map(function (produto) {
//   return produto.preco * 0.9
// })

// console.log(precosComDesconto);

// Exercicio filter

const tarefas = [
  { id: 1, texto: "Estudar React", concluida: false },
  { id: 2, texto: "Fazer compras", concluida: true },
  { id: 3, texto: "Pagar boletos", concluida: false }
];

const tarefasPendentes = tarefas.filter(function (tarefa) {
  return !tarefa.concluida
})

// console.table(tarefasPendentes);

// Exercicio find

const usuarios = [
  { id: 1, nome: "Alice", email: "alice@email.com" },
  { id: 2, nome: "Bruno", email: "bruno@email.com" },
  { id: 3, nome: "Carla", email: "carla@email.com" }
];

const usuarioEncontrado = usuarios.find(usuario =>
  // Em arrow function, podemos tirar as chaves e o return, 
  // para deixar ainda mais abreviado isso se cham Retorno Implicito

  usuario.email === "bruno@email.com"
)

// console.log(usuarioEncontrado);

// Exercicio Reduce 

const numeros = [10, 20, 30];

const soma = numeros.reduce(function (acumulador, numero) {
  return acumulador + numero;
}, numeros[0]); // <-- Aqui dizemos que o acumulador começa valendo 0

console.log(soma); // 60


const carrinho = [
  { produto: "Livro", preco: 40 },
  { produto: "Caneta", preco: 5 },
  { produto: "Caderno", preco: 20 }
];

const valorTotal = carrinho.reduce(function (acumulador, item) {
  return acumulador + item.preco
}, 0);

console.log(valorTotal);


const somar = (a, b) => a + b;

console.log(somar(5, 4));

const idades = [15, 22, 17, 30];

const maioresDeIdade = idades.filter(idade =>
  idade >= 18
);

// EXERCICIO DESESTRUTURACO

// const produto = {
//   id: 101,
//   titulo: "Teclado Mecânico",
//   preco: 300,
//   categoria: "Periféricos",
//   emEstoque: true
// };

// const { titulo, preco } = produto

// console.log(titulo, preco)

// SPREAD OPERATOR (OPERADOR DE ESPALHAMENTO)

const perfilAntigo = {
  username: "dev_junior",
  idade: 22,
  nivel: "iniciante"
};

const perfilAtualizado = {
  ...perfilAntigo,
  nivel: "intermediario",
  website: "[github.com/dev](https://github.com/dev)"
}

console.log(perfilAtualizado);


// DESAFIO FINAL 

const produtos = [
  { id: 1, nome: "Monitor", preco: 1000, categoria: "Eletrônicos" },
  { id: 2, nome: "Cadeira Gamer", preco: 800, categoria: "Móveis" },
  { id: 3, nome: "Teclado", preco: 200, categoria: "Eletrônicos" }
];

const produtosBlackfryday = produtos.map((produto) => {
  
  const { preco } = produto
  
  return {
    ...produto,
    preco: preco * 0.8,
    selo: "Black Friday"
  }
  
}
)

console.table(produtosBlackfryday);









