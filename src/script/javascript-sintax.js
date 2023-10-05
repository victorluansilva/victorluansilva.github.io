// SINTAXE BÁSICA JAVASCRIPT

//Declaração de variáveis
let nome = "Victor";
const altura = 1.90;
    //outdate 'forma antiga'
    var pessoa = "nome"
// Definindo tipo de dado na variável
let idade = 29; // numérico
let texto = "Seu texto aqui" // caractere (string)
let logico = true | false; // boolean
let vetor = [1, 2, 3, 4, 5]
let objeto = {nome: "Victor", idade: 29};

//Estrutura Condicionais
if(objeto.idade < 18){
    console.log(objeto.nome + " é menor de idade.");
} else if (objeto.idade >= 18 && objeto.idade <= 21) {
    console.log(objeto.nome + " é um jovem maior de idade.");
} else if (objeto.idade >  21 && objeto.idade < 60) {
    console.log(objeto.nome + " é um adulto.");
} else if (objeto.idade >= 60) {
    console.log(objeto.nome + " é idoso.");
}


//Estrutura de Repetição
// Para
for(let i = 0; i < vetor.length; i++){
    console.log(vetor[i])
}

// Enquanto
let contador = 0;
while(contador < 10){
    console.log(contador++);
}

// Procedimento e Funções

// Função (tem retorno)
function soma(x, y){
    return x + y;
}

let resultado = soma(3,5);
console.log(resultado);

// Procedimento

function digaOla(nome){
    console.log("Olá " + nome)
}
digaOla("Fulano");

//MANIPULANDO STRINGS

let nomeCompleto = "Victor Silva"

//Tamanho da string
console.log(nomeCompleto.length)

// Função Substring para obter uma parte dos caracteres contidos na String
let primeiroNome = nomeCompleto.substring(0,6)

//Concatenação de strings

let frase = "O primeiro nome de " + nomeCompleto + " é: "+ primeiroNome;
console.log(frase)