// CRIANDO SECTIONS A PARTIR DESTE PONTO
function seccoes(params) {
  let seccaoArtigos = document.getElementById('articles-vls');

  for (let i = 0; i < params.length; i++) {
    let section = document.createElement('section');
    section.id = `Article${(i+1)}`;
    section.className = 'article-content card-vls cardBox-vls';
    section.innerHTML = `
      <h3>${params?.titulo}</h3>
      <p>${params?.conteudo}</p>
    `
    seccaoArtigos.appendChild(section); 
  }
}

let conteudosArtigo = [
  {titulo:'Primeiro Exemplo', conteudo: 'asdfasdfasdfasdfasdf'},
  {titulo:'Exemplo Qualquer', conteudo: 'asdfasdfasdfasdfasdf'},
  {titulo:'Qualquer Exemplo', conteudo: 'asdfasdfasdfasdfasdf'}
]

seccoes(conteudosArtigo);


// Tags de Artigo
function openContent(event, nomeArtigo) {
  var i, article_content, linkToArticle;
  article_content = document.getElementsByClassName("article-content");
  for (i = 0; i < article_content.length; i++) {
    article_content[i].style.display = "none";
  }
  linkToArticle = document.getElementsByClassName("linkToArticle");
  for (i = 0; i < linkToArticle.length; i++) {
    linkToArticle[i].className = linkToArticle[i].className.replace(
      " active",
      ""
    );
  }
  document.getElementById(nomeArtigo).style.display = "block";
  event.currentTarget.className += " active";
}

// buscando o elemento com ID aberto por padrão
document.getElementById("abertoPorPadrao").click();
