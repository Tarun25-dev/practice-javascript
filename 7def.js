//convert celsius to fahrenheit

function convertToFahrenheit(cDegree){
let fDegree=(cDegree*9/5)+32;
console.log(`${cDegree}^C to ${fDegree}^F`)
}
convertToFahrenheit(25);


//convert fahrenheit to celsius

function convertToCelsius(fDegree){
let cDegree=(fDegree-32)*5/9;
console.log(`${fDegree}^F to ${cDegree}^C`)
}
convertToCelsius(86);
 

//convert both celsius to fahrenheit or fahrenheit to celsius
function convertToF(degree){
return (degree*9/5)+32;
}
function convertToC(degree){
return (degree-32)*5/9;
}
function convertTemperature(degree,unit){
    if(unit === 'C'){
        console.log('This coversion is : celsius to fahrenheit');
        let result = convertToF(degree);
        return result+'F';
    }
    else if(unit === 'F'){
        console.log('This coversion is : fahrenheit to celsius');
        result = convertToC(degree);
        return result+'C';
    }
    else{
        console.log('wrong unit entered');
    }
}
console.log(convertTemperature(50,'F'));
console.log(convertTemperature(87,'C'));