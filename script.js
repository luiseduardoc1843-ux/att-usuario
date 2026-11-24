let listaProdutos = document.querySelector(".listaProdutos")
function criarCard(title,category,image,price) {}
let cardProduto = document.createElement("div");
let produtoImagem = document.createElement("img");
let produtoNome = document.createElement("div")
let produtoInformacoes = document.createElement("div")
let produtoPreco = document.createElement("span")
let produtoCategoria = document.createElement("span")
let produtoCompra = document.createElement("button")

cardProduto.classList.add("cardProduto");
produtoImagem.classList.add("produtoImagem");
produtoInformacoes.classList.add("produtoInformacoes");
produtoNome.classList.add("produtoNome");
produtoPreco.classList.add("produtoPreco");
produtoCategoria.classList.add("produtoCategoria");
produtoCompra.classList.add("cardProduto");

async function buscarProdutos() {
    let url = " https://fakestoreapi.com/products";
    let resposta = await fetch (url);
    let data = await resposta.json()

    return data;
}

buscarProdutos();



