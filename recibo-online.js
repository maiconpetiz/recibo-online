

function gerarRecibo() {
    document.getElementById('nome_paciente').innerHTML = document.getElementById('nome').value;
    var total = document.getElementById('valor').value * document.getElementById('qtde').value;
    document.getElementById('valor_total').innerHTML = parseFloat(total).toLocaleString('pt-br',{minimumFractionDigits: 2});
    document.getElementById('qtd').innerHTML = document.getElementById('qtde').value;
    window.print()
}
