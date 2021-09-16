// Given the following array: imprima no console somente o nome dos usuários maiores de idade.
let workers = [{name: 'Juca', idade: 17}, {name: 'Fabiane', idade: 23}, {name: 'Matheus', idade: 25}, {name: 'Jéssica', idade: 16}]

const [{name: nameA}, {name: nameB}] = workers.filter(worker => worker.idade >= 18)
console.log(nameA,',', nameB)

// 2 - Crie uma função que recebe qualquer número de argumentos e retorna um array com os argumentos somente pares.
const pairs = ((...list) =>
   list.filter(num => (num %2 === 0))
)
console.log(pairs(1,2,3,4,5,6,7,8))

// 3 - Refatore o seguinte algoritmo utilizando os conceitos estudados em aula:
const entrada = [
  { product: 'banana kg', price: 2.25 },
  { product: 'arroz 1kg', price: 6.48 },
  { product: 'pão francês kg', price: 12 },
  { product: 'café solúvel 50g', price: 3.59 },
]
const saida = entrada.reduce((acc, produto) => {
  acc[produto.product] = produto.price
  return acc
}, {})
 
console.log(saida)

// const saida = entrada.reduce((acc, produto) => {
//   acc[produto.product] = produto.price
//   return acc
// }, {})
 
// console.log(saida)