const paragrafoResultado = document.querySelector("#resultado");
const inputCep = document.querySelector("#input-cep");
const botao = document.querySelector("#btn-buscar");

botao.addEventListener("click", () => {
  buscarCep(inputCep.value)
})


const buscarCep = async (cep) => {
  try {
    // fetch faz o pedido na internet 
    const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    
    // a resposta chega do servidor vem um formato de texto puro
    // para o js conseguir ler os dados de dentro
    // Para converter esse texto em objeto real usamos o json, dai sim conseguimos utilizar essa resposta
    const dados = await resposta.json();

    if(dados.erro) {
      paragrafoResultado.innerText = `CEP não encontrado!`;
      return; // Usamos um 'return' vazio para parar a função imediatamente e não tentar ler o logradouro abaixo
    }

    const { logradouro, bairro } = dados
    paragrafoResultado.innerText = `Endereço: ${logradouro} - ${bairro}`
  }

  catch (error) {
    paragrafoResultado.innerText = `Erro ao buscar CEP`
    console.log(error);
    

  }

};

// Para a função rodar, precisamos chamá-la no final do arquivo:





// const { logradouro } = dados

// console.log(logradouro);
