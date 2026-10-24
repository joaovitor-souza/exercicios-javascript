const produtos = [
  {id: 1, nome: "Teclado Mecânico", preco: 300},
  {id: 2, nome: "Mouse Game", preco: 150},
  {id: 3, nome: "Monitor", preco: 900}  

];  
// Todos produtos devem aparecer na tela dentro da ul
// Usar um metodo array dentro desse evento passando por cada produto da lista 
//  Fazer um inner dinamico mostando NOME e PRECO de cada um 


const botao = document.querySelector("#botao-comprar")
const carrinho = document.querySelector("#carrinho")


botao.addEventListener("click", () => {
  produtos.map(produto => {
    const {nome, preco} = produto
    carrinho.innerHTML += `<li> ${nome} preco: ${preco},00 </li>`


  })

})








// const botao = document.querySelector("#meu-botao");
// console.log(botao);


// botao.addEventListener("click", () => {
//   // Usar innerText ou textContent para textos (Seguranca)
//   botao.innerText = 'Você clicou!'
// })