//1.
function checkSignal(num)
{
 if (num < 0) 
{console.log(`${num} é negativo.`);}
else
{console.log(`${num} é positivo.`);}
}

checkSignal(-99)
checkSignal(42)

//2. 
function double(num) {return num * 2}

console.log(double(5))

//3. 
function calculate(str,x,y) {
    if (str == 'soma') {return x + y}
    else if (str == 'subtrai') {return x - y}
    else if (str == 'divide') {return x / y}
    else {return x * y}
} 
console.log(calculate('soma', 3, 5))
console.log(calculate('subtrai', 5, 1))
console.log(calculate('divide', 4, 2))
console.log(calculate('multiplica', 2 , 3))