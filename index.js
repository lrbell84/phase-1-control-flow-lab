function scuberGreetingForFeet(distance){
  if (distance <= 400){
    return 'This one is on me!'
  } else if (distance <= 2499) {
    return 'I will gladly take your thirty bucks.'
  }  else if (distance >= 2500) {
      return 'No can do.'
  }
}

function ternaryCheckCity(city){
  
  return city === "NYC" ? "Ok, sounds good." : "No go."; // Write your code here!
}

function switchOnCharmFromTip(money){
  switch (money){
    case 'generous':
      return "Thank you so much."
    case 'not as generous':
      return "Thank you."
    default:
      return "Bye."
      
  }
}