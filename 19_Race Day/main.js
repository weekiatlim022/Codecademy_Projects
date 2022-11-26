let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = false;
const runnerAge = 20;

if (registeredEarly && runnerAge > 18){
  raceNumber += 1000;
}

if(registeredEarly && runnerAge > 18){
  console.log( `You will race at 9.30am, and your race number is ${raceNumber}`);
}else if (!registeredEarly && runnerAge > 18){
  console.log( `Late adults run at 11.00am, and your race number is ${raceNumber}`);
}else if (runnerAge < 18){
  console.log( `Youth registrants run at 12:30 pm, and your race number is ${raceNumber}`);
}else{
  console.log('See the registration desk.');
}