function getDataProdutos() {
  const tabelaProdutos = document.getElementById("table");

  const linhas = [];

  for (let i = 1; i < tabelaProdutos.rows.length; i++) {
    
    let linha = {};

    let celulas = tabelaProdutos.rows[i].cells;

    linha.codigo = celulas[1].innerText;
    linha.descricao = celulas[2].innerText;
    linha.quantidade = celulas[3].innerText;
    linha.vlUnit = celulas[4].innerText;
    linha.desconto = celulas[5].innerText;
    linha.vlTotal = celulas[6].innerText;

    linhas.push(linha);
  }

  return linhas;
}

export {getDataProdutos}