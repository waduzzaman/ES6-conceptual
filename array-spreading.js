const number = [1, 2, 4, 5, 6, 7, 8, 12];
const number2=[4, 5, 6, 7, 6]
// console.log(Math.max(1, 3, 4,4, 5, 5, 7, 89));
// console.log(Math.min(1, 3, 4,4, 5, 5, 7, 89));

// array spreading

//...number meaning it will take all the single element from the array and Math.max function will check which number is the maximum
// console.log(Math.max(...number));
// console.log(Math.min(...number));

// combine the two array using array spreading:

// const newArr = [...number, ...number2];
// console.log(newArr);

//we can also added other element before or after the array 
const newArr = [999, 203,...number, 5,64,64, 500,2,...number2, 44,77,88];
// console.log(newArr);

// de structuring array elements:
//get the first two elements from the number array.
// cons[a, b] = number;
// console.log(a, b);

// get the first two element of the number array in variable a, b and rest of the elements in the variable name rest

// and get the output.

// const [a, b, ...rest] = number;
// // console.log(a, b, rest);
// console.log(rest);


//copy two array:

// const a = [1, 2, 4, 5, 6,];
// const b = a;

// a.push(44);
// a.push(88);

// console.log('a: ', a);
// console.log('b: ', b);


const c = [1, 2, 3,];
const d = [...c];

// for (let item of c) {
//     d.push(item)
// }

d.push(88);
d.push(77);

console.log(d);





