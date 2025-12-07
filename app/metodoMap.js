// Função que aplica um desconto de 30% ao preço de cada livro
function aplicarDesconto(livros) {
    const desconto = 0.3;    // Define o valor do desconto (30%)

    // Cria um novo array usando 'map', copiando cada livro e aplicando o desconto no preço
    livrosComDesconto = livros.map(livro => {    // copia todas as propriedades do livro original
        return {...livro, preco: livro.preco - (livro.preco * desconto)}    // aplica o desconto ao preço
    });
     // Retorna o novo array com os livros já com desconto aplicado
    return livrosComDesconto;
}
