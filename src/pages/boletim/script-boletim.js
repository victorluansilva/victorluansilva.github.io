// Combase no script apresentado na correção do exercício nº 5 da questão anterior, aprimore as funcionalidades do Boletim, conforme especificações abaixo:
// Receba informações do usuário, tais como: nome, instituição de ensino e curso;
// Defina um array de matérias que possa ser listado e definido por meio de um dropdown ou  selectlist  e adicionado a máteria do array materias; (No mínimo 6 matérias)
// Defina validadores para que máterias já adicionadas não possam ser selecionadas novamente para adição;
// Defina validadores para não permitir a entrada de conforme o limite dos bimestres selecionados a seguir: 1º bimestre 20 pts; 2º bimestre 25 pts, 3º bimestre 25 pts e 4º bimestre 30 pts;
// Adapte o elemento de tag resultadoBoletim para  tag <div>
// Apresente os resultados em formato de tabela
// Obs.: o projeto deve aplicar estilização bootstrap sem perder ou alterar o padrão de estilo do web-site; Exemplo: o header e o footer de sua página deve está presente no projeto da mesma forma como na página inicial.

const optionsMaterias = [
  "Portugês",
  "Matemática",
  "História",
  "Geografia",
  "Física",
  "Química",
];

function dropdown(vetorDeString) {
  let dropdown = document.getElementById("dropMaterias");

  dropdown.innerHTML = "";

  for (var i = 0; i < vetorDeString.length; i++) {
    let selectOption = document.createElement("option");
    selectOption.value = vetorDeString[i];
    selectOption.text = vetorDeString[i];
    dropdown.appendChild(selectOption);
  }
}

export {dropdown}

dropdown(optionsMaterias);

const ensino_base = document.getElementById("ensino_base");

const tipoEnsinoBase = document.getElementById("tipoEnsinoBase");

const tipoTecnicoSuperior = document.getElementById("tipoTecnicoSuperior");

const ensino_tecnico = document.getElementById("ensino_tecnico");

const inputGroupCurso = document.getElementById("inputGroupCurso");

ensino_base.addEventListener("change", function () {
  if (ensino_base.checked) {
    tipoTecnicoSuperior.style.display = "none";
    inputGroupCurso.style.display = "none";
    ensino_tecnico.checked = false;
  } else {
    tipoTecnicoSuperior.style.display = "block";
  }
});

ensino_tecnico.addEventListener("change", function () {
  if (ensino_tecnico.checked) {
    inputGroupCurso.style.display = "block";
    tipoEnsinoBase.style.display = "none";
    ensino_base.checked = false;
  } else {
    tipoEnsinoBase.style.display = "block";
    inputGroupCurso.style.display = "none";
  }
});

let user = { nome: "", instituicao: "", curso: "" };

function seguir() {
    input_user.style.display = "none"
    output_user.style.display = "block"
    addUsuario();
}

function addUsuario() {

  if(nomeUsuario.value == '' || nomeInstituicao.value == ''){
    alert("Campos nome ou instituição vazios!")
  } else {
    user.nome = nomeUsuario.value;
    user.instituicao = nomeInstituicao.value;
    user.curso = nomeCurso.value;
  }

}

let materia = { id: 0, nome: "", notas: [], total: 0, printInfo: "" };
let materias = [];

function save() {
  let inputNotas = [];
  let totalNotas = 0;
  user.nome = nomeUsuario.value;
  user.instituicao = nomeInstituicao.value;
  let resultados = `<b>BOLETIM DE: ${user.nome.toLocaleUpperCase()}</b><br><b>INSTITUIÇÃO/ESCOLA: ${user.instituicao.toLocaleUpperCase()} </b>`;

  inputNotas.document
    .querySelectorAll("div.input-group > input")
    .forEach((e) => {
      inputNotas.push(parseFloat(e.value));
      totalNotas += parseFloat(e.value);
    });

  materias.push({
    id: materia.id++,
    nome: nomeMateria.value.toLocaleUpperCase(),
    notas: inputNotas,
    total: totalNotas,
    info: `<hr>
            RESULTADO DE: <b>${nomeMateria.value.toLocaleUpperCase()}</b> 
            <ul class="list-group">
                <li class="list-group-item"><b>1º Bimestre:</b> ${
                    inputNotas[0]
                }</li>
                <li class="list-group-item"><b>2º Bimestre:</b> ${
                    inputNotas[1]
                }</li>
                <li class="list-group-item"><b>3º Bimestre:</b> ${
                    inputNotas[2]
                }</li>
                <li class="list-group-item"><b>4º Bimestre:</b> ${
                    inputNotas[3]
                }</li>
                <li class="list-group-item">TOTAL FINAL: <b>${totalNotas}</b></li>
                <li class="list-group-item">STATUS: <b>${isAprovadoOuReprovado(
                    totalNotas
                )}</b></li>
            </ul>
            `,
  });

  console.log(materias);

  materias.forEach((e) => {
    resultados += `<br>` + e.info;
  });

  resultNotas.innerHTML = resultados;
}
function isAprovadoOuReprovado(valor) {
  if (valor >= 60) {
    return "APROVADO";
  } else {
    return "REPROVADO";
  }
}
