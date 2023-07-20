function toggleMode() {
  const html = document.documentElement
  // toggle theme
  html.classList.toggle('light')

  //toggle image
  const img = document.querySelector("#profile img")
  if (html.classList.contains('light')) {
    img.setAttribute('src', './assets/avatar-light.png')
    img.setAttribute('alt', 'Foto de Gean Bertani, ele está usando uma camiseta preta e óculos, no fundo um monitor com códigos fontes de programação e porta de madeira.')
  } else {
    img.setAttribute('src', './assets/avatar.png')
    img.setAttribute('alt', 'Foto de Gean Bertani, ele está usando uma camisa preta e óculos, no fundo um monitor com códigos fontes de programação e porta de vidro.')
  }

}