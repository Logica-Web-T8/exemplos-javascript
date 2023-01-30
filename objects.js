const objetoA = {
  a: 1,
  b: 2,
};
const objetoB = {
  c: 3,
};

const exemplo1 = Object.assign(objetoA, objetoB);
const exemplo2 = Object.keys(objetoA);
const exemplo3 = Object.values(objetoA);
const exemplo4 = JSON.stringify(objetoA);
const exemplo5 = JSON.parse(exemplo4);

// DESESTRUTUTRAÇÃO
const { a, b: f, c = "3" } = objetoA;

const novoObjeto = {
  ...objetoA,
  d: 4,
  e: 5,
};
