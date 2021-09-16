//1 - Create 3 promises with the following setTimeouts : 1 sec 2 sec 3sec
const sec1 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log("Resolved 1"));
    }, 1000);
  });

const sec2 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log("Resolved 2"));
    }, 2000);
  });

const sec3 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log("Resolved 3"));
    }, 3000);
  });

// 2 - create an async with promise.all with all the above promises.
const checkSecs = async () => {
  const res = await Promise.all([sec1(), sec2(), sec3()]);
};

// 3 - create an async with promise.race with all the above promises, this should have error treatment and finally.
const secsRace = async () => {
  const res = await Promise.race([sec1(), sec2(), sec3()]);
};

//4. (discord) Given the following const create a call function that prints its result.
const consultaCnpj = cnpj => {
  const timer = (Math.floor(Math.random() * 4) + 1) * 500;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const CNPJ_LENGTH = 14;
      const sanitazedCnpj = cnpj.replace(/\D/g, ""); // Remove todos os símbolos não numéricos
      sanitazedCnpj.length === CNPJ_LENGTH
        ? resolve(`${cnpj} é um CNPJ válido`)
        : reject(`${cnpj} não é um CNPJ válido`);
    }, timer);
  });
};
const checker = async function entry(num) {
  try {
    const res = await consultaCnpj(num);
    console.log(res);
  } catch (err) {
    console.log(err.message);
  }
};
//////////////////////////////////////////////////////////////
// RESULTS
//////////////////////////////////////////////////////////////
checkSecs();
secsRace();
console.log(checker("87.934.675/0001-96"));
