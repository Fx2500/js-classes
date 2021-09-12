let list = [    
    {nome: 'Juca', idade: 25 , cargo: 'front-end'},
    {nome: 'Márcia' , idade: 23 , cargo: 'back-end'},
    {nome: 'Victória', idade: 28 , cargo: 'designer' },
    {nome: 'Isabela', idade: 18 , cargo: 'comercial'},
    {nome: 'Aline', idade: 24, cargo: 'Legal'}
]
let temp = []

// função para o Desafio
function orderUsers(entry) {
    console.log(entry.length)
    for (let x = 0; x < entry.length; x++) {
        for (let i = 0; i < entry.length-1; i++) {
            if (entry[i].idade > entry[i+1].idade) {
                temp = entry[i]
                entry[i] = entry[i+1]
                entry[i+1] = temp
                } 
        }
    }
return entry}
    
console.log(orderUsers(list))