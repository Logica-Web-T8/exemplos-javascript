// comentário de uma linha 

/* 
  comentário para mais de 1 linha
*/

// ---------------------------------------------------------------------
/*
    declarando variáveis com var, let e const
*/
var nome_completo = "joão da silva"; //variavel pode ser alterada
let idade = 20; //variavel pode ser alterada
const cpf = "123456789"; //variavel NÃO pode ser alterada

// console.log serve para "printar/mostrar" o valor no console do navegador
console.log(nome_completo, idade, cpf)

// alterar o valor das variáveis
nome_completo = "Maria";
idade = 25;

console.log(nome_completo, idade, cpf);

//-------------------------------------------------------------------------------

// Formas de declarar variáveis do tipo string
var nome = "josé";
var nome2 = 'maria';
var nome3 = `joão`;

// Formas de declarar váriaveis do tipo number
let numero = 20; //inteiro
let numeroDecimal = 15.5; //decimal

// Declaração de variável tipo boolean (true / false)
let bolean = false;

// Declaração de arrays (listas)
let frutas = ["maçã", "uva", "Melancia"];
let numerosDaMegaSena = [12,15,30,20];
let lista = ["teste", 12, true, 15.5];

// Declaração de um objeto 
let casa = {
  "endereco": "Rio de Janeiro - Brasil",
  'quantidade_banheiros': 2,
  cor: "branca",
  aluado: false
};

let experienciaProfissional = {
  cargo: "Desenvolvedor FullStack",
  nome_empresa: "Serasa",
  data_inicio: "12/2022",
  data_fim: null,
  descricao: "Lorem ipsum dolor sit amet consectetur, adipisicing",
  atividades: ["atividade 1", "atividade 2"]
};

//Declaração de um array de objetos
let experiencias = [
  {
    cargo: "Desenvolvedor FullStack",
    nome_empresa: "Serasa",
    data_inicio: "12/2022",
    data_fim: null,
    descricao: "Lorem ipsum dolor sit amet consectetur, adipisicing",
    atividades: ["atividade 1", "atividade 2"],
  },
  {
    cargo: "Desenvolvedor Frontend",
    nome_empresa: "Wise hands",
    data_inicio: "05/2020",
    data_fim: "11/2022",
    descricao: "Lorem ipsum dolor sit amet consectetur, adipisicing",
    atividades: ["atividade 1", "atividade 2"]
  }
];

//typeof função do javascript para saber o tipo da variável;
console.log(typeof experiencias)



//principal diferença entre var e let

if(true){ //validacao somente para teste
  let variaveLet = "variavel let"; //variavel declarada com let, somente pode ser usada dentro do if (bloco)
  var variavelVar = "variavel var"; //variavel declarada com var, pode ser usado fora do if (bloco) 
  
  console.log(variaveLet) //printa o valor
  console.log(variavelVar) //printa o valor
}

console.log(variavelVar) //printa o valor
//console.log(variaveLet) //o código da erro