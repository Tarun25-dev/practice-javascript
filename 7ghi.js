function convertLength(length, from, to){
    //checks if first para is miles and second is km then this loop is exexuted
if(from === 'miles' && to === 'km'){
    km=length*1.6;
    console.log(`${length} miles is equals to ${km} km`);
}
//checks if first para is km and second para is mile then this loop is executed
else if(from === 'km' && to === 'miles'){
    mile=length/1.6;
    console.log(`${length} km is equals to ${mile} miles`);
}
//checks is first para is km and second para is feets then this loop is executed
else if(from ==='km' && to ==='ft'){
    ft=length*3281;
    console.log(`${length} km is equals to ${ft} ft`);
}
//checks if first para is mile and second para is feet then this loop is executed
else if(from ==='mile' && to ==='ft'){
    ft=length*5280;
    console.log(`${length} mile is equals to ${ft} ft`);
}
else{
    console.log('invalid unit')
}

}
//assigns values to the parameter while calling the function
convertLength(1,'miles','km');
convertLength(1,'km','miles');
convertLength(1,'km','ft');
convertLength(1,'mile','ft');
convertLength(1,'km','m');
//invalid beacuse i did't write code for 'm'(meter)



