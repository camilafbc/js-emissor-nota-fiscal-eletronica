function obterValorDesconto(precoOriginal, percentualDesconto){
  const valorDesconto = precoOriginal * (percentualDesconto / 100);
  return valorDesconto
}

function getCheckedRadio(elemento) {
  let elValue;

  elemento.forEach((el) => {
    if (el.checked) {
      elValue = el.value;
    }
  });

  return elValue;
}


function formatarSaidaMonetaria(valor){
  //const valorFormatado = valor.replace('.','').replace(',','.');
  const valorFormatado = valor.replace(/\./g,'').replace(',','.');
  return valorFormatado;
}


function currencyFormat(valor){
  const valorFormatado = valor.toLocaleString('pt-br', {minimumFractionDigits: 2});
  return valorFormatado;
}

function formatarNumeroNota(numero){
  while(numero.toString().length < 9){
    numero = "0" + numero
  }
  //const numFormatado = numero.substring(0, 3) + "." + numero.substring(3, 6) + "." + numero.substring(6, 9)
  return numero;
}

export { obterValorDesconto, getCheckedRadio, formatarSaidaMonetaria, currencyFormat, formatarNumeroNota }