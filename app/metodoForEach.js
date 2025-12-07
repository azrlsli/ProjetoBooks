// Seleciona o elemento HTML onde os livros serão inseridos
const elementoParaInserirLivros = document.getElementById('livros');

// Seleciona o elemento onde será exibido o valor total dos livros disponíveis
const elementoComValorTotalDeLivrosDisponiveis = document.getElementById('valor_total_livros_disponiveis');

// Função responsável por exibir os livros na tela
function exibirOsLivrosNaTela(listaDeLivros) {
  // Limpa o valor total (caso tenha sido exibido antes)
  elementoComValorTotalDeLivrosDisponiveis.innerHTML = '';
  // Limpa a área onde os livros serão exibidos
  elementoParaInserirLivros.innerHTML = '';

    // Percorre a lista de livros recebida
    listaDeLivros.forEach(livro => {
      // let disponibilidade = verificarDisponibilidadeDoLivreo(livro);
      let disponibilidade = livro.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel';  // Verifica se o livro está disponível (quantidade > 0)

      // Insere na tela o HTML correspondente a cada livro
        elementoParaInserirLivros.innerHTML += `
            <div class="livro">
      <img class="${disponibilidade}" src="${livro.imagem}"
        alt="${livro.alt}" />
      <h2 class="livro__titulo">
        ${livro.titulo}
      </h2>
      <p class="livro__descricao">${livro.autor}</p>
      <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
      <div class="tags">
        <span class="tag">${livro.categoria}</span>
      </div>
    </div>
        `
    });
};

// function verificarDisponibilidadeDoLivreo(livro) {
//   if (livro.quantidade > 0) {
//     return 'livro__imagens';
//   } else {
//     return 'livro__imagens indisponivel'
//   }

// }
