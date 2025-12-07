// Cria um array vazio chamado 'livros' que será preenchido com os dados da API
let livros = [];

// Define a URL do endpoint da API que será usada para buscar os livros
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

// Chama a função para buscar os livros da API
getBuscarLivrosDaAPI();

// Função assíncrona para buscar os livros da API
async function getBuscarLivrosDaAPI() {
    // Faz uma requisição à API usando o método 'fetch' e aguarda a resposta
    const res = await fetch(endpointDaAPI);
    
    // Converte a resposta da API (em JSON) e armazena no array 'livros'
    livros = await res.json();

    // Aplica desconto aos livros recebidos
    let livrosComDesconto = aplicarDesconto(livros);

    // Exibe os livros com desconto na tela
    exibirOsLivrosNaTela(livrosComDesconto);

}
