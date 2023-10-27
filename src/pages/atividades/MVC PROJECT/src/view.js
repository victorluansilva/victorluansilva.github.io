const construtorGrafico = {
  render: (params) => {
    const elemento = document.getElementById("root");
    elemento.innerHTML = `
            <h2>${params.titulo}</h2>
            <img src="${params.imgSrc}" >
            <p>${params.conteudo}</p>
        `;
  },
};
export { construtorGrafico };
