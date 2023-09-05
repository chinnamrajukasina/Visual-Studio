let n=1
if (n%2 == 0)
    console.log('even')
else
    console.log('odd')

let a=1
console.log('intial value of a is:',a)
console.log('at post increment value of a:',a++)
console.log('current value after post increment',a)
console.log('at preincrement value of a is:', ++a)
{

{let i=1
while(i<5)
    console.log('preincrement',++i)
}
console.log()
{let i=1
while(i<5)
    console.log('preincrement',i++)
}
}
console.log(square(4)); // 16
function square(x) {
    return x * x;
}



const double = function (n) {
    return n * 2;
};

const numbers = [1, 2, 3, 4];
const doubledNumbers = numbers.map(double); // [2, 4, 6, 8]
