const name = 'meheid';
const age = 43;
const job = 'bekar';


//amar nam mehehid, amar boyos 43. ami bekar

const sentence = 'amar name \n' + name + 'amar boyos \n' + age + ' ami ekhon \n'+job;
// console.log(sentence);

// template literal/ template string/ dynamic string 
// to make it multiline we don't need to use \n

// rater we can use template string 

// ${ } call place holder

const sentence1 = `
amar name ${name}.
amar boyos ${age}.
ami ekhon ${job}`;
console.log(sentence1);