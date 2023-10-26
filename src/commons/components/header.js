function header() {
  headerElement.innerHTML = `
    <!-- INICIO HEADER -->
  <header class="card-vls">
      <nav id="nav_links" class="nav-items-vls">
          <a class="button-vls to-left-vls padding-large" href="#inicio"><strong>VLS</strong></a>          
      </nav>
  </header>
  <!-- FIM HEADER -->
  `;
}

function headerBuild(params) {
  header();

  let nav = document.getElementById('nav_links');

  for (var i = 0; i < params.length; i++) {
    let newLink = document.createElement("a");
    newLink.className = 'button-vls to-right-vls padding-large'
    newLink.href = params[i].endereco;
    newLink.textContent = params[i].titulo;
    newLink.target = '_blank'
    nav.appendChild(newLink);
  }
}

export { header, headerBuild };
