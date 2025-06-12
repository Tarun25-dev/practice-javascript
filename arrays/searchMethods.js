// includes() - checks whether your searching element is in array or not
//array objects are not properly work with includes() go with find() or some() instead of includes

let persons = ['tarun','TARUN','kumar','KUMAR'];
console.log(persons.includes('tarun')); //true

//indexxOf() - returns the first existing index value of specified element searching
//searches from left to right
//incase doesnt match with any one then it displays deafult value '-1'

let animals = ['lion','tiger','leapord','lion','bear','rhino','aligator'];
console.log(animals.indexOf('lion')); //0

//lastIndexOf() same as index of one main diffrence is it starts to find the element from right to left (last to first) and returns index value
//if there is no element found or match it returns 1-1'

let snacks = ['fruits','chat','ice cream','kfc','fruits','fast foods','vegetables',null];
console.log(snacks.lastIndexOf('fruits')); //4
