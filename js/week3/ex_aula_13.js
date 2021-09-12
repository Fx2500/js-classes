///Ex. 1
let imprime = ((a) => console.log(a))

imprime("Hello World")

///Ex. 2
const executeOnArray = (function(array, func){
    for (let i = 0; i < array.length; i++) func(array[i])})

    let list = [1 ,2, 3, 4]
executeOnArray(list, imprime)

///Ex. 3
function calculate(str,x,y) {
    if (str === 'soma') {return x + y}
    else if (str === 'subtrai') {return x - y}
    else if (str === 'divide') {return x / y}
    else if (str === 'multiplica') {return x * y}
}

console.log(calculate('soma',2, 3))
