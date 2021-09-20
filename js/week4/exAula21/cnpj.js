// Arrays multiplicadores para checagem/criação dos últimos dois digitos.
const mult1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2, 0, 0];
const mult2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2, 0];
// constante que armazena CNPJ após remoção de simbolos e outros não-digitos
const str = 0

// Limpa  o numero do CNPJ (str)
const clearStr = (str) => 
 new Promise((resolve, reject) => { 
    resolve(str = str.replace(/\D/g, ""))
})

// Checa os ultimos dois digitos contra o algoritimo validador do CNPJ informado (entry)
async function verifierChk(entry) {
  try {
    clean = await clearStr(entry) 
    let dig1 = mult1.reduce((acc, elem, i) => {
    return acc + (elem * clean[i]);
    },0)
    let dig2 = mult2.reduce((acc, elem, i) => {
    return acc + (elem * clean[i])
    },0);
    dig1 = (dig1 % 11) < 2 ? 0 : (11 - (dig1 % 11)) // calculo do primeiro digito
    dig2 = (dig2 % 11) < 2 ? 0 : (11 - (dig2 % 11)) // calculo do segundo digito
    return (dig1 == clean[12] && dig2 == clean[13]) // cruzamento entre os calculos e o CNPJ
  }
  catch (e) {
    console.log(e.message)
  }
}

// Função de chamada para a checagem do CNPJ (number)
async function isValid (number) {
  try {
    checker = await verifierChk(number)
    checker  ? console.log("CNPJ válido!") : console.log("CNPJ invalido")
  }
  catch (e) {
    console.log(e.message)
  }
}

isValid("45.997.418/0001-52")

