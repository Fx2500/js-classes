//Ex.1
let myUser = 
{name: 'Douglas Holz', age: 40, email:'d.holz@live.com'};

console.log(myUser);

//Ex.2
let array = ['a', 'b', 'c', 'd'];
console.log(array[2]);

//Ex.3
let dev =
{name: "Juca", 
projects: [{name: 'Projeto 1', start: '01/02/2021'},
{name: 'Projeto 2', start: '03/03/2021'}]};

console.log(dev.name)
console.log(dev.projects[1])
console.log(dev.projects[0].name)

//Ex.4
let array2 = [1, -22, 3, 4, -5]
aux = []
for (let i = 0; i < array2.length; i++)
    aux.push(array2[i] * 10)
console.log(aux)