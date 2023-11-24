const inpRestaurante = document.querySelector("#restaurante");
const inpValorKg = document.querySelector("#inPreco");
const inpQuantidadeGramas = document.querySelector("#gramacliente");
const saidaResultado = document.querySelector("#resultado");

function calcularRefeicao() {
    const nomeRestaurante = inpRestaurante.value;
    const valorKg = parseFloat(inpValorKg.value);
    const quantidadeGramas = parseFloat(inpQuantidadeGramas.value);

    const precoRefeicao = valorKg * (quantidadeGramas / 1000);

  saidaResultado.innerHTML = "Restaurante: " + nomeRestaurante + "<br> Total a Pagar: R$ " + precoRefeicao.toFixed(2)//toFixed(2)casas decimais e <br> quebra de linha;
}
