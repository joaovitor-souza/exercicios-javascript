const estoque = [
  { id: 1, nome: 'Notebook', preco: 3500, quantidade: 10 },
  { id: 2, nome: 'Mouse', preco: 100, quantidade: 15 },
  { id: 3, nome: 'Teclado', preco: 200, quantidade: 20 },
  { id: 4, nome: 'Monitor', preco: 1200, quantidade: 5 }
];


// const produtoEncontrado = estoque.find(produto => produto.id === 2)
// produtoEncontrado.quantidade += 5

const registrarEntrada = (idProduto, qtdEntrada ) => {
  const produtoEncontrado = estoque.find(produto => produto.id === idProduto )

  if(!produtoEncontrado) {
    
    return 'Este id não existe, tente novamente digitando a quantidade certa'
  }

  produtoEncontrado.quantidade += qtdEntrada

  return produtoEncontrado
}

const registrarSaida = (idProduto, qtdSaida) => {
  const produtoEncontrado = estoque.find(produto => produto.id === idProduto )
  
  if(!produtoEncontrado) {
    return 'Este id não existe, tente novamente digitando a quantidade certa'
  }
  if(qtdSaida > produtoEncontrado.quantidade) {
    return 'A quantidade de saida não pode ser maior que a quantidade existente de produtos'
  }

  produtoEncontrado.quantidade -= qtdSaida
  return produtoEncontrado
}

console.log(registrarEntrada(99,5));

console.log(registrarSaida(5,25));


