function trocarTema(tema) {
  document.body.className = '';

  if (tema) {
    document.body.classList.add(tema);
  }
}
