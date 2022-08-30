const number = [1, 2, 4, 5, 6, 7, 8, 12];

const names = ['rahim', 'karim', 'jamal', 'kamal', 'rubel', 'tutul']

// before es6

for (let item of number) {
    // console.log(item);
}

//item is the parameter of map function
number.map(name => console.log(name*5))

// parameter name can be any like data, rahim, whatever you want
// names.forEach(data => console.log(data))
const a= number.map(name => name * 5)
const b = number.forEach(name => name * 5)

console.log('A: ', a);
console.log('B: ', b);
