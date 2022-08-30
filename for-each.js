const number = [1, 2, 4, 5, 6, 7, 8, 12];

const names = ['rahim', 'karim', 'jamal', 'kamal', 'rubel', 'tutul']

// before es6

for (let item of number) {
    // console.log(item);
}

//es 6 forEach

//item is the parameter of forEach function
number.forEach(item => console.log(item))
// parameter name can be any like data, rahim, whatever you want 
names.forEach(data=>console.log(data))