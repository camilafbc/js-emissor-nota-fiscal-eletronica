
function aplicarMascaras(mascara, ...elementos){
  elementos.forEach(elemento => {
    elemento.addEventListener('input', (ev) => {
      mascara(ev.target)
    })
  });
}

export {aplicarMascaras}