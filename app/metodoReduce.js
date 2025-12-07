// Função que calcula o valor total dos livros disponíveis
function calcularValorTotalDeLivrosDisponiveis(livros) {
    // Usa reduce() para somar todos os preços dos livros do array
    // acc = acumulador (soma parcial)
    // livros = item atual do array
    // O valor inicial do acumulador é 0
    // No final, toFixed(2) formata o resultado com duas casas decimais
    return livros.reduce((acc, livro) => acc + livro.preco, 0).toFixed(2);
}
