let user = {name: 'Marilia', age: 26, job: "Dev"}
let users = [{name: 'Marilia', age: 26, job: "Dev"},{name: 'Juca', age: 21, job: "RH"}, {name: 'Flavia', age: 30, job: "Financeiro"}, {name: 'Sérgio', age: 24, job: "Dev"}]

///Ex. 1
let res = []
console.log(user.name)
console.log(user.age)
console.log(user.job)

///Ex. 2
for (let i = 0; i < users.length; i++ ){
    if (users.job === "Dev" ? res.push(`${users[i].name} é dev.`):res.push(`${users[i].name} não é dev.`));}

console.log(res.join(' '))


