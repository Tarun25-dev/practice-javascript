//creating an array

let fruits = ['mango','apple','banana'];
console.log(fruits); //['mango','apple','banana']

let names = new Array('tarun','kumar');
console.log(names); //['tarun', 'kumar']

//this creates an array starting with two empty slots not null or undefined 
//after it adds values so thats why array shows us dots in place of empty array 
let arrname = new Array(2);
arrname.push('tarun');
arrname.push('tarun');
arrname.push('tarun');
console.log(arrname);  //[…, 'tarun', 'tarun', 'tarun']

//if also we need to use that empty array we use a method called fill

let arr = new Array(4).fill('tarun');
console.log(arr); // ['tarun', 'tarun', 'tarun', 'tarun']

//empty array without any size indicate

let empty =[];
empty.push('tarun','kumar');
empty.push('nani');
console.log(empty); //['tarun', 'kumar', 'nani']

//creating an array with different datatypes

let user = [1,'tarun',2.44,null,undefined];
console.log(user); //[1, 'tarun', 2.44, null, undefined]

//setting an array to an empty array
let prices = [1,2,3,4,5];
console.log(prices); //[1, 2, 3, 4, 5]
prices =[];
console.log(prices); //[]
