// 1) Verifique a idade: peça ao usuário para inserir a sua idade e verifique se ele é menor de idade, adulto ou idoso.
function verificarIdade() {
    let idade = parseInt(document.getElementById('inputIdade').value);
    let resultado = document.getElementById('resultIdade');

    if (idade < 18) {
        resultado.innerText = "Menor de idade!";
    } else if (idade >= 18 && idade <= 29) {
        resultado.innerText = "É maior de idade e é um jovem adulto!";
    } else if (idade >= 30 && idade <= 59) {
        resultado.innerText = "É um adulto!";
    } else if (idade >= 60) {
        resultado.innerText = "É uma pessoa idosa!";
    }
    // Maior e menor quê '>' ou '<'
    // Maior ou igual | menor ou igual '>=' ou '<='
    // Igual a tal '=='
    // Diferente de '!='
    // Operador lógico ou ' || '
    // Operador lógico e  '&&'

}
// 2) Compare números: peça ao usuário para inserir dois números e diga qual deles é maior, ou se são iguais.
function comparaValores() {
    let valorA = parseInt(document.getElementById('valorA').value);
    let valorB = parseInt(document.getElementById('valorB').value);
    let resultado = document.getElementById('resultCompValores');

    if (valorA > valorB) {
        resultado.innerText = valorA + " é maior que " + valorB;
    } else if (valorA < valorB) {
        resultado.innerText = valorB + " é maior que " + valorA;
    } else if (valorA == valorB) {
        resultado.innerText = valorA + " e " + valorB + " são iguais.";
    }
}
// 3) Verifique se há divisibilidade: peça ao usuário para inserir dois números e verifique se o primeiro número é divisível pelo segundo.  
function ehDivisivel() {
    let primeiroValor = parseInt(document.getElementById('primeiroValor').value);
    let segundoValor = parseInt(document.getElementById('segundoValor').value);
    let resultEhDivisivel = document.getElementById('resultEhDivisivel');

    if (primeiroValor % segundoValor == 0) {
        resultEhDivisivel.innerText = primeiroValor + " é divisível por " + segundoValor;
    } else {
        resultEhDivisivel.innerText = primeiroValor + " não é divisível por " + segundoValor;
    }
}
// 4) Verificação de temperatura: peça o usuário para inserir uma temperatura e verifique se está frio, agradável ou quente.
function temperatura() {
    let temperatura = parseInt(document.getElementById('temperatura').value);
    let resultTemperatura = document.getElementById('resultTemperatura');

    if (temperatura >= 30) {
        resultTemperatura.innerText = " Tá quente demais sô";
    } else if (temperatura >= 15 && temperatura <= 26) {
        resultTemperatura.innerText = " Essa temperatura está agradável";
    } else if (temperatura >= 10) {
        resultTemperatura.innerText = "Tá frio hoje, melho ir nadar não"
    }
}
// 5) Verificação de notas: peça ao usuário para inserir todas as notas no ano em cada matéria e, por fim, mostre se ele foi aprovado ou reprovado.
    // Pelo menos 3 matérias
    // Pelo menos 3 etapa
// Exibir se aprovado ou reprovado com o resultado da média final em cada matéria 
let materia = { id: 0, nome: "", notas: [], total: 0, printInfo: "" };
let materias = [];
let user = {nome: "",instituicao:"", curso:""};
function save() {
    let inputNotas = [];
    let totalNotas = 0;
    user.nome = nomeUsuario.value;
    user.instituicao = nomeInstituicao.value;
    let resultados = `<b>BOLETIM DE: ${user.nome.toLocaleUpperCase()}</b><br><b>INSTITUIÇÃO/ESCOLA: ${user.instituicao.toLocaleUpperCase()} </b>`;

    document.querySelectorAll("div.input-group input").forEach(e => {
        inputNotas.push(parseFloat(e.value))
        totalNotas += parseFloat(e.value);
    })

    materias.push(
        {
            id: materia.id++,
            nome: nomeMateria.value.toLocaleUpperCase(),
            notas: inputNotas,
            total: totalNotas,
            info: `<hr>
                    RESULTADO DE: <b>${nomeMateria.value.toLocaleUpperCase()}</b> 
                    <ul class="list-group">
                        <li class="list-group-item"><b>1º Bimestre:</b> ${inputNotas[0]}</li>
                        <li class="list-group-item"><b>2º Bimestre:</b> ${inputNotas[1]}</li>
                        <li class="list-group-item"><b>3º Bimestre:</b> ${inputNotas[2]}</li>
                        <li class="list-group-item"><b>4º Bimestre:</b> ${inputNotas[3]}</li>
                        <li class="list-group-item">TOTAL FINAL: <b>${totalNotas}</b></li>
                        <li class="list-group-item">STATUS: <b>${isAprovadoOuReprovado(totalNotas)}</b></li>
                    </ul>
                    `
        }
    )

    console.log(materias)

    materias.forEach(e => {
        resultados += `<br>` + e.info;
    })

    resultNotas.innerHTML = resultados;
}
function isAprovadoOuReprovado(valor) {
    if (valor >= 60) {
        return "APROVADO"
    } else {
        return "REPROVADO"
    }
}
// 6) Cálculo do fatorial de um número: peça ao usuário para inserir um número e calcule o fatorial desse número e mostre o processo do fatorial realizado;
function callFatorial() {
    resultFatorial.innerText = fatorialByStep(parseInt(numberForFat.value));
}
function fatorial(value) {
    if (value <= 0)
        return 1;
    else if (value > 0 && value <= 2)
        return value;
    else
        return value * fatorial(value - 1);
}
function fatorialByStep(value) {
    let fat = value;
    let c = 1;
    let step = `O fatorial de ${value}! é: ${fatorial(value)} \n`;
    while (c < value) {
        step += `${value}! = ${fat} x ${(value - c)}`
        fat = fat * (value - c);
        step += ` = ${fat} \n`
        c++;
    }
    return step;
}
// 7) Contagem regressiva: peça o usuário para digita um número e,  com base nele, realize uma contagem regressiva de n até 1.
function callRegredir() {
    let valor = numRegressivo.value;
    let result ="";
    for (let i = 0; i <= valor; i++) {
         result += (valor - i) + "\n"               ;
    }
    resultRegressao.innerText = result;
}
// 8) Tabuada de um número: peça ao usuário para inserir um número e imprima a tabuada desse número.
function tabuada() {
    let concatValues = `TABUÁDA DO ${numberTab.value} \n`;
    for (let i = 0; i <= 10; i++) {
        concatValues += `${numberTab.value} x ${i} = ${numberTab.value*i} \n`
    }
    resultTabuada.innerText = concatValues;
}