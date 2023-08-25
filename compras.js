function calcularP1(){
    //função para calcular o preço total primeiro produto do carrinho
    var quantidadeP1 = document.getElementById("Q1").value;
    var resultado = 25 * quantidadeP1;

    //a linha abaixo envia o resultado da variável para o carrinho.html
    document.getElementById("totalProduto1").innerHTML = resultado;
}

function calcularP2(){
    //função para calcular o preço total do segundo produto do carrinho
    var quantidadeP2 = document.getElementById("Q2").value;
    var resultado2 = 400 * quantidadeP2;

    //a linha abaixo envia o resultado da variável para o carrinho.html
    document.getElementById("totalProduto2").innerHTML = resultado2;
    //Obs.: O innerHTML serve para enviar o valor calculado para uma div no arquivo HTML



}