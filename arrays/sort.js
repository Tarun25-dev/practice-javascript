//sorting the strings as per dictionary order
//sort() will change the original array

let alpha = ['a','aa','ba','bb','da','ab','c','ca','dd'];
alpha.sort();
console.log(alpha); //['a', 'aa', 'ab', 'ba', 'bb', 'c', 'ca', 'da', 'dd']

//if the array contains alphanumeric then it first sorting the numbers and next strings to be sort
//first preference - numbers
//second preference - strings

let alphanumeric = [1,'z',3,'i',7,'w',2];
console.log(alphanumeric.sort()); //[1, 2, 3, 7, 'i', 'w', 'z']


//wrong way to sort the numbers like this beacuse it assumes as a string

let numbers = [10,9,8,7,6,5,4,3,2,1];
console.log(numbers.sort()); //[1, 10, 2, 3, 4, 5, 6, 7, 8, 9]

//correct way to sort the numbers

let num = [1,7,45,18,93,77,9,63,33];
//ascending order
//in sort method already code written
//result is graterthan zero(positive) then both swap otherwise doesnt change order
console.log(num.sort((a,b) => a - b)); //[1, 7, 9, 18, 33, 45, 63, 77, 93]

//descending order
//result is lessthan zero(negative) then both swap otherwise doesnt change order
console.log(num.sort((a,b)=>b-a));

//sorting objects in both orders

let student = [{name:'tharun kumar',marks:100,grade:'A+'},
               {name:'gopi',marks:99,grade:'B'},
               {name:'sai',marks:98,grade:'A'},
               {name:'hari',marks:99,grade:'A'},
               {name:'teja',marks:97,grade:'A'},
               {name:'farru',marks:99,grade:'A'},
               {name:'abhi',marks:99,grade:'A'},
               {name:'surya',marks:96,grade:'A'},
               {name:'suri',marks:96,grade:'A'},
               {name:'maxwell',marks:19,grade:'FAIL'},
               {name:'pant',marks:29,grade:'FAIL'},
               {name:'hetmayer',marks:20,grade:'FAIL'}];
console.log(student.sort((a,b)=>a.marks-b.marks)); //sorting in ascending order based on marks
console.log(student.sort((a,b)=>b.marks-a.marks)); //sorting in descending order based on marks

//reversing the array
//reverse method will have an effect on the original array

let arr = [0,1,2,3,4,5,6,7,8,9];
console.log(arr.reverse()); //[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]

//join() makes each element in array into a string with custom seperator to dive those elements
//join() works only on arrays not objects
//doesnt effect on original array
//default seperator is "comma(,)"

let temple = ['tirumala','tirupati','devasthanam'];
console.log(temple.join(' ')); //tirumala tirupati devasthanam

let digits = [1,2,3,4];
console.log(digits.join()); //1,2,3,4 - here default seperator

//adding two arrays using concat()
//doesnt effect on original array

let call1 = ['tharun','kumar'];
let call2 = ['kodiganti'];
let call3 = [25];
console.log(call1.concat(call2)); // ['tharun', 'kumar', 'kodiganti']
console.log(call2.concat(call1)); // ['kodiganti', 'tharun', 'kumar']
console.log(call1.concat(call3)); // ['tharun', 'kumar', 25]

//flat() makes an array flaten as we needed simply removing nested arrays 
//flat() consists one property called depth and it defines how many nested arrays to be flatten default depth value is one
//if we want total flaten the depth value should be infinity
//flat() doesnt make changes on original array

let order = [1,2,[3,4,[5,6,[7,8,[9,0]]]]];
console.log(order.flat()); //[1,2,3,4,[5,6[7,8,[9,0]]]]
console.log(order.flat(2)); //[1,2,3,4,5,6[7,8,[9,0]]]
console.log(order.flat(Infinity)); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

//fill method is used for to fill the elements in array whether it be a some part or total array
//fill(fillvalue,starting index,ending index)
//fill() can make effect on original array
//default fill value is undefined

let points = [7,7,4,5,1,8];
console.log(points.fill(1)); // [1, 1, 1, 1, 1, 1]
console.log(points.fill(5,2)); // [1, 1, 5, 5, 5, 5]
console.log(points.fill(1,0,2)); // [1, 1, 5, 5, 5, 5]

//empty array filling with zeros

let zeros = new Array(5).fill(0);
console.log(zeros) //[0, 0, 0, 0, 0]

//copywithin() is used for coping part of the array to another location in the same array
//originl array is changed ,it doesnt delete elements it overwritten
//copyWithIn (select index value, copy element at index (starting), coping elemnts upto this index(ending))

let copyPartArray = [1,2,3,4,5,0];
console.log(copyPartArray.copyWithin(0,5)); // [0, 2, 3, 4, 5, 0] this is the original array now
console.log(copyPartArray.copyWithin(1,3,5)); // [0, 4, 5, 4, 5, 0]

//if array elements doesnt overwrite then use slice() or splice()

