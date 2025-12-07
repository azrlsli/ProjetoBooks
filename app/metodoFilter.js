// Seleciona todos os botões que possuem a classe 'btn'
const botoes = document.querySelectorAll('.btn');

// Adiciona o evento de clique para cada botão, chamando a função de filtragem
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros));

// Função executada ao clicar em qualquer botão de filtro
function filtrarLivros() {
    // Pega o próprio botão que foi clicado usando seu id
    const elementoBtn = document.getElementById(this.id);
    // Obtém o valor do botão, que representa a categoria do filtro
    const categoria = elementoBtn.value;

    // Se o valor for 'disponivel', filtra por disponibilidade.
    // Caso contrário, filtra pela categoria selecionada.
    let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade() : FiltrarPorCategoria(categoria);

    // Exibe na tela os livros resultantes do filtro
    exibirOsLivrosNaTela(livrosFiltrados);

    // Se o filtro for de livros disponíveis, calcula e exibe o valor total
    if (categoria == 'disponivel') {
        const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados);

        exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal)
    }
}
// Filtra somente os livros que possuem quantidade acima de 0 (disponíveis)
function FiltrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria);
}
// Filtra os livros pela categoria recebida
function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0);
}
// Exibe o valor total dos livros disponíveis filtrados
function exibirValorTotalDosLivrosDisponiveisNaTela (valorTotal) {
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = `
         <div class="livros__disponiveis">
            <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
        </div>
    `
}
