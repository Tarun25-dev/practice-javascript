let hour = prompt("Enter hour : ");
let name = '! Mr.Tarun kumar';
if(hour >=1 && hour <=24){
  if(hour >=6 && hour <12){
    console.log('GOOD MORNING 🌄 '+name);
  }
  else if(hour >=12 && hour <16){
      console.log('GOOD AFTERNOON 🌞 '+name);
  }
  else if(hour >=16 && hour <20){
      
  }
  else{
      console.log('GOOD NIGHT 🌛 '+name);
  }
}
else{
    console.log('A day has only 24 hours only');
}