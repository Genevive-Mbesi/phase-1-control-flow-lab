function scuberGreetingForFeet(feet){
  if(feet <= 400){
  return('This one is on me!');
  }
  else if (feet > 2000 && feet <= 2500){
  return('I will gladly take your thirty bucks.');
  }
  else {
    return('No can do.')
  }
  
}
feet(199)

function ternaryCheckCity(city){
  let result = (city == "NYC") ? "Ok, sounds good." : "No go.";
 return(result);
}

function switchOnCharmFromTip(tip){
switch (tip) {
  case "generous":
      return "Thank you so much.";
      
      break;
  case "not as generous":
    return "Thank you.";
    break;

  default :
    return "Bye.";
      break;
}
}