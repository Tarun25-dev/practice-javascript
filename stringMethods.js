//adding two strings using concat()
/*
let call1='tarun';
let call2='kumar';
let call=call1.concat(call2);
console.log(call);
*/

//using length method in strings
/*
let name ='tharun kumar';
let size =name.length;
console.log(size);
*/

//using charAt(index) or at(index) we find the character by giving specific index value
/*
let college ='santhiram engineering college';
let value=college.charAt(3);
let value1=college.at(28);
console.log(value);
console.log(value1);
*/

//by using includes(substring) we find out a specific substring in a string easily
/*
let course ='javascript ';
console.log(course.includes('script '));
*/

//indexOf(substring) returns index value where it exists firstly by checking left to right, if substring doesn't exists then it returns -1 
/*
const language='telugu';
console.log(language.indexOf('u')); //3
*/

//lastIndexOf(substring) returns index value where it exists firstly by checking right to left, if substring doesn't exists then it returns -1 
/*
const language='telugu';
console.log(language.lastIndexOf('u')); //5
*/

//slice(index=starting index,index=ending index) or slice(index=only starting value) which returns a substring with condition from start to end index or start to total index
/*
const country ='india';
console.log(country.slice(1,5)); //ndia
// start from 1 and end before 5
console.log(country.slice(0)); //india
*/

//same as slice
/*
const district='nandyal';
console.log(district.substring(1,5)); //andy
console.log(district.substring(0)); //nandyal
*/

//replace method applicable for only first occurence
/*
const nationality ='india';
console.log(nationality.replace('a','an')); //indian
const name ='nani nani'; //first occurence only second nani can't replace
console.log(name.replace('nani','tarun')); //tarun nani
*/

//replaceAll() same as replace but here it replace all occurence in the string
/*
const fruits='apple;banana;orange;grapes';
console.log(fruits.replaceAll(';',','));  //apple,banana,orange,grapes
const comment ='this is stupid and dumb';
const clean=comment.replaceAll('stupid','st****').replaceAll('dumb','d***');
console.log(clean); //this is st**** and d***
*/

//split method breaks strings into character and breaks into words based on space with arrays and we can apply those array proprties also
/*
const intrest ='now i am working with javascript';
const seperate =intrest.split(); //['now i am working with javascript']
console.log(seperate);

const seperate1=intrest.split(' '); //['now', 'i', 'am', 'working', 'with', 'javascript']
console.log(seperate1);

const fruits ='mango,apple,banana,grapes';
console.log(fruits.split(',')); //['mango', 'apple', 'banana', 'grapes']
console.log(fruits.split('a')); //['ma', 'go,apple,ba', 'a', 'a,grapes']
//if i write any symbol or letter or word that existing in the string into the split() it replaces a = , inside[array] 

*/

//trim method it removes all whitespaces which are at staring and ending of the string
/*
const ocean ='   indian ocean   ';
console.log(ocean.length); //18
console.log(ocean.trim()); //indian ocean
console.log(ocean.trim().length); //12

const name="     ";
if(name.trim() === ''){
  console.log('your name is empty')
}
*/

//tolocaleuppercase or lowercase follows local english rules like us english and turkiye english some difference
/*
console.log(navigator.language); //we can find the locale lang which we deafault browser lang or node.js deafult lang
const sport ='cricket';
console.log(sport.toLocaleUpperCase());
const game ='CRICKET';
console.log(sport.toLocaleLowerCase());
*/

//same as toloacleuppercase or lowercase but this case is enough for english language
/*
const movie ='life of pie';
console.log(movie.toLowerCase()); //doesn't change prints same beacuse the given string is all in lowercase
console.log(movie.toUpperCase()); //LIFE OF PIE
*/

//startswith(searchstring,position) searchstring the text you want to check at starting, position(optional) refers where searching starts from deafult is 0 

const drink ='mineral';
console.log(drink.startsWith('min')); //true
console.log(drink.startsWith('ineral')); //false
//if we know the index value not exact number may preditable we can search like the below
console.log(drink.startsWith('ineral',1)); //true
console.log(drink.endsWith('ral')); //true
console.log(drink.startsWith('min',-5)); //true

const phoneNumber = '+91-9000000321';
if(phoneNumber.startsWith('+91')){
  console.log('indian phone number');
}
