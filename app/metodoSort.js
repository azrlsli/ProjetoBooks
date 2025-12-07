// Seleciona o botão responsável por ordenar os livros pelo preço
let btnOdenarPorPreco = document.getElementById('btnOrdenarPorPreco');

// Adiciona um evento de clique ao botão, chamando a função de ordenação
btnOdenarPorPreco.addEventListener('click', ordenarLivrosPorPreco);

// Função que ordena os livros pelo preço (do maior para o menor)
function ordenarLivrosPorPreco() {
    // Usa o método sort() para ordenar o array 'livros'
    // A comparação (b.preco - a.preco) faz com que a ordem seja decrescente
    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco);

    // Exibe os livros já ordenados na tela
    exibirOsLivrosNaTela(livrosOrdenados);
}
