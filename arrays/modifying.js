//change an element through index in an array
//index value already exists in original array then it replaces otherwise it adds 
let name = ['tarun','kumar','nandyal'];
name[2]='srec'; //replace nandyal with srec
name[3]='nandyal'; //adding nandyal to the index 3
console.log(name); //['tarun', 'kumar', 'srec', 'nandyal']

//add elements at the end 
let size = [0,1,2,3,4,5];
size.push(6);
console.log(size); //[0, 1, 2, 3, 4, 5, 6]

//add elements at the beginning
let weight =[55,67,76,76,45];
weight.unshift(54);
console.log(weight); //[54, 55, 67, 76, 76, 45]

//delete elements at the end
let speed = [100,97,112,88,55,12];
speed.pop();
console.log(speed); //[100, 97, 112, 88, 55]

//delete elements at the beginning
let temperature = [38,35,32,40,41,30];
temperature.shift();
console.log(temperature); //[35, 32, 40, 41, 30]

//slice method is used for to make a copy of array 
//in this two properties 
// first - starting index (default 0)
//second - ending index (default is arraylength)

let exam = [1,2,3,4,5,6];
console.log(exam.slice(2,5));
 
//splice consists of three proprties
//first property- represents index value to be select
//second property- represents no.of elements delete from selected index and if it is ' one ' replace value and may increase morethan one then it deletes the values depending on you specified index value
//third proerty- represents the value to be replace or add 

//adding element at specific index

let distance = [20,34,56,74,12,43,56,66];
distance.splice(4,0,33);
console.log(distance); //[20, 34, 56, 74, 33, 12, 43, 56, 66]

//replace element at specific index
let wish = ['namaste','hi','chao','hey'];
wish.splice(3,1,'hello');
console.log(wish); //['namaste', 'hi', 'chao', 'hello']

//delete an element at specified index
let weeks = [1,2,3,4,5,6];
weeks.splice(5,1); //why one means beacuse we select index value is five then it automatically be the first value from specified index
console.log(weeks); // [1, 2, 3, 4, 5]
