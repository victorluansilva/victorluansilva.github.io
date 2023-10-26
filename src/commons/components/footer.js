//Arrow function
const footer = (params) => {
    footerElement.innerHTML = `
    <!-- INICIO FOOTER -->
    <footer class="container-vls content-vls center-vls">
    <p class="center-vls opacity-vls wide-vls">${params}</p>
    </footer>
    <!-- FIM FOOTER -->  
    `;
  }
 
export {footer};
  