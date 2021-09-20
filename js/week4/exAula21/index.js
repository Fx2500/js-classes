const users = [
  {
    nome: 'Roberto Bruno Noah Ramos',
    data_nasc: '04/01/1953',
  },
  {
    nome: 'Manoel Bento Davi Bernardes',
    data_nasc: '16/11/2000',
  },
  {
    nome: 'Vanessa Catarina Isabel Moura',
    data_nasc: '03/03/1971',
  },
  {
    nome: 'Renan Anderson Raul de Paula',
    data_nasc: '10/01/1993',
  },
  {
    nome: 'Vicente Geraldo Thales Brito',
    data_nasc: '10/09/2003',
  },
  {
    nome: 'Isabelly Allana Freitas',
    data_nasc: '21/11/1972',
  },
  {
    nome: 'Melissa Bianca Jéssica Freitas',
    data_nasc: '14/09/1979',
  },
  {
    nome: 'César Thiago Bento Moreira',
    data_nasc: '25/10/1951',
  },
  {
    nome: 'João Benício Peixoto',
    data_nasc: '25/10/1961',
  }
]
////////////////////////////////////////////////////////////////////////////////


const [{data_nasc}] = users

const func = (...arr) => {
  return arr
}

console.log(data_nasc)
console.log(func(users))



const orderByAge = users.sort((a, b) => a.data_nasc - b.data_nasc);

console.log(orderByAge)