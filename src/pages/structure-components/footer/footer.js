const footerTemplate = document.createElement("template");

footerTemplate.innerHTML = `
<!-- INICIO FOOTER -->
<footer class="container-vls content-vls center-vls">
<p class="center-vls opacity-vls wide-vls">By Victor Silva</p>
</footer>
<!-- FIM FOOTER -->
`;

document.body.appendChild(footerTemplate.content);