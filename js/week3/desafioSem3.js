////////////////////////////////////////////////////////////////////////////////
//ARRAY LIST
////////////////////////////////////////////////////////////////////////////////
// Array to be used on 1x exercises:
const colaboradores = [
  { name: "Juca", idade: 23, cargo: "front-end" },
  { name: "Márcia", idade: 21, cargo: "back-end" },
  { name: "Vitória", idade: 26, cargo: "designer" },
  { name: "Fernando", idade: 17, cargo: "estagiario" },
  { name: "Fabiane", idade: 23, cargo: "back-end" },
  { name: "Jéssica", idade: 21, cargo: "front-end" },
];
////////////////////////////////////////////////////////////////////////////////
//SUPPLEMENTARY FUNCTIONS CREATED TO ASSIST ON THE EXERCISES.
////////////////////////////////////////////////////////////////////////////////
// Splits fields of work for reference:
const splitPerField = colaboradores.map(el => {
  return el.cargo;
});
// Order of fields of work given on the exercise list
const orderOfFields = [
  { cargo: "estagiario", order: 0 },
  { cargo: "front-end", order: 1 },
  { cargo: "back-end", order: 2 },
  { cargo: "designer", order: 3 },
  { estagiario: 10 },
];
//Function created to assist on ordering accordingly to the above:
function exC(el) {
  let result = orderOfFields.find(({ cargo }) => cargo === el);
  return result.order;
}
////////////////////////////////////////////////////////////////////////////////
// Array to be used on 2x exercises:
const installments = [
  { installment_number: 1, value: 123.45, status: "Pago" },
  { installment_number: 2, value: 139.88, status: "Pago" },
  { installment_number: 3, value: 123.45, status: "Pago" },
  { installment_number: 4, value: 182.37, status: "Aberto" },
  { installment_number: 5, value: 133.93, status: "Aberto" },
];

////////////////////////////////////////////////////////////////////////////////
// EXERCISES
////////////////////////////////////////////////////////////////////////////////
// 1.
//1a. Create and print an object with the quantity of persons working in each field.
const ammountPerField = splitPerField.reduce(function (acc, elem) {
  acc[elem] = (acc[elem] || 0) + 1;
  return acc;
}, {});

// 1b. Print an array with all workers sorted by age from older to younger.
const orderByAge = colaboradores.sort((a, b) => b.idade - a.idade);

// 1c. print an array of workers sorted by given order: ("estagiario", "front-end", "back-end", "designer"),
const orderByField = colaboradores.sort((a, b) => exC(a.cargo) - exC(b.cargo));

// 1d. print an array of workers ordered by age and in case of draw, ordered by function as c.
const orderWithTie = colaboradores.sort((a, b) => {
  if (b.idade === a.idade) {
    return exC(a.cargo) - exC(b.cargo);
  } else return a.idade - b.idade;
});
//------------------------------------------------------------------------------
// 2.
// 2a. Print out the sum of all installments:
const totalValue = installments.reduce((acc, inst) => {
  return acc + inst.value;
}, 0).toFixed(2);

// 2b.Create an array that splits paid and due installments in the following format:
//{total_paid: xx, total_open: xx}
const instInfo = installments.reduce(
  (acc, inst) => {
    if (inst.status === "Pago") {
      acc.total_paid += inst.value;
    } else if (inst.status === "Aberto") {
      acc.total_open += inst.value;
    }
    return acc;
  },
  { total_paid: 0, total_open: 0 }
);

// c. print an array of installments showing all in a decreasing order by value.
const orderByValue = installments.sort((a, b) => b.value - a.value);

// d. print an array of installments ordered by value and use installment number as tie-breaker.
const orderedInsts = installments.sort((a, b) => {
  if (a.value === b.value) {
    return a.installment_number - b.installment_number;
  } else return a.value - b.value;
});

////////////////////////////////////////////////////////////////////////////////
//RESULTS
////////////////////////////////////////////////////////////////////////////////
console.log('Ex 1a. \n', ammountPerField,);
console.log('\nEx 1b. \n', orderByAge);
console.log('\nEx 1c. \n', orderByField);
console.log('\nEx 1d. \n', orderWithTie);
console.log('\nEx 2a. \n', `$${totalValue}`);
console.log('\nEx 2b. \n', instInfo);
console.log('\nEx 2c. \n', orderByValue);
console.log('\nEx 2d. \n', orderedInsts);
