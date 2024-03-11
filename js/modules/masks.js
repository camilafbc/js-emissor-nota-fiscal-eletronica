import Inputmask from "../../vendor/RobinHerbots-Inputmask-6a54ccd/dist/inputmask.es6.js";

function mascaraTelefone(elemento) {
  const elementoInput = elemento;

  const options = {
    mask: ["(99) 9999-9999", "(99) 99999-9999"],
    keepStatic: true,
    showMaskOnFocus: false,
    onincomplete: function () {
      onIncomplete(elemento);
    },
  };

  const inputMask = new Inputmask(options);
  inputMask.mask(elementoInput);

  elementoInput.addEventListener("focus", function () {
    limparErros(elemento);
  });
}

function mascaraCpfOuCNPJ(elemento) {
  const elementoInput = elemento;

  const options = {
    mask: ["999.999.999-99", "99.999.999/9999-99"],
    keepStatic: true,
    showMaskOnFocus: false,
    onincomplete: function () {
      onIncomplete(elemento);
    },
  };

  const inputMask = new Inputmask(options);
  inputMask.mask(elementoInput);

  elementoInput.addEventListener("focus", function () {
    limparErros(elemento);
  });
}

function mascaraNumerica(elemento){
  const elementoInput = elemento;

  const options = {
    mask: "9{*}"
  }

  const inputMask = new Inputmask(options);
  inputMask.mask(elementoInput);
}

function mascaraPeso(elemento){
  const elementoInput = elemento;

  const options = {
    mask: ["0,999", "9,999", "99,999", "999,999"],
    keepStatic: true,
    showMaskOnFocus: false,
  };

  const inputMask = new Inputmask(options);
  inputMask.mask(elementoInput);
}

// function mascaraMoeda(elemento) {
//   let valor = elemento.value;

//   valor = valor + '';
//   valor = parseInt(valor.replace(/[\D]+/g, ''));
//   valor = valor + '';
//   valor = valor.replace(/([0-9]{2})$/g, ",$1");

//   if (valor.length > 6) {
//       valor = valor.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
//   }

//   elemento.value = valor;
//   if(valor == 'NaN') elemento.value = '';
// }

function mascaraMoeda(elemento) {
  let valorAlterado = elemento.value.replace(/\D/g,"");

  valorAlterado = (valorAlterado/100).toFixed(2) + "";
  valorAlterado = valorAlterado.replace(".", ",");
  valorAlterado = valorAlterado.replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,");
  valorAlterado = valorAlterado.replace(/(\d)(\d{3}),/g, "$1.$2,");

  elemento.value = valorAlterado;
}

function onIncomplete(elemento) {
  const elementoInput = elemento;
  const spanError = elementoInput.parentElement.children[2];

  elementoInput.classList.add("is-invalid");
  spanError.style.display = "block";

  setTimeout(() => {
    spanError.style.display = "none";
  }, 3000);
}

function limparErros(elemento) {
  const elementoInput = elemento;
  if (elementoInput.classList.contains("is-invalid")) {
    elementoInput.classList.remove("is-invalid");
  }
}

export { mascaraTelefone, mascaraCpfOuCNPJ, mascaraNumerica, mascaraMoeda, mascaraPeso };