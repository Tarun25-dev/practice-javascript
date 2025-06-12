 // finding length of an array

let arr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
console.log(arr.length); //26

//using .map() returns values from array one by one by making some changes through function
//it doesnt make any effect on original array
//n is a temperary variable to work function properly
//function we for an event occur by map method

let names= ['tarun','mahesh','praveen','lokesh'];
console.log(names.map(n => n+' kumar'));  //['tarun kumar', 'mahesh kumar', 'praveen kumar', 'lokesh kumar']
console.log(names); //['tarun', 'mahesh', 'praveen', 'lokesh']

//we also use return to take a value out of a function

let name = names.map(n=>{ return `my name is ${n}`});
console.log(name); //['my name is tarun', 'my name is mahesh', 'my name is praveen', 'my name is lokesh']

//foreach() it doesnt reurn any value like map()
//item variable takes value from array one by one so thats why i write item.product or item.discount it shows current value in item variable

let sales = [{product :'soaps',discount :20},
{product :'thooth-pastes',discount : 21},
{product:'drinks',discount : 30},
{product:'perfumes',discount:18}
];
sales.forEach(item =>{
    console.log(`product name is : ${item.product} upto ${item.discount}% discount`)
});
/* product name is : soaps upto 20% discount
   product name is : thooth-pastes upto 21% discount
   product name is : drinks upto 30% discount
   product name is : perfumes upto 18% discount
*/

//filter() using to get required details from array when condition is true then it gives 
//it doesnt effect on original array so thats why we need to take a new array to store
//population in millions and stats taken from 2025

let states = [{state:'andhra pradesh',population:53},
              {state:'telangana',population:38},
              {state:'karnataka',population:68},
              {state:'tamil nadu',population:77},
              {state:'kerala',population:36},
              {state:'madhya pradesh',population:86},
              {state:'maharastra',population:128}];
let array = states.filter(s => s.population>50);
console.log(array); //it displays in browser console but in vscode actually shows complex ojects like array objects like this [{…}, {…}, {…}, {…}, {…}]
console.log(array.map(s=>s.state)); //['andhra pradesh', 'karnataka', 'tamil nadu', 'madhya pradesh', 'maharastra']

//reduce() process each element in array and reduce it to a single value - like sum, avg, etc,..
//reduce((accumulator,currentvalue) => {return updated accumulator},initialvalue);

let indstates = [{state:'andhra pradesh',population:53},
                 {state:'telangana',population:38},
                 {state:'karnataka',population:68},
                 {state:'tamil nadu',population:77},
                 {state:'kerala',population:36},
                 {state:'madhya pradesh',population:86},
                 {state:'maharastra',population:128}];
let totalPopulation = indstates.reduce((total,currentState)=>{return total+currentState.population},0);
console.log('total population is : '+totalPopulation); //total population is : 486

//and also we held condition and after sum
//above 50million population also adding for total

let filterUpdatePopulation = indstates.filter(s=>s.population>50).reduce((total,currentState)=>{return total+currentState.population},0);
console.log(filterUpdatePopulation);

//the main diiference of filter and some is in some it returns boolean and in filter it returns a new array
//filter - checks every item even if it found
//some - checking for one item atleast to match if it match then stops the iteration

let teamGoals = [{team : 'india', goals:1678},
                {team :'argentenia', goals :1011},
                {team :'portugal',goals :1667}];
console.log(teamGoals.some(s=>s.goals>1500));  //true - stops at first value beacuse it is true
console.log(teamGoals.some(s=>s.goals>2000));  //false

//every() is opposite to some(), in every() all satisfies the condition its true otherwise false

let age = [{name:'tarun',age:22},
           {name:'kumar',age:23},
           {name:'nani',age:21}];
console.log(age.every(s=>s.age>18)); //true

let workersAge = [{name:'tarun',age:22},
                  {name:'kumar',age:23},
                  {name:'nani',age:21}];
console.log(age.every(s=>s.age>21)); //false - it stops the iteration where the first condition not satisfied false in mycase age21

//find() is same as some() but some() returns boolean but find returns the actual value
//if any value not satisfies the condition then deafult value is undefined

let playedMatches =[{name:'kohli',matches:223},
                    {name:'dhoni',matches:216},
                    {name:'sachin',matches:203},
                    {name:'rahul',matches:200}]
console.log(playedMatches.find(s=>s.matches>=200)); //{name: 'kohli', matches: 223} -beacuse first value is satisfied then they dont move to the next value just stops

//findIndex() also same as find but it returns the matching index value

let totalMatchesPlayed =[{name:'kohli',matches:223},
                         {name:'dhoni',matches:216},
                         {name:'sachin',matches:203},
                         {name:'rahul',matches:200}]
console.log(playedMatches.findIndex(s=>s.matches<=200)); // 3
