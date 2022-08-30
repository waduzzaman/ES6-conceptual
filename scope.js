// global scope
// local scope
// block scope

//global scope. We can assess the global variable from anywhere
// const x = 5;
// cons+ole.log(x);

//block scope. can be accessible from that block outsite of the block in not possible 

{
    // const y = 10;
    // console.log('inside block', y);
}

// console.log('outside block: ', y);

// global scope ke block e reassign kore then use kora jai
// let x = 5;
// {
//     x = 10;
//     // console.log('inside block', x);
// }

// // console.log('outside block: ', x);


//local scope

function add() {
    const total = 3 + 5;
    console.log('inside function', total);

}

add();

console.log('outside scope', total);// cannot access outside of the local scope

