const arrayA = [1,2];

const [a,b, c = "3"] = arrayA;
const novoArray = [...arrayA, 3, 4, 5];
const [d, ...resto] = arrayA;

//----------------------------
const numeros = [1,2,3,5,6,10,13];

numeros.push(5);
numeros.unshift(3);
numeros.pop();
numeros.shift();
numeros.splice(4, 1);

const numerosCalculados = numeros.map((valor) => {
  return valor * 2
});

const numerosPares = numeros.filter(valor => valor % 2 === 0);

numeros.forEach(valor => {
  console.log(valor)
})