const inputIdEnt = document.querySelector("#idEntrada")
const inputEntrada = document.querySelector("#registrarEntrada")
const inputSaida = document.querySelector("#registrarSaida")
const inputIdSaid = document.querySelector("#idSaida")
const btnEntrada = document.querySelector("#enviarEntrada")
const btnSaida = document.querySelector("#enviarSaida")
const mensagemDeEntrada = document.querySelector("#mensagemEntrada")
const mensagemDeSaida = document.querySelector("#mensagemSaida")
const vitrine = document.querySelector("#vitrine")



const estoque = [
  { id: 1, nome: 'Notebook', preco: 3500, quantidade: 10 },
  { id: 2, nome: 'Mouse', preco: 100, quantidade: 15 },
  { id: 3, nome: 'Teclado', preco: 200, quantidade: 20 },
  { id: 4, nome: 'Monitor', preco: 1200, quantidade: 5 }
];



const registrarEntrada = (idProduto, qtdEntrada) => {
  const produtoEncontrado = estoque.find(produto => produto.id === idProduto)

  if (!produtoEncontrado) {
    return 'Este id não existe, tente novamente digitando a quantidade certa'
  }

  produtoEncontrado.quantidade += qtdEntrada
  return `Voce inseriu o codigo id ${idProduto} e ${qtdEntrada} unidades`
}

const registrarSaida = (idProduto, qtdSaida) => {
  const produtoEncontrado = estoque.find(produto => produto.id === idProduto)

  if (!produtoEncontrado) {
    return 'Este id não existe, tente novamente digitando a quantidade certa'
  }
  if (qtdSaida > produtoEncontrado.quantidade) {
    return 'A quantidade pedida não pode ser maior que a quantidade existente no estoque'
  }

  produtoEncontrado.quantidade -= qtdSaida
  return `Voce inseriu o codigo id ${idProduto} e ${qtdSaida} saidas`
}


btnEntrada.addEventListener("click", () => {
  const resultadoEntrada = registrarEntrada(parseInt(inputIdEnt.value), parseInt(inputEntrada.value))
 
  mensagemDeEntrada.innerText = resultadoEntrada
   if (resultadoEntrada.includes("não")) {
    mensagemDeEntrada.style.color = "red"
  } else {
    mensagemDeEntrada.style.color = "green"

  }

  inputEntrada.value = ""
  inputIdEnt.value = ""
  atualizarVitrine();

})

btnSaida.addEventListener("click", () => {
  resultadoSaida = registrarSaida(parseInt(inputIdSaid.value), parseInt(inputSaida.value))
  mensagemDeSaida.innerText = resultadoSaida

  if(resultadoSaida.includes("não")) {
    mensagemDeSaida.style.color = "red"
  } else {
    mensagemDeSaida.style.color = "green"
  }

  inputIdSaid.value = ""
  inputSaida.value = ""
  atualizarVitrine();

})


const atualizarVitrine = () => {
  const itensHtml = estoque.map(produto => {
    return `<li>${produto.nome}: ${produto.quantidade} unidades</li>`;
  }).join('');

  vitrine.innerHTML = itensHtml
}
atualizarVitrine();



