function ajustarFonte(delta) {
  const elementos = document.querySelectorAll('.texto-ajustavel');
  elementos.forEach(el => {
    const estilo = window.getComputedStyle(el);
    const tamanhoAtual = parseFloat(estilo.fontSize);
    const novoTamanho = tamanhoAtual + delta;
    if (novoTamanho >= 10 && novoTamanho <= 40) {
      el.style.fontSize = novoTamanho + 'px';
    }
  });
}
