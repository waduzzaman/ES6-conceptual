// // arrow function:

// function run() {
//     console.log('hello world');


// }

// const add = () => console.log('hello world');

// run();
// add();

function run(x) {
    return x*2;


}

// const add = (x) => { return x * 2 };
// we can remove return keyword and the curly braces
// const add = (x) => x*2;

// if we pass only ONE parameter then we don't need to bracket for that parameter . also if we write muliline code then we have to use return keyword 
const add = x => x*2;
const add2 = (x, y) => {
    return x + y;
};

// console.log(run(2));
console.log(add2(2,3));


