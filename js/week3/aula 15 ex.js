//
const colaboradores = [
  { name: "Juca", idade: 23, cargo: "front-end" },
  { name: "Márcia", idade: 21, cargo: "back-end" },
  { name: "Vitória", idade: 26, cargo: "designer" },
  { name: "Fernando", idade: 17, cargo: "estagiario" },
  { name: "Fabiane", idade: 23, cargo: "back-end" },
  { name: "Jéssica", idade: 21, cargo: "front-end" },
];
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// EXERCISES AND CODES:
// ex1. Create an a array showing only the names:
const ex1 = colaboradores.map(i => i.name);

// ex2. Create an array showing only the non-front-end workers:
const ex2 = colaboradores.reduce((acc, elem) => {
  if (elem.cargo !== "back-end") {
    acc.push(elem);
  }
  return acc;
}, []);

// ex3. Create an array showing the first worker form the list, who is older than 23 yo.
const ex3 = colaboradores.find(({ idade }) => idade > 23);

// ex4. Are all the workers are older than 18 yo?
const ex4 = colaboradores.every(({ idade }) => idade > 18);

// ex5. Is there any worker in intership?
const ex5 = colaboradores.some(({ cargo }) => cargo === "estagiario");

// ex6. Which is the sum of all workers ages combined.
const ex6 = colaboradores.reduce((acc, elem) => {
  return acc + elem.idade;
}, 0);

// ex. Create an array with the workers ordered by age.
const ex7 = colaboradores.sort((a, b) => a.idade - b.idade);
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// RESULTS PRINTOUT:
console.log(ex1);
console.log(ex2);
console.log(ex3);
console.log(ex4);
console.log(ex5);
console.log(ex6);
console.log(ex7);
