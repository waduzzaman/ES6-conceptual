const number = [1, 2, 4, 5, 6, 7, 8, 12];

// get the number which is greater than 5. filter will give all the numbers that meet the condition.

// const result = number.filter(item => item > 5);
// console.log(result);

//find the numbers from the number array that are greater than five an divide by 2
const result = number.filter(item => item > 5 && item%2===0);
console.log(result);
2 == '2'// true . it will only check the value 
2==='2'// false. it will check the value as well as data type 
